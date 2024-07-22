import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navList">
            <li className="navListItem">
              <Link className="navLink" to="/">Home</Link>
            </li>
            <li className="navListItem">
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/todos">To-Do List</Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
