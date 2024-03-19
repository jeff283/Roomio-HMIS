import { FieldValues, useForm } from "react-hook-form";
import "./ContactUs.css";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    data;
    reset();
  };

  return (
    <div>
      <div className="contact-form-contain ">
        <div className="contact-form-title mb-1 fz40 poppins-semibold">
          Join Us
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-row ">
            <div className="contact-form-input-container ">
              <label htmlFor="fname">First Name</label>
              <input
                {...register("fname")}
                id="fname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div className="contact-form-input-container ">
              <label htmlFor="lname">Last Name</label>
              <input
                {...register("lname")}
                id="lname"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="form-col ">
            <div className="contact-form-input-container">
              <label htmlFor="phone">Phone Number</label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>

          <div className="form-col">
            <div className="contact-form-input-container">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>

          <div className="form-col">
            <div className="contact-form-input-container">
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                rows={5}
                cols={40}
                placeholder="Enter Message"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-submit-btn">
            <button className="fz24 poppins-semibold mt-3" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
