import Home from "@/components/views/Home/Home";
import Contact from "@/components/Contact/Contact";
import Profile from "@/components/Profile/Profile";
import AddNewCar from "@/components/views/AddingNewCar/AddNewCar";

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
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-new-car" element={<AddNewCar />} />
    </Route>
  )
);

export default routes;
