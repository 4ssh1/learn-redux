import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage"
import PostPage from "./features/PostPage"
import Navbar from "./Navbar"
import EditPost from "./features/EditPost"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/edit-posts/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
