import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Loading from './components/loading'
import Home from './pages/home'

// TODO: check eslint warnings about lazy loading
const MovieView = lazy(() => import('./pages/movie-view'))
const Search = lazy(() => import('./pages/search'))
const NotFound = lazy(() => import('./pages/notFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App children={<Home />} />,
  },
  {
    path: '/movie/:id',
    element: (
      <App
        children={
          <Suspense fallback={<Loading />}>
            <MovieView />
          </Suspense>
        }
      />
    ),
  },
  {
    path: '/buscar',
    element: (
      <App
        children={
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        }
      />
    ),
  },
  {
    path: '*',
    element: (
      <App
        children={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    ),
  },
])
