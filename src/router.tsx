import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Games from "./pages/games";
import Inventory from "./pages/inventory";
import Roulette from "./pages/roulette";
import Profile from "./pages/profile";

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
