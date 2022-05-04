$(document).ready(function() {

    $(".profile-edit__save").click(function() {
        $(this).parents(".profile-edit").toggleClass("profile-edit--saved")
    })


    $(".cart__search-show input").on("input", function() {
        let val = $(this).val()
        if (val) {
            $(".cart__search").addClass("cart__search--active")
        } else {
            closeCartSearch()
        }
    })

    function closeCartSearch() {
        $(".cart__search").removeClass("cart__search--active")
        $(".cart__search-show input").val("")
    }

    $(document).mouseup(function(e) {
        var div = $('.cart__search');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("cart__search--active")) {
                closeCartSearch()
            }
        }
    });
})