import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">MyStore</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};
