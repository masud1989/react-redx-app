import React from 'react';
import {useSelector} from 'react-redux';
const TodoList = () => {

    const todoItems = useSelector( (state) => state.todo.value);

    return (
        <div className='p-5'>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Sl</th>
                    <th scope="col">Name</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                {
                todoItems.map((item,i)=>{
                    return(
                        <tr key={i.toString()}>
                        <th scope="row">{i}</th>
                        <td>{item}</td>
                        <td><button className='btn btn-sm btn-info'>Edit</button></td>
                        <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                    </tr>
                    )
                    })
                
                }
                    
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;