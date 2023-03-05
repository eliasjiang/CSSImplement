$(function () {  
    let flag = true;
    let toolTop = $('.recommend').offset().top;
    toggleTool();
    function toggleTool(){
        if($(document).scrollTop() >= toolTop){
            $('.fixedtool').fadeIn();
        }else{
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function () {  
        toggleTool();
        if(flag){
            $('.floor .w').each(function (i,ele) {  
                if($(document).scrollTop()>=$(ele).offset().top){
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
        

    });

    $('.fixedtool li ').click(function(){
        let current = $('.floor .w').eq($(this).index()).offset().top;
        flag = false;
        $('body,html').stop().animate({
            scrollTop: current

        },function () {
            flag = true;
          });

        $(this).addClass('current').siblings().removeClass();
    })
})