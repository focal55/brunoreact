const React = require('react')
const ReactDOM = require('react-dom')
const Header = require('./Components/Layout/header.jsx')

const App = () => (
  <div className='app-container'>
    <Header></Header>
    <div className='search-filter-wrapper'>
      Filter Form
    </div>
    <div className='display-wrapper'>
      <div className='search-listing-wrapper'></div>
      <div className='search-map-wrapper'>
        <div className='map-canvas'></div>
      </div>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
