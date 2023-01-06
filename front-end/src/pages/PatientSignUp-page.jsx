import React from "react";
import { createPatient } from "../api/authApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";

const PatientSignUpPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
  
  });

  const { mutate } = useMutation(createPatient, {
    onSuccess: () => {
      toast.success("User created successfully", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: () => {
      toast.error("Error creating user", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    mutate(user);

    console.log(user);
  };

  return (
    <div className="container">
      <h3 className="text-center">Patient Sign Up</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className="form-control"
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className="form-control"
            placeholder="Enter last name"
          />
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Date of birth</label>
            <input
              type="date"
              value={user.dateOfBirth}
              onChange={(e) =>
                setUser({ ...user, dateOfBirth: e.target.value })
              }
              className="form-control"
              placeholder="Enter Date of birth"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form-control"
            required
            placeholder="Enter password"
          />
        </div><br />
        <button type="submit" className="btn btn-success btn-block">
          Submit
        </button>
        <br /><br /><a href="/" class="text-info" >Back </a> 
      </form>
    </div>
  );
};

export default PatientSignUpPage;
