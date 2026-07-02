import { useEffect, useState } from "react";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Ahome() {

    const [dashboard, setDashboard] = useState({

        totalUsers: 0,

        totalCars: 0,

        totalBookings: 0

    });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const res = await api.get("/admin/dashboard");

            setDashboard(res.data.dashboard);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <Anav />

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    Admin Dashboard

                </h2>

                <div className="row">

                    <div className="col-md-4">

                        <div className="dashboard-card bg-primary text-white">

                            <h1>

                                👤

                            </h1>

                            <h3>

                                {dashboard.totalUsers}

                            </h3>

                            <p>

                                Total Users

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="dashboard-card bg-success text-white">

                            <h1>

                                🚖

                            </h1>

                            <h3>

                                {dashboard.totalCars}

                            </h3>

                            <p>

                                Total Cars

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="dashboard-card bg-warning text-dark">

                            <h1>

                                📖

                            </h1>

                            <h3>

                                {dashboard.totalBookings}

                            </h3>

                            <p>

                                Total Bookings

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Ahome;