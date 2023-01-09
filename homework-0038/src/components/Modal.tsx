import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Form from './Form';

const App: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal} size='middle'>
        Add Character
      </Button>
      <Modal open={open} title='Title' onCancel={handleCancel} footer={['']}>
        <Form onClick={handleCancel} />
      </Modal>
    </>
  );
};

export default App;
