import { NavLink, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaHistory,
    FaMoneyBillWave,
    FaUser,
    FaSignOutAlt,
    FaCarSide
} from "react-icons/fa";

function DriverNav() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("driver");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">

            <div className="container">

                <NavLink
                    className="navbar-brand fw-bold"
                    to="/driver/home"
                >
                    🚖 UCab Driver
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#driverNavbar"
                    aria-controls="driverNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="driverNavbar"
                >

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">

                            <NavLink
                                to="/driver/home"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                <FaHome className="me-2" />
                                Dashboard
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/driver/pending"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                <FaCarSide className="me-2" />
                                Pending Rides
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/driver/history"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                <FaHistory className="me-2" />
                                Ride History
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/driver/earnings"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                <FaMoneyBillWave className="me-2" />
                                Earnings
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/driver/profile"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                <FaUser className="me-2" />
                                Profile
                            </NavLink>

                        </li>

                    </ul>

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        <FaSignOutAlt className="me-2" />
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default DriverNav;