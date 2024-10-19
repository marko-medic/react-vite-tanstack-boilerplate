import { httpInstance } from './http-service';

class TodoService {
  get() {
    return httpInstance.get('/todos');
  }
}

export { TodoService };
