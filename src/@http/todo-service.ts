import { TodosResponse } from '@interfaces';
import { httpInstance } from './http-service';

class TodoService {
  get() {
    return httpInstance.get<TodosResponse>('/todos');
  }
}

export { TodoService };
