import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Users from './Users'
import Author from './Author'
import '../style.scss'

function App() {
  return (
      <div className="App Site">
          <div className="Site-content">
              <BrowserRouter>
                  <Header/>
                  <Switch>
                      <Route path="/" exact component={Users}/>
                      <Route path="/about-author" exact component={Author}/>
                  </Switch>
              </BrowserRouter>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
