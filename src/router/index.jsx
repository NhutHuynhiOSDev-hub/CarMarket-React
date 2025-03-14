import Login from "@/components/Login/Login";
import Home from "@/components/views/Home/Home";
import Contact from "@/components/Contact/Contact";
import Profile from "@/components/Profile/Profile";
import Register from "@/components/Register/Register";
import AddNewCar from "@/components/views/AddingNewCar/AddNewCar";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";

import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-new-car" element={<AddNewCar />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);

export default routes;
