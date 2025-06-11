import React, { useState } from 'react';

export default function Header({ onToggle, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  // Header reveal state
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    onToggle();
  };

  // Handler for mouse enter/leave
  const handleHeaderEnter = () => setVisible(true);
  const handleHeaderLeave = () => setVisible(false);

  return (
    <>
      {/* Hotspot for revealing header */}
      <div
        className="fixed top-0 left-0 w-full h-2 z-50 bg-transparent cursor-pointer"
        onMouseEnter={handleHeaderEnter}
      ></div>
      {/* Header itself */}
      <header
        className={`
          fixed top-0 left-0 w-full z-40
          transition-all duration-500 ease-in-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md px-6 h-16
        `}
        onMouseLeave={handleHeaderLeave}
        onMouseEnter={handleHeaderEnter}
      >
        {/* Left section: Toggle + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <svg
              className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                isOpen ? 'rotate-0' : 'rotate-180'
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.17 16.17L13.34 12L9.17 7.83M14.83 16.17L19 12L14.83 7.83"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-xl font-semibold text-gray-800">
            My Enterprise
          </span>
        </div>

        {/* Right section: Logout */}
        <button
          onClick={onLogout}
          className="glass-logout-btn"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 14a9 9 0 100-18 9 9 0 000 18z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Logout
        </button>
      </header>
    </>
  );
}
