import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import AdminMenu from "../AdminMenu";

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <nav>
      <span>Logo</span>
      <div>{user ? <AdminMenu /> : <Link to="/login">Login</Link>}</div>
    </nav>
  );
};

export default Header;
