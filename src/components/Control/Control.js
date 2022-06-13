import { BaseComponent } from '../BaseComponent/BaseComponent.js';

export const Control = (submit) => {
  const control = BaseComponent('form', 'control');
  const input = BaseComponent('input', 'input');
  const button = BaseComponent('button', 'button');

  control.append(input, button);

  control.addEventListener('submit', (e) => {
    e.preventDefault();
    submit(input.value);
    input.value = '';
  });

  return control;
};
