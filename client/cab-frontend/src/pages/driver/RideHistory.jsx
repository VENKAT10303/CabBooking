import { useEffect, useState } from "react";
import DriverNav from "../../components/driver/DriverNav";
import api from "../../services/api";

function RideHistory() {

    const [rides, setRides] = useState([]);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const res = await api.get(

                "/drivers/ride-history"

            );

            setRides(res.data.bookings);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <DriverNav />

            <div className="container py-5">

                <h2 className="mb-4 text-center">

                    Ride History

                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered text-center">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Passenger</th>

                                <th>Pickup</th>

                                <th>Drop</th>

                                <th>Fare</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                rides.length>0 ?

                                rides.map((ride,index)=>(

                                    <tr key={ride._id}>

                                        <td>{index+1}</td>

                                        <td>

                                            {ride.user?.name}

                                        </td>

                                        <td>

                                            {ride.pickupLocation}

                                        </td>

                                        <td>

                                            {ride.dropLocation}

                                        </td>

                                        <td>

                                            ₹{ride.fare}

                                        </td>

                                        <td>

                                            {ride.status}

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td colSpan="6">

                                        No Rides Found

                                    </td>

                                </tr>

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default RideHistory;