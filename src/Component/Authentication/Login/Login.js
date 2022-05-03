import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <div className='col-sm-12 col-md-6 px-4  mx-auto mt-2'>
            <div className='w-100 mx-auto'>
                <h3 className='text-center'>Please fill the form to Signin</h3>
                <form className='row justify-content-center' >
                    <input className=' my-2' type="email" name="email" placeholder='Your Email' id="" />
                    <input type="password" name="password" placeholder='Your Email' id="" />
                    <input className='btn btn-primary my-2' type="button" value="Register" />
                </form>
                <Button className='w-75 py-2' variant="outline-dark"><span className='d-flex justify-content-between align-items-center'><span className='d-flex justify-content-between align-items-center'><FcGoogle /></span><span className='d-flex justify-content-between align-items-center'>Login With Google</span></span></Button>
            </div>
        </div>
    );
};

export default Login;