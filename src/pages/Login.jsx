import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Welcome Back</h2>
      <p>Sign in to access your sacred collection.</p>

      <form className="auth-form">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" className="form-input" />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" className="form-input" />
        </div>

        <button type="submit" className="btn btn-dark" style={{ marginTop: '1rem' }}>
          Sign In
        </button>
      </form>

      <div className="auth-footer">
        Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
      </div>
    </div>
  );
}