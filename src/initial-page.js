import { homePage } from "./home-page";
function createHeader() {
  const header = document.createElement("header");
  const restaurantNameDiv = document.createElement("div");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  document.getElementById("body").appendChild(header);
  restaurantNameDiv.textContent = "Restaurant";
  restaurantNameDiv.classList.add("restaurant-name");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("homeBtn");
  homeBtn.classList.add("tab");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("contactBtn");
  contactBtn.classList.add("tab");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("menuBtn");
  menuBtn.classList.add("tab");
  header.appendChild(restaurantNameDiv);
  header.appendChild(nav);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
}
function initialPage() {
  createHeader();
  homePage();
}

export { initialPage, createHeader };
