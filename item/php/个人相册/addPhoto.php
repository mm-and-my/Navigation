<?php
require './common/check.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>添加相片</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/addphotos.css">
    <link rel="stylesheet" href="./css/font_4326365_ljztk0w0ed/iconfont.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    ?>
    <div class="nav">
        <ul class="nav_ul">
            <li><a href="welcome.php">主页</a></li>
            <li><a href="addPhoto.php">添加相片</a></li>
            <li><a href="photoList.php">管理相片</a></li>
            <li><a href="setUser.php">修改资料</a></li>
            <li><a href="updataPwd.php">修改密码</a></li>
            <li><a href="exit.php" onclick="return confirm('是否退出登录')">退出登录</a></li>
        </ul>
    </div>
    <div class="box_h2">
        <p><i class="iconfont icon-tupiantianjia">上传相片</i></p>
    </div>
    <section class="countainer">
        <div class="pic_bg"><img src="./images/bg/upphotobg.jpeg" alt=""></div>
        <div class="box">
            <div class="box_left">
                <form action="" method="post" id="form1" class="box_form">
                    <ul>
                        <li>
                            <p>相片标题:</p><input type="text" name="photoTitle" id="photoTitle">
                        </li>
                        <li>
                            <p>相片简介:</p><textarea name="photoDesc" id="photoDesc" cols="50" rows="10"></textarea>
                        </li>
                        <li>
                            <p>选择相片:</p>
                        </li>
                    </ul>
                    <!-- <p><input type="file" name="photoSrc" id="photoSrc" accept=".jpg,.png,.gif" class="select"></p> -->
                    <a href="" class="select">
                        <input type="file" name="photoSrc" id="photoSrc" accept=".jpg,.png,.gif" class="select">点击这里上传文件
                    </a>
                    <p><input type="button" value="开始上传" id="btn" class="btn"></p>
                </form>
            </div>
            <div class="box_right">
                <p>上传照片预览</p>
                <div><img src="" alt='' id="pic"></div>
            </div>
        </div>
    </section>
</body>
<script src="./js/jquery-3.7.0.js"></script>
<script src="./js/addphoto.js"></script>
</html>