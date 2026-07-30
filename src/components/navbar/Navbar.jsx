import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Kesh
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link
              to="/checkout"
              className="hover:text-orange-400 transition-colors"
            >
              Cart
            </Link>

            {!user ? (
              <>
                <Link
                  to="/auth?mode=login"
                  className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 font-medium"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <p className="text-orange-400">Hello, {user.email}</p>
                <Link
                  to="/auth?mode=login"
                  onClick={logout}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-medium"
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
