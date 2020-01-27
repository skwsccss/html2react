
var allZindex = 999;

var userListLeft = 0;
var userListTop = 0;

$(document).ready(function () {
    //added on 20-06-2019

    $('#profile-listData').DataTable({
        "dom": '<"top"p>',
        "pagingType": "full_numbers",
        "lengthMenu": [[7], [7]],
        "searching": false,
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

    $('.scroll-privatechat .mCSB_container').css('top', '9999px');
    $('.group-chatscroll .mCSB_container').css('top', '9999px');

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


    $('.user-list-dropdown .detail-close-btn').on('click', function () {
        $('.user-list-dropdown').removeClass('show');
        $('.big-profile-pics').removeClass('show');
        $('.profile-section ').removeClass('p-0');
        $('.mob-user-menu.show-box').removeClass('current');
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
    $(".mob-emojis-toggle").click(function (ev) {
        $(".mob-emojis-list").toggleClass("show");

        if (isiPhone()) {
            var offset = $(this).offset();
            var emojisBox = $('.mob-emojis-list').height();
            if ($('.chat-input, .private-chat-input .chat-input01, .group-conversation-input .chat-input01').hasClass('focused')) {
                $(".mob-emojis-list").css('top', offset.top - emojisBox - 150).css('left', offset.left - 10);
                $('.chat-input').removeClass('focused');
                $('.chat-input01').removeClass('focused');
            } else {
                $(".mob-emojis-list").css('top', offset.top - emojisBox - 100).css('left', offset.left - 10);
            }
        } else {

            if ($('.chat-input, .private-chat-input .chat-input01, .group-conversation-input .chat-input01').hasClass('focused')) {
                setTimeout(function () {
                    var offset = $(this).offset();
                    var emojisBox = $('.mob-emojis-list').height();
                    $(".mob-emojis-list").css('top', offset.top - emojisBox - 150).css('left', offset.left - 10);
                    $('.chat-input').removeClass('focused');
                    $('.chat-input01').removeClass('focused');
                }, 200);
            } else {
                var offset = $(this).offset();
                var emojisBox = $('.mob-emojis-list').height();
                $(".mob-emojis-list").css('top', offset.top - emojisBox - 100).css('left', offset.left - 10);
            }
        }
        return false;
    });

    $('mob-emojis-list')

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
            //$('.user-list-dropdown').css('top', offset.top - 50).css('left', offset.left + boxwidth - 10);
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
            //$('.user-list-dropdown').css('top', offset.top - 50).css('left', offset.left + boxwidth - 10);
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
        $('.footer-links01').removeClass('show');
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
        $('.footer-links01').removeClass('show');
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
        $('.footer-links01').removeClass('show')
        if ($(event.target).hasClass('call-popup')) {
            CallPopup(event.target.parentElement.hash);
        }
        else {
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

            var viewPortWidth = jQuery(window).width();
            if (viewPortWidth < 390) {
                $('.user-list-dropdown').css('left', '0');
            }

        }
    });


    //user reported profile usermenu popup
    $('.mob-profile-window').on('click', function (event) {
        $('.main-menu-box').show();
        $('.submenu').removeClass('show');
        $('.user-list-dropdown ').removeClass('chat-name');
        $('.mob-profile-window').addClass('current');
        $('.user-list01 li.show-box').removeClass('current');
        $('.chat-line .dropdown-open.show-box').removeClass('current');
        $('.profile-pics .dropdown-open.show-box').removeClass('current');
        $('.header-popup').removeClass('show');
        $('.user-list-dropdown').removeClass('mob-center-box');
        $('.chat-dropdown-menu').removeClass('show').hide();
        $('.chat-menu-block.show-box').removeClass('current');
        $('.mob-profile-window').removeClass('current');
        $('.dropdown-open').removeClass('current');
        $('.mob-profile-window').removeClass('show-box');
        $('.sidebar-status-dropdown').removeClass('current');
        $('.sidebar-status-menu').removeClass('show');
        $(this).addClass('show-box');
        $(this).addClass('current');
        var offset = $(this).offset();
        var boxwidth = $('.width-count').width();
        $('.mob-profile-window .arrow-right-caret').css('top', offset.top).css('left', offset.left - 10);
        $('.user-list-dropdown').addClass('show').css('top', offset.top - 10).css('left', offset.left - boxwidth - 10);
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
        $('.user-list-dropdown').addClass('show').css('top', offset.top).css('left', offset.left + 50).removeClass('sidebar-dropdown').removeClass('chat-dropdown').removeClass('chat-name').addClass('profile-picture').removeClass('groupconvesation-menu');
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
    $('.chat-line .dropdown-open').on('click', function (e) {
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
        $('.mob-profile-window.show-box').removeClass('current');
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

    $('#chatTab .nav-tabs a').click(function (event) {
        $(this).tab('show');
        if (!$(event.target).parent("li").hasClass('private-chat-tabs')) {
            $('#private-chatArea').removeClass('show').removeClass("active");
            $('#online-users').removeClass('max-privateChat');
            $('.max-callOption').removeClass('show');
        } else {
            $('#private-chatArea').addClass('show').addClass("active");
            $('#online-users').addClass('max-privateChat');
            $('.max-callOption').addClass('show');
        }


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
            //$('.main-wrapper').addClass('fixed-wrapper');
            //$('header').addClass('fixed-header');
            $('body').addClass('fixed-container');
            $('.modal01').css('position', 'fixed');
            //$('.page_container ').addClass('fixed-container');

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



    var viewPortHeight = jQuery(window).height();

    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $('#chatTab .tab-pane').css('height', viewPortHeight - 180);
        $('.mobile-user-list').css('height', viewPortHeight - 175);
        $('.mobile-user-list01').css('height', viewPortHeight - 115);
        $('.mobile-user-list .user-list').css('height', viewPortHeight - 240);
        $('.mobile-user-list01 .group-list-data').css('height', viewPortHeight - 180);
        $('.mobile-room-list').css('height', viewPortHeight - 175);
        // $('.mob-bottom-scroll').css("height", viewPortHeight - 180);
        //$("#chat-area .tab-pane").scrollTop($('#chat-area .tab-pane').height() + 500);
    } else {

    }

    //audio player function



    var viewPortWidth = jQuery(window).width();
    //if (viewPortWidth < 768) {
    //    $('.notification-list').removeClass('header-popup');
    //}

    DataTableResponsive();
    RechargeDataTableResponsive();
    profileFriendTableResponsive();
    GiftinDataTableResponsive();
    GiftoutDataTableResponsive();
    UpgradeDataTableResponsive();
    Tooltips();

    var chatListheight = jQuery(window).height();
    var iphoneChatListDiff = chatListheight - 115;
    var width = jQuery(window).width();
    if (width < 768) {
        $('.group-convesat-area').removeClass('active');
        $('.group-conversation-block').removeClass('show');
        $('.gicons-rounded').removeClass('hide');
        if (isiPhone()) {
            $('.openchat-list .openchat-scroll').css('height', iphoneChatListDiff);
        }

    } else {
        chatScrollHeight();
        notificationScrollHeight();
    }

    //mobile help toggle
    helpQuestions();
    emojisToggle();
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth <= 768) {

        var viewPortHeight = jQuery(window).height();
        //alert(viewPortHeight);
        $('.openchat-scroll').css('max-height', viewPortHeight - 57);
        //$('.notification-list .modal-body').css('max-height', viewPortHeight - 57);
        $('.openchat-list').css('height', viewPortHeight - 57);
        $('.notification-list').css('height', viewPortHeight - 57);
        $('.room-boxes-section').css('height', viewPortHeight - 200);
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
    $('#banlistdata-table').DataTable().destroy();
    if ($(this).width() > 768) {
        $('#banlistdata-table').DataTable({
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
        $('#banlistdata-table').DataTable({
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

function profileFriendTableResponsive() {
    //$('#profile-dataTable').DataTable().destroy();
    $('#profile-dataTable').DataTable().destroy();
    if ($(this).width() > 768) {
        $('#profile-dataTable').DataTable({
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
        $('#profile-dataTable').DataTable({
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
                    sNext: '<i class="next- "></i>',
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
            var optionType = $(this).attr("data-type");
            if (optionValue) {
                $(".box").not("." + optionValue).hide().removeClass('show');
                $("." + optionValue).show().addClass('show');
                $("#chat-area .tab-pane").scrollTop($('#chat-area .tab-pane').height() + 500);
                var myDiv = document.getElementById("room1");
                // myDiv.scrollTop = myDiv.scrollHeight;
                if (optionType) {
                    $('.user-list-scroll').addClass('visible-talk');
                    $('.mobile-user-list').addClass('talk-mode');
                    $('.mobile-user-list .user-list').css('height', viewPortHeight - 342);
                } else {
                    $('.user-list-scroll').removeClass('visible-talk');
                    $('.mobile-user-list').addClass('talk-mode');
                    $('.mobile-user-list .user-list').css('height', viewPortHeight - 240);
                }

            }
            else {
                $(".box").hide().removeClass('show');
                $('.user-list-scroll').removeClass('visible-talk');
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


        ScrollInit();



    });
})(jQuery);


function ScrollInit() {
    if ($(this).width() > 768) {
        $("#chat-area .tab-pane").mCustomScrollbar({
            theme: "dark-3",
            setTop: "99999px",
            scrollInertia: 200,
            callbacks: {
                //onScrollStart: function () {
                //    $('.user-list-dropdown').removeClass('show');
                //    $('.dropdown-open.show-box').removeClass('current');
                //}
            }
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

        $(".notification-block").mCustomScrollbar({
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

        $(".group-chatscroll").mCustomScrollbar({
            theme: "dark-3",
            setTop: "99999px",
            scrollInertia: 200
        });

        //Friend list scrolling function
        $("#online-users .friend-listing ").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 200,
            callbacks: {
                whileScrolling: function () {
                    var getOfflineTitle = $('.calc-total-height').height();
                    var userListOffset = $('#online-users').offset();
                    //alert(getOfflineTitle);

                    //alert(userListOffset.top);
                    $('.online-ttl-fixed').css('top', userListOffset.top);
                    if (this.mcs.top <= - Number(getOfflineTitle)) {
                        $('.offline-ttl-fixed').addClass('fixed-offline');
                        $('.online-ttl-fixed').removeClass('fixed-online');
                        $('.offline-ttl-fixed').css('top', userListOffset.top);
                        $('.online-ttl-fixed').css('top', 0);
                        //alert('call');
                    } else {
                        $('.online-ttl-fixed').addClass('fixed-online');
                        $('.offline-ttl-fixed').removeClass('fixed-offline');
                        $('.offline-ttl-fixed').css('top', 0);
                    }
                    //$("#mcs-top").text(this.mcs.top);

                },
                //onScrollStart: function () {
                //     $('.user-list-dropdown').removeClass('show');
                //    $('.user-list li.show-box').removeClass('current');
                //}
            }
            //setTop: "9999px",
            //scrollInertia: 200
        });

        $("#online-users .scroll-listing").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 200,
            callbacks: {
                //onScrollStart: function () {
                //     $('.user-list-dropdown').removeClass('show');
                //    $('.user-list li.show-box').removeClass('current');
                //}
            }
            //setTop: "9999px",
            //scrollInertia: 200
        });

        $("#online-users .tab-pane  .room-listing").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 0,
            callbacks: {
            }
        });


        $(".user-reported-model tbody").mCustomScrollbar({
            theme: "dark-3",
            setTop: "0",
            scrollInertia: 200
        });

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
        $(".group-conversation-block .scroll-sec").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 50,
            callbacks: {
                onScrollStart: function () {
                    //alert("on svroll");
                    $('.user-list-dropdown').removeClass('show');
                    $('.user-list01 li.show-box').removeClass('current');
                }
            }
        });
        $(".curr-scroll").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 50
        });
        $(".room-boxes-section").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 100
        });


    } else {
        $("#chat-area .tab-pane").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".ignore-list").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".add-group-list").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".openchat-scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".notification-block").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".register-scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".scroll-privatechat").mCustomScrollbar("destroy"); //destroy scrollbar 
        $(".group-chatscroll").mCustomScrollbar("destroy"); //destroy scrollbar 
        //$("#chat-area .tab-pane").scrollTop($('#chat-area .tab-pane').height() + 500)
        $(".group-conversation-block").mCustomScrollbar("destroy");
        $(".curr-scroll").mCustomScrollbar("destroy");
        $(".room-boxes-section").mCustomScrollbar("destroy");


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
        if ($(".user-btn").hasClass('active')) {
            $(this).removeClass("active");
            $(".mobile-user-list").removeClass("show");
        } else {
            $(".mob-header-btn").removeClass("active");
            $(this).addClass("active");
            $(".mobile-user-list").addClass("show");
            $(".mobile-room-list").removeClass("show");
            $('.radio-box').removeClass('show');
            $('.avtar-info-box').removeClass('show');
            $('.status-dropdown').removeClass('show');
            $('#chatTab .tab-pane').css('overflow-y', 'hidden');
        }
    });

    $('.group-user-btn').on('click', function () {
        if ($(".group-user-btn").hasClass('active')) {
            $(this).removeClass("active");
            $(".group-user-list").removeClass("show");
        } else {
            $(".mob-header-btn").removeClass("active");
            $(this).addClass("active");
            $(".group-user-list").addClass("show");
            $(".mobile-room-list").removeClass("show");
            $('.radio-box').removeClass('show');
            $('.avtar-info-box').removeClass('show');
            $('.status-dropdown').removeClass('show');
            $('#chatTab .tab-pane').css('overflow-y', 'hidden');
        }
    });
    $('.userlist-close').on('click', function () {
        $(".mobile-user-list").removeClass("show");
        $(".mobile-user-list01").removeClass("show");
        $(".mob-header-btn").removeClass("active");
        $(".mob-header-btn").removeClass("active");
        $('#chatTab .tab-pane').css('overflow-y', 'auto');
    });

    //mob-header room btn
    $('.room-btn').on('click', function () {
        if ($(".room-btn").hasClass('active')) {
            $(this).removeClass("active");
            $(".mobile-room-list").removeClass("show");
        } else {
            $(".mob-header-btn").removeClass("active");
            $(this).addClass("active");
            $(".mobile-room-list").addClass("show");
            $(".mobile-user-list").removeClass("show");
            $('.radio-box').removeClass('show');
            $('.avtar-info-box').removeClass('show');
            $('.status-dropdown').removeClass('show');
            $('#chatTab .tab-pane').css('overflow-y', 'hidden');
        }


    });
    $('.roomlist-close').on('click', function () {
        $(".mobile-room-list").removeClass("show");
        $(".mob-header-btn").removeClass("active");
        $('#chatTab .tab-pane').css('overflow-y', 'auto');
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
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.status-dropdown').removeClass('show');
        } else {
            $(this).addClass('active');
            $(this).next('.status-dropdown').addClass('show');
            $('.radio-box').removeClass('show');
            $(".popup-box").removeClass("show");
            $(".user-btn").removeClass("active");
            $(".room-btn").removeClass("active");
        }
        e.stopPropagation();
    });
    $('.close-info').click(function () {
        $('.status-dropdown').removeClass('show');
    });
})(jQuery);


//mobile header radio player click functions
(function ($) {
    $('.radio-show .mob-header-btn').click(function () {
        if ($(".radio-show .mob-header-btn").hasClass('active')) {
            $('.radio-box').removeClass('show');
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('.radio-box').addClass('show');
            $('.status-dropdown').removeClass('show');
            $(".popup-box").removeClass("show");
            $(".user-btn").removeClass("active");
            $(".room-btn").removeClass("active");
        }
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
        $('.status-dropdown').removeClass('show');
        $('.profile-avtar').removeClass('active');
    });
})(jQuery);

// mobile bottom menu open
(function ($) {
    $('.footer-links').hide();
    $('.footer-links01').hide();

    //$('.footer-menu a[href^="#"]').on('click', function (event) {
    //    $('.footer-links').removeClass('show');
    //    $('.footer-links01').removeClass('show');
    //    $('.footer-links').hide();
    //    $('.footer-links01').hide();
    //    $('.mobile-user-list').removeClass('show');
    //    $('.mobile-room-list').removeClass('show');
    //    var target = $(this).attr('href');
    //    $('.footer-links' + target).toggle();
    //    $('.footer-links01' + target).toggle();
    //    $('.user-list-dropdown').removeClass('show');
    //    $('.user-list02.show-box').removeClass('current');
    //    changeInput();
    //});

    //added on 08-07-2019
    $(".footer-menu a").on("click", function (event) {
        var dataId = $(this).attr("data-id");
        $('.footer-links').removeClass('show');
        $('.footer-links01').removeClass('show');
        $('.footer-links').hide();
        $('.footer-links01').hide();
        $('.mobile-user-list').removeClass('show');
        $('.mobile-room-list').removeClass('show');
        var target = $(this).attr('data-id');
        $('.footer-links' + target).toggle();
        $('.footer-links01' + target).toggle();
        $('.user-list-dropdown').removeClass('show');
        $('.user-list02.show-box').removeClass('current');
        $('.scroll-privatechat').removeClass('chat-scrolling');
        //$('mob-footer').css('z-index','9');
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
        $('.footer-links' + target).addClass('show');
        $('.footer-links01' + target).addClass('show');
        $('.footer-links' + target).toggle();
        $('.footer-links01' + target).toggle();

    });
})(jQuery);

(function ($) {
    var viewPortHeight = window.innerHeight;
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $(".chat-input").focus(function () {
            $('.mob-top-header').addClass('show-header');
            $(this).addClass('focused');
            $('.footer-middle').addClass('hide');
            $('.mob-footer').addClass('change-height');
            $('#chatTab .tab-pane').addClass('chat-height');
            $('.chat-window').addClass('openkeyboard');
            $('#chatTab .tab-pane').css('height', viewPortHeight - 60);
            if ($(".mob-emojis-list").hasClass("show")) {
                $(".mob-emojis-list").removeClass("show");
            }
            setTimeout(function () {
                var myDiv = document.getElementsByClassName("mob-bottom-scroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                //scrollTop: $('mob-bottom-scroll').height();
            }, 1000);
        });

        $('.chat-input').blur(function () {
            $('.mob-top-header').removeClass('show-header');
            $('.footer-middle').removeClass('hide');
            $('.mob-footer').removeClass('change-height');
            $('.chat-window').removeClass('openkeyboard');
            $('#chatTab .tab-pane').removeClass('chat-height');
            $('#chatTab .tab-pane').css('height', viewPortHeight - 180);
            setTimeout(function () {
                var myDiv = document.getElementsByClassName("mob-bottom-scroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                $(this).removeClass('focused');
            }, 500);

        });
        $(".private-chat-input .chat-input01").focus(function () {
            $('.footer-middle').addClass('hide');
            $(this).addClass('focused');
            $('.mob-footer').addClass('change-height');
            if ($(".mob-emojis-list").hasClass("show")) {
                $(".mob-emojis-list").removeClass("show");
            }
            //$('#privatechat-popup').css('height', viewPortHeight - 60);
            $('#privatechat-popup').addClass('openkeyboard');
            setTimeout(function () {
                if (isiPhone()) {
                    //alert('call3');
                    //$('#privatechat-popup').css('height', viewPortHeight - 180);
                    if ($('.video-calling').hasClass('hide') && $('.voice-calling').hasClass('hide')) {
                        $('.privatechat-scroll').css('max-height', viewPortHeight - 130);
                    } else {
                        $('.privatechat-scroll').css('max-height', viewPortHeight - 375);
                    }
                }
                var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                $("html, body").animate({ scrollTop: $(document).height() });
            }, 1000);
        });
        $('.private-chat-input .chat-input01').blur(function () {
            $('.mob-top-header').removeClass('show-header');
            $('.footer-middle').removeClass('hide');
            $('.mob-footer').removeClass('change-height');
            $('#privatechat-popup').removeClass('openkeyboard');
            //$('#privatechat-popup').css('height', viewPortHeight - 115);

            setTimeout(function () {
                if (isiPhone()) {

                    if ($('.video-calling').hasClass('hide') && $('.voice-calling').hasClass('hide')) {
                        $('.privatechat-scroll').css('max-height', viewPortHeight - 130);
                    } else {
                        $('.privatechat-scroll').css('max-height', viewPortHeight - 410);
                    }
                }
                var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                $(this).removeClass('focused');
            }, 500);
        });

        $(".group-conversation-input .chat-input01").focus(function () {
            var videoheight = jQuery('.mob-video-container').height();
            $('.footer-middle').addClass('hide');
            if ($(".mob-emojis-list").hasClass("show")) {
                $(".mob-emojis-list").removeClass("show");
            }

            $(this).addClass('focused');
            $('.mob-footer').addClass('change-height');
            $('#groupconversation-popup').addClass('openkeyboard');
            //$('#groupconversation-popup').css('height', viewPortHeight - 60);
            setTimeout(function () {
                if (isiPhone()) {
                    if ($('.mob-video-container').hasClass('show')) {
                        $('.group-chatscroll').css('max-height', viewPortHeight - videoheight - 130);
                    } else {
                        $('.group-chatscroll').css('max-height', viewPortHeight - 130);
                    }
                }
                var myDiv = document.getElementsByClassName("group-chatscroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                $("html, body").animate({ scrollTop: $(document).height() });
            }, 1000);
        });

        $('.group-conversation-input .chat-input01').blur(function () {
            var videoheight = jQuery('.mob-video-container').height();
            $('.mob-top-header').removeClass('show-header');
            $('.footer-middle').removeClass('hide');
            $('.mob-footer').removeClass('change-height');
            $('#groupconversation-popup').removeClass('openkeyboard');
            //$('#groupconversation-popup').css('height', viewPortHeight - 115);
            setTimeout(function () {
                if (isiPhone()) {
                    if ($('.mob-video-container').hasClass('show')) {
                        $('.group-chatscroll').css('max-height', viewPortHeight - videoheight - 180);
                    } else {
                        $('.group-chatscroll').css('max-height', viewPortHeight - 180);
                    }
                }
                var myDiv = document.getElementsByClassName("group-chatscroll")[0];
                myDiv.scrollTop = myDiv.scrollHeight;
                $(this).removeClass('focused');
            }, 500);
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
        $('.user-list-dropdown').removeClass('show');
        var width = jQuery(window).width();
        var height = jQuery(window).height();
        $('.footer-links' + target).css('top', height / 2).css('left', width / 2).addClass('transform');
        if (!$("#privatechat-popup").hasClass("show")) {
            $('.scroll-privatechat .mCSB_container').css('top', '9999px');
        }
        $('.mob-profile-window.show-box').removeClass('current');
    });
})(jQuery);

(function ($) {
    $('.footer-links').hide();
    $('#view-profile a.open-popup[href^="#"]').on('click', function (event) {
        $('.footer-links').hide();
        var target = $(this).attr('href');
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
        $(target).css('top', height / 2).css('left', width / 2).addClass('transform');
    });
})(jQuery);



//popup btn click function
(function ($) {
    $('.footer-links').hide();
    $('.modal-btn-links a[href^="#"]').on('click', function (event) {
        var target = $(this).attr('href');
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
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
})(jQuery);



//popup btn click function
(function ($) {
    $('.footer-links').hide()
    $('.dropdown-menu a[href^="#"]').on('click', function (event) {
        $('.footer-links').hide()
        var target = $(this).attr('href');
        $('.footer-links' + target).addClass('show').css('z-index', '999');
    });
})(jQuery);


(function ($) {
    $('.box-title .close').on('click', function (event) {
        $(this).parent().closest('div.footer-links.show').removeClass('show');
        $('.user-list01 li.show-box').removeClass('current');
        $('.backdrop').removeClass('show');
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
        $('.backdrop').removeClass('show');
    });

    //back button function
    $('.back-btn span').on('click', function (event) {
        $(this).parent().closest('div.footer-links').removeClass('show').hide();
        $(this).parent().closest('div.footer-links01').removeClass('show').hide();
        $(this).parent().closest('div.header-popup').removeClass('show').hide();
        $('.user-list-dropdown').removeClass('show');
        $('.user-list02.show-box').removeClass('current');
        $('.scroll-privatechat').removeClass('chat-scrolling');
        $('.mobile-user-list01').removeClass('show');
        CloseUserList();
        changeInput();
        var myDiv = document.getElementsByClassName("mob-bottom-scroll")[0];
        myDiv.scrollTop = myDiv.scrollHeight;
        $('.footer-menu .menu-btns').removeClass('active');
        $('.room-footer-menu').find('.menu-btns').addClass('active');
        $('.backdrop').removeClass('show');
    });
})(jQuery);
//$('#list-ban-tab').on('click', function () {
//    DataTableResponsive();
//});

$('#changeavatar').click(() => {
    openReceiveUpgradePopup('change-avatar-popup');
})

$('#closeAllPopup').click(() => {
    $('.modal01').removeClass('show');
    var myDiv = document.getElementsByClassName("mob-bottom-scroll")[0];
    myDiv.scrollTop = myDiv.scrollHeight;
})

function openReceiveUpgradePopup(popupId) {
    if (popupId == 'groupconversation-popup') {
        setTimeout(function () {
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
                        items: 1
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        }, 200);
    }



    if (popupId == 'upgrade-popup') {
        setTimeout(function () {
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
        }, 200);
    }

    if (!$("#groupconversation-popup").hasClass("show")) {
        $('.group-chatscroll .mCSB_container').css('top', '9999px');
    }



    $('#' + popupId).addClass('show');

    var width = jQuery(window).width();
    if (width < 768) {
        var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
        myDiv.scrollTop = myDiv.scrollHeight;

        var myDiv1 = document.getElementsByClassName("group-chatscroll")[0];
        myDiv1.scrollTop = myDiv1.scrollHeight;
    }
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    $('#' + popupId).css('top', height / 2).css('left', width / 2).css('z-index', allZindex).addClass('transform');
    setOtherModelZIndex(popupId);
    CloseUserList();
    $('.show-box').removeClass('current');
    $('.mob-profile-window.show-box').removeClass('current');

}


function setOtherModelZIndex(popupId) {
    $(".footer-links.show").each(function () {
        if (this.id != popupId) {
            var c = $(this).css("z-index") - 1;
            if (c < 1) {
                c = 1;

            }
            $(this).css('z-index', c);
        }
    });
}

//on resize more menu hide in desktop
jQuery(window).resize(function () {
    var width = jQuery(window).width();
    var viewPortHeight = jQuery(window).height();
    if (width > 768) {
        jQuery('#moremenu-popup').hide();
        jQuery('.drag').addClass('draggable');
        //chenge notification popup on resize
        $('#notification-popup').hide();
        $('.mobile-drag').removeClass('box-title');
        $('.group-convesat-area').addClass('active');
        $('.group-conversation-block').addClass('show');
        $('.gicons-rounded').addClass('hide');
        //$('#chatTab .tab-pane').css('height', viewPortHeight - 230);
        $('#chatTab .tab-pane').addClass('main-chat-area');
        chatScrollHeight();
        notificationScrollHeight();

    }
    if (width <= 768) {
        jQuery('.drag').removeClass('draggable');
        $('.mobile-drag').addClass('box-title');
        $('.group-convesat-area').removeClass('active');
        $('.group-conversation-block').removeClass('show');
        $('.gicons-rounded').removeClass('hide');
        //added on 05-07-2019
        $('.private-msg-block').removeClass('active');
        $('.private-call-block').removeClass('show');
        $('.privatechat-model').removeClass('lg-window');
        $('#chatTab .tab-pane').removeClass('main-chat-area');
        groupchatScrollHeight();
        $('.mobile-user-list').css('height', viewPortHeight - 175);
        $('.mobile-user-list01').css('height', viewPortHeight - 57);
        //$('.group-user-list').css('height', viewPortHeight);
    }
    var viewPortWidth = jQuery(window).width();
    var height = jQuery(window).height();
    if (viewPortWidth > 768) {
        $('.footer-links').css('top', height / 2).css('left', width / 2).addClass('transform');
        $('#friends-popup').hide();
    }
    else {
        $('.footer-links').css('top', 0).css('left', 0).removeClass('transform');
    }


    useMenuResize();
    notificationResize();
    openChatResize();

    //VideoMobileDraggable();

    DataTableResponsive();
    RechargeDataTableResponsive();
    profileFriendTableResponsive();
    GiftinDataTableResponsive();
    GiftoutDataTableResponsive();
    UpgradeDataTableResponsive();
    //ChatPopupOpen();
    Tooltips();
    //MobFullDisplay();
    ScrollInit();
    ResizeMobFullDisplay();
    groupchatScrollHeight();
    //mobile help toggle
    //helpQuestions();
    emojisToggle();
});

//resize notification move
function notificationResize() {
    if ($('.notification-list').hasClass('show')) {
        var offset = $('#notification-menu').offset();
        var boxwidth = $('#notification-popup').width();
        $('#notification-popup').css('top', offset.top + 30).css('left', offset.left - boxwidth + 50);
    }
}
//openchat list move
function openChatResize() {
    if ($('.openchat-list').hasClass('show')) {
        var offset = $('#opencaht-menu').offset();
        var boxwidth = $('#openchat-popup').width();
        $('#openchat-popup').css('top', offset.top + 30).css('left', offset.left - boxwidth + 50);
    }
}

//resize sidebar move
function useMenuResize() {
    if ($('.user-list li.show-box').hasClass('current')) {
        var offset = $('.user-list li.show-box').offset();
        var boxwidth = $('.width-count').width();
        $('.user-list .arrow-right-caret').css('top', offset.top + 15).css('left', offset.left - 10);
        $('.user-list-dropdown').css('top', offset.top).css('left', offset.left - boxwidth - 10);
    } else {

    }
}

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
            //$(this).addClass('show');
            //$(this).next().hasClass('dropdown-menu').addClass('show');
            $(this).toggleClass('show');
            $(this).parent().find('dropdown-menu').toggleClass('show');
        }
    });
})(jQuery);



//on sidebar dropdown menu click open full popup
function MobFullDisplay(popupId) {
    if ($(this).width() <= 768) {
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
        $('.backdrop').removeClass('show');
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
    if ($('#notification-popup').hasClass('show')) {
        $('#notification-popup').removeClass('show');
        return
    }
    if ($('#openchat-popup').hasClass('show')) {
        $('#openchat-popup').removeClass('show');
        return
    }
    $('.footer-links01').removeClass('show');
    $('.header-popup').removeClass('show')
    $('#' + menuId).addClass('active-menu');
    $('#' + popupId).addClass('show');
    $('.dropdown-open.show-box ').removeClass('current');
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
    $('#' + id).children().find('.modal-content').toggleClass('minimize-active');
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

(function ($) {
    $('.maximize-privateChat').on('click', function () {
        $('.private-chat-toggle').addClass('show');
        $('.friend-list-tab  .private-call-block').addClass('show');
        $('.private-chat-tabs').addClass('show');
        $('.friend-list-tab  .tab-content').addClass('max-privateChat');
        $('.max-callOption').addClass('show');
        var target = $(this).attr('data-id');
        $('#' + target).removeClass('show');
        $('.nav-tabs li a').removeClass('show').removeClass('active');
        $('.private-chat-tabs a').addClass('show').addClass('active');
        var target01 = $('.private-chat-tabs a').attr('data-id');
        $('#chat-area .tab-pane').hide().removeClass('show');
        $('#' + target01).show().addClass('show').addClass('max-tabs').addClass('active');
        $('#private-chatArea .mCSB_container').css('top', '99999px');
    });

    $('.p-chat-close').on('click', function () {
        $(this).parent('li').removeClass('show');
        $('.max-callOption').removeClass('show');
        $('#online-users').removeClass('max-privateChat');
        $('#private-chatArea').removeClass('show').removeClass('active');
        $('.default-tab').addClass('active');
        $('.default-pane').addClass('active').addClass('show');
        $('.privatechat-scroll .mCSB_container').css('top', '99999px');
        var moveTabsWidth = $('.scrtabs-tabs-movable-container').width();
        $('.scrtabs-tabs-movable-container').css('width', moveTabsWidth - 130);
    });
    $('.p-chat-mini').on('click', function () {
        $(this).parent('li').removeClass('show');
        $('.max-callOption').removeClass('show');
        $('#online-users').removeClass('max-privateChat');
        $('#private-chatArea').removeClass('show').removeClass('active');
        $('.default-tab').addClass('active');
        $('.default-pane').addClass('active').addClass('show');
        $('.privatechat-scroll .mCSB_container').css('top', '99999px');
        var moveTabsWidth = $('.scrtabs-tabs-movable-container').width();
        $('.scrtabs-tabs-movable-container').css('width', moveTabsWidth - 130);
    });
})(jQuery);




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
});

//private chat more menu
$('.mob-user-menu').on('click', function (event) {
    if ($(event.target).hasClass('call-popup')) {
        CallPopup(event.target.parentElement.hash);
    } else {
        $('.user-list-dropdown').addClass('moredropdown');
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
        if ($('#room1').length > 0) {
            $('#room1').scrollTop($('#room1')[0].scrollHeight);
        }
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
        $('.scroll-privatechat').addClass('chat-scrolling');
        var viewHeight = jQuery(window).height();
        $('.privatechat-scroll').css('max-height', viewHeight - 425);
        if (isiPhone()) {
            $('.privatechat-scroll').css('max-height', viewPortHeight - 410);
        }
        var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
        myDiv.scrollTop = myDiv.scrollHeight;
    });
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $('.video-call').on('click', function (event) {
            $('.voice-calling').addClass('hide');
            $('.video-calling').removeClass('hide');
            $('.scroll-privatechat').addClass('chat-scrolling');
            var viewHeight = jQuery(window).height();
            $('.privatechat-scroll').css('max-height', viewHeight - 425);
            if (isiPhone()) {
                $('.privatechat-scroll').css('max-height', viewPortHeight - 410);
            }
            var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
            myDiv.scrollTop = myDiv.scrollHeight;
        });
    }

    $('.group-video-call').on('click', function (event) {
        $('.mob-video-container').addClass('show');
        $('#groupconversation-popup').addClass('height');
        $('#groupconversation-popup').removeClass('height');
        $('.scroll-privatechat').addClass('chat-scrolling');
        setTimeout(function () {
            groupchatScrollHeight();
            var myDiv = document.getElementsByClassName("group-chatscroll")[0];
            myDiv.scrollTop = myDiv.scrollHeight;
        }, 500);

        //$('.group-chatscroll').css('max-height', viewHeight - 425);
        var myDiv = document.getElementsByClassName("group-chatscroll")[0];
        myDiv.scrollTop = myDiv.scrollHeight;

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
        $('.privatechat-scroll').css('max-height', '100%');
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
    $('.openchat-list-box').on('click', function () {
        $('#openchat-popup').css('z-index', '999');
    });
});



//added on 05-07-2019
$(function () {


    $('.banlist-table tr').click(function (e) {
        //$('tr').removeClass('highlight');
        if ($(this).hasClass("selected-tr")) {
            $(this).removeClass('selected-tr');
        } else {
            $(this).addClass('selected-tr');
        }
    })
    $('.remove-selection').click(function (e) {
        //$('tr').removeClass('highlight');
        $('tr').removeClass('selected-tr');
    })
    $('.paginate_button').click(function () {
        $('.banlist-table tr').click(function () {
            //$('tr').removeClass('highlight');
            if ($(this).hasClass("selected-tr")) {
                $(this).removeClass('selected-tr');
            } else {
                $(this).addClass('selected-tr');
            }
        })
        $('.remove-selection').click(function () {
            //$('tr').removeClass('highlight');
            $('tr').removeClass('selected-tr');
        })
    })

});
//group conversation list hide show
$(function () {
    $('.groupconversation-window').click(function (e) {
        $('.group-convesat-area').toggleClass('active');
        $('.group-conversation-block').toggleClass('show');
        $(this).toggleClass('rotate-arrow');
    })
});



var width = jQuery(window).width();
if (width > 768) {
    $(function () {
        $('.minimize').click(function (e) {
            $(this).offsetParent().parents().toggleClass('resize');
        })
    });
}

//chat-scroll height set
function chatScrollHeight() {
    var height = jQuery(window).height();
    $('.openchat-scroll').css('max-height', height - 300);
}
function notificationScrollHeight() {
    var height = jQuery(window).height();
    $('.notification-block').css('max-height', height - 200);
}

$(function () {
    $('.background-process-hide').click(function (e) {
        $('.backdrop').addClass('show').css('background', 'rgba(0,0,0,0.3)');
    })
});

//profile pics large on click
$(function () {
    $('.click-picture').click(function (e) {
        $('.big-profile-pics').addClass('show');
        $(this).parent().parent().addClass('p-0');
    })
    $('.back-btn-pics ').click(function (e) {
        $('.big-profile-pics').removeClass('show');
        $('.profile-section ').removeClass('p-0');
        $('.dropdown-open.show-box').removeClass('current');
    })
});




function helpQuestions() {
    var contentwidth = jQuery(window).width();
    if (!$('#help-popup').hasClass('show')) {
        jQuery('.question-title span').append('<span class="float-right question-droparrow"><i class="right-arrow-ico"></i></span>');
        jQuery('.question-title').click(function () {
            jQuery('.question-title').removeClass('active');
            jQuery('.question-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.question-content').hide();
    }
}


function groupchatScrollHeight() {
    var width = jQuery(window).width();
    if (width <= 768) {
        var videoheight = jQuery('.mob-video-container').height();
        var groupheight = jQuery('#groupconversation-area').height();
        var diff = groupheight - videoheight;
        $('.group-chatscroll').css('max-height', diff - 5);
    } else {
        $('.group-chatscroll').css('max-height', '265px');
    }
}


$(function () {
    $('.icon-change').click(function () {
        $(this).toggleClass('active');
    })
});

$(function () {
    $('.lock-action').click(function () {
        $(this).toggleClass('active');
        $(this).parent().find('.voice-option').toggleClass('active');
    })
});
$(function () {
    $('.mic-action').click(function () {
        $(this).toggleClass('active');
    })
});

$(function () {
    $('.box-title').click(function () {
        $('.user-list-dropdown').removeClass('show');
        $('.sidebar-status-dropdown.show-box').removeClass('current');
        $('.dropdown-open.show-box').removeClass('current');
        $('.user-list li.show-box').removeClass('current');
        $('.user-list01 li.show-box').removeClass('current');
    })
});



//keyboard detect
function updateWindowSize() {
    window.lastInnerWidth = window.innerWidth;
    window.lastInnerHeight = window.innerHeight;
    window.lastOrientation = window.orientation;
    // Stays the same for iOS, so that's our ticket to detect iOS keyboard
    window.lastBodyHeight = document.body.clientHeight;
};

function detectKeyboard() {
    function orientationChange() {
        if (((window.lastOrientation == 0 || window.lastOrientation == 180) && (window.orientation == 0 || window.orientation == 180)) || ((window.lastOrientation == 90 || window.lastOrientation == -90) && (window.orientation == 90 || window.orientation == -90))) return false
        else return true;
    }

    // No orientation change, keyboard opening
    if ((window.lastInnerHeight - window.innerHeight > 150) && window.innerWidth == window.lastInnerWidth) {
        var keyboardHeight = window.lastInnerHeight - window.innerHeight;
        updateWindowSize();
        return keyboardHeight;
    }
    // Orientation change with keyboard already opened
    if (orientationChange() && document.body.classList.contains("keyboard-open")) {
        var keyboardHeight = screen.height - window.topBarHeight - window.innerHeight;
        updateWindowSize();
        return keyboardHeight;
    }

    // No orientation change, keyboard closing
    if ((window.innerHeight - window.lastInnerHeight > 150) && window.innerWidth == window.lastInnerWidth) {
        var keyboardHeight = -1;
        updateWindowSize();
        return keyboardHeight;

    }

    // Orientation change or regular resize, no keyboard action
    var keyboardHeight = 0;
    updateWindowSize();
    return keyboardHeight;
};

var viewPortHeight = $(window).height();
function keyboardShift(keyboardHeight) {
    if (!document.body.classList.contains("keyboard-open")) document.body.classList.add("keyboard-open");
    var remainingHeight = viewPortHeight - keyboardHeight - 70;
    var userListHeight = viewPortHeight - keyboardHeight - 175;
    var chatRemainingHeight = viewPortHeight - keyboardHeight - 130;
    $('.mob-bottom-scroll').css("height", remainingHeight + "px");
    $('.privatechat-scroll').css("height", chatRemainingHeight + "px");
    var videoheight = jQuery('.mob-video-container').height();
    if ($('.mob-video-container').hasClass('show')) {
        $('.group-chatscroll').css('max-height', chatRemainingHeight - videoheight);
    } else {
        $('.group-chatscroll').css("height", chatRemainingHeight + "px");
    }
    $('.mobile-user-list').css("height", userListHeight + "px");
    //document.body.setAttribute("style", "height: calc(100% + " + keyboardHeight + "px);");
};
function removeKeyboardShift() {
    document.body.classList.remove("keyboard-open");
    document.body.removeAttribute("style");
    $('.mob-bottom-scroll').css("height", viewPortHeight - 180);
    $('.privatechat-scroll').css("height", viewPortHeight - 115);
    $('.group-chatscroll').css("height", viewPortHeight - 115);
    $('.mobile-user-list').css("height", viewPortHeight - 175);
};
function isiPhone() {
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}

// OnStart innit
(function () {
    updateWindowSize();
    window.topBarHeight = screen.height - window.innerHeight;
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();
                // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
        }
    }

    function actualResizeHandler() {
        var keyboardHeight = detectKeyboard();
        if (keyboardHeight > 0) { keyboardShift(keyboardHeight); }
        else if (keyboardHeight == -1) { removeKeyboardShift(); }
    }
}());


$(window).resize(function () {
    window.currentHeight = $(this).height();
    window.heightDiff = window.height - window.currentHeight;
});


//room-page link  change without reload


    //private call options change
    (function ($) {
        $('.private-video-call').click(function () {
            $(this).parent().parent().find('.private-video').removeClass('hide');
            $(this).parent().parent().find('.private-audio-call').addClass('hide');
        });
        $('.private-voice-call').click(function () {
            $(this).parent().parent().find('.private-audio-call').removeClass('hide');
            $(this).parent().parent().find('.private-video').addClass('hide');
        });
    })(jQuery);

//on outside click close status menu
$(document).on("click", ".chat-window, .top-header, .friend-list-tab, .search-bar ", function () {
    if ($('.sidebar-status-menu').hasClass('show')) {
        $('.sidebar-status-menu').removeClass('show');
        $('.sidebar-status-dropdown.show-box').removeClass('current');
    }

});

//on outside click close emojis menu


function emojisToggle() {
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 768) {
        $(document).on("click", ".chat-window, .mob-top-header, .footer-middle, .input-area, .groupconversation-model, .privatechat-model", function (event) {
            if (!$(event.target).hasClass('nav-link') && !$(event.target).hasClass('img-fluid')) {
                if ($('.mob-emojis-list').hasClass('show')) {
                    $('.mob-emojis-list').removeClass('show');
                }
            }
        });
    } else {
        $(document).on("click", ".chat-window, .top-header, .sidebar", function (event) {
            if (!$(event.target).hasClass('nav-link') && !$(event.target).hasClass('img-fluid')) {
                if ($('.emojis-list').hasClass('show')) {
                    $('.emojis-list').removeClass('show');
                    $('.web-footer').removeClass('open-emojis');
                }
            }
        });
    }
}

//on outside click close usermenu
$(document).on("click", ".chat-window, .top-header, .user-tabline", function (event) {
    //console.log(event.target);
    if ($('.user-list-dropdown').hasClass('show') && !$(event.target).hasClass('b-user-pics') && !$(event.target).hasClass('b-user-name')) {
        $('.user-list-dropdown').removeClass('show');
        $('.user-list li.show-box').removeClass('current');
        $('.dropdown-open.show-box').removeClass('current');
    }
});



$(document).on("click", ".chat-window, .top-header, .user-tabline", function (event) {
    if (!$(event.target).hasClass('icons-rounded') && !$(event.target).hasClass('notification-ico')) {
        if ($('#notification-popup').hasClass('show')) {
            $('#notification-popup').removeClass('show');
        }
    }
});

//$('.notific-top').click(function (event) {
//    //console.log(event.target);
//    $('#notification-popup').addClass('show');
//});
$(function () {
    $('.notific-top').on('click', function () {
        $('#notification-popup').css('z-index', '999');
    });
});

var viewPortWidth = jQuery(window).width();
if (viewPortWidth <= 768) {
    $('.create-btn').click(function () {
        //alert('call');
        $('#create-group-popup').removeClass('show');

    });

    $('.hide-other-model').click(function () {
        $('#user-reported-popup').removeClass('show');
    });

} else {
    $('.emojis-toggle').click(function () {
        $('.web-footer').toggleClass('open-emojis');
    });

}


$(function () {
    $('.maximize-privateChat').on('click', function () {
        var moveTabsWidth = $('.scrtabs-tabs-movable-container').width();
        $('.scrtabs-tabs-movable-container').css('width', moveTabsWidth + 130);
    });
});


function mobileFriendPopup() {
    $('#friends-popup').removeClass('show');
}