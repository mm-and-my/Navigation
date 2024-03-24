//div总数
var zongshu = 11;
//标题命名部分
var ming = [
    ["基础"],//l
    ["java"],//b
    ["css"],//c
    ["C++"],//d
    ["Bootstrap"],//e
    ["vue"],//f
    ["实训"],//g
    ["//"],//h
    ["其他"],//i
    ["编程"],//j
    ["文档"],//k
];
//java作业
var bz = [
    ['/', '#'],
    ['键盘键值表', './images/键盘键值表.png'],
    ['润年判断', './javascript项目/润年判断/闰年判断.html'],
    ['BIM计算', './javascript项目/BIM/20230307.html'],
    ['找字小游戏', './javascript项目/找字小游戏/找字小游戏.html'],
    ['猜数字', './javascript项目/猜数字/猜数字小游戏.html'],
    ['彩票', './javascript项目/彩票/彩票升级版.html'],
    ['计算器', './javascript项目/计算器/计算器（格式）.html'],
    ['发红包', './javascript项目/发红包/模拟抢红包（格式）.html'],
    ['城市下拉列表', './javascript项目/城市下拉列表/城市下拉列表2.html'],
    ['猴子选大王', './javascript项目/猴子选大王/猴子选大王.html'],
    ['万年历', './javascript项目/万年历/万年历.html'],
    ['10秒小游戏', './javascript项目/10秒小游戏/10秒小游戏.html'],
    ['倒计时', './javascript项目/倒计时/倒计时.html'],
    ['事件倒计时', './javascript项目/事件倒计时升级版/事件倒计时.html'],
    ['获取网页信息', './javascript项目/获取操作系统信息/获取操作系统信息.html'],
    ['复选框按钮', './javascript项目/复选框按钮/2023042301.html'],
    ['显示隐藏密码', './javascript项目/显示隐藏密码/2023042302.html'],
    ['点亮城市', './javascript项目/点亮城市/点亮城市.html'],
    ['滑动导航栏', './javascript项目/中国航天梦（导航栏）/导航栏.html'],
    ['开红包', './javascript项目/开红包/red - 空白.html'],
    ['评论区', './javascript项目/评论区/评论.html'],
    ['鼠标移动', './javascript项目/鼠标移动/鼠标.html'],
    ['猜猜我是谁', './javascript项目/猜猜我是谁/猜猜我是谁1.html'],
    ['文本框换行', './javascript项目/输入框回车/6.html'],
    ['键盘按键', './javascript项目/键盘按键/5.html'],
    ['璃月美景', './javascript项目/璃月美景/yuan.html'],
    ['奔跑的小人', './javascript项目/奔跑小人/1.html'],
    ['列表操作', './javascript项目/列表操作/node.html'],
    ['全选框', './javascript项目/全选框/111.html'],
    ['高考加油', './javascript项目/高考加油/gaokaojiayou.html'],
    ['模拟弹幕', './javascript项目/模拟弹幕/65.html'],
    ['模拟滚屏', './javascript项目/模拟滚屏/滚屏.html'],
    ['五星好评', './javascript项目/五星好评/66.html'],
    ['万能翻译', './javascript项目/万能翻译/612.html'],
    ['星座运势', './javascript项目/星座运势/6122.html'],
    ['热搜榜', './javascript项目/热搜榜/hot.html'],
    ['复习-计算器', './javascript项目/计算器2/index.html'],
    ['复习-信息框查看', './javascript项目/信息框查看表/index.html'],
    ['复习-登录页', './javascript项目/登录页/index.html'],
    ['复习-下拉菜单', './javascript项目/下拉菜单/index.html'],
    ['复习-导航下拉栏', './javascript项目/导航下拉栏/index.html'],
];

