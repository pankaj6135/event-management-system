function loadUsers() {
  if (localStorage.getItem("adminLogged") !== "true") {
    window.location.href = "admin-login.html";
  }

  let users = JSON.parse(localStorage.getItem("eventUsers")) || [];
  let table = document.getElementById("userTable");

  table.innerHTML = "";

  users.forEach((u, i) => {
    table.innerHTML += `
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.event}</td>
        <td>${u.ticket ? u.ticket : "Not Issued"}</td>
        <td><button class="btn" onclick="issueTicket(${i})">Issue Ticket</button></td>
      </tr>`;
  });
}

function logoutAdmin() {
  localStorage.removeItem("adminLogged");
  window.location.href = "admin-login.html";
}
