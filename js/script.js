window.addEventListener('DOMContentLoaded', () => {
  const headerBtn = document.querySelector('.header-btn');
  headerBtn.addEventListener('click', () => {
    document.body.classList.toggle('open');
  });
});

function animateText() {
  const mvTxtArea = document.querySelector('.mv-txt-area');
  // const mvTxtContainer = document.querySelector('.mv-txt-datenum-container');
  const mvTxtDate = document.querySelector('.mv-txt-date');
  const mvTxtNum = document.querySelector('.mv-txt-num');
  const mvTxtEng = document.querySelector('.mv-txt-eng');
  const mvTxtJp = document.querySelector('.mv-txt-jp');

  mvTxtArea.classList.add('animate-bg');
  mvTxtDate.classList.add('animate-slide-up');
  mvTxtNum.classList.add('animate-slide-up');
  mvTxtEng.classList.add('animate-slide-up');
  mvTxtJp.classList.add('animate-slide-up');
}

// ページ読み込み完了時にアニメーションを実行
window.addEventListener('load', animateText);
