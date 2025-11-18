// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Navegação suave interna
  // ==========================
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();

      const headerOffset = 72; // altura aproximada do header
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset + 4;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // fecha o menu mobile ao clicar
      mainNav.classList.remove("is-open");
    });
  });

  // ==========================
  // Botões de WhatsApp
  // ==========================
  const whatsappButtons = document.querySelectorAll("[data-whatsapp-button]");
  const whatsappNumber = "555199091504"; // +55 51 9909-1504

  whatsappButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const origin = btn.getAttribute("data-whatsapp-origin") || "site";
      const message = `Olá, Raíssa! Encontrei seu site e gostaria de agendar minha primeira consulta.`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
    });
  });

  // ==========================
  // Menu mobile
  // ==========================
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }
});

// ANIMAÇÃO SUAVE NAS SEÇÕES AO ROLAR
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.15, // 15% da seção na tela já ativa
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });

    // opcional: fechar o menu ao clicar em um link
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
      });
    });
  }
});


