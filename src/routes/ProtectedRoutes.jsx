import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../features/home/components/Home";

function ProtectedRoutes() {
  // Verifica si existe el token en el almacenamiento local
  const token = localStorage.getItem("token");

  return token ? (
    <Route path="*" element={<Home />} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoutes;
