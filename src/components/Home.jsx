/*import React, { useState } from 'react';
import ManvianLogin from './ManvianLogin';
import { Link } from 'react-router-dom';
const Home = () => {
  const [showManvianLogin, setShowManvianLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleContinueClick = () => {
    setShowManvianLogin(true); // Show the ManvianLogin component
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password validation to check for 5 consecutive digits
    const passwordPattern = /\d{5}/;
    if (!passwordPattern.test(value)) {
      setPasswordError('Password must contain at least 5 consecutive numbers');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <header className="flex items-center justify-between border-b border-[#f0f2f5] px-4 sm:px-10 py-3">
        <div className="flex items-center gap-2 text-[#111518]">
          <h2 className="text-lg font-bold">Manvian</h2>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-40 py-5">
        
        {showManvianLogin ? (
          <ManvianLogin /> // When the state is true, render ManvianLogin
        ) : (
          <div className="w-full max-w-md p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold text-[#111518]">Welcome to Manvian</h1>
            <p className="text-sm text-[#111518] mt-3">
              Log in to access Manvian ID if you are an admin, log in here.
            </p>
            <div className="mt-4">
              <button 
                onClick={handleContinueClick}  // Call the function to show ManvianLogin
                className="w-full h-10 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2"
              >
                <span>🔒</span> Continue with Manvian ID
              </button>
            </div>

            <p className="text-sm text-[#60778a] text-center my-3">or</p>

            <p className="text-sm text-[#111518] mt-3">
              If you're an employee, log in here.
            </p>

            
            <div className="mt-4">
              <label className="block text-[#111518] text-sm mb-1">Employee Email</label>
              <input
                type="email"
                placeholder="Employee Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full h-12 px-3 text-base border-none bg-[#f0f2f5] rounded-md focus:outline-none"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            
            <div className="mt-4">
              <label className="block text-[#111518] text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full h-12 px-3 text-base border-none bg-[#f0f2f5] rounded-md focus:outline-none"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <div className="mt-4">
              <Link to={'/Nextpage'}><button className="w-full h-10 bg-[#f0f2f5] text-[#111518] rounded-md flex items-center justify-center gap-2">
                <span>🔒</span> Continue with Employee ID
              </button></Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;*/

import React, { useState } from 'react';
import ManvianLogin from './ManvianLogin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [showManvianLogin, setShowManvianLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleContinueClick = () => {
    navigate('/manvian-login'); // Navigate to ManvianLogin
  };
  



  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password validation to check for 5 consecutive digits
    const passwordPattern = /\d{5}/;
    if (!passwordPattern.test(value)) {
      setPasswordError('Password must contain at least 5 consecutive numbers');
    } else {
      setPasswordError('');
    }
  };

  const handleEmployeeLoginClick = () => {
    if (email && password && !emailError && !passwordError) {
      // Navigate to Nextpage if validation passes
      navigate('/Nextpage');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <header className="flex items-center justify-between border-b border-[#f0f2f5] px-4 sm:px-10 py-3">
        <div className="flex items-center gap-2 text-[#111518]">
          <h2 className="text-lg font-bold">Manvian</h2>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-40 py-5">
        {/* Conditionally render the ManvianLogin component */}
        {showManvianLogin ? (
          <ManvianLogin /> // When the state is true, render ManvianLogin
        ) : (
          <div className="w-full max-w-md p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold text-[#111518]">Welcome to Manvian</h1>
            <p className="text-sm text-[#111518] mt-3">
              Log in to access Manvian ID if you are an admin, log in here.
            </p>
            <div className="mt-4">
              <button 
                onClick={handleContinueClick}  // Always allow transition to ManvianLogin
                className="w-full h-10 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2"
              >
                <span>🔒</span> Continue with Manvian ID
              </button>
            </div>

            <p className="text-sm text-[#60778a] text-center my-3">or</p>

            <p className="text-sm text-[#111518] mt-3">
              If you're an employee, log in here.
            </p>

            {/* Employee Email */}
            <div className="mt-4">
              <label className="block text-[#111518] text-sm mb-1">Employee Email</label>
              <input
                type="email"
                placeholder="Employee Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full h-12 px-3 text-base border-none bg-[#f0f2f5] rounded-md focus:outline-none"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            {/* Employee Password */}
            <div className="mt-4">
              <label className="block text-[#111518] text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full h-12 px-3 text-base border-none bg-[#f0f2f5] rounded-md focus:outline-none"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <div className="mt-4">
              <button
                onClick={handleEmployeeLoginClick} // Use the click handler
                disabled={!email || !password || emailError || passwordError}
                className={`w-full h-10 rounded-md flex items-center justify-center gap-2 ${!email || !password || emailError || passwordError ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f0f2f5] text-[#111518]'}`}
              >
                <span>🔒</span> Continue with Employee ID
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
