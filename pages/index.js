import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Set default to dark mode
  const [darkMode, setDarkMode] = useState(true);

  // List of buttons and their target routes
  const navItems = [
    { text: 'Hi', href: '/hi' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Background Wrapper */}
      <main className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
        
        {/* Toggle Button (Top Right) */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-8 right-8 p-3 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:scale-110 transition-transform"
        >
          {darkMode ? (
            // Sun Icon (shows when in dark mode to switch back)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M4 12H3m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L5.121 5.121M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ) : (
            // Moon Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Main Smooth Box */}
        <div className="w-80 p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Menu</h2>
          
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.text} href={item.href}>
                <button className="w-full py-4 px-6 text-lg font-medium transition-all duration-300 rounded-2xl bg-gray-50 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 border border-transparent hover:border-gray-300 dark:hover:border-zinc-600">
                  {item.text}
                </button>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
