import Login from "@/components/Login";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Home from "@/components/views/Home";
import Register from "@/components/Register";
import AddNewCar from "@/components/views/AddingNewCar";
import ForgotPassword from "@/components/ForgotPassword";
import {
  Route,
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
