// let portfolioSlidersArray = []

// function projectsSliders() {
//     $(".projects__slider").each(function(index, el) {
//         $(el).attr("data-slider-id", `${index}`)
//         portfolioSlidersArray[index] = new Swiper(`.projects__slider[data-slider-id="${index}"] .swiper-container`, {
//             slidesPerView: "auto",
//             spaceBetween: 10,
//         })
//     })
// }



$(document).ready(function() {
    $(".select").niceSelect()
    cartCalc()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header-bottom").toggleClass("header-bottom--active")
    })


    $('.video').parent().click(function() {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
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