document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    if (headerContainer) {
        console.log("Chargement du header...");
        headerContainer.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <!-- Lien vers la racine du site -->
                <a class="navbar-brand" href="/fumoir_vitrine/index.html">Le fumoir de Pierrick</a>
                <div class="navbar-menu">
                    <ul class="navbar-links">
                        <!-- Lien vers la page d'accueil -->
                        <li><a href="/fumoir_vitrine/index.html">Accueil</a></li>
                        <!-- Liens vers les pages internes en chemin relatif -->
                        <li><a href="/fumoir_vitrine/home_menu/conseils/conseil_index.html">Conseils</a></li>
                        <li><a href="/fumoir_vitrine/home_menu/fumoir/fumoir_index.html">Fumoir</a></li>
                        <li><a href="/fumoir_vitrine/home_menu/recettes/recettes_index.html">Recettes</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section id="banniere">
            <img src="/fumoir_vitrine/images/banniere.jpg" alt="Bannière" class="img-banniere">
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