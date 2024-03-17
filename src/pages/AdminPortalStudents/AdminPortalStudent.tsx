import "../PagesGlobal.css";
import "./AdminPortalStudents.css";

import AdminPortalSidebar from "../../components/AdminPortalSidebar/AdminPortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import TableDisplayStudent from "../../components/TableDisplay/TableDisplayStudent";
import TableAddStudentForm from "../../components/TableAddForm/TableAddStudentForm";
import { useState } from "react";
import Student from "../../Interfaces/Student";
import studentData from "../../data/studentData";

const AdminPortalStudents = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [student, setStudent] = useState<Student>({} as Student);

  const handleListDblClick = (student: Student) => {
    setStudent(student);
    setFormSubmit(true);
    console.log(student);
  };
  return (
    <>
      <div className="admin-portal-list-body">
        <div className="d-flex admin-portal-list-body-content">
          <AdminPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Students" />
            <div className="admin-top-btn-container">
              <ButtonCustom dark={true} onBtnClick={() => setFormSubmit(true)}>
                Add Student
              </ButtonCustom>
            </div>
            <div className="admin-table">
              <TableDisplayStudent
                studentsData={studentData}
                onListDblClick={(student) => handleListDblClick(student)}
              />
            </div>
          </div>
        </div>
        {isFormSubmit && (
          <div className="admin-portal-form">
            <TableAddStudentForm
              onOffClick={() => {
                setFormSubmit(false);
                setStudent({} as Student);
              }}
              onFormSubmit={() => {
                setFormSubmit(false);
                setStudent({} as Student);
              }}
              studentData={student}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPortalStudents;
