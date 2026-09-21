const createText = (tag, text, className) => {
  const element = document.createElement(tag);
  element.textContent = text || "";
  if (className) element.className = className;
  return element;
};

async function renderProjects() {
  const container = document.getElementById("projects");
  try {
    const projects = await request(API.PROJECTS);
    container.replaceChildren();
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "card";
      const image = document.createElement("img");
      image.src = project.imageUrl || "https://via.placeholder.com/300";
      image.alt = project.name || "Project image";
      image.loading = "lazy";
      card.append(image, createText("h3", project.name || "Untitled project"), createText("p", project.description || ""));
      container.appendChild(card);
    });
  } catch (error) { console.error("Projects error:", error); }
}

async function renderClients() {
  const container = document.getElementById("clients");
  try {
    const clients = await request(API.CLIENTS);
    container.replaceChildren();
    clients.forEach((client) => {
      const card = document.createElement("article");
      card.className = "card";
      const image = document.createElement("img");
      image.src = client.imageUrl || "https://via.placeholder.com/150";
      image.alt = client.name || "Client image";
      image.loading = "lazy";
      card.append(image, createText("h3", client.name || "Client"), createText("strong", client.designation || ""), createText("p", client.description || ""));
      container.appendChild(card);
    });
  } catch (error) { console.error("Clients error:", error); }
}

document.getElementById("contactForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const payload = Object.fromEntries(new FormData(form));
  try {
    await request(API.CONTACT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    alert("Contact submitted successfully.");
    form.reset();
  } catch (error) { console.error(error); alert("Unable to submit the contact form. Please try again."); }
});

document.getElementById("subscribeForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = new FormData(form).get("email");
  try {
    await request(API.SUBSCRIBE, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    alert("Subscribed successfully.");
    form.reset();
  } catch (error) { console.error(error); alert("Unable to subscribe. Please try again."); }
});

renderProjects();
renderClients();
