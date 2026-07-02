import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Acabedit(){

const {id}=useParams();

const navigate=useNavigate();

const [car,setCar]=useState({

carName:"",
brand:"",
carType:"",
seats:"",
pricePerKm:""

});

useEffect(()=>{

loadCar();

},[]);

const loadCar=async()=>{

const res=await api.get(`/cars/${id}`);

setCar(res.data.car);

};

const handleChange=(e)=>{

setCar({

...car,

[e.target.name]:e.target.value

});

};

const update=async(e)=>{

e.preventDefault();

await api.put(`/cars/update/${id}`,car);

alert("Car Updated Successfully");

navigate("/admin/cabs");

};

return(

<>

<Anav/>

<div className="container py-5">

<div className="col-md-6 mx-auto">

<div className="card p-4 shadow">

<h2>Edit Car</h2>

<form onSubmit={update}>

<input className="form-control mb-3" name="carName" value={car.carName} onChange={handleChange}/>

<input className="form-control mb-3" name="brand" value={car.brand} onChange={handleChange}/>

<input className="form-control mb-3" name="carType" value={car.carType} onChange={handleChange}/>

<input className="form-control mb-3" name="seats" value={car.seats} onChange={handleChange}/>

<input className="form-control mb-3" name="pricePerKm" value={car.pricePerKm} onChange={handleChange}/>

<button className="btn btn-primary w-100">

Update Car

</button>

</form>

</div>

</div>

</div>

</>

);

}

export default Acabedit;