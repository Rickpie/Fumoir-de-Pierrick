document.addEventListener("DOMContentLoaded", function () {
    let prefix = './';  // Dossier actuel

    // Si on est dans un sous-dossier, on remonte de 2 niveaux
    const depth = window.location.pathname.split('/').length - 1;
    if (depth > 1) {
        prefix = '../../../../';  // Remonter de 4 niveaux si trop profond
    }

    // Charger le header
    const headerHTML = `
        <nav class="navbar">
          <div class="container">
            <a class="navbar-brand" href="${prefix}index.html">Le fumoir de Pierrick</a>
            <div class="navbar-menu">
              <ul class="navbar-links">
                <li><a href="${prefix}index.html">Accueil</a></li>
                <li><a href="${prefix}home_menu/conseils/conseil_index.html">Conseils</a></li>
                <li><a href="${prefix}home_menu/fumoir/fumoir_index.html">Fumoir</a></li>
                <li><a href="${prefix}home_menu/recettes/recettes_index.html">Recettes</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="banniere">
          <img src="${prefix}images/banniere.jpg" alt="Bannière" class="img-banniere">
        </section>
    `;
  
    // Charger le footer
    const footerHTML = `
        <footer>
          <p>&copy; 2025 Le fumoir de Pierrick. Tous droits réservés.</p>
        </footer>
    `;
  
    // Injection dans les conteneurs du header et footer
    document.getElementById('header-container').innerHTML = headerHTML;
    document.getElementById('footer-container').innerHTML = footerHTML;
});
