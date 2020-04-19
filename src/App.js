import React, {Component} from 'react';
import './App.css'
import Header from './Header'

class App extends Component {
  state = {
    dollarInput: 0,
    eurInput: 0,
  }


  usdToEur = e => {
    this.setState({dollarInput: e.target.value});
    this.setState({eurInput: Number(e.target.value * 0.92).toFixed(2)})
  }

  eurToUsd = e => {
    this.setState({eurInput: e.target.value});
    this.setState({dollarInput: Number(e.target.value * 1.09).toFixed(2)});
  }


  render() {
    return(
      <div>
        <Header />
          <div className='input-container'>

            <label className='custom-label'>Dollar</label>
            <input type='number' className='browser-default' value={this.state.dollarInput} onChange={this.usdToEur}></input>

            <label className='custom-label'>Euro</label>
            <input type='number' className='browser-default' value={this.state.eurInput} onChange={this.eurToUsd}></input>
          
            </div>
      </div>
    )
  }
}

export default App;
