
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
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 3
            }
        }
    })

    //userlist overflow remove
    //$('.user-list .dropdown-toggle').on('click', function () {
    //    $('.tab-content').removeClass('remove-overflow').addClass('fixed');
    //    $('.popup-box').removeClass('remove-overflow');
    //});
    $('.user-list-dropdown .detail-close-btn').on('click', function () {
        $('.user-list-dropdown').removeClass('show');
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


});

//change room on select option
$(document).ready(function () {
    $(".box").removeClass('show');
    $("select#chat-tabs").change(function () {

        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide().removeClass('show');
                $("." + optionValue).show().addClass('show');
            } else {
                $(".box").hide().removeClass('show');
            }
        });
    }).change();
});

//dropdown toggle
(function ($) {
    $('.dropdown-toggle').dropdown();

})(jQuery);

//main chatbar scrolling function

onResize = function () {
    if ($(window).width() < 640) {
        $('#chat-area .tab-pane').removeClass('scroll-section');
    } else {

    }
}
$(document).ready(onResize);
$(window).resize(onResize);


(function ($) {
    $(window).on("load", function () {
        $("#chatTab .scroll-section").mCustomScrollbar({
            theme: "dark-3",
            setTop: "9999px",
            scrollInertia: 500
        });
    });
})(jQuery);



//Friend list scrolling function
(function ($) {
    $(window).on("load", function () {
        $("#online-users .tab-pane").mCustomScrollbar({
            theme: "dark-3",
            //setTop: "9999px",
            scrollInertia: 500
        });
    });
})(jQuery);


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




//userlist block
$('.user-btn').on('click', function () {
    $(this).addClass("active");
    $(".popup-box").addClass("show");
    $('.radio-box').removeClass('show');
    $('.avtar-info-box').removeClass('show');
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
    $(this).next('.status-dropdown').addClass('show');
    $('.radio-box').removeClass('show');
    $(".popup-box").removeClass("show");
    $(".user-btn").removeClass("active");
    e.stopPropagation();
});
$('.close-info').click(function () {
    $('.status-dropdown').removeClass('show');
});



//mobile header radio player click functions
$('.radio-show .mob-header-btn').click(function () {
    $('.radio-box').addClass('show');
    $('.status-dropdown').removeClass('show');
    $(".popup-box").removeClass("show");
    $(".user-btn").removeClass("active");
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
    $('.footer-links').hide();
    $('.menu-list a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).toggle();

    });
});


$(window).ready(function () {
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $(".chat-input").focus(function () {
            $('.mob-top-header').addClass('show-header');
            $('.footer-middle').addClass('hide');
            $('.mob-display').addClass('change-height');
            $('#chatTab .tab-pane').addClass('chat-height');

        });

        $('.chat-input').blur(function () {
            if (!$(this).val()) {
                $('.mob-top-header').removeClass('show-header');
                $('.footer-middle').removeClass('hide');
                $('.mob-display').removeClass('change-height');
                $('#chatTab .tab-pane').removeClass('chat-height');
            }
        });
    } else {
        return false;
    }
});


// popup open on click function
jQuery(document).ready(function ($) {
    $('.footer-links').hide();
    $('.user-list-dropdown a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show').css('z-index', '999');
        $('.footer-links').css('z-index', '998');
        $('.user-list-dropdown').removeClass('show');
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        $(target).css('top', height / 2).css('left', width / 2).addClass('transform');
    });
});



//popup btn click function
jQuery(document).ready(function ($) {
    $('.footer-links').hide();
    $('.modal-btn-links a[href^="#"]').on('click', function (event) {
        var target = $(this).attr('href');
        console.log(target);
        //$('.footer-links').css('z-index', '998');
        $('.footer-links' + target).addClass('show').css('z-index', '9999');
    });
});

//change search section function
$(document).ready(function ($) {
    $('#user-tab').on('click', function (event) {
        $('.user-search').addClass('show');
        $('.friend-search').removeClass('show');
        $('.room-search').removeClass('show');
    });
    $('#friend-tab').on('click', function (event) {
        $('.user-search').removeClass('show');
        $('.friend-search').addClass('show');
        $('.room-search').removeClass('show');
    });
    $('#room-tab').on('click', function (event) {
        $('.user-search').removeClass('show');
        $('.friend-search').removeClass('show');
        $('.room-search').addClass('show');
    });
});


