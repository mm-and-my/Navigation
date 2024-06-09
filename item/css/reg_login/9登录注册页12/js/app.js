
$(function () {
    //login_popup();
    $("#loginModal").modal("show")
})

function login_popup() {
    $("#login_account_user").val(), $("#login_account_pass").val(""), $("#login_btn").removeAttr('disabled').html("登&nbsp;录"), $("#reg_account_tel").val(""), $("#reg_account_yzm").val(""), $("#reg_account_pass").val(""), $("#loginModal").modal("show"), $.login.init();
}





(function ($) {
    $.login = {
        formMessage: function (type, msg) {
            if (type == 1) {
                console.log('来到这里::' + msg);
                $('#login-tips').find('.tips-error').remove();
                console.log('来到这里2');
                $('#login-tips').append('<div  class="tips-error bg-danger">' + msg + '</div>');
            } else if (type == 2) {
                console.log('来到这里::' + msg);
                $('#register-tips').find('.tips-error').remove();
                console.log('来到这里2');
                $('#register-tips').append('<div  class="tips-error bg-danger">' + msg + '</div>');
            }
           
        },
        loginClick: function () {
            var $username = $("#login_account_user");
            var $password = $("#login_account_pass");
            var tel = /^1[3456789]\d{9}$/;
            var em = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if ($username.val() == "" || (!(tel.test($username.val())) && !(em.test($username.val())))) {
                $username.focus();
                $.login.formMessage(1,'请输入正确的手机号或邮箱号。');
                return false;
            } else if ($password.val() == "" || $password.val().length < 6) {
                $password.focus();
                $.login.formMessage(1,'密码至少是6位字符。');
                return false;
            } else {
                $("#login_btn").attr('disabled', 'disabled').html("提交中......");
                $.ajax({
                    url: "/Login/CheckLogin",
                    data: { username: $.trim($username.val()), password: $.trim($password.val()) },
                    type: "post",
                    dataType: "json",
                    success: function (data) {
                        if (data.state == "success") {
                            var backurl = window.location.href;
                            console.log("backurl=" + backurl);

                            $("#login_btn").find('span').html("登录成功，正在跳转...");
                            window.setTimeout(function () {
                                if (backurl != "") {
                                    window.location.href = backurl;
                                } else {
                                    window.location.href = "/";
                                }
                               
                            }, 500);
                        } else {
                            $("#login_btn").removeAttr('disabled').html("登&nbsp;录");


                            $.login.formMessage(1,data.message);
                        }
                    }
                });
            }
        },
        registerClick: function () {
            var $username = $("#reg_account_tel");
            var $password = $("#reg_account_pass");
            var tel = /^1[3456789]\d{9}$/;
            var em = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if ($username.val() == "" || (!(tel.test($username.val())) && !(em.test($username.val())))) {
                $username.focus();
                $.login.formMessage(2,'请输入正确的手机号或邮箱号。');
                return false;
            } else if ($password.val() == "" || $password.val().length < 6) {
                $password.focus();
                $.login.formMessage(2,'密码至少是6位字符。');
                return false;
            } else {
                $("#register_btn").attr('disabled', 'disabled').html("提交中......");
                $.ajax({
                    url: "/Login/Register",
                    data: { tel: $.trim($username.val()), password: $.trim($password.val()) },
                    type: "post",
                    dataType: "json",
                    success: function (data) {
                        if (data.state == "success") {
                            console.log("注册成功,转到登陆选项卡");
                            $("#register_btn").removeAttr('disabled')
                            $.modalMsg("注册成功,请重新登陆。", "success");
                            $("#loginModal .nav li").each(function () {
                                var n = $(this).children().attr("id");
                                if (n == "tabLogin") {
                                    $(this).addClass("active").siblings().removeClass("active");
                                    $("#login").addClass("active").siblings().removeClass("active");

                                    $("#login_account_user").val($username.val());
                                    $("#login_account_pass").focus();

                                }
                            });
                        } else {
                            $("#register_btn").removeAttr('disabled').html("注&nbsp;册");
                            $.login.formMessage(2,data.message);
                        }
                    }
                });
            }
        },
        init: function () {
     
            $("#login_btn").click(function () {
                $.login.loginClick();
            });
            $("#register_btn").click(function () {
                $.login.registerClick();
            });
            document.onkeydown = function (e) {
                if (!e) e = window.event;
                if ((e.keyCode || e.which) == 13) {
                    document.getElementById("login_btn").focus();
                    document.getElementById("login_btn").click();
                } else {
                    $('#login-tips').find('.tips-error').remove();
                }
            }
        }
    };
})(jQuery);




