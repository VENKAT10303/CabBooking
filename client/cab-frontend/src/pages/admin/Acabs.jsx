import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Acabs() {

    const [cars, setCars] = useState([]);

    const fetchCars = async () => {

        try {

            const res = await api.get("/admin/cars");

            setCars(res.data.cars);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchCars();

    }, []);

    const deleteCar = async (id) => {

        if (!window.confirm("Delete this car?")) return;

        try {

            const res = await api.delete(`/cars/delete/${id}`);

            alert(res.data.message);

            fetchCars();

        } catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <>
            <Anav />

            <div className="container py-5">

                <h2 className="mb-4 text-center">

                    Manage Cars

                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered text-center">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Car</th>

                                <th>Brand</th>

                                <th>Type</th>

                                <th>Seats</th>

                                <th>Price/Km</th>

                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                cars.map((car,index)=>(

                                    <tr key={car._id}>

                                        <td>{index+1}</td>

                                        <td>{car.carName}</td>

                                        <td>{car.brand}</td>

                                        <td>{car.carType}</td>

                                        <td>{car.seats}</td>

                                        <td>₹{car.pricePerKm}</td>

                                        <td>

                                            <Link

                                                className="btn btn-warning btn-sm me-2"

                                                to={`/admin/cabs/edit/${car._id}`}

                                            >

                                                Edit

                                            </Link>

                                            <button

                                                className="btn btn-danger btn-sm"

                                                onClick={()=>deleteCar(car._id)}

                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default Acabs;