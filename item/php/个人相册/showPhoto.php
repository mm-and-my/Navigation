<?php
require "./common/check.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查看相片</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/showphoto.css">
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
    $photoinfo = $photo->getPhotoById(); //根据Id查询相片信息


    // 获取图片尺寸信息
    $imagePath = "./photo/" . $photoinfo[0]["photoSrc"]; // 图片的路径
    @$imageInfo = getimagesize($imagePath);
    // echo $imagePath;
    if ($imageInfo) {
        $widthphoto = $imageInfo[0]; // 图片宽度
        $heightphoto = $imageInfo[1]; // 图片高度
        $mimephoto = $imageInfo['mime']; // 图片MIME类型
        $showphotochicun = $widthphoto . "px" . "*" . $heightphoto . "px";
    } else {
        // echo "无法获取图片尺寸信息";
        $showphotochicun = "无法获取图片尺寸信息";
        $mimephoto = "无法获取图片格式信息";
    }

    if ($photoinfo == false or $_SESSION["username"] != $photoinfo[0]["username"]) {
        echo "<script>alert('非法操作');location.href='photoList.php'</script>";
        exit();
    }
    ?>
    <div class="pic_bg"><img src="./images/bg/photolistbg.jpeg" alt=""></div>
    <section>
    <div id="box" class="box">
        <p><?php echo $photoinfo[0]["photoTitle"] ?></p>
        <div class="box_information">
            <ul>
                <li><i class="iconfont icon-shijian"></i><?php echo $photoinfo[0]["createTime"] ?></li>
                <li><i class="iconfont icon-fenxiang"></i>上传用户：<span><?php echo $_SESSION["username"] ?></span></li>
                <li><i class="iconfont icon-tupianbizhi"></i>图片尺寸：<span><?php echo $showphotochicun ?></span></li>
                <li><i class="iconfont icon-xiugai"></i>图片格式：<span><?php echo  $mimephoto ?></span></li>
            </ul>
        </div>
        <div id="photo" class="photo">
            <img src="./photo/<?php echo $photoinfo[0]["photoSrc"] ?>" alt="">
        </div>
        <div class="photo_text">
        <p><i class="iconfont icon-jianjie"></i>&nbsp;简介：<br><span> <?php echo $photoinfo[0]["photoDesc"] ?></span></p>
    </div>
    </div>
    
    </section>
</body>

</html>