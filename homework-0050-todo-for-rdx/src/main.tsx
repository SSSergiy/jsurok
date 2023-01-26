import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { StrictMode, FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userss from './components/pages/Userss';
import Photoss from './components/pages/Photoss';
import Albumss from './components/pages/Albumss';
import '@picocss/pico';
const router = createBrowserRouter([
   {
      path: '/',
      element: <Userss />,
   },
   {
      path: '/users/:userId/albums',
      element: <Albumss />,
   },
   {
      path: '/users/:userId/albums/:albumId/photos',
      element: <Photoss />,
   },
]);
import { reducer } from './rdx/reducer';

const store = configureStore({
   reducer,
});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
