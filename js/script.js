document.addEventListener("DOMContentLoaded", function () {
    // Log pour vérifier que le DOM est bien chargé
    console.log("DOM chargé");

    // Sélectionner les conteneurs du header et du footer
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    // Vérifier si les conteneurs existent
    console.log("Header container trouvé:", headerContainer);
    console.log("Footer container trouvé:", footerContainer);

    // Fonction pour ajuster le chemin relatif des liens
    function adjustLinkPath(path) {
        // On supprime le préfixe "/Fumoir_vitrine" car GitHub Pages sert le site depuis la racine
        return `${path}`;
    }

    // Charger la navbar dans le header
    if (headerContainer) {
        console.log("Chargement du header...");
        headerContainer.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <!-- Lien vers la racine du site -->
                <a class="navbar-brand" href="./index.html">Le fumoir de Pierrick</a>
                <div class="navbar-menu">
                    <ul class="navbar-links">
                        <!-- Lien vers la page d'accueil -->
                        <li><a href="./index.html">Accueil</a></li>
                        <li><a href="${adjustLinkPath('home_menu/conseils/conseil_index.html')}">Conseils</a></li>
                        <li><a href="${adjustLinkPath('home_menu/fumoir/fumoir_index.html')}">Fumoir</a></li>
                        <li><a href="${adjustLinkPath('home_menu/recettes/recettes_index.html')}">Recettes</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section id="banniere">
            <img src="./images/banniere.jpg" alt="Bannière" class="img-banniere">
        </section>`;
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
