import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from './Sidebar';
const { Sider, Content } = Layout;

class AppContainer extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        {this.props.children}
      </Layout>
    );
  }
}

export default AppContainer;
