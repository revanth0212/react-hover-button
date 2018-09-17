import React, { Component } from 'react'

import TextExample from './Examples/TextExample'
import HierarchyExample from './Examples/HierarchyExample'
import IconsExample from './Examples/IconsExmaple'
import IconsHierarchyExample from './Examples/IconsHierarchyExample'

class App extends Component {
  render() {
    return (
      <div style={{ margin: 'auto', width: 'fit-content' }}>
        <TextExample />
        <HierarchyExample />
        <IconsExample />
        <IconsHierarchyExample />
      </div>
    )
  }
}

export default App
