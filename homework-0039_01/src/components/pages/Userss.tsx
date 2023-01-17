import { useEffect, useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
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

const Userss = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
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
            {users.map(({ name, username, phone, website, id }) => (
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
                  <Typography variant="h6">
                    {phone.split("x")[0].replace(/\D+/g, "")}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h6">{website}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<LibraryBooksIcon />}
                  >
                    Album
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
export default Userss;
