<?php
/* require "./common/User.php";
//创建对象的实例
$a = [
    "username"=>"123",
    "password"=>"123",
    "wx"=>"123",
    "phone"=>"123",
];
$user = new User($a);
$user->addUser(); */

require "./common/Photo.php";
$b = [
    "photoTitle" => "111",
    "photoDesc" => "111",
    "photoSrc" => "111",
    "username" => "xmy",
];
$photo = new Photo($b);
// var_dump($photo);
$photo->addPhoto();
?>