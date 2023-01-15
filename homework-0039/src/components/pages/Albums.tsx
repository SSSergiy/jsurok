import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
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
  Link
} from '@mui/material';

const Albums = () => {
	const [albums, setAlbums] = useState([]);
	const params = useParams()
   console.log(params);
	 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((albums) => {
				setAlbums(albums);
				console.log(albums);
				
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
						{/* title */}
						{/* userId */}
            {albums.map(({ title,userId,id}) => (
              <TableRow hover key={id}>
                {/* <TableCell>
                  <Avatar {...stringAvatar(name)} />
                </TableCell> */}
                <TableCell>{title}</TableCell>
                {/* <TableCell>{userId}</TableCell> */}
                {/* <TableCell>
                  <Link href='#' underline='none'>
                    {phone.split('x')[0].replace(/[^+\d]/g, '')}
                  </Link>
                </TableCell> */}
                {/* <TableCell>
                  <Link href='#' underline='none'>
                    {website}
                  </Link>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
export default Albums;
