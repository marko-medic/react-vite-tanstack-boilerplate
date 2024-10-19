import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import take from 'lodash/take';

import { Spinner } from '@components/Spinner';
import { TodoService } from '@http/todo-service';
import { TodosResponse } from '@interfaces';

const todoService = new TodoService();

const Home = () => {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.get,
  });

  const responseData = query.data?.data as TodosResponse;

  if (!responseData) {
    return <Spinner />;
  }

  const todoList = take(responseData.todos, 10);

  return (
    <div>
      <h1>Trojka home page</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};

const Route = createFileRoute('/')({
  component: Home,
});

export { Route };
