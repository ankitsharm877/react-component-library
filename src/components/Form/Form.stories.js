import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';
import Label from '../Label/Label'
import Input from '../Input/Input';
import Button from '../Button/Button';

storiesOf('Form', module)
  .add('Form', () => 
  <Form>
    <div className="form-group">
        <Label for="email">Email address:</Label>
        <Input type="email" className="form-control" placeholder="Enter email" id="email"/>
    </div>
    <div className="form-group">
        <Label for="pwd">Password:</Label>
        <Input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
    </div>
    <div className="form-group form-check">
        <Label className="form-check-label">
        <Input className="form-check-input" type="checkbox"/> Remember me
        </Label>
    </div>
    <Button className="btn btn-primary">Submit</Button>
</Form>)
  .addDecorator(storyFn => <div style={{margin:'10px' }}>{storyFn()}</div>);