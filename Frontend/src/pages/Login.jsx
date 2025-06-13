import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '../services/authService'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value.trim() }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    
    // Validate form
    if (!form.email || !form.password) {
      toast.error('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      console.log('Submitting form:', { ...form, password: '[REDACTED]' })
      const data = await authService.login(form)
      
      await Swal.fire({
        icon: 'success',
        title: 'OTP Sent!',
        text: `Your OTP sent on : ${data.email}`,
        confirmButtonColor: '#4F46E5'
      })
      
      navigate('/otp-verify', { 
        state: { 
          email: form.email,
          password: form.password,
          otp: data.otp
        },
        replace: true
      })
    } catch (err) {
      console.error('Login error:', err)
      toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/a.jpg ')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for extra blur and darkening */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 flex w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Panel: Welcome */}
        <div className="w-1/2 hidden md:flex flex-col justify-center items-start px-10 py-14 bg-white/10 backdrop-blur-2xl border-r border-white/20">
          <div className="mb-8">
            <span className="text-5xl">🔐</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Welcome<br/>Back</h2>
          <hr className="w-16 border-white/30 mb-6" />
          <p className="text-white/80 text-lg mb-6 leading-relaxed">Sign in to continue your journey with us.<br/>Secure, easy, and always available.</p>
          <ul className="space-y-3">
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> Secure Authentication</li>
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> Fast & Easy Access</li>
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> 24/7 Support</li>
          </ul>
        </div>
        {/* Right Panel: Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-14 bg-white/10 backdrop-blur-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">Sign In</h3>
          <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-6">
          <div>
            <label className="block text-white text-sm mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              placeholder="you@example.com"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'}
                text-white flex items-center justify-center shadow-md text-lg`}
          >
            {loading && (
              <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
        <p className="text-center text-sm text-white/70 mt-6">
          Don't have an account? <Link to="/signup" className="underline hover:text-white">Sign Up</Link>
        </p>
        </div>
      </div>
    </div>
  )
}
