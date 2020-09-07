$('article:nth-child(2n)').addClass('left-aligned')
$('.timeline-label').addClass('shadow');
$('.timeline-label').hover(function () {
    $(this).addClass('shadow-lg');
    $(this).removeClass('shadow');
    }, function () {
        $('.timeline-label').addClass('shadow');
        $('.timeline-label').removeClass('shadow-lg');
    }
);