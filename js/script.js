document.addEventListener("DOMContentLoaded", function () {
    // Détecte le niveau du sous-dossier pour ajuster les chemins
    const prefix = (location.pathname.match(/\//g) || []).length > 1 ? "../../" : "./";
    console.log("Prefix détecté : ", prefix);  // Log pour vérifier le préfixe
  
    // Charger le header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      console.log("Chargement du header...");  // Log avant chargement du header
      fetch(prefix + "includes/header.html")
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
          }
          return response.text();
        })
        .then(data => {
          console.log("Header chargé avec succès !");  // Log quand le header est chargé
          headerContainer.innerHTML = data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement du header :", error);
        });
    } else {
      console.log("Element header-container introuvable");  // Log si l'élément n'est pas trouvé
    }
  
    // Charger le footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      console.log("Chargement du footer...");  // Log avant chargement du footer
      fetch(prefix + "includes/footer.html")
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
          }
          return response.text();
        })
        .then(data => {
          console.log("Footer chargé avec succès !");  // Log quand le footer est chargé
          footerContainer.innerHTML = data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement du footer :", error);
        });
    } else {
      console.log("Element footer-container introuvable");  // Log si l'élément n'est pas trouvé
    }
  
    // Log de la fin de chargement du JS
    console.log("Script JS chargé et exécuté.");
  });
  