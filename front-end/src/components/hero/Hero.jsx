import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <h1 className="text-center">Hospital Appointment System</h1>

      <div className='d-flex justify-content-center'>
                                       


                                        <div class="col-md-6 col-md-offset-6 ">
                                            
                                            <div class="panel login-box bg-light">
                                                <div class="panel-heading">
                                                    <div class="panel-title text-center" >
                                                   
                                                        <h4 style={{marginTop:120, paddingTop:50}}>Login Page</h4>
                                                    </div>
                                                </div>
                                                <div class="panel-body p-20" style={{marginLeft:77}}>

                        

                                                    <form class="form-horizontal" type="post" method="post">
                                                    	<div class="form-group">
                                                    		<label for="inputEmail3" class="col-sm-2 control-label ">Username</label>
                                                    		<div class="col-sm-10">
                                                    			<input type="text" name="username" class="form-control" id="inputEmail3" placeholder="Username"/>
                                                    		</div>
                                                    	</div>
                                                    	<div class="form-group">
                                                    		<label for="inputPassword3" class="col-sm-2 control-label ">Password</label>
                                                    		<div class="col-sm-10">
                                                    			<input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                                                    		</div>
                                                    	</div><br />
                                                        
                                         
                                                        <div class="form-group mt-20">
                                                        <label class="text-black">Login as Admin </label><input type="checkbox"/>
                                                    		<div class="col-sm-offset-2 col-sm-10">
                                                           
                                                        <br /><button type="submit" name="login" class="btn btn-success btn-labeled pull-right">Login<span class="btn-label btn-label-right"><i class="fa fa-check"></i></span></button>

                                                               

                                                               <a href="/PatientSignUp" style={{marginLeft:210}} class="btn btn-success btn-labeled pull-right">Sign Up</a>
                                                               {/*<button type="submit" href="/PatientSignUp" name="login" class="btn btn-success btn-labeled pull-right">Sign Up<span class="btn-label btn-label-right"><i class="fa fa-check"></i></span></button> */}
                                                    		</div>
                                                    	</div>

                                                        <div id="register-link" class="text-right">
    
                                                        <br /><a href="#" style={{marginRight:80}}class="text-black" >Forgot Password? </a> 
                               
                            </div><br /><br />

                                                        
                                                    </form>

                                            

                                                 
                                                </div>

                                            </div>
                                            
                                        
                                        </div>

                                        </div>
    </div>
  );
};

export default Hero;
