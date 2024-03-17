import { useForm, FieldValues } from "react-hook-form";
import "./TableAddForm.css";
import User from "../../Interfaces/User";

interface Props {
  userData?: User;
  onFormSubmit: () => void;
  onOffClick: () => void;
}

const emptyuserData: User = {
  id: "",
  name: "",
  admNo: "",
  phone: "",
  email: "",
  gender: "",
  isAdmin: false,
};
const TableAddStudentForm = ({
  onOffClick,
  onFormSubmit,
  userData = emptyuserData,
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
              value={userData.name}
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
              value={userData.admNo}
              id="admNo"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="roomId">
              Room ID
            </label>
            <input
              {...register("roomId")}
              value={userData.roomId}
              id="roomId"
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
              value={userData.phone}
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
              value={userData.email}
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
              <option value="Male" selected={userData.gender == "Male"}>
                Male
              </option>
              <option value="Female" selected={userData.gender == "Female"}>
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
