const header_menu_content = document.getElementById('header_menu_content');
const header_menu_shadow = document.getElementById('header_menu_shadow');

const btn_header_menu_open = document.getElementById('btn_header_menu_open');
const btn_header_menu_close = document.getElementById('btn_header_menu_close');

let isOpen = false;
    header_menu_shadow.classList.add('hidden');

btn_header_menu_close.addEventListener('click', () => {
    header_menu_content.classList.remove('translate-x-[0px]');
    header_menu_content.classList.add('translate-x-[1000px]');
    header_menu_shadow.classList.add('hidden');

    isOpen = false;
})
header_menu_shadow.addEventListener('click', () => {  
    header_menu_content.classList.remove('translate-x-[0px]');
    header_menu_content.classList.add('translate-x-[1000px]');
    header_menu_shadow.classList.add('hidden');
})
btn_header_menu_open.addEventListener('click', () => {  
    header_menu_content.classList.remove('translate-x-[1000px]');
    header_menu_content.classList.add('translate-x-[0px]');
    header_menu_shadow.classList.remove('hidden');
})