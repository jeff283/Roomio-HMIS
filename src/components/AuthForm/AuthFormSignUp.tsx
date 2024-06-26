import "./AuthForm.css";
import { useForm, FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { db, auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useEffect } from "react";

const AuthFormSignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.uid) {
        navigate("/student-portal/dashboard");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userId = newUserCredential.user.uid;
      const userData = {
        name: `${data.fname} ${data.lname}`,
        phone: data.phone,
        email: data.email,
        gender: data.gender,
        isAdmin: false,
        admNo: data.admNo,
        roomId: "",
      };
      await setDoc(doc(db, "Users", userId), userData);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="auth-form-container ">
        <div className="auth-form-title mb-1 fz40 poppins-semibold">
          Join Us
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-row ">
            <div className="form-input-container ">
              <label htmlFor="fname">First Name</label>
              <input
                {...register("fname")}
                id="fname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div className="form-input-container ">
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

          <div className="form-row ">
            <div className="form-input-container">
              <label htmlFor="admNo">Admission Number</label>
              <input
                {...register("admNo")}
                id="admNo"
                type="text"
                placeholder="Enter Admission Number"
                required
              />
            </div>

            <div className="form-input-container">
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
            <div className="form-input-container">
              <label htmlFor="gender">Gender</label>
              <select {...register("gender")} id="gender" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-col">
            <div className="form-input-container">
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
            <div className="form-input-container">
              <label htmlFor="email">Password</label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
          </div>

          <div className="form-submit-btn">
            <button className="fz24 poppins-semibold mt-3" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="auth-form-options mt-3">
          <div className="fz18">Have an account ?</div>
          <div className="fz20">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormSignUp;
