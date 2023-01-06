import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HAS
        </Link>
        {/* <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div> */}
     </div> 
    </nav>
  );
};

export default Navbar;
