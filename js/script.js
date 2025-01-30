if (headerContainer) {
    console.log("Chargement du header...");
    headerContainer.innerHTML = `
        <nav>
            <div class="nav-wrapper">
                <a href="/fumoir_vitrine/index.html" class="brand-logo">Fumoir de Pierrick</a>
                <div class="menu">
                    <ul>
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