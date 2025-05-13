const header_menu_content = document.getElementById('header_menu_content');
const header_menu_shadow = document.getElementById('header_menu_shadow');

const btn_header_menu_open = document.getElementById('btn_header_menu_open');
const btn_header_menu_close = document.getElementById('btn_header_menu_close');

let isOpen = false;

btn_header_menu_close.addEventListener('click', () => {
    header_menu_content.classList.remove('translate-x-[0px]');
    header_menu_content.classList.add('translate-x-[1000px]');
    header_menu_shadow.classList.add('hidden');

    isOpen = false;
})

btn_header_menu_open.addEventListener('click', () => {  
    header_menu_content.classList.remove('translate-x-[1000px]');
    header_menu_content.classList.add('translate-x-[0px]');
    header_menu_shadow.classList.add('hidden');
})

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
modalPlatform.addEventListener('mouseout', () => {
  modalPlatform.style.visibility = 'hidden';
});
modalPlatform.addEventListener('mouseup', () => {
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
modalPlatform2.addEventListener('mouseup', () => {
  modalPlatform2.style.visibility = 'hidden';
});
modalPlatform2.addEventListener('mouseout', () => {
  modalPlatform2.style.visibility = 'hidden';
});
