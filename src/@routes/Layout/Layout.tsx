import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
};

export { Layout };
