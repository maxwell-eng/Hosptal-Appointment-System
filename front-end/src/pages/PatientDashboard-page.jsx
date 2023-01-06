import React from "react";
import { createAdmin } from "../api/authApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getPatients } from '../api/authApi';

const PatientDashboardPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    disease: "",
  });

  const { mutate } = useMutation(createAdmin, {
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
    const fetchPatients = async () => {
      await getPatients().then((res) => {
        setUser(res)
      }).catch((e) => {
        console.log(e)
      })
    }

   fetchPatients()
  }, []); 

  return (
 
    <div className="container">
      
      <div className='d-flex justify-content-center'>
       
       <div class="panel-body p-20" >
           <h1 className='d-flex justify-content-center'>Patient Dashboard</h1><br />

           <div class=""  >
               
                   <a href="/AddAppointment" ><button type="" name="" class="btn btn-success btn-labeled pull-right" >Add Appointment</button></a> 
                   <a href="/" style={{marginLeft:800}} ><button type="" name="" class="btn btn-success btn-labeled pull-right" >Logout</button></a>
                   
       </div>  <br />
       <table id="example" class="display table table-striped table-bordered" cellspacing="0" width="100%">
           <thead>
               <tr>
                   <th>#</th>
                   <th>Name Of Doctor</th>
                   <th>Patient Name</th>
                   
                   <th>Appointment Description</th>
                   <th>Appointment Time</th>
                   <th>Status</th>
                   
               </tr>
           </thead>
         
           <tbody>
               
           
           
           
           { user && user.map(({id, firstName}) => ( 
              <tr key={id}>
                  <td></td>
                  <td></td>
                    <td>{firstName}</td>
                  
                  <td></td>
                  <td></td>
                  <td></td>

              </tr>  ))}

              

           </tbody>
       </table>

          
       </div>
       </div>
       
    </div>

  );
};

export default PatientDashboardPage;
