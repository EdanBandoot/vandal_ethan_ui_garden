
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './Button';

const testVisibility = () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Button>Test</Button>);
  if (!div.innerHTML.includes('Test')) throw new Error('Button not visible');
};

const testDisabledState = () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Button disabled>Disabled</Button>);
  if (!div.innerHTML.includes('background-color:#cccccc'))
    throw new Error('Disabled style missing');
};

testVisibility();
testDisabledState();
console.log('All tests passed!');