import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMassage } from '@/api/services.api';
import { useContext } from 'react';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { message } from 'antd';
import { AuthContext } from '@/context/auth.context';
import { addBooking } from '@/api/services.api';
import dayjs from 'dayjs';

function ProductPage({ MapsComponent }) {
  const [service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(true);

  const formattedServiceType = service ? formatServiceType(service.type) : '';

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const format = 'HH:mm';

  const { itemId } = useParams();

  const getSingleService = async () => {
    try {
      const response = await getMassage(itemId);
      setLoading(false);
      setService(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    console.log(time, timeString);
    setSelectedTime(timeString);
  };

  const handleBookNow = async () => {
    try {
      await addBooking(user._id, service._id, selectedDate, selectedTime);
      message.success('Booking created successfully'); // Show success message
      navigate('/bookings');
    } catch (error) {
      console.log(error);
      message.error('Failed to create booking'); // Show error message
    }
  };

  function formatServiceType(serviceType) {
    return serviceType.replace(/\s+/g, '').toLowerCase();
  }

  useEffect(() => {
    getSingleService();
  }, []);

  return loading ? (
    <div className='flex flex-col justify-center items-center'>
      <img src='/src/assets/LoadingNews.gif' alt='Loading...' />
      <p>Loading...</p>
    </div>
  ) : (
    <>
      <div>
        {service && (
          <>
            <section>
              <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-4'>
                  <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
                    <img
                      alt=''
                      src={service.imgURL}
                      className='absolute inset-0 h-full w-full object-cover'
                    />
                  </div>

                  <div className='lg:py-24'>
                    <h2 className='text-3xl font-bold sm:text-4xl mb-4'>
                      {service.type}
                    </h2>
                    <DatePicker onChange={handleDateChange} />
                    <TimePicker
                      className='m-4 '
                      onChange={handleTimeChange}
                      defaultValue={dayjs('12:00', format)}
                      format={format}
                    />
                    <h1 className='text-gray-800'>{service.company.name}</h1>
                    <p>Address: {service.company.address}</p>
                    <p>Tel: {service.company.contact}</p>
                    <p className='mt-4 text-gray-600'>
                      <a href='{service.company.website}'>
                        {service.company.website}
                      </a>
                    </p>
                    <p className='mt-4 text-gray-600'>{service.description}</p>

                    <button
                      onClick={handleBookNow}
                      className='mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400'
                    >
                      Book now
                    </button>
                    <Link to={`/${formattedServiceType}`}>
                      <button
                        className='cursor-pointer duration-200 hover:scale-125 active:scale-100 flex items-center justify-center'
                        title='Go Back'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='40px'
                          height='40px'
                          viewBox='0 0 24 24'
                          className='stroke-blue-500 mt-2'
                        >
                          <path
                            strokeLinejoin='round'
                            strokeLinecap='round'
                            strokeWidth='1.5'
                            d='M11 6L5 12M5 12L11 18M5 12H19'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <hr style={{ paddingBottom: 50 }}></hr>
      <div style={{ paddingBottom: 50 }}>
        <MapsComponent></MapsComponent>
      </div>
    </>
  );
}

export default ProductPage;
