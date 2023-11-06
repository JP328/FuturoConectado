import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/users";
import { videoApi } from "./slices/Videos";

export const store = configureStore({
  reducer: {
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

export { 
  useAddUserMutation, 
  useUpdateUserMutation,
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } from './slices/users'

export { 
useAddVideoMutation, 
useFectchVideoByIdQuery, 
useFectchVideosQuery, 
useRemoveVideoMutation } from './slices/Videos'
