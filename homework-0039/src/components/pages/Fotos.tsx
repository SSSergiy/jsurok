import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
	
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  tableCellClasses,
  styled,
  Avatar,
} from '@mui/material';

const Fotos = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
				setUsers(users);
				console.log(users);
				
      });
  }, []);
  const tableTitles = [
    { title: 'avatar' },
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
  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  return (
		<main className='container'>
			<TableRow style={{justifyContent:"space-between",display:"flex"}}>
				<TableCell  >
					<Link to={"/albums"}>albums</Link>
				</TableCell>
				<TableCell>
					<Link>photos</Link>
				</TableCell>
			</TableRow>
			
			
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
            {users.map(({ name, username, phone, website,id }) => (
              <TableRow hover key={id}>
                <TableCell>
                  <Avatar {...stringAvatar(name)} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>
                    {phone.split('x')[0].replace(/[^+\d]/g, '')}
                </TableCell>
                <TableCell>
                    {website}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
export default Fotos;
