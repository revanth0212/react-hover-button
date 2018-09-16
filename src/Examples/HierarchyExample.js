import React from 'react'

import HoverButton from '../HoverButton'
import Text from './Text'

export default () => (
  <div>
    <h3>Hierarchy</h3>
    <HoverButton
      node={<Text text="Main Button" />}
      options={[
        { node: <Text text="Button 1" /> },
        { node: <Text text="Button 2" /> },
        { node: <Text text="Button 3" /> },
        {
          node: (
            <HoverButton
              node={<Text text="Button 4" />}
              options={[{ node: <Text text="Button 4.1" /> }, { node: <Text text="Button 4.2" /> }]}
              rootStyle={{ display: 'flex' }}
              optionStyle={{ padding: '0px 5px' }}
              optionsStyle={{ display: 'block' }}
            />
          )
        }
      ]}
      rootStyle={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      optionStyle={{ padding: '0px 5px' }}
      optionsStyle={{ display: 'flex' }}
    />
  </div>
)
