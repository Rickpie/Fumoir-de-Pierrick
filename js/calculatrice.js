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

      // Affiche les valeurs récupérées dans la console
      console.log('Poids de la viande:', poids);
      console.log('Pourcentage de sel:', pourcentageSel);

      // Effectue les calculs
      const quantiteSel = (poids * pourcentageSel) / 100;
      const quantiteSucre = quantiteSel / 2;
      const quantitePoivre = 1; // g (valeur fixe)
      const quantiteGenievre = 1; // g (valeur fixe)
      const quantiteEpices = 0.5; // g (valeur fixe)
      const quantiteLaurier = 0.3; // g (valeur fixe)

      // Affiche les résultats dans la console
      console.log('Quantité de sel:', quantiteSel);
      console.log('Quantité de sucre:', quantiteSucre);
      console.log('Quantité de poivre:', quantitePoivre);
      console.log('Quantité de genièvre:', quantiteGenievre);
      console.log('Quantité d\'épices:', quantiteEpices);
      console.log('Quantité de laurier:', quantiteLaurier);

      // Vérifie si les éléments existent avant de les manipuler
      const elementSel = document.getElementById('quantite-sel');
      const elementSucre = document.getElementById('quantite-sucre');
      const elementPoivre = document.getElementById('quantite-poivre');
      const elementGenievre = document.getElementById('quantite-genievre');
      const elementEpices = document.getElementById('quantite-epices');
      const elementLaurier = document.getElementById('quantite-laurier');

      if (elementSel) elementSel.textContent = `${quantiteSel.toFixed(2)} g`;
      if (elementSucre) elementSucre.textContent = `${quantiteSucre.toFixed(2)} g`;
      if (elementPoivre) elementPoivre.textContent = `${quantitePoivre} g`;
      if (elementGenievre) elementGenievre.textContent = `${quantiteGenievre} g`;
      if (elementEpices) elementEpices.textContent = `${quantiteEpices} g`;
      if (elementLaurier) elementLaurier.textContent = `${quantiteLaurier} g`;

      // Affiche la zone des résultats en retirant la classe "masque"
      const recette = document.getElementById('recette');
      if (recette) {
        recette.classList.remove('masque');
      }
    });
  } else {
    console.error('Le formulaire avec l\'ID "formulaire-calcul" est introuvable.');
  }
});
