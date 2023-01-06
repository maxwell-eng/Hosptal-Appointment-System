import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { loginUser } from "../api/authApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation(loginUser, {
    onSuccess: () => {
      toast.success("logged in successfully", {
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
      toast.error("user not found", {
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

    mutate({ email, password });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h3 className="text-center">Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
