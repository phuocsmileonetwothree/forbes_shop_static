$(function () {
    // ------------------------ Slider Img -----------------------
    // ----- Hiển thị ảnh first -----
    var link_img_first = $("#prod-sub ul#list-sub li:first-child a img").attr('src');
    $("#prod-thumb a img").attr('src', link_img_first);
    // ----- Click lấy attr gán cho #prod-thumb>img -----
    var link_img;
    $("#prod-sub ul#list-sub li a").click(function () {
        link_img = $(this).children('img').attr('src');

        $("ul#list-sub li a").removeClass('hightlight');
        $(this).addClass('hightlight');

        $("#prod-thumb a img").attr('src', link_img);
        
        return false;
        
    });








    // ------------------------ Back_Top -----------------------
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#back-top").fadeIn();
        }
        else {
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").click(function () {
        $("body, html").animate({ scrollTop: 0 }, 600);
    })


    // ------------------------ Add_Amount -----------------------
    $("#amount .amount-add input#text-amount").each(function () {
        var $this = $(this);
        var qty = $this.parent().find('.qty');
        var min = Number($this.attr('min'));
        var max = Number($this.attr('max'));
        if (min == 0) {
            var hehe = 0;
        }
        else
            hehe = min;

        $(qty).click(function () {
            if ($(this).hasClass('minus')) {
                if (hehe > min)
                    hehe += -1;
            }
            else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1;
                if (x <= max)
                    hehe += 1;
            }
            $this.attr('value', hehe).val(hehe);
        })
    });
});