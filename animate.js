$(document).ready(function () {
    var auto=setInterval(function(){
        $('#next').trigger('click');
    },3000);
    $('#next').click(function (event) { 
        
        var slide_sau=$('.active').next();
        // console.log(slide_sau.length);
        var vi_tri_hien_tai=$('.active_nut').index()+1;
        if(slide_sau.length!=0)
        {
            $('.active').addClass('truot-sang-trai').one('webkitAnimationEnd', function(event) {
            $('.truot-sang-trai').removeClass('truot-sang-trai').removeClass('active');
        });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });

            //xu lý nút
            $('.nut ul li').removeClass('active_nut');
            $('.nut ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_nut');
        }
        else{
            $('.active').addClass('truot-sang-trai').one('webkitAnimationEnd', function(event) {
            $('.truot-sang-trai').removeClass('truot-sang-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            $('.nut ul li').removeClass('active_nut');
            $('.nut ul li:nth-child(1)').addClass('active_nut');
        }
    });

    // viết sự kiện cho nút prev

    $('#prev').click(function(event) {
        clearInterval(auto)
        var slide_truoc=$('.active').prev();
         var vi_tri_hien_tai=$('.active_nut').index()+1;
        if(slide_truoc.length!=0)
        {

            $('.active').addClass('truot-sang-phai').one('webkitAnimationEnd', function(event) {
                $('.truot-sang-phai').removeClass('truot-sang-phai').removeClass('active');
            });
            slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai')
            });
            $('.nut ul li').removeClass('active_nut');
            $('.nut ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active_nut');

        }
        else{
            $('.active').addClass('truot-sang-phai').one('webkitAnimationEnd', function(event) {
                $('.truot-sang-phai').removeClass('truot-sang-phai').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai')
            });
            $('.nut ul li').removeClass('active_nut');
            $('.nut ul li:last-child').addClass('active_nut');
        }
        
    });
    $('.nut ul li').click(function(event) {
       clearInterval(auto);
        var vi_tri_hien_tai=$('.active_nut').index()+1;
        console.log('vi tri hien tai'+vi_tri_hien_tai);
        var vi_tri_click=$(this).index()+1; 
        console.log('vi tri click'+vi_tri_click);
        console.log('vi tri hien tai'+vi_tri_hien_tai);
        $('.nut ul li').removeClass('active_nut');
        $(this).addClass('active_nut');
       if(vi_tri_hien_tai>vi_tri_click)
       {
            $('.active').addClass('truot-sang-phai').one('webkitAnimationEnd', function(event) {
            $('.truot-sang-phai').removeClass('truot-sang-phai').removeClass('active');
            });
            $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-trai').removeClass('di-vao-ben-trai')
            });
       }
       else if(vi_tri_hien_tai==vi_tri_click)
       {

       }
       else{
            $('.active').addClass('truot-sang-trai').one('webkitAnimationEnd', function(event) {
            $('.truot-sang-trai').removeClass('truot-sang-trai').removeClass('active');
            });
            $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
       }

    });
});