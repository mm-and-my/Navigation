$("#btn").click(function () {
    $("#password").next("span").remove();
    $("#password2").next("span").remove();
    if ($("#password1").val() == $("#password2").val()) {
        var formdata = new FormData($("#form1")[0]); //表单打包数据
        formdata.append("kind", "updataPwd"); //往这个数据包里添加数据项
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
                if (e.status == "fail") {
                    $("#password").after(`<span>原密码错误</span>`);
                } else {
                    alert(e.message);
                    location.href = 'exit.php';
                }
            }
        });
    } else {
        $("#password2").after(`<span>两次密码不一致</span>`);
        $("#password2").focus();
    }
});