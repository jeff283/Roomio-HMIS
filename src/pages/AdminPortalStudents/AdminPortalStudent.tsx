import "../PagesGlobal.css";
import "./AdminPortalStudents.css";

import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";

import TableDisplayStudent from "../../components/TableDisplay/TableDisplayStudent";
import TableAddStudentForm from "../../components/TableAddForm/TableAddStudentForm";
import { useEffect, useState } from "react";

import User from "../../Interfaces/User";

import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const AdminPortalStudents = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [isUserUpdate, setUserUpdate] = useState(false);
  const [clickUser, setClickUser] = useState<User>({} as User);
  const [allUsers, setAllUsers] = useState<User[]>({} as User[]);

  const navigate = useNavigate();

  const userCollectionRef = collection(db, "Users");

  const handleListDblClick = (user: User) => {
    // Setting User to be Edited
    setClickUser(user);
    // Open Form
    setFormSubmit(true);
    // Tell Form we Are Updating
    setUserUpdate(true);
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
            <PortalTopBar pageTitle="Students" />
            <div className="admin-top-btn-container">
              {/* <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add Student
              </ButtonCustom> */}
            </div>
            <div className="admin-table">
              <TableDisplayStudent
                usersData={allUsers}
                onListDblClick={(user) => handleListDblClick(user)}
              />
            </div>
          </div>
        </div>
        {isFormSubmit && (
          <div className="admin-portal-form">
            <TableAddStudentForm
              onOffClick={() => {
                setFormSubmit(false);
                setClickUser({} as User);
              }}
              onFormSubmit={(user) => {
                // Closing Form
                setFormSubmit(false);
                // Removing User to be upadated
                setClickUser({} as User);
                // Handling Form Data
                isUserUpdate ? updateUser(user) : createUser();
                // We done Updating
                setUserUpdate(false);
              }}
              userData={clickUser}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPortalStudents;
