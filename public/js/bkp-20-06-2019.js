
var allZindex = 999;

var userListLeft = 0;
var userListTop = 0;

$(document).ready(function () {

    //added on 20-06-2019

    $('.scroll-privatechat .mCSB_container').css('top', '9999px');

    $('.openchat-list-box').on('click', function () {
        $('.openchat-list .mCSB_draggerContainer').addClass('target-menu');  
        $('.openchat-list .mCSB_scrollTools').addClass('target-menu');  
        $('.openchat-list .mCSB_dragger_bar').addClass('target-menu');
    });

    //main-sidebar function
    $('.openbtn').on('click', function () {
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');
        $('footer').toggleClass('open');
        $('.openbtn').toggleClass('active');
        $('#mySidebar').toggleClass('overflow-hidden');
    });

    $('#owl-videoslider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 4
            }
        }
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
    });

    $('.user-list-dropdown .detail-close-btn').on('click', function () {
        $('.user-list-dropdown').removeClass('show');
    });

    $('.chat-dropdown-menu .detail-close-btn').on('click', function () {
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');
    });
    $('.chat-dropdown-menu a.dropdown-item').on('click', function () {
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');
    });

    $('.sidebar-status-menu .detail-close-btn').on('click', function () {
        $('.sidebar-status-menu').removeClass('show');
    });

    $('.sidebar-status-menu a.dropdown-item').on('click', function () {
        $('.sidebar-status-menu').removeClass('show');
        $('.sidebar-status-dropdown.show-box').removeClass('current');

    });


    $(".emojis-toggle").click(function (ev) {
        $(".emojis-list").toggleClass("show");
        return false;
    });
    $(".emojis-toggle01").click(function (ev) {
        $(".emojis-list01").toggleClass("show");
        return false;
    });
    $(".emojis-toggle02").click(function (ev) {
        $(".emojis-list02").toggleClass("show");
        return false;
    });

    //on select emojis close popup
    $(".emoj-collection  a").click(function (ev) {
        $(".emojis-list").toggleClass("show");
        return false;
    });
    $(".emoj-collection01  a").click(function (ev) {
        $(".emojis-list01").toggleClass("show");
        return false;
    });
    $(".emoj-collection02  a").click(function (ev) {
        $(".emojis-list02").toggleClass("show");
        return false;
    });
    $(".emoj-collection03  a").click(function (ev) {
        $(".emojis-list02").toggleClass("show");
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

    //change avatar click close menu
    $('.status-dropdown li').on('click', function (event) {
        $(this).parent().closest('div.status-dropdown.show').removeClass('show');
    });


    //show sidebar submenu function
    $('.submenu').hide()
    $('.main-menu-box a.popup[href^="#"]').on('click', function (event) {
        $('.submenu').hide();
        var target = $(this).attr('href');
        $('.mob-user-menu').removeClass('current');
        $('.submenu' + target).addClass('show').css('z-index', '999');
        $(this).parent().closest('span.main-menu-box').hide();
        $('.user-list-dropdown').addClass('show');
        if ($('.main-menu-box').parent().hasClass('chat-name')) {
            $('.user-list li.show-box').removeClass('current');
            $('.user-list01 li.show-box').removeClass('current');
            $('.chat-line .dropdown-open.show-box').addClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            var offset = $('.chat-line .show-box').offset();
            var boxwidth = $('.submenu.show').width();
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
            }
        } else if ($('.main-menu-box').parent().hasClass('profile-picture')) {
            $('.user-list li.show-box').removeClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').addClass('current');
            $('.user-list01 li.show-box').removeClass('current');
            var offset = $('.profile-pics .show-box').offset();
            var boxwidth = $('.submenu.show').width();
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
            }
        } else if ($('.main-menu-box').parent().hasClass('groupconvesation-menu')) {
            $('.user-list li.show-box').removeClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            $('.user-list01 li.show-box').addClass('current');
            var offset = $('.user-list01 li.show-box').offset();
            var boxwidth = $('.submenu.show').width();
            $('.user-list-dropdown').css('top', offset.top - 50).css('left', offset.left - boxwidth - 10);
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
            }
        }
        else {
            $('.user-list li.show-box').addClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            var offset = $('.user-list li.show-box').offset();
            var boxwidth = $('.submenu.show').width();
            $('.user-list-dropdown').css('top', offset.top - 50).css('left', offset.left - boxwidth - 10);
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
            }
        }

    });


    $('.chat-line .dropdown-open').on('click', function (event) {
        $('.main-menu-box').show();
        $('.submenu').removeClass('show');
        $('.user-list li.show-box').removeClass('current');
        $('.chat-line .dropdown-open.show-box').addClass('current');
        $('.profile-pics .dropdown-open.show-box').removeClass('current');
        $('.header-popup').removeClass('show');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');

    });

    $('.profile-pics .dropdown-open').on('click', function (event) {
        $('.main-menu-box').show();
        $('.submenu').removeClass('show');
        $('.user-list li.show-box').removeClass('current');
        $('.chat-line .dropdown-open.show-box').removeClass('current');
        $('.profile-pics .dropdown-open.show-box').addClass('current');
        $('.profile-pics .dropdown-open.show-box').addClass('current');
        $('.header-popup').removeClass('show');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');
    });

    $('.pop-menu a.popup').on('click', function (event) {
        setTimeout(function () {
            if ($('.main-menu-box').parent('').hasClass('chat-name')) {
                var offset = $('.chat-line .show-box').offset();
                var height = $('.user-list-dropdown').height();
                var dheight = $(window).height();
                var totalHeight = height + offset.top;
                var diff = totalHeight - dheight;
                if (diff > 0) {
                    $('.user-list-dropdown').css('top', offset.top - diff - 20);
                }
            } else if ($('.main-menu-box').parent().hasClass('profile-picture')) {
                var offset = $('.profile-pics .show-box').offset();
                var height = $('.user-list-dropdown').height();
                var dheight = $(window).height();
                var totalHeight = height + offset.top;
                var diff = totalHeight - dheight;
                if (diff > 0) {
                    $('.user-list-dropdown').css('top', offset.top - diff - 20);
                }
            } else if ($('.main-menu-box').parent().hasClass('groupconvesation-menu')) {
                var offset = $('.user-list01 li.show-box').offset();
                var height = $('.user-list-dropdown').height();
                var dheight = $(window).height();
                var totalHeight = height + offset.top;
                var diff = totalHeight - dheight;
                if (diff > 0) {
                    $('.user-list-dropdown').css('top', offset.top - diff - 20);
                }
            } else {
                var offset = $('.user-list li.show-box').offset();
                var height = $('.user-list-dropdown').height();
                var dheight = $(window).height();
                var totalHeight = height + offset.top;
                var diff = totalHeight - dheight;
                if (diff > 0) {
                    $('.user-list-dropdown').css('top', offset.top - diff - 20);
                }
            }
        }, 200);
    });

    //change avatar menu function
    $('.sidebar-status-dropdown').on('click', function () {
        $('.user-list li').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.user-list-dropdown').removeClass('show');
        $('.user-list li').removeClass('show-box');
        $('.header-popup').removeClass('show');
        $('.chat-menu-block.show-box').removeClass('current');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.sidebar-status-dropdown .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
        $('.sidebar-status-menu').addClass('show').css('top', offset.top).css('left', offset.left - boxwidth - 10).addClass('sidebar-dropdown').removeClass('chat-dropdown');
    });

    function CallPopup(id) {
        $(id).addClass('show');
        openReceiveUpgradePopup(id.substring(1, id.length));
        $('.user-list li').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.user-list-dropdown').removeClass('show');
        $('.user-list li').removeClass('show-box');
        $('.sidebar-status-menu').removeClass('show');
        $('.sidebar-status-dropdown').removeClass('current');

    }


    //sidebar usermenu popup
    $('.user-list li').on('click', function (event) {
        if ($(event.target).hasClass('call-popup')) {
            CallPopup(event.target.parentElement.hash);
        } else {
            $('.main-menu-box').show();
            $('.submenu').removeClass('show');
            $('.user-list-dropdown ').removeClass('chat-name')
            $('.user-list li.show-box').addClass('current');
            $('.user-list01 li.show-box').removeClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            $('.header-popup').removeClass('show');
            $('.chat-dropdown-menu').removeClass('show').hide();
            $('.chat-menu-block.show-box').removeClass('current');
            $('.user-list li').removeClass('current');
            $('.dropdown-open').removeClass('current');
            $('.user-list li').removeClass('show-box');
            $('.sidebar-status-dropdown').removeClass('current');
            $('.sidebar-status-menu').removeClass('show');
            $(this).addClass('show-box');
            $(this).addClass('current');
            var offset = $(this).offset();
            var boxwidth = $('.width-count').width();
            $('.user-list .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
            $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left - boxwidth - 10).addClass('sidebar-dropdown').removeClass('chat-dropdown').removeClass('profile-picture').removeClass('groupconvesation-menu');
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            userListLeft = offset.left - boxwidth - 10;
            userListTop = offset.top;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
                userListTop = offset.top - diff - 20;
            }
        }
    });
    $('.user-list02 li').on('click', function (event) {
        if ($(event.target).hasClass('call-popup')) {
            CallPopup(event.target.parentElement.hash);
        } else {
            $('.main-menu-box').show();
            $('.submenu').removeClass('show');
            $('.user-list-dropdown ').removeClass('chat-name')
            $('.user-list li.show-box').addClass('current');
            $('.user-list02 li.show-box').removeClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            $('.header-popup').removeClass('show');
            $('.chat-dropdown-menu').removeClass('show').hide();
            $('.chat-menu-block.show-box').removeClass('current');
            $('.user-list li').removeClass('current');
            $('.dropdown-open').removeClass('current');
            $('.user-list li').removeClass('show-box');
            $('.sidebar-status-dropdown').removeClass('current');
            $('.sidebar-status-menu').removeClass('show');
            $(this).addClass('show-box');
            $(this).addClass('current');
            var offset = $(this).offset();
            var boxwidth = $('.width-count').width();
            $('.user-list .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
            $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left + 80).addClass('sidebar-dropdown').removeClass('chat-dropdown').removeClass('profile-picture').removeClass('groupconvesation-menu');
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            userListLeft = offset.left - boxwidth - 10;
            userListTop = offset.top;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
                userListTop = offset.top - diff - 20;
            }
        }
    });



    //profile pics click open menu
    $('.profile-pics .dropdown-open').on('click', function () {
        $('.dropdown-open').removeClass('current');
        $('.profile-pics .dropdown-open').removeClass('show-box');
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.profile-pics .arrow-left-caret').css('top', offset.top + 10).css('left', offset.left + 40);
        $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left + 50).removeClass('sidebar-dropdown').removeClass('chat-dropdown').addClass('profile-picture').removeClass('groupconvesation-menu');
        var height = $('.user-list-dropdown').height();
        var dheight = $(window).height();
        var totalHeight = height + offset.top;
        var diff = totalHeight - dheight;
        userListLeft = offset.left + 50;
        userListTop = offset.top;
        if (diff > 0) {
            $('.user-list-dropdown').css('top', offset.top - diff - 20);
            userListTop = offset.top - diff - 20;
        }
    });
    //username click open menu
    $('.chat-line .dropdown-open').on('click', function () {
        $('.dropdown-open').removeClass('current');
        $('.user-list li').removeClass('current');
        $('.chat-line .dropdown-open').removeClass('show-box');
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.chat-line .arrow-left-caret').css('top', offset.top + 0).css('left', offset.left + 80);
        $('.user-list-dropdown').addClass('show').css('top', offset.top - 5).css('left', offset.left + 90).removeClass('sidebar-dropdown').removeClass('profile-picture').addClass('chat-name').removeClass('groupconvesation-menu');
        $('.main-menu-box').addClass('chat-dropdown');
        var height = $('.user-list-dropdown').height();
        var dheight = $(window).height();
        var totalHeight = height + offset.top;
        var diff = totalHeight - dheight;
        userListLeft = offset.left + 90;
        userListTop = offset.top - 5;
        if (diff > 0) {
            $('.user-list-dropdown').css('top', offset.top - diff - 20);
            userListTop = offset.top - diff - 20;
        }
    });
    $('.detail-close-btn').on('click', function () {
        $('.user-list li').removeClass('current');
        $('.user-list01 li').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.sidebar-status-dropdown').removeClass('current');
    });

    //draggable popup function and z-index managment
    $(".footer-links").draggable({
        handle: ".box-title",
        containment: "#containment-wrapper",
        scroll: false,
        drag: function (event, ui) {
            var offset = $(this).offset();
            $(this).css('top', offset.top).css('left', offset.left).removeClass('transform');
            setOtherModelZIndex(this.id);
            $(this).css('z-index', allZindex);
        }
    });
    //VideoMobileDraggable();



    $('.footer-links').on('click', function (event) {
        if (!$(event.target).hasClass('z-disable')) {
            $(this).css('z-index', allZindex);
            setOtherModelZIndex(this.id);
        }
    });

    //press to talk function

    $('.talk-room').on('click', function () {
        $('.press-to-talk').addClass('show');
        $('.toggle-radio').addClass('hide');
    });
    $('.chatting-room').on('click', function () {
        $('.press-to-talk').removeClass('show');
        $('.toggle-radio').removeClass('hide');
    });


    var tabs = $("#chatTab").tabs();
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function () {
            tabs.tabs("refresh");
        }
    });

    $('#chatTab .nav-tabs a').click(function () {
        $(this).tab('show');

    });
    $('#chatTab .nav-tabs a').on('shown.bs.tab', function (e) {
        $('#chatTab .tab-pane.active' + $(e.target).attr('href') + ' .mCSB_container').css('top', '99999px');
        $(this).prev('.count-badge').addClass('hide');
    });

    //mobile draggable
    var width = jQuery(window).width();
    if (width > 768) {
        $('.mobile-drag').removeClass('box-title');

    } else {
        $('.mobile-drag').addClass('box-title');
    }

    //mobile browser detection
    var sBrowser, sUsrAg = navigator.userAgent;
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth > 768) {
        if (sUsrAg.indexOf("Firefox") > -1) {
            //sBrowser = "Mozilla Firefox";
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            //sBrowser = "Opera";
        } else if (sUsrAg.indexOf("Trident") > -1) {
            //sBrowser = "Microsoft Internet Explorer";
        } else if (sUsrAg.indexOf("Edge") > -1) {
            //sBrowser = "Microsoft Edge";
            alert('Microsoft Edge');
            $('.main-wrapper').addClass('fixed-wrapper');
            $('header').addClass('fixed-header');
        } else if (sUsrAg.indexOf("Chrome") > -1) {
        }

        else if (sUsrAg.indexOf("Safari") > -1) {
            //sBrowser = "Apple Safari";
        } else {
            //sBrowser = "unknown";
        }
    }
    else {

    }

    //alert(sUsrAg);
    //alert("You are using: " + sBrowser);

    var viewPortHeight = jQuery(window).height();
    //alert(viewPortHeight);

    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $('#chatTab .tab-pane').css('height', viewPortHeight - 180);
        $('.mobile-user-list').css('height', viewPortHeight - 175);
        $('.mobile-room-list').css('height', viewPortHeight - 175);
    }

    //var viewPortHeight = jQuery(document).height();
    //alert(viewPortHeight);


    //audio player function
    $("#jquery_jplayer_1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                //m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                //oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                m4a: "../../js/audio-player/Miaow-07-Bubble.m4a",
                oga: "../../js/audio-player/Miaow-07-Bubble.ogg"
            });
        },
        swfPath: "../../js/audio-player/jquery.jplayer.swf",
        supplied: "m4a, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });
    //mobile radio player
    $("#radio_player").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "https://s2.radio.co/s79d5660a8/listen",
            });
        },
        swfPath: "../../dist/jplayer",
        supplied: "m4a, oga, mp3",
        wmode: "window",
        cssSelectorAncestor: '#jp_container_2',
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });

    $("#radio_player1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "https://s2.radio.co/s79d5660a8/listen"
            });
        },
        swfPath: "../../dist/jplayer",
        supplied: "m4a, oga, mp3",
        wmode: "window",
        cssSelectorAncestor: '#jp_container_3',
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });


    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $('.notification-list').removeClass('header-popup');
    }

    DataTableResponsive();
    RechargeDataTableResponsive();
    GiftinDataTableResponsive();
    GiftoutDataTableResponsive();
    UpgradeDataTableResponsive();
    Tooltips();

    var width = jQuery(window).width();
    if (width < 768) {
        $('.group-convesat-area').removeClass('active');
        $('.group-conversation-block').removeClass('show');
        $('.gicons-rounded').removeClass('hide');
    } else {

    }
});

