//%c特许占位符，用于修改控制台文字颜色,换行符（\n）
const settime = '最后修改时间：' + '\n' + '2023年12月2日23:04:37';
console.log(`%c${settime}`, 'color:red;font-size:2em;font-family:"楷体";');
const mynames = "开发：" + "\n" + " 谢my";
function myname() {
    // window.location.href = "https://github.com/";
    const url = 'https://github.com/';
    //打开新窗口
    window.open(url);
}
var vm = new Vue({
    data: {
        mynames: "谢my"
    }
});
vm.$mount('#app');
//子div个数
const divbox = 34;
//use method:${boxh4[num]}
//split("")转数组
const boxh4 = ("Base-Section,School-Section,Material-Section,Chat_Gpt-Section,Apply_Download-Section,预留部分0(不显示于网页之上),Teach_Website-Section,预留部分1(不显示于网页之上),预留部分2(不显示于网页之上),CSS-Section,Javascript-Section(ftp://172.31.2.202),PHP-Section(localhost ftp://172.31.30.100),Vue-Section,Bootstrap-Section,Practical_Training,MySQL-Section,Linux-Section,HTML-Section,预留部分4(不显示于网页之上),MediumSection,Else-Section,Programming-Section,Document-Section,Else_Website-Section,PS-Section,Open_Source-Section,预留部分5(不显示于网页之上),预留部分6(不显示于网页之上),Music_Web-Section,Video_Web-Section,Shop_Web-Section,Game_Web-Section,Tips-Section,预留部分8(不显示于网页之上)").split(",");
//use method:${boxh4_second[num][0]}
// ['英文命名', '文件夹路径','中文命名','section'],
const boxh4_second = [
    ['Base', './', '基础部分', '#box1'],
    ['School', './', '学校部分', '#box2'],
    ['Material', './', '素材部分', '#box3'],
    ['Chat_Gpt', './', '人工智能部分', '#box4'],
    ['Apply_Download', './', '下载部分', '#box5'],
    ['预留部分0(不显示于网页之上)', './', '预留部分', '#box6'],
    ['Teach_Website', './', '教学网站', '#box7'],
    ['预留部分1(不显示于网页之上)', './', '预留部分', '#box8'],
    ['预留部分2(不显示于网页之上)', './', '预留部分', '#box9'],
    ['CSS', './css_item/', 'css样式部分', '#box10'],
    ['Javascript(ftp://172.31.2.202)', './javascript_item/', 'javascript部分', '#box11'],
    ['PHP(localhost ftp://172.31.30.100)', './php39/', 'PHP部分', '#box12'],
    ['Vue', './vue/', 'Vue部分', '#box13'],
    ['Bootstrap', './bootstrap_item/', '响应式部分', '#box14'],
    ['Practical_Training', './Practical_training/', '实训部分', '#box15'],
    ['MySQL', './mysql/', '数据库部分', '#box16'],
    ['Linux', './linux/', 'Linux部分', '#box17'],
    ['HTML', './html/', '网页部分', '#box18'],
    ['预留部分4(不显示于网页之上)', './', '预留部分', '#box19'],
    ['Medium', './medium/', '融媒', '#box20'],
    ['Else', './else/', '其他', '#box21'],
    ['Programming', './programming/', '编程码部分', '#box22'],
    ['Document', './document/', '文档', '#box23'],
    ['Else_Website', './', '其他部分', '#box24'],
    ['PS', './', 'PS部分', '#box25'],
    ['Open_Source', './', '源码网站', '#box26'],
    ['预留部分5(不显示于网页之上)', './', '预留部分', '#box27'],
    ['预留部分6(不显示于网页之上)', './', '预留部分', '#box28'],
    ['Music_Website', './', '音乐部分', '#box29'],
    ['Video_Website', './', '视频网站', '#box30'],
    ['Shop_Website', './', '购物网站', '#box31'],
    ['Game_Website', './', '游戏网站', '#box32'],
    ['Tips', './tips/', '提示部分', '#box33'],
    ['预留部分8(不显示于网页之上)', './', '预留部分', '#box34'],
];
console.log(boxh4);
console.log(boxh4_second);

