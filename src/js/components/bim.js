$(document).ready(function() {

    $(".bim__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        console.log(path)
        $(".bim__tab").removeClass("bim__tab--active")
        $(this).addClass("bim__tab--active")
        $(".bim__tab-content").removeClass("bim__tab-content--active")
        $(`.bim__tab-content[data-tabs-path="${path}"]`).addClass("bim__tab-content--active")
    })

    $(".bim__subtab").click(function() {
        let parent = $(".bim__tab-content")
        let path = $(this).attr("data-tabs-path")
        $(parent).find(".bim__subtab").removeClass("bim__subtab--active")
        $(this).addClass("bim__subtab--active")
        $(parent).find(".bim__subtab-content").removeClass("bim__subtab-content--active")
        $(parent).find(`.bim__subtab-content[data-tabs-path="${path}"]`).addClass("bim__subtab-content--active")
    })

})