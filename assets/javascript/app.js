$(document).ready(function(event){


    var started = moment("11-29-2015", "MM-DD-YYYY");

    var devYears = moment().diff(started, 'years');
    $("#years").text(devYears);
    $("#current-year").text(moment().format('YYYY'))
    
});
