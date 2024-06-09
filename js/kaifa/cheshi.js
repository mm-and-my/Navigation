// <!-- 测试代码 -->
/* <script src="./js/cheshi.js"></script> */



// 获取屏幕尺寸
var i = 0;
var times = setInterval(function () {
    if (i == 0) {
        console.log("获取页面尺寸。执行10次，间隔1秒---开始");
        var a = '页面宽度:' + window.innerWidth;
        var b = '页面高度:' + window.innerHeight;
        console.log(`%c${a}---${b}`, 'color:#000;font-size:1em;font-family:"楷体";');
        i++;
        console.count(times);//代码执行次数
    }
    else {
        var a = '页面宽度:' + window.innerWidth;
        var b = '页面高度:' + window.innerHeight;
        console.log(`%c${a}---${b}`, 'color:#000;font-size:1em;font-family:"楷体";');
        i++;
        // console.log(i);
        console.count(times);//代码执行次数
        // 执行5次后终止此定时器
        if (i == 10) {
            clearInterval(times);
            console.log("获取页面尺寸---结束");
        }
    }
}, 1000);
// console.log(`%c${mynames}`,'color:blue;font-size:2em;font-family:"楷体";');


//定时刷新页面---5min
var t = setInterval(function () {
    location.reload(true);
}, 300000);



