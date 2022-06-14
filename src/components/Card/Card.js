import { BaseComponent } from '../BaseComponent/BaseComponent.js';
import { CloseButton } from '../CloseButton/CloseButton.js';

export const Card = (id, content, removeCard) => {
  const card = BaseComponent('div', 'card');
  card.id = id;
  const closeButton = CloseButton();

  closeButton.addEventListener('click', () => {
    removeCard(id);
  });
  card.textContent = content;
  card.append(closeButton);
  return card;
};
