import React from "react";
import TodosForm from "./TodosForm";

interface Props {}

const TodosComponent: React.FC = (props: Props) => {
  return (
    <div>
      <TodosForm></TodosForm>
    </div>
  );
};

export default TodosComponent;
