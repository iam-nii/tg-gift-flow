import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Games from "./pages/games.tsx";
import Inventory from "./pages/inventory.tsx";
import Roulette from "./pages/roulette.tsx";
import Profile from "./pages/profile.tsx";

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
