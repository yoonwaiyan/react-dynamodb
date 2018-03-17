import React, { Component } from 'react';
import { Layout, List } from 'antd';
import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk';
import credentials from './aws_credentials.json';
import { awsConfig } from './config.js';
AWS.config.update(credentials);

const { Content } = Layout;

const gridStyle = {
  width: '50%',
  textAlign: 'center'
};

type Props = {};

export default class TableList extends Component<Props> {
  props: Props;

  state = {
    tables: []
  };

  componentDidMount() {
    const dynamodb = new AWS.DynamoDB();
    dynamodb.listTables({}, (err, data) => {
      if (err) console.log(err, err.stack);
      else {
        // an error occurred
        console.log(data); // successful response
        this.setState({ tables: data.TableNames });
      }
    });
  }

  render() {
    const { tables } = this.state;
    return (
      <List
        size="large"
        header={<h3>Tables</h3>}
        bordered
        dataSource={tables}
        renderItem={table => (
          <List.Item>
            <Link to={`/tables/${table}`}>{table}</Link>
          </List.Item>
        )}
      />
    );
  }
}
