import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
            </div>
            <div>
                <button className='btn btn-info d-block w-50 mx-auto'>
                    <img className='me-2' style={{ width: '24px' }} src={google} alt="" />
                    Google Sign In
                </button>
            </div>
            <div>
                <button className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img className='me-2' style={{ width: '24px' }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;