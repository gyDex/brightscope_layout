const navItems = document.querySelectorAll('.header__platform, #header__platform');
const modalPlatform = document.getElementById('header__modal_platform');

const navItems2 = document.querySelectorAll('.header__platform2, #header__platform2');
const modalPlatform2 = document.getElementById('header__modal_platform2');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    modalPlatform.style.visibility = 'visible';
    modalPlatform2.style.visibility = 'hidden';
  });
});

modalPlatform.addEventListener('mouseleave', () => {
  modalPlatform.style.visibility = 'hidden';
});

navItems2.forEach(item => {
  item.addEventListener('mouseenter', () => {
    modalPlatform2.style.visibility = 'visible';
      modalPlatform.style.visibility = 'hidden';
  });
});

modalPlatform2.addEventListener('mouseleave', () => {
  modalPlatform2.style.visibility = 'hidden';
});