import React from 'react';
// import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <div>
        {/* <CounterPage/> */}
        <TodoPage/>
    </div>
  );
};

export default App;