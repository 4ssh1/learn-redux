import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <section>
        <h1>Redux </h1>
        <div>
            <div>
                <Link to={'/'}>Posts</Link>
            </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
