import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const AdminMenu = () => {
  const { logout } = useAuth();
  return (
    <ul>
      <li>
        <Link to="/dashboard">Entrar al dashboard</Link>
      </li>
      <li onClick={() => logout()}>Cerrar cuenta</li>
    </ul>
  );
};
export default AdminMenu;
