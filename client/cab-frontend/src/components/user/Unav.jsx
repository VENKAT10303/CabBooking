import { Link } from "react-router-dom";
import { FaTaxi } from "react-icons/fa";

function Unav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center" to="/">
          <FaTaxi className="me-2" />
          RideReady
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/user/cabs">
                Cabs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/user/mybookings">
                My Bookings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/user/profile">
                Profile
              </Link>
            </li>

          </ul>

          <div className="d-flex">

            <Link
              to="/user/login"
              className="btn btn-outline-primary me-2"
            >
              Login
            </Link>

            <Link
              to="/user/register"
              className="btn btn-primary"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Unav;