<?php
require "./common/check.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>管理相片</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/photolists.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    ?>
    <div class="pic_bg"><img src="./images/bg/photolistbg.jpeg" alt=""></div>
    <section>

        <div id="box" class="boxs">
            <div class="box_h2">
                <p>相册列表</p>
            </div>
            <ul>
                <?php
                require "./common/Photo.php";
                $page = $_GET["page"] ?? 1;
                $pageSize = 5;
                $photo = new Photo(["username" => $_SESSION["username"]]);
                $photoList = $photo->getPhotoList($page, $pageSize);
                $pageCount = $photo->getPageCount($pageSize);
                if ($photoList == false) {
                    echo "<span>未上传照片</span>";
                    exit(); //提前结束程序
                }
                foreach ($photoList as $v) {
                ?>
                    <li>
                        <div class="box_pic">
                            <a href="showPhoto.php?id=<?php echo $v["id"] ?>" target="_blank">
                                <img src="./thumb/<?php echo $v["photoSrc"] ?>" alt="" title="点击查看相片"><br>
                            </a>
                        </div>
                        <div class="box_btn">
                            <a href="setPhoto.php?id=<?php echo $v["id"] ?>">修改</a>
                            <a href="#" class="del" data-index="<?php echo $v["id"] ?>">删除</a>
                        </div>
                    </li>
                <?php
                }
                ?>
            </ul>
            <div id="page" class="page">
            <?php
            for ($i = 1; $i <= $pageCount; $i++) {
                echo "<a href='photoList.php?page=$i'>$i</a>";
            }
            ?>
        </div>
        </div>

      
    </section>
</body>
<script src="./js/jquery-3.7.0.min.js"></script>
<script src="./js/photolist.js"></script>
</html>