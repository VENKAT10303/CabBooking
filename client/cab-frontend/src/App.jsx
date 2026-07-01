import { Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Uhome from "./pages/user/Uhome";
import Cabs from "./pages/user/Cabs";
import BookCab from "./pages/user/BookCab";
import MyBookings from "./pages/user/MyBookings";
import Profile from "./pages/user/Profile";

// Admin Pages
import Alogin from "./pages/admin/Alogin";
import Aregister from "./pages/admin/Aregister";
import Ahome from "./pages/admin/Ahome";
import Users from "./pages/admin/Users";
import UserEdit from "./pages/admin/UserEdit";
import Bookings from "./pages/admin/Bookings";
import Acabs from "./pages/admin/Acabs";
import Acabedit from "./pages/admin/Acabedit";
import Addcar from "./pages/admin/Addcar";

function App() {
  return (
    <Routes>
      {/* User Routes */}
    
<Route path="/" element={<Home />} />
<Route path="/user/login" element={<Login />} />
<Route path="/user/register" element={<Register />} />
<Route path="/user/home" element={<Uhome />} />
<Route path="/user/cabs" element={<Cabs />} />
<Route path="/user/bookcab/:id" element={<BookCab />} />
<Route path="/user/mybookings" element={<MyBookings />} />
<Route path="/user/profile" element={<Profile />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<Alogin />} />
      <Route path="/admin/register" element={<Aregister />} />
      <Route path="/admin/home" element={<Ahome />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/users/edit/:id" element={<UserEdit />} />
      <Route path="/admin/bookings" element={<Bookings />} />
      <Route path="/admin/cabs" element={<Acabs />} />
      <Route path="/admin/cabs/edit/:id" element={<Acabedit />} />
      <Route path="/admin/addcar" element={<Addcar />} />
    </Routes>
  );
}

export default App;