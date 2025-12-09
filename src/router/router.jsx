import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Design1 from "../pages/design1/Design1";
import Design2 from "../pages/design2/Design2";
import Design3 from "../pages/design3/Design3";
import Design4 from "../pages/design4/Design4";

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
      {
        path: "/design3",
        element: <Design3 />,
      },
      {
        path: "/design4",
        element: <Design4 />,
      },
    ],
  },
]);
