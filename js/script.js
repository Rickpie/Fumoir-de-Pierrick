document.addEventListener("DOMContentLoaded", function () {
  // Détecter si le site est en local ou sur GitHub Pages
  let paths = window.location.pathname.split("/").filter((path) => path !== "");
  let repoName =
      paths.length > 0 && window.location.hostname.includes("github.io")
          ? `/${paths[0]}/`
          : "/";

  // Charger le header
  fetch(`${repoName}header/header.html`)
      .then((response) => response.text())
      .then((data) => {
          document.getElementById("header").innerHTML = data;
          adjustLinks(repoName);

          // Gérer le menu hamburger après avoir chargé le header
          const menuToggle = document.getElementById("menu-toggle");
          const navbarLinks = document.getElementById("navbar-links");

          // Vérifier que les éléments existent avant d'attacher l'événement
          if (menuToggle && navbarLinks) {
              console.log("menu-toggle et navbar-links trouvés"); // Vérification ajoutée
              menuToggle.addEventListener("click", function() {
                  // Afficher un message lors du clic sur le bouton hamburger
                  console.log("Hamburger cliqué");

                  // On bascule la classe active pour afficher/cacher le menu
                  navbarLinks.classList.toggle("active");

                  // Afficher l'état de la classe active dans la console
                  console.log("Classes de navbarLinks : ", navbarLinks.classList);
              });
          } else {
              // Si un des éléments est manquant, afficher un message d'erreur
              if (!menuToggle) console.error("Element 'menu-toggle' non trouvé !");
              if (!navbarLinks) console.error("Element 'navbar-links' non trouvé !");
          }
      })
      .catch((error) => console.error("Erreur lors du chargement du header:", error));

  // Charger le footer
  fetch(`${repoName}footer/footer.html`)
      .then((response) => response.text())
      .then((data) => {
          document.getElementById("footer").innerHTML = data;
      })
      .catch((error) => console.error("Erreur lors du chargement du footer:", error));

  // Gérer les dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
          dropdown.classList.add("open");
      });
      dropdown.addEventListener("mouseleave", () => {
          dropdown.classList.remove("open");
      });

      // Activer le dropdown sur mobile au clic
      dropdown.addEventListener("click", (event) => {
          if (window.innerWidth <= 768) {
              event.preventDefault();
              dropdown.classList.toggle("open");
          }
      });
  });

  function adjustLinks(repoName) {
      let navLinks = document.querySelectorAll("#header .navbar-links a, #header .navbar-brand");
      navLinks.forEach((link) => {
          let href = link.getAttribute("href");
          if (href && !href.startsWith("http") && !href.startsWith("#")) {
              link.setAttribute("href", repoName + href);
          }
      });

      let bannerImg = document.querySelector("#header #banniere img");
      if (bannerImg) {
          let src = bannerImg.getAttribute("src");
          if (src && !src.startsWith("http")) {
              bannerImg.setAttribute("src", repoName + src);
          }
      }
  }
});

console.log("Script chargé");
