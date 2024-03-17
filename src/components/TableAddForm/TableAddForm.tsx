import { FormEvent } from "react";
import "./TableAddForm.css";

const TableAddForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form Submit");
  };
  return (
    <div>
      <div className="table-add-form-container">
        <form onSubmit={handleSubmit} className="table-add-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input required className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="admNo">
              Admission Number
            </label>
            <input required className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input required className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              required
              className="form-control"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select className="form-select" name="select" id="select">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
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

export default TableAddForm;
