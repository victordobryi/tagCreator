export const BaseComponent = (tag, styles) => {
  const element = document.createElement(tag);
  element.classList.add(styles);
  return element;
};
