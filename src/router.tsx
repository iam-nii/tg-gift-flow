import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Profile from "./pages/Profile";
import Inventory from "./pages/Inventory";
import Roulette from "./pages/Roulette";
import Games from "./pages/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/roulette",
        element: <Roulette />,
      },
    ],
  },
]);

export default router;
