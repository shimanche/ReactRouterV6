import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Post from "./routes/post";
import NoMatch from "./routes/nomatch";

function App() {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default App;
