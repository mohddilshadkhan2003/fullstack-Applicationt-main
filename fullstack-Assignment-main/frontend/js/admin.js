async function loadAdminData() {
  try {
    const [contacts, subscribers] = await Promise.all([request(API.CONTACT), request(API.SUBSCRIBE)]);
    const contactsContainer = document.getElementById("contacts");
    const subscribersContainer = document.getElementById("subscribers");
    contactsContainer.replaceChildren();
    subscribersContainer.replaceChildren();

    contacts.forEach((contact) => {
      const item = document.createElement("p");
      item.textContent = `${contact.fullName} — ${contact.email} — ${contact.mobile} — ${contact.city}`;
      contactsContainer.appendChild(item);
    });
    subscribers.forEach((subscriber) => {
      const item = document.createElement("p");
      item.textContent = subscriber.email;
      subscribersContainer.appendChild(item);
    });
  } catch (error) { console.error("Admin data error:", error); }
}

async function submitAdminForm(form, endpoint, payload, successMessage) {
  try {
    await request(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    alert(successMessage);
    form.reset();
  } catch (error) { console.error(error); alert("Unable to save this item. Please try again."); }
}

document.getElementById("projectForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  submitAdminForm(form, API.PROJECTS, data, "Project added.");
});

document.getElementById("clientForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  submitAdminForm(form, API.CLIENTS, data, "Client added.");
});

loadAdminData();
