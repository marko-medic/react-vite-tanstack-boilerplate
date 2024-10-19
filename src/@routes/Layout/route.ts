import { createRootRoute } from '@tanstack/react-router';
import { Layout } from './Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

export { rootRoute };
