import React, { useState, useEffect } from "react";
import TodosForm from "./TodosForm";
import TodosList from "./TodosList";
import { Row, Col } from "antd";
import { serviceAddTodo, serviceGetTodos } from "./api/TodosApi";

interface Props {}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

const TodosComponent: React.FC = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    serviceGetTodos().then((response: Todo[]) => {
      setTodos(response);
    });
  }, []);

  const addTodo = (todo: Todo) => {
    setTodos(todos?.concat(todo));
  };

  const handleSubmit = (values: Todo) => {
    console.log(values);
    serviceAddTodo(values).then((response) => {
      addTodo(response);
    });
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <TodosList todos={todos}></TodosList>
        </Col>
        <Col span={12}>
          <TodosForm handleSubmit={handleSubmit}></TodosForm>
        </Col>
      </Row>
    </div>
  );
};

export default TodosComponent;
