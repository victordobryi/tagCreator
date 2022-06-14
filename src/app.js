import { TagCreator } from './components/TagCreator/TagCreator.js';

export const App = () => {
  const page = document.getElementById('root');
  const tagCreator = new TagCreator();

  page.append(tagCreator.render());
};
