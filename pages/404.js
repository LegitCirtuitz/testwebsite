import React from 'react';

export default function Custom404() {
  // Function to trigger the browser's "Back" action
  const goBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const containerStyle = {
    backgroundColor: '#09090b', 
    color: '#ffffff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px'
  };

  const boxStyle = {
    backgroundColor: '#18181b',
    padding: '3rem',
    borderRadius: '3rem',
    border: '1px solid #27272a',
    maxWidth: '400px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2.5rem',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '1.5rem',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'transform 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: '6rem', margin: 0, opacity: 0.5 }}>404</h1>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Lost in Space?</h2>
        <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>
          This page doesn't exist. Click below to return to safety.
        </p>
        
        {/* We use a button with an onClick instead of a Link */}
        <button 
          onClick={goBack} 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
