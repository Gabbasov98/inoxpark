function photoGallerySlider() {
    var swiper = new Swiper('.photo-gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.photo-gallery .swiper-button-next',
            prevEl: '.photo-gallery .swiper-button-prev',
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

function certificateSlider() {
    var swiper = new Swiper('.certificate .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.certificate .swiper-button-next',
            prevEl: '.certificate .swiper-button-prev',
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

function newsSlider() {
    var swiper = new Swiper('.news-gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.news-gallery .swiper-button-next',
            prevEl: '.news-gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
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



$(document).ready(function() {
    photoGallerySlider()
    certificateSlider()
    newsSlider()
})