const Dashboard = () => {
  const stats = [
    { item: 'Total Students', count: 150 },
    { item: 'Total Lecturers', count: 20 },
    { item: 'Total Subjects', count: 10 },
    { item: 'Total Marks', count: 500 },
    { item: 'Total Staff', count: 40 },
    { item: 'Total Admins', count: 5 },
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: '20px',
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '20px',
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: '#3d3948',
          textAlign: 'center'
        }}>Dashboard</h2>
        
        <p style={{ 
          marginBottom: '30px',
          fontSize: '18px',
          color: '#555',
          textAlign: 'center'
        }}>Overview of statistics and summaries.</p>
        
        <table style={{ 
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          margin: '0 auto'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#3d3948' }}>
              <th style={{ 
                padding: '20px', 
                textAlign: 'left', 
                borderBottom: '3px solid #ddd',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>Item</th>
              <th style={{ 
                padding: '20px', 
                textAlign: 'center', 
                borderBottom: '3px solid #ddd',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>Count</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} style={{
                transition: 'background-color 0.3s ease',
                
              }}>
                <td style={{ 
                  padding: '20px', 
                  borderBottom: '1px solid #eee',
                  color: '#333',
                  fontWeight: '500'
                }}>{stat.item}</td>
                <td style={{ 
                  padding: '20px', 
                  borderBottom: '1px solid #eee',
                  textAlign: 'center',
                  color: '#3d3948',
                  fontWeight: 'bold'
                }}>{stat.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;