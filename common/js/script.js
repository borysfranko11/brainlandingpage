$(document).ready(function() {

    function initalize()
    {
        var width = $('.brain-design .main-brain')[0].getBoundingClientRect().width;
        var height = $('.brain-design .main-brain')[0].getBoundingClientRect().height;
        console.log('w='+width);
        console.log('h='+height);
        $('.hover-layers').css('width',width).css('height',height-6);
        $('.quarant-part').css('height',height/2);

        var mask_rect_width = $('.mask-svg .mask-rect')[0].getBoundingClientRect().width;
        var brain_width  = $('.brain-design').width();
        
        $('.hidebg-left').css('width',(brain_width - width )/2);
        $('.hidebg-right').css('width',(brain_width - width)/2);

    }
    
    $('.side-menu').click(function(e){
        $(".side-bar-manu").css({ 'right' : '0' });
    });
    $('.close-bar').click(function(e){
        $(".side-bar-manu").css({ 'right' : '-210px' });
    });

    function Play(number) {
        if (number==1 || number==2)  {
            if ($(window).width()>767)
                $('.active-text'+number).css('opacity',1).css('left','-50px');           
            else
                $('.active-text'+number).css('opacity',1).css('left','-10px');           
        }
        if (number==3 || number==4)  {
            if ($(window).width()>767)
                $('.active-text'+number).css('opacity',1).css('right','-50px');       
            else
                $('.active-text'+number).css('opacity',1).css('right','-10px');       
        }
        $('.video'+number).find('video').css('opacity',1);
        var video = $('.video'+number).find('video')[0];
        video.play();
        $('.mask-div .hover-layers').find('.quarant-part').each(function(){
            if ($(this).attr('data-id') != number ) {
                $(this).css('background','white').css('z-index',1);
            }
        });

    }

    function Pause(number) {
        if (number==1 || number==2) {
            $('.active-text'+number).css('opacity',0).css('left','0px');
        }
        if (number==3 || number==4) {
            $('.active-text'+number).css('opacity',0).css('right','0px');
        }
        $('.video'+number).find('video').css('opacity',0);
        var video = $('.video'+number).find('video')[0];
        video.pause();
        $('.mask-div .hover-layers').find('.quarant-part').each(function(){
            if ($(this).attr('data-id') != number ) {
                $(this).css('background','white').css('z-index',-1);
            }
        })
    }

    initalize();

    $('.quarant-part').hover(function(){
        var selected_part_id = $(this).attr('data-id');
        Play(selected_part_id);
    },function(){
        var selected_part_id = $(this).attr('data-id');
        Pause(selected_part_id);
    })

    $(window).on('resize', function(){
        initalize();
  });
})