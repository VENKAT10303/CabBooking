import { useEffect, useState } from "react";
import Unav from "../../components/user/Unav";
import Footer from "../../components/common/Footer";
import CabCard from "../../components/user/CabCard";
import api from "../../services/api";

function Cabs() {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCars = async () => {

        try {

            const res = await api.get("/cars");

            setCars(res.data.cars);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchCars();

    }, []);

    return (

        <>

            <Unav />

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    Available Cars

                </h2>

                {
                    loading ?

                        <h4 className="text-center">

                            Loading Cars...

                        </h4>

                        :

                        <div className="row">

                            {
                                cars.length > 0 ?

                                    cars.map((car) => (

                                        <CabCard

                                            key={car._id}

                                            car={car}

                                        />

                                    ))

                                    :

                                    <h4 className="text-center">

                                        No Cars Available

                                    </h4>

                            }

                        </div>

                }

            </div>

            <Footer />

        </>

    );

}

export default Cabs;