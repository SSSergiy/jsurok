import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //ExpandMoreIcon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableFooter
} from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        console.log(users);
      });
  }, []);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
        // console.log(albums);
      });
  }, []);

  console.log(albums);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos);
        // console.log( photos);
      });
  }, []);
  console.log(photos);

  const tableTitles = [
    { title: 'avatar' },
    { title: 'name' },
    { title: 'username' },
    { title: 'phone' },
    { title: 'website' }
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
    // console.log(theme.palette.common)
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

  const filterAlbumsFunk = (id) => {
    const arr = albums.filter((item) => {
      return item.userId === id;
    });
    return arr;
  };

  const filterPhotosFunk = (id) => {
    const arr = photos.filter((item) => {
      return item.albumId === id;
    });
    return arr;
  };

  return (
    <>
      <main>
        {users.map(({ name, username, phone, website, id }) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>avatar</StyledTableCell>
                      <StyledTableCell>name</StyledTableCell>
                      <StyledTableCell>username</StyledTableCell>
                      <StyledTableCell>phone</StyledTableCell>
                      <StyledTableCell>website</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableFooter>
                    <TableRow>
                      <StyledTableCell>
                        <Typography>
                          <Avatar {...stringAvatar(name)} />
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='h6'>{name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='h6'>{username}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='h6'>{phone}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='h6'>{website}</Typography>
                      </StyledTableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </AccordionSummary>
            <AccordionDetails>
              <section>
                {filterAlbumsFunk(id).map((item) => (
                  <div>
                    <div
                      style={{
                        border: '4px ridge rgba(211, 220, 50, .6)',
                        padding: '5px'
                      }}
                    >
                      {' '}
                      {item.title}
                    </div>
                    {filterPhotosFunk(item.id).map((list) => (
	                  <img src={list.thumbnailUrl}></img>))}
                  </div>
                ))}
              </section>
            </AccordionDetails>
          </Accordion>
        ))}
      </main>
    </>
  );
};
export default Users;

// {filterPhotosFunk(item.id).map((list) => (
// 	<img src={list.url}></img>))}
