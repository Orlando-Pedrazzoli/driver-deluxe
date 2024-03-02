import { Link } from 'react-router-dom';
import { getAllServices } from '../api/services.api';
import { useState, useEffect } from 'react';

function ServiceList() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center'>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            Product Collection
          </h2>
          <p className='mx-auto mt-4 max-w-md text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className='mt-8 flex'>
          {services &&
            services.length > 0 &&
            [...new Set(services.map(service => service.serviceType))].map(
              serviceType => {
                const serviceWithType = services.find(
                  service => service.serviceType === serviceType
                );

                return (
                  <div
                    key={serviceType}
                    className='w-1/4 relative bg-white pt-3 mr-4'
                  >
                    <Link to={`/services?type=${serviceType}`}>
                      <h3>{serviceType}</h3>
                      {serviceWithType && serviceWithType.imgURL && (
                        <img
                          src={serviceWithType.imgURL}
                          alt={serviceType}
                          className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                        />
                      )}
                    </Link>
                    <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                      {services.serviceName}
                    </h3>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
}

export default ServiceList;
