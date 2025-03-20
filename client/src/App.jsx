import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import MainPage from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ index: true, element: <MainPage /> }],
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
