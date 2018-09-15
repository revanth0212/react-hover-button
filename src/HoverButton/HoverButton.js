import React from 'react'

const Option = ({ option }) => <div style={{ padding: '0px 5px' }}>{option.node}</div>

const Options = ({ options }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
    {options.map(option => (
      <Option option={option} />
    ))}
  </div>
)

class HoverButton extends React.Component {
  state = {
    showOptions: false
  }

  setComponentState = newState => {
    console.log(newState)
    this.setState(newState)
  }

  onClick = () => {
    this.setComponentState({
      showOptions: !this.state.showOptions
    })
  }

  render() {
    const { node, options } = this.props
    const { showOptions } = this.state
    return (
      <div>
        <div onClick={this.onClick} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          {node}
        </div>
        {showOptions && <Options options={options} />}
      </div>
    )
  }
}

export default HoverButton
