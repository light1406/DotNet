window.addEventListener("load", function() {
    $(".address").hide();
    $(".password").hide();
    $(".container-order").hide();

    $(".profile-js").click(function() {
        $(".personal").show();
        $(".address").hide();
        $(".password").hide();
        $(".container-order").hide();

        $(".profile-js").addClass("active-menu");
        $(".address-js").removeClass("active-menu");
        $(".order-js").removeClass("active-menu");
        $(".password-js").removeClass("active-menu");
    });
    $(".address-js").click(function() {
        $(".address").show();
        $(".personal").hide();
        $(".password").hide();
        $(".container-order").hide();

        $(".address-js").addClass("active-menu");
        $(".address-js").removeClass("hide");
        $(".profile-js").removeClass("active-menu");
        $(".password-js").removeClass("active-menu");
        $(".order-js").removeClass("active-menu");
    });
    $(".password-js").click(function() {
        $(".password").show();
        $(".personal").hide();
        $(".address").hide();
        $(".container-order").hide();

        $(".password-js").addClass("active-menu");
        $(".profile-js").removeClass("active-menu");
        $(".address-js").removeClass("active-menu");
        $(".order-js").removeClass("active-menu");
    });
    $(".order-js").click(function() {
        $(".container-order").show();
        $(".personal").hide();
        $(".address").hide();
        $(".password").hide();

        $(".order-js").addClass("active-menu");
        $(".profile-js").removeClass("active-menu");
        $(".address-js").removeClass("active-menu");
        $(".password-js").removeClass("active-menu");
    });
});

function showP() {
    var sps = document.querySelectorAll("#show-password");
    for (let index = 0; index < sps.length; index++) {
        if (sps[index].type == "password") {
            sps[index].type = "text";
        } else {
            sps[index].type = "password";
        }
    }
}