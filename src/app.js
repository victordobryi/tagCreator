import { TagCreator } from './components/TagCreator/TagCreator.js';

export const App = () => {
  const page = document.getElementById('root');
  page.append(TagCreator());
};
