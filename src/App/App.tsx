import { Route, Routes, useLocation } from "react-router-dom"
import PostDetailPage from "../Pages/PostDetailPage/PostDetailPage"
import MainPage from "../Pages/MainPage/MainPage"

function App() {
  const loc = useLocation();
  return (
    <div className={`w-9/12 ${loc.pathname === '/' ? 'h-full' : 'h-screen'} m-auto mt-3 p-10 bg-neutral-50 rounded-xl`}>
        <Routes>
          <Route path="https://shestopalovmatvey.github.io/infiniteScrollPost_react/" element={<MainPage />} />
          <Route path="https://shestopalovmatvey.github.io/infiniteScrollPost_react/post/:id" element={<PostDetailPage />} />
        </Routes>    
    </div>
  )
}

export default App
