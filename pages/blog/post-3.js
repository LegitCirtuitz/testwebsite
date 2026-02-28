import React from 'react';
import Link from 'next/link';

export default function PostThree() {
  const containerStyle = {
    backgroundColor: '#09090b', // Dark mode
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
    borderRadius: '3.5rem', // Smooth corners
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
              Holiday Traditions
            </span>
            <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', lineHeight: '1.2' }}>
              CNY Snacks & Games
            </h1>
          </header>

          <section style={{ fontSize: '1.15rem', color: '#d4d4d8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When it was Chinese New Year, we ate many Chinese New Year snacks and 
              played some games. Everyone was having a lot of fun.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              We had reunion dinner together at my grandparent’s house.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              We played a game where everyone puts 2 dollars in a pot and everyone 
              takes turns using the cooking utensils to try and pick the money. 
              You can keep the money you picked up! Sometimes it's hard and most 
              people lose money, but for me, I won 4 dollars!
            </p>
          </section>

          <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #27272a' }}>
            <p style={{ fontStyle: 'italic', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}>
              - By Avery
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
