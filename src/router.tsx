import { createBrowserRouter } from "react-router-dom";
import UserProfile from "./pages/profile";
import AppLayout from "./AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
