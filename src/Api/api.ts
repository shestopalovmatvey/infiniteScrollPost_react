import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiPost = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (page = 1) => `posts?_page=${page}&_limit=10`,
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`
        })
    }),
})

export const { useGetPostQuery, useGetPostsQuery } = apiPost