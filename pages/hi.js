import React from 'react';

export default function HiPage() {
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headerStyle}>Hi</h1>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f2f5', // Light grey background
};

const boxStyle = {
  padding: '40px 80px',
  backgroundColor: '#ffffff',
  // This creates the "smooth corners"
  borderRadius: '20px', 
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #eaeaea',
};

const headerStyle = {
  margin: 0,
  fontSize: '3rem',
  fontFamily: 'sans-serif',
  color: '#333',
};
