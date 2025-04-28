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

// Видеокружок с Богданом (открытие модального окна)
document.addEventListener('DOMContentLoaded', function() {
  var videoCircle = document.getElementById('videoCircle');
  var videoModal = document.getElementById('videoModal');
  var videoModalBackdrop = document.getElementById('videoModalBackdrop');
  var closeVideoModal = document.getElementById('closeVideoModal');
  var video = document.getElementById('videoInvite');

  function openModal() {
    videoModal.classList.add('active');
    video.currentTime = 0;
    video.play();
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    videoModal.classList.remove('active');
    video.pause();
    document.body.style.overflow = '';
  }
  videoCircle.addEventListener('click', openModal);
  videoCircle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') openModal();
  });
  closeVideoModal.addEventListener('click', closeModal);
  videoModalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) {
    if (videoModal.classList.contains('active') && e.key === 'Escape') closeModal();
  });
});