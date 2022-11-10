import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import ForOrder from "../../Pages/CheckOut/ForOrder";
import Home from "../../Pages/Home/Home/Home";
import SeeAllMenu from "../../Pages/Home/Menu Item/SeeAllMenu";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Order/Orders";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/see",
        element: <SeeAllMenu></SeeAllMenu>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-khsultana.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/order/:id",
        element: <ForOrder></ForOrder>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-khsultana.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
