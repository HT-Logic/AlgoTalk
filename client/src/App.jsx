import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import MainPage from "./pages/Main";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/explore",
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
