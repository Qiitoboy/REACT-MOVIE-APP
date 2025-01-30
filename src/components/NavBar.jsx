import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black px-8 py-4 flex justify-between items-center shadow-md">
      <div className="text-white text-xl font-bold">
        <Link to="/">Movie App</Link>
      </div>
      <div className="flex gap-8">
        <Link to="/" className="text-white text-lg px-4 py-2 rounded-md transition duration-200 hover:bg-white/10">
          Home
        </Link>
        <Link to="/favorites" className="text-white text-lg px-4 py-2 rounded-md transition duration-200 hover:bg-white/10">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
