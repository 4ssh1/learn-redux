import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { postUpdated } from "./postsSlice"
import type { FormElement } from "../interfaces"

function EditPost() {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const post = useAppSelector(state=> state.posts.find(post=> post.id === id))

    if(!post){
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    const savePost = (e: React.FormEvent<FormElement>)=> {
        e.preventDefault()

        const {elements} = e.currentTarget
        const title = elements.title.value
        const content = elements.content.value

        if(title || content) {
            dispatch(postUpdated({
                id: post.id,
                title,
                content
            }))

            navigate(`/posts/${id}`)
        }
    }

  return (
    <section>
        <h2>Edit Post</h2>
        <form onSubmit={savePost}>
            <label htmlFor="post-title">Post Title: </label>
            <input type="text" id="post-title" name="post-title" defaultValue={post.title}/>

            <label htmlFor="post-Content">Content: </label>
            <textarea id="post-Content" name="post-Content" defaultValue={post.content}/>

            <button>Save Post</button>
        </form>
    </section>
  )
}

export default EditPost
