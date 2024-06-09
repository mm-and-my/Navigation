$("body").keydown(function (e) {
    /* var yans = parseInt(Math.random() * 0xFFFFFF).toString(16);
    var yanse = `background:#${yans}`; */

    var rleft = $("#run").offset().left;
    var rtop = $("#run").offset().top;
    var runs = $("#run").width() / 2;
    /* 
        var divs = `<div class = 'divs' style=${yanse}></div> `;
        var a = $(divs); */

    if (e.keyCode == 37) {
        $("#run").offset({ left: (rleft - runs) < 0 ? 0 : rleft - runs, top: rtop })
            .removeClass()
            .addClass("left");
        /*  a.offset({ left: rleft, top: rtop }); */
        // a.style.background = `${yans}`;
        /* $("#run").after(a); */
    }
    else if (e.keyCode == 39) {
        $("#run").offset({ left: rleft + runs, top: rtop })
            .removeClass()
            .addClass("right");
        /*  a.offset({ left: rleft, top: rtop });
         $("#run").after(a); */
    }
    else if (e.keyCode == 38) {
        $("#run").offset({ left: rleft, top: (rtop - runs) < 0 ? 0 : rtop - runs })
            .removeClass()
            .addClass("top");
        /* a.offset({ left: rleft, top: rtop });
        $("#run").after(a); */
    }
    else if (e.keyCode == 40) {
        $("#run").offset({ left: rleft, top: rtop + runs })
            .removeClass()
            .addClass("bottom");
        /*  a.offset({ left: rleft, top: rtop });
         $("#run").after(a); */
    }
    //课上代码
    if ([37, 38, 39, 40].indexOf(e.keyCode) != -1) {
        let div = $(`<div class= "divs"></div>`);
        let color = "#" + (Math.random() * 0xffffff << 0).toString(16);//生成随机颜色
        div.offset({ left: rleft, top: rtop });
        div.css("background", color);
        $("body").append(div);
    }
});

var i = 0;
$("#btn1").click(function () {
    let a = '显示轨迹';
    let b = '不显示轨迹';
    if (i % 2 == 0) {
        $("#btn1").html(a);
        $('div').toggle();
        i++;
    }
    else {
        $("#btn1").html(b);
        $('div').toggle();
        i++;
    }
});








/* var arr = ["red", "green", "blue", "orange", "yellowgreen", "yellow"];
           $(".bg").each(function (index,a) {
               $("#run").empty('<div class = "bg"></div>');
               $("#run").after('<div class = "bg"></div>');
           let max = 6;
           let min = 1;
           var i = parseInt(Math.random() * (max - min) + min);
           console.log(i);
           $(a).css("background", arr[i]);
           console.log(arr[i]);
       }); */



/* var li = `<li></li>`;
if (e.keyCode == 37) {
$("#run").offset({ left: (rleft - runs) < 0 ? 0 : rleft - runs, top: rtop })
    .removeClass()
    .addClass("left");
$('#run').after(li);
$("li").offset({ left: (rleft - runs) < 0 ? 0 : rleft - runs, top: rtop });
} */

/* li {
    background: red;
    width: 100px;
    height: 100px;
    position: relative;
    float: left;

} */

