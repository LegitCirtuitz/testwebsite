import React from 'react';
import Link from 'next/link';

export default function PostOne() {
  const containerStyle = {
    backgroundColor: '#09090b',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '6rem 2rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'center'
  };

  const articleBox = {
    backgroundColor: '#18181b',
    padding: '4rem',
    borderRadius: '4rem', // Extra smooth for the main content
    border: '1px solid #27272a',
    maxWidth: '800px',
    width: '100%',
    lineHeight: '1.8'
  };

  const backLink = {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <Link href="/blog" style={backLink}>
        ← All Posts
      </Link>

      <article style={articleBox}>
        <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>February 2026 • 5 min read</span>
        
        <h1 style={{ fontSize: '3.5rem', margin: '1rem 0 2rem 0', lineHeight: '1.1' }}>
          BlogPage1: The Beginning
        </h1>

        <p style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '1.5rem' }}>
          This is where your story starts. Because we are using <strong>JSX</strong>, 
          you can mix standard text with bold tags, images, or even custom components.
        </p>

        <h3 style={{ color: '#3b82f6', marginTop: '2.5rem' }}>Why Smooth Edges?</h3>
        <p style={{ color: '#a1a1aa' }}>
          Designers often use high border-radius values (like the 4rem we used here) 
          to make digital interfaces feel more organic and less "computer-y." 
          It fits perfectly with your dark mode theme.
        </p>

        <div style={{ 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid #27272a',
          color: '#71717a',
          fontSize: '0.9rem'
        }}>
          Thanks for reading my first post!
        </div>
      </article>
    </div>
  );
}
