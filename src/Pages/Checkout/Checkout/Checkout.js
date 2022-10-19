import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.address.value
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>please order: {service.name} </h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.displayName} name='name' placeholder='name' required readOnly disabled /><br />
                <input className='w-100 mb-2' type="text" value={user.email} name='email' placeholder='email' required readOnly disabled /><br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='service' required /><br />
                <input className='w-100 mb-2' type="text" autoComplete='off' name='address' placeholder='address' required /><br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required /><br />
                <input className='btn btn-primary' type="submit" value="place order" />
            </form>
        </div>
    );
};

export default Checkout;