import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import { Home, MovieDetails, PageNotFound } from './components';
import './App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='movie/:imdbID' element={<MovieDetails />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
