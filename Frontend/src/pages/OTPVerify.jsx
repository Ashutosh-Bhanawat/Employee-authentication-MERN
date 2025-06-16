import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { toast } from 'react-toastify'

export default function OTPVerify() {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60) // 1 minute in seconds
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const password = location.state?.password
  const currentOtp = location.state?.otp // Get OTP from location state

  useEffect(() => {
    if (!email || !password) {
      navigate('/login')
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [email, password, navigate])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !otp) {
      toast.error('Please enter the OTP')
      return
    }

    // Validate OTP format
    if (!/^\d{6}$/.test(otp)) {
      toast.error('Please enter a valid 6-digit OTP')
      return
    }

    setLoading(true)
    try {
      console.log('Submitting OTP:', { email, otp }); // Add logging
      const response = await authService.verifyOTP({ email, otp })
      console.log('OTP verification successful:', response); // Add logging
      toast.success('Login successful!')
      navigate('/dashboard')
    } catch (error) {
      console.error('OTP verification failed:', error); // Add error logging
      toast.error(error.response?.data?.message || 'OTP verification failed')
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async () => {
    try {
      await authService.login({ email, password })
      setTimeLeft(300)
      toast.success('New OTP sent successfully')
    } catch (error) {
      toast.error('Failed to resend OTP')
    }
  }

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
        {/* Left Panel: Info */}
        <div className="w-1/2 hidden md:flex flex-col justify-center items-start px-10 py-14 bg-white/10 backdrop-blur-2xl border-r border-white/20">
          <div className="mb-8">
            <span className="text-5xl">🔒</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">OTP<br/>Verification</h2>
          <hr className="w-16 border-white/30 mb-6" />
          <p className="text-white/80 text-lg mb-6 leading-relaxed">Enter the OTP sent to your email to verify your account and continue your journey with us.</p>
          <ul className="space-y-3">
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> Secure Verification</li>
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> Fast & Easy</li>
            <li className="flex items-center text-white/90"><span className="text-pink-400 mr-3 text-lg">✔</span> 24/7 Support</li>
          </ul>
        </div>
        {/* Right Panel: OTP Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-14 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/20 hover:backdrop-blur-3xl hover:scale-105 hover:shadow-pink-400/40">
          <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">Verify Your Account</h3>
        {/* Display OTP at the top */}
        <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
          <p className="text-white/70 text-center text-sm">Your OTP is:</p>
          <p className="text-white text-center text-2xl font-mono tracking-[0.5em] mt-2">
            {currentOtp}
          </p>
        </div>
          <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-6">
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6-digit OTP"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white text-center text-2xl tracking-[0.5em] placeholder:text-base placeholder:tracking-normal placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 hover:bg-pink-400/10 hover:scale-105"
              required
              maxLength={6}
            />
            <div className="mt-2 text-center text-white/60 text-sm">
              Time remaining: {formatTime(timeLeft)}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || timeLeft === 0}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                ${loading || timeLeft === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-400 hover:text-pink-900 hover:shadow-pink-400/40 hover:scale-105'}
                text-white flex items-center justify-center shadow-md text-lg`}
          >
            {loading ? (
              <>
                <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleResendOTP}
            disabled={timeLeft > 0}
            className={`text-sm ${
              timeLeft > 0 ? 'text-white/40 cursor-not-allowed' : 'text-white hover:text-pink-300'
            }`}
          >
            Didn't receive the code? Resend OTP
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
