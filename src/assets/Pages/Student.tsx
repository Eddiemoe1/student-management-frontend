const Student = () => {
  const students = [
    { id: 1, name: 'Alice Johnson', regNo: 'REG001', course: 'Computer Science', year: '3rd Year', feeStatus: 'Paid' },
    { id: 2, name: 'Bob Smith', regNo: 'REG002', course: 'Information Technology', year: '2nd Year', feeStatus: 'Pending' },
    { id: 3, name: 'Clara Davis', regNo: 'REG003', course: 'Data Science', year: '1st Year', feeStatus: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">Student Records</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Reg No</th>
                <th className="border px-4 py-2">Course</th>
                <th className="border px-4 py-2">Year</th>
                <th className="border px-4 py-2">Fee Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className="text-center even:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.regNo}</td>
                  <td className="border px-4 py-2">{student.course}</td>
                  <td className="border px-4 py-2">{student.year}</td>
                  <td className={`border px-4 py-2 font-semibold ${student.feeStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {student.feeStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
