var React = require('react')
var ReactDOM = require('react-dom')

var MyTitle = require('./Components/Search/ListItem.js')

var div = React.DOM.div

var MyFirstComponent = (
  div(null,
  React.createElement(MyTitle, null))
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
