import { getService } from '../api/services.api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleService() {
  const [service, setService] = useState({});

  const { serviceType } = useParams();

  const getSingleService = async () => {
    try {
      const response = await getService(serviceType);
      console.log(response.data);
      setService(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleService();
  }, []);

  return (
    <div className='ServiceList'>
      {service && (
        <>
          <h1>{service.serviceName}</h1>
          <p>{service.description}</p>
          <img src={service.imgURL} alt='' />
        </>
      )}
    </div>
  );
}

export default SingleService;