var cz = [
    ["拟态键盘", "./css样式项目/A0002-拟态键盘/keyboard 1.html"],
    ["炫酷按钮精", "./css样式项目/炫酷按钮/炫酷按钮.html"],
    ["开关按钮", "./css样式项目/开关按钮/开关按钮.html"],
    ["波纹按钮特效", "./css样式项目/波纹按钮特效/波纹按钮特效.html"],
    ["刀光按钮特效", "./css样式项目/刀光按钮特效/刀光按钮特效.html"],
    ["镜面按钮", "./css样式项目/镜面按钮/镜面按钮.html"],
    ["按钮切换背景（普通）", "./css样式项目/按钮切换背景（普通）/按钮.html"],
    ["悬浮动画按钮", "./css样式项目/悬浮动画/悬浮按钮.html"],


    ["输入框上方显示", "./css样式项目/输入框上方显示/输入框上方显示.html"],
    ["动态搜索框", "./css样式项目/50-CSS-动态搜索框/动态搜索框.html"],
    ["输入框动效", "./css样式项目/输入框动效/输入框动效.html"],
    ["炫彩登录页", "./css样式项目/炫酷登录页/炫酷登录页.html"],
    ["流光登陆页", "./css样式项目/css-流光登陆页/登录页2.0.html"],
    ["登录页", "./css样式项目/登录页/登录.html"],
    ["花瓣登录", "./css样式项目/css-花瓣登录/花瓣登录.html"],
    ["水滴登录页", "./css样式项目/59-css-水滴登录页/index.html"],
    ["炫酷登录切换", "./css样式项目/CSS-炫酷登录切换/CSS-炫酷登录切换.html"],
    ["幽灵文字", "./css样式项目/幽灵文字/幽灵文字.html"],
    ["跳动文字", "./css样式项目/跳动文字/跳动文字.html"],
    ["炫酷下拉线", "./css样式项目/炫酷下拉线/炫酷拉下线.html"],
    ["文字水波特效", "./css样式项目/文字水波特效/文字水波特效.html"],
    ["文字聚光灯", "./css样式项目/聚光灯/聚光灯.html"],
    ["文字扫描加载", "./css样式项目/css-文字扫描加载/文字扫描加载.html"],
    ["文字穿透效果", "./css样式项目/CSS-文字穿透效果/index.html"],
    ["多种输入框动效", "./css样式项目/54-css-多种输入框动效/输入框特效.html"],
    ["立体式图片查看", "./css样式项目/立体式图片查看/立体式图片查看.html"],
    ["王者翻转框", "./css样式项目/42-css-王者翻转框/王者翻转框.html"],
    ["全景轮播", "./css样式项目/CSS-全景轮播/全景轮播.html"],
    ["垂直轮播", "./css样式项目/CSS-垂直轮播/垂直轮播.html"],
    ["焦点轮播", "./css样式项目/CSS-焦点轮播/index.html"],
    ["苹果自动滚屏", "./css样式项目/苹果自动滚屏/gunping.html"],
    ["全屏滑动加载", "./css样式项目/58-css-全屏滑动加载/index.html"],
    ["走马灯", "./css样式项目/05-CSS-走马灯/走马灯.html"],
    ["双开门", "./css样式项目/02-CSS-双开门/CSS-双开门.html"],
    ["展开动画", "./css样式项目/35-css-展开动画/展开动画.html"],

    
    ["底部导航栏", "./css样式项目/css-底部导航栏/底部导航栏.html"],
    ["动态侧边栏", "./css样式项目/56-css-动态侧边栏/index.html"],
    ["内凹导航栏", "./css样式项目/css-内凹导航栏/内凹导航栏.html"],
    ["苹果消息折叠效果", "./css样式项目/57-css-苹果消息折叠效果/index.html"],
    ["动感菜单", "./css样式项目/css-动感菜单/CSS-动感菜单.html"],
    ["旋转工具箱", "./css样式项目/旋转工具箱/旋转工具箱.html"],
    ["炫彩工具箱", "./css样式项目/css-炫彩工具箱/CSS-炫彩工具箱.html"],
    ["悬浮菜单", "./css样式项目/悬浮图标/悬浮图标.html"],
    ["悬停魔法棒", "./css样式项目/悬停魔法棒/悬停魔法棒.html"],
    ["环形进度条", "./css样式项目/环形进度条/环形进度条.html"],
    ["手风琴加载", "./css样式项目/手风琴/手风琴加载.html"],
    ["钢铁侠加载", "./css样式项目/css-钢铁侠加载/钢铁侠加载页.html"],
    ["魔力弹簧", "./css样式项目/魔力弹簧/魔力弹簧.html"],
    ["边框光彩流动", "./css样式项目/边框光彩流动/边框光彩流动.html"],
    ["旋转加载中", "./css样式项目/旋转加载中/旋转加载中.html"],
    ["云彩下雪", "./css样式项目/云彩下雪/云彩下雪.html"],
    ["动态搜索框", "./css样式项目/CSS-动态搜索框/动态搜索框.html"],
    ["口罩表情", "./css样式项目/口罩表情/口罩表情.html"],
    ["手机充电效果", "./css样式项目/手机充电效果/shoujiconddian.html"],
    ["渐变卡片", "./css样式项目/渐变卡片/渐变卡片.html"],
    ["太阳", "./css样式项目/太阳/太阳.html"],
    ["日历模拟器", "./css样式项目/日历模拟器/日历模拟器.html"],
    ["星际旋转", "./css样式项目/17-css-星际旋转/星际旋转.html"],
    ["鼠标痕迹", "./css样式项目/鼠标痕迹/鼠标痕迹.html"],
    ["3D立体相册", "./css样式项目/css-3D立体相册/3D立体相册-源码.html"],
    ["3D轮播卡片", "./css样式项目/CSS-3D轮播卡片(1)/3D轮播卡片.html"],
    ["3d导航", "./css样式项目/25-CSS-3d导航/3d导航.html"],
    ["大风车", "./css样式项目/CSS-大风车/CSS-大风车.html"],
    ["缩放动画", "./css样式项目/CSS-缩放动画/缩放动画.html"],
    ["网易云播放器", "./css样式项目/41-css-网易云播放器/css-网易云.html"],
    ["荧光转动表", "./css样式项目/36-css-荧光转动表/转动表.html"],
    ["爱你的心", "./css样式项目/23-CSS-爱你的心/爱你的心.html"],
   
    // ["#", "#"],
];