//function VideoMobileDraggable(){
//    var viewPortWidth = jQuery(window).width();
//    if (viewPortWidth < 768) {
//        $(".footer-links").draggable({
//            handle: "#video-call",
//            containment: "#containment-wrapper",
//            scroll: false,
//            drag: function (event, ui) {
//                var offset = $(this).offset();
//                $(this).css('top', offset.top).css('left', offset.left).removeClass('transform');
//                setOtherModelZIndex(this.id);
//                $(this).css('z-index', allZindex);
//            }
//        });
//    }
//}

function DataTableResponsive() {
    $('#example').DataTable().destroy();
    if ($(this).width() > 768) {

        $('#example').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[7], [7]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    } else {
        $('#example').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[2], [2]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    }
}


//recharge data table
function RechargeDataTableResponsive() {
    $('#recharge-table').DataTable().destroy();
    if ($(this).width() > 768) {

        $('#recharge-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[6], [6]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    } else {
        $('#recharge-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[2], [2]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    }
}

//giftin data table
function GiftinDataTableResponsive() {
    $('#giftin-table').DataTable().destroy();
    if ($(this).width() > 768) {

        $('#giftin-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[4], [4]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    } else {
        $('#giftin-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[2], [2]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    }
}

//giftout data table
function GiftoutDataTableResponsive() {
    $('#giftout-table').DataTable().destroy();
    if ($(this).width() > 768) {

        $('#giftout-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[4], [4]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    } else {
        $('#giftout-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[2], [2]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    }
}

//upgrade credit data table
function UpgradeDataTableResponsive() {
    $('#upgradecredit-table').DataTable().destroy();
    if ($(this).width() > 768) {

        $('#upgradecredit-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[3], [3]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    } else {
        $('#upgradecredit-table').DataTable({
            "pagingType": "full_numbers",
            "searching": false,
            "lengthMenu": [[2], [2]],
            "language": {
                search: "",
                oPaginate: {
                    sNext: '<i class="next-page"></i>',
                    sPrevious: '<i class="prev-page"></i>',
                    sFirst: '<i class="first-page"></i>',
                    sLast: '<i class="last-page"></i>'
                }
            }
        });
    }
}


//change room on select option
(function ($) {
    $(".box").removeClass('show');
    $("select#chat-tabs").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide().removeClass('show');
                $("." + optionValue).show().addClass('show');
                $("#chat-area .tab-pane").scrollTop($('#chat-area .tab-pane').height() + 500);
                var myDiv = document.getElementById("room1");
                myDiv.scrollTop = myDiv.scrollHeight;

            } else {
                $(".box").hide().removeClass('show');
            }
        });
    }).change();
})(jQuery);

//dropdown toggle
(function ($) {
    $('.dropdown-toggle').dropdown();
})(jQuery);

(function ($) {
    $('.header-icons .icons-rounded').click(function () {
        $('.sidebar-status-menu').removeClass('show');
        $('.sidebar-status-dropdown.show-box').removeClass('current');
        $('.user-list-dropdown').removeClass('show');
        $('.user-list li').removeClass('current');

    });
})(jQuery);


//emojis-collection scrolling function
(function ($) {
    $(window).on("load", function () {
        $(".emoj-collection .tab-pane").mCustomScrollbar({
            theme: "dark-3"
        });

        $(".emoj-collection01 .tab-pane").mCustomScrollbar({
            theme: "dark-3"
        });
        $(".emoj-collection02 .tab-pane").mCustomScrollbar({
            theme: "dark-3"
        });
        $(".emoj-collection03 .tab-pane").mCustomScrollbar({
            theme: "dark-3"
        });

        $(".notification-box .content-block").mCustomScrollbar({
            theme: "dark-3"
        });
        ScrollInit();
        //Friend list scrolling function
        $("#online-users .tab-pane").mCustomScrollbar({
            theme: "dark-3",
            //setTop: "9999px",
            //scrollInertia: 200
        });
        $(".user-reported-model tbody").mCustomScrollbar({
            theme: "dark-3",
            setTop: "0",
            scrollInertia: 200
        });


    });
})(jQuery);


function ScrollInit() {
    if ($(this).width() > 768) {
        $("#chat-area .tab-pane").mCustomScrollbar({
            theme: "dark-3",
            setTop: "99999px",
            scrollInertia: 200
        });
        //ignore list scrollbar
        $(".ignore-list").mCustomScrollbar({
            theme: "dark-3",
            scrollbarPosition: "inside",
            scrollInertia: 200
        });

        //add-group list scrollbar
        $(".add-group-list").mCustomScrollbar({
            theme: "dark-3",
            scrollbarPosition: "inside",
            scrollInertia: 200
        });
        //open chat list scrollbar
        $(".openchat-scroll").mCustomScrollbar({
            theme: "dark-3",
            scrollbarPosition: "inside",
            scrollInertia: 200
        });

        //register popup scrollbar
        $(".register-scroll").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 200
        });

        //private chat popup scrollbar
        $(".scroll-privatechat").mCustomScrollbar({
            theme: "dark-3",
            setTop: "99999px",
            scrollInertia: 200
        });
    } else {
        $("#chat-area .tab-pane").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".ignore-list").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".add-group-list").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".openchat-scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".register-scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".scroll-privatechat").mCustomScrollbar("destroy"); //destroy scrollbar 
        $("#chat-area .tab-pane").scrollTop($('#chat-area .tab-pane').height() + 500)
    }
}

