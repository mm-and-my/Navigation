var sz = [
    ["少数派", "ssPai"],
    ["知乎热榜", "zhihuHot"],
    ["百度热点", "baiduRD"],
    ["哔哩哔哩", "bili"],
];
$.each(sz, function (index, ele) {
    $("#type").append(`<option value="${ele[1]}">${ele[0]}</option>`);
})
var url = "https://api.vvhan.com/api/hotlist";
var newsData;//保存读取的数据
var pageSize = 8;//设置一页显示的个数
var chushiSize = 1;//设置初始页码
$("#type").change(function () {
    getData($(this).val());
});
//通过函数去确保页码一开始就有内容
getData(sz[0][1]);
function getData(type) {
    // 切换时显示加载区域
    $("#pic").css("display", "block");
    $(".box>div").remove();
    $.get(url, { type: type}, function (e) {
        console.log(e);
        // 加载完隐藏加载区域
        $("#pic").css("display", "none");
        newsData = e.data;
        getPage(chushiSize);//设置默认显示页码
        let pageCount = Math.ceil(newsData.length / pageSize);//计算页码
        $("#page>a").remove();//清除源页码
        for (let i = 1; i <= pageCount; i++) {
            // 通过class设置默认初始页码高亮
            $("#page").append(`<a href="#" class="${i == chushiSize ? "blue" : ""}" data-page = "${i}">${i}</a>`);
        }
        $("#page>a").click(function () {
            getPage($(this).data("page"));
            //设置一个类高亮显示当前的页码，当前的页码加上，其它的页码去掉
            $(this).addClass("blue").siblings().removeClass("blue");
        });
    }, 'json');
}
function getPage(page) {
    $(".box>div").remove();//清除原box里面的内容
    //  遍历热搜里面的数据
    $.each(newsData, function (index, item) {
        if (index >= (page - 1) * pageSize && index < page * pageSize) {
            let news = $(".news:eq(0)").clone(true);//克隆div
            // 每条数据相应的内容写到这个div里面
            news.find("a").prop("href", item.url);
            news.find("img").prop("src", item.pic);
            news.find(".title").text(item.title);
            news.find(".desc").text(item.desc);
            news.find(".hot").text(`热度:${item.hot}`);
            // 更改样式，使div由隐藏变为显示
            news.css("display", "block");
            // 添加到box里面显示到网页
            $(".box").append(news);
        }
    });
}
