<?php
if (isset($_POST["kind"])) {
    require "./common/User.php";
    $kind = $_POST["kind"];
//检测用户状态
    if ($kind == "check") {
        $username = $_POST["username"];
        $user = new User(["username" => $username]);
        $ret = $user->getUserInfo();
        if ($ret) {
            $status = "fail";
            $message = "用户已存在";
            $data = null;
          
        } else {
            $status = "success";
            $message = "可以注册";
            $data = null;
          
        }
    } 
    //注册处理
    else if ($kind == "reg") {
        $userInfo["username"] = $_POST["username"];
        $userInfo["password"] = $_POST["password1"];
        $userInfo["wx"] = $_POST["wx"];
        $userInfo["phone"] = $_POST["phone"];
        $user = new User($userInfo);
        $ret = $user->getUserInfo();
        if ($ret) {
            $status = "fail";
            $message = "用户已存在,无法注册";
            $data = null;
        } else {
            $user->addUser();//调用用户注册的方法
            $status = "success";
            $message = "注册成功";
            $data = null;
        }
    } 
    // 登录处理
    else if ($kind == "login") {
        $userInfo["username"] = $_POST["username"];
        $userInfo["password"] = $_POST["password"];
        $user = new User($userInfo);//创建用户对象实例
        /* var_dump($ret);
        exit();//提取终止程序 */
        $ret = $user->getUserInfo();
        if ($ret) {//用户名存在时，判断密码是否正确
            if ($userInfo["password"] == $ret[0]["password"]) {
                $status = "success";
                $message = "登录成功";
                $data = null;
                session_start();
                $_SESSION["username"] = $userInfo["username"];
            } else {
                $status = "fail";
                $message = "密码错误";
                $data = null;
            }
        } else {//用户名不存在，给出提示
            $status = "fail";
            $message = "用户不存在";
            $data = null;
        }
    } 
//获取数据库信息到主页
    else if ($kind == "getUserinfo") {
        session_start();
        if (isset($_SESSION["username"])) {//判断用户是否登录，即$_SESSION["username"]是否有数据
            $userInfo["username"] = $_SESSION["username"];
            $user = new User($userInfo);
            $ret = $user->getUserInfo();//调用方法更新数据库
            if ($ret) {//用户存在，判断密码
                $status = "success";
                $message = "读取成功";
                $data = [
                    "wx" => $ret[0]["wx"],
                    "phone" => $ret[0]["phone"]
                ];
            } else {//用户名不存在，给出提示
                $status = "fail";
                $message = "用户不存在";
                $data = null;
            }
        }
        else{//用户未登录，返回登录页
            $status = "fail";
            $message = "请先登录";
            $data = null;
        }
    }
     // 修改个人资料
    else if ($kind == "updataUser") {//判断用户是否登录，即$_SESSION["username"]是否有数据
        session_start();
        if (isset($_SESSION["username"])) {
            $userInfo["username"] = $_SESSION["username"];
            $userInfo["wx"] = $_POST["wx"];
            $userInfo["phone"] = $_POST["phone"];
            $user = new User($userInfo);
            $ret = $user->getUserInfo();
            if ($ret) {//用户存在，判断密码
                $user->updataUserInfo();//调用方法更新数据库
                $status = "success";
                $message = "修改成功";
                $data =null;
            } else {
                $status = "fail";
                $message = "用户不存在";
                $data = null;
            }
        }
        else{//用户未登录，返回登录页
            $status = "fail";
            $message = "请先登录";
            $data = null;
        }
    }
    //修改密码
    else if ($kind == "updataPwd") {
        session_start();
        if (isset($_SESSION["username"])) {//判断用户是否登录，即$_SESSION["username"]是否有数据
            $userInfo["username"] = $_SESSION["username"];
            $user = new User($userInfo);
            $ret = $user->getUserInfo();//调用方法更新数据库
            if ($ret) {//用户存在，判断密码
               if($ret[0]["password"] == $_POST["password"]){//判断旧密码是否正确
                $user->updataUserInfo($_POST["password1"]);//更新密码
                $status = "success";
                $message = "密码修改成功,请重新登录";
                $data =null;
               }
               else{
                $status = "fail";
                $message = "原密码错误";
                $data =null;
               }
                
            } else {
                $status = "fail";
                $message = "用户不存在";
                $data = null;
            }
        }
        else{//用户未登录，返回登录页
            $status = "fail";
            $message = "请先登录";
            $data = null;
        }
    }
    echo json_encode(["status" => $status, "message" => $message, "data" => $data]);
}
