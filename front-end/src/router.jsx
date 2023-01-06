import { createBrowserRouter } from "react-router-dom";
import { Hero } from "./components/";
import { ErrorPage, HomePage, LoginPage, RegistrationPage, AddDoctorPage, AdminRegistrationPage, 
PatientDashboardPage, AddAppointmentPage, AdminDashboardPage, PatientSignUpPage, DoctorDashboardPage } 
from "./pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/addDoctor",
        element: <AddDoctorPage />,
      },
      {
        path: "/admin",
        element: <AdminRegistrationPage />,
      },
      {
        path: "/patientDashboard",
        element: <PatientDashboardPage />,
      },
      {
        path: "/addAppointment",
        element: <AddAppointmentPage />,
      },
      {
        path: "/adminDashboard",
        element: <AdminDashboardPage />,
      },
      {
        path: "/patientSignUp",
        element: <PatientSignUpPage />,
      },
      {
        path: "/doctorDashboard",
        element: <DoctorDashboardPage />,
      }
      
    ],  
  
  },
]);

export default router;
