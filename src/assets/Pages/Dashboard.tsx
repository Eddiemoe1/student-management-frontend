import React, { useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState([
    { item: 'Total Students', count: 150 },
    { item: 'Total Lecturers', count: 20 },
    { item: 'Total Subjects', count: 10 },
    { item: 'Total Marks', count: 500 },
    { item: 'Total Staff', count: 40 },
    { item: 'Total Admins', count: 5 },
  ]);

  const handleChange = (index, value) => {
    const updated = [...stats];
    updated[index].count = value;
    setStats(updated);
  };

  return (
    <div style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(135deg, #e0f7fa, #fffde7)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2c3e50' }}>
            📊 Dashboard Overview
          </h2>
          <p style={{ fontSize: '16px', color: '#616161' }}>
            View and edit key statistics
          </p>
        </div>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#00bcd4',
              color: 'white',
              fontSize: '16px'
            }}>
              <th style={{ padding: '14px 20px', textAlign: 'left' }}>Metric</th>
              <th style={{ padding: '14px 20px', textAlign: 'right' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? '#f1f8e9' : '#ffffff',
                transition: 'background-color 0.3s ease'
              }}>
                <td style={{
                  padding: '14px 20px',
                  color: '#37474f',
                  fontWeight: '500'
                }}>
                  {stat.item}
                </td>
                <td style={{
                  padding: '14px 20px',
                  textAlign: 'right'
                }}>
                  <input
                    type="number"
                    value={stat.count}
                    onChange={(e) => handleChange(index, e.target.value)}
                    style={{
                      width: '80px',
                      padding: '6px 10px',
                      fontSize: '14px',
                      border: '1px solid #cfd8dc',
                      borderRadius: '6px',
                      textAlign: 'right'
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          color: '#757575',
          fontSize: '14px'
        }}>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

