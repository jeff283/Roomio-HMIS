// CSS
import "../PagesGlobal.css";
import "../AdminPortalRooms/AdminPortalRooms.css";

// COMPONENTS
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import TableDisplayRoom from "../../components/TableDisplay/TableDisplayRoom";
import TableAddRoomForm from "../../components/TableAddForm/TableAddRoomForm";

// INTERFACES
import Room from "../../Interfaces/Room";

// CONFIGS
import { db } from "../../config/firebase";

// LIBRARY
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const AdminPortalRooms = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [isRoomUpdate, setRoomUpdate] = useState(false);
  const [room, setRoom] = useState<Room>({} as Room);
  const [roomList, setRoomList] = useState<Room[]>({} as Room[]);

  const handleListDblClick = (room: Room) => {
    setRoom(room);
    setFormSubmit(true);
    setRoomUpdate(true);
    // console.log(room);
  };

  const roomCollectionRef = collection(db, "Rooms");

  const getRoomList = () => {
    getDocs(roomCollectionRef)
      .then((data) => {
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRoomList(filterData as Room[]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createRoom = (room: Room) => {
    addDoc(roomCollectionRef, room)
      .then((docRef) => {
        console.log(docRef.id);
        getRoomList();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateRoom = (room: Room) => {
    const updatedRoom = {
      roomType: room.roomType,
      capacity: room.capacity,
      size: room.size,
      bedType: room.bedType,
      gender: room.gender,
      price: room.price,
    };
    if (room.id) {
      const roomDoc = doc(db, "Rooms", room.id);
      delete room.id;
      updateDoc(roomDoc, updatedRoom)
        .then(() => {
          getRoomList();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("No Room ID was provided");
    }
  };

  // DELETE ROOM
  // const deleteRoom = (room: Room) => {
  //   if (room.id) {
  //     const roomDoc = doc(db, "Rooms", room.id);
  //     deleteDoc(roomDoc)
  //       .then(() => {
  //         getRoomList();
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     console.error("No Room ID was provided");
  //   }
  // };

  useEffect(() => {
    getRoomList();
  }, []);

  return (
    <>
      <div className="admin-portal-list-body">
        <div className="d-flex admin-portal-list-body-content">
          <AdminPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Rooms" pageUser="User" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add Room
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayRoom
                // roomsData={roomData}
                roomsData={roomList}
                onListDblClick={(room) => handleListDblClick(room)}
              />
            </div>
          </div>
        </div>
        {isFormSubmit && (
          <div className="admin-portal-form">
            <TableAddRoomForm
              onOffClick={() => {
                setFormSubmit(false);
                setRoom({} as Room);
              }}
              onFormSubmit={(room: Room) => {
                setFormSubmit(false);
                setRoom({} as Room);
                // setRoom(room);
                isRoomUpdate ? updateRoom(room) : createRoom(room);
                setRoomUpdate(false);

                // createRoom(room);
              }}
              roomData={room}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPortalRooms;
