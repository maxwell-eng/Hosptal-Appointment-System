import axios from "axios";
import { BACKEND_URL } from "../constants";

const authApi = axios.create({
  baseURL: BACKEND_URL,
});

export const createUser = async (data) => {
  const response = await authApi.post("/register", data);

  return response.data;
};

export const addDoctor = async (data) => {
  const response = await authApi.post("/doctorRegistration", data);

  return response.data;
};

//get Patients
export const getPatients = async () => {
  const response = await authApi.get("/getPatients");

  return response.data;
}; 


export const createPatient = async (data) => {
  const response = await authApi.post("/patientRegistration", data);

  return response.data;
};

/* export const getPatientByDisease = async (data) => {
  const response = await authApi.post("/admin", data);

  return response.data;
}; */


export const createAdmin = async (data) => {
  const response = await authApi.post("/admin", data);

  return response.data;
};


export const createDoctor = async (data) => {
  const response = await authApi.post("/doctorRegistration", data);

  return response.data;
};

//get Doctors
export const getDoctors = async () => {
  const response = await authApi.get("/getDoctors");

  return response.data;
}; 



export const createAppointment = async (data) => {
  const response = await authApi.post("/appointment", data);

  return response.data;
};




export const loginUser = async (data) => {
  const response = await authApi.post("/login", data);

  return response.data;
};
