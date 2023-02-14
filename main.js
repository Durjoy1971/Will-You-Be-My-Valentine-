
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const resultContainer = document.querySelector('.result-container');

yesBtn.addEventListener('click', function() {
    resultContainer.classList.remove('hidden');
});

noBtn.addEventListener('click', function() {
  alert('I\'m sorry to hear that. Maybe next year!');
});










