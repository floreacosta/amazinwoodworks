$(function() {  
    var header = $("header");
    var altoSeccion1 = $("#seccion1").outerHeight();
    var altoSeccion2 = $("#seccion2").outerHeight() + altoSeccion1;

    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 100 && height < altoSeccion1) {
            header.addClass("header-background-sin");
        }else if (height > altoSeccion1 && height < altoSeccion2) {
            header.addClass("header-background").removeClass("header-background-sin");
        }else if (height > altoSeccion2) {
            header.addClass("header-background").removeClass("header-background-sin");
        }else {
            header.removeClass("header-background");
        }
    });
});

$(function() {  
    var logo = $("div.logo");
    var altoSeccion1 = $("#seccion1").outerHeight();
    var altoSeccion2 = $("#seccion2").outerHeight() + altoSeccion1 + "30";

    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 100 && height < altoSeccion1) {
            logo.addClass("logo");
        } else if (height > altoSeccion1 && height < altoSeccion2) {
            logo.addClass("logo-scroll").removeClass("logo");
        }else if (height > altoSeccion2) {
            logo.addClass("logo-scroll").removeClass("logo");
        }else {
            logo.removeClass("logo-scroll");
        }
    });
});
