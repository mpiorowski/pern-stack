import React, { FC } from "react";
import { Button } from "antd";
import "./App.less";

const App: React.FC = () => {
  const arr: number[] = [];

  arr.push(1);
  arr.push(3);
  console.log(arr); //

  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
