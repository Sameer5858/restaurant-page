export function aboutPage() {
  const contentContainer = document.getElementById("content");
  const div = document.createElement("div");
  let sectionTitle = div;
  let sectionDescription = div;
  sectionTitle.textContent = "About";
  sectionDescription.textContent =
    "Our Restaurant has the best food in the whole word. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae minus illum recusandae aperiam quisquam ducimus assumenda natus provident nihil.Totam magnam illum mollitia voluptatem animi. Autem expedita a perferendis reprehenderit, ut libero optio. Dolores porro eos ut iusto quibusdam, asperiores pariatur est excepturi dolore molestiae, similique optio tenetur in.";
  contentContainer.append(sectionTitle, sectionDescription);
}