(function ($) {
    $(".emojis-list .nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $(".emojis-list01 .nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $(".emojis-list02 .nav-tabs a").click(function () {
        $(this).tab('show');
    });
})(jQuery);

//userlist block
(function ($) {
    $('.user-btn').on('click', function () {
        $(".mob-header-btn").removeClass("active");
        $(this).addClass("active");
        $(".mobile-user-list").addClass("show");
        $(".mobile-room-list").removeClass("show");
        $('.radio-box').removeClass('show');
        $('.avtar-info-box').removeClass('show');
        $('.status-dropdown').removeClass('show');
    });
    $('.userlist-close').on('click', function () {
        $(".mobile-user-list").removeClass("show");
        $(".mob-header-btn").removeClass("active");
    });

    //mob-header room btn
    $('.room-btn').on('click', function () {
        $(".mob-header-btn").removeClass("active");
        $(this).addClass("active");
        $(".mobile-room-list").addClass("show");
        $(".mobile-user-list").removeClass("show");
        $('.radio-box').removeClass('show');
        $('.avtar-info-box').removeClass('show');
        $('.status-dropdown').removeClass('show');

    });
    $('.userlist-close').on('click', function () {
        $(".mobile-room-list").removeClass("show");
        $(".mob-header-btn").removeClass("active");
    });
})(jQuery);


//remove badge when click on tab
//(function ($) {
//    $('#chatTab .nav-tabs li a').click(function () {

//    });
//})(jQuery);



//mobile header avtar click functions
(function ($) {
    $('.avtar-info .profile-avtar').click(function () {
        $(this).next('.status-dropdown').addClass('show');
        $('.radio-box').removeClass('show');
        $(".popup-box").removeClass("show");
        $(".user-btn").removeClass("active");
        $(".room-btn").removeClass("active");

        e.stopPropagation();
    });
    $('.close-info').click(function () {
        $('.status-dropdown').removeClass('show');
    });
})(jQuery);


//mobile header radio player click functions
(function ($) {
    $('.radio-show .mob-header-btn').click(function () {
        $('.radio-box').addClass('show');
        $('.status-dropdown').removeClass('show');
        $(".popup-box").removeClass("show");
        $(".user-btn").removeClass("active");
        $(".room-btn").removeClass("active");

    });
    $('.close-info').click(function () {
        $('.radio-box').removeClass('show');
    });
})(jQuery);



//mobile menu active function
(function ($) {
    $('.footer-menu .menu-btns').on('click', function () {
        $('.footer-menu .menu-btns').removeClass('active');
        $('body').removeClass('modal-open');
        $(this).addClass('active');
    });
})(jQuery);

// mobile bottom menu open
(function ($) {
    $('.footer-links').hide();
    $('.footer-links01').hide();

    $('.footer-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').removeClass('show');
        $('.footer-links01').removeClass('show');
        $('.footer-links').hide();
        $('.footer-links01').hide();
        $('.mobile-user-list').removeClass('show');
        $('.mobile-room-list').removeClass('show');
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).toggle();
        $('.footer-links01' + target).toggle();
        $('.user-list-dropdown').removeClass('show');
        $('.user-list02.show-box').removeClass('current');
        changeInput();
    });
})(jQuery);

