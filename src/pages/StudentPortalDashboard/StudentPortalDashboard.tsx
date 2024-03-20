//  CSS
import "./StudentPortal.css";
import "../PagesGlobal.css";

// INTERFACE
import User from "../../Interfaces/User";
import Room from "../../Interfaces/Room";

// COMPONENTS
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import StudentPortalSidebar from "../../components/StudentPortalSidebar/StudentPortalSidebar";

// LIBRARY
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import { useLocation } from "react-router-dom";

const StudentPortalDashboard = () => {
  const [fetchedUser, setfetchedUser] = useState<User>({} as User);
  const [userRoomates, setUserRoomates] = useState<User[]>({} as User[]);
  const [roomList, setRoomList] = useState<Room[]>({} as Room[]);
  const [userRoom, setUserRoom] = useState<Room>({} as Room);

  const roomCollectionRef = collection(db, "Rooms");

  const findUserRoomates = async () => {
    // Greater than 1 because a room can have the current user only
    if (userRoom.occupants && userRoom.occupants.length > 1) {
      try {
        // Fetch user data for each occupant
        const roomatePromises = userRoom.occupants.map((occupantId) =>
          getUser(occupantId)
        );
        const roomateData = await Promise.all(roomatePromises);
        console.log(roomateData);

        // Filter out the current user from the roomates data
        // const filteredRoomates = roomateData.filter((roomate) => roomate.id !== fetchedUser.id);

        // Set the roomates data to the state
        setUserRoomates(roomateData);
      } catch (error) {
        console.error("Error fetching roomates:", error);
      }
    }
  };

  const getUser = async (id: string): Promise<User> => {
    const docRef = doc(db, "Users", id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData: User = docSnap.data() as User;
        console.log("userData: ", userData);
        return userData;
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
    return {} as User;
  };

  const findUserRoom = () => {
    console.log("fetchedUser.id: ", fetchedUser.id);
    if (fetchedUser.id) {
      const searchString = fetchedUser.id;
      const roomWithSearchString = roomList.find(
        (room) => room.occupants && room.occupants.includes(searchString)
      );
      console.log("roomWithSearchString: ", roomWithSearchString);
      if (roomWithSearchString) {
        console.log(roomWithSearchString);

        setUserRoom(roomWithSearchString);
        // console.log("roomWithSearchString: ", roomWithSearchString);
        // console.log("User Room: ", userRoom);
      } else {
        console.log("Room not found");
      }
    }
  };

  const getRoomList = async () => {
    try {
      const data = await getDocs(roomCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRoomList(filterData as Room[]);
      // console.log(roomList);
    } catch (error) {
      console.error("Error getting room list:", error);
      // throw error; // rethrowing the error so it can be caught by the caller
    }
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
      }
    });

    getRoomList();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("Loaded on Room List");

    findUserRoom();
    findUserRoomates();
  }, [fetchedUser]);

  return (
    <>
      <div className="d-flex">
        <StudentPortalSidebar />
        <div className="pages-content-body">
          <PortalTopBar pageTitle="Dashboard" />
          <div className="student-dashboard-content ">
            <div className="big-content sdc-spacing ">
              <div className="top-content content-card ">
                <h3 className="content-title fz32">Student Details</h3>
                <div className="info-card ">
                  <div className="info-card-item ">
                    <span className="light-text">Full Name</span>
                    <span>{fetchedUser.name}</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Phone Number</span>
                    <span>{fetchedUser.phone}</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Admission Number</span>
                    <span>{fetchedUser.admNo}</span>
                  </div>
                </div>
              </div>
              <div className="bottom-content content-card ">
                <h3 className="content-title fz32">Room Details</h3>
                {/* <h4 className="content-title fz24">Room Status</h4> */}
                {/* 
                <div className="info-card ">
                  <div className="info-card-item ">
                    <span className="light-text">Application Status</span>
                    <span>Assigned</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Application Date</span>
                    <span>08-Jan-2024</span>
                  </div>
                </div> */}

                <h4 className="content-title fz24">Room Information</h4>

                {Object.keys(userRoom).length > 0 ? (
                  <div className="info-card ">
                    <div className="info-card-item ">
                      <span className="light-text">Room Number</span>
                      <span>{userRoom && userRoom.id}</span>
                    </div>
                    <div className="info-card-item ">
                      <span className="light-text">Room Type</span>
                      <span>{userRoom && userRoom.roomType}</span>
                    </div>
                    <div className="info-card-item ">
                      <span className="light-text">Capacity</span>
                      <span>{userRoom && userRoom.capacity} Students</span>
                    </div>
                    <div className="info-card-item ">
                      <span className="light-text">Bed Type</span>
                      <span>{userRoom && userRoom.bedType} Beds</span>
                    </div>
                    <div className="info-card-item ">
                      <span className="light-text">Size</span>
                      <span>{userRoom && userRoom.size}m²</span>
                    </div>
                  </div>
                ) : (
                  <h1 className="content-title light-text tac mt-5">
                    No Room Assigned
                  </h1>
                )}
              </div>
            </div>
            <div className="small-content sdc-spacing ">
              <div className="top-content content-card ">
                <h3 className="content-title fz32">Roommates</h3>
                {userRoomates.length > 0 ? (
                  <div className="info-card ">
                    {userRoomates.map((roomate) => (
                      <div className="info-card-item ">
                        <span>{roomate.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h3 className="light-text tac mt-4">You have No Roommates</h3>
                )}
              </div>
              <div className="bottom-content content-card ">
                <h3 className="content-title fz32">Notifications</h3>

                {Object.keys(userRoom).length > 0 ? (
                  <div>
                    <div className="notification-card ">
                      <div className="notification-title ">Team Building</div>
                      <div className="notification-content ">
                        Roomies, mark your calendars! We're hosting a fun team
                        building event on April 25th to help you connect with
                        your neighbors and build teamwork skills through awesome
                        activities and challenges. Space is limited, so RSVP by
                        April 20th to join the fun! See you there!
                      </div>
                    </div>
                    <div className="notification-card ">
                      <div className="notification-title ">Booking</div>
                      <div className="notification-content ">
                        Don't miss out, Roomies! ⏰ The clock is ticking to book
                        your perfect dorm for the upcoming semester. Head over
                        to the Rooms page now and browse all available options!
                      </div>
                    </div>
                  </div>
                ) : (
                  <h3 className="light-text tac mt-5">
                    You have No Notifications
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPortalDashboard;
