import React, { Component } from 'react';
import { Layout, Card, Table, Icon, Divider } from 'antd';
import ReactDataGrid from 'react-data-grid';
import AWS from 'aws-sdk';
import credentials from './aws_credentials.json';
import { awsConfig } from './config.js';
AWS.config.update(credentials);

const { Content } = Layout;

type Props = {};

export default class TableView extends Component<Props> {
  props: Props;

  state = {
    columnAttributes: [],
    rows: [],
    minHeight: 500
  };

  componentDidMount() {
    const docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: awsConfig.tableName,
      Limit: 200
    };

    docClient.scan(params, (err, data) => {
      if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
      } else {
        console.log('Query succeeded.');
        this.setState({
          rows: data.Items,
          columnAttributes: this.getColumnAttributes(data.Items)
        });
      }
    });
  }

  getColumnAttributes = items => {
    let columns = [
      ...new Set(items.reduce((x, y) => [...x, ...Object.keys(y)], []))
    ];
    return columns.map(col => ({ key: col, name: col, resizable: true }));
  };

  render() {
    const { routerProps } = this.props;
    console.log('view props', this.props);
    const { rows, columnAttributes } = this.state;
    console.log('rows', rows);
    return (
      <Content>
        <div style={{ height: '100vh' }}>
          <ReactDataGrid
            enableCellSelect={false}
            columns={columnAttributes}
            rowGetter={i => rows[i]}
            rowsCount={rows.length}
            rowHeight={45}
            minHeight={this.state.minHeight}
          />
        </div>
      </Content>
    );
  }
}
