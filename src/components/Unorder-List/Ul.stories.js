import React from 'react';
import { storiesOf } from '@storybook/react';

import Ul from './Ul';
import Li from '../List-Item/Li';

storiesOf('Unorder-List', module)
  .add('Ul', () => 
  <Ul>
    <Li>IBM</Li>
    <Li>Developer</Li>
    </Ul>
    )
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);