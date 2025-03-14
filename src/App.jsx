import "./App.css";
// import router from "./router";
import Home from "@/components/views/Home/Home";
import Contact from "@/components/Contact/Contact";
import Profile from "@/components/Profile/Profile";
import AddNewCar from "@/components/views/AddingNewCar/AddNewCar";

import { RouterProvider } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import routes from "./router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={routes} />
      </ClerkProvider>
    </>
  );
}

export default App;
