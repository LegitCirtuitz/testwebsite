import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const containerStyle = {
    backgroundColor: '#09090b', // Keeping the Dark Mode default
    color: '#ffffff',
    minHeight: '100vh',
    padding: '4rem 2rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyle = {
    fontSize: '3rem',
    fontWeight: '900',
    marginBottom: '3rem',
    letterSpacing: '-1px'
  };

  const cardStyle = {
    backgroundColor: '#18181b',
    padding: '2.5rem',
    borderRadius: '2.5rem', // Smooth edges
    border: '1px solid #27272a',
    width: '100%',
    maxWidth: '600px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block'
  };

  const backButtonStyle = {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    color: '#a1a1aa',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: '1px solid #27272a',
    padding: '0.5rem 1rem',
    borderRadius: '1rem'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation back to Home */}
      <Link href="/" style={backButtonStyle}>
        ← Back
      </Link>

      <h1 style={headerStyle}>Blog</h1>

      {/* This is your first Blog Post Card */}
      <Link href="/blog/post-1" style={cardStyle} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.8rem' }}>FEB 2026</span>
        <h2 style={{ margin: '0.5rem 0', fontSize: '1.8rem' }}>BlogPage1</h2>
        <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>
          This is the start of my new blog. I can put whatever I want here! 
          The smooth edges make it look modern and clean.
        </p>
        <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
          Read More →
        </div>
      </Link>

      {/* You can copy the <Link> block above to add "BlogPage2" later! */}
    </div>
  );
}
