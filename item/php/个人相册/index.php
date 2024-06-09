<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <section>
        <div class="pic_bg"><img src="./images/bg/indexbg.jpg" alt=""></div>
        <div class="box">
            <form action="" method="post" id="form1" class="box_f">
                <h2>用户登录</h2>
                <p><input type="text" name="username" id="username" placeholder="用户名" class="username"></p>
                <p><input type="password" name="password" id="password" placeholder="用户密码" class="password"></p>
                <p><input type="button" value="登录" id="btn" class="btn"></p>
                <p><a href="./reg.php">注册用户</a></p>
            </form>
        </div>
    </section>
</body>
<script src="./js/jquery-3.7.0.min.js"></script>
<script src="./js/index.js"></script>
</html>