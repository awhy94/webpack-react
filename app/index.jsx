import React from 'react'
import ReactDOM from 'react-dom'

class APP extends React.Component {
  constructor() {
    super ()
  }
  render () {
    return(
      <div>hello react!!!!</div>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<APP />,root)