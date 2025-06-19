import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {ErrorPage} from "@/pages/Error.page.";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: "/*",
    element: <ErrorPage/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
