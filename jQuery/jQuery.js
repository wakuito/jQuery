$(function(){
    $('.tab li').on('click', function(){

        $('.tab li').removeClass('select');

        $(this).addClass('select');

        $('.tabcontent li').addClass('hide');

        let index = $('.tab li').index($(this));

        $('.tabcontent li').eq(index).removeClass('hide');
    })
})

$(function(){
    $('#accordion dd').hide();
    $('#accordion dt').on('click', function(){
        $(this).next('dd').slideToggle();
    })
})