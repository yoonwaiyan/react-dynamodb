import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from './Sidebar';
const { Sider, Content } = Layout;

class AppContainer extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default AppContainer;
