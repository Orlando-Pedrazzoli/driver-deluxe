import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
      <h2 className='font-bold text-4xl tracking-wide'>Search Massage </h2>
      <h2 className='text-gray-500 text-xl'>
        Search your massage and Book Appointment
      </h2>
    </div>
  );
}

export default CategorySearch;
