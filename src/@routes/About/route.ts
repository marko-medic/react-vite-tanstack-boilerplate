import { rootRoute } from '@routes/Layout';
import { createRoute } from '@tanstack/react-router';
import { About } from './About';

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

export { aboutRoute };
