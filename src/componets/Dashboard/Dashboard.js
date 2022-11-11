import React from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { user } = useParams();
  console.log(user);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}

export default Dashboard;
