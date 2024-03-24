<?php
/**
 * 生成缩略图
 * $image原图路径
 * $ext扩展名，只支持.jpg,.gif,.png
 * $thumb_path，缩略图存放路径
 * $width，宽度
 * $height，高度
 */
function thumb($image,$ext,$thumb_path,$width=200,$height=200){
    $func_from = "";
    $func_create = "";
    switch($ext){//根据不同的格式选择不同的函数
        case ".jpg":
            $func_from = "imagecreatefromjpeg";
            $func_create = "imagejpeg";
            break;
        case ".gif":
            $func_from = "imagecreatefromgif";
            $func_create = "imagegif";
            break;
        case ".png":
            $func_from = "imagecreatefrompng";
            $func_create = "imagepng";
            break;
    }
    $dst =  $func_from($image);//创建图像资源
    $dst_size = getimagesize($image);//得到文件的宽度，高度，类型
    $dst_width = $dst_size[0];//原图的宽度
    $dst_height = $dst_size[1];//原图的高度
    $dst_c = $dst_width / $dst_height;//宽高比例
    if($dst_c>=1){
        $thumb_width = $width;
        $thumb_height = $thumb_width / $dst_c;
    }
    else{
        $thumb_height = $height;
        $thumb_width = $thumb_height * $dst_c;
    }
    
    $thumb = imagecreatetruecolor($thumb_width,$thumb_height);//创建画布出来
    imagecopyresampled($thumb,$dst,0,0,0,0,$thumb_width,$thumb_height,$dst_width,$dst_height);

    $dst_info = pathinfo($image);
    $thumb_name = $dst_info['basename'];
    $func_create($thumb,"./$thumb_path/".$thumb_name);
    imagedestroy($dst);
    imagedestroy($thumb);
}