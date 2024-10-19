import { useQuery } from '@tanstack/react-query';
import { TodoService } from '@http';

const todoService = new TodoService();

const Home = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: todoService.get });

  console.log(query.data);

  return (
    <div>
      <h1>Trojka home page</h1>
    </div>
  );
};

export { Home };
