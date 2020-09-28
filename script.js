
renderDay(getEvents());

function getEvents() {
    // Collect the day's events stored in localStorage as an array , or build an empty events array & save it to localStorage
    let storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents === null) { 
    storedEvents = {8: "8am dummy text", 9: "9am dummy text", 10: "10am dummy text", 11: "11am dummy text", 12: "12p dummy text", 13: "1pm dummy text", 14: "2pm dummy text", 15: "3pm dummy text", 16: "4pm dummy text", 17: "5pm dummy text"};
    localStorage.setItem("events", JSON.stringify(storedEvents));
    }
    return localStorage.getItem("events");
}

function renderDay(storedEvents) {
    // Get the current time & style hour blocks as past,present, or future
    let now = moment();
    for (let i = 8; i <= 17; i++) {
        if (i < now.hour()){ $("#" + i).addClass("past"); }
        if (i == now.hour()){ $("#" + i).addClass("present"); }
        if (i > now.hour()){ $("#" + i).addClass("future"); }
    }

    // Add all events saved in local storage to the appropriate hour block
    for (let j = 8; j <= 17; j++) {
        $("#" + j).val(storedEvents.j);
        console.log(storedEvents.j);
    }
}

function saveEvent() {
    // Style the save button they clicked
    $(this).addClass("fas");
    $(this).removeClass("far");
    // Add textarea value to save
    let saveText = $(this).value;
    let events = getEvents();
    let thisID = $(this).id;
    events.thisID = saveText;
    // Save updated events object back to local storage
    localStorage.setItem("events", JSON.stringify(events));
}

$(".saveBtn").on("click", saveEvent);