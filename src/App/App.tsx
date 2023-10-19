import { Route, Routes } from "react-router-dom"
import PostDetailPage from "../Pages/PostDetailPage/PostDetailPage"
import MainPage from "../Pages/MainPage/MainPage"

function App() {
  return (
    <div className="w-9/12 h-screen m-auto mt-3 p-10 bg-neutral-50 rounded-xl">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
        </Routes>    
    </div>
  )
}

export default App
