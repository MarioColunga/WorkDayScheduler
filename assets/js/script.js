
function dateTime() {
    var currentDateTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDateTime);
}

setInterval(dateTime, 1000);

var containerEl = $(".container");
containerEl.css({"display": "flex", "flex-wrap": "wrap"});

var hours = [
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM", 
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
    "12AM",

];

for (var i = 0; i < hours.length; i++) {
    var timeblock = $("<div>");
    timeblock.addClass("input-group time-block row");
    timeblock.attr("data-time", [i]);
    containerEl.append(timeblock);

    var time = $("<span>");
    time.addClass("description hour");
    time.text(hours[i]);
    time.css({"flex": "0 0 10%"});
    timeblock.append(time);

    var textArea = $("<textarea>");
    textArea.addClass("form-control");
    textArea.attr({"id": "text-" + hours[i], "aria-label": "With textarea"});
    textArea.css({"flex": "0 0 80%"});
    timeblock.append(textArea);

    var saveBtn = $("<button>");
    saveBtn.addClass("btn btn-info saveBtn");
    saveBtn.attr({"id": "btn-" + hours[i], "type": "button"});
    saveBtn.css({"flex": "0 0 10%"});
    timeblock.append(saveBtn);

    var btnIcon = $("<i>");
    btnIcon.addClass("fas fa-save");
    saveBtn.append(btnIcon);
}

var saveBtn1AM = $("#btn-1AM");
var text1AM = $("#text-1AM");

text1AM.val(localStorage.getItem("1AM"));

saveBtn1AM.on("click", function() {

    var newTask1AM = text1AM.val();

    localStorage.setItem("1AM", newTask1AM);
});

var saveBtn2AM = $("#btn-2AM");
var text2AM = $("#text-2AM");

text2AM.val(localStorage.getItem("2AM"));

saveBtn2AM.on("click", function() {

    var newTask2AM = text2AM.val();

    localStorage.setItem("2AM", newTask2AM);
});

var saveBtn3AM = $("#btn-3AM");
var text3AM = $("#text-3AM");

text3AM.val(localStorage.getItem("3AM"));

saveBtn3AM.on("click", function() {

    var newTask3AM = text3AM.val();

    localStorage.setItem("3AM", newTask3AM);
});

var saveBtn4AM = $("#btn-4AM");
var text4AM = $("#text-4AM");

text4AM.val(localStorage.getItem("4AM"));

saveBtn4AM.on("click", function() {

    var newTask4AM = text4AM.val();

    localStorage.setItem("4AM", newTask4AM);
});

var saveBtn5AM = $("#btn-5AM");
var text5AM = $("#text-5AM");

text5AM.val(localStorage.getItem("5AM"));

saveBtn5AM.on("click", function() {

    var newTask5AM = text5AM.val();

    localStorage.setItem("5AM", newTask5AM);
});

var saveBtn6AM = $("#btn-6AM");
var text6AM = $("#text-6AM");

text6AM.val(localStorage.getItem("6AM"));

saveBtn6AM.on("click", function() {

    var newTask6AM = text6AM.val();

    localStorage.setItem("6AM", newTask6AM);
});


var saveBtn7AM = $("#btn-7AM");
var text7AM = $("#text-7AM");

text7AM.val(localStorage.getItem("7AM"));

saveBtn7AM.on("click", function() {

    var newTask7AM = text7AM.val();

    localStorage.setItem("7AM", newTask7AM);
});


var saveBtn8AM = $("#btn-8AM");
var text8AM = $("#text-8AM");

text8AM.val(localStorage.getItem("8AM"));

saveBtn8AM.on("click", function() {

    var newTask8AM = text8AM.val();

    localStorage.setItem("8AM", newTask8AM);
});


var saveBtn9AM = $("#btn-9AM");
var text9AM = $("#text-9AM");

text9AM.val(localStorage.getItem("9AM"));

saveBtn9AM.on("click", function() {

    var newTask9AM = text9AM.val();

    localStorage.setItem("9AM", newTask9AM);
});

var saveBtn10AM = $("#btn-10AM");
var text10AM = $("#text-10AM");

text10AM.val(localStorage.getItem("10AM"));

saveBtn10AM.on("click", function() {

    var newTask10AM = text10AM.val();

    localStorage.setItem("10AM", newTask10AM);
});

var saveBtn11AM = $("#btn-11AM");
var text11AM = $("#text-11AM");

text11AM.val(localStorage.getItem("11AM"));

saveBtn11AM.on("click", function() {

    var newTask11AM = text11AM.val();

    localStorage.setItem("11AM", newTask11AM);
});

var saveBtn12PM = $("#btn-12PM");
var text12PM = $("#text-12PM");

text12PM.val(localStorage.getItem("12PM"));

saveBtn12PM.on("click", function() {

    var newTask12PM = text12PM.val();

    localStorage.setItem("12PM", newTask12PM);
});

