import { Link } from "react-router-dom";
import DriverNav from "../../components/driver/DriverNav";

function Dhome() {

    const driver = JSON.parse(localStorage.getItem("driver"));

    return (
        <>
            <DriverNav />

            <div className="container py-5">

                <h2 className="mb-4">
                    Welcome, {driver?.name}
                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">
                        <Link
                            to="/driver/pending"
                            className="text-decoration-none"
                        >
                            <div className="card shadow text-center p-4">
                                <h1>🚖</h1>
                                <h4>Pending Rides</h4>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-3 mb-4">
                        <Link
                            to="/driver/history"
                            className="text-decoration-none"
                        >
                            <div className="card shadow text-center p-4">
                                <h1>📜</h1>
                                <h4>Ride History</h4>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-3 mb-4">
                        <Link
                            to="/driver/earnings"
                            className="text-decoration-none"
                        >
                            <div className="card shadow text-center p-4">
                                <h1>💰</h1>
                                <h4>Earnings</h4>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-3 mb-4">
                        <Link
                            to="/driver/profile"
                            className="text-decoration-none"
                        >
                            <div className="card shadow text-center p-4">
                                <h1>👤</h1>
                                <h4>Profile</h4>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Dhome;