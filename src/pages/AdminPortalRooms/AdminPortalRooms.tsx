import "../PagesGlobal.css";
import "../AdminPortalRooms/AdminPortalRooms.css";

import { useState } from "react";
import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

import TableDisplayRoom from "../../components/TableDisplay/TableDisplayRoom";
import TableAddRoomForm from "../../components/TableAddForm/TableAddRoomForm";
import Room from "../../Interfaces/Room";
import roomData from "../../data/roomData";

const AdminPortalRooms = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [room, setRoom] = useState<Room>({} as Room);

  const handleListDblClick = (room: Room) => {
    setRoom(room);
    setFormSubmit(true);
    console.log(room);
  };
  return (
    <>
      <div className="admin-portal-list-body">
        <div className="d-flex admin-portal-list-body-content">
          <AdminPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Rooms" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add Room
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayRoom
                roomsData={roomData}
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
              onFormSubmit={() => {
                setFormSubmit(false);
                setRoom({} as Room);
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
