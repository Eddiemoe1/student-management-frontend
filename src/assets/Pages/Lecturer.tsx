const Lecturer = () => {
  const lecturers = [
    { id: 1, name: 'Prof. John Doe', email: 'john.doe@example.com', department: 'Computer Science' },
    { id: 2, name: 'Dr. Jane Smith', email: 'jane.smith@example.com', department: 'Mathematics' },
    { id: 3, name: 'Mr. Mike Brown', email: 'mike.brown@example.com', department: 'Physics' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Lecturer Management</h2>
      <p className="mb-6 text-gray-600">List and manage lecturer data.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden ">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm font-semibold">
              <th className="px-6 py-4 border-b"></th>
              <th className="px-6 py-4 border-b">Name</th>
              <th className="px-6 py-4 border-b">Email</th>
              <th className="px-6 py-4 border-b">Department</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map((lecturer) => (
              <tr key={lecturer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b text-gray-800">{lecturer.id}</td>
                <td className="px-6 py-4 border-b text-gray-800">{lecturer.name}</td>
                <td className="px-6 py-4 border-b text-gray-800">{lecturer.email}</td>
                <td className="px-6 py-4 border-b text-gray-800">{lecturer.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lecturer;
