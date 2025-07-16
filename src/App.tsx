import { Routes, Route } from 'react-router-dom';
import MainLayout from './assets/Layout/MainLayout';
import Dashboard from './assets/Pages/Dashboard';
import Admin from './assets/Pages/Admin';
import Lecturer from './assets/Pages/Lecturer';
import Login from './assets/Pages/Login';
import Marks from './assets/Pages/Mark';
import Staff from './assets/Pages/Staff';
import Student from './assets/Pages/Student';
import Subject from './assets/Pages/Subject';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="admins" element={<Admin />} />
        <Route path="lecturers" element={<Lecturer />} />
        <Route path="subjects" element={<Subject />} />
        <Route path="students" element={<Student />} />
        <Route path="staff" element={<Staff />} />
        <Route path="marks" element={<Marks />} />
      </Route>
    </Routes>
  );
};

export default App;
