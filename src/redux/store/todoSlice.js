// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getUsers = createAsyncThunk("getUsers", async function () {
//     return axios.get("https://dummyjson.com/users").then(resp => resp.data)
// })

// const todoSlice = createSlice({
//     name: "todoSlice",
//     initialState: {
//         todos: null,
//         isLoading: false,
//         message: ""
//     },
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(getUsers.pending, (state)=> {
//             state.isLoading = true
//         })
//         builder.addCase(getUsers.fulfilled, (state, action)=> {
//             state.todos = action.payload
//             state.isLoading = false
//         })
//         builder.addCase(getUsers.rejected, (state)=> {
//             state.isLoading = false
//             state.message = "error"
//         })
//     }

// })

// export default todoSlice.reducer