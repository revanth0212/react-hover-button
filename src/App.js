import './App.css'

import React, { Component } from 'react'

import HoverButton from './HoverButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverButton
          node={<div>Main Button</div>}
          options={[
            { node: <div>Button 1</div> },
            { node: <div>Button 2</div> },
            { node: <div>Button 3</div> },
            {
              node: (
                <HoverButton
                  node={<div>Button 4</div>}
                  options={[{ node: <div>Button 4.1</div> }, { node: <div>Button 4.2</div> }]}
                />
              )
            }
          ]}
        />
      </div>
    )
  }
}

export default App
