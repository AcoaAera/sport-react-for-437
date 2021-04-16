import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"

import Statistica from './pages/Statistica.jsx'
import Gym from './pages/Gym'
import Press from './pages/Press.jsx'
import Page404 from './pages/Page404.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Стотистика</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/gym" className="nav-link">Анжуманя</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/press" className="nav-link">Пресс</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Statistica} />
              <Route exact path="/gym" component={Gym} />
              <Route exact path="/press" component={Press} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

