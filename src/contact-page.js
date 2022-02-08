import { createParagraph } from "./home-page";
function contactPage() {
  const contentContainer = document.getElementById("content");
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.appendChild(createParagraph("📞 123 456 789"));
  contact.appendChild(
    createParagraph("🏠 Hollywood Boulevard 42, Los Angeles, USA")
  );
  const locationImg = document.createElement("img");
  locationImg.src = "/src/location.png";
  contact.appendChild(locationImg);
  contentContainer.appendChild(contact);
  document.querySelector(".contactBtn").classList.add("active");
}

export default contactPage;
