import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd';
import ReactDataGrid from 'react-data-grid';
import AWS from 'aws-sdk';
import Loading from './util/Loading';

const { Content, Footer } = Layout;

type Props = {};

export default class TableView extends Component<Props> {
  props: Props;

  state = {
    columnAttributes: [],
    rows: [],
    minHeight: 500,
    nextEvaluateKey: null,
    loading: false
  };

  componentDidMount() {
    this.loadData();
  }

  getColumnAttributes = items => {
    let columns = [
      ...new Set(items.reduce((x, y) => [...x, ...Object.keys(y)], ['id']))
    ];
    const columnDefinitions = columns.map(col => ({
      key: col,
      name: col,
      width: 170,
      resizable: true
    }));

    console.log('column definitions', columnDefinitions);

    return columnDefinitions;
  };

  loadData = () => {
    this.setState({ loading: true });

    const docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: this.props.match.params.name,
      Limit: 100,
      ExclusiveStartKey: this.state.nextEvaluateKey
    };

    docClient.scan(params, (err, data) => {
      if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
        this.setState({ loading: false });
      } else {
        console.log('Query succeeded.', data);
        this.setState({
          rows: data.Items,
          columnAttributes: this.getColumnAttributes(data.Items),
          nextEvaluateKey: data.LastEvaluatedKey,
          loading: false
        });
      }
    });
  };

  render() {
    console.log('view props', this.props);
    const { match } = this.props;
    const { rows, columnAttributes, loading } = this.state;

    return (
      <Layout>
        <Content>
          <div style={{ height: '95vh' }}>
            {loading ? (
              <Loading />
            ) : (
              <ReactDataGrid
                enableCellSelect={false}
                columns={columnAttributes}
                rowGetter={i => rows[i]}
                rowsCount={rows.length}
                rowHeight={45}
                minHeight={this.state.minHeight}
              />
            )}
          </div>
          <div style={{ height: '5vh', padding: '5px 10px' }}>
            {match.params.name}{' '}
            <Button size={'small'} onClick={this.loadData} loading={loading}>
              Next<Icon type="right" />
            </Button>
          </div>
        </Content>
      </Layout>
    );
  }
}
