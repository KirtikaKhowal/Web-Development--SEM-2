// DOM Selections
const addEventBtn = document.getElementById("addEvent");
const eventContainer = document.getElementById("eventContainer");
const clearEventsBtn = document.getElementById("clearEvents");
const sampleEventsBtn = document.getElementById("sampleEvents");

// Input fields
const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const category = document.getElementById("category");
const description = document.getElementById("description");

/* ---------------- ADD EVENT ---------------- */
addEventBtn.addEventListener("click", () => {
  if (
    eventName.value === "" ||
    eventDate.value === "" ||
    description.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  createEventCard(
    eventName.value,
    eventDate.value,
    category.value,
    description.value
  );

  // Clear form
  eventName.value = "";
  eventDate.value = "";
  description.value = "";
});

/* ---------------- CREATE EVENT CARD ---------------- */
function createEventCard(title, date, category, desc) {
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <button class="delete">✖</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="tag">${category}</span>
    <p>${desc}</p>
    <button class="complete">Mark Complete</button>
  `;

  eventContainer.appendChild(card);
}

/* ---------------- EVENT DELEGATION ---------------- */
eventContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".event-card");

  if (e.target.classList.contains("delete")) {
    card.remove();
  }

  if (e.target.classList.contains("complete")) {
    card.classList.toggle("completed");
  }
});

/* ---------------- CLEAR ALL EVENTS ---------------- */
clearEventsBtn.addEventListener("click", () => {
  eventContainer.innerHTML = "";

});

/* ---------------- ADD SAMPLE EVENTS ---------------- */
sampleEventsBtn.addEventListener("click", () => {
  createEventCard(
    "Emifest",
    "2026-01-14",
    "Social",
    "College cultural fest"
  );

  createEventCard(
    "Tech Conference",
    "2026-02-10",
    "Conference",
    "Latest trends in AI & Web"
  );
});

/* ---------------- KEYBOARD EVENT (DOM DEMO) ---------------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    document.querySelector(".dom-demo p:last-child").innerText =
      "You pressed: Shift";
  }
});
//task-2
ClearAllBtn