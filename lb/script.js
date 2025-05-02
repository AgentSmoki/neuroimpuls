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

// Видеокружок как в Telegram
const tgVideo = document.getElementById('tgVideo');
const tgVideoCircle = document.getElementById('tgVideoCircle');
const tgPlayIcon = document.getElementById('tgPlayIcon');
const tgVideoOverlay = document.getElementById('tgVideoOverlay');

if (tgVideo && tgVideoCircle) {
  // Настройка видео для автоматического воспроизведения без звука
  tgVideo.muted = true;
  tgVideo.loop = true;
  tgVideo.play();

  // Скрываем иконку воспроизведения и оверлей, так как видео всегда играет
  tgPlayIcon.style.display = 'none';
  tgVideoOverlay.style.display = 'none';

  tgVideoCircle.addEventListener('click', () => {
    // Воспроизводим видео один раз со звуком
    tgVideo.muted = false;
    tgVideo.loop = false;
    tgVideo.currentTime = 0;
    tgVideo.play();

    // После окончания видео возвращаемся к цикличному воспроизведению без звука
    tgVideo.addEventListener('ended', function handler() {
      tgVideo.muted = true;
      tgVideo.loop = true;
      tgVideo.play();
      tgVideo.removeEventListener('ended', handler);
    }, { once: true });
  });
}