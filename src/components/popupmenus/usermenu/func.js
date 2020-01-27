import $ from 'jquery';
var allZindex = 999;

function setOtherModelZIndex(popupId) {
    $(".footer-links.show").each(function () {
        if (this.id !== popupId) {
            var c = $(this).css("z-index") - 1;
            if (c < 1) {
                c = 1;

            }
            $(this).css('z-index', c);
        }
    });
}
function CloseUserList() {
    $('.mobile-user-list').removeClass('show');
    $('.mob-header-btn').removeClass('active');
    $('.user-list li.show-box').removeClass('current');
}
export function openReceiveUpgradePopup(popupId) {
console.log(popupId);
    if (popupId === 'upgrade-popup') {
        console.log('====11');
        // setTimeout(function () {
        //     //upgrade plans slider function
        //     $('#owl-plans').owlCarousel({
        //         loop: false,
        //         margin: 5,
        //         nav: true,

        //         dots: false,
        //         responsive: {
        //             0: {
        //                 items: 2,
        //                 margin: 20
        //             },
        //             600: {
        //                 items: 2,
        //                 margin: 20
        //             },
        //             1000: {
        //                 items: 3
        //             }
        //         }
        //     });
        // }, 200);
    }

    if (!$("#groupconversation-popup").hasClass("show")) {
        $('.group-chatscroll .mCSB_container').css('top', '9999px');
    }



    $('#' + popupId).addClass('show');

    var width = $(window).width();
    if (width < 768) {
        var myDiv = document.getElementsByClassName("privatechat-scroll")[0];
        myDiv.scrollTop = myDiv.scrollHeight;

        var myDiv1 = document.getElementsByClassName("group-chatscroll")[0];
        myDiv1.scrollTop = myDiv1.scrollHeight;
    }
    var height = $(window).height();
    $('#' + popupId).css('top', height / 2).css('left', width / 2).css('z-index', allZindex).addClass('transform');
    setOtherModelZIndex(popupId);
    CloseUserList();
    $('.show-box').removeClass('current');
    $('.mob-profile-window.show-box').removeClass('current');

}
