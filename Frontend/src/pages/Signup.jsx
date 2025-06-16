import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '../services/authService'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export default function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    address: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await authService.register(form)
      await Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Your account has been created successfully.',
        confirmButtonColor: '#06B6D4'
      })
      navigate('/login')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'mobileNumber', label: 'Mobile Number', type: 'tel' },
    { name: 'address', label: 'Address', type: 'text' }
  ]

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/a.jpg')",
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
            <span className="text-5xl">✨</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Welcome to<br/>Our Community</h2>
          <hr className="w-16 border-white/30 mb-6" />
          <p className="text-white/80 text-lg mb-6 leading-relaxed">Join us and be part of something amazing.<br/>Create your account and start your journey with us.</p>
          <ul className="space-y-3">
            <li className="flex items-center text-white/90"><span className="text-cyan-400 mr-3 text-lg">✔</span> Secure Authentication</li>
            <li className="flex items-center text-white/90"><span className="text-cyan-400 mr-3 text-lg">✔</span> Easy to Use</li>
            <li className="flex items-center text-white/90"><span className="text-cyan-400 mr-3 text-lg">✔</span> 24/7 Support</li>
          </ul>
        </div>
        {/* Right Panel: Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-14 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/20 hover:backdrop-blur-3xl hover:scale-105 hover:shadow-cyan-400/40">
          <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">Create Account</h3>
          <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-6">
            <div className="grid grid-cols-1 gap-6">
            {fields.map(({ name, label, type }) => (
                <div key={name} className={name === 'address' ? '' : ''}>
                <label className="block text-white text-sm mb-1" htmlFor={name}>
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105"
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 hover:text-cyan-900 hover:shadow-cyan-400/40 hover:scale-105'}
                text-white flex items-center justify-center shadow-md text-lg mt-6`}
          >
            {loading && (
              <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-sm text-white/70 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="underline hover:text-white">Log In</Link>
        </p>
        </div>
      </div>
    </div>
  )
}
