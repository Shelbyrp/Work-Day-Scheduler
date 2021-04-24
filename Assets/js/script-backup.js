//Add current date & time at the top of the planner 
var currentDate = moment().format('dddd Do MMMM, ');
var currentTime = moment().format('HH:mm');
$('#currentDay').text(currentDate + currentTime);
//--------------------------------------------------------
var timeBlock1 = "09:00";
var timeBlock2 = "10:00";
var timeBlock3 = "11:00";
var timeBlock4 = "12:00";
var timeBlock5 = "13:00";
var timeBlock6 = "14:00";
var timeBlock7 = "15:00";
var timeBlock8 = "16:00";
var timeBlock9 = "17:00";
var timeBlock10 = "18:00";
// Sets the time for 9am timeblock
if (currentTime <= timeBlock1) {
    $("#myText09").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock2) {
    $("#myText09").addClass("col-sm-10 present");
} else {
    $("#myText09").addClass("col-sm-10 past");
}
// Sets the time for 10am timeblock
if (currentTime <= timeBlock2) {
    $("#myText10").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock3) {
    $("#myText10").addClass("col-sm-10 present");
} else {
    $("#myText10").addClass("col-sm-10 past");
}
// Sets the time for 11am timeblock
if (currentTime <= timeBlock3) {
    $("#myText11").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock4) {
    $("#myText11").addClass("col-sm-10 present");
} else {
    $("#myText11").addClass("col-sm-10 past");
}
// Sets the time for 12pm timeblock
if (currentTime <= timeBlock4) {
    $("#myText12").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock5) {
    $("#myText12").addClass("col-sm-10 present");
} else {
    $("#myText12").addClass("col-sm-10 past");
}
// Sets the time for 1pm timeblock
if (currentTime <= timeBlock5) {
    $("#myText13").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock6) {
    $("#myText13").addClass("col-sm-10 present");
} else {
    $("#myText13").addClass("col-sm-10 past");
}
// Sets the time for 2pm timeblock
if (currentTime <= timeBlock6) {
    $("#myText14").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock7) {
    $("#myText14").addClass("col-sm-10 present");
} else {
    $("#myText14").addClass("col-sm-10 past");
}
// Sets the time for 3pm timeblock
if (currentTime <= timeBlock7) {
    $("#myText15").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock8) {
    $("#myText15").addClass("col-sm-10 present");
} else {
    $("#myText15").addClass("col-sm-10 past");
}
// Sets the time for 4pm timeblock
if (currentTime <= timeBlock8) {
    $("#myText16").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock9) {
    $("#myText16").addClass("col-sm-10 present");
} else {
    $("#myText16").addClass("col-sm-10 past");
}
// Sets the time for 5pm timeblock
if (currentTime <= timeBlock9) {
    $("#myText17").addClass("col-sm-10 future");
} else if (currentTime <= timeBlock10) {
    $("#myText17").addClass("col-sm-10 present");
} else {
    $("#myText17").addClass("col-sm-10 past");
}

//--------------------------------------------------------
// Assign VALUES and allocate to SCHEDULE array
var timeBlockText1 = " "; var timeBlockText2 = " "; var timeBlockText3 = " "; var timeBlockText4 = " "; var timeBlockText5 = " "; var timeBlockText6 = " "; var timeBlockText7 = " "; var timeBlockText8 = " "; var timeBlockText9 = " ";
var schedule = { key1: timeBlockText1, key2: timeBlockText2, key3: timeBlockText3, key4: timeBlockText4, key5: timeBlockText5, key6: timeBlockText6, key7: timeBlockText7, key8: timeBlockText8, key9: timeBlockText9 };
// getItems using individual schedule keys
timeBlockText1 = JSON.parse(localStorage.getItem("key1"));
timeBlockText2 = JSON.parse(localStorage.getItem("key2"));
timeBlockText3 = JSON.parse(localStorage.getItem("key3"));
timeBlockText4 = JSON.parse(localStorage.getItem("key4"));
timeBlockText5 = JSON.parse(localStorage.getItem("key5"));
timeBlockText6 = JSON.parse(localStorage.getItem("key6"));
timeBlockText7 = JSON.parse(localStorage.getItem("key7"));
timeBlockText8 = JSON.parse(localStorage.getItem("key8"));
timeBlockText9 = JSON.parse(localStorage.getItem("key9"));
// display values in work day schedule
document.getElementById("myText09").innerHTML = timeBlockText1;
document.getElementById("myText10").innerHTML = timeBlockText2;
document.getElementById("myText11").innerHTML = timeBlockText3;
document.getElementById("myText12").innerHTML = timeBlockText4;
document.getElementById("myText13").innerHTML = timeBlockText5;
document.getElementById("myText14").innerHTML = timeBlockText6;
document.getElementById("myText15").innerHTML = timeBlockText7;
document.getElementById("myText16").innerHTML = timeBlockText8;
document.getElementById("myText17").innerHTML = timeBlockText9;
//--------------------------------------------------------
function myFunction09() {
    var data9 = document.getElementById("myText09").value;
    document.getElementById("myText09").innerHTML = data9;
    localStorage.setItem("key1", JSON.stringify(data9));
}
function myFunction10() {
    var data10 = document.getElementById("myText10").value;
    document.getElementById("myText10").innerHTML = data10;
    localStorage.setItem("key2", JSON.stringify(data10));
}
function myFunction11() {
    var data11 = document.getElementById("myText11").value;
    document.getElementById("myText11").innerHTML = data11;
    localStorage.setItem("key3", JSON.stringify(data11));
}
function myFunction12() {
    var data12 = document.getElementById("myText12").value;
    document.getElementById("myText12").innerHTML = data12;
    localStorage.setItem("key4", JSON.stringify(data12));
}
function myFunction13() {
    var data13 = document.getElementById("myText13").value;
    document.getElementById("myText13").innerHTML = data13;
    localStorage.setItem("key5", JSON.stringify(data13));
}
function myFunction14() {
    var data14 = document.getElementById("myText14").value;
    document.getElementById("myText14").innerHTML = data14;
    localStorage.setItem("key6", JSON.stringify(data14));
}
function myFunction15() {
    var data15 = document.getElementById("myText15").value;
    document.getElementById("myText15").innerHTML = data15;
    localStorage.setItem("key7", JSON.stringify(data15));
}
function myFunction16() {
    var data16 = document.getElementById("myText16").value;
    document.getElementById("myText16").innerHTML = data16;
    localStorage.setItem("key8", JSON.stringify(data16));
}
function myFunction17() {
    var data17 = document.getElementById("myText17").value;
    document.getElementById("myText17").innerHTML = data17;
    localStorage.setItem("key9", JSON.stringify(data17));
}
//--------------------------------------------------------
// Event listener to move to index page
saveBtn09.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction09();
});
saveBtn10.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction10();
});
saveBtn11.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction11();
});
saveBtn12.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction12();
});
saveBtn13.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction13();
});
saveBtn14.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction14();
});
saveBtn15.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction15();
});
saveBtn16.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction16();
});
saveBtn17.addEventListener("click", function (event) {
    event.preventDefault();
    myFunction17();
});
//--------------------------------------------------------
