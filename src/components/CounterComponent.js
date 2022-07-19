import React from 'react';
// import '../assets/css/app.css';
const CounterComponent = () => {
    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h2 className='text-white'>My Counter Application</h2>
            </div>
            <div className='card-body'>
                <h1 className=' bg-light text-center'>000</h1>
                <div className='my-4 d-flex justify-content-center'>
                    <button className='btn btn-danger mx-5'>- Decrease</button>
                    <button className='btn btn-success'>+ Increase</button>
                </div>
            </div>
        </div>
    );
};

export default CounterComponent;