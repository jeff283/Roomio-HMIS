import { useForm, FieldValues } from "react-hook-form";
import "./TableAddForm.css";
import User from "../../Interfaces/User";
interface Props {
  userData?: User;
  formUpdateState: boolean;
  onFormSubmit: (user: User) => void;
  onOffClick: () => void;
}

const emptyUserData: User = {
  id: "",
  name: "",
  phone: "",
  email: "",
  gender: "",
  admNo: "",
  roomId: "",
  isAdmin: false,
};
const TableAddUserForm = ({
  userData = emptyUserData,
  onOffClick,
  onFormSubmit,
  formUpdateState,
}: Props) => {
  const { register, handleSubmit, reset } = useForm();

  console.log(formUpdateState);

  const onSubmit = (data: FieldValues) => {
    const userTemplateData: User = {
      id: "",
      name: data.name,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      admNo: "",
      roomId: "",
      isAdmin: data.isAdmin,
      // password: data.password,
    };

    onFormSubmit(userTemplateData);
    // console.log("Form Submit:");
    // console.log(data);
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
              <option value="Male" selected={userData.gender == "Male"}>
                Male
              </option>
              <option value="Female" selected={userData.gender == "Female"}>
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

          {/* {!formUpdateState && (
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                {...register("password")}
                // value={userData.password}
                id="password"
                className="form-control"
                type="password"
                required
              />
            </div>
          )} */}

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
