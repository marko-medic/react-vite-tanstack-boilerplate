import { createLazyFileRoute } from '@tanstack/react-router';

const Contact = () => {
  return (
    <div>
      <h1>Hello from contact page</h1>
    </div>
  );
};

const Route = createLazyFileRoute('/contact')({
  component: Contact,
});

export { Route };
