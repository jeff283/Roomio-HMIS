import "../PagesGlobal.css";
import "../AdminPortalRooms/AdminPortalRooms.css";

import { useEffect, useState } from "react";
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";

import TableDisplayUser from "../../components/TableDisplay/TableDisplayUser";
import TableAddUserForm from "../../components/TableAddForm/TableAddUserForm";
import User from "../../Interfaces/User";

import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const AdminPortalUsers = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [isUserUpdate, setUserUpdate] = useState(false);
  const [clickUser, setClickUser] = useState<User>({} as User);
  const [allUsers, setAllUsers] = useState<User[]>({} as User[]);

  const navigate = useNavigate();

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

  const createUser = async () => {
    navigate("/signup");
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
              {/* <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add User
              </ButtonCustom> */}
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
                isUserUpdate ? updateUser(user) : createUser();
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
