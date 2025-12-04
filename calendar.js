document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('eventCalendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      { title: "Tech Fest 2025", date: "2025-01-25" },
      { title: "Robotics Workshop", date: "2025-01-27" },
      { title: "Sports Meet", date: "2025-01-30" }
    ]
  });

  calendar.render();
});
