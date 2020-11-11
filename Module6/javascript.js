    $("#button1").on("click", function() {
        $("#box").animate({
        height:"+=50px", 
        width:"+=50px"}, 
        "fast");
    });
    
    $("#button2").on("click", function() {
        $("#box").animate().css({
        backgroundColor: "blue"
    });
    
    });
    
    $("#button3").on("click", function() {
        $("#box").fadeOut();
    
    });
    
    $("#button4").on("click", function() {
        $("#box").fadeIn("fast").animate({
        height: "150px", 
        width: "150px"}, 
        "fast").css({
            backgroundColor: "orange"
        });

        $("#button5").on("click", function() {
            $("#box").animate().css({
            backgroundColor: "green"
        });
    })
});