import { useForm, FieldValues } from "react-hook-form";
import "./TableAddForm.css";
import User from "../../Interfaces/User";

interface Props {
  userData?: User;
  onFormSubmit: () => void;
  onOffClick: () => void;
}

const emptyUserData: User = {
  id: "",
  name: "",
  phone: "",
  email: "",
  gender: "",
  isAdmin: false,
};
const TableAddUserForm = ({
  onOffClick,
  onFormSubmit,
  userData = emptyUserData,
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
              <option value="male" selected={userData.gender == "Male"}>
                Male
              </option>
              <option value="female" selected={userData.gender == "Female"}>
                Female
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="isAdmin">
              Admin
            </label>
            <select
              {...register("isAdmin")}
              id="isAdmin"
              className="form-select"
            >
              <option value=""></option>
              <option value="true" selected={userData.isAdmin == true}>
                True
              </option>
              <option value="false" selected={userData.isAdmin == false}>
                False
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

export default TableAddUserForm;
