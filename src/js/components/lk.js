$(document).ready(function() {

    $(".profile-edit__save").click(function() {
        $(this).parents(".profile-edit").toggleClass("profile-edit--saved")
    })

})