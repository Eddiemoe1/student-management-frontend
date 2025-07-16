const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p>Overview of statistics and summaries.</p>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Total Students</td>
            <td className="border px-4 py-2">150</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total Lecturers</td>
            <td className="border px-4 py-2">20</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total Subjects</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total Marks</td>
            <td className="border px-4 py-2">500</td>
          </tr>
            <tr>
              <td className="border px-4 py-2">Total Staff</td>
              <td className="border px-4 py-2">40</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
