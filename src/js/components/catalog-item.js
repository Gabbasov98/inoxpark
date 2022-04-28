function gallery() {
    var swiper = new Swiper(".catalog-gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        // mousewheel: true,
        mousewheel: {
            releaseOnEdges: true,
        },
        speed: 1000,
        scrollbar: {
            el: '.catalog-gallery .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                direction: "horizontal",
            },
            576: {
                slidesPerView: 5,
                direction: "vertical",
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });
    var swiper2 = new Swiper(".catalog-gallery .mySwiper2", {
        spaceBetween: 10,
        direction: "vertical",
        navigation: {
            nextEl: " .swiper-button-next",
            prevEl: " .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        breakpoints: {
            320: {
                direction: "horizontal",
            },
            576: {
                direction: "vertical",
            },
        }
    });
}

function productGallerySlider() {
    var swiper = new Swiper('.product-gallery .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-gallery .swiper-button-next',
            prevEl: '.product-gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    })
}

function productsSlider() {
    var swiper = new Swiper('.products .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.products .swiper-button-next',
            prevEl: '.products .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            630: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    })
}

let catalogsSlidersArray = []

function catalogsSliders() {
    $(".catalogs-slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        catalogsSlidersArray[index] = new Swiper(`.catalogs-slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: `.catalogs-slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.catalogs-slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
        })
    })
}

let projectSlidersArray = []

function projectSliders() {
    $(".projects-gallery__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        projectSlidersArray[index] = new Swiper(`.projects-gallery__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 30,
            // loop: true,
            navigation: {
                nextEl: `.projects-gallery__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.projects-gallery__slider[data-slider-id="${index}"] .swiper-button-prev`,
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
    })
}

let projectGalleryArray = []

function catalogsSliders() {
    $(".project-card2__gallery").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        small = new Swiper(`.project-card2__gallery[data-slider-id="${index}"] .mySwiper`, {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,

        })
        big = new Swiper(`.project-card2__gallery[data-slider-id="${index}"] .mySwiper2`, {
            slidesPerView: "auto",
            spaceBetween: 10,
            // loop: true,
            navigation: {
                nextEl: `.project-card2__gallery[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.project-card2__gallery[data-slider-id="${index}"] .swiper-button-prev`,
            },
            thumbs: {
                swiper: small,
            },
        })
        projectGalleryArray[index] = {
            small: small,
            big: big
        }
    })
}

let catalogGroupSlidersArray = []

function catalogGroupSliders() {
    $(".catalogs-group").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        catalogGroupSlidersArray[index] = new Swiper(`.catalogs-group[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1.5,
            spaceBetween: 30,
            // loop: true,
            navigation: {
                nextEl: `.catalogs-group[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.catalogs-group[data-slider-id="${index}"] .swiper-button-prev`,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 1.5,
                },
                800: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 1,
                },
                1100: {
                    slidesPerView: 1.3,
                },
                1250: {
                    slidesPerView: 1.5,
                },
            }
        })
    })
}




$(document).ready(function() {
    gallery()
    productGallerySlider()
    productsSlider()
    catalogsSliders()
    projectSliders()
    catalogsSliders()
    catalogGroupSliders()

    $("[data-video-src]").click(function() {
        let videoSrc = $(this).attr("data-video-src")
        console.log($("#myVideo source"))

        $("#myVideo source").attr("src", videoSrc)
    })

    $(".catalog-item__favourite").click(function() {
        $(this).toggleClass("catalog-item__favourite--active")
    })
})