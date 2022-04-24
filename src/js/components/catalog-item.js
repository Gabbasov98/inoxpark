function gallery() {
    var swiper = new Swiper(".catalog-gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
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

$(document).ready(function() {
    gallery()
    productGallerySlider()
    productsSlider()

    $("[data-video-src]").click(function() {
        let videoSrc = $(this).attr("data-video-src")
        console.log($("#myVideo source"))

        $("#myVideo source").attr("src", videoSrc)
    })

    $(".catalog-item__favourite").click(function() {
        $(this).toggleClass("catalog-item__favourite--active")
    })
})