import { createParagraph } from "./home-page";
function menuPage() {
  const contentContainer = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(
    createMenuItems("Tasty noodles", "../dist/img/food-img/noodles.jpg")
  );
  menu.appendChild(
    createMenuItems("Some tasty looking dish", "../dist/img/food-img/tasty.jpg")
  );
  menu.appendChild(
    createMenuItems("Tasty salad", "../dist/img/food-img/salad.jpg")
  );
  menu.appendChild(
    createMenuItems("Soothing tea", "../dist/img/food-img/tea.jpg")
  );
  menu.appendChild(
    createMenuItems("Yummy pancakes", "../dist/img/food-img/pancake.jpg")
  );
  menu.appendChild(
    createMenuItems("Tasty omelet", "../dist/img/food-img/egg.jpg")
  );
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
