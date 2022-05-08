import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-12 d-flex  align-items-center justify-content-center">
                    <p className='text-white'>&copy; <span>{new Date().getFullYear()}</span> <span className='fw-bold'>Core Inventory Mgt</span> All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;