import React, { useEffect, useState } from "react";
import getUsers from "../services/Services";
import UserCart from "../components/UserCart";

function Users() {
  const [users, setUSers] = useState([]);
  const getData = async () => {
    const res = await getUsers();
    // console.log(res.data.length);
    // console.log(res.Array);
    setUSers(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {users.length === 0 ? (
        <div
          className="badge text-bg-primary text-wrap"
          style={{
            width: "37rem",
            textAlign: "center",
            margin: "20px",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          NO user Found..... <br />
          Create New User
        </div>
      ) : (
        users.map((elem, index) => (
          <div key={index} style={{ display: "inline-flex" }}>
            <UserCart
              userName={elem.userName}
              designation={elem.designation}
              email={elem.email}
              cNo={elem.cNo}
              address={elem.address}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;
