import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const actions = {
  onClick: action('onClick')
};

storiesOf('Button', module)
  .add('Default', () => <Button className="btn btn-default" {...actions}>Button</Button>)
  .add('Primary', () => <Button className="btn btn-primary" {...actions}>Button</Button>)
  .add('Info', () => <Button className="btn btn-info" {...actions}>Button</Button>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);