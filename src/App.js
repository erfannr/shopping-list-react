import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from './components/TodoList';

function App() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Shopping List</h3>
            
            <TodoList
            />
          </div>
        </div>
      </div>
    );
  }


export default App;