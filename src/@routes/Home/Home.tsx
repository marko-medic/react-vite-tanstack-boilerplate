import { useQuery } from '@tanstack/react-query';

const getTodos = () => {
  return fetch('https://dummyjson.com/todos').then((res) => res.json());
};

const Home = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  console.log(query.data);

  return (
    <div>
      <h1>Trojka home page</h1>
    </div>
  );
};

export { Home };
