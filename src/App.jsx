import "./App.css";
import routes from "./router";
import AuthProvider from "./context/Auth";
import { RouterProvider } from "react-router";
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
