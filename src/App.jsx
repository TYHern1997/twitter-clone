import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route path="*" element={<AuthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  )
}