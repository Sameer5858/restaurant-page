function homePage() {
  const contentContainer = document.getElementById("content");
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createParagraph("Best Restaurant in the word"));
  home.appendChild(createParagraph("Made with passion since 1999"));
  const chefImg = document.createElement("img");
  chefImg.src = "/src/chef.png";
  home.appendChild(chefImg);
  home.appendChild(createParagraph("Order online or visit us"));
  contentContainer.appendChild(home);
  document.querySelector(".homeBtn").classList.add("active");
}
function createParagraph(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}
export default homePage;
