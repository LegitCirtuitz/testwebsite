import React from 'react';
import Link from 'next/link';

export default function PostOne() {
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

  const articleBox = {
    backgroundColor: '#18181b',
    padding: '3.5rem 2.5rem',
    borderRadius: '3.5rem', // That signature smooth edge
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
      {/* Wrapper to keep the back link aligned with the box */}
      <div style={{ maxWidth: '650px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Link href="/blog" style={backLink}>
          ← Back to Blog
        </Link>

        <article style={articleBox}>
          <header style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: '#71717a', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
              Personal Stories
            </span>
            <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', lineHeight: '1.2' }}>
              The Pipe Incident
            </h1>
          </header>

          <section style={{ fontSize: '1.15rem', color: '#d4d4d8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              It was a sunny day in the morning when I and my family were cleaning the house. 
              That's when a loud bang filled the house. Then, I shouted that a pipe burst.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              I regret saying that. Now everyone will think that I purposely burst the pipe 
              when I didn’t. But they didn’t think that it was me. Because the pipe burst 
              looks more of a crack in the pipe.
            </p>

            <p>
              Together, my family and I started to fix the broken pipe. 
              We successfully fixed the pipe.
            </p>
          </section>

          <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #27272a' }}>
            <p style={{ fontStyle: 'italic', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}>
              - By Enze
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
