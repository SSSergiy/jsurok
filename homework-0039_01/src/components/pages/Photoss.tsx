import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  ImageList,
} from "@mui/material";

const Photoss = () => {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  location.state;
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${location.state.idTitle}/photos`
    )
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos);
      });
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
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
              <StyledTableCell>
                Name - {location.state.nameUser}
              </StyledTableCell>
              <StyledTableCell>
                Username - {location.state.usernameUser}
              </StyledTableCell>
              <StyledTableCell>
                Phone - {location.state.phoneUser}
              </StyledTableCell>
              <StyledTableCell>
                website - {location.state.websiteUser}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3}>
                Album number - {location.state.indexAlbum}
              </StyledTableCell>
              <StyledTableCell colSpan={3}>
                Album name - "{location.state.titleAlbum}"
              </StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <ImageList sx={{ width: "100vw", height: 1000 }} cols={7} rowHeight={150}>
        {photos.map((itemPhoto, index) => (
          <figure key={index + 1}>
            <img
              src={itemPhoto.url}
              srcSet={itemPhoto.thumbnailUrl}
              alt={itemPhoto.title}
              loading="lazy"
            />
            <figcaption>{itemPhoto.title}</figcaption>
          </figure>
        ))}
      </ImageList>
    </>
  );
};
export default Photoss;
