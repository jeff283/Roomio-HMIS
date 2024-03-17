import Student from "../../Interfaces/Student";
import studentData from "../../data/studentData";
import "./TableDisplayRoom.css";

const TableDisplay = () => {
  const handleDblClick = (student: Student) => {
    console.log(student);
  };
  const data = studentData;
  return (
    <div>
      <div className="table-responsive table-container">
        <table className="table table-hover">
          <thead className="table-title">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Admission Number</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr
                onDoubleClick={() => handleDblClick(student)}
                key={student.id}
              >
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.admNo}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDisplay;
