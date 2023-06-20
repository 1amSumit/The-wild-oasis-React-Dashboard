import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  { path: "dashboard", element: <Dashboard /> },
  { path: "bookings", element: <Bookings /> },
  { path: "account", element: <Account /> },
  { path: "cabins", element: <Cabins /> },
  { path: "settings", element: <Settings /> },
  { path: "users", element: <Users /> },
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
