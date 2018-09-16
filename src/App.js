import React, { Component } from 'react'

import TextExample from './Examples/TextExample'
import HierarchyExample from './Examples/HierarchyExample'

class App extends Component {
  render() {
    return (
      <div>
        <TextExample />
        <HierarchyExample />
      </div>
    )
  }
}

export default App
