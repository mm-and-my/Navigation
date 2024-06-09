<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>111</title>
</head>
<style>
    #qiu {
        width: 900px;
        height: 200px;
        /* border: 2px dashed #000; */
        margin: 0 auto;
        /* 居中 */
        /* background-color: #ddd; */
    }

    #qiu>div {
        display: inline-block;
        background: red;
        border-radius: 100%;
        height: 100px;
        width: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 50px;
        color: #fff;
        font-weight: bold;
        margin-right: 20px;
        background: radial-gradient(circle at 70% 30%, red 0%, black 120%);
        cursor: pointer;
    }

    #qiu>#blue {
        display: inline-block;
        background: blue;
        border-radius: 100%;
        height: 100px;
        width: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 50px;
        color: #fff;
        font-weight: bold;
        background: radial-gradient(circle at 70% 30%, blue 0%, black 120%);
        cursor: pointer;
    }

    #btn {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 40px;
        margin: 0 auto;
        font-size: 16px;
        color: #fff;
        /* cursor: hand; */
        background-color: #000000;
        cursor: pointer;
    }

    #btn:hover {
        background-color: white;
        color: #000;
        transition: .8s;
    }
</style>

<body>
    <div id="qiu">
        <div id="red1">1</div>
        <div id="red2">2</div>
        <div id="red3">3</div>
        <div id="red4">4</div>
        <div id="red5">5</div>
        <div id="red6">6</div>
        <div id="blue">7</div>
    </div>
    <input type="button" value="开奖咯" id="btn">
</body>
<script src="./js/jquery-3.7.0.min.js"></script>
<script>
    //自动停止程序
    $("#btn").click(function() {
        //将qiu里面的所有div全部加是class类t
        $("#qiu>div").addClass("t");
        //定时器
        var t = setInterval(function() {
            //div里面有class类t的动起来
            $("#qiu>div.t").html(parseInt(33 * Math.random()));
        }, 10); 

        $.post("a2.php", {}, function(e) {
            //div的点击事件
             $("#qiu>div").on("click",function(){
                $(this).removeClass("t");//去掉class类t
                $(this).html(e.data[$(this).index()]);//显示相应的号码
            }); 
            /* for (index in e.data) {
                $("#qiu>div").eq(index).html(e.data[index]);
            } */
        }, "json");

    });
</script>

</html>