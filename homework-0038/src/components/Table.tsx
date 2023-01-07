import React from 'react';
import { Table,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Modal from './Modal';
const columns: ColumnsType<arr> = [
  { title: 'name', dataIndex: 'name', align: 'center' },
  {title: 'FamilName',className: 'column-money',dataIndex: 'username',align: 'center'},
  { title: 'Phone', dataIndex: 'Phone', align: 'center' },
  {title: 'DeleteFunctional',render: () => ( <Button type='dashed' danger>  {' '} Delete{' '} </Button>), align: 'center' }
];
const App: React.FC = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const arr = [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        json.map((item) => {
          const u = {
            key: item.id + '',
            name: item.name,
            username: item.username,
            Phone: item.phone
          };
          arr.push(u);
          return arr;
        });
        setItems(arr);
      });
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={items} bordered />
      <Modal />
    </>
  );
};
export default App;
