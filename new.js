$(document).ready(function () {
    console.log(1)
    $('.course__head').click(function () {
        var theme = $(this).attr('data-tab')
        if ($(window).width() > 768) {
            $('.course__content').hide()
            $('.course__content[data-tab='+theme+']').show()
        }
        else  {
            $('.course__desc[data-tab='+theme+']').slideToggle()
        }
        $('.course__head').removeClass('active')
        $(this).addClass('active')
    })
    $('.faq__head').click(function () {
        $(this).toggleClass('active')
        $(this).parent().find('.faq__content').slideToggle()
    })
})