import { createParagraph } from "./home-page";
function menuPage() {
  const contentContainer = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(
    createMenuItems("Tasty noodles", "./img/food-img/noodles.jpg")
  );
  menu.appendChild(
    createMenuItems("Some tasty looking dish", "./img/food-img/tasty.jpg")
  );
  menu.appendChild(createMenuItems("Tasty salad", "./img/food-img/salad.jpg"));
  menu.appendChild(createMenuItems("Soothing tea", "./img/food-img/tea.jpg"));
  menu.appendChild(
    createMenuItems("Yummy pancakes", "./img/food-img/pancake.jpg")
  );
  menu.appendChild(createMenuItems("Tasty omelet", "./img/food-img/egg.jpg"));
  contentContainer.appendChild(menu);
}
function createMenuItems(itemName, location) {
  const menuItem = document.createElement("div");
  const menuImg = document.createElement("img");
  menuItem.classList.add("menuitem");
  menuItem.appendChild(createParagraph(`${itemName}`));
  menuImg.src = `${location}`;
  menuItem.appendChild(menuImg);
  return menuItem;
}
export default menuPage;
