import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export const PostList = ()=> {
    const posts = useAppSelector(state => state.posts)

    const post = posts.map(list=>(
        <article className="post" key={list.id}>
            <Link to={`/posts/${list.id}`}>
                <h3>{list.title}</h3>
            </Link>
            <p>{list.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {post}
        </section>
    )
}