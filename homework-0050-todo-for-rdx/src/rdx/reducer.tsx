const initialState = {
   users: [],
   albums: [],
   photos: [],
};
///////////////////////////////////////////////////////////////////////////////////////////
// actions
export const SET_USERS = 'setUsers';
export const SET_ALBUMS = 'setAlbums';
export const SET_PHOTOS = 'setPhotos';
///////////////////////////////////////////////////////////////////////////////////////////

export const setUsers = (users) => {
   return {
      type: SET_USERS,
      payload: users,
   };
};

export const setAlbums = (albums) => {
   return {
      type: SET_ALBUMS,
      payload: albums,
   };
};

export const setPhotos = (photos) => {
   return {
      type: SET_PHOTOS,
      payload: photos,
   };
};
///////////////////////////////////////////////////////////////////////////////////////////

// reducer
export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         return { ...state, users: action.payload };
      case SET_ALBUMS:
         return { ...state, albums: action.payload };
      case SET_PHOTOS:
         return { ...state, photos: action.payload };
      default:
         return state;
   }
};

///////////////////////////////////////////////////////////////////////////////////////////

//action criators
export const fetchUsers = () => {
   return async (dispatch, getState) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await response.json();
      dispatch(setUsers(users));
   };
};

export const fetchAlbums = (userId) => {
   return async (dispatch, getState) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
      const albums = await response.json();
      dispatch(setAlbums(albums));
   };
};
export const fetchPhotos = (idTitle) => {
   return async (dispatch, getState) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${idTitle}/photos`);
      const photos = await response.json();
      console.log(photos);
      dispatch(setPhotos(photos));
   };
};

///////////////////////////////////////////////////////////////////////////////////////////

// selectors
export const selectUsers = (state) => state.users;
export const selectAlbums = (state) => state.albums;
export const selectPhotos = (state) => state.photos;
