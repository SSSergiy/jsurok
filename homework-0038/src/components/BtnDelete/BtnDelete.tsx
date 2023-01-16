import { Button, Space } from 'antd';

const BtnDelete = ({ onClickEditble }:any) => {
  return (
    <>
      <Space wrap>
        <Button type='primary'  onClick={onClickEditble}>
          <span> Delete </span>
        </Button>
      </Space>
    </>
  );
};

export default BtnDelete;
