import initialPage from "./initial-page";
import homePage from "./home-page";
import contactPage from "./contact-page";
import createParagraph from "./home-page";
initialPage();
const tabs = document.querySelectorAll(".tab");
const contentContainer = document.getElementById("content");
function c() {
  loadContactPage;
}
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList[2]) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      if (tab.classList[0] === "homeBtn") {
        contentContainer.innerHTML = "";
        homePage();
      } else if (tab.classList[0] === "contactBtn") {
        contentContainer.innerHTML = "";
        contactPage();
      }
    }
  });
});
