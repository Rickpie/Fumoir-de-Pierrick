fetch('includes/header.html')
  .then(response => response.text())
  .then(data => {
    console.log("Header chargé avec succès !");
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => console.log('Erreur de chargement du header:', error));

fetch('includes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  })
  .catch(error => console.log('Erreur de chargement du footer:', error));