//C++
var dz = [
    ['#', '#'],
    ['#', '#'],
    ['#', '#'],
    ['#', '#'],
]

//vue
var fz = [
    ['#', '#'],
    ['#', '#'],
    ['#', '#'],
    ['#', '#'],
]
//
var hz = [
    ["#", "#"],
    ["#", "#"],
    ["#", "#"],
    ["#", "#"],
]
//文档
var tz = [
    ['java文档', './合集文档/javascript.docx'],
    ['网页文档', './合集文档/网页常用单词代码.docx'],
    ['u盘错误代码', './txt/u盘错误代码.txt'],
    ['图片全屏方法', './txt/图片全屏方法.txt'],
    ['极域万能密码', './txt/极域万能密码.txt'],
    ["响应式文件", "./txt/响应式.txt"],
];
//响应式
var ez = [
    ["警告框", "./响应式/j警告框.html"],
    ["分页", "./响应式/分页.html"],
    ["列表", "./响应式/列表.html"],
    ["加载器", "./响应式/加载器.html"],
    ["卡片", "./响应式/卡片.html"],
    ["按钮组", "./响应式/按钮组.html"],
    ["进度条", "./响应式/进度条.html"],
    ["菜单", "./响应式/菜单.html"],
    ["工具提示", "./响应式/工具提示.html"],
    ["链接", "./txt/响应式.txt"],
    ["期末项目genshin", "./响应式/期末/zong/mhyguanwang/index.html"],
  
];
//综合实训
var gz = [
    ['央视网布局', './综合实训/央视网布局/515zuoye.html'],
    ['进入变暗', './综合实训/进入变暗/02.html'],
    ['拉勾网', './综合实训/拉勾网/index.html'],
    ['穷游网', './综合实训/穷游网/index.html'],
    ['bili网页', './综合实训/bili网页/bilibili.html'],
    ['考试驾校网', './综合实训/考试驾校/haiding.html'],
];

var az = [
    ["百度一下", "https://www.baidu.com/"],
    ["主导航", "./dao2.0.html"],
    ["原导航", "./导航.html"],
    ['CSS菜鸟样式查询', 'https://www.runoob.com/cssref/css-selectors.html'],
    ['w3school', 'https://www.w3school.com.cn/'],
    ['阿里矢量图标库', 'https://www.iconfont.cn/'],
    ['韩FREE API ', 'https://api.vvhan.com/'],
    ['json ', 'https://www.json.cn/'],
    ['chrome', 'https://www.google.cn/chrome/'],
    ['VScode', 'https://code.visualstudio.com/'],
    ['HbuilderX', 'https://www.dcloud.io/hbuilderx.html'],
    ['DEV C++', 'https://sourceforge.net/projects/orwelldevcpp/?source=directory'],
    ['PXcook', 'https://www.fancynode.com.cn/pxcook'],
];
//其他关联
var iz = [
    ["登录页面", "#"],
    ["猜猜我是谁", "./其他/猜猜我是谁/猜猜我是谁1.html"],
    ["hong期末", "./其他/1/index.html"],
    ["导航页模版", "./其他/geek-navigation/geek-navigation/index.html"],
    ["#", "#"],
    // ["#", "#"],
];

