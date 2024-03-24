<!-- 判断用户是否登录，限制后台登录 -->
<?php
session_start();//启动session服务
if(isset($_SESSION["username"])==false){//判断$_SESSION["username"]是否有数据
    //没有登录，前端提示，返回登录页面
echo "<script>alert('请登录');location.href='index.php'</script>";
}
?>