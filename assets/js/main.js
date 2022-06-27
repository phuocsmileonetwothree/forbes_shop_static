$(function () {






    // $("a").click(function () {
    //     return false;
    // });

    function TaoSoNgauNhien(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

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



    //sản phẩm 1
    $("ul#list-product li a img:eq(1)").attr('src', 'assets/image/products/2-thumb-airforce.jpg')
    $("ul#list-product li a .product-title:eq(1)").text("giày nike air force");
    $("ul#list-product li a .more-info .price:eq(1)").text("2.500.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(1)").text('Đã bán ' + a + '.' + b + "k");


    //sản phẩm 2
    $("ul#list-product li a img:eq(2)").attr('src', 'assets/image/products/3-thumb-gaubong.jpg')
    $("ul#list-product li a .product-title:eq(2)").text("pikachu");
    $("ul#list-product li a .more-info .price:eq(2)").text("100.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(2)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 3
    $("ul#list-product li a img:eq(3)").attr('src', 'assets/image/products/4-thumb-macbookpro.png')
    $("ul#list-product li a .product-title:eq(3)").text("macbook pro 13");
    $("ul#list-product li a .more-info .price:eq(3)").text("31.100.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(3)").text('Đã bán ' + a + '.' + b + "k");



    //sản phẩm 4
    $("ul#list-product li a img:eq(4)").attr('src', 'assets/image/products/5-thumb-short.jfif')
    $("ul#list-product li a .product-title:eq(4)").text("quần short đi biển");
    $("ul#list-product li a .more-info .price:eq(4)").text("499.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(4)").text('Đã bán ' + a + '.' + b + "k");


    //sản phẩm 5
    $("ul#list-product li a img:eq(5)").attr('src', 'assets/image/products/6-thumb-xediahinh.jfif')
    $("ul#list-product li a .product-title:eq(5)").text("Xe địa hình ATV");
    $("ul#list-product li a .more-info .price:eq(5)").text("22.000.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(5)").text('Đã bán ' + a + '.' + b + "k");



    // -------------------------------------------------------------------------



    //sản phẩm 6
    $("ul#list-product li a img:eq(6)").attr('src', 'assets/image/products/7-thumb.jpg')
    $("ul#list-product li a .product-title:eq(6)").text("Mắt kính");
    $("ul#list-product li a .more-info .price:eq(6)").text("550.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(6)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 7
    $("ul#list-product li a img:eq(7)").attr('src', 'assets/image/products/8-thumb.jpg')
    $("ul#list-product li a .product-title:eq(7)").text("Win 10 bản quyền");
    $("ul#list-product li a .more-info .price:eq(7)").text("3.400.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(7)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 8
    $("ul#list-product li a img:eq(8)").attr('src', 'assets/image/products/9-thumb.jpg')
    $("ul#list-product li a .product-title:eq(8)").text("Loa thông minh");
    $("ul#list-product li a .more-info .price:eq(8)").text("4.500.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(8)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 9
    $("ul#list-product li a img:eq(9)").attr('src', 'assets/image/products/10-thumb.jpg')
    $("ul#list-product li a .product-title:eq(9)").text("Mac mini 2020");
    $("ul#list-product li a .more-info .price:eq(9)").text("23.000.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(9)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 10
    $("ul#list-product li a img:eq(10)").attr('src', 'assets/image/products/11-thumb.jpg')
    $("ul#list-product li a .product-title:eq(10)").text("Kem chống nắng");
    $("ul#list-product li a .more-info .price:eq(10)").text("600.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(10)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 11
    $("ul#list-product li a img:eq(11)").attr('src', 'assets/image/products/12-thumb.jpg')
    $("ul#list-product li a .product-title:eq(11)").text("Máy ảnh Lumix G7");
    $("ul#list-product li a .more-info .price:eq(11)").text("13.000.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(11)").text('Đã bán ' + a + '.' + b + "k");




    // -------------------------------------------------------------------------



    //sản phẩm 12
    $("ul#list-product li a img:eq(12)").attr('src', 'assets/image/products/13-thumb.jpg')
    $("ul#list-product li a .product-title:eq(12)").text("Xe cub 110cc 2020");
    $("ul#list-product li a .more-info .price:eq(12)").text("98.000.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(12)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 13
    $("ul#list-product li a img:eq(13)").attr('src', 'assets/image/products/14-thumb.jpg')
    $("ul#list-product li a .product-title:eq(13)").text("Bill Gates : tham vọng...");
    $("ul#list-product li a .more-info .price:eq(13)").text("199.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(13)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 14
    $("ul#list-product li a img:eq(14)").attr('src', 'assets/image/products/15-thumb.jpg')
    $("ul#list-product li a .product-title:eq(14)").text("Bếp từ đa năng");
    $("ul#list-product li a .more-info .price:eq(14)").text("12.999.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(14)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 15
    $("ul#list-product li a img:eq(15)").attr('src', 'assets/image/products/16-thumb.jpg')
    $("ul#list-product li a .product-title:eq(15)").text("Áo khoác mùa đông");
    $("ul#list-product li a .more-info .price:eq(15)").text("490.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(15)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 16
    $("ul#list-product li a img:eq(16)").attr('src', 'assets/image/products/17-thumb.jpg')
    $("ul#list-product li a .product-title:eq(16)").text("Cần câu cá cỡ lớn");
    $("ul#list-product li a .more-info .price:eq(16)").text("2.300.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(16)").text('Đã bán ' + a + '.' + b + "k");

    //sản phẩm 17
    $("ul#list-product li a img:eq(17)").attr('src', 'assets/image/products/18-thumb.jpg')
    $("ul#list-product li a .product-title:eq(17)").text("Mô hình máy bay 1:1");
    $("ul#list-product li a .more-info .price:eq(17)").text("5.400.000");
    var a = TaoSoNgauNhien(1, 10);
    var b = TaoSoNgauNhien(1, 9);
    $("ul#list-product li a .more-info .sold:eq(17)").text('Đã bán ' + a + '.' + b + "k");








})
