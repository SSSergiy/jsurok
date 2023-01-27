import { useEffect, useState, FC } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, selectPhotos } from '../../rdx/reducer';
import { StyledTableCell, stringAvatar } from './../../utils/skins';
import {
   AppBar,
   Box,
   Toolbar,
   TableContainer,
   Table,
   TableHead,
   TableRow,
   Avatar,
   Typography,
   ImageList,
} from '@mui/material';

const Photoss: FC = () => {
   const location = useLocation();
   const photos = useSelector(selectPhotos);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchPhotos(location.state.idTitle));
   }, [location.state.idTitle, dispatch]);
   console.log(photos);

   interface TypeItemPhoto {
      url: string;
      thumbnailUrl: string;
      title: string;
   }

   return (
      <>
         <Box sx={{ flexGrow: 1 }} className="container">
            <AppBar position="static">
               <Toolbar variant="dense">
                  <Typography variant="h2" color="inherit" component="div">
                     Photos Page
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <TableContainer>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>
                        <Avatar {...stringAvatar(location.state.nameUser)} />
                     </StyledTableCell>
                     <StyledTableCell>Name - {location.state.nameUser}</StyledTableCell>
                     <StyledTableCell>Username - {location.state.usernameUser}</StyledTableCell>
                     <StyledTableCell>Phone - {location.state.phoneUser}</StyledTableCell>
                     <StyledTableCell>website - {location.state.websiteUser}</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableHead>
                  <TableRow>
                     <StyledTableCell colSpan={3}>Album number - {location.state.indexAlbum}</StyledTableCell>
                     <StyledTableCell colSpan={3}>Album name - "{location.state.titleAlbum}"</StyledTableCell>
                  </TableRow>
               </TableHead>
            </Table>
         </TableContainer>
         <ImageList cols={7} rowHeight={150}>
            {photos.map((itemPhoto: TypeItemPhoto, index) => (
               <figure key={index + 1}>
                  <img src={itemPhoto.url} srcSet={itemPhoto.thumbnailUrl} alt={itemPhoto.title} loading="lazy" />
                  <figcaption>{itemPhoto.title}</figcaption>
               </figure>
            ))}
         </ImageList>
      </>
   );
};
export default Photoss;
