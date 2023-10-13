import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Error } from '../components/Error';
import { Login } from '../components/Login';
import { TranslateForm } from '../components/TranslateForm';
import { Protected } from '../components/Protected';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/translation',
        element: (
          <Protected>
            <TranslateForm />
          </Protected>
        ),
      },
    ],
  },
]);