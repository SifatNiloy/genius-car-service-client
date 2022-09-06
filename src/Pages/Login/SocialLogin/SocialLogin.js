import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
        </div>


    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto'>
                    <img className='me-2' style={{ width: '24px' }} src={google} alt="" />
                    Google Sign In
                </button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img className='me-2' style={{ width: '24px' }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;