//mobile sub menu open
(function ($) {
    $('.footer-links').hide();
    $('.menu-list a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        $('.footer-links01').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show');
        $('.footer-links01' + target).addClass('show');
        $('.footer-links' + target).toggle();
        $('.footer-links01' + target).toggle();

    });
})(jQuery);

(function ($) {
    var viewPortHeight = jQuery(window).height();

    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $(".chat-input").focus(function () {
            //alert(viewPortHeight);
            $('.mob-top-header').addClass('show-header');
            $('.footer-middle').addClass('hide');
            $('.mob-footer').addClass('change-height');
            $('#chatTab .tab-pane').addClass('chat-height');
            $('#chatTab .tab-pane').css('height', viewPortHeight - 60);
            setTimeout(function () {
                var myDiv = document.getElementsByClassName(".tab-pane");
                myDiv.scrollTop = myDiv.scrollHeight;
            }, 3000);
            //$('body').addClass('fixfixed');
        });

        $('.chat-input').blur(function () {
            if (!$(this).val()) {
                $('.mob-top-header').removeClass('show-header');
                $('.footer-middle').removeClass('hide');
                $('.mob-footer').removeClass('change-height');
                $('#chatTab .tab-pane').removeClass('chat-height');
                $('#chatTab .tab-pane').css('height', viewPortHeight - 180);
                //$('body').removeClass('fixfixed');
            }
        });
    } else {
        return false;
    }
})(jQuery);


