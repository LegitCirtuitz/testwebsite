import React from 'react';
import Link from 'next/link';

export default function BlogList() {
  const containerStyle = {
    backgroundColor: '#09090b',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '4rem 1.5rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const cardStyle = {
    backgroundColor: '#18181b',
    padding: '2rem',
    borderRadius: '2.5rem', // Matching your smooth edges
    border: '1px solid #27272a',
    maxWidth: '600px',
    width: '100%',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
    display: 'block',
    marginBottom: '2rem'
  };

  const tagStyle = {
    backgroundColor: '#27272a',
    color: '#3b82f6',
    padding: '0.4rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '1rem'
  };

  const imagePreviewStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '2rem', // Smooth corners on the image, too
    backgroundColor: '#3b82f6', // Placeholder color if you don't have an image
    marginBottom: '1.5rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation back to Home */}
      <Link href="/" style={{ alignSelf: 'center', marginBottom: '3rem', color: '#a1a1aa', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Back to Home
      </Link>

      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', fontWeight: '900' }}>My Stories</h1>

      {/* --- Card 1: The Pipe Incident (keeping what we already had) --- */}
      <Link href="/blog/post-1" style={cardStyle}>
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#27272a';
            }}>
        <div style={tagStyle}>STORY</div>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Pipe Incident</h2>
        <p style={{ color: '#a1a1aa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          It was a sunny day in the morning when I and my family were cleaning the house. 
          That's when a loud bang filled the house...
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>Read full story →</span>
          <span style={{ color: '#52525b', fontSize: '0.9rem' }}>By Enze</span>
        </div>
      </Link>

      {/* --- Card 2: NEW! My Chinese New Year --- */}
      <Link href="/blog/post-2" style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#27272a';
            }}>
        
        {/* Placeholder image: replace background with your image */}
        <div style={imagePreviewStyle}>
          {/* Add <img src="/cici-story-image.jpg" alt="Chinese New Year" /> here */}
          CNY Travel Image
        </div>
        
        <div style={tagStyle}>STORY</div>
        
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>My Chinese New Year</h2>
        
        <p style={{ color: '#a1a1aa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          When it was Chinese New Year, my family and I went to Batam. The hotel was big and new.
          Our room was at level 5. Next, we went to the biggest mall...
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>Read full story →</span>
          <span style={{ color: '#52525b', fontSize: '0.9rem' }}>- By Cici</span>
        </div>
      </Link>

      <Link href="/blog/post-3" style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = '#3b82f6';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#27272a';
      }}>
  
  <div style={tagStyle}>TRADITION</div>
  
  <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>CNY Snacks & Games</h2>
  
  <p style={{ color: '#a1a1aa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
    We had reunion dinner at my grandparent’s house and played a fun game 
    using cooking utensils to try and win money from a pot...
  </p>
  
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>Read full story →</span>
    <span style={{ color: '#52525b', fontSize: '0.9rem' }}>- By Avery</span>
  </div>
</Link>

    </div>
  );
}
