$(function(){
    //Chuyển tab 
    $("#content .tab-content").hide();
    $("#content .tab-content:first-child").show();
    $("ul#list-details li").click(function(){
        $("ul#list-details li").css('color','#333');
        $("ul#list-details li").removeClass('active');
        
        $(this).addClass('active');
        $(this).css('color','#fff');

        $(".tab-content").hide();

        var activeTab = $(this).attr("value");
        $("#" + activeTab).fadeIn();
    });
    

    //SlideUp-Down Tab Tutorial
    $(".show-hide-sell").click(function(){
        $(".box-sell").slideToggle();
        return false;
    });

    $(".show-hide-buy").click(function(){
        $(".box-buy").slideToggle();
        return false;
    });
});