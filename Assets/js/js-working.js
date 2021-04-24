$(document).ready(function () {
    $('.saveBtn').on("click", function (event) {
        event.preventDefault();
        var index = parseInt(this.id.substring(7));
        saveOne(index);
    });
    var retrieveLocalStorage = getSchedule();
    var updateTestAreaColour = setInterval(updateTimeBlockColour, 1000);
})

// ---------- Set start/end time parameters for loop operation and create ARRAYS (NOTE: All arrays based on 24 hour period starting at 00:000:00 to simplify the indexing)
var startHour = 8;
var endHour = 18;
var timeBlockStart = ["00:00:00", "01:00:00", "02:00:00", "03:00:00", "04:00:00", "05:00:00", "06:00:00", "07:00:00", "08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00", "20:00:00", "21:00:00", "22:00:00", "23:00:00"];
var timeBlockText = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var keyid = ["WDS0", "WDS1", "WDS2", "WDS3", "WDS4", "WDS5", "WDS6", "WDS7", "WDS8", "WDS9", "WDS10", "WDS11", "WDS12", "WDS13", "WDS14", "WDS15", "WDS16", "WDS17", "WDS18", "WDS19", "WDS20", "WDS21", "WDS22", "WDS23"];
var textid = ["Text0", "Text1", "Text2", "Text3", "Text4", "Text5", "Text6", "Text7", "Text8", "Text9", "Text10", "Text11", "Text12", "Text13", "Text14", "Text15", "Text16", "Text17", "Text18", "Text19", "Text20", "Text21", "Text22", "Text23"];

// ---------- Function to save one element ONLY to local storage
function saveOne(index) {
    var i = index
    var tempData = document.getElementById(textid[i]).value;
    localStorage.setItem(keyid[i], JSON.stringify(tempData));
};
// ---------- Function to populate timeBlockText from local storage then display on HTML page textareas
function getSchedule() {
    for (i = startHour; i < endHour; i++) {
        timeBlockText[i] = JSON.parse(localStorage.getItem(keyid[i]));
        var e = $(`#${textid[i]}`);
        e.val(timeBlockText[i]);
    };
};
// ---------- Function to AUTOMATICALLY update "textarea" colour based on "currentTime"
function updateTimeBlockColour() {
    var currentDate = moment().format('dddd, Do MMMM YYYY - ');
    var currentTime = moment().format('HH:mm:ss');
    $('#currentDay').text(currentDate + currentTime);
    for (i = startHour; i < endHour; i++) {
        if (currentTime <= timeBlockStart[i]) {
            document.getElementById(textid[i]).setAttribute("class", "col-sm-10 future");
        } else if (currentTime >= timeBlockStart[i] && currentTime <= timeBlockStart[i + 1]) {
            document.getElementById(textid[i]).setAttribute("class", "col-sm-10 present");
            if (currentTime == timeBlockStart[i]) { location.reload(); }
        } else {
            document.getElementById(textid[i]).setAttribute("class", "col-sm-10 past");
        };
    };
};

