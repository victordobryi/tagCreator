import { BaseComponent } from './components/BaseComponent/BaseComponent.js';
import { MainField } from './components/MainField/MainField.js';

export const App = () => {
  const page = document.getElementById('root');
  page.append(MainField());
};
