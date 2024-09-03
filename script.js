const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const noContainer = document.getElementById('no-container');

yesButton.addEventListener('click', () => {
  alert('Sabía que aceptarías jsjsjsjs, pide permiso ahora jsjs');
});

noButton.addEventListener('click', () => {
  noContainer.style.display = 'block';
});