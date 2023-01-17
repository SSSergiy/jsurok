// import Table from './components/Table';
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Photoss from "./components/pages/Photoss";

const router = createBrowserRouter([
  {
    path: "/",
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
