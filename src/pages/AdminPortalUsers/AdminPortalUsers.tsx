import "../PagesGlobal.css";
import "../AdminPortalRooms/AdminPortalRooms.css";

import { useState } from "react";
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

import TableDisplayUser from "../../components/TableDisplay/TableDisplayUser";
import TableAddUserForm from "../../components/TableAddForm/TableAddUserForm";
import User from "../../Interfaces/User";
import userData from "../../data/userData";

const AdminPortalUsers = () => {
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
            <PortalTopBar pageTitle="Users" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add User
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayUser
                usersData={userData}
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

export default AdminPortalUsers;
