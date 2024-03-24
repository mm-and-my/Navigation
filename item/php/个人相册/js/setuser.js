$.post("configUser.php", {
    kind: "getUserinfo"
}, function (e) {
    // console.log(e);
    $("#wx").val(e.data.wx);
    $("#phone").val(e.data.phone);
}, "json");

$("#btn").click(function () {
    var formdata = new FormData($("#form1")[0]);//表单打包数据
    formdata.append("kind", "updataUser");//往这个数据包里添加数据项
    $.ajax({
        url: "configUser.php",
        type: "post",
        dataType: "json",
        data: formdata,
        cache: false,
        processData: false,
        contentType: false,
        success: function (e) {
            // console.log(e);
            alert(e.message);
        }
    });
});