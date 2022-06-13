import { BaseComponent } from '../BaseComponent/BaseComponent.js';
import { Card } from '../Card/Card.js';
import { Control } from '../Control/Control.js';

export const TagCreator = () => {
  const tagCreator = BaseComponent('div', 'tag-creator');
  const cardsField = BaseComponent('div', 'cards-field');
  const checkbox = BaseComponent('input', 'checkbox');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', () => {
    tagCreator.classList.toggle('inActive');
  });

  const cards = [];

  const addCard = (textContent) => {
    const cardId = Date.now();
    const card = Card(cardId, textContent || 'empty block', removeCard);
    cards.push(card);
    cards.map((card) => cardsField.append(card));
  };

  const removeCard = (id) => {
    cards.map((card, i, arr) => (card.id == id ? arr.splice(i, 1) : null));
    cardsField.innerHTML = '';
    cards.map((card) => cardsField.append(card));
  };

  const control = Control(addCard);
  control.append(checkbox);
  tagCreator.append(control, cardsField);
  return tagCreator;
};
