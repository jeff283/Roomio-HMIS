import User from "../../Interfaces/User";

import "./TableDisplay.css";

interface Props {
  usersData: User[];
  onListDblClick: (user: User) => void;
}

const TableDisplayUser = ({ usersData, onListDblClick }: Props) => {
  const handleDblClick = (user: User) => {
    onListDblClick(user);
  };
  return (
    <div className="table-content-display ">
      {usersData && usersData.length > 0 ? (
        <div className="table-responsive table-container">
          <table className="table table-hover">
            <thead className="table-title">
              <tr>
                <th scope="col">Role</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">User ID</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr onDoubleClick={() => handleDblClick(user)} key={user.id}>
                  <td>{user.isAdmin ? "Admin" : "Student"}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-table-data">
          <div className="no-table-data-title">No Users Available</div>
          <div className="no-table-data-sub-title">Please Add Users</div>
        </div>
      )}
    </div>
  );
};

export default TableDisplayUser;
