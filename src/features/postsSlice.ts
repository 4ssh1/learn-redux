import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../interfaces";

const initialState: Post[] = [
    {id: '1', title: 'Learning ML', content: 'A text'},
    {id: '2', title: 'How to write on Medium', content: 'More Text'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postAdded(state, action: PayloadAction<Post>){
        //     state.push(action.payload)
        // },

        postAdded: {
            reducer(state, action:PayloadAction<Post>){
                state.push(action.payload)
            },
            prepare(title: string, content: string){
                return {
                    payload: {
                        id: nanoid(), title, content
                    }
                }
            },
        },
        postUpdated(state, action: PayloadAction<Post>){
            const {id, title, content} = action.payload
            const existingPost = state.find(post=> post.id === id)
            
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const {postAdded, postUpdated, } = postsSlice.actions
export default postsSlice.reducer