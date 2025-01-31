document.addEventListener('DOMContentLoaded', function() {
  console.log('Le DOM est entièrement chargé.');

  document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
    console.log('Formulaire soumis.');

    // Récupère les valeurs des champs
    const weight = parseFloat(document.getElementById('weight').value);
    const saltPercentage = parseFloat(document.getElementById('salt').value);

    // Affiche les valeurs récupérées dans la console
    console.log('Poids de la viande:', weight);
    console.log('Pourcentage de sel:', saltPercentage);

    // Effectue les calculs
    const saltAmount = (weight * saltPercentage) / 100;
    const sugarAmount = saltAmount / 2;
    const pepperAmount = 1; // g (valeur fixe)
    const juniperAmount = 1; // g (valeur fixe)
    const spiceAmount = 0.5; // g (valeur fixe)
    const laurelAmount = 0.3; // g (valeur fixe)

    // Affiche les résultats dans la console
    console.log('Quantité de sel:', saltAmount);
    console.log('Quantité de sucre:', sugarAmount);
    console.log('Quantité de poivre:', pepperAmount);
    console.log('Quantité de genièvre:', juniperAmount);
    console.log('Quantité d\'épices:', spiceAmount);
    console.log('Quantité de laurier:', laurelAmount);

    // Vérifie si les éléments existent avant de les manipuler
    const saltElement = document.getElementById('salt-amount');
    const sugarElement = document.getElementById('sugar-amount');
    const pepperElement = document.getElementById('pepper-amount');
    const juniperElement = document.getElementById('juniper-amount');
    const spiceElement = document.getElementById('spice-amount');
    const laurelElement = document.getElementById('laurel-amount');

    if (saltElement) saltElement.textContent = `${saltAmount.toFixed(2)} g`;
    if (sugarElement) sugarElement.textContent = `${sugarAmount.toFixed(2)} g`;
    if (pepperElement) pepperElement.textContent = `${pepperAmount} g`;
    if (juniperElement) juniperElement.textContent = `${juniperAmount} g`;
    if (spiceElement) spiceElement.textContent = `${spiceAmount} g`;
    if (laurelElement) laurelElement.textContent = `${laurelAmount} g`;

    // Affiche la zone des résultats en retirant la classe "hidden"
    document.getElementById('recipe').classList.remove('hidden');
  });
});
