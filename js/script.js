document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded: La page HTML est complètement chargée.");

  // Détecter si le site est en local ou sur GitHub Pages
  let paths = window.location.pathname.split("/").filter((path) => path !== "");
  let repoName = (paths.length > 0 && window.location.hostname.includes("github.io"))
      ? `/${paths[0]}/`
      : "/";
  console.log("repoName calculé :", repoName);

  // Charger le header dynamiquement
  console.log("Début du chargement du header...");
  fetch(`${repoName}header/header.html`)
      .then((response) => {
          console.log("Réponse du fetch du header :", response);
          return response.text();
      })
      .then((data) => {
          console.log("Contenu du header chargé :", data);
          const headerEl = document.getElementById("header");
          if (!headerEl) {
              console.error("L'élément avec l'ID 'header' est introuvable dans le DOM !");
              return;
          }
          headerEl.innerHTML = data;
          console.log("Header injecté dans le DOM.");

          // Appeler adjustLinks pour corriger les liens et les images
          adjustLinks(repoName);

          // Attacher le gestionnaire pour le menu hamburger après injection du header
          const menuToggle = document.getElementById("menu-toggle");
          const navbarLinks = document.getElementById("navbar-links");

          if (menuToggle && navbarLinks) {
              console.log("menu-toggle et navbar-links trouvés.");
              menuToggle.addEventListener("click", function () {
                  console.log("Hamburger cliqué.");
                  console.log("Classes avant toggle :", navbarLinks.classList.toString());
                  navbarLinks.classList.toggle("active");
                  console.log("Classes après toggle :", navbarLinks.classList.toString());
              });
          } else {
              if (!menuToggle) console.error("Element 'menu-toggle' non trouvé !");
              if (!navbarLinks) console.error("Element 'navbar-links' non trouvé !");
          }
      })
      .catch((error) => {
          console.error("Erreur lors du chargement du header :", error);
      });

  // Charger le footer dynamiquement
  console.log("Début du chargement du footer...");
  fetch(`${repoName}footer/footer.html`)
      .then((response) => {
          console.log("Réponse du fetch du footer :", response);
          return response.text();
      })
      .then((data) => {
          const footerEl = document.getElementById("footer");
          if (!footerEl) {
              console.error("L'élément avec l'ID 'footer' est introuvable dans le DOM !");
              return;
          }
          footerEl.innerHTML = data;
          console.log("Footer injecté dans le DOM.");
      })
      .catch((error) => {
          console.error("Erreur lors du chargement du footer :", error);
      });

  // Gérer les dropdowns (ces éléments doivent être déjà dans le DOM dans le header injecté)
  console.log("Initialisation des dropdowns...");
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
          console.log("Dropdown survolé (mouseenter) :", dropdown);
          dropdown.classList.add("open");
      });
      dropdown.addEventListener("mouseleave", () => {
          console.log("Dropdown quitté (mouseleave) :", dropdown);
          dropdown.classList.remove("open");
      });
      // Pour les écrans mobiles, activer le dropdown au clic
      dropdown.addEventListener("click", (event) => {
          if (window.innerWidth <= 768) {
              console.log("Clic sur dropdown (mobile) :", dropdown);
              event.preventDefault();
              dropdown.classList.toggle("open");
              console.log("État du dropdown après clic :", dropdown.classList.toString());
          }
      });
  });

  // Fonction pour ajuster les liens et images du header
  function adjustLinks(repoName) {
      console.log("Exécution de adjustLinks avec repoName :", repoName);
      let navLinks = document.querySelectorAll("#header .navbar-links a, #header .navbar-brand");
      navLinks.forEach((link) => {
          let href = link.getAttribute("href");
          if (href && !href.startsWith("http") && !href.startsWith("#")) {
              console.log("Ajustement du lien :", href);
              link.setAttribute("href", repoName + href);
          }
      });
      let bannerImg = document.querySelector("#header #banniere img");
      if (bannerImg) {
          let src = bannerImg.getAttribute("src");
          if (src && !src.startsWith("http")) {
              console.log("Ajustement de l'image de bannière :", src);
              bannerImg.setAttribute("src", repoName + src);
          }
      }
  }

  console.log("Script chargé et initialisation terminée.");
});

console.log("Script global chargé");
