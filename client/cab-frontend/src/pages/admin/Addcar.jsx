import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Addcar() {

    const navigate = useNavigate();

    const [formData,setFormData]=useState({

        carName:"",
        brand:"",
        carType:"",
        seats:"",
        pricePerKm:""

    });

    const [image,setImage]=useState(null);

    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };

    const submit=async(e)=>{

        e.preventDefault();

        const data=new FormData();

        Object.keys(formData).forEach(key=>{

            data.append(key,formData[key]);

        });

        data.append("image",image);

        try{

            const res=await api.post(

                "/cars/add",

                data,

                {

                    headers:{

                        "Content-Type":"multipart/form-data"

                    }

                }

            );

            alert(res.data.message);

            navigate("/admin/cabs");

        }

        catch(err){

            alert(err.response?.data?.message);

        }

    };

    return(

        <>

        <Anav/>

        <div className="container py-5">

            <div className="col-md-6 mx-auto">

                <div className="card p-4 shadow">

                    <h2 className="text-center mb-4">

                        Add Car

                    </h2>

                    <form onSubmit={submit}>

                        <input className="form-control mb-3" placeholder="Car Name" name="carName" onChange={handleChange}/>

                        <input className="form-control mb-3" placeholder="Brand" name="brand" onChange={handleChange}/>

                        <input className="form-control mb-3" placeholder="Car Type" name="carType" onChange={handleChange}/>

                        <input className="form-control mb-3" placeholder="Seats" name="seats" onChange={handleChange}/>

                        <input className="form-control mb-3" placeholder="Price Per Km" name="pricePerKm" onChange={handleChange}/>

                        <input

                        type="file"

                        className="form-control mb-3"

                        onChange={(e)=>setImage(e.target.files[0])}

                        />

                        <button className="btn btn-success w-100">

                            Add Car

                        </button>

                    </form>

                </div>

            </div>

        </div>

        </>

    );

}

export default Addcar;