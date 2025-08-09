import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../interfaces";

const initialState: Post[] = [
    {id: '1', title: 'Learning ML', content: 'A text'},
    {id: '2', title: 'How to write on Medium', content: 'More Text'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer