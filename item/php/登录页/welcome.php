<?php
include("check.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后台欢迎页面</title>
</head>
<body>
    <?php
    echo "登录成功，欢迎".$_SESSION["user"];
    echo '<a href="exit.php">退出</a><br>';
    echo date("H:i:s");
    ?>
    <img src="./images/<?php echo date("N");?>.png" alt="">
    <?php
    $week = date("N");//得到星期几
    switch($week){
        case 1:
            $str = "新的一周开始啦";//操作
            break;
        case 2:
            $str = "周二了";//操作
            break;
        case 3:
            $str = "怎么才周三";//操作
            break;
        case 4:
            $str = "熬一下，快了快了";//操作
            break;
        case 5:
            $str = "小周末了";//操作
            break;
        case 6:
            $str = "终于可以睡懒觉了";//操作
            break;
        case 7:
            $str = "明天又要上班了";//操作
            break;
    }
    echo $str;
    ?>
</body>
</html>