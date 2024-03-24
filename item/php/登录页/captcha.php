<?php
function getCaptcha($width, $height, $lines = 5, $length = 6)
{
    $img = imagecreatetruecolor($width, $height);
    $bg_color = imagecolorallocate($img, mt_rand(200, 255), mt_rand(200, 255), mt_rand(200, 255));
    imagefill($img, 0, 0, $bg_color);
    //$str_arr = range('A', 'Z');
    $str_arr = array_merge(range("A", "Z"), range(0, 9));
    shuffle($str_arr);
    $captcha = '';
    for ($i = 0; $i < $length; $i++) {
        $captcha .= $str_arr[$i];
    }
    session_start();
    $_SESSION['captcha'] = $captcha;
    setcookie('captcha', $captcha);
    $str_color = imagecolorallocate($img, mt_rand(0, 80), mt_rand(0, 80), mt_rand(0, 80));
   // imagestring($img, 5, 10, 10, $captcha, $str_color);
    imagettftext($img,12,0,10,20,$str_color,realpath("./font/cambriaz.ttf"),$captcha);
    for ($i = 0; $i < $lines; $i++) {
        $line_color = imagecolorallocate($img, mt_rand(100, 160), mt_rand(100, 160), mt_rand(100, 160));
        imageline($img, mt_rand(0, $width), mt_rand(0, $height), mt_rand(0, $width), mt_rand(0, $height), $line_color);
    }
    header('content-type:image/png');
    imagepng($img);
    imagedestroy($img);
}
getCaptcha(100, 30 , 5 , 4);
