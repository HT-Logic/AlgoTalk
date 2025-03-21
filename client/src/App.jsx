import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import MainPage from "./pages/Main";
import Explore from "./pages/Explore";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
        index: true,
        element: <MainPage />,
      },
      {
        path: "explore",
        element: <Explore />,
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
