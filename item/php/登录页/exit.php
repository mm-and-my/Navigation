<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    session_start();//启动session
    //清除相应的session，或者把所有的session清空，书P194
    unset($_SESSION["user"]);//清除指定的session
    //session_destroy();//把所有的session都清空。    
    echo "<script>alert('退出成功');location.href='login.php'</script>";//给出提示，返回登录页面。
    ?>
</body>
</html>