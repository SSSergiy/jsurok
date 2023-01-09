import BtnDelete from '../BtnDelete/BtnDelete';
import { useState, useEffect } from 'react';

const Tbody: React.FC = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const arr: [] = [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        json.map((item) => {
          const obj = {
            key: item.id + '',
            name: item.name,
            username: item.username,
            phone: item.phone
          };
          arr.push(obj);
          return arr;
        });
        setItems(arr);
      });
  }, []);
  return (
    <>
      <tbody>
        {items.map(({ key, name, username, phone }) => (
          <tr key={key}>
            <td style={{ border: '1px solid ' }}>{name}</td>
            <td style={{ border: '1px solid ' }}>{username}</td>
            <td style={{ border: '1px solid ' }}>{phone}</td>
            <td style={{ border: '1px solid ' }}>
              <BtnDelete />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default Tbody;
