import React from 'react';

const CreateTodo = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <input className='form-control' placeholder='Todo Name'/>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-danger'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;