import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationIcon from '@mui/icons-material/Navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  styled,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableFooter,
  Fab
} from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [getPhotos, sepPhotos] = useState(false);
  const [getAlbums, sepAlbums] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, []);

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos);
        // console.log( photos);
      });
  }, []);


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
  function stringAvatar(name:string) {
    return {
      sx: {
        bgcolor: stringToColor(name )
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  const filterAlbumsFunk = (id:number)=> {
    const arr = albums.filter((item):boolean => {
      return item.userId === id;
    });
    return arr;
  };

  const filterPhotosFunk = (id:number) => {
    const arr = photos.filter((item) => {
      return item.albumId === id;
    });
    return arr;
  };

  const lookPhotos = ():void => {
    sepPhotos(true);
  };
  const lookAlbums = ():void => {
    sepPhotos(false);
    sepAlbums(true);
	};
	const removAlbums = ():void => {
		sepPhotos(false);
		sepAlbums(false);
	}
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar
            variant='dense'
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '30px'
            }}
          >
            <Fab variant='extended'onClick={lookAlbums}>
              <NavigationIcon  />
             ALBOMS
            </Fab>
            <Fab variant='extended'onClick={removAlbums}>
              <NavigationIcon  />
             Remowe ALL action
            </Fab>
            <Fab variant='extended'onClick={lookPhotos} >
              <NavigationIcon  />
              PHOTOS
            </Fab>
          </Toolbar>
        </AppBar>
      </Box>
      <main className='container'>
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
                        <Typography variant='h6'>
                          {phone.split('x')[0]}
                        </Typography>
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
                {getAlbums &&
                  filterAlbumsFunk(id).map((item) => (
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
                      {getPhotos &&
                        filterPhotosFunk(item.id).map((list) => (
                          <img src={list.thumbnailUrl}></img>
                        ))}
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
