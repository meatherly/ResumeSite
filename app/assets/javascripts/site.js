    $(document).ready(function() {
    var $navbar   = $("#navbar"),
        $window    = $(window),
        offset     = $navbar.offset(),
        topPadding = 50;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $navbar.addClass('fixed');
        } else {
            $navbar.removeClass('fixed');
        }
    });


    });