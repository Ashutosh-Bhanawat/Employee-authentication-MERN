import { Link } from 'react-router-dom'

export default function Home({ isLoggedIn }) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative backdrop-blur-sm border border-white/5 shadow-2xl rounded-3xl p-12 w-full max-w-2xl text-center hover:backdrop-blur-md transition-all duration-500 hover:scale-105">
        
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-2xl">
          👋 Welcome
        </h1>
        
        <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-xl">
          to
        </h2>
        
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-cyan-300 drop-shadow-xl">
          Our Community
        </h2>

        <p className="text-white text-lg mb-4 leading-relaxed drop-shadow-xl">
          Join us and be part of something amazing.
        </p>
        
        <p className="text-white text-base mb-10 leading-relaxed drop-shadow-lg">
          Create your account and start your journey with us.
        </p>

        <div className="mb-10">
          <div className="flex items-center justify-start mb-4 text-white">
            <div className="w-6 h-6 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm drop-shadow-lg">✓</span>
            </div>
            <span className="text-lg drop-shadow-lg">Secure Authentication</span>
          </div>
          
          <div className="flex items-center justify-start mb-4 text-white">
            <div className="w-6 h-6 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm drop-shadow-lg">✓</span>
            </div>
            <span className="text-lg drop-shadow-lg">Easy to Use</span>
          </div>
          
          <div className="flex items-center justify-start mb-6 text-white">
            <div className="w-6 h-6 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm drop-shadow-lg">✓</span>
            </div>
            <span className="text-lg drop-shadow-lg">24/7 Support</span>
          </div>
        </div>

        <div className="text-right mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
            Create Account or Log In
          </h3>
        </div>

        {!isLoggedIn ? (
          <div className="flex justify-center gap-6">
            <Link to="/login">
              <button className="px-8 py-4 bg-blue-500/20 hover:bg-blue-600/40 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/20 hover:scale-110 hover:-translate-y-1 text-lg text-white drop-shadow-lg">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-8 py-4 bg-green-500/20 hover:bg-green-600/40 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-2xl font-semibold shadow-2xl hover:shadow-green-500/20 hover:scale-110 hover:-translate-y-1 text-lg text-white drop-shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/dashboard">
            <button className="mt-6 px-8 py-4 bg-cyan-500/20 hover:bg-cyan-600/40 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/20 hover:scale-110 hover:-translate-y-1 text-lg text-white drop-shadow-lg">
              Go to Dashboard
            </button>
          </Link>
        )}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-white drop-shadow-lg">
          © 2025 AuthPortal
        </div>
      </div>
    </div>
  )
}