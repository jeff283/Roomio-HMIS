import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

import { MdOutlineCheckCircle } from "react-icons/md";

import "./StudentPortalRooms.css";
import "../PagesGlobal.css";
import PaymentPopUp from "../../components/PaymentPopUp/PaymentPopUp";
import { useEffect, useState } from "react";
import StudentPortalSidebar from "../../components/StudentPortalSidebar/StudentPortalSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import User from "../../Interfaces/User";
import Room from "../../Interfaces/Room";
import { useNavigate } from "react-router-dom";

const StudentPortalRooms = () => {
  const [pay, setPay] = useState(false);
  const [clickRoomType, setClickRoomType] = useState("");
  const [fetchedUser, setfetchedUser] = useState<User>({} as User);
  const [roomList, setRoomList] = useState<Room[]>({} as Room[]);
  const navigate = useNavigate();

  const roomCollectionRef = collection(db, "Rooms");
  // const userCollectionRef = collection(db, "Users");

  const updateUser = (user: User) => {
    const updatedUser = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      gender: user.gender,
      isAdmin: user.isAdmin,
      admNo: user.admNo,
      roomId: user.roomId,
    };
    if (user.id) {
      const userDoc = doc(db, "Users", user.id);
      delete user.id;
      updateDoc(userDoc, updatedUser).catch((err) => {
        console.error(err);
      });
    } else {
      console.error("No User ID was provided");
    }
  };

  const updateRoom = (room: Room) => {
    const updatedRoom = {
      roomType: room.roomType,
      capacity: room.capacity,
      size: room.size,
      bedType: room.bedType,
      gender: room.gender,
      price: room.price,
      occupants: room.occupants,
    };
    if (room.id) {
      const roomDoc = doc(db, "Rooms", room.id);
      delete room.id;
      updateDoc(roomDoc, updatedRoom).catch((err) => {
        console.error(err);
      });
    } else {
      console.error("No Room ID was provided");
    }
  };

  const handleBtnClick = () => {
    setPay(true);
  };

  const handleRoomPayment = () => {
    if (fetchedUser.roomId) {
      alert("You have a Room Assigned");
      console.log("User has room");
      return;
    }
    const roomType = clickRoomType;
    const isfetchedUserEmpty =
      Object.keys(fetchedUser).length > 0 ? false : true;

    const singleRoom = roomList.filter(
      (room) =>
        room.roomType === "single" &&
        room.occupants &&
        // room.occupants?.length === 0
        room.occupants.every((occupant) => occupant === "")
    );

    const doubleRoom = roomList.filter(
      (room) =>
        room.roomType === "double" &&
        room.occupants &&
        room.occupants?.length < 2
    );

    const quadRoom = roomList.filter(
      (room) =>
        room.roomType === "quad" && room.occupants && room.occupants?.length < 4
    );

    if (roomType === "single") {
      const chosenRoom = singleRoom[0];

      if (chosenRoom && !isfetchedUserEmpty) {
        const updatedRoom: Room = {
          ...chosenRoom,
          occupants: [fetchedUser.id || ""],
        };

        const updatedUser: User = {
          ...fetchedUser,
          roomId: chosenRoom.id,
        };
        updateRoom(updatedRoom);
        updateUser(updatedUser);
      }
    }

    if (roomType === "double") {
      const chosenRoom = doubleRoom[0];

      if (chosenRoom && !isfetchedUserEmpty) {
        if (chosenRoom.occupants && fetchedUser.id) {
          const updatedRoom: Room = {
            ...chosenRoom,
            occupants: [...(chosenRoom.occupants ?? []), fetchedUser.id],
          };
          updateRoom(updatedRoom);
        }

        const updatedUser: User = {
          ...fetchedUser,
          roomId: chosenRoom.id,
        };
        updateUser(updatedUser);
      }
    }

    if (roomType === "quad") {
      const chosenRoom = quadRoom[0];
      if (chosenRoom && !isfetchedUserEmpty) {
        if (chosenRoom.occupants && fetchedUser.id) {
          const updatedRoom: Room = {
            ...chosenRoom,
            occupants: [...(chosenRoom.occupants ?? []), fetchedUser.id],
          };
          updateRoom(updatedRoom);
        }

        const updatedUser: User = {
          ...fetchedUser,
          roomId: chosenRoom.id,
        };
        updateUser(updatedUser);
      }
    }
    navigate("/student-portal/dashboard");
  };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;

        // Fetch user data from Firestore based on UID
        const userRef = doc(db, "Users", uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          const allUserData: User = {
            id: uid,
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            gender: userData.gender,
            isAdmin: userData.isAdmin,
            admNo: userData.admNo,
            roomId: userData.roomId,
          };
          setfetchedUser(allUserData);
        }
      } else {
        // User is signed out
        setfetchedUser({} as User);
      }
    });

    getRoomList();

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="student-portal-rooms-page">
        <div className="d-flex student-portal-rooms-page-bg">
          <StudentPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Rooms" pageUser={fetchedUser.name} />

            <div className="pages-content-section  ">
              <div className="rooms-content-section ">
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Single Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 20, 000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Enjoy the privacy and comfort of your own space in our
                      single bed room
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom
                        dark={true}
                        onBtnClick={() => {
                          handleBtnClick();
                          setClickRoomType("single");
                        }}
                      >
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Single Bed</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Private Washroom</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fast WIFI</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>15m² of Space</span>
                    </div>
                  </div>
                </div>
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Double Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 12,000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Ideal for friends or students who enjoy shared living
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom
                        dark={true}
                        onBtnClick={() => {
                          handleBtnClick();
                          setClickRoomType("double");
                        }}
                      >
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>2 Beds</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>2 Study Desks</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fast WIFI</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>10m² of Space</span>
                    </div>
                  </div>
                </div>
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Quad Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 6, 000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Looking for a social and budget-friendly option?
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom
                        dark={true}
                        onBtnClick={() => {
                          handleBtnClick();
                          setClickRoomType("quad");
                        }}
                      >
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Four Beds</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Study Desk</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Lockable Cabinets</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>13m² of Space</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {pay && (
          <div className="payingProcess">
            <PaymentPopUp
              onClickPay={() => {
                setPay(false);
                handleRoomPayment();
                setClickRoomType("");
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default StudentPortalRooms;
