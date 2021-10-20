import React from "react";
import CreatePost from "../../components/CreatePost";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <h1>Este es el dashboard</h1>
      <CreatePost />
    </div>
  );
}
export default Dashboard;
