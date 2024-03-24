<?php
require './common/check.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>修改资料</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/setusers.css">
    <link rel="stylesheet" href="./css/font_4326365_ljztk0w0ed/iconfont.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    ?>
    <div class="box_h2">
        <p><i class="iconfont icon-xiugaiziliao">修改个人资料</i></p>
    </div>
    <section>
        <div class="pic_bg"><img src="./images/bg/updatepwdbg.jpg" alt=""></div>
        <div class="box">
            <form action="" method="post" id="form1" class="box_form">
            <ul>
                <li>
                    <p>用户名称:
                       <span><?php echo $_SESSION["username"]; ?></span> 
                    </p>
                </li>
                <li>
                    <p>个人微信:<input type="text" name="wx" id="wx"></p>
                </li>
                <li>
                    <p>电话号码:<input type="text" name="phone" id="phone"></p>
                </li>
            </ul>
            <p><input type="button" value="修改资料" id="btn" class="btn"></p>
            </form>
           
        </div>
    </section>
</body>
<script src="./js/jquery-3.7.0.min.js"></script>
<script src="./js/setuser.js"></script>
</html>