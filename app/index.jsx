import React from 'react'
import ReactDOM from 'react-dom'
import IndexImgContent from '../app/components/indexImgContent.jsx'
require('../app/css/common.css')

class Welcome extends React.Component {
  constructor (props) {
    super(props)
    // state局部状态
    this.state = {name: 'react'}
  }
  render () {
    return (
      <div>welcome to {this.state.name}</div>
    )
  }
}

class Toggle extends React.Component {
  constructor () {
    super ()
    this.state = {
      toggleOn: true,
      name: 'kl'
    }
    // 类的方法不会默认绑定this
    // this.handleClick = this.handleClick
  }
  handleClick (name) {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn,
      name: name
    }))
  }
  render () {
    return (
      <button onClick={this.handleClick.bind(this,'wenai')}>{this.state.toggleOn?'on':'off'}{this.state.name}</button>
      // <button onClick={(e)=>this.handleClick(e)}>{this.state.toggleOn?'on':'off'}</button>

    )
  }
}

class UserGreeting extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <h1>Welcome back!</h1>
    )
  }
}
class GuestGreeting extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <h1>Please sign up.</h1>
    )
  }
}

class Greeting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn,
      test: 'test'
    }
  }
  render () {
    if (this.state.isLoggedIn) {
      return <UserGreeting/>
    }
    return <GuestGreeting/>

  }
}

class APP extends React.Component {
  constructor() {
    super ()
  }
  componentDidMount () {
  }
  render () {
    return(
      <section className="appWrap">
        <IndexImgContent/>
      </section>
    )
  }
}
// function APP () {
//   return (
//     <section className="appWrap">
//       {/*<Welcome/>*/}
//       {/*<Toggle/>*/}
//       {/*<Greeting isLoggedIn={false}/>*/}
//       <IndexImgContent/>
//     </section>
//   )
// }


const root = document.getElementById('root')
ReactDOM.render(<APP />,root)