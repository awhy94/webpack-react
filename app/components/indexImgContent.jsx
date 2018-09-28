import React from 'react'
import imgData from '../../app/components/imgData.js'
require ('../../app/css/indexImgContent.css')


class IndexImgContent extends React.Component {
  constructor () {
    super()
    this.state = {
      imgContentW: window.innerWidth * .8,
      imgContentH: window.innerHeight * .8
    }
    console.log(this.state.imgContentW)
    console.log(this.state.imgContentH)
  }
  componentDidMount () {
  }
  getPosition (i) {
    let x,y,rotate
    switch (i) {
      case 1:
        x = 10
        y = 30
        break
      case 2:
        x = this.state.imgContentW - 300
        y = this.state.imgContentH - 200
        break
      case 3:
        x = this.state.imgContentW - 150
        y = 100
        break
      case 4:
        x = 30
        y = this.state.imgContentH / 5
        break
      default:
        x = Math.ceil(Math.random() * (this.state.imgContentW-300/2-0+1)+0)
        y = Math.ceil(Math.random() * (this.state.imgContentH-300-0+1)+0)
    }
    rotate = Math.ceil(Math.random() * (45+45+1)-45)

    return {
      transform: `translate(${x}px,${y}px) rotate(${rotate}deg)`
    }
  }
  render () {
    let styleObj
    let imgList = imgData.map((data,i)=>{
      styleObj = this.getPosition(i)
      return (
        <li key={i} ref={`imgBox${i}`} style={styleObj}>
          <div className="imgBox">
            <img src={data.url} alt={data.title}/>
          </div>
          <p className="imgTitle">{data.title}</p>
        </li>
      )
    })
    return (
      <ul className="imgContent" ref="stage">
        {imgList}
      </ul>
    )
  }
}

export default IndexImgContent
