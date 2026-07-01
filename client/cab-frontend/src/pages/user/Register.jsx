import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Unav from "../../components/user/Unav";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        phone: "",

        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/users/register", formData);

            alert(res.data.message);

            navigate("/user/login");

        }

        catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <>

            <Unav />

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow p-4 mt-5">

                            <h2 className="text-center mb-4">

                                Create Account

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Phone"
                                    name="phone"
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />

                                <button className="btn btn-success w-100">

                                    Register

                                </button>

                            </form>

                            <p className="text-center mt-3">

                                Already have an account?

                                <Link to="/user/login">

                                    Login

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Register;