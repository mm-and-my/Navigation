$(document).ready(function () {
    $(document).scroll(function () {
        var scrollPos = jQuery(this).scrollTop();
        if (scrollPos > 50) {
            $(".header").addClass("xiao")
        } else {
            $(".header").removeClass("xiao")
        }
        if (scrollPos > 500) {
            $(".db").slideDown("slow")
        } else {
            $(".db").slideUp("slow")
        }
        if (scrollPos > 1340) {
            $(".section3").css("background-position", "50% -28px")
        } else {
            $(".section3").css("background-position", "50% 0px")
        }
        if (scrollPos > h - 45) {
            $(".fixednav").addClass("xiao")
        } else {
            $(".fixednav").removeClass("xiao")
        }
        if (scrollPos > $(".cspz").offset().top - 60) {
            $(".sola").addClass("active").siblings(".active").removeClass("active")
        }
        if (scrollPos > $(".cjwt").offset().top - 60) {
            $(".solb").addClass("active").siblings(".active").removeClass("active")
        }
        if (scrollPos > $(".gmbz").offset().top - 60) {
            $(".solc").addClass("active").siblings(".active").removeClass("active")
        }
        if (scrollPos > $(".wsm").offset().top - 60) {
            $(".sold").addClass("active").siblings(".active").removeClass("active")
        }
        if (scrollPos > $(".cpys").offset().top - 60) {
            $(".sole").addClass("active").siblings(".active").removeClass("active")
        }
    });
    $('[data-toggle="affix"]').mouseover(function () {
        $(this).addClass("on").siblings(".on").removeClass("on");
        var id = $(this).attr("data-href");
        $('.rtbox').find('div').css("display", "none");
        $(id).css("display", "block");
        // $(id).siblings().hide()
    });
    $(".header").mouseover(function () {
        $(this).addClass("xiao")
    });
    $(function () {
        $(".single-item").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000000,
            speed: 500,
            useCSS: true
        })
    });
    $(function () {
        $(".responsive").slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true}
            }, {breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                breakpoint: 480,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }]
        })
    });
    $(function () {
        $(".one-time").slick({
            arrows: false,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            touchMove: false,
            slidesToScroll: 1
        })
    });
    $('[data-toggle="toggle"]').mouseover(function () {
        $(this).addClass("active").siblings(".active").removeClass("active")
    });
    $(function () {
        $(".multiple-items").slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 500,
            useCSS: true
        })
    });
    $(function () {
        $(".lazy").slick({lazyLoad: "ondemand", slidesToShow: 1, autoplay: true, dots: true, slidesToScroll: 1})
    });
    $('[data-toggle="affix-map"]').mouseover(function () {
        $(this).addClass("on").siblings(".on").removeClass("on");
        var id = $(this).attr("data-href");
        $(id).show();
        $(id).siblings().hide()
    });
    $('[data-toggle="affix-cloud"]').click(function () {
        $(this).toggleClass("on");
        var id = $(this).attr("data-href");
        $(id).slideToggle("slow")
    });
    $('[data-toggle="affix-xgy"]').click(function () {
        $(this).addClass("on").siblings(".on").removeClass("on");
        var id = $(this).attr("data-href");
        $(id).show();
        $(id).siblings().hide()
    });
    $('[data-toggle="affix-xgyu"]').click(function () {
        $(this).addClass("on").siblings(".on").removeClass("on");
        var id = $(this).attr("data-href");
        $(id).fadeIn("slow");
        $(id).siblings().hide()
    });
    $("input[data-toggle='affix-radio']:checked").parent().addClass("on");
    $('[data-toggle="affix-radio"]').click(function () {
        $(this).addClass("on").siblings(".on").removeClass("on")
    });
    $('[data-toggle="affix-check"]').parent().removeClass("on");
    $("input[data-toggle='affix-check']:checked").parent().addClass("on");
    $('[data-toggle="affix-check"]').click(function () {
        if ($(this).is(":checked")) {
            $(this).parent().addClass("on")
        } else {
            $(this).parent().removeClass("on")
        }
    });
    $(".bagh").mouseover(function () {
        $(this).children().css("left", "0px")
    });
    $(".bagh").mouseout(function () {
        $(this).children().css("left", "-290px")
    });
    $(".rtx").click(function () {
        $(".BomBox").hide()
    });
    $(".Bombox_bag").click(function () {
        $(".BomBox").hide()
    });
    $(".zx").click(function () {
        $(".BomBox").show()
    });
    $(".db").click(function () {
        $("html,body").animate({"scrollTop": 0}, 600)
    })
});
window.onload = function () {
    var divselect = document.getElementById("divselect");
    var title = document.getElementsByTagName("cite")[0];
    var myul = divselect.getElementsByTagName("ul")[0];
    var mya = myul.getElementsByTagName("a");
    var T;
    var stopH;
    var ulheight = 0;
    title.onclick = function () {
        clearInterval(T);
        myul.style.border = "1px solid #ccc";
        T = setInterval(slide, 1)
    };
    function slide() {
        if (ulheight < 129) {
            ulheight = ulheight + 3;
            myul.style.height = ulheight + "px"
        }
    }

    for (var i = 0; i < mya.length; i++) {
        mya[i].onclick = function () {
            title.innerHTML = this.innerHTML;
            inputselect.name = this.getAttribute("data");
            myul.style.height = "0px";
            myul.style.border = "0";
            ulheight = 0;
            clearInterval(T)
        }
    }
    divselect.onmouseover = function () {
        clearTimeout(stopH)
    };
    divselect.onmouseout = function () {
        stopH = setTimeout(hide, 100);
        function hide() {
            clearInterval(T);
            myul.style.height = "0px";
            myul.style.border = "0";
            ulheight = 0
        }
    }
};
var h = $(".fixednav").offset().top;
function goTop1() {
    $("html,body").animate({"scrollTop": h - 38}, 600)
}
function goTop2() {
    $("html,body").animate({"scrollTop": $(".cjwt").offset().top - 59}, 600)
}
function goTop3() {
    $("html,body").animate({"scrollTop": $(".gmbz").offset().top - 59}, 600)
}
function goTop4() {
    $("html,body").animate({"scrollTop": $(".wsm").offset().top - 59}, 600)
}
function goTop5() {
    $("html,body").animate({"scrollTop": $(".cpys").offset().top - 59}, 600)
};