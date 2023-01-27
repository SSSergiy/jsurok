import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../../rdx/reducer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';
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
   TableFooter,
   TableBody,
   Button,
} from '@mui/material';

const Userss = () => {
   const usersа = useSelector(selectUsers);
   const dispatch = useDispatch();
   useEffect((): void => {
      dispatch(fetchUsers());
   }, [dispatch]);

   return (
      <>
         <Box sx={{ flexGrow: 1 }} className="container">
            <AppBar position="static">
               <Toolbar variant="dense">
                  <Typography variant="h2" color="inherit" component="div">
                     Users Page
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <TableContainer>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Avatar</StyledTableCell>
                     <StyledTableCell>Name</StyledTableCell>
                     <StyledTableCell>Username</StyledTableCell>
                     <StyledTableCell>Phone</StyledTableCell>
                     <StyledTableCell>Website</StyledTableCell>
                     <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {usersа.map(({ name, username, phone, website, id }) => (
                     <TableRow hover key={id}>
                        <StyledTableCell>
                           <Typography>
                              <Avatar {...stringAvatar(name)} />
                           </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                           <Typography variant="h6">{name}</Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                           <Typography variant="h6">{username}</Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                           <Typography variant="h6">{phone}</Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                           <Typography variant="h6">{website}</Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                           <Link
                              to={`/users/${id}/albums`}
                              state={{
                                 name: name,
                                 username: username,
                                 phone: phone,
                                 website: website,
                                 id: id,
                              }}
                           >
                              <Button variant="contained" color="success" startIcon={<LibraryBooksIcon />}>
                                 Album
                              </Button>
                           </Link>
                        </StyledTableCell>
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
export default Userss;
