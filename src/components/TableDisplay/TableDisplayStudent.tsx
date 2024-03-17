import Student from "../../Interfaces/Student";
import "./TableDisplay.css";

interface Props {
  studentsData: Student[];
  onListDblClick: (student: Student) => void;
}

const TableDisplayStudent = ({ studentsData, onListDblClick }: Props) => {
  const handleDblClick = (student: Student) => {
    onListDblClick(student);
  };
  // const data = studentData;
  return (
    <div className="table-content-display ">
      {studentsData && studentsData.length > 0 ? (
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
              {studentsData.map((student) => (
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
