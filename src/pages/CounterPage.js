import React from 'react';
import CounterComponent from '../components/CounterComponent';

const CounterPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <CounterComponent/>
                </div>
            </div>
            
        </div>
    );
};

export default CounterPage;