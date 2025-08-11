import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";


function PostPage() {
    const {id}= useParams()
    const post = useAppSelector(state=> state.posts.find(post=> post.id === id))

    if(!post){
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }
  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/edit-posts/${id}`}>Edit Post</Link>
      </article>
    </section>
  )
}

export default PostPage
