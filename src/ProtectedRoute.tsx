import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navigation from "./Navigation";
import { auth } from "./fireBaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed!");
    }
  };
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navigation />
      <div>Welcome to protected page!</div>
      <a href="#" onClick={handleLogout}>
        Logout
      </a>
    </>
  );
};

export default ProtectedRoute;
