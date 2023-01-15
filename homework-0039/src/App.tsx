// import Table from './components/Table';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Albums from './components/pages/Albums';
import Users from './components/pages/Users';
import Fotos from './components/pages/Fotos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users/>
  },
  {
    path: '/albums',
    element: <Albums/>
  },
  // {
  //   path: '/albums/:userId/',
  //   element: <Albums/>
  // },
  {
    path: '/photos',
    element: <Fotos/>
  },
]);

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    // <div>
    //   <Table />
    // </div>
  );
}

export default App;
