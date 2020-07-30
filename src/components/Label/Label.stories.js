import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './Label';

storiesOf('Label', module)
  .add('Label', () => <Label>Label</Label>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);