import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // 1. Logic: Start in Dark Mode
  const [isDark, setIsDark] = useState(true);

  // 2. CSS Styles (Defined right here in the JS)
  const themeStyles = {
    backgroundColor: isDark ? '#09090b' : '#f8fafc',
    color: isDark ? '#ffffff' : '#0f172a',
    transition: 'all 0.5s ease',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  };

  const boxStyle = {
    backgroundColor: isDark ? '#18181b' : '#ffffff',
    padding: '3rem',
    borderRadius: '3rem', // The Smooth Edges
    boxShadow: isDark ? '0 25px 50px -12px rgba(0,0,0,0.5)' : '0 25px 50px -12px rgba(0,0,0,0.1)',
    border: `1px solid ${isDark ? '#27272a' : '#e2e8f0'}`,
    width: '320px',
    textAlign: 'center'
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '1rem',
    margin: '0.75rem 0',
    borderRadius: '1.5rem',
    border: 'none',
    backgroundColor: isDark ? '#27272a' : '#f1f5f9',
    color: isDark ? '#e4e4e7' : '#475569',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <div style={themeStyles}>
      
      {/* 3. The Moon/Sun Changer (Top Right) */}
      <button 
        onClick={() => setIsDark(!isDark)}
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          fontSize: '2rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* 4. The Main Box */}
      <div style={boxStyle}>
        <h1 style={{ marginBottom: '2rem' }}>Blog Page Website</h1>
        
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>Blogs</button>
        </Link>
      </div>

    </div>
  );
}
