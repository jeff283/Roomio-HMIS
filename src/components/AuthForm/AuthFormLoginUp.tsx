import "./AuthForm.css";
import { useForm, FieldValues } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const AuthFormLoginUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [isAdmin, setAdmin] = useState(false);
  let isLetAdmin = false;

  useEffect(() => {
    // This will run every time isAdmin changes
    console.log("isAdmin updated: ", isAdmin);
  }, [isAdmin]);

  const onSubmit = (data: FieldValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((UserCreds) => {
        const userId = UserCreds.user.uid;
        const docRef = doc(db, "Users", userId);
        getDoc(docRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              const userAdmin = userData.isAdmin;
              isLetAdmin = userAdmin;
              setAdmin(userAdmin);
            } else {
              console.error("No such document!");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser && currentUser.uid) {
      if (isAdmin === true) {
        console.log("Admin True: ", isAdmin);
        console.log("isLetAdmin True: ", isLetAdmin);

        navigate("/admin-portal/dashboard");
      } else {
        console.log("isLetAdmin False: ", isLetAdmin);
        console.log("Admin False: ", isAdmin);
        navigate("/student-portal/dashboard");
      }
    }
  });

  return (
    <div>
      <div className="auth-form-container-login ">
        <div className="auth-form-title mb-4 fz40 poppins-semibold">
          Welcome Back
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-col">
            <div className="form-input-container">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="form-col">
            <div className="form-input-container">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
          </div>

          <div className="form-submit-btn">
            <button className="fz24 poppins-semibold mt-3" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="auth-form-options mt-3">
          <div className="fz18">Have an account ?</div>
          <div className="fz20">
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormLoginUp;
