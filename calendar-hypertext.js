
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var today  = new Date();
var month = months[today.getMonth()]; 
var year = today.getFullYear();
document.getElementById('title').textContent = month + " " + year;

function openWindow(mood)
{
    var displayMood = document.getElementById("displayMood");
    var fullWindow = document.getElementById("fullWindow");
    fullWindow.style.visibility = "visible";
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

  //initialize calendar
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
      droppable: true, // this allows things to be dropped onto the calendar
    });
    calendar.render();
    
    const okButton = document.getElementById("okButton");
    okButton.onclick = function() {
        var inputDate = document.getElementById("inputDate").value;
        if (inputDate == "")
        {
           alert("Please choose a date.");
        } else {
            var color = document.getElementById("moodCol").style.color;
            if (color == 'rgb(38, 70, 83)') { var currentMood = 'Miserable'}
            if (color == 'rgb(42, 157, 143)') { var currentMood = 'Sad'}
            if (color == 'rgb(233, 196, 106)') { var currentMood = 'Neutral'}
            if (color == 'rgb(244, 162, 97)') { var currentMood = 'Happy'}
            if (color == 'rgb(231, 111, 81)') { var currentMood = 'Ecstatic'}
            calendar.addEvent({
                title: currentMood,
                start: inputDate,
                allDay: true,
                color: color
        });
        var fullWindow = document.getElementById("fullWindow");
        fullWindow.style.visibility = "hidden";
        document.getElementById("inputDate").value = "";
        document.getElementById("textarea").value = "";
        } 
    };

    const cancelButton = document.getElementById("cancelButton");
    cancelButton.onclick = function() {
        var fullWindow = document.getElementById("fullWindow");
        fullWindow.style.visibility = "hidden";
        document.getElementById("inputDate").value = "";
        document.getElementById("textarea").value = "";
    };

  });

