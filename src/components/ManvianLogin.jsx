import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManvianLogin() {
  const navigate = useNavigate();

  // State variables for form inputs and error messages
  const [manvianID, setManvianID] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [manvianIDError, setManvianIDError] = useState('');
  const [referralCodeError, setReferralCodeError] = useState('');

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/'); // Navigate back to Home
  };

  // Validation function for Manvian ID (email)
  const handleManvianIDChange = (e) => {
    const value = e.target.value;
    setManvianID(value);

    // Email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setManvianIDError('Please enter a valid company email address');
    } else {
      setManvianIDError('');
    }
  };

  // Validation function for referral code
  const handleReferralCodeChange = (e) => {
    const value = e.target.value;
    setReferralCode(value);

    // Referral code validation to check if it contains exactly 4 digits
    const referralCodePattern = /^\d{4}$/;
    if (!referralCodePattern.test(value)) {
      setReferralCodeError('Referral code must contain exactly 4 digits');
    } else {
      setReferralCodeError('');
    }
  };

  // Check if the "Continue" button should be enabled
  const isFormValid = manvianID && referralCode && !manvianIDError && !referralCodeError;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="absolute top-4 left-4 text-[#111518] text-xl font-bold">
        Manvian
      </div>
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 sm:p-8">
        <h1 className="text-[#111518] text-2xl font-bold leading-tight text-left mb-4">Continue with Manvian ID</h1>
        <p className="text-[#111518] text-base font-normal leading-normal mb-6">Use your company email address and referral code to access services.</p>

        {/* Manvian ID (Email) Input */}
        <div className="mb-4">
          <label className="block mb-1 text-[#111518] font-medium">Company Email Address</label>
          <input
            type="email"
            placeholder="example@manvian.com"
            value={manvianID}
            onChange={handleManvianIDChange}
            className="w-full p-3 border rounded-lg text-[#111518] border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {manvianIDError && <p className="text-red-500 text-sm mt-1">{manvianIDError}</p>}
        </div>

        {/* Referral Code Input */}
        <div className="mb-6">
          <label className="block mb-1 text-[#111518] font-medium">Referral Code</label>
          <input
            type="password"
            placeholder="Enter 4-digit code"
            value={referralCode}
            onChange={handleReferralCodeChange}
            className="w-full p-3 border rounded-lg text-[#111518] border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {referralCodeError && <p className="text-red-500 text-sm mt-1">{referralCodeError}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            className={`w-full sm:w-auto py-2 px-4 rounded-lg text-white font-semibold ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!isFormValid}
          >
            Continue
          </button>
          <button
            onClick={handleBackClick}
            className="w-full sm:w-auto py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManvianLogin;
