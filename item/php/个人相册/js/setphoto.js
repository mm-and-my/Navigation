$("#btn").click(function () {
    var formdata = new FormData($("#form1")[0]);//表单打包数据
    formdata.append("kind", "updataPhoto");//往这个数据包里添加数据项
    $.ajax({
        url: "configPhoto.php",
        type: "post",
        dataType: "json",
        data: formdata,
        cache: false,
        processData: false,
        contentType: false,
        success: function (e) {
            console.log(e);
            alert(e.message);
        }
    });
});