const React = require('react')
const ReactDOM = require('react-dom')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')

// Layout.
const RegularLayout = require('./Components/Layout/RegularLayout.jsx')

// Scenes.
const Intro = require('./Components/Scenes/Intro.jsx')
const Search = require('./Components/Scenes/Search.jsx')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={RegularLayout}>
      <IndexRoute component={Intro} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('app'))
