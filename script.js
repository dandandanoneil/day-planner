// Collect the day's events stored in localStorage as an array , or build an empty events array & save it to localStorage
let storedEvents = JSON.parse(localStorage.getItem("events"));
if (storedEvents === null) { 
    storedEvents = ["", "", "", "", "", "", "", "", "" ,""];
    localStorage.setItem("events", JSON.stringify(storedEvents));
}

renderDay();

function renderDay() {
    // Get the current time & style hour blocks as past,present, or future
    let now = moment();
    for (let i = 8; i <= 17; i++) {
        if (i < now.hour()){ $("#" + i).addClass("past"); }
        if (i == now.hour()){ $("#" + i).addClass("present"); }
        if (i > now.hour()){ $("#" + i).addClass("future"); }
    }

    // Add all events saved in local storage to the appropriate hour block
    // storedEvents = JSON.parse(localStorage.getItem("events"));
    for (let j = 8; j <= 17; j++) {
        let savedEvent = storedEvents[j-8]
        $("#" + j).val(savedEvent);
        // If there's an event saved, toggle the 'save' button to show that what's being shown is recorded in localStorage
        if (savedEvent != "") {
            let buttonIcon = $("#" + j).next().children();
            buttonIcon.removeClass("far");
            buttonIcon.addClass("fas");        
        }
    }
}

$(".saveBtn").click(function() {
    // Style the save button they clicked
    $(this.children).removeClass("far");
    $(this.children).addClass("fas");
    // Save the corresponding textarea's value to localStorage in the correct place
    let buttonID = parseInt($(this).attr("button-id"));
    let saveText = $("#" + buttonID).val();
    storedEvents[buttonID - 8] = saveText;
    // Save updated events object back to local storage
    localStorage.setItem("events", JSON.stringify(storedEvents));
});

$(".description").bind('input propertychange', function() {
    let currentText = $(this).val();
    let thisID = parseInt($(this).attr("id"));
    // If the current text content of the textarea is not what's saved, toggle the corresponding save button to it's unsaved style to remind the user to save their changes
    if (currentText != storedEvents[thisID - 8]) {
        let buttonIcon = $("#" + thisID).next().children();
        $(buttonIcon).removeClass("fas");
        $(buttonIcon).addClass("far");
    }
});