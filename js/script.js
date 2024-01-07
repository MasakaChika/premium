window.addEventListener('DOMContentLoaded', () => {
  const headerBtn = document.querySelector('.header-btn');
  headerBtn.addEventListener('click', () => {
    document.body.classList.toggle('open');
  });
});
