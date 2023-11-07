import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

export default function AdminProtected({ children }) {
  const user = useSelector(selectLoggedInUser);
  if (!user) return <Navigate to="/login"></Navigate>;
  if (user && user.role !=='admin') return <Navigate to="/"></Navigate>
  return children;
}
