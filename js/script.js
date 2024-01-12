window.addEventListener('DOMContentLoaded', () => {
  const headerBtn = document.querySelector('.header-btn');
  headerBtn.addEventListener('click', () => {
    document.body.classList.toggle('open');
  });
});

/*
document.addEventListener('DOMContentLoaded', function () {
  const datenum = document.querySelector('.mv-txt-datenum p');

  // アニメーションを開始するクラスを追加
  datenum.classList.add('animate');
});
*/
