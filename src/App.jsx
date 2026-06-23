import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route path="*" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}