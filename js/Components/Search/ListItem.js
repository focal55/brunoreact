var React = require('react')

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, 'Check out')
      )
    )
  }
})

module.exports = MyTitle
