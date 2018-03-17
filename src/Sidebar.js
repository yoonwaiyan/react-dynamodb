import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

class SideBar extends Component {
  state = {
    collapsed: true
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={collapsed => this.setState({ collapsed })}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="home" />
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="info" />
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