//数组区域
//基础页面部分Base
//注意:所输入名称不要超过10位中文字节
const num1z = [
    ["百度一下", "https://www.baidu.com/"],
    ['localhost', 'http://localhost/aaa/'],
    ['在线翻译', 'https://fanyi.youdao.com/index.html#/'],
    // ["文件导航", "./zuoyeduan.html"],
    // ["原导航", "./导航.html"],
    ["远程导航预览", "https://htmlpreview.github.io/?https://mm-and-my.github.io/Navigation/"],
    ['远程导航', 'https://mm-and-my.github.io/Navigation/'],
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
    ['百度脑图', 'https://naotu.baidu.com/'],
    ['思维导图', 'https://boardmix.cn/mindmapping/?channel=bd&utm_source=baidu&utm_medium=ocpc&utm_term=mindmap&_channel_track_key=tWzZt0X0&bd_vid=11901531421781939060'],
    ['原神', 'https://ys.mihoyo.com/'],
    // ["", ""],
];
//学校页面部分School
const num2z = [
    ['学信网', 'https://www.chsi.com.cn/'],
    ['广东机电职业技术学院', 'https://www.gdmec.edu.cn/'],
    ['校园网登录认证', 'http://219.222.95.38/'],
    ['学习通登录页面', 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a'],
    ['5y平台校内', 'http://192.168.153.230:800/'],
    ['5y平台校外', 'http://58.248.104.83:800/'],
    ['计算机证书报考', 'http://gdoa.scnu.edu.cn/bm'],
    ['计算机证书查询', 'http://bz.ykoa.net/'],
    ['全国青少年普法网', 'https://qspfw.moe.gov.cn/'],
    ['易班', 'https://www.yiban.cn/'],
    // ['java云服务器', '124.223.44.7'],
    ['考试报名网站', 'https://bm.ykoa.net/'],
    ['易展翅', 'https://www.izhanchi.com/'],
    ['智慧职教', 'https://www.icve.com.cn/portal_new/portal/portal.html'],
    ['全国大学生创业服务网', 'https://cy.ncss.cn/'],
    ['全国大学生职业规划大赛', 'https://zgs.chsi.com.cn/home'],
    ['VPN登录页面', 'https://webvpn.gdmec.edu.cn/frontend_static/frontend/login/index.html#/login'],
    // ["", ""],
];
//素材部分material
const num3z = [
    ['localhost', 'http://localhost/aaa/'],
    ['图片压缩', 'https://www.tutieshi.com/'],
    ['Hello算法', 'https://github.com/krahets/hello-algo'],
    ['PHP文档', 'https://learnku.com/docs/laravel/9.x'],
    ['Bootstrap文档', 'https://v4.bootcss.com/docs/getting-started/introduction/'],
    ['CSS菜鸟样式查询', 'https://www.runoob.com/cssref/css-selectors.html'],
    ['CSDN代码网站', 'https://www.csdn.net/'],
    ['w3school', 'https://www.w3school.com.cn/'],
    ['github', 'https://github.com/'],
    ['阿里矢量图标库', 'https://www.iconfont.cn/'],
    ['jQuery', 'https://jquery.com/'],
    ['vue', 'https://cn.vuejs.org/'],
    ['gitee', 'https://gitee.com/'],
    ['json ', 'https://www.json.cn/'],
    ['bootstrap', 'https://getbootstrap.com/'],
    ['韩FREE API ', 'https://api.vvhan.com/'],
    ['屏幕尺寸', 'https://uiiiuiii.com/screen/index.htm'],
    ['IP地址计算器', 'https://ipv4calc.bmcx.com/'],
    ['jQuery插件库', 'https://www.jq22.com/'],
    ['jQuery之家', 'http://www.htmleaf.com/'],
    ['iconpark图标', 'https://iconpark.oceanengine.com/official'],
    ['优波', 'https://www.ubuuk.com/'],
    ['阿里镜像站', 'https://developer.aliyun.com/mirror/'],
    ['华为镜像站', 'https://mirrors.huaweicloud.com/home'],
    // ['js压缩网站', 'https://tool.oschina.net/jscompress/'],
    ['传智教育官网', 'https://stu.ityxb.com/'],
    ['文旌课堂', 'https://www.wenjingketang.com/'],
    ['人邮教育', 'https://www.ryjiaoyu.com/'],
    ['蓝桥云课', 'https://www.lanqiao.cn/courses/10532'],
    ['腾讯全端', 'http://www.alloyteam.com/'],
    ['Java 全栈知识体系', 'https://www.pdai.tech/'],
    ['tooool(魔法)', 'http://tooool.org/'],
    ['javascript', 'https://javascript.info/'],
    ['更多介绍java', 'https://blog.csdn.net/Ed7zgeE9X/article/details/123491916'],
    ['开源小游戏', 'https://www.zhihu.com/tardis/sogou/art/563421207'],
    ['loading动画', 'https://epic-spinners.epicmax.co/'],
    ['eleui(收费)', 'https://eleui.cn/'],
    // ['', ''],
];
//人工智能部分chatgpt
const num4z = [
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
//应用下载部分apply
const num5z = [
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
    ['node官网地址', 'http://nodejs.cn/download/'],
    ['npm官网地址', 'https://www.npmjs.cn/'],
    ['PyCharm', 'https://www.jetbrains.com/pycharm/download/?section=windows'],

    ['PXcook', 'https://www.fancynode.com.cn/pxcook'],
    ['todesk', 'https://www.todesk.com/'],
    ['bandzip', 'http://king.mydown.com//tianji/child/f362.html?sfrom=166&TFT=1&DTS=1&keyID=73573'],
    ['7z', 'https://7-zip.org/'],
    ['Winrar', 'http://ak.rfxxkj.cn/soft01/winrar/baidu/index.html'],
    ['火绒', 'https://www.huorong.cn/'],
    ['搜狗输入法', 'https://shurufa.sogou.com/'],
    ['87键键盘驱动', 'http://www.ygwaishe.com'],
    ['git官网', 'https://git-scm.com/ '],
    ['jetbrains全家桶', 'https://www.jetbrains.com.cn/products/ '],
    ['FinalShell', 'https://www.hostbuf.com/t/988.html '],
    ['vmware', 'https://www.vmware.com/cn/products/workstation-pro.html '],

    // ['', ''],
];
//预留部分0（不显示于网页之上）
const num6z = [
    ['#', '#'],
    ['#', '']
];
//教学网站部分Teach
const num7z = [
    ['#', ''],
    ['#', '']
];
//预留部分1
const num8z = [
    ['#', ''],
    ['#', '']
];
//预留部分2
const num9z = [
    ['#', ''],
    ['#', '']
];
//css
const num10z = [
    ["css提取码", "./tips/css提取码.html"],
    ["拟态键盘", "./css_item/A0002-拟态键盘/keyboard 1.html"],
    ["炫酷按钮精", "./css_item/炫酷按钮/炫酷按钮.html"],
    ["开关按钮", "./css_item/开关按钮/开关按钮.html"],
    ["波纹按钮特效", "./css_item/波纹按钮特效/波纹按钮特效.html"],
    ["刀光按钮特效", "./css_item/刀光按钮特效/刀光按钮特效.html"],
    ['点击按钮打钩效果', './css_item/82-css-点击按钮打钩效果/index.html'],
    ["镜面按钮", "./css_item/镜面按钮/镜面按钮.html"],
    ["按钮切换背景（普通）", "./css_item/按钮切换背景（普通）/按钮.html"],
    ["悬浮动画按钮", "./css_item/悬浮动画/悬浮按钮.html"],
    // btn
    ["按钮彩条特效", "./css_item/btn/1按钮彩条特效/index.html"],
    ["按钮气泡特效", "./css_item/btn/2按钮气泡特效/index.html"],
    ["按钮特效", "./css_item/btn/3按钮特效3/index.html"],
    ["按钮悬停拓展", "./css_item/btn/4按钮悬停上下显示/index.html"],
    ["按钮特效", "./css_item/btn/5鼠标过按钮特效/index.html"],

    //alert
    ["弹窗样式", "./css_item/alert/1弹窗样式/index.html"],
    ["弹窗右下", "./css_item/alert/2弹窗右下/index.html"],
    ["弹幕功能", "./css_item/alert/3弹幕功能/index.html"],
    ["输入框上方显示", "./css_item/输入框上方显示/输入框上方显示.html"],
    // select
    ["点击更多", "./css_item/select/1点击更多/index.html"],
    ["点击伸缩导航栏", "./css_item/select/2点击伸缩导航栏/index.html"],
    ["更多分享", "./css_item/select/4更多分享3/index.html"],
    ["分享插件块", "./css_item/select/3分享插件块/index.html"],
    ["搜索栏伸缩", "./css_item/select/5搜索栏伸缩2/index.html"],
    ["搜索栏样式", "./css_item/select/6搜索栏样式/index.html"],
    ["下拉列表美化", "./css_item/select/7下拉列表美化/index.html"],
    ["动态搜索框", "./css_item/50-CSS-动态搜索框/动态搜索框.html"],
    ["输入框动效", "./css_item/输入框动效/输入框动效.html"],
    ["炫彩登录页", "./css_item/炫酷登录页/炫酷登录页.html"],
    ["流光登陆页", "./css_item/css-流光登陆页/登录页2.0.html"],
    //reg
    ["登录管理模版", "./css_item/reg_login/1登录管理模版/sign.html"],
    ["登录页-单", "./css_item/reg_login/2登录页/index.html"],
    ["登录页-带验证", "./css_item/reg_login/3登录页123/index.html"],
    ["登录页-三", "./css_item/reg_login/4登录注册忘记密码/login.html"],
    ["登录页-枫叶三", "./css_item/reg_login/5登录注册忘记密码2/login.html"],
    ["登录页-简约三", "./css_item/reg_login/6登录注册忘记密码3/login.html"],
    ["登录页-时尚三", "./css_item/reg_login/7登录注册忘记密码4/login.html"],
    ["登录页-验证三", "./css_item/reg_login/8登录注册忘记密码5/login.html"],
    ["登录页-单", "./css_item/reg_login/9登录注册页12/index.html"],
    ["注册页-单", "./css_item/reg_login/9登录注册页12/index2.html"],
    ["动画注册登录", "./css_item/reg_login/10动画注册登录/login.html"],
    ["滑块验证注册", "./css_item/reg_login/11滑块验证注册/index.html"],
    ["京东注册页", "./css_item/reg_login/12京东注册页/index.html"],
    ["块显示登录注册", "./css_item/reg_login/13块显示登录注册/index.html"],
    ["上小图登录页", "./css_item/reg_login/14上小图登录页/index.html"],
    ["手机验证码登录页", "./css_item/reg_login/15手机验证码登录页/index.html"],
    ["双边登录页", "./css_item/reg_login/16双边登录页/index.html"],
    ["微信扫码登录", "./css_item/reg_login/17微信扫码登录/index.html"],
    ["小鹰闭眼登录", "./css_item/reg_login/18小鹰闭眼登录/index.html"],
    ["验证码登录页", "./css_item/reg_login/19验证码登录页/index.html"],

    ["登录页", "./css_item/登录页/登录.html"],
    ["花瓣登录", "./css_item/css-花瓣登录/花瓣登录.html"],
    ["密码灯登陆", "./css_item/69-css-密码灯登陆/index.html"],
    ["注册登录切换", "./css_item/70-CSS-注册登录切换/index.html"],
    ["简约登录页", "./css_item/61-css-简约登录页/login.html"],
    ["阿里云盘登陆", "./css_item/62-css-阿里云盘登陆/login.html"],
    ["水滴登录页", "./css_item/59-css-水滴登录页/index.html"],
    ["炫酷登录切换", "./css_item/CSS-炫酷登录切换/CSS-炫酷登录切换.html"],
    ["幽灵文字", "./css_item/幽灵文字/幽灵文字.html"],
    ["跳动文字", "./css_item/跳动文字/跳动文字.html"],
    ["炫酷下拉线", "./css_item/炫酷下拉线/炫酷拉下线.html"],
    ["文字水波特效", "./css_item/文字水波特效/文字水波特效.html"],
    ["文字聚光灯", "./css_item/聚光灯/聚光灯.html"],
    ["文字加载动效", "./css_item/文字加载动效/index.html"],
    ["输入文字上浮放大", "./css_item/输入文字上浮放大/index.html"],
    ["输入文字闪光效果", "./css_item/输入文字闪光效果/index.html"],
    ["文字扫描加载", "./css_item/css-文字扫描加载/文字扫描加载.html"],
    ["文字穿透效果", "./css_item/CSS-文字穿透效果/index.html"],
    ["上下扩大盒子", "./css_item/box/1盒子上下扩大/index.html"],
    ["手风琴展开盒子", "./css_item/box/2盒子手风琴展开/index.html"],
    ["盒子图片展开", "./css_item/box/3盒子图片展开/index.html"],
    ["盒子选中边框特效", "./css_item/box/4盒子选中边框特效/index.html"],
    ["块盒子放大", "./css_item/box/5块盒子放大/index.html"],
    ["商品多图片查看", "./css_item/box/6商品多图片查看/index.html"],
    ["商品列表详情", "./css_item/box/7商品列表详情/index.html"],
    ["悬停盒子文字", "./css_item/box/8鼠标悬停查看盒子文字/index.html"],
    ["悬停盒子文字", "./css_item/box/9鼠标悬停盒子文字查看/index.html"],
    ["悬停打开盒子", "./css_item/box/10悬停打开盒子/index.html"],
    ["全屏选项卡", "./css_item/box/11全屏选项卡/index.html"],
    ["圆形遮罩效果", "./css_item/box/12圆形遮罩效果/index.html"],
    ["方型遮罩投票", "./css_item/box/13方型遮罩-投票/index.html"],


    ["多种输入框动效", "./css_item/54-css-多种输入框动效/输入框特效.html"],
    ["多行文本展开", "./css_item/71-css-多行文本展开/index.html"],
    ["选中动画", "./css_item/77-css-自定义选中动画/CSS-自定义选中效果.html"],
    ["立体式图片查看", "./css_item/立体式图片查看/立体式图片查看.html"],
    ['悬停相册', './css_item/80-CSS-3D悬停相册（轮播）/CSS-悬停相册.html'],
    ["王者翻转框", "./css_item/42-css-王者翻转框/王者翻转框.html"],
    ["全景轮播", "./css_item/CSS-全景轮播/全景轮播.html"],
    ["垂直轮播", "./css_item/CSS-垂直轮播/垂直轮播.html"],
    ["焦点轮播", "./css_item/CSS-焦点轮播/index.html"],
    ["侧边小图轮播", "./css_item/banner/1侧边小图轮播/index.html"],
    ["导航条轮播", "./css_item/banner/2导航条轮播/index.html"],
    ["分享轮播", "./css_item/banner/3分享轮播/index.html"],
    ["轮播图带下方按钮", "./css_item/banner/6轮播图带下方按钮/index.html"],
    ["轮播虚化转换", "./css_item/banner/7轮播虚化转换/index.html"],
    ["购物人员轮播", "./css_item/banner/5购物人员轮播/index.html"],
    ["展开卡片效果", "./css_item/banner/4展开卡片效果/index.html"],
    ["苹果自动滚屏", "./css_item/苹果自动滚屏/gunping.html"],
    ["全屏滑动加载", "./css_item/58-css-全屏滑动加载/index.html"],
    ["边缘融合加载", "./css_item/63-css-边缘融合加载/边缘融合loading.html"],
    ["走马灯", "./css_item/05-CSS-走马灯/走马灯.html"],
    ['粘性页面定位', './css_item/粘性页面定位/111.html'],
    ['图片放大效果', './css_item/图片放大效果/111.html'],
    ['视差效果', './css_item/视差效果/1.html'],
    ["双开门", "./css_item/02-CSS-双开门/CSS-双开门.html"],
    ["展开动画", "./css_item/35-css-展开动画/展开动画.html"],
    ["新闻选项卡", "./css_item/新闻选项卡/index.html"],
    ["选项卡片切换", "./css_item/选项卡片切换/index.html"],
    ["选项卡切换", "./css_item/选项卡切换/index.html"],


    ["底部导航栏", "./css_item/css-底部导航栏/底部导航栏.html"],
    ["动态侧边栏", "./css_item/56-css-动态侧边栏/index.html"],
    ["内凹导航栏", "./css_item/css-内凹导航栏/内凹导航栏.html"],
    ["滑动导航栏", "./css_item/64-css-滑动导航栏/滑动导航栏.html"],
    //nav
    ["二级导航条", "./css_item/nav/1二级导航条/index.html"],
    ["下拉导航条", "./css_item/nav/2下拉导航条/index.html"],
    ["侧边导航", "./css_item/nav/3侧边导航/index.html"],
    ["按钮侧边", "./css_item/nav/4按钮侧边导航/index.html"],
    ["侧边二级", "./css_item/nav/5侧边二级导航/index.html"],
    ["侧边二级图片", "./css_item/nav/6侧边二级图片导航/index.html"],
    ["侧边伸缩栏", "./css_item/nav/7侧边伸缩栏/index.html"],
    ["侧边图标提示", "./css_item/nav/8侧边图标提示导航/index.html"],
    ["导航二级模版", "./css_item/nav/9导航条二级模版/index.html"],
    ["导航条特效1", "./css_item/nav/10导航条特性2/index.html"],
    ["导航条特效2", "./css_item/nav/11导航条样式/index.html"],
    ["导航下拉菜单", "./css_item/nav/12导航下拉菜单/index.html"],
    ["文字上下滚动", "./css_item/nav/13导航样式文字上下滚动/index.html"],
    // ["二级导航", "./css_item/nav/14二级导航/index.html"],
    ["二级导航-单模", "./css_item/nav/14二级导航2/index.html"],
    ["二级导航-带图", "./css_item/nav/15二级导航3/index.html"],
    ["二级导航-全下", "./css_item/nav/16二级导航4/index.html"],
    // ["二级导航带图", "./css_item/nav/18二级导航带图/index.html"],
    ["二级导航下拉", "./css_item/nav/17二级导航下拉/index.html"],
    ["二级导航悬停", "./css_item/nav/18二级导航悬停/index.html"],
    ["二级点击下拉", "./css_item/nav/19二级点击下拉/index.html"],
    ["二级图片导航", "./css_item/nav/20二级图片导航/index.html"],
    ["二级下拉导航", "./css_item/nav/21二级下拉导航2/index.html"],
    ["伸缩导航", "./css_item/nav/22伸缩导航/index.html"],
    ["鼠标高亮导航", "./css_item/nav/23鼠标高亮导航/index.html"],
    ["双重导航1", "./css_item/nav/24双重导航/index.html"],
    ["双重导航2", "./css_item/nav/25双重导航2/index.html"],
    ["右下导航条", "./css_item/nav/26右下导航条/index.html"],
    ["古风导航效果", "./css_item/nav/27古风导航效果/index.html"],

    //timeline
    ["时间轴-左右", "./css_item/timeline/时间轴1/index.html"],
    ["时间轴-视频", "./css_item/timeline/时间轴2/index.html"],
    ["时间轴-历程", "./css_item/timeline/时间轴3/index.html"],
    ["时间轴-弯曲", "./css_item/timeline/时间轴4/index.html"],
    ["时间轴-动画", "./css_item/timeline/时间轴6/index.html"],
    ["可点击时间轴", "./css_item/timeline/5可点击时间轴/index.html"],

    ["二级项目选择", "./css_item/二级项目选择/index.html"],
    ["导航下拉菜单", "./css_item/76-css-导航下拉菜单-代码/index.html"],
    ['下划线跟随导航', './css_item/81-css-下划线跟随导航/下划线跟随导航.html'],
    ["下划线导航栏", "./css_item/73-css-下划线导航栏/下划线导航栏.html"],
    ["悬停侧边栏", "./css_item/67-css-悬停侧边栏-代码/index.html"],
    ["悬停导航栏", "./css_item/75-css-悬停导航栏/悬停导航栏.html"],
    ["苹果消息折叠效果", "./css_item/57-css-苹果消息折叠效果/index.html"],
    ["动感菜单", "./css_item/css-动感菜单/CSS-动感菜单.html"],
    ["旋转工具箱", "./css_item/旋转工具箱/旋转工具箱.html"],
    ["旋转打开盒子", "./css_item/旋转打开盒子/index.html"],
    ["炫彩工具箱", "./css_item/css-炫彩工具箱/CSS-炫彩工具箱.html"],
    ["悬浮菜单", "./css_item/悬浮图标/悬浮图标.html"],
    ["悬停魔法棒", "./css_item/悬停魔法棒/悬停魔法棒.html"],
    //footer
    ["页脚模版-详", "./css_item/footer/页脚模版1/index.html"],
    ["页脚模版-深色", "./css_item/footer/页脚模版2/index.html"],
    ["页脚模版-简", "./css_item/footer/页脚模版3/index.html"],
    ["页脚模版-表单", "./css_item/footer/页脚模版4/index.html"],
    ["页脚模版-块链接", "./css_item/footer/页脚模版5/index.html"],
    ["页脚模版-简", "./css_item/footer/页脚模版6/index.html"],
    ["页脚标签", "./css_item/footer/7页脚标签/index.html"],
    ["页尾特效", "./css_item/footer/8页尾特效/index.html"],




    //outtime
    ["倒计时-中", "./css_item/outtimes/1倒计时/index.html"],
    ["倒计时-左", "./css_item/outtimes/2倒计时3/index.html"],
    ["倒计时搜索栏", "./css_item/outtimes/3倒计时搜索栏/index.html"],
    ["倒计时-方格", "./css_item/outtimes/4倒计时/index.html"],
    ["环形进度条", "./css_item/环形进度条/环形进度条.html"],
    ["手风琴加载", "./css_item/手风琴/手风琴加载.html"],
    //loading
    ["连接服务器加载", "./css_item/loading/2加载页-连接服务器/index.html"],
    ["加载页30种", "./css_item/loading/1加载页30种/index.html"],
    ["圆形贴贴动画", "./css_item/loading/3圆形贴贴动画/index.html"],
    ["进度条", "./css_item/进度条/index.html"],
    ["钢铁侠加载", "./css_item/css-钢铁侠加载/钢铁侠加载页.html"],
    ["魔力弹簧", "./css_item/魔力弹簧/魔力弹簧.html"],
    ["边框光彩流动", "./css_item/边框光彩流动/边框光彩流动.html"],
    ["旋转加载中", "./css_item/旋转加载中/旋转加载中.html"],
    ["云彩下雪", "./css_item/云彩下雪/云彩下雪.html"],
    ["动态搜索框", "./css_item/CSS-动态搜索框/动态搜索框.html"],
    ["口罩表情", "./css_item/口罩表情/口罩表情.html"],
    ["手机充电效果", "./css_item/手机充电效果/shoujiconddian.html"],
    ["渐变卡片", "./css_item/渐变卡片/渐变卡片.html"],
    ["太阳", "./css_item/太阳/太阳.html"],
    ["日历模拟器", "./css_item/日历模拟器/日历模拟器.html"],
    ["星际旋转", "./css_item/17-css-星际旋转/星际旋转.html"],
    ["鼠标痕迹", "./css_item/鼠标痕迹/鼠标痕迹.html"],
    ["3D立体相册", "./css_item/css-3D立体相册/3D立体相册-源码.html"],
    ["3D轮播卡片", "./css_item/CSS-3D轮播卡片(1)/3D轮播卡片.html"],
    ["滚动卡片", "./css_item/滚动卡片/index.html"],
    ["3d导航", "./css_item/25-CSS-3d导航/3d导航.html"],
    ["步骤条", "./css_item/72-css-步骤条/CSS-步骤条源码.html"],
    ["大风车", "./css_item/CSS-大风车/CSS-大风车.html"],
    ["缩放动画", "./css_item/CSS-缩放动画/缩放动画.html"],
    ["网易云播放器", "./css_item/41-css-网易云播放器/css-网易云.html"],
    //imitate
    ["仿i7素材网站", "./css_item/imitate/1仿i7素材网站/index.html"],
    ["QQ音乐播放器", "./css_item/imitate/2仿QQ音乐播放器/index.html"],
    ["仿百度搜图", "./css_item/imitate/3仿百度搜图/index.html"],
    ["仿商城", "./css_item/imitate/4仿商城/index.html"],
    ["仿微信", "./css_item/imitate/5仿微信/index.html"],
    ["仿文件夹下拉", "./css_item/imitate/6仿文件夹下拉/index.html"],
    ["仿聊天框", "./css_item/imitate/7仿聊天框/index.html"],
    ["仿日历考勤表", "./css_item/imitate/8仿日历考勤表/index.html"],
    ["仿播放器可伸缩", "./css_item/imitate/9仿音乐播放器可伸缩/index.html"],
    ["仿日历", "./css_item/imitate/10仿日历/index.html"],

    //404
    ["404页面出错", "./css_item/404/1-404-页面出错/index.html"],
    ["404错误返回", "./css_item/404/2-404-错误返回/index.html"],
    ["404错误简约", "./css_item/404/3-404-错误简约/index.html"],
    ["404动画飞碟", "./css_item/404/4-404-动画飞碟/index.html"],
    ["404施工", "./css_item/404/5-404-施工/404.html"],
    ["404搜索框", "./css_item/404/6-404-搜索框/index.html"],
    ["404网站维护中", "./css_item/404/7-404-网站维护中/index.html"],
    ["404页面", "./css_item/404/8-404-页面/index.html"],
    //remove_phone
    ['手机底部导航效果', './css_item/remove_phone/1手机底部导航效果/index.html'],
    ['手机端聊天应用程序', './css_item/remove_phone/2手机端聊天应用程序/index.html'],
    ['手机端音乐app', './css_item/remove_phone/3手机端音乐app/index.html'],
    ['移动段下拉条', './css_item/remove_phone/4移动段下拉条/index.html'],
    ['移动多图片上传', './css_item/remove_phone/5移动-多图片上传/index.html'],
    ['移动购物车', './css_item/remove_phone/6移动-购物车/index.html'],
    ['移动滑动更多', './css_item/remove_phone/7移动-滑动更多/index.html'],
    ['移动搜索', './css_item/remove_phone/8移动-搜索/index-search.html'],
    ['移动图片上传', './css_item/remove_phone/9移动-图片上传/index.html'],
    ['移动设计合集', './css_item/remove_phone/10移动设计合集/index.html'],

    ["荧光转动表", "./css_item/36-css-荧光转动表/转动表.html"],
    ["爱你的心", "./css_item/23-CSS-爱你的心/爱你的心.html"],
    ["贺卡纯css", "./css_item/65-css-中秋贺卡/无图无JS-中秋贺卡.html"],
    ["AR扫福", "./css_item/68-CSS-AR扫福效果/index.html"],
    ["雷达扫描效果", "./css_item/66-css-雷达扫描效果/css雷达扫描效果.html"],
    ["光线加载动画", "./css_item/74-css-光线加载动画/光线加载动画.html"],
    ['滑动拼图验证码', './css_item/78-css-滑动拼图验证码/index.html'],
    ['鸿蒙OS动画', './css_item/79-css-鸿蒙OS动画/鸿蒙OS动画.html'],
    ['3D翻转Tab', './css_item/83-css-3D翻转Tab/index.html'],
    ['颜色选择器', './css_item/84-css-颜色选择器-代码/index.html'],
    ['搜索标签选择', './css_item/搜索标签选择/index.html'],
    ['作品上传', './css_item/作品上传/index.html'],
    ['打赏', './css_item/打赏/index.html'],
    ['生日蛋糕', './css_item/生日蛋糕/index.html'],
    ['3d步数', './css_item/3d步数/index.html'],
    ['爱心背景动画', './css_item/爱心背景动画/index.html'],




    // ["#", "#"],
];
//javascript
const num11z = [
    ['/', '#'],
    ['键盘键值表', './images/键盘键值表.png'],
    ['润年判断', './javascript_item/润年判断/闰年判断.html'],
    ['BIM计算', './javascript_item/BIM/20230307.html'],
    ['找字小游戏', './javascript_item/找字小游戏/找字小游戏.html'],
    ['猜数字', './javascript_item/猜数字/猜数字小游戏.html'],
    ['彩票', './javascript_item/彩票/彩票升级版.html'],
    ['计算器', './javascript_item/计算器/计算器（格式）.html'],
    ['发红包', './javascript_item/发红包/模拟抢红包（格式）.html'],
    ['城市下拉列表', './javascript_item/城市下拉列表/城市下拉列表2.html'],
    ['猴子选大王', './javascript_item/猴子选大王/猴子选大王.html'],
    ['万年历', './javascript_item/万年历/万年历.html'],
    ['10秒小游戏', './javascript_item/10秒小游戏/10秒小游戏.html'],
    ['倒计时', './javascript_item/倒计时/倒计时.html'],
    ['事件倒计时', './javascript_item/事件倒计时升级版/事件倒计时.html'],
    ['获取网页信息', './javascript_item/获取操作系统信息/获取操作系统信息.html'],
    ['复选框按钮', './javascript_item/复选框按钮/2023042301.html'],
    ['显示隐藏密码', './javascript_item/显示隐藏密码/2023042302.html'],
    ['点亮城市', './javascript_item/点亮城市/点亮城市.html'],
    ['滑动导航栏', './javascript_item/中国航天梦（导航栏）/导航栏.html'],
    ['开红包', './javascript_item/开红包/red - 空白.html'],
    ['评论区', './javascript_item/评论区/评论.html'],
    ['鼠标移动', './javascript_item/鼠标移动/鼠标.html'],
    ['猜猜我是谁', './javascript_item/猜猜我是谁/猜猜我是谁1.html'],
    ['文本框换行', './javascript_item/输入框回车/6.html'],
    ['键盘按键', './javascript_item/键盘按键/5.html'],
    ['璃月美景', './javascript_item/璃月美景/yuan.html'],
    ['奔跑的小人', './javascript_item/奔跑小人/1.html'],
    ['列表操作', './javascript_item/列表操作/node.html'],
    ['全选框', './javascript_item/全选框/111.html'],
    ['高考加油', './javascript_item/高考加油/gaokaojiayou.html'],
    ['模拟弹幕', './javascript_item/模拟弹幕/65.html'],
    ['模拟滚屏', './javascript_item/模拟滚屏/滚屏.html'],
    ['五星好评', './javascript_item/五星好评/66.html'],
    ['五星评分效果', './javascript_item/五星评分效果/index.html'],
    ['万能翻译', './javascript_item/万能翻译/612.html'],
    ['星座运势', './javascript_item/星座运势/6122.html'],
    ['热搜榜', './javascript_item/热搜榜/hot.html'],
    ['复习-计算器', './javascript_item/计算器2/index.html'],
    ['复习-信息框查看', './javascript_item/信息框查看表/index.html'],
    ['复习-登录页', './javascript_item/登录页/index.html'],
    ['复习-下拉菜单', './javascript_item/下拉菜单/index.html'],
    ['复习-导航下拉栏', './javascript_item/导航下拉栏/index.html'],
    ['随机生成颜色', './javascript_item/黑马/随机生成颜色.html'],
    ['取款机操作', './javascript_item/黑马/议ATM取款机操作.html'],
    ['秒数转换为时间', './javascript_item/黑马/秒数转换为时间.html'],
    ['生成柱形图', './javascript_item/黑马/根据数据生成柱形图.html'],
    ['字段格式验证', './javascript_item/字段格式验证/index.html'],
    ['生成柱形图', './javascript_item/黑马/根据数据生成柱形图.html'],
    ['密码强度验证1', './javascript_item/密码强度验证/index.html'],
    ['密码强度验证2', './javascript_item/密码强度验证1/index.html'],
    ['滑块验证1', './javascript_item/滑块验证/index.html'],
    ['滑块验证2', './javascript_item/滑块验证2/index.html'],
    ['表单验证', './javascript_item/表单验证/index.html'],
    ['滑块验证', './javascript_item/滑块验证/index2.html'],
    ['元素拖拽', './javascript_item/元素拖拽/index.html'],
    ['输入框获取时间', './javascript_item/输入框获取时间/index.html'],
    ['标签库', './javascript_item/标签库/index.html'],
    ['记事本', './javascript_item/记事本/index.html'],
    ['键盘控制滑屏', './javascript_item/键盘控制滑屏/index.html'],
    ['列表双向切换', './javascript_item/列表双向切换/index.html'],
    ['扁平幸运大抽奖', './javascript_item/扁平幸运大抽奖/index.html'],
    ['大转盘抽奖', './javascript_item/大转盘抽奖/index.html'],
    ['九宫格抽奖', './javascript_item/九宫格抽奖/index.html'],
    ['积分扭蛋机', './javascript_item/积分扭蛋机/index.html'],



];
//php
const num12z = [
    ['ftp', './tips/ftp.html'],
    ['localhost-D盘', 'http://localhost/aaa/'],
    ['localhost-导航', 'http://localhost/bbb/'],
    ['登录页', 'http://localhost/bbb/php39/登录页/login.php'],
    ['双色球', 'http://localhost/bbb/php39/双色球/1.php'],
    ['简易相册', 'http://localhost/bbb/php39/相册/xiang.php'],
    // ['', ''],
    // ['', '']
];
//vue
const num13z = [
    ['作业提交链接', 'http://edugzsw.com/hsh_work/2023-2024-1/stu2203.html'],
    ['vue项目网站', './tips/vue项目网站.html'],
    ['vue基础模版.', './vue/模版/模版.html'],
    ['卡片滚动', './vue/项目/vue卡片滚动/index.html'],
    ['按钮点击次数', './vue/项目/按钮点击次数/testTemp.html'],
    ['查找手机信息', './vue/项目/查找手机信息/6.html'],
    ['登录按钮事件', './vue/项目/登录按钮事件/3.html'],
    ['登录页', './vue/项目/登录页/4.html'],
    ['查找内容', './vue/项目/动画/查找内容.html'],
    ['方格动画', './vue/项目/动画/方格动画.html'],
    ['数组添加与删除', './vue/项目/动画/数组添加与删除.html'],
    ['添加小球', './vue/项目/动画/添加小球.html'],
    ['文字动画效果3', './vue/项目/动画/文字动画效果3.html'],
    ['文字过渡效果1', './vue/项目/动画/文字过渡效果1.html'],
    ['文字过渡效果2', './vue/项目/动画/文字过渡效果2.html'],
    ['圆形动画效果', './vue/项目/动画/圆形动画效果.html'],
    ['购物价格计算', './vue/项目/购物价格计算/2.html'],
    ['判断快递费用', './vue/项目/判断快递费用/4.html'],
    ['事件', './vue/项目/事件/1.html'],
    ['事件冒泡', './vue/项目/事件冒泡/testTemp.html'],
    ['数据更新与隐藏', './vue/项目/数据更新与隐藏/test.html'],
    ['菜单视图', './vue/项目/菜单视图.html'],
    ['菜单搜索', './vue/项目/菜单搜索.html'],
    ['菜单选择', './vue/项目/菜单选择.html'],
    ['价格表合计', './vue/项目/价格表合计.html'],
    ['文字输入框', './vue/项目/文字输入框.html'],
    ['#', '']
];
//bootstrap
const num14z = [
    ["詹俊浩转天网站", "./bootstrap_item/詹俊浩转天网站/index.html"],
    ["线上生鲜商城", "./bootstrap_item/线上生鲜商城/index.html"],
    ["登录页", "./bootstrap_item/Login/login.html"],
    ["警告框", "./bootstrap_item/j警告框.html"],
    ["分页", "./bootstrap_item/分页.html"],
    ["列表", "./bootstrap_item/列表.html"],
    ["加载器", "./bootstrap_item/加载器.html"],
    ["卡片", "./bootstrap_item/卡片.html"],
    ["按钮组", "./bootstrap_item/按钮组.html"],
    ["进度条", "./bootstrap_item/进度条.html"],
    ["菜单", "./bootstrap_item/菜单.html"],
    ["工具提示", "./bootstrap_item/工具提示.html"],
    ["链接", "./txt/响应式.txt"],
    ["期末项目genshin", "./bootstrap_item/期末/zong/mhyguanwang/index.html"],
    ["画廊模版1", "./bootstrap_item/bootstrap画廊模版/index.html"],
    ["画廊模版2", "./bootstrap_item/bootstrap画廊模版/index2.html"],
    ["画廊模版3", "./bootstrap_item/bootstrap画廊模版/index3.html"],
    ["画廊模版4", "./bootstrap_item/bootstrap画廊模版/index4.html"],
    ["轮播图", "./bootstrap_item/bootstrap轮播图/index.html"],
    ["二级导航带图", "./bootstrap_item/二级导航带图/index.html"],
    ["模版", "./bootstrap_item/bootstrap模版/index.html"],
    ["表格样式", "./bootstrap_item/bootstrap表格样式/index.html"],
    ["可编辑表格", "./bootstrap_item/可编辑表格boot/index.html"],
    ["模版-美食", "./bootstrap_item/model/1模版-美食/index.html"],
    ["模版-商务", "./bootstrap_item/model/2模版-商务/index.html"],
    ["#", "#"],
];
//Practical training
const num15z = [
    ['央视网布局', './Practical_training/央视网布局/515zuoye.html'],
    ['进入变暗', './Practical_training/进入变暗/02.html'],
    ['拉勾网', './Practical_training/拉勾网/index.html'],
    ['穷游网', './Practical_training/穷游网/index.html'],
    ['bili网页', './Practical_training/bili网页/bilibili.html'],
    ['考试驾校网', './Practical_training/考试驾校/haiding.html'],
];
//mysql
const num16z = [
    ['#', '#'],
    ['#', '#']
];
//linux
const num17z = [
    ['#', '#'],
    ['#', '#']
];
//html
const num18z = [
    ['input输入框效果', './html/input.html'],
    ['新闻列表', './html/18-综合案例-新闻列表.html'],
    ['新闻', './html/19-综合案例1-新闻.html'],
    ['导航块', './html/19-综合案例1.html'],
    ['产品', './html/20-综合案例2-产品.html'],
    ['五彩导航', './html/20-综合案例2.html'],
    ['学生信息表', './html/21-综合案例-学生信息表.html'],
    ['表单', './html/22-综合案例-表单.html'],
    ['小米布局', './html/小米布局.html'],
    ['小米模块', './html/小米模块.html'],
    ['导航二维码', './html/导航二维码/02-导航二维码显示隐藏切换案例-完成样式.html'],
    ['小兔鲜项目', './html/小兔鲜项目/index.html'],
    ['新浪导航', './html/新浪导航.html'],
    ['网页新闻列表', './html/网页新闻列表.html'],
    ['学成在线网页', './html/study/index.html'],
    ['卡片模块案例', './html/卡片模块案例/02-卡片模块hot图片案例-完成样式.html'],
    ['小米登录框', './html/小米登录框/小米登录框.html'],
    ['爱宠知识新闻', './html/爱宠知识新闻/爱宠知识案例.html'],
    ['网站解决方案页', './html/网站解决方案页/index.html'],
    ['套餐选择页', './html/套餐选择页/index.html'],
    ['相册效果', './html/相册效果/index.html'],
    ['卡片样式切换', './html/卡片样式切换/index.html'],
    ['滚动式网页', './html/滚动式网页/index.html'],
    ['邮箱注册页', './html/邮箱注册页/index.html'],
    ['前端模版', './html/前段模版/index.html'],
    ['分类选项卡', './html/分类选项卡/index.html'],
    ['企业管理-高级', './html/企业管理模版/index.html'],
    ['导航登陆定位', './html/auto_position/2导航登陆定位/index.html'],


   
    ['模版-膳食', './html/model/1模版-膳食/index.html'],
    ['模版-餐厅', './html/model/2模版-餐厅/index.html'],
    ['管理模版', './html/model/3管理模版/index.html'],
    ['后台管理模版', './html/model/4后台管理模版/index.html'],
    ['电子商务大数据', './html/model/5广西电子商务公共服务平台大数据中心/index.html'],
    ['物流大数据平台', './html/model/6湖南物流大数据服务平台/index.html'],
    ['大数据总揽图', './html/model/7大数据运维总揽图/index.html'],
    ['model蔬菜', './html/model/model/model (1)/index.html'],
    ['model运输', './html/model/model/model (2)/index.html'],
    ['model', './html/model/model/model (3)/index.html'],
    ['model社区', './html/model/model/model (4)/index.html'],
    ['model', './html/model/model/model (5)/index.html'],
    ['model', './html/model/model/model (6)/index.html'],
    ['model健身', './html/model/model/model (7)/index.html'],
    ['model晒图', './html/model/model/model (8)/index.html'],
    ['model名片', './html/model/model/model (9)/index.html'],
    ['model酒', './html/model/model/model (10)/index.html'],
    ['model电子', './html/model/model/model (11)/index.html'],
    ['model', './html/model/model/model (12)/index.html'],
    ['model电子', './html/model/model/model (13)/index.html'],
    ['model酒店', './html/model/model/model (14)/index.html'],
    ['model梦幻', './html/model/model/model (15)/index.html'],
    ['model', './html/model/model/model (16)/index.html'],
    ['model护理', './html/model/model/model (17)/index.html'],
    ['model', './html/model/model/model (18)/index.html'],
    ['model肉', './html/model/model/model (19)/index.html'],
    ['model花', './html/model/model/model (20)/index.html'],
    ['model摄影', './html/model/model/model (21)/index.html'],
    ['model汽车', './html/model/model/model (22)/index.html'],
    ['model动画', './html/model/model/model (23)/index.html'],
    ['model', './html/model/model/model (24)/index.html'],

    ['电子网站1', './html/model/8IT产品电子商务网站/index.html'],
    ['电子网站2', './html/model/8IT产品电子商务网站/index-2.html'],
    ['Taxi出租车', './html/model/9Taxi出租车公司/index.html'],
    ['别墅房地产评估', './html/model/10别墅房地产评估公司/index.html'],
    ['冰淇淋企业', './html/model/11冰淇淋企业网站/index.html'],
    ['残障儿童公益项目', './html/model/12残障儿童公益项目/index.html'],
    ['侧导航清爽', './html/model/13侧导航清爽网站/index.html'],
    ['超大气宠物世界', './html/model/14超大气宠物世界/index.html'],
    ['宠物猫买卖交易', './html/model/15宠物猫买卖交易/index.html'],
    ['创意家居工艺', './html/model/16创意家居工艺/index.html'],
    ['大气宽屏婚庆', './html/model/17大气宽屏婚庆公司/index.html'],
    ['大气商务酒店', './html/model/18大气商务酒店/index.html'],
    ['电影影视门户', './html/model/19电影影视门户/index.html'],
    ['房地产公司', './html/model/20房地产公司/index.html'],
    ['房地产新楼盘', './html/model/21房地产新楼盘/index.html'],
    ['仿淘宝首页', './html/model/22仿淘宝首页/index.html'],
    ['粉色清爽404', './html/model/23粉色清爽404/index.html'],
    ['服务器销售',"./html/model/24服务器销售网站/index.html"],
    ['服装箱包销售1',"./html/model/25服装箱包销售网站/index.html"],
    ['服装箱包销售2',"./html/model/25服装箱包销售网站/index-2.html"],
    ['工业制造业门户',"./html/model/26工业制造业门户/index.html"],
    ['大气的企业',"./html/model/27精美大气的品牌企业/index.html"],
    ['卡通动漫风格',"./html/model/28卡通动漫风格/index.html"],
    ['蓝色笑脸404',"./html/model/29蓝色可爱笑脸404/index.html"],
    ['贸易物流企业',"./html/model/30贸易物流企业/index.html"],
    ['母婴用品行业',"./html/model/31母婴用品行业/index.html"],
    ['室内装饰',"./html/model/32室内装饰/index.html"],
    ['蔬菜农场',"./html/model/33蔬菜农场/index.html"],
    ['游泳馆培训',"./html/model/34游泳馆培训网站/index.html"],

    // ['#', ''],
];
//预留4
const num19z = [
    ['#', ''],
    ['#', '']
];
//medium
const num20z = [
    ["融媒2022项目", "./medium/融媒注释版/index.html"],
    ["主页", "./medium/主页/index.html"],
    ["加载页", "./medium/加载页/login.html"],
    ["规则页", "./medium/规则页/warring.html"],
    ["#", "./medium/融媒/index.html"],
];
//else
const num21z = [
    ['党史答案', 'https://zhuanlan.zhihu.com/p/420286513?ivk_sa=1024609v'],
    ['舞台答案', 'https://zhuanlan.zhihu.com/p/578370437?utm_id=0'],
    ['大学生国家安全教育答案', 'https://m.jhq8.cn/daan/2023/04/1764306.html'],
    // ['VPN', ''],
];
//programming
const num22z = [
    ['gitee', 'https://gitee.com/javanoteany/html_style'],
    ["3D旋转魔方", "./programming/3D翻转魔方/index.html"],
    ["爱心飘落", "./programming/爱心飘落/爱心飘落.html"],
    ["吹泡泡", "./programming/吹泡泡/index.html"],
    ["罗盘时钟", "./programming/罗盘时钟.html"],
    ["抖音罗盘", "./programming/抖音罗盘/index.html"],
    ["黑客帝国代码雨", "./programming/黑客帝国代码雨/index.html"],
    ["蝴蝶特效", "./programming/蝴蝶特效/index.html"],
    ["画心", "./programming/画心/index.html"],
    ["四叶草", "./programming/四叶草/1.html"],
    ["烟花粒子", "./programming/烟花/index.html"],
    ["烟花", "./programming/烟花源码/烟花源码.html"],
    ["爱心代码", "./programming/爱心代码.html"],
    // ["",""],
];
//document
const num23z = [
    ['java文档(PDF)', './document/javascript.pdf'],
    ['网页文档(PDF)', './document/网页常用单词代码.pdf'],
    ['PHP(无)', './document/PHP知识点总结.pdf'],
    ['VUE(无)', './document/'],
    ['MYSQL(PDF)', './document/mySQL.pdf'],
    ['达梦手册(PDF)', './document/DM数据库实操手册（Linux版.pdf'],
    ['达梦讲义(PDF)', './document/数据库实训课程讲义-最终版.pdf'],
    ['达梦讲义整理(PDF)', './document/达梦数据库.pdf'],
    ['达梦练习题(PDF)', './document/练习题.pdf'],
];
//else
const num24z = [
    ["登录页面", "#"],
    ["猜猜我是谁", "./else/猜猜我是谁/猜猜我是谁1.html"],
    ["学霸搞怪", "./xueba/index.html"],
    ["hong期末", "./else/1/index.html"],
    ["导航页模版", "./else/geek-navigation/geek-navigation/index.html"],
    ["传统文化页面", "./else/tradional/代码/index.html"],
    ["模拟植物大战僵尸", "./else/植物大战僵尸/HTML5植物大战僵尸/index.html"],
    ["轮盘", "./else/lunpan/index.html"],
    // ["#", "#"],
];
//ps
const num25z = [
    ['矢量图标免费下载', 'https://www.onlinewebfonts.com/icon/'],
    ['png元素下载', 'http://3png.com/'],
    ['免费素材图片', 'https://www.pexels.com/zh-cn/'],
    ['publicdomainarchive', 'https://publicdomainarchive.com/'],
    ['yestone', 'https://www.yestone.com/'],
    ['微软图片搜索', 'https://cn.bing.com/images/trending'],
    ['中国色彩', 'http://zhongguose.com/'],
    ['优设', 'https://hao.uisdc.com/color/'],
    ['更多色彩网站', 'https://zhuanlan.zhihu.com/p/62827480'],
    // ['', ''],
];
//open course
const num26z = [
    ['51源码', 'http://www.51aspx.com/'],
    ['酷源码', 'http://www.kyuanma.com/'],
    ['源码之家', 'http://www.codejia.com/'],
    ['more', '#'],
];
//预留5
const num27z = [
    ['#', ''],
    ['#', '']
];
//预留6
const num28z = [
    ['#', ''],
    ['#', '']
];
//music
const num29z = [
    ['网易云音乐', 'https://music.163.com/'],
    ['QQ音乐', 'https://y.qq.com/'],
    ['酷狗音乐', 'https://www.kugou.com/'],
    ['酷我音乐', 'http://www.kuwo.cn/'],
    ['无损音乐吧', 'https://www.dtshot.com/'],
    ['无损音源吧', 'https://www.gugutm.com/'],
    ['文安音乐网', 'https://wenanb.com/'],
    ['站长素材', 'https://sc.chinaz.com/'],
    ['爱听音乐网', 'http://www.2t58.com/'],
    ['爱好歌', 'https://www.ihaoge.net/song?ivk_sa=1024320u'],
    ['MP3下载网', 'http://www.xxmp3.com/'],
    // ['无名音乐(失效)', 'https://thewind.xyz/'],
    // ['下载吧(失效)', 'https://music.y444.cn/#/'],
    // ['51ape(失效)', 'https://www.51ape.cc/'],
    // ['', ''],
];
//video
const num30z = [
    ['腾讯视频', 'https://v.qq.com/'],
    ['爱奇艺', 'https://www.iqiyi.com/'],
    ['优酷', 'https://www.youku.com/channel/webhome'],
    ['芒果TV', 'https://www.mgtv.com/'],
    ['搜狐', 'https://tv.sohu.com/'],
    ['樱花动漫(动漫)', 'http://www.yinghuacd.com/'],
    ['樱花动漫(影视)', 'https://www.bytpl.com/'],
    ['次元街', 'https://www.ciyuanjie.cn/'],
    ['漫岛', 'https://www.mddm.tv/'],
    // ['番茄动漫', 'https://www.fqfun.com/'],
    // ['茶杯狐', 'https://www.foxcup.cc/'],
    ['片库', 'https://www.pknull.com/'],
    ['奈飞', 'https://go.tvso.me/'],
    // ['霹雳影视(失效)', 'https://plyingshi.com/'],
    // ['', ''],
];
//shop
const num31z = [
    ['拼多多', 'https://www.pinduoduo.com/'],
    ['淘宝', 'https://www.taobao.com/'],
    ['苏宁易购', 'https://www.suning.com/'],
    ['京东', 'https://www.jd.com/'],
    ['唯品会', 'https://www.vip.com/'],
    // ['', ''],
];
//game
const num32z = [
    ['4399', 'https://www.4399.com/'],
    ['原神', 'https://ys.mihoyo.com/'],
    ['星穹铁道', 'https://sr.mihoyo.com/'],
    ['UU加速器', 'https://uu.163.com/'],
    ['小黑盒加速器', 'https://www.xiaoheihe.cn/home'],
    ['TapTap', 'https://www.taptap.cn/'],
    ['Steam(需魔法)', 'https://store.steampowered.com/'],
    ['Epic(需魔法)', 'https://store.epicgames.com/zh-CN/'],
    ['X(需魔法)', 'https://twitter.com/'],
    ['Youtube(需魔法)', 'https://www.youtube.com/'],
    ['VPN', 'https://www.anyi555.com/#download_areax'],
];

//tips
const num33z = [
    ['链接', './tips/链接.html'],
    ['cmd命令', './tips/cmd/cmd.html'],
    ['git上传方法', './tips/git.html'],
    ["小说漫画", "./else/小说漫画/1.html"],
    ['u盘错误代码', './tips/u盘错误代码.html'],
    ['极域万能密码', './tips/极域万能密码.html'],
    ['hello算法', './tips/hello算法.html'],
    ['代码提示插件', './tips/代码提示插件/1.html'],
    ['css定位使用', 'https://blog.csdn.net/Junehhh/article/details/129022799'],
    ['js压缩方法', 'https://blog.csdn.net/XiaoningZhu/article/details/100162898'],
    ['图片全屏方法', './tips/图片全屏方法.html'],
    ["响应式文件在线", "./tips/响应式在线连接.html"],
    ["谷歌翻译问题", "https://zhuanlan.zhihu.com/p/571190754?utm_id=0&eqid=a943ec120032fe69000000046464d1a5"],
    ['新窗口打开', './else/jQuery在新窗口打开.html'],
    ['#', './']

];
//预留8
const num34z = [
    ['#', ''],
    ['#', '']
];

//子div循环
var boxs = ``;
for (let i = 0; i <= divbox; i++) {
    boxs += `<div class="box_next" id="show${i}"></div>`;
}
// console.log(boxs);
getDOM("#bigbox").innerHTML = boxs;

//子div内容循环
//基础
var num1 = `<h4 class="box_next_h4 shubiao" onclick = 'zhuye()' id='box1'>${boxh4_second[0][0]}</h4><ul class="box_next_ul">`;
for (index in num1z) {
    num1 += `<li><a href = '${num1z[index][1]}' target='_blank'>${num1z[index][0]}</a> </li>`
}
num1 += '</ul>';
getDOM('#show0').innerHTML = num1;
// console.log(num1);

//学校
var num2 = `<h4 class="box_next_h4" id='box2'>${boxh4_second[1][0]}</h4><ul class="box_next_ul">`;
for (index in num2z) {
    num2 += `<li><a href = '${num2z[index][1]}' target='_blank'>${num2z[index][0]}</a> </li>`
}
num2 += '</ul>';
getDOM('#show1').innerHTML = num2;

//素材
var num3 = `<h4 class="box_next_h4" id='box3'>${boxh4_second[2][0]}</h4><ul class="box_next_ul">`;
for (index in num3z) {
    num3 += `<li><a href = '${num3z[index][1]}' target='_blank'>${num3z[index][0]}</a> </li>`
}
num3 += '</ul>';
getDOM('#show2').innerHTML = num3;


//人工智能
var num4 = `<h4 class="box_next_h4" id='box4'>${boxh4_second[3][0]}</h4><ul class="box_next_ul">`;
for (index in num4z) {
    num4 += `<li><a href = '${num4z[index][1]}' target='_blank'>${num4z[index][0]}</a> </li>`
}
num4 += '</ul>';
getDOM('#show3').innerHTML = num4;


//应用下载
var num5 = `<h4 class="box_next_h4" id='box5'>${boxh4_second[4][0]}</h4><ul class="box_next_ul">`;
for (index in num5z) {
    num5 += `<li><a href = '${num5z[index][1]}' target='_blank'>${num5z[index][0]}</a> </li>`
}
num5 += '</ul>';
getDOM('#show4').innerHTML = num5;

//预留0
var num6 = `<h4 class="box_next_h4 show" id='box6'>${boxh4_second[5][0]}</h4><ul class="box_next_ul">`;
for (index in num6z) {
    num6 += `<li class='show'><a href = '${num6z[index][1]}' target='_blank'>${num6z[index][0]}</a> </li>`
}
num6 += '</ul>';
getDOM('#show5').innerHTML = num6;

//教学网站
var num7 = `<h4 class="box_next_h4" id='box7'>${boxh4_second[6][0]}</h4><ul class="box_next_ul">`;
for (index in num7z) {
    num7 += `<li><a href = '${num7z[index][1]}' target='_blank'>${num7z[index][0]}</a> </li>`
}
num7 += '</ul>';
getDOM('#show6').innerHTML = num7;

//预留1
var num8 = `<h4 class="box_next_h4 show" id='box8'>${boxh4_second[7][0]}</h4><ul class="box_next_ul">`;
for (index in num8z) {
    num8 += `<li class='show'><a href = '${num8z[index][1]}' target='_blank'>${num8z[index][0]}</a> </li>`
}
num8 += '</ul>';
getDOM('#show7').innerHTML = num8;

//预留2
var num9 = `<h4 class="box_next_h4 show" id='box9'>${boxh4_second[8][0]}</h4><ul class="box_next_ul">`;
for (index in num9z) {
    num9 += `<li class='show'><a href = '${num9z[index][1]}' target='_blank'>${num9z[index][0]}</a> </li>`
}
num9 += '</ul>';
getDOM('#show8').innerHTML = num9;

//css
var num10 = `<h4 class="box_next_h4 shubiao" onclick = 'zhuyecss()' id='box10'>${boxh4_second[9][0]}</h4><ul class="box_next_ul">`;
for (index in num10z) {
    num10 += `<li><a href = '${num10z[index][1]}' target='_blank'>${num10z[index][0]}</a> </li>`
}
num10 += '</ul>';
getDOM('#show9').innerHTML = num10;

//java
var num11 = `<h4 class="box_next_h4 shubiao" onclick = 'zhuyejava()' id='box11'>${boxh4_second[10][0]}</h4><ul class="box_next_ul">`;
for (index in num11z) {
    num11 += `<li><a href = '${num11z[index][1]}' target='_blank'>${num11z[index][0]}</a> </li>`
}
num11 += '</ul>';
getDOM('#show10').innerHTML = num11;

//php
var num12 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyephp()' id='box12'>${boxh4_second[11][0]}</h4><ul class="box_next_ul">`;
for (index in num12z) {
    num12 += `<li><a href = '${num12z[index][1]}' target='_blank'>${num12z[index][0]}</a> </li>`
}
num12 += '</ul>';
getDOM('#show11').innerHTML = num12;


//vue
var num13 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyevue()' id='box13'>${boxh4_second[12][0]}</h4><ul class="box_next_ul">`;
for (index in num13z) {
    num13 += `<li><a href = '${num13z[index][1]}' target='_blank'>${num13z[index][0]}</a> </li>`
}
num13 += '</ul>';
getDOM('#show12').innerHTML = num13;

//bootstrap
var num14 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyebootstrap()' id='box14'>${boxh4_second[13][0]}</h4><ul class="box_next_ul">`;
for (index in num14z) {
    num14 += `<li><a href = '${num14z[index][1]}' target='_blank'>${num14z[index][0]}</a> </li>`
}
num14 += '</ul>';
getDOM('#show13').innerHTML = num14;

//实训
var num15 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyeshixun()' id='box15'>${boxh4_second[14][0]}</h4><ul class="box_next_ul">`;
for (index in num15z) {
    num15 += `<li><a href = '${num15z[index][1]}' target='_blank'>${num15z[index][0]}</a> </li>`
}
num15 += '</ul>';
getDOM('#show14').innerHTML = num15;

//mysql
var num16 = `<h4 class="box_next_h4" id='box16'>${boxh4_second[15][0]}</h4><ul class="box_next_ul">`;
for (index in num16z) {
    num16 += `<li><a href = '${num16z[index][1]}' target='_blank'>${num16z[index][0]}</a> </li>`
}
num16 += '</ul>';
getDOM('#show15').innerHTML = num16;

//linux
var num17 = `<h4 class="box_next_h4" id='box17'>${boxh4_second[16][0]}</h4><ul class="box_next_ul">`;
for (index in num17z) {
    num17 += `<li><a href = '${num17z[index][1]}' target='_blank'>${num17z[index][0]}</a> </li>`
}
num17 += '</ul>';
getDOM('#show16').innerHTML = num17;

//html
var num18 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyehtml()' id='box18'>${boxh4_second[17][0]}</h4><ul class="box_next_ul">`;
for (index in num18z) {
    num18 += `<li><a href = '${num18z[index][1]}' target='_blank'>${num18z[index][0]}</a> </li>`
}
num18 += '</ul>';
getDOM('#show17').innerHTML = num18;

//预留4
var num19 = `<h4 class="box_next_h4 show" id='box19'>${boxh4_second[18][0]}</h4><ul class="box_next_ul">`;
for (index in num19z) {
    num19 += `<li class='show'><a href = '${num19z[index][1]}' target='_blank'>${num19z[index][0]}</a> </li>`
}
num19 += '</ul>';
getDOM('#show18').innerHTML = num19;

//medium
var num20 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyerongmei()' id='box20'>${boxh4_second[19][0]}</h4><ul class="box_next_ul">`;
for (index in num20z) {
    num20 += `<li><a href = '${num20z[index][1]}' target='_blank'>${num20z[index][0]}</a> </li>`
}
num20 += '</ul>';
getDOM('#show19').innerHTML = num20;


//其他
var num21 = `<h4 class="box_next_h4" id='box21'>${boxh4_second[20][0]}</h4><ul class="box_next_ul">`;
for (index in num21z) {
    num21 += `<li><a href = '${num21z[index][1]}' target='_blank'>${num21z[index][0]}</a> </li>`
}
num21 += '</ul>';
getDOM('#show20').innerHTML = num21;

//编程码
var num22 = `<h4 class="box_next_h4" id='box22'>${boxh4_second[21][0]}</h4><ul class="box_next_ul">`;
for (index in num22z) {
    num22 += `<li><a href = '${num22z[index][1]}' target='_blank'>${num22z[index][0]}</a> </li>`
}
num22 += '</ul>';
getDOM('#show21').innerHTML = num22;

//文档
var num23 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyedocument()' id='box23'>${boxh4_second[22][0]}</h4><ul class="box_next_ul">`;
for (index in num23z) {
    num23 += `<li><a href = '${num23z[index][1]}' target='_blank'>${num23z[index][0]}</a> </li>`
}
num23 += '</ul>';
getDOM('#show22').innerHTML = num23;

//其他网站
var num24 = `<h4 class="box_next_h4" id='box24'>${boxh4_second[23][0]}</h4><ul class="box_next_ul">`;
for (index in num24z) {
    num24 += `<li><a href = '${num24z[index][1]}' target='_blank'>${num24z[index][0]}</a> </li>`
}
num24 += '</ul>';
getDOM('#show23').innerHTML = num24;

//ps
var num25 = `<h4 class="box_next_h4" id='box25'>${boxh4_second[24][0]}</h4><ul class="box_next_ul">`;
for (index in num25z) {
    num25 += `<li><a href = '${num25z[index][1]}' target='_blank'>${num25z[index][0]}</a> </li>`
}
num25 += '</ul>';
getDOM('#show24').innerHTML = num25;

//源码
var num26 = `<h4 class="box_next_h4" id='box26'>${boxh4_second[25][0]}</h4><ul class="box_next_ul">`;
for (index in num26z) {
    num26 += `<li><a href = '${num26z[index][1]}' target='_blank'>${num26z[index][0]}</a> </li>`
}
num26 += '</ul>';
getDOM('#show25').innerHTML = num26;


//预留5
var num27 = `<h4 class="box_next_h4 show" id='box27'>${boxh4_second[26][0]}</h4><ul class="box_next_ul">`;
for (index in num27z) {
    num27 += `<li class='show'><a href = '${num27z[index][1]}' target='_blank'>${num27z[index][0]}</a> </li>`
}
num27 += '</ul>';
getDOM('#show26').innerHTML = num27;


//预留6
var num28 = `<h4 class="box_next_h4 show" id='box28'>${boxh4_second[27][0]}</h4><ul class="box_next_ul">`;
for (index in num28z) {
    num28 += `<li class='show'><a href = '${num28z[index][1]}' target='_blank'>${num28z[index][0]}</a> </li>`
}
num28 += '</ul>';
getDOM('#show27').innerHTML = num28;


//音乐
var num29 = `<h4 class="box_next_h4" id='box29'>${boxh4_second[28][0]}</h4><ul class="box_next_ul">`;
for (index in num29z) {
    num29 += `<li><a href = '${num29z[index][1]}' target='_blank'>${num29z[index][0]}</a> </li>`
}
num29 += '</ul>';
getDOM('#show28').innerHTML = num29;

//视频
var num30 = `<h4 class="box_next_h4" id='box30'>${boxh4_second[29][0]}</h4><ul class="box_next_ul">`;
for (index in num30z) {
    num30 += `<li><a href = '${num30z[index][1]}' target='_blank'>${num30z[index][0]}</a> </li>`
}
num30 += '</ul>';
getDOM('#show29').innerHTML = num30;

//购物
var num31 = `<h4 class="box_next_h4" id='box31'>${boxh4_second[30][0]}</h4><ul class="box_next_ul">`;
for (index in num31z) {
    num31 += `<li><a href = '${num31z[index][1]}' target='_blank'>${num31z[index][0]}</a> </li>`
}
num31 += '</ul>';
getDOM('#show30').innerHTML = num31;


//游戏
var num32 = `<h4 class="box_next_h4" id='box32'>${boxh4_second[31][0]}</h4><ul class="box_next_ul">`;
for (index in num32z) {
    num32 += `<li><a href = '${num32z[index][1]}' target='_blank'>${num32z[index][0]}</a> </li>`
}
num32 += '</ul>';
getDOM('#show31').innerHTML = num32;

//提示
var num33 = `<h4 class="box_next_h4 shubiao" onclick ='zhuyetips()' id='box33'>${boxh4_second[32][0]}</h4><ul class="box_next_ul">`;
for (index in num33z) {
    num33 += `<li><a href = '${num33z[index][1]}' target='_blank'>${num33z[index][0]}</a> </li>`
}
num33 += '</ul>';
getDOM('#show32').innerHTML = num33;

//预留8
var num34 = `<h4 class="box_next_h4 show" id='box34'>${boxh4_second[33][0]}</h4><ul class="box_next_ul">`;
for (index in num34z) {
    num34 += `<li class='show'><a href = '${num34z[index][1]}' target='_blank'>${num34z[index][0]}</a> </li>`
}
num34 += '</ul>';
getDOM('#show33').innerHTML = num34;


/* var num35 = `<h4 class="box_next_h4" id='box35'>${boxh4_second[34][0]}</h4><ul class="box_next_ul">`;
for (index in num35z) {
    num35 += `<li><a href = '${num35z[index][1]}' target='_blank'>${num35z[index][0]}</a> </li>`
}
num35 += '</ul>';
getDOM('#show34').innerHTML = num35;


var num36 = `<h4 class="box_next_h4" id='box36'>${boxh4_second[35][0]}</h4><ul class="box_next_ul">`;
for (index in num36z) {
    num36 += `<li><a href = '${num36z[index][1]}' target='_blank'>${num36z[index][0]}</a> </li>`
}
num36 += '</ul>';
getDOM('#show35').innerHTML = num36;

var num37 = `<h4 class="box_next_h4" id='box37'>${boxh4_second[36][0]}</h4><ul class="box_next_ul">`;
for (index in num37z) {
    num37 += `<li><a href = '${num37z[index][1]}' target='_blank'>${num37z[index][0]}</a> </li>`
}
num37 += '</ul>';
getDOM('#show36').innerHTML = num37;


var num38 = `<h4 class="box_next_h4" id='box38'>${boxh4_second[37][0]}</h4><ul class="box_next_ul">`;
for (index in num38z) {
    num38 += `<li><a href = '${num38z[index][1]}' target='_blank'>${num38z[index][0]}</a> </li>`
}
num38 += '</ul>';
getDOM('#show37').innerHTML = num38;


var num39 = `<h4 class="box_next_h4" id='box39'>${boxh4_second[38][0]}</h4><ul class="box_next_ul">`;
for (index in num39z) {
    num39 += `<li><a href = '${num39z[index][1]}' target='_blank'>${num39z[index][0]}</a> </li>`
}
num39 += '</ul>';
getDOM('#show38').innerHTML = num39;


var num40 = `<h4 class="box_next_h4" id='box40'>${boxh4_second[39][0]}</h4><ul class="box_next_ul">`;
for (index in num40z) {
    num40 += `<li><a href = '${num40z[index][1]}' target='_blank'>${num40z[index][0]}</a> </li>`
}
num40 += '</ul>';
getDOM('#show39').innerHTML = num40; */

//循环模版
/* var a11 = `<h4 class="box_next_h4" id='box'>${boxh4_second[0][0]}</h4><ul class="box_next_ul">`;
for (index in a11z) {
    a11 += `<li><a href = '${a11z[index][1]}' target='_blank'>${a11z[index][0]}</a> </li>`
}
a11 += '</ul>';
getDOM('#show1').innerHTML = a11; */


//标题返回
//返回主目录
function zhuye() {
    window.location.href = `${boxh4_second[0][1]}`;
}
//返回css
function zhuyecss() {
    window.location.href = `${boxh4_second[9][1]}`;
}
//返回java
function zhuyejava() {
    window.location.href = `${boxh4_second[10][1]}`;
}
//返回php
function zhuyephp() {
    window.location.href = `${boxh4_second[11][1]}`;
}
//返回vue
function zhuyevue() {
    window.location.href = `${boxh4_second[12][1]}`;
}
//返回bootstrap
function zhuyebootstrap() {
    window.location.href = `${boxh4_second[13][1]}`;
}
//返回Practical_training
function zhuyeshixun() {
    window.location.href = `${boxh4_second[14][1]}`;
}
//返回html
function zhuyehtml() {
    window.location.href = `${boxh4_second[17][1]}`;
}

//返回madium
function zhuyerongmei() {
    window.location.href = `${boxh4_second[19][1]}`;
}
//返回document
function zhuyedocument() {
    window.location.href = `${boxh4_second[22][1]}`;
}
//返回tips
function zhuyetips() {
    window.location.href = `${boxh4_second[32][1]}`;
}
//用户名
/* getDOM("#app").click(function(){
    window.location.href = 'https://github.com/';
});  */
//全局获取DOM
/* function myname(){
    window.location.href = "https://github.com/";
} */

/* var a11 = `<h4 class="box_next_h4">${boxh4_second[0][0]}</h4><ul class="box_next_ul">`;
for (index in a11z) {
    a11 += `<li><a href = '${a11z[index][1]}' target='_blank'>${a11z[index][0]}</a> </li>`
}
a11 += '</ul>';
getDOM('#show1').innerHTML = a11; */






// 获取对象函数
function getDOM(text) {
    return document.querySelector(text);
}


