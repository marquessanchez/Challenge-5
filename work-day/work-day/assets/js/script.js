$(".jumbotron").append(moment().format("LL"));


$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this)
        .siblings(".description")
        .val();

        var time = $(this)
        .parent()
        .attr("id");

        var text = function() {
            localStorage.setItem("text", JSON.stringify(text));
          }
        localStorage.setItem(time, text);
    })

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1.description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function() {
            var timeBlock = parseInt($this).attr("id").split("hour")[i]
        
            if (timeBlock < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("future");
                $(this).removeClass("future");
                $(this).addClass("future");
            }

        })
    }




























})
