const navmenu = document.getElementById('nav_menu');
const toggle_menu = document.getElementById('toggle_menu');
const close_menu = document.getElementById('close_menu')



toggle_menu.addEventListener("click", () => {
    navmenu.classList.toggle('show')
})

close_menu.addEventListener('click',() => {
  navmenu.classList.remove('show')
})
