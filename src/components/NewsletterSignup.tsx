import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signing up with email:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-8 px-4 bg-black text-white">
      <div className="max-w-md mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-mono font-bold tracking-tight">SUBSCRIBE.exe</h2>
          <p className="text-base font-mono">STAY UPDATED WITH THE LATEST DROPS</p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_EMAIL"
                required
                className="w-full px-4 py-3 bg-white text-black font-mono text-base border-2 border-white focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-3 font-bold font-mono text-base border-2 border-white active:opacity-80"
              >
                SUBMIT
              </button>
            </form>
          ) : (
            <p className="text-xl font-bold font-mono">
              SUBSCRIPTION_CONFIRMED
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

