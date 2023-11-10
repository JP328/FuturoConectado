import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/UsersSlice";
import { videoApi } from "./slices/VideosSlice";
import { userDataReducer } from "./slices/UserData";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    [usersApi.reducerPath] : usersApi.reducer,
    [videoApi.reducerPath] : videoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(videoApi.middleware);
  }
})

setupListeners(store.dispatch);

export {addUser, removeUser} from './slices/UserData';

export { 
  useAddUserMutation, 
  useUpdateUserMutation,
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } from './slices/UsersSlice'

export { 
useAddVideoMutation, 
useFectchVideoByIdQuery, 
useFectchVideosQuery, 
useRemoveVideoMutation } from './slices/VideosSlice'
