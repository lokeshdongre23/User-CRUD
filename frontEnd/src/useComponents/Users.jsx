import React, { useEffect, useState } from "react";
import getUsers from "../services/Services";
import UserCart from "../components/UserCart";

function Users() {
  const [users, setUSers] = useState([]);
  const getData = async () => {
    const res = await getUsers();
    console.log(res.data);
    setUSers(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {users.map((elem, index) => (
        <div key={index} style={{ display: "inline-flex" }}>
          <UserCart
            userName={elem.userName}
            designation={elem.designation}
            email={elem.email}
            cNo={elem.cNo}
            address={elem.address}
          />
        </div>
      ))}
    </>
  );
}

export default Users;
