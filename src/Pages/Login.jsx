import { useState } from 'react';
import '../Css/Login.css';
import logoImg from "../assets/logoamz.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='LoginBox'>
        <img src={logoImg} alt="piclogo" className='loginImg' />
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Sign in</h1>
                <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="email">Email or mobile phone number</label>
                    <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="login-button">Continue</button>
                </form>
                <p className="terms">
                By continuing, you agree to Amazon-s Conditions of Use and Privacy Notice.
                </p>
                <div className="help-links">
                <a href="#" className="help-link">Need help?</a>
                <a href="#" className="help-link">Buying for work?</a>
                <a href="#" className="help-link">Shop on Amazon Business</a>
                </div>
                <p className="new-account">
                New to Amazon? <a href="#">Create your Amazon account</a>
                </p>
            </div>
            <footer className="footer">
                <p>Conditions of Use  Privacy Notice  Help</p>
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </footer>
        </div>
    </div>
    
  );
};

export default Login;
