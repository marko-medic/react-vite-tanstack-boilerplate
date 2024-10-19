import { rootRoute } from '@routes/Layout';
import { createRoute } from '@tanstack/react-router';
import { Home } from './Home';

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export { homeRoute };
