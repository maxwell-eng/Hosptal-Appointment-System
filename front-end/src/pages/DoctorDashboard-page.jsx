import React from "react";
import { createUser } from "../api/authApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getDoctors } from '../api/authApi';

const DoctorDashboardPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
  });

  const { mutate } = useMutation(createUser, {
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

  useEffect(() => {
    const fetchDoctors = async () => {
      await getDoctors().then((res) => {
        setUser(res)
      }).catch((e) => {
        console.log(e)
      })
    }

   fetchDoctors()
  }, []);




  return (
    <div className="container">

<div className='d-flex justify-content-center'>

<div class="panel-body p-20" >
    <h1 className='d-flex justify-content-center'>Doctor Dashboard</h1><br />
    <div class=""  >
            <a href="/" style={{marginLeft:800}}><button type="" name="" class="btn btn-success btn-labeled pull-right" >Logout</button></a>
        </div>
        <br />
<table id="example" class="display table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>#</th>
            <th>Name Of Doctor</th>
            <th>Patient Name</th>
            <th>Appointment Description</th>
            <th>Appointment Time</th>
            <th>Status</th>
            <th>Action</th>
            
        </tr>
    </thead>
  
    <tbody>


    
       <tr>
           <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

       </tr> 

       
    
    </tbody>
</table>


</div>

</div>
     
    </div>
  );
};

export default DoctorDashboardPage;
