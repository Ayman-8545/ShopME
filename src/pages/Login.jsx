import { useState } from 'react'

export default function Login() {
  const [tab, setTab] = useState('login')

  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center justify-center p-margin-mobile md:p-xl">
      <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.08)] w-full max-w-[448px] rounded-xl overflow-hidden">
        <div className="px-lg py-xl text-center border-b border-surface-variant">
          <h1 className="text-headline-lg text-primary mb-sm">ShopMe</h1>
          <p className="text-body-md text-secondary">
            {tab === 'login' ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>

        <div className="flex border-b border-surface-variant">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-md text-center text-label-md transition-colors ${
              tab === 'login'
                ? 'text-primary border-b-2 border-primary bg-surface-container-lowest'
                : 'text-secondary hover:bg-surface-container-low'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-md text-center text-label-md transition-colors ${
              tab === 'signup'
                ? 'text-primary border-b-2 border-primary bg-surface-container-lowest'
                : 'text-secondary hover:bg-surface-container-low'
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-lg">
          <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
            {tab === 'signup' && (
              <div>
                <label className="block text-label-sm text-secondary mb-xs" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-shadow"
                  id="name"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
            )}
            <div>
              <label className="block text-label-sm text-secondary mb-xs" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-shadow"
                id="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="flex justify-between text-label-sm text-secondary mb-xs" htmlFor="password">
                <span>Password</span>
                {tab === 'login' && <a className="text-primary hover:underline" href="#">Forgot?</a>}
              </label>
              <input
                className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-shadow"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <button
              className="w-full bg-primary-container text-on-primary py-md rounded-lg text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-sm mt-lg"
              type="submit"
            >
              {tab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
