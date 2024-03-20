import "../PagesGlobal.css";
import "../AdminPortalRooms/AdminPortalRooms.css";

import { useEffect, useState } from "react";
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

import TableDisplayUser from "../../components/TableDisplay/TableDisplayUser";
import TableAddUserForm from "../../components/TableAddForm/TableAddUserForm";
import User from "../../Interfaces/User";

import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
// import Room from "../../Interfaces/Room";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";

const AdminPortalUsers = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [isUserUpdate, setUserUpdate] = useState(false);
  const [clickUser, setClickUser] = useState<User>({} as User);
  const [allUsers, setAllUsers] = useState<User[]>({} as User[]);

  const userCollectionRef = collection(db, "Users");

  const handleListDblClick = (user: User) => {
    setClickUser(user);
    setFormSubmit(true);
    setUserUpdate(true);
    // console.log(user);
  };

  const findUserById = (userId: string) => {
    const foundUser = allUsers.find((user) => user.id === userId);
    if (foundUser) {
      return foundUser;
    }

    return {} as User;
  };

  const getUserList = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAllUsers(filterData as User[]);
    } catch (error) {
      console.error("Error getting room list:", error);
    }
  };

  const createUser = async (formUser: User) => {
    if (formUser.password) {
      try {
        const createdUser = {
          isAdmin: formUser.isAdmin,
          name: formUser.name,
          phone: formUser.phone,
          email: formUser.email,
          gender: formUser.gender,
          admNo: "0",
          roomId: "",
        };

        const newUserCredential = await createUserWithEmailAndPassword(
          auth,
          formUser.email,
          formUser.password
        );

        const newUserId = newUserCredential.user.uid;

        await setDoc(doc(db, "Users", newUserId), createdUser);
        getUserList();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateUser = (formUser: User) => {
    if (clickUser.id) {
      const foundUser = findUserById(clickUser.id);
      const updatedUser = {
        ...foundUser,
        isAdmin: formUser.isAdmin,
        name: formUser.name,
        phone: formUser.phone,
        email: formUser.email,
        gender: formUser.gender,
      };

      if (updatedUser.id) {
        const userDoc = doc(db, "Users", updatedUser.id);

        delete updatedUser.id;
        const upUser = updatedUser as {};
        updateDoc(userDoc, upUser)
          .then(() => {
            getUserList();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div className="admin-portal-list-body">
        <div className="d-flex admin-portal-list-body-content">
          <AdminPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Users" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add User
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayUser
                usersData={allUsers}
                onListDblClick={(user) => handleListDblClick(user)}
              />
            </div>
          </div>
        </div>
        {isFormSubmit && (
          <div className="admin-portal-form">
            <TableAddUserForm
              onOffClick={() => {
                setFormSubmit(false);
                setClickUser({} as User);
                setUserUpdate(false);
              }}
              onFormSubmit={(user) => {
                setFormSubmit(false);
                setClickUser({} as User);
                isUserUpdate ? updateUser(user) : createUser(user);
                setUserUpdate(false);
              }}
              userData={clickUser}
              formUpdateState={isUserUpdate}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPortalUsers;
