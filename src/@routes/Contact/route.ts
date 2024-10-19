import { rootRoute } from '@routes/Layout';
import { createRoute } from '@tanstack/react-router';
import { Contact } from './Contact';

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

export { contactRoute };
