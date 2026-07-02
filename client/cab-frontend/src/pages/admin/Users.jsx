import { useEffect, useState } from "react";
import Anav from "../../components/admin/Anav";
import api from "../../services/api";

function Users() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {

            const res = await api.get("/admin/users");

            setUsers(res.data.users);

        } catch (err) {

            console.log(err);

            alert(err.response?.data?.message || "Unable to fetch users");

        }

    };

    useEffect(() => {

        fetchUsers();

    }, []);

    const deleteUser = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            const res = await api.delete(`/admin/users/${id}`);

            alert(res.data.message);

            fetchUsers();

        } catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <>
            <Anav />

            <div className="container py-5">

                <h2 className="text-center mb-4">

                    Manage Users

                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover text-center align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Name</th>

                                <th>Email</th>

                                <th>Phone</th>

                                <th>Role</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                users.length > 0 ?

                                    users.map((user, index) => (

                                        <tr key={user._id}>

                                            <td>{index + 1}</td>

                                            <td>{user.name}</td>

                                            <td>{user.email}</td>

                                            <td>{user.phone}</td>

                                            <td>

                                                <span
                                                    className={`badge ${user.role === "admin"
                                                            ? "bg-success"
                                                            : "bg-primary"
                                                        }`}
                                                >

                                                    {user.role}

                                                </span>

                                            </td>

                                            <td>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        deleteUser(user._id)
                                                    }
                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td colSpan="6">

                                            No Users Found

                                        </td>

                                    </tr>

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}

export default Users;