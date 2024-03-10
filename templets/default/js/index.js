$(function(){
    //login 

   

    (function(){
        
        var flag = true;
        $("#logo").on('click',function(){
            if(flag){
                $(this).css("transform","rotate(90deg)")
                $(".left-side").animate({"left":-150});
                $(".right-side,.footer").animate({"margin-left":0});
            }else{
                $(this).css("transform","rotate(0deg)");
                $(".left-side").animate({"left":0});
                $(".right-side,.footer").animate({"margin-left":150});
            }
            flag = !flag;
        })
    })();
    //轮播图
    var swiper = new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
        
      
        // 如果需要滚动条
        scrollbar: {
        el: '.swiper-scrollbar',
        }
    });
     //.backToTop
    (function(){

        //监听屏幕的滚动高度
        $(window).on('scroll',function(){
         
            if( $('body,html').scrollTop()>=500){
                $('.left-warp').show();
            }else{
                $('.left-warp').hide();
            }
        }) 
        //返回顶部
        $('.backToTop').on('click',function(){
            $('body,html').animate({scrollTop:0})
        });
        // $('.backToTop').mouseenter(function(){
        //     $('.txt').animate({
        //         "right":"0px",
        //         "opacity":1
        //     }).mouseleave(function(){
        //         $('.txt').animate({
        //             "right":"-150px",
        //             "opacity":0
        //         })
        //     })
        // })

    })();
    //scroll定位
    var intro = $('.intro-wrap').offset().top;
    var make = $('.make-wrap').offset().top;
    var art = $('.art-warp').offset().top;
    var news = $('.new-warp').offset().top;
    var arr = [intro,make,art,news];
    $('#scroll>li').each(function(index,ele){
            $(ele).on("click",function(){
                $('body,html').animate({
                    scrollTop:(arr[index]-50)
                });
            })
    });
    //手风琴
    $('.art-item').mouseenter(function(){
        $(this).stop().animate({width:"40%"}).siblings().stop().animate({width:"15%"})
    }).mouseleave(function(){
        $('.art-item').stop().animate({width:"20%"})
    });
    //animate
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
    wow.init();
   
    //新闻
    (function(){
        console.log('ok');
        $("#new li").mouseenter(function(){
            $(this).css({
                "border-left":"5px solid #008b5f",
                "color":"#008b5f"
            }).siblings().css({
                "border-left":"0px",
                "color":"#000"
            })

            $('.news').eq($(this).index()).show().siblings().hide()
        })
    })()
})