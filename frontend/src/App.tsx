import { Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home/Home";
import Blogs from "./pages/blogs/Blogs";
import Support from "./pages/support/Support";
import Recommendations from "./pages/recommendations/Recommendations";

function App() {
  return (
    <main className="overflow-hidden relative bg-zinc-900 min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </main>
  );
}

export default App;
