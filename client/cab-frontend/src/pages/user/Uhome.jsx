import { Link } from "react-router-dom";
import Unav from "../../components/user/Unav";
import Footer from "../../components/common/Footer";

function Uhome() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <>

            <Unav />

            <div className="container py-5">

                <div className="dashboard-header">

                    <h2>

                        Welcome,

                        <span className="text-primary">

                            {" "}

                            {user?.name}

                        </span>

                        👋

                    </h2>

                    <p>

                        Book your ride quickly and travel safely with UCab.

                    </p>

                </div>

                <div className="row mt-5">

                    <div className="col-md-4">

                        <div className="dashboard-card">

                            <h3>🚖</h3>

                            <h4>Available Cabs</h4>

                            <p>

                                Explore all available cars.

                            </p>

                            <Link

                                className="btn btn-primary"

                                to="/user/cabs"

                            >

                                View Cabs

                            </Link>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="dashboard-card">

                            <h3>📖</h3>

                            <h4>My Bookings</h4>

                            <p>

                                View your ride history.

                            </p>

                            <Link

                                className="btn btn-success"

                                to="/user/mybookings"

                            >

                                My Bookings

                            </Link>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="dashboard-card">

                            <h3>👤</h3>

                            <h4>Profile</h4>

                            <p>

                                Manage your account.

                            </p>

                            <Link

                                className="btn btn-dark"

                                to="/user/profile"

                            >

                                View Profile

                            </Link>

                        </div>

                    </div>

                </div>

                <div className="mt-5">

                    <div className="alert alert-primary">

                        <strong>Tip :</strong>

                        Choose the right cab according to your travel distance to save money.

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Uhome;