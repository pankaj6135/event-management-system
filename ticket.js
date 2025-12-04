function issueTicket(index) {
  let users = JSON.parse(localStorage.getItem("eventUsers")) || [];

  let ticketId = "TICKET-" + Math.floor(Math.random() * 99999);
  users[index].ticket = ticketId;

  localStorage.setItem("eventUsers", JSON.stringify(users));

  generateTicket(users[index]);
  alert("Ticket Issued Successfully!");
  location.reload();
}

function generateTicket(user) {
  let ticketWindow = window.open("", "_blank");

  ticketWindow.document.write(`
    <html>
    <head>
      <title>Event Ticket</title>
      <style>
        .ticket {
          width: 350px;
          padding: 20px;
          border-radius: 12px;
          border: 2px solid #2d3250;
          font-family: Arial;
        }
        h2 { text-align:center; }
        .qr { text-align:center; margin-top:10px; }
      </style>
    </head>
    <body>
      <div class="ticket">
        <h2>🎫 Event Ticket</h2>
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Event:</b> ${user.event}</p>
        <p><b>Ticket ID:</b> ${user.ticket}</p>
        <div class="qr" id="qrcode"></div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
      <script>
        new QRCode(document.getElementById("qrcode"), "${user.ticket}");
      </script>
    </body>
    </html>
  `);
}
