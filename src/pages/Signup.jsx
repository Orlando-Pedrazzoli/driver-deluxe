import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth.api';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const user = { email, password, name, license };

    try {
      await signup(user);
      navigate('/login');
    } catch (error) {
      console.log('Error signup', error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className='mx-auto max-w-screen-md mt-10 px-4 py-14 border-2 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

        <p className='mt-4 text-gray-500'>
          Ready to take your driving experience to the next level? Sign up now
          and start reaping the rewards of being part of
          <span className='text-black font-bold'> Route Mate!</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
      >
        <div>
          <label htmlFor='name' className='sr-only'>
            Name
          </label>

          <div className='relative'>
            <input
              type='name'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <div className='relative'>
            <input
              type='email'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>

          <div className='relative'>
            <input
              type='password'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor='license' className='sr-only'>
            TVDE License
          </label>

          <div className='relative'>
            <input
              type='text'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='TVDE license number'
              value={license}
              onChange={e => setLicense(e.target.value)}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500 mt-3'>
            Already have an account?
            <Link to='/login' className='underline m-1' href='#'>
              Login
            </Link>
          </p>

          <button
            type='submit'
            className='inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white'
          >
            Sign up
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
