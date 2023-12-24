import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/homepage/Homepage";
import Store from "./pages/Store";
import History from "./pages/History";
import CustomerService from "./pages/CustomerService";
import Skate from "./pages/Skate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/clients",
          element: <CustomerService />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/skate/:skateId",
          element: <Skate />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
