import { body, section, link } from './styles.css';

// Set CSS variables on body element
document.body.style.setProperty('--clr', '#07232e');
document.body.style.setProperty('--clr2', '#76a1cb');

// Add the body class
document.body.classList.add(body);

// Create section element
const sec = document.createElement('section');
sec.className = section;
sec.style.setProperty('--bg', 'url(assets/img-1.avif)');

// Create two anchor elements inside section
const a1 = document.createElement('a');
a1.className = link;
a1.href = 'index7.html';

const a2 = document.createElement('a');
a2.className = link;
a2.href = 'index2.html';

sec.appendChild(a1);
sec.appendChild(a2);
document.body.appendChild(sec);
