import { Link } from 'react-router-dom';
import { getAllServices } from '../api/services.api';
import { useState, useEffect } from 'react';

function ServiceList() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const serviceTypeToUrl = {
    'Chair massage': '/chair-massage',
    Reflexology: '/reflexology',
    Shiatsu: '/shiatsu',
    Vibration: '/vibration',
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center'>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            Special Services for You
          </h2>
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {services &&
            services.length > 0 &&
            [...new Set(services.map(service => service.serviceType))].map(
              serviceType => {
                const serviceWithType = services.find(
                  service => service.serviceType === serviceType
                );

                return (
                  <li key={serviceType}>
                    <Link
                      to={serviceTypeToUrl[serviceType] || '#'}
                      className='group block overflow-hidden'
                    >
                      {serviceWithType && serviceWithType.imgURL && (
                        <img
                          src={serviceWithType.imgURL}
                          alt={serviceType}
                          className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                        />
                      )}

                      <div className='relative bg-white pt-3'>
                        <h3 className='text-lg font-medium leadi text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                          {serviceType}
                        </h3>
                      </div>
                    </Link>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </section>
  );
}

export default ServiceList;
