import { FC } from 'react';
import { Button, Space } from 'antd';

const ButtonModal: FC = ({ openModal }) => {
  // console.log(openModal);

  return (
    <>
      <Space direction='vertical' style={{ width: '10%' }}>
        <Button type='primary' block htmlType='button' onClick={openModal}>
          <span>Add Character</span>
        </Button>
      </Space>
    </>
  );
};
export default ButtonModal;
