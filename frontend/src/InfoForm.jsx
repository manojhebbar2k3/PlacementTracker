import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InfoForm() {
  const [companyName, setCompanyName] = useState('');
  const [ctc, setCtc] = useState('');
  const [base, setBase] = useState('');
  const [codingRoundDate, setCodingRoundDate] = useState('');
  const [pptDate, setPptDate] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    console.log({
      companyName,
      ctc,
      base,
      codingRoundDate,
      pptDate,
      interviewDate,
    });

    try {
      const response = await axios.post('https://placementtracker-1.onrender.com/add', {
        companyName,
        ctc,
        base,
        codingRoundDate,
        pptDate,
        interviewDate
      });
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error adding company data:', error);
    }
    navigate('/');
  }

  // Handle close button functionality
  const handleClose = () => {
    navigate('/');
  }

  return (
    <div className='relative flex flex-col justify-center w-full h-full '>
      <div className='m-0 p-0'>
        <h1 className='text-white text-3xl md:text-4xl font-bold tracking-wide text-center mb-10'>
          Add New Company Info
        </h1>
      </div>
      <div className='w-full flex justify-center'>
        <form 
          onSubmit={handleSubmit} 
          className='relative flex flex-col gap-6 justify-center w-full max-w-[90%] sm:max-w-[75%] md:max-w-[50%] bg-white p-6 sm:p-8 rounded-lg shadow-lg'
        >
          {/* X button inside the form */}
          <span 
            onClick={handleClose} 
            className='absolute right-1 top-1 bg-gray-700 text-white h-8 w-8 grid place-items-center rounded-full cursor-pointer font-semibold transition ease duration-300 hover:bg-red-600'>
            X
          </span>

          <input
            type='text'
            placeholder='Company Name'
            required='true'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='number'
            placeholder='CTC'
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='number'
            placeholder='Base'
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='date'
            value={codingRoundDate}
            onChange={(e) => setCodingRoundDate(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='date'
            value={pptDate}
            onChange={(e) => setPptDate(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='date'
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
            className='h-12 w-full px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='h-12 w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InfoForm;
