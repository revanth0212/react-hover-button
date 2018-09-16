import React from 'react'

const defaultRootNodeStyle = { display: 'flex' }

const defaultOptionsStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }

const Option = ({ option, style }) => <div style={style}>{option.node}</div>

const Options = ({ options, style = defaultOptionsStyle, optionStyle }) => (
  <div style={style}>
    {options.map(option => (
      <Option option={option} style={optionStyle} />
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
    const { node, options, rootStyle, optionsStyle, optionStyle } = this.props
    const { showOptions } = this.state
    return (
      <div style={{ width: 'fit-content', ...rootStyle }}>
        <div onClick={this.onClick} style={defaultRootNodeStyle}>
          {node}
        </div>
        {showOptions && <Options options={options} optionStyle={optionStyle} style={optionsStyle} />}
      </div>
    )
  }
}

export default HoverButton
