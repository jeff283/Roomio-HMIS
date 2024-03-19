import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import { auth } from "../../config/firebase";
import { getAuth, signOut } from "firebase/auth";

const TestPage = () => {
  return (
    <div>
      <ProtectedRoutes>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          numquam exercitationem quasi. Omnis commodi dolorem repellat saepe
          incidunt distinctio odio deleniti in labore nemo ratione, voluptatibus
          a est! Explicabo, ipsam.
        </div>
        <button
          onClick={() => {
            console.log(getAuth()?.currentUser);
            signOut(auth);
            console.log("Signed Out");
            console.log(getAuth()?.currentUser);
          }}
        >
          Log Out
        </button>
      </ProtectedRoutes>
    </div>
  );
};

export default TestPage;
