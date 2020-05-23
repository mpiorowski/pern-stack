import React, { FC } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.less";
import HomeComponent from "./components/home/HomeComponent";
import TodosComponent from "./components/todos/TodosComponent";
import { useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  let location = useLocation();

  return (
    <div className="App">
      <Layout className="App-layout">
        <Header className="App-header">
          <div className="App-logo" />
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className="App-header"
          >
            <Menu.Item key="/home">
              <NavLink to="/home">HOME</NavLink>
            </Menu.Item>
            <Menu.Item key="/todos">
              <NavLink to="/todos">TODOS</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <Switch>
            <Route path="/todos">
              <TodosComponent />
            </Route>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/">
              <Redirect to="/home"></Redirect>
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
