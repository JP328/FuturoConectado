import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const videoApi = createApi({
  reducerPath: 'video',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints(builder) {
    return {
      fectchVideos: builder.query({
        query: () => {
          return {
            method: 'GET',
            url: '/video'
          }
        }        
      }),
      fectchVideoById: builder.query({
        query: (id) => {
          return {
            method: 'GET',
            url: `/video/${id}`,
          }
        }        
      }),
      addVideo: builder.mutation({
        query: (data) => {
          return {
            method: 'POST',
            url: `/video/${data.idUsuario}`,
            body: {
              ...data
            }
          };
        }
      }),
      removeVideo: builder.mutation({
       query: (id) => {
        return {
          method: 'DELETE',
          url: `/video/${id}`,
          params: {
            id: id
          }
        }
       } 
      })
    }
  }
})

export const { 
  useFectchVideosQuery, 
  useFectchVideoByIdQuery, 
  useAddVideoMutation, 
  useRemoveVideoMutation } = videoApi;
export { videoApi };