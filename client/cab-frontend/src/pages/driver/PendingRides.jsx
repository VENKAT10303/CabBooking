import { useEffect, useState } from "react";
import DriverNav from "../../components/driver/DriverNav";
import api from "../../services/api";

function PendingRides() {

    const [rides, setRides] = useState([]);

    useEffect(() => {

        loadRides();

    }, []);

    const loadRides = async () => {

        try {

            const res = await api.get("/drivers/ride-history");

            const pending = res.data.bookings.filter(

                ride => ride.status === "Pending"

            );

            setRides(pending);

        }

        catch (err) {

            console.log(err);

        }

    };

    const acceptRide = async(id)=>{

        await api.put(`/drivers/accept/${id}`);

        alert("Ride Accepted");

        loadRides();

    };

    const rejectRide = async(id)=>{

        await api.put(`/drivers/reject/${id}`);

        alert("Ride Rejected");

        loadRides();

    };

    const startRide = async(id)=>{

        await api.put(`/drivers/start/${id}`);

        alert("Ride Started");

        loadRides();

    };

    const completeRide = async(id)=>{

        await api.put(`/drivers/complete/${id}`);

        alert("Ride Completed");

        loadRides();

    };

    return(

        <>
        <DriverNav/>

        <div className="container py-5">

        <h2 className="text-center mb-4">

        Pending Rides

        </h2>

        <div className="row">

        {

        rides.map((ride)=>(

        <div className="col-md-6" key={ride._id}>

        <div className="card shadow p-4 mb-4">

        <h5>

        Passenger :

        {ride.user?.name}

        </h5>

        <p>

        Pickup :

        {ride.pickupLocation}

        </p>

        <p>

        Drop :

        {ride.dropLocation}

        </p>

        <p>

        Fare :

        ₹{ride.fare}

        </p>

        <div className="d-flex gap-2 flex-wrap">

        <button

        className="btn btn-success"

        onClick={()=>acceptRide(ride._id)}

        >

        Accept

        </button>

        <button

        className="btn btn-danger"

        onClick={()=>rejectRide(ride._id)}

        >

        Reject

        </button>

        <button

        className="btn btn-warning"

        onClick={()=>startRide(ride._id)}

        >

        Start

        </button>

        <button

        className="btn btn-primary"

        onClick={()=>completeRide(ride._id)}

        >

        Complete

        </button>

        </div>

        </div>

        </div>

        ))

        }

        </div>

        </div>

        </>

    );

}

export default PendingRides;