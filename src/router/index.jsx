import Login from "@/components/Login";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Home from "@/components/views/Home";
import Register from "@/components/Register";
import AddNewCar from "@/components/views/AddingNewCar";
import SearchByOptions from "@/components/views/Search";
import ForgotPassword from "@/components/ForgotPassword";
import SearchByCategory from "@/components/views/Search/[category]";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import CarDetails from "@/components/views/CarDetails/[id]";
import Protected from "./Protected";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/add-new-car"
        element={
          <Protected>
            <AddNewCar />
          </Protected>
        }
      />
      <Route path="/search/" element={<SearchByOptions />} />
      <Route path="/car/:car_id" element={<CarDetails />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/search/:category" element={<SearchByCategory />} />
    </Route>
  )
);

export default routes;
