import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { authInstance, dataConnectInstance } from '../lib/firebase';
import { createMileage } from '@dataconnect/generated';

export const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(authInstance, email, password);
        await createMileage(dataConnectInstance, { netMiles: 0 });
      } else {
        await signInWithEmailAndPassword(authInstance, email, password);
      }
    } catch (err: any) {
      console.error("Auth action failed:", err);
      // Map standard firebase auth error codes to generic, safe messages
      switch (err.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError("Invalid email or password. Please try again.");
          break;
        case 'auth/email-already-in-use':
          setError("This email address is already in use.");
          break;
        case 'auth/invalid-email':
          setError("Please enter a valid email address.");
          break;
        case 'auth/weak-password':
          setError("Password is too weak. Please use at least 8 characters.");
          break;
        default:
          setError("An error occurred during authentication. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <h2 className="auth-title">
          {isSignUp ? '🏃‍♂️ Create Your Fitness Account' : '🏃‍♂️ Welcome Back!'}
        </h2>
        <p className="auth-subtitle">
          {isSignUp ? 'Sign up to start tracking your runs and rewards!' : 'Log in to view your dashboard'}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label className="input-label" htmlFor="email-input">Email Address</label>
            <input
              id="email-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className="auth-toggle">
          <span>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </span>
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(null);
            }}
            className="toggle-link-btn"
          >
            {isSignUp ? 'Log In here' : 'Sign Up here'}
          </button>
        </div>
      </div>
    </div>
  );
};
