import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Favorite from "./pages/favorite";
import DetailMovie from "./components/DetailMovie";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/:slug" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;
