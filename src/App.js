import React, { Component } from 'react'

import TextExample from './Examples/TextExample'
import HierarchyExample from './Examples/HierarchyExample'
import IconsExample from './Examples/IconsExmaple'

class App extends Component {
  render() {
    return (
      <div>
        <TextExample />
        <HierarchyExample />
        <IconsExample />
      </div>
    )
  }
}

export default App
