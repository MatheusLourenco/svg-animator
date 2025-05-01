import anime from 'animejs/lib/anime.es.js';

// Tamanho da tela
const screenHeight = 400; // altura do SVG

// Ajusta a animação para quicar sem bater no teto
anime({
  targets: '#ball',
  translateY: [
    { value: screenHeight - 20, duration: 600, easing: 'easeInCubic' }, // até o "chão"
    { value: 0, duration: 500, easing: 'easeOutBounce' } // volta com "easing"
  ],
  loop: true,
  direction: 'alternate', // Para garantir que a bola volte
});
