// Анимация появления секций при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});

// Обработка формы экскурсии
const form = document.getElementById('excursion-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Простая валидация
    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (!name || !phone || !email) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
} 