import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"

import Statistica from './pages/Statistica.jsx'
import Uni from './pages/Uni.jsx'
import Page404 from './pages/Page404.jsx'

import { positions, title } from './dictionary'

class App extends React.Component {

  render() {
    const x = positions.map(el => <li className="nav-item active" key={el.name}><Link to={'/' + el.name} className="nav-link">{el.nameRus}</Link></li>)
    const y = positions.map(el => <Route exact path={'/' + el.name} key={el.name} component={Uni} />)
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">{title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {x}
              </ul>
            </div>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Statistica} />
              <Route exact path="/uni" component={Uni} />
              {y}
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

