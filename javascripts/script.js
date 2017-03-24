$(document).ready(function() {
    $('.contactMe').mouseenter(function() {
        $('.contactMe').fadeTo('fast',0.5);
    });
    $('.contactMe').mouseleave(function() {
        $('.contactMe').fadeTo('fast',1);
    });
});
