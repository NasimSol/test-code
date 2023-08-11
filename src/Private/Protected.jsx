import { Navigate } from "react-router-dom";
import { useAuth } from "../CustomHooks/useAuth";
const Protected = ({ isLoggedIn, children }) => {
    const {authed}=useAuth();
  if (!authed) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;