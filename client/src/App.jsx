import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import MainPage from "./pages/Main";
import Explore from "./pages/Explore";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    path: "/home",
    element: <Main />,
    children: [
      {
        path: "pc",
        element: <MainPage />,
        children: [
          {
            index: true,
            element: <Explore />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
