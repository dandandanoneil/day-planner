function renderDay() {
    // Get the current time & style hour blocks as past, present, or future
    let now = moment();
    for (let i = 8; i < 17; i++) {
        if (i < now.hour()){ $("#" + i).addClass("past"); }
        if (i == now.hour()){ $("#" + i).addClass("present"); }
        if (i > now.hour()){ $("#" + i).addClass("future"); }
    }

}

renderDay();