// popup open on click function
(function ($) {
    $('.footer-links').hide();
    $('.main-menu-box a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.user-list-dropdown').removeClass('show');
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        $('.footer-links' + target).css('top', height / 2).css('left', width / 2).addClass('transform');

    });
})(jQuery);

(function ($) {
    $('.footer-links').hide();
    $('#view-profile a.open-popup[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.user-list-dropdown').removeClass('show');
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        $('.footer-links' + target).css('top', height / 2).css('left', width / 2).addClass('transform');

    });
})(jQuery);





(function ($) {
    $('.change-status a[href^="#"]').on('click', function (event) {
        var target = $(this).attr('href');
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        //console.log(target);
        $(target).css('top', height / 2).css('left', width / 2).addClass('transform');
    });
})(jQuery);



//popup btn click function
(function ($) {
    $('.footer-links').hide();
    $('.modal-btn-links a[href^="#"]').on('click', function (event) {
        var target = $(this).attr('href');

        //$('.footer-links').css('z-index', '998');
        //$('.footer-links' + target).addClass('show').css('z-index', '9999');
    });
})(jQuery);

//change search section function
(function ($) {
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
})(jQuery);


// popup open on click function
(function ($) {
    $('.footer-links').hide();
    $('.user-list .dropdown-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
})(jQuery);



//popup btn click function
(function ($) {
    $('.footer-links').hide()
    $('.dropdown-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide()
        var target = $(this).attr('href');
        //console.log(target);
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
})(jQuery);


(function ($) {
    $('.box-title .close').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show');
        $('.user-list01 li.show-box').removeClass('current');
    });

    $('.video-close .close').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show');
    });
    //close msg popup
    $('.center-msg-box .modal-footer .btn').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show').hide();
    });
    $('.center-msg-box01 .modal-footer .btn').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show').hide();
    });

    //back button function
    $('.back-btn span').on('click', function (event) {
        $(this).parent().closest('div.footer-links').removeClass('show').hide();
        $(this).parent().closest('div.footer-links01').removeClass('show').hide();
        $(this).parent().closest('div.header-popup').removeClass('show').hide();
        $('.user-list-dropdown').removeClass('show');
        $('.user-list02.show-box').removeClass('current');
        CloseUserList();
        changeInput();
    });
})(jQuery);


function openReceiveUpgradePopup(popupId) {
    //console.log(popupId);
    $('#' + popupId).addClass('show');
    //$('#' + popupId + ' .mCSB_container').css('top', '99999px');
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    $('#' + popupId).css('top', height / 2).css('left', width / 2).css('z-index', allZindex).addClass('transform');
    setOtherModelZIndex(popupId);
    CloseUserList();
}


function setOtherModelZIndex(popupId) {
    $(".footer-links.show").each(function () {
        if (this.id != popupId) {
            var c = $(this).css("z-index") - 1;
            console.log(c);
            console.log($(this).css("z-index"));
            $(this).css('z-index', c);
        }
    });
}

