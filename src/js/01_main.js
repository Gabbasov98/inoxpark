$(document).ready(function() {

    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    $(".select").niceSelect()
    if (window.innerWidth > 768) {
        $(".order__items-wrap").mCustomScrollbar()
    }

    cartCalc()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header-bottom").toggleClass("header-bottom--active")
    })


    $('.video').parent().click(function() {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
            $(this).children(".video-wrap__badge").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
            // $(this).children(".video-wrap__badge").fadeIn();
        }
    });

    $(".qa-card__btn").click(function() {
        $(this).parents(".qa-card").toggleClass("qa-card--active")
        $(this).parents(".qa-card").find(".qa-card__hidden").slideToggle()
    })

    $(".tab").click(function() {
        let parent = $(this).parents(".tab-parent")
        let path = $(this).attr("data-tabs-path")
        $(parent).find(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(parent).find(".tab__content").removeClass("tab__content--active")
        $(parent).find(`.tab__content[data-tabs-path="${path}"]`).addClass("tab__content--active")
    })
});

function cartCalc() {
    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}