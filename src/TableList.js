import React, { Component } from 'react';
import { List, Layout } from 'antd';
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk';

type Props = {};

export default class TableList extends Component<Props> {
  props: Props;

  state = {
    loading: false,
    tables: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    const dynamodb = new AWS.DynamoDB();
    dynamodb.listTables({}, (err, data) => {
      if (err) console.log(err, err.stack);
      else {
        // an error occurred
        console.log(data); // successful response
        this.setState({ tables: data.TableNames });
      }
      this.setState({ loading: false });
    });
  }

  render() {
    const { tables, loading } = this.state;
    return (
      <Layout>
        <Layout.Content>
          <List
            loading={loading}
            size="large"
            header={<h3>Select one table to view items:</h3>}
            bordered
            dataSource={tables}
            renderItem={table => (
              <List.Item>
                <Link to={`/tables/${table}`}>{table}</Link>
              </List.Item>
            )}
          />
        </Layout.Content>
      </Layout>
    );
  }
}
