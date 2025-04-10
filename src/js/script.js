document.addEventListener("DOMContentLoaded", () => {
  // ===== Fade-in com IntersectionObserver =====
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // ===== Botão Voltar ao Topo =====
  const btnTopo = document.getElementById('btn-topo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btnTopo.classList.add('show');
    } else {
      btnTopo.classList.remove('show');
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Botão WhatsApp com Menu de Opções (Antigo) =====
  const button = document.querySelector('.whatsapp-button');
  const options = document.querySelector('.whatsapp-options');

  if (button && options) {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      options.style.display = (options.style.display === 'flex') ? 'none' : 'flex';
    });

    document.addEventListener('click', function () {
      options.style.display = 'none';
    });
  }

  // ===== Botão WhatsApp com Leque de Ícones =====
  const mainButton = document.querySelector('.whatsapp-main-button');
  const leque = document.querySelector('.whatsapp-leque');

  if (mainButton && leque) {
    mainButton.addEventListener('click', function (e) {
      e.stopPropagation();
      leque.classList.toggle('active');
    });

    document.addEventListener('click', function () {
      leque.classList.remove('active');
    });
  }
});
