import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';

storiesOf('Icon', module)
  .add('Facebook', () => <Icon className="fab fa-facebook-square fa-4x"></Icon>)
  .add('Twitter', () => <Icon className="fab fa-twitter fa-4x"></Icon>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);