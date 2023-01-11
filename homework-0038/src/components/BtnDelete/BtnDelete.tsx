import { Button, Space } from 'antd';

const BtnDelete = ({ onClickEditble }) => {
  return (
    <>
      <Space wrap>
        <Button type='primary' danger onClick={onClickEditble}>
          <span> Delete </span>
        </Button>
      </Space>
    </>
  );
};

export default BtnDelete;
