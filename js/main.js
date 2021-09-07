$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto:true,
        slideEndAnimation: true,
        pause: 3000,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    })
});
