$("#username").blur(function() {
    $("#username").next("span").remove();
    if ($("#username").val() == "") {
        $("#username").after(`<span>用户不能为空</span>`);
        $("#username").focus();
    } else {
        $.post("configUser.php", {
            "kind": "check",
            "username": $("#username").val()
        }, function(e) {
            if (e.status == "success") {
                // console.log(e);
                $("#username").focus();
                $("#username").after(`<span>用户不存在</span>`);
            }
        }, "json");
    }

});
$("#password").blur(function() {
    $("#password").next("span").remove();
    if ($("#password").val() == "") {
        $("#password").after(`<span>密码不能为空</span>`);
    }
});
$("#btn").click(function() {
    $("#username").next("span").remove();
    if ($("#username").val() == "") {
        $("#username").after(`<span>用户不能为空</span>`);
        $("#username").focus();
    } else if ($("#password").val() == "") {
        $("#password").after(`<span>密码不能为空</span>`);
        $("#password").focus();
    } else {
        var formdata = new FormData($("#form1")[0]);
        formdata.append("kind", "login");
        $.ajax({
            url: "configUser.php",
            type: "post",
            dataType: "json",
            data: formdata,
            cache: false,
            processData: false,
            contentType: false,
            success: function(e) {
                console.log(e);

                if (e.status == "success") {
                    location.href = "welcome.php";
                } else {
                    $("#password").next("span").remove();
                    $("#password").focus();
                    $("#password").after(`<span>${e.message}</span>`);
                }
            }
        });

    }
});