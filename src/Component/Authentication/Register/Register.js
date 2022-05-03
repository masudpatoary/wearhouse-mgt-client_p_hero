import React from 'react';

const Register = () => {

    return (
        <div className='col-sm-12 col-md-6 px-4  mx-auto mt-2'>
            <div className='w-100 mx-auto'>
                <h3 className='text-center'>Please fillup the form to register</h3>
                <form className='row justify-content-center' >
                    <input type="text" name="name" placeholder='Your Name' id="" />
                    <input className=' my-2' type="email" name="email" placeholder='Your Email Address' id="" />
                    <input type="password" name="password" placeholder='Your Password' id="" />
                    <input className='btn btn-primary my-2' type="button" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;