// popup open on click function
jQuery(document).ready(function ($) {
    $('.footer-links').hide();
    $('.user-list .dropdown-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
});



//popup btn click function
jQuery(document).ready(function ($) {
    $('.footer-links').hide()
    $('.dropdown-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide()
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
});


jQuery(document).ready(function ($) {
    $('.box-title .close').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show');
    });
    //close msg popup
    $('.center-msg-box .modal-footer .btn').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show').hide();
    });
    //back button function
    $('.back-btn span').on('click', function (event) {
        $(this).parent().closest('div.footer-links').removeClass('show').hide();
      
    });
});

var allZindex = 999;
//draggable popup function
$(document).ready(function () {
    $(".footer-links").draggable({
        handle: ".box-title",
        containment: "#containment-wrapper",
        scroll: false,
        drag: function (event, ui) {
            var offset = $(this).offset();
            $(this).css('top', offset.top).css('left', offset.left).removeClass('transform');
            allZindex = allZindex + 1;
            $(this).css('z-index', allZindex + 1);
        }
    });
    
    $('.modal-btn-links a[href^="#"]').on('click', function (event) {
        //var width = jQuery(window).width();
        //var height = jQuery(window).height();
       
        //$(target).css('top', height / 2).css('left', width / 2).css('z-index', '999').addClass('transform');
        //$('.footer-links').css('z-index', '998');
    });
    $('.footer-links').on('click', function (event) {
        //console.log(target);
        //$('.footer-links').css('z-index', '997');
        if (!$(event.target).hasClass('btn')) {
            allZindex = allZindex + 1;
            console.log(allZindex);
            $(this).css('z-index', allZindex + 1);
        }       
    });
    $(function () {
        var tabs = $("#chatTab").tabs();
        tabs.find(".ui-tabs-nav").sortable({
            axis: "x",
            stop: function () {
                tabs.tabs("refresh");
            }
        });
    });
    //$(function () {
    //    $(document).tooltip({
    //        position: {
    //            my: "center bottom-20",
    //            at: "center top",
    //            using: function (position, feedback) {
    //                $(this).css(position);
    //                $("<div>")
    //                    .addClass("arrow")
    //                    .addClass(feedback.vertical)
    //                    .addClass(feedback.horizontal)
    //                    .appendTo(this);
    //            }
    //        }
    //    });
    //});
});

function openReceiveUpgradePopup(popupId, existingPopupId) {
    $('#' + popupId).addClass('show');
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    allZindex = allZindex + 1;
    $('#' + popupId).css('top', height / 2).css('left', width / 2).css('z-index', allZindex).addClass('transform');
    $('#' + existingPopupId).css('z-index', allZindex - 1);
}
//on resize more menu hide in desktop
jQuery(window).resize(function () {
    var width = jQuery(window).width();
    if (width > 768) {
        jQuery('#moremenu-popup').hide();
        jQuery('.drag').addClass('draggable');
    }
    if (width < 768) {
        jQuery('.drag').removeClass('draggable');
    }
});


//sidebar usermenu popup
$(window).ready(function () {
    $('.user-list li').on('click', function () {
        $('.user-list li').removeClass('show-box');
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.user-list .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
        $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left - boxwidth - 10);
        var height = $('.user-list-dropdown').height();
        var dheight = $(window).height();
        var totalHeight = height + offset.top;
        var diff = totalHeight - dheight;
        if (diff > 0) {
            $('.user-list-dropdown').css('top', offset.top - diff - 20);
        }
    });
    $('.detail-close-btn').on('click', function () {
        $('.user-list li').removeClass('current');
    });
    $('.user-list-dropdown a').on('click', function () {
        $('.user-list li').removeClass('current');
    });
});

//show sidebar submenu function
// popup open on click function
jQuery(document).ready(function ($) {
    $('.submenu').hide()
    $('.main-menu-box a.popup[href^="#"]').on('click', function (event) {
        $('.submenu').hide()
        var target = $(this).attr('href');
        //console.log(target);

        $('.submenu' + target).addClass('show').css('z-index', '999');
        $(this).parent().closest('span.main-menu-box').hide();
        $('.user-list-dropdown').addClass('show');
        $('.user-list li.show-box').addClass('current');
        var offset = $('.user-list li.show-box').offset();
        var boxwidth = $('.submenu.width-count').width();
        $('.user-list-dropdown').css('top', offset.top).css('top', offset.top - 50).css('left', offset.left - boxwidth - 10);
    });
    $('.user-list li').on('click', function (event) {
        $('.main-menu-box').show();
        $('.submenu').removeClass('show');

    });

});


//chenge notification popup on resize
$(window).resize(function () {
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth > 768) {
        $('#notification-popup').hide();
    }
});


//change avatar click close menu

jQuery(document).ready(function ($) {
    $('.status-dropdown li').on('click', function (event) {
        $(this).parent().closest('div.status-dropdown.show').removeClass('show');
    });
});


