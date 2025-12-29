import React, { useEffect, useEffectEvent, useState } from "react";
import "./CreateUser.css";
import { postUsers } from "../services/Services";
import Users from "./Users";

const CreateUsers = ({ onUserAdded /*<-getData */ }) => {
  const [formData, setFormData] = useState({
    userName: "",
    designation: "",
    email: "",
    cNo: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (onSubmit) {
    //   onSubmit(formData);
    // }
    postUsers(formData);
    setFormData({
      userName: "",
      designation: "",
      email: "",
      cNo: "",
      address: "",
    });
    // console.log(formData);
    alert("hoho User Created");

    if (onUserAdded) {
      onUserAdded();
    }
  };

  return (
    <>
      <h1 className="text-center"> Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contact No</label>
          <input
            type="tel"
            name="cNo"
            value={formData.cNo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Create User</button>
      </form>
      <h3 className="text-center">
        ---------------------------------------------------------
      </h3>
    </>
  );
};

export default CreateUsers;
