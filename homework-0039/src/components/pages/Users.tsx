import { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  tableCellClasses,
  styled
} from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);
  console.log(users);

  const tableTitles = [
    { title: 'name' },
    { title: 'username' },
    { title: 'phone' },
    { title: 'website' }
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  return (
    <main className='container'>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {tableTitles.map(({ title }) => (
                <StyledTableCell>{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ name, username, phone, website }) => (
              <TableRow hover>
                <TableCell>{name}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
export default Users;
