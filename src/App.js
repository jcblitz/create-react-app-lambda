import React, { Component } from "react"
import "./App.css"
import Typography from '@mui/material/Typography'

class WokeTip extends Component {
  
    render() {
  
    return (
      <Typography variant="h2" component="h2">
          If you are upset the keyboard is QUERTY and not ABC, you might be a boomer.
      </Typography>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <WokeTip/>
        </header>
      </div>
    )
  }
}

export default App
