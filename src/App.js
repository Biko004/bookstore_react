import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksList from './components/BooksList'
import BookSinglePage from './components/BookSinglePage'
import BookAddForm from './components/BookAddForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (

    <Router>
    <div bg="dark" variant="dark" fixed="top">
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/books'>All Books</Link>
      </li>
      <li>
        <Link to='/addbook'>Add Book</Link>
      </li>
    </ul>
    </div>

    <Switch>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
      <Route path='/book/:id' component={BookSinglePage}/>

      <Route path='/books'>
        <BooksList/>
      </Route>
      <Route path='/addbook' component={BookAddForm}/>
    </Switch>
  </Router>
  );
}

export default App;
