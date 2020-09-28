getEvents();
renderDay();

function getEvents() {
    // Collect the day's events stored in localStorage as an array , or build an empty events array & save it to localStorage
    let storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents === null) { 
        storedEvents = ["", "", "", "", "", "", "", "", "" ,""];
        localStorage.setItem("events", JSON.stringify(storedEvents));
    }
}

function renderDay() {
    // Get the current time & style hour blocks as past,present, or future
    let now = moment();
    for (let i = 8; i <= 17; i++) {
        if (i < now.hour()){ $("#" + i).addClass("past"); }
        if (i == now.hour()){ $("#" + i).addClass("present"); }
        if (i > now.hour()){ $("#" + i).addClass("future"); }
    }

    // Add all events saved in local storage to the appropriate hour block
    let storedEvents = JSON.parse(localStorage.getItem("events"));
    for (let j = 8; j <= 17; j++) {
        $("#" + j).val(storedEvents[j-8]);
        console.log(j, storedEvents[j-8]);
    }
}

$(".saveBtn").on("click", function saveEvent() {
    // Style the save button they clicked
    $(this).addClass("fas");
    $(this).removeClass("far");
    // Save the corresponding textarea's value to localStorage in the correct place
    let buttonID = parseInt($(this).attr("button-id"));
    let saveText = $("#" + buttonID).val();
    let events = JSON.parse(localStorage.getItem("events"));
    events[buttonID-8] = event;
    // Save updated events object back to local storage
    localStorage.setItem("events", JSON.stringify(events));
});