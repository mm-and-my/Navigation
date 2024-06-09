<?php
require './common/check.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>setphoto</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/setphotoq.css">
    <link rel="stylesheet" href="./css/font_4326365_ljztk0w0ed/iconfont.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    if (isset($_GET["id"]) == false) {
        header("location:photoList.php");
    }
    $id = $_GET["id"];
    require "./common/Photo.php";
    $photo = new Photo(["id" => $id]);
    $photoinfo = $photo->getPhotoById();//根据Id查询相片信息
    if ($photoinfo == false or $_SESSION["username"] != $photoinfo[0]["username"]) {
        echo "<script>alert('非法操作');location.href='photoList.php'</script>";
        exit();
    }
    ?>
    <div class="box_h2">
        <p><i class="iconfont icon-xiugaiziliao">修改相片信息</i></p>
    </div>
    <div class="pic_bg"><img src="./images/bg/photolistbg.jpeg" alt=""></div>
    <section>
    <div class="box">
        <div class="box_left">
            <form action="" method="post" id="form1" class="box_form">
                <ul>
                    <li>
                        <p>标题:</p><input type="text" name="photoTitle" id="photoTitle" value="<?php echo $photoinfo[0]["photoTitle"] ?>">
                    </li>
                    <li>
                        <p>简介:</p><textarea name="photoDesc" id="photoDesc" cols="50" rows="10"><?php echo $photoinfo[0]["photoDesc"] ?></textarea>
                    </li>
                </ul>
                <p><input type="button" value="修改" id="btn" class="btn"></p>
                <p><input type="hidden" name="id" id="id" value="<?php echo $id ?>" class="form_hidden"></p><!-- 将id放入隐藏域中发送 -->
            </form>
        </div>
        <div class="box_right">
            <div class="box_pic">
                <img src="./photo/<?php echo $photoinfo[0]["photoSrc"] ?>" alt="" id="pic" width="200">
            </div>
        </div>

    </div>
    </section>
</body>


<script src="./js/jquery-3.7.0.js"></script>
<script src="./js/setphoto.js"></script>

</html>