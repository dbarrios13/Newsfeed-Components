let articlesAni = document.querySelector('.articles');

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  let menuValues = menu.classList.toString();
  if(menuValues.search('menu--open') == -1){
    menu.classList.add('menu--open');
    articlesAni.classList.add('articlesOpacityIn');
    articlesAni.addEventListener('click', () => {
      menu.classList.add('menu--close');
      articlesAni.classList.add('articlesOpacityOut');
    });
    menu.classList.remove('menu--close');
    articlesAni.classList.remove('articlesOpacityOut');
  } else {
    menu.classList.add('menu--close');
    articlesAni.classList.add('articlesOpacityOut');
    articlesAni.classList.remove('articlesOpacityIn');
    menu.classList.remove('menu--open');
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
// articlesAni.addEventListener('click', () => {
//   let menuValues = menu.classList.toString();
//   if(menuValues.search('menu--open') == -1){
//     menu.classList.toggle('menu--close');
//     articlesAni.classList.toggle('articlesOpacityOut');
//   }
// });
menuButton.addEventListener('click', () => toggleMenu());
