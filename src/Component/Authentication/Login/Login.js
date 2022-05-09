import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';




const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        user2,
        loading2,
        error2] = useSignInWithGoogle(auth);
    if (error1 || error2) {
        toast('passward or email does not match')

    }
    if (loading1 || loading2) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (user1 || user2) {
        navigate(from, { replace: true });
    }
    return (
        <div className='col-sm-12 col-md-6 px-4  mx-auto mt-2'>
            <div className='w-100 mx-auto'>
                <h3 className='text-center'>Please fill the form to Signin</h3>
                <form className='row justify-content-center' >
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className=' my-2'
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        id="" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder='Your Email'
                        id="" />
                    <input
                        onClick={() => signInWithEmailAndPassword(email, password)}
                        className='btn btn-primary my-2'
                        type="button"
                        value="Log In" />
                </form>
                <p className='mt-2'>Dont have an account? <Link to={'/register'}>Register</Link></p>
                <div className='mt-2 d-flex justify-content-center align-items-center'>
                    <div className="  w-100	border-top border-1 border-dark"></div>
                    <div className="mx-1 fs-6 fw-bold pb-1">or</div>
                    <div className="  w-100	border-top border-1 border-dark"></div>
                </div>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-75 py-2' variant="outline-dark">
                    <span className='d-flex justify-content-between align-items-center'>
                        <span className='d-flex justify-content-between align-items-center'>
                            <FcGoogle />
                        </span>
                        <span className='d-flex justify-content-between align-items-center'>Login With Google</span>
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Login;