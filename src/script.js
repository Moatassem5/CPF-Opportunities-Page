'use strict'

function scaleOut(event) {
    const card = event.currentTarget;
    card.classList.add('hide'); // Trigger scale-down animation
    card.addEventListener('transitionend', () => {
        card.style.display = 'none'; // Hide after the animation
    }, { once: true });
}

function resetCard(event) {
    const card = event.currentTarget;
    card.classList.remove('hide');
    card.style.display = ''; // Reset display property
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('touchstart', scaleOut);
    card.addEventListener('touchend', resetCard);
});