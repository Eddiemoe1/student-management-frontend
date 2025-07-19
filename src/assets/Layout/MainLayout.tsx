import { Outlet, NavLink } from 'react-router-dom';
import "../../App.css";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100">
      {/* Top Navbar */}
      <header className="bg-white shadow-md px-6 py-3">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-xl font-bold text-blue-600">
            🎓 Student Management System
          </h1>

          <nav className="navbar">
            <CustomLink to="/">Dashboard</CustomLink>
            <CustomLink to="/students">Students</CustomLink>
            <CustomLink to="/lecturers">Lecturers</CustomLink>
            <CustomLink to="/subjects">Subjects</CustomLink>
            <CustomLink to="/marks">Marks</CustomLink>
            <CustomLink to="/staff">Staff</CustomLink>
            <CustomLink to="/admins">Admins</CustomLink>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
        isActive
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`
    }
  >
    {children}
  </NavLink>
);

export default MainLayout;
