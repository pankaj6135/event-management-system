// Event Data
const events = [
  { title: "Tech Fest 2025", date: "2025-01-25", desc: "A grand celebration of technology." },
  { title: "Robotics Workshop", date: "2025-01-27", desc: "Hands-on robotics workshop." },
  { title: "Sports Meet", date: "2025-01-30", desc: "Annual sports event." },
];

// Load event cards
const container = document.getElementById("eventContainer");
events.forEach(ev => {
  container.innerHTML += `
    <div class="event-card">
      <h3>${ev.title}</h3>
      <p><b>Date:</b> ${ev.date}</p>
      <p>${ev.desc}</p>
      <button class="btn" onclick="openForm('${ev.title}')">Register</button>
    </div>`;
});

// Scroll function
function scrollToEvents() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

// Open registration popup
function openForm(eventName) {
  document.getElementById("popupForm").style.display = "flex";
  document.getElementById("eventName").value = eventName;
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Save Registration
document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = {
    id: "USER" + Math.floor(Math.random() * 90000),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    event: document.getElementById("eventName").value,
    ticket: null
  };

  let users = JSON.parse(localStorage.getItem("eventUsers")) || [];
  users.push(user);
  localStorage.setItem("eventUsers", JSON.stringify(users));

  alert("Registration Successful!");
  closeForm();
});
