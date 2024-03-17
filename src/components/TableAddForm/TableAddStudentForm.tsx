import { useForm, FieldValues } from "react-hook-form";
import "./TableAddForm.css";
import Student from "../../Interfaces/Student";

interface Props {
  studentData?: Student;
  onFormSubmit: () => void;
  onOffClick: () => void;
}

const emptyStudentData: Student = {
  id: "",
  name: "",
  admNo: "",
  phone: "",
  email: "",
  gender: "",
};
const TableAddStudentForm = ({
  onOffClick,
  onFormSubmit,
  studentData = emptyStudentData,
}: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    onFormSubmit();
    console.log("Form Submit:");
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="table-add-form-container">
        <div onDoubleClick={onOffClick} className="off-click"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="table-add-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              {...register("name")}
              value={studentData.name}
              id="name"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="admNo">
              Admission Number
            </label>
            <input
              {...register("admNo")}
              value={studentData.admNo}
              id="admNo"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              {...register("phone")}
              value={studentData.phone}
              id="phone"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              value={studentData.email}
              id="email"
              className="form-control"
              type="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select {...register("gender")} id="gender" className="form-select">
              <option value=""></option>
              <option value="male" selected={studentData.gender == "Male"}>
                Male
              </option>
              <option value="female" selected={studentData.gender == "Female"}>
                Female
              </option>
            </select>
          </div>
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableAddStudentForm;
