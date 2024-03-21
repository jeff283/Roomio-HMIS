import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import AdminGraph from "../../components/AdminGraph/AdminGraph";

import "./AdminPortalDashboard.css";
import "../PagesGlobal.css";
// import "../StudentPortalDashboard/StudentPortal.css";

// Icons

import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice4,
} from "react-icons/gi";

import { RiPercentFill } from "react-icons/ri";

import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Room from "../../Interfaces/Room";
import RoomCount from "../../Interfaces/roomCount";

const AdminPortalDashboard = () => {
  const [roomList, setRoomList] = useState<Room[]>({} as Room[]);
  const [roomCount, setRoomCount] = useState<RoomCount[]>({} as RoomCount[]);
  const [pcOccupancy, setPcOccupancy] = useState(0);

  console.log((roomCount.length > 0 && roomCount[0].total) || "0");

  // const [roomCount, setRoomCount] = useState([]);

  const calcRoomData = () => {
    let totalSingle = 0,
      occupiedSingle = 0,
      emptySingle = 0;
    let totalDouble = 0,
      occupiedDouble = 0,
      emptyDouble = 0;
    let totalQuad = 0,
      occupiedQuad = 0,
      emptyQuad = 0;
    if (roomList.length > 0) {
      // console.log("roomList: ", roomList);

      const singleRoom = roomList.filter((room) => room.roomType === "single");

      const occupiedSingleRoom = singleRoom.filter(
        (room) => room.occupants && room.occupants.length >= 1
      );
      totalSingle = singleRoom.length;
      occupiedSingle = occupiedSingleRoom.length;
      emptySingle = totalSingle - occupiedSingle;

      const doubleRoom = roomList.filter((room) => room.roomType === "double");

      const occupiedDoubleRoom = doubleRoom.filter(
        (room) => room.occupants && room.occupants.length >= 1
      );

      totalDouble = doubleRoom.length;
      occupiedDouble = occupiedDoubleRoom.length;
      emptyDouble = totalDouble - occupiedDouble;

      const quadRoom = roomList.filter((room) => room.roomType === "quad");

      const occupiedQuadRoom = quadRoom.filter(
        (room) => room.occupants && room.occupants.length >= 1
      );

      totalQuad = quadRoom.length;
      occupiedQuad = occupiedQuadRoom.length;
      emptyQuad = totalQuad - occupiedQuad;

      const allTotal = totalSingle + totalDouble + totalQuad;
      const allTotalDivisible = allTotal !== 0 ? allTotal : 1; //Avoid Division by Zero
      const allOccupied = occupiedSingle + occupiedDouble + occupiedQuad;
      const percentageOccupancy = (allOccupied / allTotalDivisible) * 100;
      setPcOccupancy(percentageOccupancy);
      // console.log("allTotal: ", allTotal);
      // console.log("allTotalDivisible: ", allTotalDivisible);
      // console.log("allOccupied: ", allOccupied);
      // console.log("percentageOccupancy: ", percentageOccupancy);

      const roomCountData: RoomCount[] = [
        {
          name: "Single",
          total: totalSingle,
          empty: emptySingle,
          occupied: occupiedSingle,
        },
        {
          name: "Double",
          total: totalDouble,
          empty: emptyDouble,
          occupied: occupiedDouble,
        },
        {
          name: "Quad",
          total: totalQuad,
          empty: emptyQuad,
          occupied: occupiedQuad,
        },
      ];
      setRoomCount(roomCountData);
    }
  };

  const getRoomList = () => {
    const roomCollectionRef = collection(db, "Rooms");

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
    getRoomList();
  }, []);

  useEffect(() => {
    calcRoomData();
  }, [roomList]);

  return (
    <>
      <div className="d-flex">
        <AdminPortalSidebar />

        <div className="pages-content-body">
          <PortalTopBar pageTitle="Dashboard" />
          <div className="admin-dashboard-content ">
            <div className="room-overview-container ">
              <div className="room-overview-title fz32 poppins-semibold mb-3">
                Room Overview
              </div>
              <div className="room-overview-card-container">
                <div className="room-overview-card ">
                  <div className="card-img">
                    <GiInvertedDice1 size={48} />
                  </div>
                  <div className="card-content ">
                    <div className="card-content-number poppins-bold fz24">
                      {(roomCount.length > 0 && roomCount[0].total) || "0"}
                    </div>
                    <div className="card-content-desc fz20">Single Room</div>
                  </div>
                </div>
                <div className="room-overview-card ">
                  <div className="card-img">
                    <GiInvertedDice2 size={48} />
                  </div>
                  <div className="card-content ">
                    <div className="card-content-number poppins-bold fz24">
                      {(roomCount.length > 0 && roomCount[1].total) || "0"}
                    </div>
                    <div className="card-content-desc fz20">Double Room</div>
                  </div>
                </div>
                <div className="room-overview-card ">
                  <div className="card-img">
                    <GiInvertedDice4 size={48} />
                  </div>
                  <div className="card-content ">
                    <div className="card-content-number poppins-bold fz24">
                      {(roomCount.length > 0 && roomCount[2].total) || "0"}
                    </div>
                    <div className="card-content-desc fz20">Quad Room</div>
                  </div>
                </div>
                <div className="room-overview-card ">
                  <div className="card-img">
                    <RiPercentFill size={48} />
                  </div>
                  <div className="card-content ">
                    <div className="card-content-number poppins-bold fz24">
                      {pcOccupancy}%
                    </div>
                    <div className="card-content-desc fz20">Occupancy</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-container">
              <div className="graph-card  ">
                <div className="graph-title fz32 poppins-semibold mb-3">
                  Room Occupancy
                </div>
                <div className="graph-container ">
                  {roomCount.length > 0 && <AdminGraph data={roomCount} />}
                </div>
              </div>
              <div className="notifications-card">
                <h3 className="content-title fz32">Notifications</h3>
                <div>
                  <div className="notification-card ">
                    <div className="notification-title ">Team Building</div>
                    <div className="notification-content ">
                      Roomies, mark your calendars! We're hosting a fun team
                      building event on April 25th to help you connect with your
                      neighbors and build teamwork skills through awesome
                      activities and challenges. Space is limited, so RSVP by
                      April 20th to join the fun! See you there!
                    </div>
                  </div>
                  <div className="notification-card ">
                    <div className="notification-title ">Booking</div>
                    <div className="notification-content ">
                      Don't miss out, Roomies! ⏰ The clock is ticking to book
                      your perfect dorm for the upcoming semester. Head over to
                      the Rooms page now and browse all available options!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortalDashboard;
