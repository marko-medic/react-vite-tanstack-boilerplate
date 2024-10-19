import { rootRoute } from '@routes/Layout';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: lazyRouteComponent(() => import('./About'), 'About'),
});

export { aboutRoute };
