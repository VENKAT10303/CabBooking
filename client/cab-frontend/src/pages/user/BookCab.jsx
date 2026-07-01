import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Unav from "../../components/user/Unav";
import Footer from "../../components/common/Footer";
import api from "../../services/api";

function BookCab() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [car, setCar] = useState(null);

    const [formData, setFormData] = useState({

        pickupLocation: "",

        dropLocation: "",

        distance: ""

    });

    useEffect(() => {

        const getCar = async () => {

            try {

                const res = await api.get(`/cars/${id}`);

                setCar(res.data.car);

            }

            catch (err) {

                console.log(err);

            }

        };

        getCar();

    }, [id]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/bookings/book", {

                car: id,

                pickupLocation: formData.pickupLocation,

                dropLocation: formData.dropLocation,

                distance: Number(formData.distance)

            });

            alert("Ride Booked Successfully");

            navigate("/user/mybookings");

        }

        catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <>

            <Unav />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-md-7">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">

                                Book Ride

                            </h2>

                            {

                                car &&

                                <>

                                    <h4>{car.carName}</h4>

                                    <p>

                                        Brand : {car.brand}

                                    </p>

                                    <p>

                                        Type : {car.carType}

                                    </p>

                                    <p>

                                        Seats : {car.seats}

                                    </p>

                                    <h5 className="text-primary">

                                        ₹{car.pricePerKm} / Km

                                    </h5>

                                </>

                            }

                            <form onSubmit={handleSubmit}>

                                <input

                                    type="text"

                                    className="form-control mb-3"

                                    placeholder="Pickup Location"

                                    name="pickupLocation"

                                    onChange={handleChange}

                                    required

                                />

                                <input

                                    type="text"

                                    className="form-control mb-3"

                                    placeholder="Drop Location"

                                    name="dropLocation"

                                    onChange={handleChange}

                                    required

                                />

                                <input

                                    type="number"

                                    className="form-control mb-3"

                                    placeholder="Distance (Km)"

                                    name="distance"

                                    onChange={handleChange}

                                    required

                                />

                                <button

                                    className="btn btn-primary w-100"

                                >

                                    Confirm Booking

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default BookCab;