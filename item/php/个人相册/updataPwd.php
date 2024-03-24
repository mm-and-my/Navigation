<?php
require './common/check.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>修改密码</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/updatepwd.css">
    <link rel="stylesheet" href="./css/font_4326365_ljztk0w0ed/iconfont.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    ?>
    <div class="box_h2">
        <p><i class="iconfont icon-anquanzhongxin89">修改用户密码</i></p>
    </div>
    <section>
        <div class="pic_bg"><img src="./images/bg/updatepwdbg.jpg" alt=""></div>
        <div class="box">
            <form action="" method="post" id="form1" class="box_form">
                <ul>
                    <li>
                        <p>请输入原密码:</p>
                        <input type="password" name="password" id="password">
                    </li>
                    <li>
                        <p>请输入新密码:</p>
                        <input type="password" name="password1" id="password1">
                    </li>
                    <li>
                        <p>请确认新密码:</p>
                        <input type="password" name="2" id="password2">
                    </li>
                </ul>
                <p><input type="button" value="确认修改" id="btn" class="btn"></p>
            </form>
        </div>
    </section>
</body>
<script src="./js/jquery-3.7.0.js"></script>
<script src="./js/updatapwd.js"></script>
</html>