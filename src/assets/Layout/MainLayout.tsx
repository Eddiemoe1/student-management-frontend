import { Outlet, NavLink } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6">Student Manager</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink to="/" className="hover:text-blue-500">Dashboard</NavLink>
          <NavLink to="/students" className="hover:text-blue-500">Students</NavLink>
          <NavLink to="/lecturers" className="hover:text-blue-500">Lecturers</NavLink>
          <NavLink to="/subjects" className="hover:text-blue-500">Subjects</NavLink>
          <NavLink to="/marks" className="hover:text-blue-500">Marks</NavLink>
          <NavLink to="/staff" className="hover:text-blue-500">Staff</NavLink>
          <NavLink to="/admins" className="hover:text-blue-500">Admins</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Student Management System</h1>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
