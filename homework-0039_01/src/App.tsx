// import Table from './components/Table';
import { StrictMode, FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userss from "./components/pages/Userss";
import Photoss from "./components/pages/Photoss";
import Albumss from "./components/pages/Albumss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Userss />,
  },
  {
    path: "/users/:userId/albums",
    element: <Albumss />,
  },
  // {
  //   path: "/:albumId/photos",
  //   element: <Photoss />,
  // },
  {
    path: "/users/:userId/albums/:albumId/photos",
    element: <Photoss />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
