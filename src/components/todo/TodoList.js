import React from 'react';

const TodoList = () => {
    return (
        <div>
            <table class="table table-hover my-5">
                <thead>
                    <tr>
                    <th scope="col">Sl</th>
                    <th scope="col">Name</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <th scope="row">1</th>
                    <td>Name</td>
                        <td><button className='btn btn-sm btn-info'>Edit</button></td>
                        <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;