function whySlider() {
    var swiper = new Swiper('.why .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: '.why .swiper-button-next',
            prevEl: '.why .swiper-button-prev',
        },
    })
}

function teamSlider() {
    var swiper = new Swiper('.team .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    })
}

function partnersSlider() {
    var swiper = new Swiper('.partners .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        }
    })
}


$(document).ready(function() {
    whySlider()
    teamSlider()
    partnersSlider()


    $(".main__marker").mouseover(function() {

        setActiveMarker(this)

    })

    let markers = $(".main__marker").length

    console.log(markers);

    function changeActiveMarker() {
        let currentMarker = 1


        setInterval(() => {
            let activeMarker
            if (currentMarker === markers) {
                activeMarker = $(`.main__marker[data-info="1"]`)
                currentMarker = 1
            } else {
                activeMarker = $(`.main__marker[data-info="${currentMarker + 1}"]`)
                currentMarker++
            }
            console.log(currentMarker);
            setActiveMarker(activeMarker)
        }, 2000);
    }


    changeActiveMarker()

    function setActiveMarker(el) {
        let elId = $(el).attr("data-info")
        $(`.main__img`).removeClass("main__img--active")
        $(`.main__img[data-info="${elId}"]`).addClass("main__img--active")
        $(".main__info").removeClass("main__info--active")
        $(el).parents(".main__info").addClass("main__info--active")
    }
})