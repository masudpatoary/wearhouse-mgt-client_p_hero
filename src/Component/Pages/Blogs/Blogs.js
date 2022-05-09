import React from 'react';

const Blogs = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className="w-75 my-5 px-10 text-justify border rounded mx-2 p-3">
                <h1 className='text-4xl font-bold'>
                    Difference between JS and NodeJs
                </h1>
                <table className='w-100 text-start'>
                    <thead>
                        <tr>
                            <td className='w-50 border-1 py-1 px-3 m-1 text-center fw-bold fs-5'>JS</td>
                            <td className='w-50 border-1 py-1 px-3 m-1 text-center fw-bold fs-5'>NodeJs</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>A programming language</td>
                            <td className='w-50 border py-1 px-3 m-1'>Node JS is an interpreter or running environment</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>It  is normally used for any client-side activity for one web application</td>
                            <td className='w-50 border py-1 px-3 m-1'>It is mainly used for accessing or running any operating system for non-blocking operation</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>JavaScript can run in any engine. JavaScript programming is very easy to write, and put any running environment</td>
                            <td className='w-50 border py-1 px-3 m-1'>Node JS only support the V8 engine</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>JavaScript is normally following Java Programming language standard</td>
                            <td className='w-50 border py-1 px-3 m-1'>Node JS is written in C++</td>
                        </tr>
                    </thead>
                </table>

            </div>
            <div className="w-75 my-5 px-10 text-justify border rounded mx-2 p-3">
                <h1 className='text-4xl font-bold'>
                    Difference between Sql and NoSql
                </h1>
                <table className='w-100 text-start'>
                    <thead>
                        <tr>
                            <td className='w-50 border-1 py-1 px-3 m-1 text-center fw-bold fs-5'>SQL</td>
                            <td className='w-50 border-1 py-1 px-3 m-1 text-center fw-bold fs-5'>NoSQL</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>It is called Relational Databases (RDBMS)</td>
                            <td className='w-50 border py-1 px-3 m-1'>it's a non-relational or distributed database</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>it a safe choice especially for great complex queries. SQL requires to use predefined schemas to determine the structure of data before work with it</td>
                            <td className='w-50 border py-1 px-3 m-1'>A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>SQL databases are vertically scalable.</td>
                            <td className='w-50 border py-1 px-3 m-1'>NoSQL databases are horizontally scalable.</td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability)</td>
                            <td className='w-50 border py-1 px-3 m-1'>whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </td>
                        </tr>
                        <tr>
                            <td className='w-50 border py-1 px-3 m-1'>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability)</td>
                            <td className='w-50 border py-1 px-3 m-1'>whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </td>
                        </tr>
                    </thead>
                </table>

            </div>
            <div className="w-75 my-5 px-10 text-justify border rounded mx-2 p-3">
                <h1 className='text-4xl font-bold'>
                    Purpose of JWT
                </h1>
                <p className='text-xl'>
                    lorem
                </p>

            </div>
        </div>
    );
};

export default Blogs;