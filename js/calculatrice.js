document.addEventListener('DOMContentLoaded', function() {
  console.log('Le DOM est entièrement chargé.');

  const formulaire = document.getElementById('formulaire-calcul');
  if (formulaire) {
    formulaire.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche la soumission du formulaire
      console.log('Formulaire soumis.');

      // Récupère les valeurs des champs
      const poids = parseFloat(document.getElementById('poids').value);
      const pourcentageSel = parseFloat(document.getElementById('sel').value);

      // Vérifie si les valeurs sont valides
      if (isNaN(poids) || isNaN(pourcentageSel)) {
        console.error('Veuillez entrer des valeurs valides.');
        return;
      }

      // Calculs
      const quantiteSel = (poids * pourcentageSel) / 100;
      const quantiteSucre = quantiteSel / 2;
      const quantitePoivre = poids * 0.001;
      const quantiteGenievre = poids * 0.001;
      const quantiteEpices = poids * 0.0005;
      const quantiteLaurier = Math.round(poids / 500); // Nombre entier de feuilles

      // Mise à jour de l'affichage
      document.getElementById('quantite-sel').textContent = `${quantiteSel.toFixed(2)} g`;
      document.getElementById('quantite-sucre').textContent = `${quantiteSucre.toFixed(2)} g`;
      document.getElementById('quantite-poivre').textContent = `${quantitePoivre.toFixed(2)} g`;
      document.getElementById('quantite-genievre').textContent = `${quantiteGenievre.toFixed(2)} g`;
      document.getElementById('quantite-epices').textContent = `${quantiteEpices.toFixed(2)} g`;
      document.getElementById('quantite-laurier').textContent = `${quantiteLaurier} Feuilles`;

      // Affiche la zone des résultats
      document.getElementById('recette').classList.remove('masque');
    });
  } else {
    console.error('Le formulaire avec l\'ID "formulaire-calcul" est introuvable.');
  }
});
