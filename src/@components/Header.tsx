import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/contact" className="[&.active]:font-bold">
        Contact
      </Link>
    </div>
  );
};

export { Header };
