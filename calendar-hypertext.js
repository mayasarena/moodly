// setting the month and year in the title by grabbing current month & year
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var today  = new Date();
var month = months[today.getMonth()]; 
var year = today.getFullYear();
document.getElementById('title').textContent = month + " " + year;

// open the "add new entry" window if the user clicks on a mood
function openWindow(mood)
{
    var displayMood = document.getElementById("displayMood");
    var fullWindow = document.getElementById("fullWindow");
    // make the window div visible
    fullWindow.style.visibility = "visible";
    // checking which mood was clicked and inserting the correct icon onto the page
    if (mood == 1) {
      displayMood.innerHTML = '<i class="fas fa-sad-cry fa-5x" style="color: #264653" id="moodCol"></i>';
    }
    if (mood == 2) {
      displayMood.innerHTML = '<i class="fas fa-frown fa-5x" style="color: #2a9d8f" id="moodCol"></i>';
    }
    if (mood == 3) {
      displayMood.innerHTML = '<i class="fas fa-meh fa-5x" style="color: #e9c46a" id="moodCol"></i>';
    }
    if (mood == 4) {
      displayMood.innerHTML = '<i class="fas fa-smile fa-5x" style="color: #f4a261" id="moodCol"></i>';
    }
    if (mood == 5) {
      displayMood.innerHTML = '<i class="fas fa-laugh-beam fa-5x" style="color: #e76f51" id="moodCol"></i>';
    }
}
     
document.addEventListener('DOMContentLoaded', function() {

// initialize the calendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: null,
      center: null,
      right: null
    },
    timeZone: 'UTC',
    themeSystem: 'bootstrap',
    eventBackgroundColor: 'white',
    eventBorderColor: 'white',
    eventTextColor: 'black',
    editable: false,
    droppable: false, 
  });
  calendar.render();
  
  // function for the ok button on the "add new entry" page
  const okButton = document.getElementById("okButton");
  okButton.onclick = function() {
      // grab the date that the user inputted
      var inputDate = document.getElementById("inputDate").value;
      if (inputDate == "") // if no date was chosen, alert user
      {
          alert("Please choose a date.");
      } else { 
          // otherwise, add the mood to the calendar
          // checking which mood was chosen based on the color of the icon
          var color = document.getElementById("moodCol").style.color;
          if (color == 'rgb(38, 70, 83)') { var currentMood = 'Miserable'}
          if (color == 'rgb(42, 157, 143)') { var currentMood = 'Sad'}
          if (color == 'rgb(233, 196, 106)') { var currentMood = 'Neutral'}
          if (color == 'rgb(244, 162, 97)') { var currentMood = 'Happy'}
          if (color == 'rgb(231, 111, 81)') { var currentMood = 'Ecstatic'}
          // add event to calendar
          calendar.addEvent({
              title: currentMood,
              start: inputDate,
              allDay: true,
              color: color
      });
      // hide the "add new entry" window
      var fullWindow = document.getElementById("fullWindow");
      fullWindow.style.visibility = "hidden";
      document.getElementById("inputDate").value = ""; 
      document.getElementById("textarea").value = "";
      } 
  };

  // function for if user clicks cancel button, which closes the window
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.onclick = function() {
      var fullWindow = document.getElementById("fullWindow");
      fullWindow.style.visibility = "hidden";
      document.getElementById("inputDate").value = "";
      document.getElementById("textarea").value = "";
  };

});

