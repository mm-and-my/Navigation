<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后台登录</title>
</head>

<body>
    <?php
    //isset(变量或者数组元素)：有的返回true，没有的返回false
    //empty(数组元素)：判断数组元素是否为空，空返回true，非空返回false
    if (isset($_POST["user"])) {
        //得到用户名，密码
        session_start();
        if (strtolower($_POST["captcha"]) != strtolower($_SESSION['captcha'])) {
            echo "<script>alert('验证码不正确');location.href='login.php'</script>";
            exit();
        }
        $user = $_POST["user"];
        $pwd = $_POST["pwd"];
        //判断用户名和密码是否正确，admin,111
        if ($user == "admin" && $pwd == "111") {
            //P192，session怎么样使用的？？？步骤
            //怎么样把值写到session里面。
            session_start(); //启动会话
            $_SESSION["user"] = $user; //登录成功的用户名存到session里面
            //跳转到后面的页面
            //echo "登录成功，欢迎".$_SESSION["user"];

            if (isset($_POST["remember"])) { //判断一下这个记住用户名的复选框是否有选中
                setcookie("username", $user, time() + 60 * 60 * 24 * 30); //有选中设置cookie
            } else {
                setcookie("username", $user, time() - 1); //没有选中，删除相应的cookie
            }
            //七天免登录
            if (isset($_POST["login"])) {
                setcookie("login", $user, time() + 60 * 60 * 24 * 7); //设置cookie
            } else {
                setcookie("login", $user, time() - 1); //删除cookie
            }
            echo "<script>alert('登录成功');location.href='welcome.php'</script>";
        } else {
            //直接输出javascript的代码
            echo "<script>alert('用户名或者密码不正确');history.go(-1)</script>";
        }
    } else {
        echo "<script>alert('不要直接访问后面网页，非法操作');location.href='login.php'</script>";
    }
    ?>

</body>

</html>