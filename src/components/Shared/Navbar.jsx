import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">Live Quiz</Link>
      <div>
        <Link to="/admin" className="mr-4">Admin</Link>
        <Link to="/join/sample">Join Quiz</Link>
      </div>
    </nav>
  );
}
