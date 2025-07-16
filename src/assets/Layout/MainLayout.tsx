import { Outlet, NavLink } from 'react-router-dom';
import "../../App.css";



const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
          🎓 Student Management system
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
      </aside>
      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
         
        </header>

        {/* Page Content */}
        <main className="p-6 min-h-screen bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-6 py-4 rounded-md transition-all duration-400 ${
        isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
      }`
    }
  >
    {children}
  </NavLink>
);

export default MainLayout;
