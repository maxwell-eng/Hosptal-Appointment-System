import { Navbar, Notify} from "../components";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (


     <>
      <div>
        <Navbar /> 
        <Notify /> 
      </div>
      <div>
        <Outlet /> 
      </div>
    </>           


); 

    
    
};

export default HomePage;
