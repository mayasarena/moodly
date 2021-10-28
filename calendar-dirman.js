
// setting the month and year in the title by grabbing current month & year
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var today  = new Date();
var month = months[today.getMonth()]; 
var year = today.getFullYear();
document.getElementById('title').textContent = month + " " + year;

document.addEventListener('DOMContentLoaded', function() {

  // initializing moods (external events)
  var containerEl = document.getElementById('external-events-list');
  new FullCalendar.Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText,
        color: eventEl.style.color
      }
    }
  });

  // initializing fullcalendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: null,
      center: null,
      right: null
    },
    timeZone: 'UTC',
    themeSystem: 'bootstrap',
    eventBorderColor: 'white',
    eventTextColor: 'black',
    editable: false,
    droppable: true, 
    // when the mood is dropped, popup window is triggered
    eventReceive: function(addInfo) {
      currentEvent = addInfo.event;
      // getting the date that the user dropped the mood onto
      var eventDate = currentEvent.start.getUTCDate();
      var eventMonth = currentEvent.start.getUTCMonth();
      var eventYear = currentEvent.start.getUTCFullYear();
      var dateText = document.getElementById("dateText");
      var popup = document.getElementById("popup");
      if (eventMonth == 0){eventMonthString = 'January'}
      if (eventMonth == 1){eventMonthString = 'February'}
      if (eventMonth == 2){eventMonthString = 'March'}
      if (eventMonth == 3){eventMonthString = 'April'}
      if (eventMonth == 4){eventMonthString = 'May'}
      if (eventMonth == 5){eventMonthString = 'June'}
      if (eventMonth == 6){eventMonthString = 'July'}
      if (eventMonth == 7){eventMonthString = 'August'}
      if (eventMonth == 8){eventMonthString = 'September'}
      if (eventMonth == 9){eventMonthString = 'October'}
      if (eventMonth == 10){eventMonthString = 'November'}
      if (eventMonth == 11){eventMonthString = 'December'}
      // getting mood that user dropped
      var eventMood = currentEvent.title;
      var moodDiv = document.getElementById("moodDiv");
      // setting the correct icon in the popup
      if (eventMood == ' Miserable') { moodDiv.innerHTML = '<i class="fas fa-sad-cry fa-5x" style="color: #264653"></i>'}
      if (eventMood == ' Sad') { moodDiv.innerHTML = '<i class="fas fa-frown fa-5x" style="color: #2a9d8f"></i>'}
      if (eventMood == ' Neutral') { moodDiv.innerHTML = '<i class="fas fa-meh fa-5x" style="color: #e9c46a"></i>'}
      if (eventMood == ' Happy') { moodDiv.innerHTML = '<i class="fas fa-smile fa-5x" style="color: #f4a261"></i>'}
      if (eventMood == ' Ecstatic') { moodDiv.innerHTML = '<i class="fas fa-laugh-beam fa-5x" style="color: #e76f51"></i>'}
      popup.style.visibility = "visible"; // make the popup visible
      dateText.innerHTML = eventMonthString + " " + eventDate.toString() + ", " + eventYear.toString(); // update popup date
    }
  });
  calendar.render();
  
  // ok button closes the popup window
  const okButton = document.getElementById("okButton");
  okButton.onclick = function() {
    var popup = document.getElementById("popup");
    document.getElementById("textarea").value = ""; // empty the notes textarea
    popup.style.visibility = "hidden";
  };
});

