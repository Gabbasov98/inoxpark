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
        $(this).addClass("mouseIn")
    })
    $(".main__marker").mouseleave(function() {
        $(this).removeClass("mouseIn")
    })

    let markers = $(".main__marker").length
    let currentMarker = $(".main__info--active .main__marker")
    let currentMarkerId = +$(currentMarker).attr("data-info")
    // $(`.main__inner`).removeClass("main__inner--active")
    $(`.main__inner[data-info="${currentMarkerId}"]`).addClass("main__inner--active")

    if (markers > 0) { changeActiveMarker() }

    function changeActiveMarker() {

        setInterval(() => {
            let activeMarker
            let mouseIn = $(`.main__marker`).hasClass("mouseIn")
            if (!mouseIn) {
                if (currentMarkerId === markers) {
                    activeMarker = $(`.main__marker[data-info="1"]`)
                    currentMarkerId = 1
                } else {
                    activeMarker = $(`.main__marker[data-info="${currentMarkerId + 1}"]`)
                    currentMarkerId++
                }
                setActiveMarker(activeMarker)
            }

        }, 2000);


    }

    $(".main__marker").mouseover(function() {
        setActiveMarker(this)
    })



    function setActiveMarker(el) {
        let elId = $(el).attr("data-info")
        currentMarker = +elId
        $(`.main__img`).removeClass("main__img--active")
        $(`.main__img[data-info="${elId}"]`).addClass("main__img--active")
        $(".main__info").removeClass("main__info--active")
        $(el).parents(".main__info").addClass("main__info--active")
        $(`.main__inner`).removeClass("main__inner--active")
        $(`.main__inner[data-info="${elId}"]`).addClass("main__inner--active")
    }
})