//编程码部分
var jz = [
    ["3D旋转魔方", "./编程码/3D翻转魔方/index.html"],
    ["爱心飘落", "./编程码/爱心飘落/爱心飘落.html"],
    ["吹泡泡", "./编程码/吹泡泡/index.html"],
    ["罗盘时钟", "./编程码/罗盘时钟.html"],
    ["抖音罗盘", "./编程码/抖音罗盘/index.html"],
    ["黑客帝国代码雨", "./编程码/黑客帝国代码雨/index.html"],
    ["蝴蝶特效", "./编程码/蝴蝶特效/index.html"],
    ["画心", "./编程码/画心/index.html"],
    ["四叶草", "./编程码/四叶草/1.html"],
    ["烟花粒子", "./编程码/烟花/index.html"],
    ["烟花", "./编程码/烟花源码/烟花源码.html"],
    ["爱心代码", "./编程码/爱心代码.html"],
    // ["",""],
];


//div循环
var zongs = ``;
for (let zongss = 1; zongss <= zongshu; zongss++) {
    zongs += `<div class = "nav1" id ="nav${zongss}">`;
    zongs += `<div class ="show1" id = "show${zongss}"></div>`;
}
zongs += `</div>`;
document.querySelector("#zong").innerHTML = zongs;


var a = `<h4>${ming[0][0]}</h4><ul>`;
for (index in az) {
    a += `<li><a href = '${az[index][1]}' target='_blank'>${az[index][0]}</a> </li>`
}
a += '</ul>';
document.querySelector('#show1').innerHTML = a;



var b = `<h4>${ming[1][0]}</h4><ul>`;
for (index in bz) {
    b += `<li><a href = '${bz[index][1]}' target='_blank'>${bz[index][0]}</a> </li>`
}
b += '</ul>';
document.querySelector('#show2').innerHTML = b;


var c = `<h4>${ming[2][0]}</h4><ul>`;
for (index in cz) {
    c += `<li><a href = '${cz[index][1]}' target='_blank'>${cz[index][0]}</a> </li>`
}
c += '</ul>';
document.querySelector('#show3').innerHTML = c;


var d = `<h4>${ming[3][0]}</h4><ul>`;
for (index in dz) {
    d += `<li><a href = '${dz[index][1]}' target='_blank'>${dz[index][0]}</a> </li>`
}
d += '</ul>';
document.querySelector('#show4').innerHTML = d;


var e = `<h4>${ming[4][0]}</h4><ul>`;
for (index in ez) {
    e += `<li><a href = '${ez[index][1]}' target='_blank'>${ez[index][0]}</a> </li>`
}
e += '</ul>';
document.querySelector('#show5').innerHTML = e;


var f = `<h4>${ming[5][0]}</h4><ul>`;
for (index in fz) {
    f += `<li><a href = '${fz[index][1]}' target='_blank'>${fz[index][0]}</a> </li>`
}
f += '</ul>';
document.querySelector('#show6').innerHTML = f;


var g = `<h4>${ming[6][0]}</h4><ul>`;
for (index in gz) {
    g += `<li><a href = '${gz[index][1]}' target='_blank'>${gz[index][0]}</a> </li>`
}
g += '</ul>';
document.querySelector('#show7').innerHTML = g;


var h = `<h4>${ming[7][0]}</h4><ul>`;
for (index in hz) {
    h += `<li><a href = '${hz[index][1]}' target='_blank'>${hz[index][0]}</a> </li>`
}
h += '</ul>';
document.querySelector('#show8').innerHTML = h;


var i = `<h4>${ming[8][0]}</h4><ul>`;
for (index in iz) {
    i += `<li><a href = '${iz[index][1]}' target='_blank'>${iz[index][0]}</a> </li>`
}
i += '</ul>';
document.querySelector('#show9').innerHTML = i;



var j = `<h4>${ming[9][0]}</h4><ul>`;
for (index in jz) {
    j += `<li><a href = '${jz[index][1]}' target='_blank'>${jz[index][0]}</a> </li>`
}
j += '</ul>';
document.querySelector('#show10').innerHTML = j;
