import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    id: string;
    name: string;
    email: string;
}
export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    endpoints: (builder) => ({
        //For fetching
        users: builder.query<User[], void>({
            query:  () => "/users"
        }),
        user: builder.query<User, string>({
            query: (id) => `/users/${id}`
        }),
        // We use mutation
        //For posting data
        addUser: builder.mutation<void, User>({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user
            })
        }),    
        //For updating data
        updateUser: builder.mutation<void, User>({
            query: ({id, ...rest}) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest
            })
        })
    })
})

export const { useUsersQuery, useUserQuery } = usersApi;