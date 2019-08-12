function openNav() {
    $("#navbar").css("width", "400px");
    $(".nav-content").show();
    $("#nav-close").css("visibility", "visible");
    $("#nav-open").css("visibility", "hidden");
    $(".main").css("margin-left", "425px");
}

function closeNav() {
    $("#navbar").css("width", "75px");
    $(".nav-content").hide();
    $("#nav-close").css("visibility", "hidden");
    $("#nav-open").css("visibility", "visible");
    $(".main").css("margin-left", "80px");
}