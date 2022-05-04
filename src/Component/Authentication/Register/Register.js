import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../../firebase.init';


const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [
        displayName,
        setDisplayName] = useState('');
    const [
        updateProfile,
        updating, 
        error1] = useUpdateProfile(auth);
    const [
        email,
        setEmail] = useState('');
    const [
        password,
        setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error2] = useCreateUserWithEmailAndPassword(auth);
    const [
        sendEmailVerification,
        sending,
        error3] = useSendEmailVerification(auth);



    const createUser = async () => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        await sendEmailVerification();
        toast('Email varification has been sent')
    }

    if (error1 || error2 || error3) {
        return (
            <div>
                <p>Error: {error1.message || error2.message || error3.message}</p>
            </div>
        );
    }
    if (loading || updating || sending) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='col-sm-12 col-md-6 px-4  mx-auto mt-2'>
            <div className='w-100 mx-auto'>
                <h3 className='text-center'>Please fillup the form to register</h3>
                <form className='row justify-content-center' >
                    <input
                        onChange={(e) => setDisplayName(e.target.value)}
                        type="text"
                        name='name'
                        placeholder='Your Name' id="" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className=' my-2'
                        type="email"
                        name="email"
                        placeholder='Your Email Address'
                        id="" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder='Your Password'
                        id="" />
                    <input
                        onClick={async () => await createUser()}
                        className='btn btn-primary my-2'
                        type="button"
                        value="Register" />
                </form>
                <div className=" mt-2  w-100 fw-bold border-top border-1 border-dark">Have An Account <Link  className='text-primary  text-decoration-none' to="/login">Log In</Link></div>
            </div>
        </div>
    );
};

export default Register;