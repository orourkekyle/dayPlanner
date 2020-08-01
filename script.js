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
    var timeBlockCount = 9;

    //create a function to create the planner
    function createPlanner(){
        // var containing planner div location
        var plannerLocation = $(".planner-container");
        // create row for col's
        var plannerRow = $("<div class=row>");
        // dynamic time col
        var timeCol = $("<div class='col-sm-1 text-center' id=time>")
        // dyanmic content col
        var contentCol = $("<div class='col-sm-10 text-center' id=content>")
        // dynamic save col
        var saveCol = $("<div class='col-sm-1 text-center' id=save>")
        // put row div in the planner div
        $(plannerLocation).append(plannerRow);
        // append col's to row 
        $(plannerRow).append(timeCol, contentCol, saveCol);
        // place holders for col's
        $(timeCol).text("This is where TIME goes.");
        $(contentCol).text("This is where CONTENT goes.");
        $(saveCol).text("This is where SAVE goes.");
    }
    for (var i=0; i < timeBlockCount; i++){
        // $(timeCol).append().moment().hour();
        createPlanner();
    }

    // figure out how to give each time col an hour value

})


