import React from 'react'
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Users from './Users'
import EditUser from './EditUser'
import Author from './Author'
import '../style.css'

function App() {
  return (
      <div className="ui container">
          <BrowserRouter>
              <Header/>
              <Switch>
                  <Route path="/" exact component={Users}/>
                  <Route path="/users/edit/:id" exact component={EditUser}/>
                  <Route path="/about-author" exact component={Author}/>
                  {/*<Route path="/streams/new" exact component={StreamCreate}/>
                  <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                  <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                  <Route path="/streams/:id" exact component={StreamShow}/>*/}
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
