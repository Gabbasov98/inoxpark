$(document).ready(function() {

    function animateNums(el) {
        let finish = +$(el).attr("data-last-num")
        var target_block = $(".advantages__items"); // Ищем блок 
        var blockStatus = true;

        $(window).scroll(function() {

            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

            if (scrollEvent && blockStatus) {

                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.


                $({ numberValue: 0 }).animate({ numberValue: finish }, {
                    duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                    easing: "linear",
                    step: function(val) {
                        $(el).html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });

            }

        });

    };


    $(".advantages__item-num").each(function(index, el) {
        animateNums(el)
    })
})