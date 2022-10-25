import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import Detail from './containers/Detail';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<MovieList />} />
    <Route path="login" element={
      <PrivateComponent loginOnly={false}>
        <Login />
      </PrivateComponent>
    } />
    <Route path="register" element={
      <PrivateComponent loginOnly={false}>
        <Register />
      </PrivateComponent>
    } />
    <Route path="detail" element={<Detail />} />
    <Route path="*" element={<NotFound />} />
  </Route>));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
