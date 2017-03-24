$(jquery).ready(function() {
    $('clickme').mouseenter(function() {
        $('clickme').fadeTo('fast',1);
    });
    $('clickme').mouseleave(function() {
        $('clickme').fadeTo('fast',0.5);
    });
});
