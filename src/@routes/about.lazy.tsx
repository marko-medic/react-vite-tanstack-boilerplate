import { createLazyFileRoute } from '@tanstack/react-router';

const About = () => {
  return (
    <div>
      <h1>Hello from about page</h1>
    </div>
  );
};

const Route = createLazyFileRoute('/about')({
  component: About,
});

export { Route };
