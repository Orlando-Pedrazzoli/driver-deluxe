import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMassage } from '@/api/services.api';

function ProductPage() {
  const [service, setService] = useState(null);

  const { itemId } = useParams();

  const getSingleService = async () => {
    try {
      const response = await getMassage(itemId);
      console.log(itemId);
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
    <>
      <div>
        {service && (
          <>
            <img src={service.imgURL} alt='' />
            <h1>{service.type}</h1>
            <h1>{service.company.name}</h1>
            <h1>{service.company.address}</h1>
            <h1>{service.company.website}</h1>
            <h1>{service.company.contact}</h1>
            <Link to={`/${service.type}`}>GO BACK</Link>
          </>
        )}
      </div>
    </>
  );
}

export default ProductPage;
