import { FC } from 'react';
import { Button, Space } from 'antd';

const ButtonModal: FC = ({ openModal }) => {
  return (
    <>
      <Space direction='vertical' style={{ width: '30%', margin: '30px' }}>
        <Button type='primary' block htmlType='button' onClick={openModal}>
          <span>Add Character</span>
        </Button>
      </Space>
    </>
  );
};
export default ButtonModal;
