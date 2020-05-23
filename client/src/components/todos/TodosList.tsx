import React, { useState, useEffect } from "react";
import { List, Typography } from "antd";
import { Todo } from "./TodosComponent";
import { serviceGetTodos } from "./api/TodosApi";

interface Props {
  todos: Todo[] | undefined
}

const TodosList = (props: Props) => {

  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.todos}
      renderItem={(todo) => <List.Item>{todo.text}</List.Item>}
    />
  );
};

export default TodosList;
