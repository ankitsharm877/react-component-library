import React from 'react';
import { storiesOf } from '@storybook/react';

import Li from './Li';

storiesOf('List Item', module)
  .add('Li', () => <Li>List Item</Li>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);