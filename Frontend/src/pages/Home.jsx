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
      <div className="relative backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl p-12 w-full max-w-2xl text-center hover:backdrop-blur-md transition-all duration-500 hover:scale-105">
        
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-800">
          👋 Welcome
        </h1>
        
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          to
        </h2>
        
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-cyan-300">
          Our Community
        </h2>

        <p className="text-gray-800 text-lg mb-4 leading-relaxed">
          Join us and be part of something amazing.
        </p>
        
        <p className="text-gray-800 text-base mb-10 leading-relaxed">
          Create your account and start your journey with us.
        </p>

        <div className="mb-10">
          <div className="flex items-center justify-start mb-4 text-gray-800">
            <div className="w-6 h-6 bg-purple-600/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-lg">Secure Authentication</span>
          </div>
          
          <div className="flex items-center justify-start mb-4 text-gray-800">
            <div className="w-6 h-6 bg-purple-600/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-lg">Easy to Use</span>
          </div>
          
          <div className="flex items-center justify-start mb-6 text-gray-800">
            <div className="w-6 h-6 bg-purple-600/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/10">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-lg">24/7 Support</span>
          </div>
        </div>

        <div className="text-right mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Create Account or Log In
          </h3>
        </div>

        {!isLoggedIn ? (
          <div className="flex justify-center gap-6">
            <Link to="/login">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-2xl font-bold shadow-xl hover:shadow-blue-500/50 hover:scale-110 hover:-translate-y-1 text-lg text-white">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-2xl font-bold shadow-xl hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-1 text-lg text-white">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/dashboard">
            <button className="mt-6 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 rounded-2xl font-bold shadow-xl hover:shadow-cyan-500/50 hover:scale-110 hover:-translate-y-1 text-lg text-white">
              Go to Dashboard
            </button>
          </Link>
        )}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-800">
          © 2025 AuthPortal
        </div>
      </div>
    </div>
  )
}