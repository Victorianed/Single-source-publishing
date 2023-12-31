// Récupérer tous les liens de la barre de navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Récupérer tous les contenus des onglets
const contents = document.querySelectorAll('.content');

// Ajouter un gestionnaire d'événement pour chaque lien de la barre de navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Masquer tous les contenus
    contents.forEach(content => {
      content.classList.remove('active');
    });

    // Récupérer l'ID de l'onglet correspondant au lien cliqué
    const tabId = link.getAttribute('href').substring(1);

    // Afficher le contenu de l'onglet correspondant
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
  });
});
