interface Todo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

interface TodosResponse {
  limit: number;
  skip: number;
  total: number;
  todos: Todo[];
}

export type { TodosResponse };
