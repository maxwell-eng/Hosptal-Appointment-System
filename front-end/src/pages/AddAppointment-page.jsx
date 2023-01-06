import React from "react";
import { createAppointment } from "../api/authApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";

const AddAppointmentPage = () => {
  const [user, setUser] = useState({
    appointmentDetails: "",
    appointmentDate: "",
    appointmentTime: "",
  
  });

  const { mutate } = useMutation(createAppointment, {
    onSuccess: () => {
      toast.success("Appointment created successfully", {
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
      toast.error("Error creating appointment", {
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
      <h3 className="text-center">Add Appointment</h3>
      <form onSubmit={onSubmit}>
       
        <div className="form-group">
          <label>Reason for Appointment</label>
          <textarea
            rows = "5" 
            type="text"
            value={user.appointmentDetails}
            onChange={(e) => setUser({ ...user, appointmentDetails: e.target.value })}
            className="form-control"
            placeholder="Enter reason for appointment"
          />

         
          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="date"
              value={user.appointmentDate}
              onChange={(e) =>
                setUser({ ...user, appointmentDate: e.target.value })
              }
              className="form-control"
              placeholder="Enter Date of birth"
            />
          </div>

          <label>Time</label>
          <input
            type="text"
            value={user.appointmentTime}
            onChange={(e) => setUser({ ...user, appointmentTime: e.target.value })}
            className="form-control"
            placeholder="Enter time for appointment e.g 14:30"
          />
          
        </div> <br />

       
       
       
       
        <button type="submit" className="btn btn-success btn-block">
          Add
        </button>
        <br /><br /><a href="/PatientDashboard" class="text-info" >Back </a> 
      </form>
    </div>
  );
};

export default AddAppointmentPage;
