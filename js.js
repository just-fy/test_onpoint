$(function() {
    $('a').on('click', function(e) {
        e.preventDefault();
        $('html, body').delay(200).animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
    });
});