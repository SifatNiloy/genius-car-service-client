import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='w-50 mx-auto'>
            <h2>please order: {service.name} </h2>
            <form>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name' required /><br />
                <input className='w-100 mb-2' type="text" name='email' placeholder='email' required /><br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='service' required /><br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required /><br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required /><br />
                <input className='btn btn-primary' type="submit" value="place order" />
            </form>
        </div>
    );
};

export default Checkout;