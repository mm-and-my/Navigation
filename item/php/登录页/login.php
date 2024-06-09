<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>
</head>
<body>
    <?php
    if(isset($_COOKIE["username"])){
        $user = $_COOKIE["username"];
        $check = "checked";
    }
    else{
        $user = "";
        $check = "";
    }
    ?>
    <form action="t_login.php" method="post">
        <p>用户名：<input type="text" name="user" id="user" value="<?php echo $user?>"></p>
        <p>密码：<input type="password" name="pwd" id="pwd"></p>
        <p>验证码: <input type="text" name="captcha" id="captcha"></p>
        <img src="./captcha.php" alt="" onclick="javascript:newgdcode(this,this.src);">
        <p>
            <input type="checkbox" name="remember" id="remember" value="remember" <?php echo $check?>>记住用户名
            <input type="checkbox" name="login" id="login" value="login">7天免登录

        </p>
        <p><input type="submit" value="登录" name="btn" id="btn"></p>
    </form>
    <a href="welcome.php">个人中心</a>
    <script langguage="javascript">
        function newgdcode(obj,url){
            obj.src= url + '?nowtime' + new Date().getTime();
        }
    </script>
</body>
</html>