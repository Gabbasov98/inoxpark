$(document).ready(function() {

    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    $(".select").niceSelect()
    if (window.innerWidth > 768) {
        $(".order__items-wrap").mCustomScrollbar()
    }
    $(".cart-modal__items").mCustomScrollbar()
    $(".cart__search-items").mCustomScrollbar()

    cartCalc()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header-bottom").toggleClass("header-bottom--active")
        $("body").toggleClass("fixed-body")
    })

    $(".header__btn--cart").click(function() {
        $("body").append(`<div class="cart-modal__bg"></div>`)
        $("body").addClass("fixed-body")
        $(".cart-modal").addClass("cart-modal--active")
        $(".cart-modal__bg").click(function() {
            closeCart()
        })
        $(".cart-modal__close").click(function() {
            closeCart()
        })
    })



    function closeCart() {
        $(".cart-modal__bg").remove()
        $("body").removeClass("fixed-body")
        $(".cart-modal").removeClass("cart-modal--active")
    }

    $(".header__search-btn").click(function() {
        $(".header-search").slideDown()
    })


    $(".header-search__input input").on("input", function() {
        let val = $(this).val()
        if (val) {
            $("body").append(`<div class="header-search__bg"></div>`)
            $(".header-search__result").addClass("header-search__result--active")
        } else {
            closeSearch()
        }

        $(".header-search__bg").click(function() {
            closeSearch()
        })

    })

    function closeSearch() {
        $(".header-search__bg").remove()
        $(".header-search__result").removeClass("header-search__result--active")
        $(".header-search__input input").val("")
    }

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

    $(".rating__item").click(function() {
        let ratingItem = parseInt($(this).attr("data-rating-value"))
        $(this).parent(".rating").attr("data-total-rating", ratingItem)
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