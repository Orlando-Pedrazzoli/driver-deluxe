import { getService } from '../api/services.api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SingleService() {
  const [services, setServices] = useState({});

  const { serviceId } = useParams();

  const getSingleService = async () => {
    try {
      const response = await getService(serviceId);
      console.log(response.data);
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleService();
  }, []);

  return (
    <div className='ServiceList'>
      <h1>Services</h1>

      {services.map(service => (
        <div key={service._id} className='ServiceCard card'>
          <Link to={`/services/${service._id}`}>
            <h3>{service.serviceName}</h3>
            {service.imgUrl && (
              <img src={service.imgUrl} width={100} alt={service.serviceName} />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SingleService;
