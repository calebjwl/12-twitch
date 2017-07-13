export default function createMessageItem(object) {
  const element = document.createElement('li');
  element.innerHTML = `<span class="message-item__username">${object.username}</span> ${object.message}`;
  return element;
}
