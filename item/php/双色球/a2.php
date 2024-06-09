<?php
$arr1 = range(1, 33);
$arr2 = array_rand($arr1, 6); //随机抽取6个数
$blue = rand(1, 16);//篮球号码 1-16的随机数
$blue_num = $blue < 10 ? ('0' . $blue) : $blue;
foreach ($arr2 as $index) {
    $red[] = $arr1[$index] < 10 ? ('0' . $arr1[$index]) : $arr1[$index];
};
array_push($red, $blue_num);//篮球号码加到红球的数组里面
$json_array = ["status" => "success", "data" => $red];
//json_encode() 数组转换成json格式，处理数据后发送到前端
// json_decode() 在接受数据时，把json格式转到数组或对象
echo json_encode($json_array);

