// loadHeaderFooter.js

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM entièrement chargé et analysé");

  // Charger dynamiquement le header (qui inclut aussi la navbar et la bannière)
  fetch('includes/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de chargement du header : ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      console.log("Header chargé avec succès !");
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error('Erreur de chargement du header:', error));

  // Charger dynamiquement le footer
  fetch('includes/footer.html')  // Remarque : chemin relatif au dossier courant
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de chargement du footer : ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      console.log("Footer chargé avec succès !");
      // Injecter le footer dans la section #footer-container
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Erreur de chargement du footer:', error));
});
