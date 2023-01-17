import { useEffect, useState } from "react";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
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
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, []);
  console.log(albums);

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
              {/* <StyledTableCell><Avatar {...stringAvatar(name)} /></StyledTableCell>
              <StyledTableCell>{name}</StyledTableCell>
              <StyledTableCell>{ username}</StyledTableCell>
              <StyledTableCell>{phone}</StyledTableCell>
              <StyledTableCell>{website}</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((albomIsems) => (
              <TableRow hover key={albomIsems.id}>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h6">{albomIsems.id}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h6">{albomIsems.title}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<PhotoLibraryIcon />}
                  >
                    Photos
                  </Button>
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
export default Albumss;
