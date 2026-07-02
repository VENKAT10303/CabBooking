import { useEffect, useState } from "react";
import Unav from "../../components/user/Unav";
import Footer from "../../components/common/Footer";
import api from "../../services/api";

function Profile() {

    const [user, setUser] = useState({

        name: "",

        email: "",

        phone: ""

    });

    useEffect(() => {

        getProfile();

    }, []);

    const getProfile = async () => {

        try {

            const res = await api.get("/users/profile");

            setUser(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const updateProfile = async (e) => {

        e.preventDefault();

        try {

            const res = await api.put(

                "/users/profile",

                user

            );

            alert(res.data.message);

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

                    <div className="col-md-6">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">

                                My Profile

                            </h2>

                            <form onSubmit={updateProfile}>

                                <input

                                    className="form-control mb-3"

                                    name="name"

                                    value={user.name}

                                    onChange={handleChange}

                                />

                                <input

                                    className="form-control mb-3"

                                    name="email"

                                    value={user.email}

                                    onChange={handleChange}

                                />

                                <input

                                    className="form-control mb-3"

                                    name="phone"

                                    value={user.phone}

                                    onChange={handleChange}

                                />

                                <button

                                    className="btn btn-primary w-100"

                                >

                                    Update Profile

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

export default Profile;