import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/popper.js/dist/popper.min.js';

const req = requireContext('../src/components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);