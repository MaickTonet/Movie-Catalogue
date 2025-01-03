import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import MovieView from './pages/movie-view';
import NotFound from './pages/notFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App children={<Home />} />,
  },
  {
    path: '/movie/:id',
    element: <App children={<MovieView />} />,
  },
  {
    path: '*',
    element: <App children={<NotFound />} />,
  },
]);