//on resize more menu hide in desktop
jQuery(window).resize(function () {
    var width = jQuery(window).width();
    if (width > 768) {
        jQuery('#moremenu-popup').hide();
        jQuery('.drag').addClass('draggable');
        //chenge notification popup on resize
        $('#notification-popup').hide();
        $('.mobile-drag').removeClass('box-title');
        $('.group-convesat-area').addClass('active');
        $('.group-conversation-block').addClass('show');
        $('.gicons-rounded').addClass('hide');

    }
    if (width < 768) {
        jQuery('.drag').removeClass('draggable');
        $('.mobile-drag').addClass('box-title');
        $('.group-convesat-area').removeClass('active');
        $('.group-conversation-block').removeClass('show');
        $('.gicons-rounded').removeClass('hide');
    }
    var viewPortWidth = jQuery(window).width();
    var height = jQuery(window).height();
    if (viewPortWidth > 768) {
        $('.footer-links').css('top', height / 2).css('left', width / 2).addClass('transform');
    }
    else {
        $('.footer-links').css('top', 0).css('left', 0).removeClass('transform');
    }

    //header popup position set on resize
    //var offset01 = $('.icons-rounded.active-menu').offset();
    //var boxwidth01 = $('.header-popup.show').width();
    //$('.header-popup.show').css('top', offset01.top + 30).css('left', offset01.left - boxwidth01 + 50);

    var offset = $('.user-list li.show-box').offset();
    var boxwidth = $('.width-count').width();
    $('.user-list .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
    $('.user-list-dropdown').css('top', offset.top).css('left', offset.left - boxwidth - 10);


    //VideoMobileDraggable();
    ScrollInit();
    DataTableResponsive();
    RechargeDataTableResponsive();
    GiftinDataTableResponsive();
    GiftoutDataTableResponsive();
    UpgradeDataTableResponsive();
    ChatPopupOpen();
    Tooltips();
    //MobFullDisplay();
    ResizeMobFullDisplay()
});


//paggination function
(function ($) {
    $('#default-gift li a[href^="#"] ').on('click', function (event) {
        $('#default').children('.pagination-container').hide();
        $('#default-gift li a').removeClass('theme-bg');
        $('#default-gift li').removeClass('active');
        $(this).addClass('theme-bg');
        $(this).parent('ul.pagination li').addClass('active');
        var target = $(this).attr('href');
        $('#default').children('.pagination-container' + target).show();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });

    $('#jewelry-gift li a[href^="#"] ').on('click', function (event) {
        $('#jewelry').children('.pagination-container').hide();
        $('#jewelry-gift li a').removeClass('theme-bg');
        $('#jewelry-gift li').removeClass('active');
        $(this).addClass('theme-bg');
        $(this).parent('ul.pagination li').addClass('active');
        var target = $(this).attr('href');
        $('#jewelry').children('.pagination-container' + target).show();
    });
    $('#luxurious-gift li a[href^="#"] ').on('click', function (event) {
        $('#luxurious').children('.pagination-container').hide();
        $('#luxurious-gift li a').removeClass('theme-bg');
        $('#luxurious-gift li').removeClass('active');
        $(this).addClass('theme-bg');
        $(this).parent('ul.pagination li').addClass('active');
        var target = $(this).attr('href');
        $('#luxurious').children('.pagination-container' + target).show();
    });

})(jQuery);

(function ($) {
    $('.search-menu').on('click', function (event) {
        var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 768) {
            $(this).addClass('show');
            $(this).next.hasClass('dropdown-menu').addClass('show');
        }
    });
})(jQuery);

//on sidebar dropdown menu click open full popup
function MobFullDisplay(popupId) {
    if ($(this).width() < 768) {
        $('#' + popupId).parent().addClass('full-popup');
        $('#' + popupId).parent().addClass('show');
        CloseUserList();
    }
    else {
        $('#' + popupId).parent().removeClass('full-popup');
        $('#' + popupId).parent().removeClass('show');
    }
    if ($('.main-menu-box').hasClass('show')) {
        $('.main-menu-box').removeClass('show')
    }
}

//on sidebar dropdown menu resize open full popup
function ResizeMobFullDisplay() {

    if ($('.view-profile-dropdown').hasClass('show')) {
        $('.user-list-dropdown').addClass('full-popup');
    }
    else {
        $('.user-list-dropdown').removeClass('full-popup');
    }
}


(function ($) {
    $('.back-close-btn span').on('click', function (event) {
        $(this).parent().closest('span.user-list-dropdown').removeClass('show').removeClass('full-popup');
        CloseUserList();
        $('.mob-user-menu').removeClass('current');
    });
})(jQuery);

//user menu click close user list
function CloseUserList() {
    $('.mobile-user-list').removeClass('show');
    $('.mob-header-btn').removeClass('active');
    $('.user-list li.show-box').removeClass('current');

}


function OpenRealPopup() {
    $('.dropdown-open.show-box').removeClass('current');
    $('.user-list-dropdown').addClass('mob-center-box');
    MobFullDisplay();
    CloseUserList();
}
(function ($) {
    $('.user-btn').on('click', function (event) {
        $('.user-list-dropdown').removeClass('mob-center-box');
    });
})(jQuery);


//received gift paggination
(function ($) {
    $('#received-gift li a[href^="#"] ').on('click', function (event) {
        $('#profile-gift').children('.pagination-container').hide();
        $('#received-gift li a').removeClass('theme-bg');
        $('#received-gift li').removeClass('active');
        $(this).addClass('theme-bg');
        $(this).parent('ul.pagination li').addClass('active');
        var target = $(this).attr('href');
        $('#profile-gift').children('.pagination-container' + target).show();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });
})(jQuery);


//view more menu open
function ViewMoreMenu() {
    $('.view-profile-dropdown').removeClass('show');
    $('.main-menu-box').addClass('show');
    $('.user-list-dropdown').css('top', userListTop).css('left', userListLeft);
    $('.user-list li.show-box').addClass('current');
}

//on mobile right left arrow hidden
(function ($) {
    $('.profile-pics .dropdown-open').on('click', function (event) {
        var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 768) {
            $('.profile-pics .dropdown-open.show-box').removeClass('current');

        } else {
            $('.profile-pics .dropdown-open.show-box').addClass('current');
        }
    });
})(jQuery);

//cancel btn function
function CancleBtn() {
    $('.menu-content-block').parent().closest('span.submenu').removeClass('show');
    $('.user-list li.show-box').removeClass('current');
    $('.user-list-dropdown').removeClass('show');
}
//cancel btn click function
(function ($) {
    $('.cancel-btn').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show');
    });
})(jQuery);


//json create table dynamic

function DataTableWidth(id) {
    if (id == 'list-ban-tab') {
        $('.banmanagment-model').addClass('xlg-popup');
    } else {
        $('.banmanagment-model').removeClass('xlg-popup');
    }
}

//usermore menubtn click function
(function ($) {
    $('.user-more-menu .dropdown-toggle').on('click', function () {
        $('.user-list li').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.user-list-dropdown').removeClass('show');
        $('.user-list li').removeClass('show-box');
        $('.sidebar-status-menu').removeClass('show');
        $('.sidebar-status-dropdown').removeClass('current');
    });
})(jQuery);


//tooltip function
function Tooltips() {
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth > 768) {
        $(document).tooltip({
            show: { effect: "", duration: 0 },
            hide: { effect: "", duration: 0 },
            position: {
                my: "center bottom-16",
                at: "center top",
                using: function (position, feedback) {
                    $(this).css(position);
                    $("<div>")
                        .addClass("arrow")
                        .addClass(feedback.vertical)
                        .addClass(feedback.horizontal)
                        .appendTo(this);
                }
            }
        });
    } else {
        $(document).tooltip();

        $(document).tooltip("destroy");

    }
}

