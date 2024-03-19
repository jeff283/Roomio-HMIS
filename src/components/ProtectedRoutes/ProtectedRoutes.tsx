import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  component: ReactNode;
}

const ProtectedRoutes = ({ component }: Props) => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });

  return <>{component}</>;
};

export default ProtectedRoutes;
