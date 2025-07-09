import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '@/pages/Error.page.';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/*',
      element: <ErrorPage />,
    },
  ],
  {
    basename: '/Portfolio-Website',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
