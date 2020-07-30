import React from 'react';
import { storiesOf } from '@storybook/react';

import P from './P';

storiesOf('Paragraph', module)
  .add('P', () => <P>Paragraph</P>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);