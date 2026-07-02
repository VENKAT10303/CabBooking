import { useEffect, useState } from "react";
import Unav from "../../components/user/Unav";
import Footer from "../../components/common/Footer";
import api from "../../services/api";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {

        try {

            const res = await api.get("/bookings/my-bookings");

            setBookings(res.data.bookings);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchBookings();

    }, []);

    const cancelBooking = async (id) => {

        try {

            const confirmCancel = window.confirm(
                "Are you sure you want to cancel this booking?"
            );

            if (!confirmCancel) return;

            const res = await api.put(`/bookings/cancel/${id}`);

            alert(res.data.message);

            fetchBookings();

        } catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <>

            <Unav />

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    My Bookings

                </h2>

                {

                    bookings.length === 0 ?

                        <div className="alert alert-warning">

                            No bookings found.

                        </div>

                        :

                        bookings.map((booking) => (

                            <div
                                className="card shadow mb-4 p-4"
                                key={booking._id}
                            >

                                <h4>

                                    {booking.car?.carName}

                                </h4>

                                <p>

                                    <strong>Pickup :</strong>

                                    {booking.pickupLocation}

                                </p>

                                <p>

                                    <strong>Drop :</strong>

                                    {booking.dropLocation}

                                </p>

                                <p>

                                    <strong>Distance :</strong>

                                    {booking.distance} Km

                                </p>

                                <p>

                                    <strong>Fare :</strong>

                                    ₹ {booking.fare}

                                </p>

                                <p>

                                    <strong>Status :</strong>

                                    {booking.status}

                                </p>

                                {

                                    booking.status !== "Cancelled" &&

                                    booking.status !== "Completed" &&

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            cancelBooking(
                                                booking._id
                                            )
                                        }
                                    >

                                        Cancel Booking

                                    </button>

                                }

                            </div>

                        ))

                }

            </div>

            <Footer />

        </>

    );

}

export default MyBookings;