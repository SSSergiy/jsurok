// import Table from './components/Table';
import { StrictMode } from "react";
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
    path: "/:userId/albums",
    element: <Albumss />,
  },
  {
    path: "/:albumId/photos",
    element: <Photoss />,
  },
]);

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
