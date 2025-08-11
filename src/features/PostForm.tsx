import type { FormElement} from "../interfaces"
import { useAppDispatch } from "../app/hooks"
import { postAdded } from "./postsSlice"

// uncountrolled inputs

const PostForm = ()=>{
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<FormElement>)=>{
        e.preventDefault()

        const {elements} = e.currentTarget
        const title = elements.title.value
        const content = elements.content.value

        dispatch(postAdded(title, content))

        e.currentTarget.reset()

        console.log('Values: ', {title, content})
    }

    return (
        <section>
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Post Title: </label>
                <input type="text" id="title" defaultValue='' required />
                <label htmlFor="content">Content: </label>
                <textarea name="content" id="content" defaultValue='' required />
                <button>Save Post</button>
            </form>
        </section>
    )

}

export default PostForm