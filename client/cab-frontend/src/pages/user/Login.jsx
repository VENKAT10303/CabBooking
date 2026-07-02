import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Unav from "../../components/user/Unav";

function Login() {

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

        const res = await api.post("/users/login", formData);

        console.log("LOGIN RESPONSE:", res.data);

        localStorage.setItem("token", res.data.token);

        localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
        );

        alert(res.data.message);

        if (res.data.user.role === "admin") {
    navigate("/admin/home");
} else {
    navigate("/user/home");
}

    } catch (err) {

        console.log(err.response?.data);

        alert(err.response?.data?.message || "Login Failed");

    }
};
    return (

        <>

            <Unav />

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow p-4 mt-5">

                            <h2 className="text-center mb-4">

                                User Login

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

                                <button className="btn btn-primary w-100">

                                    Login

                                </button>

                            </form>

                            <p className="text-center mt-3">

                                Don't have an account?

                                <Link to="/user/register">

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Login;