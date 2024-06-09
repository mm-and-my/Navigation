$("#username").blur(function() {
    $("#username").next("span").remove();
    if( $("#username").val()==""){
        $("#username").after(`<span>✘用户名不能为空</span>`);
    }
    else{
        $.post("configUser.php", {
        "kind": "check",
        "username": $("#username").val()
    }, function(e) {

        if (e.status == "fail") {
            console.log(e);
            $("#username").focus();
        }
        $("#username").after(`<span>✔${e.message}</span>`);
    }, "json");
    }
   
});

$("#btn").click(function() {
    $("#password1").next("span").remove();
    $("#password2").next("span").remove();
    $("#btn").prop("disabled", "disabled");
    $("#btn").val("注册中...");
    if ($("#username").val() == "") {
        $("#username").next("span").remove();
        $("#username").after(`<span>✘用户名不能为空</span>`);
        $("#username").focus();
    } else if ($("#password1").val() == "") {
        $("#password1").after(`<span>✘密码不能为空</span>`);
        $("#password1").focus();
    } else if ($("#password2").val() == "") {
        $("#password2").after(`<span>✘确认密码不能为空</span>`);
        $("#password2").focus();
    } else if ($("#password1").val() == $("#password2").val()) {
        var formdata = new FormData($("#form1")[0]); //表单打包数据
        formdata.append("kind", "reg"); //往这个数据包里添加数据项
        $.ajax({
            url: "configUser.php",
            type: "post",
            dataType: "json",
            data: formdata,
            cache: false,
            processData: false,
            contentType: false,
            success: function(e) {
                // console.log(e);
                if (e.status == "success") {
                    location.href = "index.php";
                } else {
                    $("#username").next("span").remove();
                    $("#username").after(`<span>✘${e.message}</span>`);
                    $("#username").focus();
                }
            }
        });
    } else {
        $("#password2").after(`<span>✘两次密码不一致</span>`);
        $("#password2").focus();
    }
    $("#btn").prop("disabled", "");
    $("#btn").val("注册用户");
});