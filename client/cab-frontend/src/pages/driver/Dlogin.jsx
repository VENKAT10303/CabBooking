import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Dlogin() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",

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

            const res = await api.post(

                "/drivers/login",

                formData

            );

            localStorage.setItem(

                "token",

                res.data.token

            );

            localStorage.setItem(

                "driver",

                JSON.stringify(res.data.driver)

            );

            alert(res.data.message);

            navigate("/driver/home");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4 mt-5">

                        <h2 className="text-center mb-4">

                            Driver Login

                        </h2>

                        <form onSubmit={handleSubmit}>

                            <input

                                type="email"

                                className="form-control mb-3"

                                placeholder="Email"

                                name="email"

                                onChange={handleChange}

                                required

                            />

                            <input

                                type="password"

                                className="form-control mb-3"

                                placeholder="Password"

                                name="password"

                                onChange={handleChange}

                                required

                            />

                            <button

                                className="btn btn-success w-100"

                            >

                                Login

                            </button>

                        </form>

                        <p className="text-center mt-3">

                            New Driver?

                            {" "}

                            <Link to="/driver/register">

                                Register

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dlogin;