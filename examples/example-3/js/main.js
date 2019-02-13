// fD is imported as an ES6 module
import fD from 'https://fsldom.org/1.0.0/fsldom-es.min.js';

import { people } from './data.js';

console.log(fD);

// Create and insert a <header>
let header = fD.newEl('header', { id: 'site-header' });

fD.prepend(document.body, header);

// Count each time the button is clicked
let output = fD.query('.status .amount');

fD.byId('logger').addEventListener('click', e => {
  output.textContent = Number(output.textContent) + 1;
});

// Populate the list
const list = fD.query('ul');

people.forEach(person => {
  let item = fD.newEl('li', {
    classList: 'person',
    id: person.name,
    text: `${person.name} is ${person.age} years old`,
  });
  fD.append(list, item);
});
