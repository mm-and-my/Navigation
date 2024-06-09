<?php
if (isset($_POST["fname"])) {
    $fname = $_POST["fname"];
    if (unlink("./upload/$fname")) {
        $str = "删除成功";
    } else {
        $str = "删除失败";
    }
    echo json_encode(["message" => $str]);
} else {
    header("location:xiang.php");
}
