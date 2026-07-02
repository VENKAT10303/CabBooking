import { useEffect, useState } from "react";
import DriverNav from "../../components/driver/DriverNav";
import api from "../../services/api";

function Dprofile() {

    const [driver, setDriver] = useState({

        name: "",
        email: "",
        phone: "",
        licenseNumber: ""

    });

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

    try {

        const res = await api.get("/drivers/profile");

        setDriver(res.data.driver);

    }

    catch (err) {

        console.log(err);

    }

};

    const handleChange = (e) => {

        setDriver({

            ...driver,

            [e.target.name]: e.target.value

        });

    };

    const updateProfile = async (e) => {

        e.preventDefault();

        try {

            const res = await api.put(

                "/drivers/profile",

                driver

            );

            alert(res.data.message);

        }

        catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <>

            <DriverNav />

            <div className="container py-5">

                <div className="col-md-6 mx-auto">

                    <div className="card shadow p-4">

                        <h2 className="text-center">

                            Driver Profile

                        </h2>

                        <hr />

                        <form onSubmit={updateProfile}>

                            <input

                                className="form-control mb-3"

                                name="name"

                                value={driver.name}

                                onChange={handleChange}

                            />

                            <input

                                className="form-control mb-3"

                                value={driver.email}

                                disabled

                            />

                            <input

                                className="form-control mb-3"

                                name="phone"

                                value={driver.phone}

                                onChange={handleChange}

                            />

                            <input

                                className="form-control mb-3"

                                name="licenseNumber"

                                value={driver.licenseNumber}

                                onChange={handleChange}

                            />

                            <button className="btn btn-success w-100">

                                Update Profile

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Dprofile;