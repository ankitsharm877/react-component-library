import React from 'react';
import { storiesOf } from '@storybook/react';

import Img from './Img';

storiesOf('Image', module)
  .add('Img', () => <Img src="/logo192.png" height="120" width="120"></Img>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);