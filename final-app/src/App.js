
import { Layout, Menu } from 'antd';
import {BrowserRouter, Link, Route, Switch, withRouter } from "react-router-dom";
import { MainPage } from './components/MainPage.js';
import { AboutPage } from './components/AboutPage';
import React from 'react';

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  render() {
    let path = this.props.location.pathname;
    let selectedKeys;
    if (path === '/') {
      selectedKeys = ['1'];
    } else if (path === '/about') {
      selectedKeys = ['2'];
    } else {
      throw Error('Unexpected state!')
    }
    return (
      <Layout>
         <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKeys}>
            <Menu.Item key="1">
              <Link to='/'>Главная</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/about'>О нас</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="main-container">
            <Switch>
              <Route exact path='/'>
                <MainPage/>
              </Route>
              <Route exact path='/about'>
                <AboutPage/>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Knyazeva Anastasia. 2021.</Footer> 
      </Layout>
    );
  }
}

export default withRouter(App);
