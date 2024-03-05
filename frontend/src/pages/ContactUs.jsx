import React from 'react';

function ContactUs() {
  return (
    <section className='mt-4 p-6 text-gray-100'>
      <form
        novalidate=''
        className='container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-300'
      >
        <h2 className='w-full text-3xl font-bold leadi text-gray-600'>
          Contact us
        </h2>
        <div>
          <label for='name' className='block mb-1 ml-1 text-gray-600'>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Your name'
            required=''
            className='block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-white text-black'
          />
        </div>
        <div>
          <label for='email' className='block mb-1 ml-1 text-gray-600'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Your email'
            required=''
            className='block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-white text-black'
          />
        </div>
        <div>
          <label for='message' className='block mb-1 ml-1 text-gray-600'>
            Message
          </label>
          <textarea
            id='message'
            type='text'
            placeholder='Message...'
            className='block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri bg-white text-black'
          ></textarea>
        </div>
        <div>
          <button
            type='submit'
            className='w-full px-4 py-2 mt-4 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-primary focus:ri hover:ri text-white'
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
