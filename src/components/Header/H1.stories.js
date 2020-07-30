import React from 'react';
import { storiesOf } from '@storybook/react';

import H1 from './H1';

storiesOf('Header 1', module)
  .add('H1', () => <H1>Header 1</H1>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);