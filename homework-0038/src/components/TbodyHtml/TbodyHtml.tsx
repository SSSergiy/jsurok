import BtnDelete from '../BtnDelete/BtnDelete';
import { useState, useEffect, FC } from 'react';

const Tbody: FC = ({ onChange}) => {
  const [items, setItems] = useState([]);
	onChange(items);
  const handleDelete = (id) => {
    const arr = items.filter((item) => {
      return item.id !== id;
    });
    setItems(arr);
  };
  useEffect(() => {
    const arr: [] = [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        json.map(({ id, name, username, phone }) => {
          const obj = {
            id,
            key: id + '',
            name,
            username,
            phone
          };
					arr.push(obj);
          return arr;
        });
				setItems(arr);
      });
	}, []);

	const columnsHtml = () => {
	return items.length? items.map(({ id, key, name, username, phone }) => (
		<tr key={key}>
			<td style={{ border: '1px solid #1677FF', padding:"7px"}}>{name}</td>
			<td style={{ border: '1px solid #1677FF', padding:"7px"}}>{username}</td>
			<td style={{ border: '1px solid #1677FF', padding:"7px"}}>{phone}</td>
			<td style={{ border: '1px solid #1677FF', padding:"7px"}}>
				<BtnDelete onClickEditble={() => handleDelete(id)} />
			</td>
		</tr>
	)):null
	}

  return (
    <>
      <tbody>
				{columnsHtml()}
      </tbody>
    </>
  );
};
export default Tbody;
