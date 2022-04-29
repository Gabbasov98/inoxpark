function historySlider(activeSlide = 0) {
    var swiper = new Swiper('.history .swiper-container', {
        slidesPerView: 12,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.history .swiper-button-next',
            prevEl: '.history .swiper-button-prev',
        },
    })
    swiper.slideTo(activeSlide)
    console.log(swiper.slides)
}

$(document).ready(function() {

    // historySlider()

    let yearsCount = $(".history__years-item").length
    let yearWidth = $(".history__years-item").innerWidth()
    let firstYear = +$(".history__years-item:first-child").attr("data-year")
    let lastYear = +$(".history__years-item:last-child").attr("data-year")


    // console.log(yearsCount, yearWidth, firstYear, lastYear)

    $(".history__years-range input").css("width", `${yearsCount*(yearWidth )}px`)
    $(".history__years-range input").attr("min", firstYear)
    $(".history__years-range input").attr("max", lastYear)

    $(".history__years-range input").on("input", function() {
        let val = +$(this).val()
            // console.log(val)
        setYear(val)
    })

    $(".history__years-next").click(function() {
        let pos = $('.history__years-items').scrollLeft() + yearWidth;
        let currentYear = +$(".history__years-range input").val()

        if (currentYear < lastYear) {
            $('.history__years-items').scrollLeft(pos);
            $('.history__years-range-inner').scrollLeft(pos);
            $(".history__years-range input").val(currentYear + 1)
            setYear(currentYear + 1)
        }
    })
    $(".history__years-prev").click(function() {
        let pos = $('.history__years-items').scrollLeft() - yearWidth;
        let currentYear = +$(".history__years-range input").val()


        if (currentYear > firstYear) {
            $('.history__years-items').scrollLeft(pos);
            $('.history__years-range-inner').scrollLeft(pos);
            $(".history__years-range input").val(currentYear - 1)
            setYear(currentYear - 1)
        }

    })


    function setYear(currentYear) {
        $(".history__years-info-item").removeClass("history__years-info-item--active")
        $(`.history__years-info-item[data-year="${currentYear}"]`).addClass("history__years-info-item--active")
    }
})