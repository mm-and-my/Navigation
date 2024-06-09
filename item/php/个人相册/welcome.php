<?php
require './common/check.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>欢迎页</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/welcomes.css">
</head>

<body>
    <?php
    require "./common/nav.php";
    ?>
    <div class="box">
        <p>登录成功,欢迎您：<?php echo $_SESSION["username"];?></p>
    </div>
</body>

</html>