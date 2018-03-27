import React, { Component } from 'react';
import { withFormik } from 'formik';
import { Form, Icon, Input, Button, Layout, Row, Col, Card } from 'antd';
import AWS from 'aws-sdk';
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;

class Connect extends Component {
  render() {
    const {
      values,
      errors,
      handleChange,
      handleSubmit,
      isSubmitting
    } = this.props;

    return (
      <Layout>
        <Layout.Content>
          <Row>
            <Col span={10} offset={7}>
              <Card
                title="Connect to AWS DynamoDB"
                bordered={false}
                style={{
                  transform: 'translate(0, 15%)'
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <FormItem label="Access Key ID">
                    <Input
                      name="accessKeyId"
                      placeholder="Access Key ID"
                      onChange={handleChange}
                      value={values.accessKeyId}
                    />
                  </FormItem>
                  <FormItem label="Secret Access Key">
                    <Input
                      name="secretAccessKey"
                      type="password"
                      placeholder="Secret Access Key"
                      onChange={handleChange}
                      value={values.secretAccessKey}
                    />
                  </FormItem>
                  <FormItem label="Region">
                    <Input
                      name="region"
                      placeholder="Region"
                      onChange={handleChange}
                      value={values.region}
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Connect
                    </Button>
                  </FormItem>
                </Form>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

const form = {
  mapPropsToValues: props => ({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1'
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    AWS.config.update(values);
    props.history.push('/tables');
  }
};

export default withRouter(withFormik(form)(Connect));
