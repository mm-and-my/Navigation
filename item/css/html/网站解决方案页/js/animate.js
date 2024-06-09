
(function () {
    "use strict";
    var item = $(".main-index"),
        ani_item = item.find(".animated");

    $(window).on("scroll load", function () {
        var scrollTop = $(document).scrollTop();
        var h = $(window).height();
        ani_item.each(function () {
            var itemToTop = $(this).offset().top;
            var itemH = $(this).outerHeight();
            var ani_name = $(this).attr("ani-name"),
                ani_delay = $(this).attr("ani-delay"),
                ani_duration = $(this).attr("ani-duration");
            /*"8大标准环节"触发动画*/
            if (scrollTop + h >= $(this).parent().offset().top + (itemH / 3)) {
                $(".items-steps .items-block").find(this).removeClass("hidden").addClass(ani_name).css({
                    "animation-delay": ani_delay,
                    "animation-duration": ani_duration
                });
            }
            /*animated元素从下方进入显示区时触发动画*/
            if (scrollTop + h >= itemToTop + (itemH / 3) /* && scrollTop < itemToTop  + itemH*/ ) {
                $(this).removeClass("hidden").addClass(ani_name).css({
                    "animation-delay": ani_delay,
                    "animation-duration": ani_duration
                });
            }
            /*animated元素在进入显示区时触发动画（元素从上方或下方进入）*/
            /*else if (scrollTop > itemToTop + itemH || scrollTop < itemToTop) {
                $(this).removeClass(ani_name).addClass("hidden");
            }*/
        });
    });

})(jQuery);