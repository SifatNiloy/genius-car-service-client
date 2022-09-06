import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: "center" }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' required />
                <input type="password" name="password" id="" placeholder='your password' required />
                <input onClick={() => setAgree(!agree)} className='me-2 mb-3' type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'opacity-100' : 'opacity-50'} htmlFor="terms">Accept Genius Car terms and condition</label>
                <input className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >

    );
};

export default Register;