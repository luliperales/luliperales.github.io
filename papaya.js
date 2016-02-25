var shown = false;

$("#container").click(function() {
    if (shown == false) {
    $(".papaya").show();
    $(".vagina").hide();
    shown = true;
    } else {
    $(".papaya").hide();
    $(".vagina").show();
    shown = false;
    }
});
