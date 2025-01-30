// loadHeaderFooter.js

document.addEventListener("DOMContentLoaded", function() {
  // Charger dynamiquement le header (qui inclut aussi la navbar et la bannière)
  fetch('/Fumoir_vitrine/includes/header.html')
    .then(response => response.text())
    .then(data => {
      console.log("Header chargé avec succès !");
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.log('Erreur de chargement du header:', error));

  // Charger dynamiquement le footer
  fetch('/Fumoir_vitrine/includes/footer.html')
    .then(response => response.text())
    .then(data => {
      // Injecter le footer à la fin du body
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.log('Erreur de chargement du footer:', error));
});
