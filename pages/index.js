import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // 1. Logic: Default to dark mode (true)
  const [isDark, setIsDark] = useState(true);

  // 2. Data: Your navigation buttons
  const buttons = [
    { label: 'Hi', path: '/hi' },
    { label: 'Project', path: '/project' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    // The "dark" class at the top level enables "dark:" prefixing for all children
    <div className={isDark ? 'dark' : ''}>
      
      {/* 3. HTML Structure & Styling */}
      <main className="min-h-screen w-full flex items-center justify-center transition-colors duration-500 bg-slate-100 dark:bg-zinc-950">
        
        {/* Toggle Button (Top Right) */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="fixed top-10 right-10 p-4 rounded-full shadow-xl transition-all hover:scale-110 bg-white dark:bg-zinc-800"
        >
          {isDark ? (
            // Sun Icon (SVG HTML)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M4 12H3m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L5.121 5.121M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ) : (
            // Moon Icon (SVG HTML)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* The Main "Smooth Edges" Box */}
        <div className="w-full max-w-sm p-10 transition-all duration-500 bg-white dark:bg-zinc-900 shadow-2xl rounded-[3.5rem] border border-slate-200 dark:border-zinc-800">
          
          <h1 className="text-3xl font-black text-center mb-8 text-slate-800 dark:text-white">
            Welcome
          </h1>

          <div className="space-y-4">
            {buttons.map((btn) => (
              <Link key={btn.label} href={btn.path}>
                {/* Smooth button within the box */}
                <button className="w-full py-4 px-6 font-bold text-lg transition-all rounded-3xl bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-700 active:scale-95">
                  {btn.label}
                </button>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
