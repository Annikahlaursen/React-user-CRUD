import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NavBar from "./components/NavBar.jsx";
import UserDetailPage from "./pages/UserDetailPage.jsx";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
