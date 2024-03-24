<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zhuce</title>
    <link rel="stylesheet" href="./css/base.css">
   <link rel="stylesheet" href="./css/reg.css">
</head>

<body>
    <section>
        <div class="pic_bg"><img src="./images/bg/regbg.jpg" alt=""></div>
        <div class="box1">
            <div class="fonttext">
                <p>欢迎加入</p> <a href="./index.php">用户登录</a>
            </div>

        </div>
        <div class="box2">
            <form action="" method="post" id="form1" class="box2_form">
                <p>用户注册</p>
                <p><input type="text" name="username" id="username" placeholder="请输入用户名"></p>
                <p><input type="password" name="password1" id="password1" placeholder="请输入你创建账号的密码"></p>
                <p><input type="password" name="password2" id="password2" placeholder="请再次输入确认密码"></p>
                <p><input type="text" name="wx" id="wx" placeholder="请输入您的微信账号"></p>
                <p><input type="text" name="phone" id="phone" placeholder="请输入您的电话号码"></p>
                <p><input type="button" value="注册用户" id="btn" class="btns"></p>
            </form>
        </div>
    </section>
</body>
<script src="./js/jquery-3.7.0.js"></script>
<script src="./js/reg.js"></script>
</html>