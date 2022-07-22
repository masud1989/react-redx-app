import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row bg-light'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header bg-secondary'>
                                <h4 className='text-white'>My Todo App</h4>
                            </div>
                            <div className='card-body'>
                                <CreateTodo/>
                            </div>
                            <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;