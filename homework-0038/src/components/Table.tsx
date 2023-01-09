// import React from 'react';
// import { Table,Button } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// // import Modal from './Modal';
// import Delete from './Delete';
// const App: React.FC = () => {
// 	const [items, setItems] = React.useState([]);
// 	const propsis = (event) => {
// 		setItems(items)
// 	}
	
	
//   React.useEffect(() => {
//     const arr = [];
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         json.map((item) => {
//           const u = {
//             key: item.id + '',
//             name: item.name,
//             username: item.username,
//             Phone: item.phone
//           };
//           arr.push(u);
//           return arr;
//         });
//         setItems(arr);
//       });
// 	}, []);
	
// 	const columns = [
// 		{ title: 'name', dataIndex: 'name', align: 'center' },
// 		{title: 'FamilName',className: 'column-money',dataIndex: 'username',align: 'center'},
// 		{ title: 'Phone', dataIndex: 'Phone', align: 'center' },
// 		{	title: 'DeleteFunctional',
// 			render: () => ( <Delete  />), align: 'center'}];
//   return (
//     <>
//       <Table columns={columns} dataSource={items} bordered onChange={propsis}  />
//       {/* <Modal /> */}
//     </>
//   );
// };
// export default App;
