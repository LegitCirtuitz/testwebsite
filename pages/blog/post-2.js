import React from 'react';
import Link from 'next/link';

export default function CiciPost() {
  const containerStyle = {
    backgroundColor: '#09090b', // Matches your dark mode theme
    color: '#ffffff',
    minHeight: '100vh',
    padding: '4rem 1.5rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const articleBox = {
    backgroundColor: '#18181b',
    padding: '3.5rem 2.5rem',
    borderRadius: '3.5rem', // The signature smooth edges
    border: '1px solid #27272a',
    maxWidth: '650px',
    width: '100%',
    lineHeight: '1.8',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
  };

  const backLink = {
    alignSelf: 'flex-start',
    marginBottom: '2rem',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '650px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Link href="/blog" style={backLink}>
          ← Back to Blog
        </Link>

        <article style={articleBox}>
          <header style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: '#71717a', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
              Travel Stories
            </span>
            <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', lineHeight: '1.2' }}>
              My Chinese New Year
            </h1>
          </header>

          <section style={{ fontSize: '1.15rem', color: '#d4d4d8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When it was Chinese New Year, my family and I went to Batam. 
              When we arrived, we went to the hotel. The hotel was big and new, 
              I can feel that I was lying on the bed now.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Our room was at level 5. At level 3 there’s a pool and a garden. 
              The next day, we went to the biggest mall for shopping then watch a movie.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              For the last day we play for a whole day. I wish we can go to Batam again.
            </p>
          </section>

          <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #27272a' }}>
            <p style={{ fontStyle: 'italic', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}>
              - By Cici
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
