<?php
include "thumb.php";
if (isset($_FILES["photo"])) {
    $msg ="";

for($i=0;$i<count($_FILES["photo"]["name"]);$i++){
    $fname = $_FILES["photo"]["name"][$i];
    $ext = substr($fname, strrpos($fname, "."));
    if ($ext == ".jpg" || $ext == ".png" || $ext == ".gif") {
        $newname = date("YmdHis") . rand(100, 900) . $ext;
        move_uploaded_file($_FILES["photo"]["tmp_name"][$i], "./upload/" . $newname);
        thumb("./upload/".$newname,$ext,"thumb");
        $status = "success";
        $msg .= "第".($i+1)."个图片上传成功\n";
    } else {
        $status = "false";
        $msg .= "第".($i+1)."个图片上传失败\n";
    }
}
    $jsarr = ["status" => $status, "message" => $msg];
    echo json_encode($jsarr);
}
/* var_dump($_FILES["photo"]); */
