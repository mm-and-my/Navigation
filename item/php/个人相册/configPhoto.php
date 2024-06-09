<?php
session_start();
if ($_SESSION["username"]) { //判断$_SESSION["username"]是否有数据
    require "./common/Photo.php"; //相片的类
    $kind = $_POST["kind"]; //得到要操作的类型
    if ($kind == "addPhoto") {
        $filename = $_FILES["photoSrc"]["name"];
        $ext = substr($filename, strrpos($filename, ".")); //将文件拓展图截取出来
        if ($ext == ".jpg" || $ext == ".png" || $ext == ".gif") {
            require "./common/thumb.php"; //把用于生成缩略图的文件包含进来
            $newName = date("YmdHis") . rand(100, 999) . $ext; //生成新的文件名
            move_uploaded_file($_FILES["photoSrc"]["tmp_name"], "./photo/" . $newName); //上传到photo文件夹
            thumb("./photo/" . $newName, $ext); //生成缩略图
            //写数据表
            $photoInfo = [
                "photoTitle" => $_POST["photoTitle"],
                "photoDesc" => $_POST["photoDesc"],
                "photoSrc" => $newName,
                "username" => $_SESSION["username"]
            ];
            $photo = new Photo($photoInfo);
            $photo->addPhoto();
            $status = "success";
            $message = "图片上传成功";
            $data = null;
        } else {
            $status = "fail";
            $message = "图片格式错误";
            $data = null;
        }
    } else if ($kind == "delPhoto") {
        $photo = new Photo(["id" => $_POST["id"]]);
        $photo->delPhoto();
        $status = "success";
        $message = "删除成功";
        $data = null;
    } else if ($kind == "updataPhoto") {
        $photoInfo = [
            "id" => $_POST["id"],
            "photoTitle" => $_POST["photoTitle"],
            "photoDesc" => $_POST["photoDesc"]
        ];
        $photo = new Photo($photoInfo);
        $photo->updataPhoto();
        $status = "success";
        $message = "修改成功";
        $data = null;
    }
} else {
    $status = "fail";
    $message = "请先登录";
    $data = null;
}
echo json_encode(["status" => $status, "message" => $message, "data" => $data]);
