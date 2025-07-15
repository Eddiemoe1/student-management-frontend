import { Routes, Route } from 'react-router-dom';
import MainLayout from './assets/Layout/MainLayout';
import Dashboard from './assets/Pages/Dashboard';
import Student from './assets/Pages/Student';
import Lecturer from './assets/Pages/Lecturer';
import Subject from './assets/Pages/Subject';
import Mark from './assets/Pages/Mark';
import Staff from './assets/Pages/Staff';
import Admin from './assets/Pages/Admin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="lecturers" element={<Lecturer />} />
        <Route path="subjects" element={<Subject />} />
        <Route path="marks" element={<Mark />} />
        <Route path="staff" element={<Staff />} />
        <Route path="admins" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
