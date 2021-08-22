import React from 'react';
import NavBar from '../Bootstrap/NavBar/NavBar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from '../Home/Pages/Home';
import CreateBlogComponent from '../CreateBlog/Components/CreateBlogComponent';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
          <Route exact path="/create">
            <NavBar />
            <CreateBlogComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