//
function OpenHeaderPopup(popupId, menuId) {
    $('.header-popup').removeClass('show')
    $('#' + menuId).addClass('active-menu');
    $('#' + popupId).addClass('show');
    var offset = $('#' + menuId).offset();
    var boxwidth = $('#' + popupId).width();
    $('#' + popupId).css('top', offset.top + 30).css('left', offset.left - boxwidth + 50);
    setOtherModelZIndex(popupId);
    CloseUserList();
}

//overlay show function
(function ($) {
    $('.login-register a').on('click', function () {
        setTimeout(function () {
            var viewPortWidth = jQuery(window).width();
            if (viewPortWidth < 768) {
                $('.login-mob-bg').addClass('show');
            } else {
                $('.modal-backdrop').addClass('show-overlay');
            }
        }, 0);
    });
})(jQuery);


(function ($) {
    $('.search-menu').on('click', function (event) {
        var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 768) {
            $(this).addClass('show');
            $(this).next.hasClass('dropdown-menu').addClass('show');
        }
    });
})(jQuery);



(function ($) {
    $('.guest-login-btn').on('click', function () {
        if ($('.guest-login-btn').hasClass('deactive')) {
            $('.guest-form').addClass('show');
            $('.login-form').removeClass('show');
            $('.guest-login-btn').removeClass('deactive');
        } else {
            $('.guest-form').removeClass('show');
            $('.login-form').addClass('show');
            $('.guest-login-btn').addClass('deactive');
        }
    });
})(jQuery);

//login popup close function
(function ($) {
    $('.login-back').on('click', function () {
        $('.login-register').removeClass('show').hide();
        $('.login-mob-bg').removeClass('show');
    });
    $('.login-mob-bg').on('click', function (event) {
        var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 768) {
            $('.login-mob-bg').removeClass('show');
            $('.login-register').removeClass('show')
        }
    });
})(jQuery);


//login popup function

function openLoginRregisterPopup(popupId) {
    $('#' + popupId).addClass('show');
    $('.login-mob-bg').addClass('show');
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    $('#' + popupId).css('top', height / 2).css('left', width / 2).css('z-index', allZindex).addClass('transform');
    setOtherModelZIndex(popupId);
    CloseUserList();
}

function MininizePopup(id) {
    $('#' + id).toggleClass('minimize');

    //setTimeout(function () {
    //var offset = $('.height-match').offset();
    //var height = $('.height-match').height();
    //var dheight = $(window).height();
    //var totalHeight = height + offset.top;
    //var diff = totalHeight - dheight;
    //userListLeft = offset.left - boxwidth - 10;
    //userListTop = offset.top;
    //if (diff > 0) {
    //    $('#' + id).css('top', offset.top - diff - 20);
    //    userListTop = offset.top - diff - 20;
    //    }
    //},200)
}

//private videochat hideshow
(function ($) {
    $('.videocall-window').on('click', function () {
        $('.private-msg-block').toggleClass('active');
        $('.private-call-block').toggleClass('show');
        $('.ficons-rounded').toggleClass('hide');
        $('.privatechat-model').toggleClass('lg-window');
        $(this).toggleClass('active');
    });
})(jQuery);

//(function ($) {
//    $('.groupconversation-window').on('click', function () {
//        $('.group-convesat-area').toggleClass('active');
//        $('.group-conversation-block').toggleClass('show');
//        $('.gicons-rounded').toggleClass('hide');
//        $(this).toggleClass('active');
//    });
//})(jQuery);

//chat more menu function
(function ($) {
    $('.chat-menu-block').on('click', function (event) {
        if ($(event.target).hasClass('call-popup')) {
            CallPopup(event.target.parentElement.hash);
        } else {
            $('.chat-dropdown-menu').show();
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            $('.chat-menu-block').removeClass('current');
            $('.dropdown-open').removeClass('current');
            $('.chat-menu-block').removeClass('show-box');
            $('.sidebar-status-dropdown').removeClass('current');
            $('.sidebar-status-menu').removeClass('show');
            $(this).addClass('show-box');
            $(this).addClass('current');
            var offset = $(this).offset();
            var boxwidth = $('.width-count').width();
            $('.chat-menu-block .arrow-right-caret').css('top', offset.top + 5).css('left', offset.left - 10);
            $('.chat-dropdown-menu').addClass('show').css('top', offset.top - 10).css('left', offset.left - boxwidth - 35);
            var height = $('.chat-dropdown-menu').height();
            var dheight = $('openchat-list').height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            userListLeft = offset.left - boxwidth - 10;
            userListTop = offset.top;
            if (diff > 0) {
                $('.chat-dropdown-menu').css('top', offset.top - diff - 20);
                userListTop = offset.top - diff - 20;
            }
        }
    });
})(jQuery);




$('body').on('click', function (e) {
    if (!$(e.target.parentElement).hasClass('target-menu') && !$(e.target).hasClass('target-menu')) {
        $('.header-popup').removeClass('show');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block').removeClass('current');
        
    }
    //console.log(e);
});

//private chat more menu
$('.mob-user-menu').on('click', function (event) {
    if ($(event.target).hasClass('call-popup')) {
        CallPopup(event.target.parentElement.hash);
    } else {
        $('.main-menu-box').show();
        $('.submenu').removeClass('show');
        $('.user-list-dropdown').removeClass('mob-center-box');
        $('.user-list-dropdown ').removeClass('chat-name')
        $('.mob-user-menu.show-box').addClass('current');
        $('.user-list01 li.show-box').removeClass('current');
        $('.chat-line .dropdown-open.show-box').removeClass('current');
        $('.profile-pics .dropdown-open.show-box').removeClass('current');
        $('.header-popup').removeClass('show');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');
        $('.mob-user-menu').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.mob-user-menu').removeClass('show-box');
        $('.sidebar-status-dropdown').removeClass('current');
        $('.sidebar-status-menu').removeClass('show');
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.mob-user-menu .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
        $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left - boxwidth - 10);
        var height = $('.user-list-dropdown').height();
        var dheight = $(window).height();
        var totalHeight = height + offset.top;
        var diff = totalHeight - dheight;
        userListLeft = offset.left - boxwidth - 10;
        userListTop = offset.top;
        if (diff > 0) {
            $('.user-list-dropdown').css('top', offset.top - diff - 20);
            userListTop = offset.top - diff - 20;
        }
    }
});

