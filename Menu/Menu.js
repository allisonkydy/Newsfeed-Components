/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuMother(menuArray) {
  // create new elements
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // structure elements
  menu.appendChild(menuList);
  
  // create li for each item in array and add to ul
  menuArray.forEach(item => {
    // create li
    const menuItem = document.createElement('li');
    // add content to li
    menuItem.textContent = item;
    // add to ul
    menuList.appendChild(menuItem);
  });

  // add classes
  menu.classList.add('menu');

  // select menu button
  const menuButton = document.querySelector('.menu-button');

  // menu button click event
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}

// create new menu
const newMenu = menuMother(menuItems);

// add new menu to DOM
document.querySelector('.header').appendChild(newMenu);
