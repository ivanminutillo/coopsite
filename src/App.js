import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './pages/about/about'
import Join from './pages/join/join'
import Services from './pages/services/services'
import Contacts from './pages/contact/contact'
import Home from './pages/home/home'
import Header from './components/header/header'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/joinus' component={Join} />
          <Route path='/services' component={Services} />
          <Route path='/contactus' component={Contacts} />
        </div>
      </Router>
    )
  }
}

export default App