//group conversation more menu
(function ($) {
    $('.user-list01 li').on('click', function (event) {
        if ($(event.target).hasClass('call-popup')) {
            CallPopup(event.target.parentElement.hash);
        } else {
            $('.main-menu-box').show();
            $('.submenu').removeClass('show');
            $('.user-list-dropdown').removeClass('mob-center-box');
            $('.user-list-dropdown ').removeClass('chat-name')
            $('.user-list01 li.show-box').addClass('current');
            $('.chat-line .dropdown-open.show-box').removeClass('current');
            $('.profile-pics .dropdown-open.show-box').removeClass('current');
            $('.header-popup').removeClass('show');
            $('.chat-dropdown-menu').removeClass('show').hide();
            $('.chat-menu-block.show-box').removeClass('current');
            $('.user-list01 li').removeClass('current');
            $('.dropdown-open').removeClass('current');
            $('.user-list01 li').removeClass('show-box');
            $('.sidebar-status-dropdown').removeClass('current');
            $('.sidebar-status-menu').removeClass('show');
            $(this).addClass('show-box');
            $(this).addClass('current');
            var offset = $(this).offset();
            var boxwidth = $('.width-count').width();
            $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left - boxwidth - 10).removeClass('sidebar-dropdown').removeClass('profile-picture').removeClass('chat-name').addClass('groupconvesation-menu');
            var height = $('.user-list-dropdown').height();
            var dheight = $(window).height();
            var totalHeight = height + offset.top;
            var diff = totalHeight - dheight;
            userListLeft = offset.left - boxwidth - 10;
            userListTop = offset.top;
            if (diff > 0) {
                $('.user-list-dropdown').css('top', offset.top - diff - 20);
                userListTop = offset.top - diff - 20;
            }
        }
    });
})(jQuery);



//change input for chat-room, private chat, & group conversation
(function ($) {
    $('.input-change').on('click', function () {
        changeInput();
    });

})(jQuery);

function changeInput() {
    if ($('.privatechat-model').parent().hasClass('show')) {
        $('.private-chat-input').show();
        $('.main-chat-input').hide();
        $('.group-conversation-input').hide();
    } else if ($('.groupconversation-model').parent().hasClass('show')) {
        $('.private-chat-input').hide();
        $('.main-chat-input').hide();
        $('.group-conversation-input').show();
    } else {
        $('.private-chat-input').hide();
        $('.main-chat-input').show();
        $('.group-conversation-input').hide();
    }
}

//swipe to delete
$(function () {
    // prob a better way
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $('.swipeable .inner').each(function (e) {
            var snapper = new Snap({
                element: this,
                maxPosition: 280,
                minPosition: -280,
                disable: 'left'
            });
        });

        $('.delete').on('click', function (e) {
            $(this).parent().parent().slideToggle(100);
        });
    }
});






//added 30-05-2019

//scroll bottom to top
$(function () {
    // prob a better way
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        //var objDiv = document.getElementsByClassName("tab-pane");
        //objDiv.scrollTop = objDiv.scrollHeight;
        //$('.tab-pane').scrollBottom($('.tab-pane')[0].scrollHeight);
        //var myDiv = document.getElementById("room1");
        //myDiv.scrollTop = myDiv.scrollHeight;
        $('#room1').scrollTop($('#room1')[0].scrollHeight);
    }
});

$('.mobmore-menu .dropdown-menu .btn').on('click', function (event) {
    $('.btn-default').removeClass('active');
    $(this).addClass('active');

    event.stopPropagation();
});


//added on 1-6-2019
$(function () {

    $('.voice-call').on('click', function () {
        $('.voice-calling').removeClass('hide');
        $('.video-calling').addClass('hide');
    });
    $('.video-call').on('click', function (event) {
        $('.voice-calling').addClass('hide');
        $('.video-calling').removeClass('hide');
    });

    $('.group-video-call').on('click', function (event) {
        $('.mob-video-container').addClass('show');
        $('#groupconversation-popup').addClass('height');
        $('#groupconversation-popup').removeClass('height');
    });

    $('.calling-full-screen').on('click', function (event) {
        $(this).parent().parent().addClass('full-view');
        $('#privatechat-popup').addClass('height-100');
        $('.full-box-option').removeClass('hide');
        $('.video-options').hide();
        $(this).hide();
        $('.calling-back').removeClass('hide-back-btn');
    });

    $('.calling-back span').on('click', function (event) {
        $('.full-box-option').addClass('hide');
        $('.voice-calling').removeClass('full-view');
        $('.video-calling').removeClass('full-view');
        $('#privatechat-popup').removeClass('height-100');
        $('.calling-full-screen').show();
        $('.calling-back').addClass('hide-back-btn');
        $('.video-options').show();
        $('.voice-calling').addClass('hide');
        $('.video-calling').addClass('hide');
    });
});


//change background color
$(function () {
    if (localStorage) {
        $(document).ready(function () {
            $('#bcPicker1').bcPicker();
            $('.bcPicker-palette').on('click', '.bcPicker-color', function () {
                var color = $(this).css('background-color');
                localStorage.setItem("bg_color", color);
                $('.bcPicker-palette').hide();
                $('body').css('background', localStorage.getItem("bg_color"));
                $('.bcPicker-picker').css('background-color', localStorage.getItem("bg_color"));
                $(this).parent().parent().next().children().text(localStorage.getItem("bg_color"));
                $(this).parent().parent().next().next().children().text(localStorage.getItem("bg_color"));
            })
            $('.bcPicker-picker').css('background-color', localStorage.getItem("bg_color"));
            $('body').css('background', localStorage.getItem("bg_color"));
        });
    } else {
    }


});


//added on 14-06-2019
$(function () {
    $('.notific-top').on('click', function () {
        $('#notification-popup').css('z-index','999');
    }); 
});
$(function () {
    $('.openchat-list-box').on('click', function () {
        $('#openchat-popup').css('z-index', '999');
    });
});
