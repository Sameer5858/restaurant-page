function createHeader() {
  const header = document.createElement("header");
  document.getElementById("body").appendChild(header);
  const restaurantNameDiv = document.createElement("div");
  restaurantNameDiv.textContent = "Restaurant";
  restaurantNameDiv.classList.add("restaurant-name");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About";
  nav.appendChild(homeBtn);
  nav.appendChild(aboutBtn);
  nav.appendChild(contactBtn);
  header.appendChild(restaurantNameDiv);
  header.appendChild(nav);
}
export default createHeader;
