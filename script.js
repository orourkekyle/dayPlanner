// ready the html
$(document).ready(function() {

    // set moment var and log it
    var now = moment().format("LLLL")
    // location to put moment
    var showTime = $(".date-time");
    $(showTime).append("Today's Date and Time: ", now);


    // create interval to update seconds
    var update = setInterval(function() {
        var date = moment(new Date());
        $(showTime).text("Today's Date and Time: " + now);
        console.log(now);
    }, 1000)
    // call interval
    setInterval(update, 1000);

    // set var for how many time blocks in the day
    var timeBlockCount = [9,10,11,12,1,2,3,4,5];

    // var hour = moment().format("h");

    //create a function to create the planner
    function createPlanner(){
        // var containing planner div location
        var plannerLocation = $(".planner-container");

        for (var hour = 9; hour < 18; hour++) {
            // create row for col's
            var plannerRow = $("<div class=row id=planner>");
            // dynamic time col
            var timeCol = $("<div class='col-sm-1 text-center' id=time>")
            // dyanmic content col
            var contentCol = $("<input class='col-sm-10 text-center' id=content>")
            // dynamic save col
            var saveCol = $("<button class='col-sm-1 text-center' id=save>")
            // put row div in the planner div
            $(plannerLocation).append(plannerRow);
            // append col's to row 
            $(plannerRow).append(timeCol, contentCol, saveCol);
            // place holders for col's
            $(timeCol).text(hour);
            if (hour <= 12) {
                timeCol.text(hour + ":00 am");
            }
            else {
                timeCol.text(hour - 12 + ":00 pm");
            }
            // $(contentCol).text("This is where CONTENT goes.");
            $(saveCol).text("SAVE");
        }

    }

    // for (var i=0; i < timeBlockCount.length; i++){
    //     // $(timeCol).text(timeBlockCount.length());
    //     $("#time").addClass
        
    // }
    createPlanner();
    // save local function
    var saveButton = document.querySelector("#save");
    console.log(saveButton);

    var content = document.querySelector("#content");

    saveButton.addEventListener("click", function() {
        localStorage.setItem("content", $("#content").val());
    })
})