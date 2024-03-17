import Room from "../../Interfaces/Room";

import "./TableDisplay.css";

interface Props {
  roomsData: Room[];
  onListDblClick: (room: Room) => void;
}

const TableDisplayRoom = ({ roomsData, onListDblClick }: Props) => {
  const handleDblClick = (room: Room) => {
    onListDblClick(room);
  };
  return (
    <div className="table-content-display ">
      {roomsData && roomsData.length > 0 ? (
        <div className="table-responsive table-container">
          <table className="table table-hover">
            <thead className="table-title">
              <tr>
                <th scope="col">Room ID</th>
                <th scope="col">Room Type</th>
                <th scope="col">Capacity</th>
                <th scope="col">Size</th>
                <th scope="col">Bed Type</th>
                <th scope="col">Gender</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {roomsData.map((room) => (
                <tr onDoubleClick={() => handleDblClick(room)} key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.roomType}</td>
                  <td>{room.capacity}</td>
                  <td>{room.size}</td>
                  <td>{room.bedType}</td>
                  <td>{room.gender}</td>
                  <td>{room.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-table-data">
          <div className="no-table-data-title">No Rooms Available</div>
          <div className="no-table-data-sub-title">Please Add Rooms</div>
        </div>
      )}
    </div>
  );
};

export default TableDisplayRoom;
