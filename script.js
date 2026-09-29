// Минимальный скрипт. Ничего не скрывает, ничего не анимирует.
// Просто плавный скролл по якорям (на случай, если браузер не поддерживает CSS smooth-scroll).
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});