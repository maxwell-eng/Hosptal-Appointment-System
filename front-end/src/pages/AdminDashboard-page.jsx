import React from "react";
import { createUser } from "../api/authApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";

const AdminDashboardPage = () => {
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

  return (
    <div className="container">
      

<div className='d-flex justify-content-center'>

 <div class="panel-body p-20" >
     <h1 className='d-flex justify-content-center'>Admin Dashboard</h1><br />
     <div class=""  >
             <a href="/AddDoctor" ><button type="" name="" class="btn btn-success btn-labeled pull-right" >Add Doctor</button></a>
             <a href="/" style={{marginLeft: 800}} ><button type="" name="" class="btn btn-success btn-labeled pull-right" >Logout</button></a>
         </div> <br />
 <table id="example" class="display table table-striped table-bordered" cellspacing="0" width="100%">
     <thead>
         <tr>
             <th>#</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Specialization</th>
            
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

</tr>

        
     
     </tbody>
 </table>

 
</div>

</div>
    </div>
  );
};

export default AdminDashboardPage;
