import { RouterProvider } from 'react-router-dom';
import { router } from './router/index';
import { FC } from 'react';

export const App: FC = () => <RouterProvider router={router} />;
