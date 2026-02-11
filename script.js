// On sélectionne le conteneur
const container = document.getElementById('lottie-container');

// On charge l'animation
const animation = lottie.loadAnimation({
  container: container, // où afficher l'animation
  renderer: 'svg',      // SVG (autre options: 'canvas', 'html')
  loop: true,           // true pour répéter en boucle
  autoplay: true,       // démarrer automatiquement
  path: 'assets/animation.json' // chemin vers ton fichier JSON
});
