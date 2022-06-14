import { BaseComponent } from '../BaseComponent/BaseComponent.js';
import { Card } from '../Card/Card.js';

export class TagCreator {
  tagsArr = [];
  isActive = true;
  tagCreator = BaseComponent('div', 'tag-creator');
  cardsField = BaseComponent('div', 'cards-field');
  control = BaseComponent('form', 'control');
  checkbox = BaseComponent('input', 'control__checkbox');
  input = BaseComponent('input', 'control__input');
  button = BaseComponent('button', 'control__button');

  constructor() {
    this.checkbox.type = 'checkbox';
    this.button.innerText = 'Add Tag';
    this.checkbox.addEventListener('click', this.toggleIsActiveMode);
    this.control.append(this.input, this.button, this.checkbox);
    this.tagsArr = localStorage.getItem('tags') ? JSON.parse(localStorage.getItem('tags')) : [];
    this.addTagsToField();
    this.tagCreator.append(this.control, this.cardsField);

    this.control.addEventListener('submit', (e) => {
      e.preventDefault();
      this.tags = this.input.value;
      this.input.value = '';
    });
  }

  get tags() {
    return this.tagsArr;
  }

  set tags(textContent) {
    const cardId = Date.now();
    this.tagsArr.push({ content: textContent, id: cardId });
    this.removeTagsFromField();
    this.addTagsToField();
    this.addTagsToLS();
  }

  toggleIsActiveMode = () => {
    this.isActive = !this.isActive;
    this.tagCreator.classList.toggle('inActive');
  };

  removeTag = (id) => {
    this.tagsArr.map(({ id: cardId }, i, arr) => (cardId == id ? arr.splice(i, 1) : null));
    this.removeTagsFromField();
    this.addTagsToLS();
    this.addTagsToField();
  };

  addTagsToField() {
    this.tagsArr.map(({ content, id: cardId }, i) => {
      const card = Card(cardId, content || 'empty block', this.removeTag);
      this.cardsField.append(card);
    });
  }

  removeTagsFromField() {
    this.cardsField.innerHTML = '';
  }

  addTagsToLS() {
    localStorage.setItem('tags', JSON.stringify(this.tagsArr));
  }

  render() {
    return this.tagCreator;
  }
}
