import { rootRoute } from '@routes/Layout';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: lazyRouteComponent(() => import('./Contact'), 'Contact'),
});

export { contactRoute };
