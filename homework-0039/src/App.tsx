// import Table from './components/Table';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users/>
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
