import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Join Sacred Ties</h2>
      <p>Become a custodian of tradition.</p>

      <form className="auth-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" className="form-input" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" className="form-input" />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" className="form-input" />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Create Account
        </button>
      </form>

      <div className="auth-footer">
        Already have an account? <Link to="/login" className="auth-link">Log In</Link>
      </div>
    </div>
  );
}