import React from 'react'
import ReactDOM from 'react-dom/client';
import './main.css'

class Tasbeh extends React.Component {
  state = {
    num:0
  }

  changeNum=() => {
    this.setState({
      num:this.state.num+1
    })
  }

  changeNum1=() => {
    this.setState({
      num:this.state.num-1
    })
  }


  changeReset=() => {
    this.setState({
      num:this.state.num = 0
    })
  }


  render(){
    return(
      <div className='div'>
        <div className='div1'>
        <h3>{this.state.num}</h3>

        <button className='btn' onClick={this.changeNum}>increment</button>
        <button className='btn1' onClick={this.changeNum1}>dincrement</button><br></br>
        <button className='btn2' onClick={this.changeReset}>reset</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Tasbeh />)

export default Tasbeh