<?php
session_start();//启动session
if(isset($_COOKIE["login"])){
    $_SESSION["user"] = $_COOKIE["login"];
}
if(isset($_SESSION["user"])==false){//判断$_SESSION["user"]是否有数据
    echo "<script>alert('先登录再使用');location.href='login.php'</script>";//没有登录，给出提示，返回登录的界面。
}
?>