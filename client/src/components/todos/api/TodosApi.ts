import { apiRequest } from "../../../services/ApiRequest";
import { Todo } from "../TodosComponent";

export function serviceGetTodos(): Promise<Todo[]> {
  return apiRequest({
    url: "http://localhost:5000/api/todos",
    method: "GET",
  });
}

export function serviceAddTodo(values: Todo): Promise<Todo> {
  return apiRequest({
    url: "http://localhost:5000/api/todos",
    method: "POST",
    body: JSON.stringify(values),
  });
}
