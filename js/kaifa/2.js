//div总数
var zongshu = 22;
//标题命名部分
var ming = [
    ["基础部分"],//1a
    ["学校部分（java用户名：ftp21密码：Computer21）（学校机房：ftp://172.31.2.202）localhost"],
    ["素材部分"],//3c
    ["人工智能部分"],//4d
    ["应用下载部分"],//5e
    ["ps部分"],//6f
    ["音乐网站部分"],//7g
    ["视频网站部分"],//8h
    ["购物网站部分"],//9i
    ["源码网站部分"],//10j
    ["游戏部分"],//11k(steam官网需要打开uu加速器加速steam后可打开,Epic也需加速器)
    ["其他部分"],//12l
    ["java作业"],//13n
    ["综合实训"],//14m
    ["css样式部分"],//15o
    ["响应式"],//16p
    ["Vue"],//17q
    ["编程码部分"],//18r
    ["其他部分"],//19s
    ["文档部分"],//20t
    // [""],

];
//java作业
var nz = [
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

//css样式
var oz = [
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
    ["简约登录页", "./css样式项目/61-css-简约登录页/login.html"],
    ["阿里云盘登陆", "./css样式项目/62-css-阿里云盘登陆/login.html"],
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
    ["边缘融合加载", "./css样式项目/63-css-边缘融合加载/边缘融合loading.html"],
    ["走马灯", "./css样式项目/05-CSS-走马灯/走马灯.html"],
    ["双开门", "./css样式项目/02-CSS-双开门/CSS-双开门.html"],
    ["展开动画", "./css样式项目/35-css-展开动画/展开动画.html"],

    
    ["底部导航栏", "./css样式项目/css-底部导航栏/底部导航栏.html"],
    ["动态侧边栏", "./css样式项目/56-css-动态侧边栏/index.html"],
    ["内凹导航栏", "./css样式项目/css-内凹导航栏/内凹导航栏.html"],
    ["滑动导航栏", "./css样式项目/64-css-滑动导航栏/滑动导航栏.html"],
    ["悬停侧边栏", "./css样式项目/67-css-悬停侧边栏-代码/index.html"],
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
    ["贺卡纯css", "./css样式项目/65-css-中秋贺卡/无图无JS-中秋贺卡.html"],
    ["AR扫福", "./css样式项目/68-CSS-AR扫福效果/index.html"],
    ["雷达扫描效果", "./css样式项目/66-css-雷达扫描效果/css雷达扫描效果.html"],
     ["#", "./css样式项目/"]
    // ["#", "#"],
];

//融媒
var qz = [
    ["融媒2022项目","./融媒/融媒注释版/index.html"],
    ["主页","./融媒/主页/index.html"],
    ["加载页","./融媒/加载页/login.html"],
    ["规则页","./融媒/规则页/warring.html"],
    ["#","./融媒/融媒/index.html"],
]
//文档
var tz = [
    ['java文档(下载)', './合集文档/javascript.docx'],
    ['网页文档(下载)', './合集文档/网页常用单词代码.docx'],
    ['u盘错误代码', './txt/u盘错误代码.txt'],
    ['图片全屏方法', './txt/图片全屏方法.txt'],
    ['极域万能密码', './txt/极域万能密码.txt'],
    ["响应式文件", "./txt/响应式.txt"],

];
//响应式
var pz = [
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
     ["#", "#"],
];
//综合实训
var mz = [
    ['央视网布局', './综合实训/央视网布局/515zuoye.html'],
    ['进入变暗', './综合实训/进入变暗/02.html'],
    ['拉勾网', './综合实训/拉勾网/index.html'],
    ['穷游网', './综合实训/穷游网/index.html'],
    ['bili网页', './综合实训/bili网页/bilibili.html'],
    ['考试驾校网', './综合实训/考试驾校/haiding.html'],
];
//基础页面部分
var az = [
    ["百度一下", "https://www.baidu.com/"],
    ["文件导航", "./zuoyeduan.html"],
    ["原导航", "./导航.html"],
    ['百度网盘', 'https://pan.baidu.com/'],
    ['阿里云盘', 'https://www.aliyundrive.com/'],
    ['qq邮箱', 'https://mail.qq.com/'],
    ['163邮箱', 'https://mail.163.com/'],
    ['Google gmail', 'https://mail.google.com/'],
    ['知乎', 'https://www.zhihu.com/'],
    ['百度贴吧', 'https://tieba.baidu.com/'],
    ['百度文库', 'https://wenku.baidu.com/'],
    ['知网', 'https://www.cnki.net/'],
    ['bilibili', 'https://www.bilibili.com/'],
    ['樱花动漫(动漫)', 'http://www.yinghuacd.com/'],
    ['网易云音乐', 'https://music.163.com/'],
    ['QQ音乐', 'https://y.qq.com/'],
    ['新浪微博', 'https://www.sina.com.cn/'],
    // ["", ""],
];
//学校页面部分
var bz = [
    ['广东机电职业技术学院', 'https://www.gdmec.edu.cn/'],
    ['5y平台校内', 'http://192.168.153.230:800/'],
    ['校园网登录认证', 'http://219.222.95.38/'],
    ['学习通登录页面', 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a'],
    ['5y平台校外', 'http://58.248.104.83:800/'],
    ['学信网', 'https://www.chsi.com.cn/'],
    ['计算机证书查询', 'http://bz.ykoa.net/'],
    ['全国青少年普法网', 'https://qspfw.moe.gov.cn/'],
    ['易班', 'https://www.yiban.cn/'],
    // ['java云服务器', '124.223.44.7'],
    ['考试报名网站', 'https://bm.ykoa.net/'],
    ['易展翅', 'https://www.izhanchi.com/'],
    ['智慧职教', 'https://www.icve.com.cn/portal_new/portal/portal.html'],
    ['全国大学生创业服务网', 'https://cy.ncss.cn/'],
    ['VPN登录页面', 'https://webvpn.gdmec.edu.cn/frontend_static/frontend/login/index.html#/login'],
    // ["", ""],
];
//素材部分
var cz = [
     ['localhost', 'http://localhost/aaa/'],
    ['CSS菜鸟样式查询', 'https://www.runoob.com/cssref/css-selectors.html'],
    ['CSDN代码网站', 'https://www.csdn.net/'],
    ['阿里矢量图标库', 'https://www.iconfont.cn/'],
    ['jQuery', 'https://jquery.com/'],
    ['vue', 'https://cn.vuejs.org/'],
    ['韩FREE API ', 'https://api.vvhan.com/'],
    ['json ', 'https://www.json.cn/'],
    ['响应式文件', 'https://getbootstrap.com/'],
    ['屏幕尺寸', 'https://uiiiuiii.com/screen/index.htm'],
    ['github', 'https://github.com/'],
    ['gitee', 'https://gitee.com/'],
    ['jQuery插件库', 'https://www.jq22.com/'],
    ['jQuery之家', 'http://www.htmleaf.com/'],
    ['iconpark图标', 'https://iconpark.oceanengine.com/official'],
    ['优波', 'https://www.ubuuk.com/'],
    // ['js压缩网站', 'https://tool.oschina.net/jscompress/'],
    ['传智教育官网', 'https://stu.ityxb.com/'],
    ['文旌课堂', 'https://www.wenjingketang.com/'],
    ['蓝桥云课', 'https://www.lanqiao.cn/courses/10532'],
    ['腾讯全端', 'http://www.alloyteam.com/'],
    ['w3school', 'https://www.w3school.com.cn/'],
    ['Java 全栈知识体系', 'https://www.pdai.tech/'],
    ['tooool(魔法)', 'http://tooool.org/'],
    ['javascript', 'https://javascript.info/'],
    ['更多介绍java', 'https://blog.csdn.net/Ed7zgeE9X/article/details/123491916'],
    ['gitee', 'https://gitee.com/javanoteany/html_style'],
    ['开源小游戏', 'https://www.zhihu.com/tardis/sogou/art/563421207'],
    ['js压缩方法', 'https://blog.csdn.net/XiaoningZhu/article/details/100162898'],
    ['loading动画', 'https://epic-spinners.epicmax.co/'],
    ['eleui(money)', 'https://eleui.cn/'],
    ['txt', './txt/1.txt'],
    // ['', ''],
];
//人工智能部分
var dz = [
    ['chatgpt-sites', 'https://chatgpt-sites.com/'],
    // ['创意盒子', 'https://chuangyiduanbi.cloud/'],
    ['chatGPT(需登录)', 'https://chat.ttwa.cf/'],
    // ['chatGPT-2.0', 'https://dreamstudio.art/chat'],
     ['chatGPT-2.0', 'https://gpt.91chat-ai.com/chat?share=googlepromotion&gclid=EAIaIQobChMIuJ2ih7nP_wIVWYzpBR1Jpg5PEAEYASAAEgIw_PD_BwE'],
    // ['chatGPT-4次级', 'https://www.free-openai.com/'],
    ['AI写作', 'https://xiezuocat.com/?s=aigj'],
    ['AIPPT', 'https://design.meitu.com/ppt/?ref=ai-bot.cn'],
    ['logo生成', 'https://www.logosc.cn/'],
    ['gammaPPT', 'https://gamma.app/'],
    ['AI编程插件', 'https://sky-code.singularity-ai.com/index.html#/'],
    ['更多介绍人工', 'https://www.erweicaihong.cn/pptruanjian-xinyidai'],
     ['chatGPT-4(需魔法)', 'https://openai.com/product/gpt-4'],

    // ['', ''],
];
 //其他关联
var sz = [
    ["登录页面", "#"],
    ["猜猜我是谁", "./其他/猜猜我是谁/猜猜我是谁1.html"],
    ["hong期末", "./其他/1/index.html"],
    ["导航页模版", "./其他/geek-navigation/geek-navigation/index.html"],
    ["#", "#"],
    // ["#", "#"],
]; 

//编程码部分
var rz = [
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

//应用下载部分
var ez = [
    ['微信', 'https://pc.weixin.qq.com/'],
    ['qq', 'https://im.qq.com/pcqq/'],
    ['企业微信', 'https://work.weixin.qq.com/'],
    ['腾讯会议', 'https://meeting.tencent.com/'],
    ['钉钉', 'https://www.dingtalk.com/'],
    ['迅雷', 'https://www.xunlei.com/'],
    ['chrome', 'https://www.google.cn/chrome/'],
    ['firefox', 'http://www.firefox.com.cn/'],
    ['搜狗浏览器', 'https://ie.sogou.com/'],
    ['VScode', 'https://code.visualstudio.com/'],
    ['HbuilderX', 'https://www.dcloud.io/hbuilderx.html'],
    ['DEV C++', 'https://sourceforge.net/projects/orwelldevcpp/?source=directory'],
    ['git-bash命令行工具', 'https://git-scm.com/'],
    ['node官网地址', 'http://nodejs.cn/download/'],
    ['npm官网地址', 'https://www.npmjs.cn/'],

    ['PXcook', 'https://www.fancynode.com.cn/pxcook'],
    ['bandzip', 'http://king.mydown.com//tianji/child/f362.html?sfrom=166&TFT=1&DTS=1&keyID=73573'],
    ['7z', 'https://7-zip.org/'],
    ['Winrar', 'http://ak.rfxxkj.cn/soft01/winrar/baidu/index.html'],
    ['火绒', 'https://www.huorong.cn/'],
    ['搜狗输入法', 'https://shurufa.sogou.com/'],

    // ['', ''],
];
//ps部分
var fz = [
    ['矢量图标免费下载', 'https://www.onlinewebfonts.com/icon/'],
    ['png元素下载', 'http://3png.com/'],
    ['免费素材图片', 'https://www.pexels.com/zh-cn/'],
    ['publicdomainarchive', 'https://publicdomainarchive.com/'],
    ['yestone', 'https://www.yestone.com/'],
    ['微软图片搜索', 'https://cn.bing.com/images/trending'],
    ['中国色彩', 'http://zhongguose.com/'],
    ['更多色彩网站', 'https://zhuanlan.zhihu.com/p/62827480'],
    // ['', ''],
];
//音乐网站部分
var gz = [
    ['网易云音乐', 'https://music.163.com/'],
    ['QQ音乐', 'https://y.qq.com/'],
    ['酷狗音乐', 'https://www.kugou.com/'],
    ['酷我音乐', 'http://www.kuwo.cn/'],
    ['无损音乐吧', 'https://www.dtshot.com/'],
    ['无损音源吧', 'https://www.gugutm.com/'],
    ['文安音乐网', 'https://wenanb.com/'],
    ['站长素材', 'https://sc.chinaz.com/'],
    ['无名音乐(失效)', 'https://thewind.xyz/'],
    ['下载吧(失效)', 'https://music.y444.cn/#/'],
    ['51ape(失效)', 'https://www.51ape.cc/'],
    // ['', ''],
];
//视频网站部分
var hz = [
    ['腾讯视频', 'https://v.qq.com/'],
    ['爱奇艺', 'https://www.iqiyi.com/'],
    ['优酷', 'https://www.youku.com/channel/webhome'],
    ['芒果TV', 'https://www.mgtv.com/'],
    ['搜狐', 'https://tv.sohu.com/'],
    ['樱花动漫(动漫)', 'http://www.yinghuacd.com/'],
    ['樱花动漫(影视)', 'https://www.bytpl.com/'],
    ['次元街', 'https://www.ciyuanjie.cn/'],
    ['漫岛', 'https://www.mddm.tv/'],
    ['番茄动漫', 'https://www.fqfun.com/'],
    ['茶杯狐', 'https://www.foxcup.cc/'],
    ['片库', 'https://www.pknull.com/'],
    ['奈飞', 'https://go.tvso.me/'],
    ['1', 'http://www.2t58.com/'],
    ['2', 'https://www.ihaoge.net/song?ivk_sa=1024320u'],
    ['3', 'http://www.xxmp3.com/'],
    ['霹雳影视(失效)', 'https://plyingshi.com/'],
    // ['', ''],
];
//购物网站部分
var iz = [
    ['拼多多', 'https://www.pinduoduo.com/'],
    ['淘宝', 'https://www.taobao.com/'],
    ['苏宁易购', 'https://www.suning.com/'],
    ['京东', 'https://www.jd.com/'],
    ['唯品会', 'https://www.vip.com/'],
    // ['', ''],
];
//源码网站部分
var jz = [
    ['51源码', 'http://www.51aspx.com/'],
    ['酷源码', 'http://www.kyuanma.com/'],
    ['源码之家', 'http://www.codejia.com/'],
    ['more', '#'],
];
//游戏部分
var kz = [
    ['4399', 'https://www.4399.com/'],
    ['原神', 'https://ys.mihoyo.com/'],
    ['星穹铁道', 'https://sr.mihoyo.com/'],
    ['UU加速器', 'https://uu.163.com/'],
    ['小黑盒加速器', 'https://www.xiaoheihe.cn/home'],
    ['TapTap', 'https://www.taptap.cn/'],
    ['Steam(需魔法)', 'https://store.steampowered.com/'],
    ['Epic(需魔法)', 'https://store.epicgames.com/zh-CN/'],

];
//其他部分
var lz = [
    ['党史答案', 'https://zhuanlan.zhihu.com/p/420286513?ivk_sa=1024609v'],
    ['舞台答案', 'https://zhuanlan.zhihu.com/p/578370437?utm_id=0'],
    ['小蓝鸟(需魔法)', 'https://twitter.com/'],
    // ['VPN', ''],
];


//div循环
var zongs = ``;
for (let zongss = 1; zongss <= zongshu; zongss++) {
    zongs += `<div class = "nav1" id ="nav${zongss}">`;
    zongs += `<div class ="show1" id = "show${zongss}"></div>`;
}
zongs += `</div>`;
document.querySelector("#zong").innerHTML = zongs;

//基础
var a = `<h4>${ming[0][0]}</h4><ul>`;
for (index in az) {
    a += `<li><a href = '${az[index][1]}' target='_blank'>${az[index][0]}</a> </li>`
}
a += '</ul>';
document.querySelector('#show1').innerHTML = a;

//学校
var b = `<h4>${ming[1][0]}</h4><ul>`;
for (index in bz) {
    b += `<li><a href = '${bz[index][1]}' target='_blank'>${bz[index][0]}</a> </li>`
}
b += '</ul>';
document.querySelector('#show2').innerHTML = b;

//素材
var c = `<h4>${ming[2][0]}</h4><ul>`;
for (index in cz) {
    c += `<li><a href = '${cz[index][1]}' target='_blank'>${cz[index][0]}</a> </li>`
}
c += '</ul>';
document.querySelector('#show3').innerHTML = c;

//人工
var d = `<h4>${ming[3][0]}</h4><ul>`;
for (index in dz) {
    d += `<li><a href = '${dz[index][1]}' target='_blank'>${dz[index][0]}</a> </li>`
}
d += '</ul>';
document.querySelector('#show4').innerHTML = d;

//应用
var e = `<h4>${ming[4][0]}</h4><ul>`;
for (index in ez) {
    e += `<li><a href = '${ez[index][1]}' target='_blank'>${ez[index][0]}</a> </li>`
}
e += '</ul>';
document.querySelector('#show5').innerHTML = e;

//ps
var f = `<h4>${ming[5][0]}</h4><ul>`;
for (index in fz) {
    f += `<li><a href = '${fz[index][1]}' target='_blank'>${fz[index][0]}</a> </li>`
}
f += '</ul>';
document.querySelector('#show6').innerHTML = f;

//音乐
var g = `<h4>${ming[6][0]}</h4><ul>`;
for (index in gz) {
    g += `<li><a href = '${gz[index][1]}' target='_blank'>${gz[index][0]}</a> </li>`
}
g += '</ul>';
document.querySelector('#show7').innerHTML = g;

//视频
var h = `<h4>${ming[7][0]}</h4><ul>`;
for (index in hz) {
    h += `<li><a href = '${hz[index][1]}' target='_blank'>${hz[index][0]}</a> </li>`
}
h += '</ul>';
document.querySelector('#show8').innerHTML = h;

//购物
var i = `<h4>${ming[8][0]}</h4><ul>`;
for (index in iz) {
    i += `<li><a href = '${iz[index][1]}' target='_blank'>${iz[index][0]}</a> </li>`
}
i += '</ul>';
document.querySelector('#show9').innerHTML = i;


//源码
var j = `<h4>${ming[9][0]}</h4><ul>`;
for (index in jz) {
    j += `<li><a href = '${jz[index][1]}' target='_blank'>${jz[index][0]}</a> </li>`
}
j += '</ul>';
document.querySelector('#show10').innerHTML = j;

//游戏
var k = `<h4>${ming[10][0]}</h4><ul>`;
for (index in kz) {
    k += `<li><a href = '${kz[index][1]}' target='_blank'>${kz[index][0]}</a> </li>`
}
k += '</ul>';
document.querySelector('#show11').innerHTML = k;


//其他
var l = `<h4>${ming[11][0]}</h4><ul>`;
for (index in lz) {
    l += `<li><a href = '${lz[index][1]}' target='_blank'>${lz[index][0]}</a> </li>`
}
l += '</ul>';
document.querySelector('#show12').innerHTML = l;

//java
var n = `<h4>${ming[12][0]}</h4><ul>`;
for (index in nz) {
    n += `<li><a href = '${nz[index][1]}' target='_blank'>${nz[index][0]}</a> </li>`
}
n += '</ul>';
document.querySelector('#show13').innerHTML = n;

//综合实训
var m = `<h4>${ming[13][0]}</h4><ul>`;
for (index in mz) {
    m += `<li><a href = '${mz[index][1]}' target='_blank'>${mz[index][0]}</a> </li>`
}
m += '</ul>';
document.querySelector('#show14').innerHTML = m;

//css样式
var o = `<h4>${ming[14][0]}</h4><ul>`;
for (index in oz) {
    o += `<li><a href = '${oz[index][1]}' target='_blank'>${oz[index][0]}</a> </li>`
}
o += '</ul>';
document.querySelector('#show15').innerHTML = o;


//响应式
var p = `<h4>${ming[15][0]}</h4><ul>`;
for (index in pz) {
    p += `<li><a href = '${pz[index][1]}' target='_blank'>${pz[index][0]}</a> </li>`
}
p += '</ul>';
document.querySelector('#show16').innerHTML = p;


//vue
var q = `<h4>${ming[16][0]}</h4><ul>`;
for (index in qz) {
    q += `<li><a href = '${qz[index][1]}' target='_blank'>${qz[index][0]}</a> </li>`
}
q += '</ul>';
document.querySelector('#show17').innerHTML = q;


//编程码
var r = `<h4>${ming[17][0]}</h4><ul>`;
for (index in rz) {
    r += `<li><a href = '${rz[index][1]}' target='_blank'>${rz[index][0]}</a> </li>`
}
r += '</ul>';
document.querySelector('#show18').innerHTML = r;


//其他
var s = `<h4>${ming[18][0]}</h4><ul>`;
for (index in sz) {
    s += `<li><a href = '${sz[index][1]}' target='_blank'>${sz[index][0]}</a> </li>`
}
s += '</ul>';
document.querySelector('#show19').innerHTML = s;

//文档
var t = `<h4>${ming[19][0]}</h4><ul>`;
for (index in tz) {
    t += `<li><a href = '${tz[index][1]}' target='_blank'>${tz[index][0]}</a> </li>`
}
t += '</ul>';
document.querySelector('#show20').innerHTML = t;