import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/blogs/Blogs";
import Support from "./pages/support/Support";
import Recommendations from "./pages/recommendations/Recommendations";
import Comic from "./pages/comic/Comic";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <main className="overflow-hidden relative bg-base-300 min-h-screen">
      {/* <Header /> */}
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/comic/:id" element={<Comic />} />
      </Routes>
    </main>
  );
}

export default App;