var saveBtn1PM = $("#btn-1PM");
var text1PM = $("#text-1PM");

text1PM.val(localStorage.getItem("1PM"));

saveBtn1PM.on("click", function() {

    var newTask1PM = text1PM.val();

    localStorage.setItem("1PM", newTask1PM);
});

var saveBtn2PM = $("#btn-2PM");
var text2PM = $("#text-2PM");

text2PM.val(localStorage.getItem("2PM"));

saveBtn2PM.on("click", function() {

    var newTask2PM = text2PM.val();

    localStorage.setItem("2PM", newTask2PM);
});

var saveBtn3PM = $("#btn-3PM");
var text3PM = $("#text-3PM");

text3PM.val(localStorage.getItem("3PM"));

saveBtn3PM.on("click", function() {

    var newTask3PM = text3PM.val();

    localStorage.setItem("3PM", newTask3PM);
});

var saveBtn4PM = $("#btn-4PM");
var text4PM = $("#text-4PM");

text4PM.val(localStorage.getItem("4PM"));

saveBtn4PM.on("click", function() {

    var newTask4PM = text4PM.val();

    localStorage.setItem("4PM", newTask4PM);
});

var saveBtn5PM = $("#btn-5PM");
var text5PM = $("#text-5PM");

text5PM.val(localStorage.getItem("5PM"));

saveBtn5PM.on("click", function() {

    var newTask5PM = text5PM.val();

    localStorage.setItem("5PM", newTask5PM);
});

var saveBtn6PM = $("#btn-6PM");
var text6PM = $("#text-6PM");

text6PM.val(localStorage.getItem("6PM"));

saveBtn6PM.on("click", function() {

    var newTask6PM = text6PM.val();

    localStorage.setItem("6PM", newTask6PM);
});
var saveBtn7PM = $("#btn-7PM");
var text7PM = $("#text-7PM");

text7PM.val(localStorage.getItem("7PM"));

saveBtn7PM.on("click", function() {

    var newTask7PM = text7PM.val();

    localStorage.setItem("7PM", newTask7PM);
});
var saveBtn8PM = $("#btn-8PM");
var text8PM = $("#text-8PM");

text8PM.val(localStorage.getItem("8PM"));

saveBtn8PM.on("click", function() {

    var newTask8PM = text8PM.val();

    localStorage.setItem("8PM", newTask8PM);
});
var saveBtn9PM = $("#btn-9PM");
var text9PM = $("#text-9PM");

text9PM.val(localStorage.getItem("9PM"));

saveBtn9PM.on("click", function() {

    var newTask9PM = text9PM.val();

    localStorage.setItem("9PM", newTask9PM);
});
var saveBtn10PM = $("#btn-10PM");
var text10PM = $("#text-10PM");

text10PM.val(localStorage.getItem("10PM"));

saveBtn10PM.on("click", function() {

    var newTask10PM = text10PM.val();

    localStorage.setItem("10PM", newTask10PM);
});
var saveBtn11PM = $("#btn-11PM");
var text11PM = $("#text-11PM");

text11PM.val(localStorage.getItem("11PM"));

saveBtn11PM.on("click", function() {

    var newTask11PM = text11PM.val();

    localStorage.setItem("11PM", newTask11PM);
});

var saveBtn12AM = $("#btn-12AM");
var text12AM = $("#text-12AM");

text12AM.val(localStorage.getItem("12AM"));

saveBtn12AM.on("click", function() {

    var newTask12AM = text12AM.val();

    localStorage.setItem("12AM", newTask12AM);
});


    var timesArr = [
        "01:00:00 am",
        "02:00:00 am",
        "03:00:00 am",
        "04:00:00 am",
        "05:00:00 am",
        "06:00:00 am",
        "07:00:00 am",
        "08:00:00 am",
        "09:00:00 am",
        "10:00:00 am",
        "11:00:00 am",
        "12:00:00 pm",
        "01:00:00 pm",
        "02:00:00 pm",
        "03:00:00 pm",
        "04:00:00 pm",
        "05:00:00 pm",
        "06:00:00 pm",
        "07:00:00 pm",
        "08:00:00 pm",
        "09:00:00 pm",
        "10:00:00 pm",
        "11:00:00 pm",
        "12:00:00 am"

    ];

    for (var i = 0; i < timesArr.length; i++) {
        var currentTime = moment();
        var times = moment(timesArr[i], "hh:mm:ss a");
        var text = $("#text-" + hours[i]);

        if (currentTime.isAfter(times)) {
            text.addClass("past");
        } if ((currentTime.isSameOrAfter(times)) && (currentTime.isBefore(moment(timesArr[i + 1], "hh:mm:ss a")))) {
            text.addClass("present");
        } if (currentTime.isBefore(times)) {
            text.addClass("future");
        }
    };