import React, { Component } from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

class AppContainer extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default AppContainer;
