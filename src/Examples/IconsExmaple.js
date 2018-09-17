import React from 'react'

import HoverButton from '../HoverButton'
import Icon from './Icon'

export default () => (
  <div>
    <h3>Icons</h3>
    <HoverButton
      node={<Icon className="fas fa-share" />}
      options={[
        { node: <Icon className="fab fa-facebook-f" /> },
        { node: <Icon className="fab fa-twitter" /> },
        { node: <Icon className="far fa-envelope" /> },
        { node: <Icon className="fas fa-link" /> }
      ]}
      rootStyle={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '7px' }}
      optionStyle={{ padding: '0px 5px' }}
      optionsStyle={{ display: 'flex' }}
    />
  </div>
)
