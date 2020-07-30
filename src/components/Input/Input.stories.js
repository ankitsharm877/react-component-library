import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Input', module)
  .add('default', () => <Input placeholder="placeholder" />)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);