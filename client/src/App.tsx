import React, { FC } from "react";
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import "./App.less";
import HomeComponent from "./components/home/HomeComponent";
import TodosComponent from "./components/todos/TodosComponent";
import { useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  let location = useLocation();

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/home">
              <NavLink to="/home">HOME</NavLink>
            </Menu.Item>
            <Menu.Item key="/todos">
              <NavLink to="/todos">TODOS</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Switch>
            <Route path="/todos">
              <TodosComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
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
