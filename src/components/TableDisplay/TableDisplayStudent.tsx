// import Student from "../../Interfaces/Student";
import User from "../../Interfaces/User";
import "./TableDisplay.css";

interface Props {
  usersData: User[];
  onListDblClick: (user: User) => void;
}

const TableDisplayStudent = ({ usersData, onListDblClick }: Props) => {
  const handleDblClick = (user: User) => {
    onListDblClick(user);
  };
  // const data = studentData;
  return (
    <div className="table-content-display ">
      {usersData && usersData.length > 0 ? (
        <div className="table-responsive table-container">
          <table className="table table-hover">
            <thead className="table-title">
              <tr>
                {/* <th scope="col">Student ID</th> */}
                <th scope="col">Name</th>
                <th scope="col">Admission Number</th>
                <th scope="col">Room</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map(
                (user) =>
                  !user.isAdmin && (
                    <tr
                      onDoubleClick={() => handleDblClick(user)}
                      key={user.id}
                    >
                      {/* <td>{user.id}</td> */}
                      <td>{user.name}</td>
                      <td>{user.admNo}</td>
                      <td>{user.roomId}</td>
                      <td>{user.gender}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-table-data">
          <div className="no-table-data-title">No Students Available</div>
          <div className="no-table-data-sub-title">Please Add Students</div>
        </div>
      )}
    </div>
  );
};

export default TableDisplayStudent;
