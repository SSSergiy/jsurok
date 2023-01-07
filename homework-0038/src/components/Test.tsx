import React from 'react';
import { Button, Form, Input, Space} from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 2 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="Name" label="Name" rules={[{ required: true }]}>
			<Input placeholder="Name" />
			</Form.Item>
			
      <Form.Item name="Familname" label="Note" rules={[{ required: true }]}>
			<Input placeholder="Familname" />
			</Form.Item>
			
      <Form.Item name="Phone" label="Note" rules={[{ required: true }]}>
			<Input placeholder="Phone" />
			</Form.Item>
			
			<Form.Item {...tailLayout} >
			<Space size={[8, 16]}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
					</Button>
					</Space>
			</Form.Item>
	
    </Form>
  );
};

export default App;