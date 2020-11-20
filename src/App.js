import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = { advice : ""}

    this.Fetchadvice = this.Fetchadvice.bind(this)
  }
  
  componentDidMount(){
    this.Fetchadvice()
  }

  Fetchadvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
      const {advice} = response.data.slip
      console.log(advice)

      this.setState({ advice: advice})
      
    })

    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const {advice} = this.state

    return (
      <div className="main-container">
        <h1 className="title">RANDOM ADVICE API</h1>
          <div className="card">
            <h1 className="main-advice">{advice}</h1>
            <button className="button" onClick={this.Fetchadvice}>Get Advice</button>
          </div>
      </div>
    );
  }

}

export default App;
