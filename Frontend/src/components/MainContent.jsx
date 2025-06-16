import React from 'react';

export default function MainContent({ email }) {
  // Extract first part of email (before @) as a fallback name
  const displayName = email ? email.split('@')[0] : 'Guest';
  
  return (
    <div
      className="h-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/a.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for extra blur and darkening */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="group bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-12 mb-6 text-white relative overflow-hidden transition-all duration-500 hover:bg-white/20 hover:backdrop-blur-3xl hover:scale-105 hover:shadow-cyan-400/40">
        {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 group-hover:bg-cyan-400/30 transition-all duration-500"></div>
        {/* Content */}
        <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-2 drop-shadow-lg flex items-center gap-2">
              <span className="text-cyan-300">🏆</span> Welcome back, <span className="text-white">{displayName}</span>
          </h2>
            <p className="text-base text-cyan-100 mb-2 drop-shadow">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-cyan-400/10 rounded-2xl border border-cyan-300/20 shadow-md hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-cyan-300 text-lg font-bold">✨</span> Explore new features
              </div>
              <div className="px-6 py-4 bg-pink-400/10 rounded-2xl border border-pink-300/20 shadow-md hover:bg-pink-400/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-pink-300 text-lg font-bold">🔥</span> Quick actions
              </div>
              <div className="px-6 py-4 bg-green-400/10 rounded-2xl border border-green-300/20 shadow-md hover:bg-green-400/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-green-300 text-lg font-bold">💡</span> Tips & Tricks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
