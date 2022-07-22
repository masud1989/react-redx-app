import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/state/todo/todoSlice';

const CreateTodo = () => {
    
    const dispatch = useDispatch();
    const taskInput = useRef();

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <input ref={taskInput} className='form-control' placeholder='Todo Name'/>
                </div>
                <div className='col-md-2'>
                    <button onClick={ ()=>dispatch(AddTodo(taskInput.current.value))} className='btn btn-danger'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;