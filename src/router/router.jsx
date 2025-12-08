import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Design1 from "../pages/design1/Design1";
import Design2 from "../pages/design2/Design2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Design1 />,
      },
      {
        path: "/design2",
        element: <Design2 />,
      },
    ],
  },
]);
