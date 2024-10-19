import { createRouter } from '@tanstack/react-router';
import { rootRoute } from '../Layout';
import { homeRoute } from '../Home';
import { aboutRoute } from '../About';
import { contactRoute } from '../Contact';

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute]);

const router = createRouter({ routeTree });

export { router };
