import { useEffect, FC } from 'react';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { fetchAlbums, selectAlbums } from '../../rdx/reducer';
import { StyledTableCell, stringAvatar } from './../../utils/skins';

import {
   AppBar,
   Box,
   Toolbar,
   TableContainer,
   Table,
   TableHead,
   TableRow,
   TableCell,
   Avatar,
   Typography,
   TableFooter,
   TableBody,
   Button,
} from '@mui/material';

const Albumss: FC = () => {
   const location = useLocation();
   const albums = useSelector(selectAlbums);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAlbums(location.state.id));
   }, [location.state.id, dispatch]);

   return (
      <>
         <Box sx={{ flexGrow: 1 }} className="container">
            <AppBar position="static">
               <Toolbar variant="dense">
                  <Typography variant="h2" color="inherit" component="div">
                     Album Page
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <TableContainer>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>
                        <Avatar {...stringAvatar(location.state.name)} />
                     </StyledTableCell>
                     <StyledTableCell>{location.state.name}</StyledTableCell>
                     <StyledTableCell>{location.state.username}</StyledTableCell>
                     <StyledTableCell>{location.state.phone}</StyledTableCell>
                     <StyledTableCell>{location.state.website}</StyledTableCell>
                     <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {albums.map(({ title, userId, id }, index) => (
                     <TableRow hover key={id}>
                        <TableCell colSpan={2}>
                           <Typography variant="h6">{index + 1}</Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                           <Typography variant="h6">{title}</Typography>
                        </TableCell>
                        <TableCell>
                           <Link
                              to={`/users/${userId}/albums/${id}/photos`}
                              state={{
                                 indexAlbum: index + 1,
                                 titleAlbum: title,
                                 nameUser: location.state.name,
                                 usernameUser: location.state.username,
                                 phoneUser: location.state.phone,
                                 websiteUser: location.state.website,
                                 idTitle: id,
                              }}
                           >
                              <Button variant="contained" color="success" startIcon={<PhotoLibraryIcon />}>
                                 Photos
                              </Button>
                           </Link>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
               <TableFooter>
                  <TableRow>
                     <StyledTableCell></StyledTableCell>
                     <StyledTableCell></StyledTableCell>
                     <StyledTableCell></StyledTableCell>
                     <StyledTableCell></StyledTableCell>
                     <StyledTableCell></StyledTableCell>
                     <StyledTableCell></StyledTableCell>
                  </TableRow>
               </TableFooter>
            </Table>
         </TableContainer>
      </>
   );
};
export default Albumss;
