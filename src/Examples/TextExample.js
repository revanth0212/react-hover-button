import React from 'react'

import HoverButton from '../HoverButton'
import Text from './Text'

export default () => (
  <div>
    <h3>Simple</h3>
    <HoverButton
      node={<Text text="Main Button" />}
      options={[
        { node: <Text text="Button 1" /> },
        { node: <Text text="Button 2" /> },
        { node: <Text text="Button 3" /> }
      ]}
      rootStyle={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '7px' }}
      optionStyle={{ padding: '0px 5px' }}
      optionsStyle={{ display: 'flex' }}
    />
  </div>
)
