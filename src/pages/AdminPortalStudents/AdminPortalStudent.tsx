import "../PagesGlobal.css";
import "./AdminPortalStudents.css";

import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import TableDisplayStudent from "../../components/TableDisplay/TableDisplayStudent";
import TableAddStudentForm from "../../components/TableAddForm/TableAddStudentForm";
import { useState } from "react";

import User from "../../Interfaces/User";
import userData from "../../data/userData";

const AdminPortalStudents = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  const handleListDblClick = (user: User) => {
    setUser(user);
    setFormSubmit(true);
    console.log(user);
  };
  return (
    <>
      <div className="admin-portal-list-body">
        <div className="d-flex admin-portal-list-body-content">
          <AdminPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Students" pageUser="User" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add Student
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayStudent
                usersData={userData}
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
                setUser({} as User);
              }}
              onFormSubmit={() => {
                setFormSubmit(false);
                setUser({} as User);
              }}
              userData={user}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPortalStudents;
