import createMessageItem from './create-message-item.js';

export default function addMessageItem(list, object) {
  const listEl = createMessageItem(object);
  list.appendChild(listEl);
}
