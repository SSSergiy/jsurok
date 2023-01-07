import React from 'react';
import { Button, Form, Input, InputNumber, Space } from 'antd';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 }
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 3}
};

const App: React.FC = (props) => {
  const [form] = Form.useForm();
  return (
    <Form {...layout} form={form} name='control-hooks'>
      <Form.Item name='Name' label='Name'>
        <Input placeholder='Name' />
      </Form.Item>

      <Form.Item name='FamilName' label='FamilName'>
        <Input placeholder='FamilName' />
      </Form.Item>

      <Form.Item name='Phone' label='Phone'>
        <InputNumber placeholder='Phone' />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space size={[40,16]}>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>

          <Button htmlType='button' onClick={props.onClick}>
            Exit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
