import { useEffect, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  styled,
  Avatar,
  Typography,
  TableFooter,
  TableBody,
  Button,
} from "@mui/material";

const Albumss = () => {
  const location = useLocation();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${location.state.id}/albums`
    )
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.footer}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
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
                    to={`/${id}/photos`}
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
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<PhotoLibraryIcon />}
                    >
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
