import { useEffect, useState } from "react";
import DriverNav from "../../components/driver/DriverNav";
import api from "../../services/api";

function Earnings() {

    const [earnings, setEarnings] = useState({
        totalEarnings: 0,
        completedRides: 0
    });

    useEffect(() => {
        loadEarnings();
    }, []);

    const loadEarnings = async () => {
        try {

            const res = await api.get("/drivers/earnings");

            setEarnings(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <DriverNav />

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    Driver Earnings

                </h2>

                <div className="row">

                    <div className="col-md-6">

                        <div className="card shadow p-4 text-center">

                            <h3>Total Earnings</h3>

                            <h1 className="text-success">

                                ₹ {earnings.totalEarnings}

                            </h1>

                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="card shadow p-4 text-center">

                            <h3>Completed Rides</h3>

                            <h1>

                                {earnings.completedRides}

                            </h1>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );

}

export default Earnings;