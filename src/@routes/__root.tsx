import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Footer } from '@components';
import { Header } from '@components';

const Layout = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
};

const Route = createRootRoute({
  component: Layout,
});

export { Route };
