$(".box>ul li").on({
    "mouseover": function () {
        $(this).css({ "width": "1080px" }).siblings().css({ "width": "30px" });
    },
    "mouseout": function () {
        $(".box>ul li").css({
            "width": "60px"
        });
    },
});
