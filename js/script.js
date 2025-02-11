document.addEventListener("DOMContentLoaded", function () {
  // Charger le header depuis la racine du site
  fetch("/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Menu hamburger pour les petits écrans
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) {
        menuToggle.addEventListener('click', () => {
          const navbarLinks = document.getElementById('navbar-links');
          if (navbarLinks) {
            navbarLinks.classList.toggle('active');
          }
        });
      }

      // Corriger les liens dans le header pour utiliser des chemins absolus
      let navLinks = document.querySelectorAll(
        "#header .navbar-links a, #header .navbar-brand"
      );
      navLinks.forEach((link) => {
        let href = link.getAttribute("href");
        if (href && !href.startsWith("http") && !href.startsWith("#")) {
          // Préfixe avec "/" pour un chemin absolu
          link.setAttribute("href", "/" + href);
        }
      });

      // Corriger l'image de la bannière si nécessaire
      let bannerImg = document.querySelector("#header #banniere img");
      if (bannerImg) {
        let src = bannerImg.getAttribute("src");
        if (src && !src.startsWith("http")) {
          bannerImg.setAttribute("src", "/" + src);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du header:", error);
    });

  // Charger le footer depuis la racine du site
  fetch("/footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du footer:", error);
    });
});
