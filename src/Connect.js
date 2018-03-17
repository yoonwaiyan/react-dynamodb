import React, { Component } from 'react';
import { withFormik } from 'formik';
import { Form, Icon, Input, Button, Layout, Row, Col, Card } from 'antd';
const FormItem = Form.Item;

class Connect extends Component {
  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
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
                      placeholder="Access Key ID"
                      values={values.accessKeyId}
                    />
                  </FormItem>
                  <FormItem label="Secret Access Key">
                    <Input
                      type="password"
                      placeholder="Secret Access Key"
                      values={values.secretAccessKey}
                    />
                  </FormItem>
                  <FormItem label="Region">
                    <Input placeholder="Region" values={values.region} />
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
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    console.log('values', values);
  }
};

export default withFormik(form)(Connect);
