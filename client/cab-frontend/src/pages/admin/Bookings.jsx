import { useEffect, useState } from "react";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Bookings() {

    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {

        try {

            const res = await api.get("/admin/bookings");

            setBookings(res.data.bookings);

        } catch (err) {

            console.log(err);

            alert(err.response?.data?.message || "Unable to fetch bookings");

        }

    };

    useEffect(() => {

        fetchBookings();

    }, []);

    return (

        <>

            <Anav />

            <div className="container py-5">

                <h2 className="text-center mb-4">

                    All Bookings

                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover text-center align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>User</th>

                                <th>Car</th>

                                <th>Pickup</th>

                                <th>Drop</th>

                                <th>Distance</th>

                                <th>Fare</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                bookings.length > 0 ?

                                    bookings.map((booking, index) => (

                                        <tr key={booking._id}>

                                            <td>{index + 1}</td>

                                            <td>

                                                {booking.user?.name}

                                            </td>

                                            <td>

                                                {booking.car?.carName}

                                            </td>

                                            <td>

                                                {booking.pickupLocation}

                                            </td>

                                            <td>

                                                {booking.dropLocation}

                                            </td>

                                            <td>

                                                {booking.distance} Km

                                            </td>

                                            <td>

                                                ₹ {booking.fare}

                                            </td>

                                            <td>

                                                <span
                                                    className={`badge
                                                    ${booking.status === "Completed"
                                                            ? "bg-success"
                                                            : booking.status === "Cancelled"
                                                                ? "bg-danger"
                                                                : "bg-warning text-dark"
                                                        }`}
                                                >

                                                    {booking.status}

                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td colSpan="8">

                                            No Bookings Found

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

export default Bookings;