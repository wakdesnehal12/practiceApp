import React from 'react';
import logo from './logo.svg';
import './App.css';
import Practice from './Practice';
import User from './User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditUser } from './EditUser';
import { Provider } from './Provider';
import ListGrid from './ListGrid/ListGrid';
import LoginForm from './LoginForm/LoginForm';
import Todo from './Todo';
  
function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
