document.addEventListener("DOMContentLoaded", function () {
    // Log pour vérifier que le DOM est bien chargé
    console.log("DOM chargé");

    // Sélectionner les conteneurs du header et du footer
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    // Vérifier si les conteneurs existent
    console.log("Header container trouvé:", headerContainer);
    console.log("Footer container trouvé:", footerContainer);

    // Charger la navbar dans le header
    if (headerContainer) {
        console.log("Chargement du header...");
        headerContainer.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand" href="./index.html">Le fumoir de Pierrick</a>
                <div class="navbar-menu">
                    <ul class="navbar-links">
                        <li><a href="./index.html">Accueil</a></li>
                        <li><a href="./home_menu/conseils/conseil_index.html">Conseils</a></li>
                        <li><a href="./home_menu/fumoir/fumoir_index.html">Fumoir</a></li>
                        <li><a href="./home_menu/recettes/recettes_index.html">Recettes</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section id="banniere">
            <img src="images/banniere.jpg" alt="Bannière" class="img-banniere">
        </section>`;
        console.log("Header chargé avec succès.");
    } else {
        console.error("Erreur : Header container non trouvé.");
    }

    // Charger le footer
    if (footerContainer) {
        console.log("Chargement du footer...");
        footerContainer.innerHTML = `
        <footer>
            <p>© 2025 Fumoir de Pierrick - Tous droits réservés</p>
        </footer>`;
        console.log("Footer inséré:", footerContainer.innerHTML);
    } else {
        console.error("Erreur : Footer container non trouvé.");
    }
});
