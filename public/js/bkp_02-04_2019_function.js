 
$(document).ready(function () {
    //main-sidebar function
    $('.openbtn').on('click', function () {
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');
        $('footer').toggleClass('open');
        $('.openbtn').toggleClass('active');
        $('#mySidebar').toggleClass('overflow-hidden');
    });

    //upgrade plans slider function
    $('#owl-plans').owlCarousel({
        loop: false,
        margin: 5,
        nav: true,
        dots:false,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            600: {
                items: 2,
                margin: 25
            },
            1000: {
                items: 3
            }
        }
    })

    //userlist overflow remove
    $('.user-list .dropdown-toggle').on('click', function () {
        $('.tab-content').removeClass('remove-overflow').addClass('fixed');
        $('.popup-box').removeClass('remove-overflow');
    });
    $('.user-list .detail-close-btn').on('click', function () {
        $('.tab-content').addClass('remove-overflow').removeClass('fixed');
        $('.popup-box').addClass('remove-overflow');
    });
 

    //emojis popup
    //$('.emojis-toggle').on('click', function () {
   //     $('.emojis').toggleClass('show');
   // });

    $(".emojis-toggle").click(function (ev) {
        $(".emojis-list").toggleClass("show");
              return false;
    });
    //on select emojis close popup
    $(".emoj-collection  a").click(function (ev) {
        $(".emojis-list").toggleClass("show");
        return false;
    });
    
    jQuery('.footer-title').click(function () {
        jQuery('.footer-title').removeClass('active');
        jQuery('.footer-content').slideUp('normal');
        if (jQuery(this).next().is(':hidden') == true) {
            jQuery(this).addClass('active');
            jQuery(this).next().slideDown('normal');
        }
    });


    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            $("." + optionValue).show();
            if (optionValue) {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box").hide();
            }
        });
    }).change();
});

//dropdown toggle
(function ($) {
    $('.dropdown-toggle').dropdown();
   
})(jQuery);

//main chatbar scrolling function


(function ($) {
    $(window).on("load", function () {
        $("#chatTab .tab-pane").mCustomScrollbar({
            setTop: '-999px',
            theme: "dark-3",
            scrollInertia: 200
            
        });
    });
})(jQuery);




//Friend list scrolling function
//(function ($) {
//    $(window).on("load", function () {
//        $("#online-users .tab-pane").mCustomScrollbar({
//            theme: "dark-3"
//        });
//    });
//})(jQuery);


//emojis-collection scrolling function
(function ($) {
    $(window).on("load", function () {
        $(".emoj-collection .tab-pane").mCustomScrollbar({
            theme: "dark-3"
        });
    });
})(jQuery);

//content block function
(function ($) {
    $(window).on("load", function () {
        $(".notification-box .content-block").mCustomScrollbar({
            theme: "dark-3"
        });
    });
})(jQuery);

$(document).ready(function () {
    $(".emojis-list .nav-tabs a").click(function () {
        $(this).tab('show');
    });
});


//change room on select option
$(document).ready(function () {
  
});

//userlist block
$('.user-btn').on('click', function () {
    $(this).addClass("active");
    $(".popup-box").addClass("show");
});
$('.userlist-close').on('click', function () {
    $(".popup-box").removeClass("show");
    $(".mob-header-btn").removeClass("active");
});


//remove badge when click on tab

$('.nav-tabs li a').click(function () {
    $(this).prev('.count-badge').addClass('hide');
});



//mobile header avtar click functions
$('.avtar-info .profile-avtar').click(function () {
    $('.avtar-info-box').addClass('show');
});
$('.close-info').click(function () {
    $('.avtar-info-box').removeClass('show');
});

//mobile header radio player click functions
$('.radio-show .mob-header-btn').click(function () {
    $('.radio-box').addClass('show');
});
$('.close-info').click(function () {
    $('.radio-box').removeClass('show');
});

//user menu click close user list
$('.dropdown-menu a').click(function () {
    $('.mobile-user-list').removeClass('show');
    $('.mob-header-btn').removeClass('active');
});

//mobile menu active function
$('.footer-menu .menu-btns').on('click', function () {
    $('.footer-menu .menu-btns').removeClass('active');
    $('body').removeClass('modal-open');
    $(this).addClass('active');
});

// mobile bottom menu open
jQuery(document).ready(function ($) {
    $('.footer-links').hide()
    $('.footer-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide()
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).toggle();

    });
});


//mobile sub menu open
jQuery(document).ready(function ($) {
    $('.footer-links').hide()
    $('.menu-list a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide()
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).toggle();

    });
});

//scroll bottom

