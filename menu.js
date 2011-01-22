/* Adds delay on hiding submenu of header */
// Use closure to avoid globals
(function () {
var HIDE_TIMEOUT = 500,   // hide timeout, in milliseconds
    SHOW_TIMEOUT = 300,   // show timeout, in milliseconds
    SHOWING = 'sfhover',  // CSS class for showing submenu
    $showing = null,      // reference to last parent showing its submenu
    h_timeout = null,     // reference to hide event from setTimeout
    s_timeout = null;     // reference to show event from setTimeout

    $('#nav-main > ul > li').mouseover(function () {
        var on_menu = (null !== $showing);
        // Ensures only one submenu displays
        if (on_menu) {
            $showing.removeClass(SHOWING);
            $showing = null;
            clearTimeout(h_timeout);
            clearTimeout(s_timeout);
        }
        $showing = $(this);
        // If already on menu, show right away. Else, show with delay. Rhyme!
        if (on_menu) {
            $showing.addClass(SHOWING);
        } else {
            s_timeout = setTimeout(function () {
                $showing.addClass(SHOWING);
            }, SHOW_TIMEOUT);
        }
    }).mouseout(function () {
        // We're outta here, don't show anything that's been queued.
        clearTimeout(s_timeout);
        $showing = $(this);
        // Hide submenu HIDE_TIMEOUT ms
        h_timeout = setTimeout(function () {
            $showing.removeClass(SHOWING);
            $showing = null;
        }, HIDE_TIMEOUT);
    });
}());
