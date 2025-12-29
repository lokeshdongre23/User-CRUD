// import React from "react";

// function UserCart({ userName, designation, email, cNo, address }) {
//   return <div>UserCart</div>;
// }

// export default UserCart;

import React from "react";
import { deleteUSer } from "../services/Services";

function UserCart({ userName, designation, email, cNo, address }) {
  const handleClick = async () => {
    await deleteUSer(userName);
    alert(`user Deleted ${userName}`);
  };
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text">
          Designation: {designation} <br />
          Email: {email}
          <br />
          Contect Number: {cNo}
          <br />
          Address: {address}
        </p>
        <button onClick={handleClick} className="btn btn-danger">
          Delete User
        </button>{" "}
        <button className="btn btn-secondary">Update User</button>
      </div>
    </div>
  );
}

export default UserCart;
