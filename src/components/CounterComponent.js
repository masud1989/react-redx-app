import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCustom } from '../redux/state/counter/counterSlice';


// import '../assets/css/app.css';
const CounterComponent = () => {
    
    const count = useSelector( (state) =>state.counter.value);
    const dispatch = useDispatch();
    const customNumber = useRef();

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h2 className='text-white'>My Counter Application</h2>
            </div>
            <div className='card-body'>
                <h1 className=' bg-light text-center'>{count}</h1>
                <div className='my-4 d-flex justify-content-center'>
                    <button onClick={()=>{dispatch(decrement())}} className='btn btn-danger mx-5'>- Decrease</button>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>+ Increase</button>
                </div>
            </div>
            <div className='my-4 d-flex justify-content-center'>
                <input ref={customNumber} type='number' className='form-group'/>
                <button onClick={()=>{dispatch(setCustom(parseInt(customNumber.current.value)))}} className='btn btn-success ms-1'>Set Custom</button>
            </div>
        </div>
    );
};

export default CounterComponent;