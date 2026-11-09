const createText = (tag, text, className) => {
  const element = document.createElement(tag);
  element.textContent = text || "";
  if (className) element.className = className;
  return element;
};

function createImage(src, alt, fallback) {
  const image = document.createElement("img");
  image.src = src || fallback;
  image.alt = alt;
  image.loading = "lazy";
  image.decoding = "async";
  return image;
}

function showLoadError(container, message) {
  container.replaceChildren(createText("p", message, "load-error"));
}

async function renderProjects() {
  const container = document.getElementById("projects");
  try {
    const projects = await request(API.PROJECTS);
    const fragment = document.createDocumentFragment();

    (Array.isArray(projects) ? projects : []).forEach((project) => {
      const card = document.createElement("article");
      card.className = "card";
      card.append(
        createImage(project.imageUrl, project.name || "Project image", "https://via.placeholder.com/300"),
        createText("h3", project.name || "Untitled project"),
        createText("p", project.description || "")
      );
      fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
  } catch (error) {
    console.error("Projects error:", error);
    showLoadError(container, "Projects are temporarily unavailable. Please try again later.");
  }
}

async function renderClients() {
  const container = document.getElementById("clients");
  try {
    const clients = await request(API.CLIENTS);
    const fragment = document.createDocumentFragment();

    (Array.isArray(clients) ? clients : []).forEach((client) => {
      const card = document.createElement("article");
      card.className = "card";
      card.append(
        createImage(client.imageUrl, client.name || "Client image", "https://via.placeholder.com/150"),
        createText("h3", client.name || "Client"),
        createText("strong", client.designation || ""),
        createText("p", client.description || "")
      );
      fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
  } catch (error) {
    console.error("Clients error:", error);
    showLoadError(container, "Client highlights are temporarily unavailable. Please try again later.");
  }
}

document.getElementById("contactForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const payload = Object.fromEntries(new FormData(form));
  try {
    await request(API.CONTACT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    alert("Contact submitted successfully.");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Unable to submit the contact form. Please try again.");
  }
});

document.getElementById("subscribeForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = new FormData(form).get("email");
  try {
    await request(API.SUBSCRIBE, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    alert("Subscribed successfully.");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Unable to subscribe. Please try again.");
  }
});

// Independent loads start together so a slow endpoint does not block the other section.
renderProjects();
renderClients();
