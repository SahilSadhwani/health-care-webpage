$(function () {
    new WOW().init();
    
    /**********************TEAM**************************/
//    $('.member').hover(
//    function(){$(this).addClass('.team-mems-cover')},
//    function(){$(this).removeClass('.team-mems-cover')}
//    )
    
    //    ////////////////////////////////////////DEPARTMENT SECTION//////////////////////////////////////
    
    
    $(".dept-1 .box-1").hover(function(){
        
        $(".department-content p").text("Maxillary surgery content");
    });
    
    
     $(".dept-1 .box-2").hover(function(){
        
        $(".department-content p").text("keratosis pilaris content");
    });
    
     $(".dept-1 .box-3").hover(function(){
        
        $(".department-content p").text("pitryasis rosea content");
    });
    
    
     $(".dept-1 .box-4").hover(function(){
        
        $(".department-content p").text("gynecologic surgery content");
    });
    
    
    
    
    ///////////////COUNTER SECTION///////////////////////
    
    
     $('.counter').counterUp({
    delay: 5,
    time: 1000
});

});




