import { useState } from 'react';
import { Button, Space, Input, Form } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
const ModalTodo = ({ closeModal, modalOpened, length, onChange }) => {
  const [obj, setObj] = useState([]);
  const addUser = (e) => {
    const abbjj = {
      name: e.target[0].value,
      username: e.target[1].value,
      phone: e.target[2].value,
      key: length + 1 + '',
      id: length + 1 + ''
    };
    setObj(abbjj);
    onChange.push(abbjj);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.preventDefault();
  };

  return (
    <>
      <div id='popup' className={`popup ${modalOpened ? 'popups' : null}`}>
        <div className='popup__body '>
          <div
            className={`popup__content ${
              modalOpened ? 'popup__contents' : null
            }`}
          >
            <CloseCircleOutlined
              href='#header'
              className='popup__close close-popup'
              onClick={closeModal}
            />
            <div className='popup__title'>ADD please persone</div>
            <div className='popup__text'>
              <div>
                <form noValidate onSubmit={addUser}>
                  <Form.Item
                    name='name'
                    label='name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name'
                      }
                    ]}
                  >
                    <Input
                      role='spinbutton'
                      step='1'
                      placeholder='Please input your name'
                      type='text'
                      id='control-hooks_user_name'
                    />
                  </Form.Item>
                  <Form.Item
                    name='username'
                    label='username'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username'
                      }
                    ]}
                  >
                    <Input
                      role='spinbutton'
                      step='1'
                      placeholder='Please input your username'
                      type='text'
                      id='control-hooks_user_username'
                    />
                  </Form.Item>
                  <Form.Item
                    name='username'
                    label='phone'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name'
                      }
                    ]}
                  >
                    <Input
                      role='spinbutton'
                      step='1'
                      placeholder='Please input your phone'
                      type='text'
                      id='control-hooks_Phone'
                    />
                  </Form.Item>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '30px'
                    }}
                  >
                    <div>
                      <Space wrap>
                        <Button type='primary' htmlType='submit'>
                          Save
                        </Button>
                      </Space>
                    </div>
                    <div>
                      <Space wrap>
                        <Button onClick={closeModal} htmlType='button'>
                          <span>Exit</span>
                        </Button>
                      </Space>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTodo;
