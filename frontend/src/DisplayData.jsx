import React, { useEffect, useState } from 'react';
import Button from './customs/Button.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dropdown from './customs/DropDown.jsx';

function DisplayData() {
  const [data, setData] = useState([]);
  const [isUpdated, setupdated] = useState(true); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    if (isUpdated) {
      setLoading(true); 
      async function fetchData(){
        try{
            const res = await axios.get("https://placement-tracker-oftj.vercel.app/companies")
            setData(res.data);
            console.log(res.data);
            setupdated(false);
            setLoading(false);
            console.log(isUpdated);
        }
        catch(err){
          console.log(err)
        }
      }
      fetchData();
    }
  }, [isUpdated]);

  // Function to handle the delete action
  async function handleDelete(companyId) {
    try {
      const modifiedData = data.filter((company) => company._id !== companyId);
      setData(modifiedData);

      const res = await axios.put("https://placement-tracker-oftj.vercel.app/companies", modifiedData);
      console.log(res.data);
      setupdated(true); // Set to true to refetch after deleting
    } catch (err) {
      console.log(err);
    }
  }

  // Format date to `dd-mm-yyyy`
  function formatDate (dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className='min-h-full text-white flex flex-col items-center'>
      {/* Loading Spinner */}
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='text-2xl font-bold animate-pulse'>Loading...</div>
        </div>
      ) : (
        <div className='w-full max-w-5xl p-4'>
          {/* Header Row */}
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-semibold text-center'>Company Data</h1>
            <Link to='/add'>
              <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition ease-in-out duration-200" />
            </Link>
          </div>

          {/* Data Table */}
          <div className='overflow-x-auto bg-gray-800 rounded-lg shadow-lg'>
          {/* Header Row */}
            <div className='grid grid-cols-7 gap-4 text-center font-bold text-gray-300 bg-gray-700 py-3 px-4 min-w-[700px]'>
              <div className='min-w-[100px]'>Company</div>
              <div className='min-w-[100px]'>CTC</div>
              <div className='min-w-[100px]'>Base</div>
              <div className='min-w-[100px]'>Coding</div>
              <div className='min-w-[100px]'>PPT</div>
              <div className='min-w-[100px]'>Interview</div>
              <div className='min-w-[100px]'>Actions</div>
            </div>

            {/* Company Data Rows */}
            {data.map((company) => (
              <div
                key={company.id}
                className='grid grid-cols-7 gap-4 text-center py-4 px-4 border-b border-gray-700 hover:bg-gray-700 transition ease-in-out duration-150 min-w-[700px]'
              >
                <div className='font-medium min-w-[100px]'>{company.companyName}</div>
                <div className='min-w-[100px]'>{company.ctc}</div>
                <div className='min-w-[100px]'>{company.base}</div>
                <div className='min-w-[100px]'>{formatDate(company.codingRoundDate)}</div>
                <div className='min-w-[100px]'>{formatDate(company.pptDate)}</div>
                <div className='min-w-[100px]'>{formatDate(company.interviewDate)}</div>
                <div className='min-w-[100px]'>
                  <Dropdown
                    onDelete={() => handleDelete(company._id)}
                    index={company.id}
                    data={company}
                    setupdated={setupdated}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayData;
