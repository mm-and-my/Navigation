//组件注册
const basess = Vue.component('my-component1', {
    //组件注册——基础部分
    template: "#model_pic",
    data() {
        return {
            h3name: '常用网站',
            basessarr: [
                //搜索引擎
                { 'title': '百度一下', 'desc': '百度一下搜索引擎', 'url': 'https://www.baidu.com', 'src': './images/navlogo/base/baidulogo.ico' },
                { 'title': 'google', 'desc': 'google搜索引擎', 'url': 'https://www.google.com/', 'src': './images/navlogo/base/google.ico' },
                //网络-学习
                { 'title': '校园网', 'desc': '校园网登录认证', 'url': 'http://219.222.95.38/', 'src': './images/navlogo/school/default.ico' },
                { 'title': '学习通', 'desc': '学习通登录页面', 'url': 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a', 'src': './images/navlogo/base/xuexitong.png' },
                { 'title': '微信公众平台', 'desc': '微信小程序开发账号', 'url': 'https://mp.weixin.qq.com/', 'src': './images/navlogo/base/wechat.ico' },
                //翻译
                { 'title': '在线翻译网易', 'desc': '有道在线翻译', 'url': 'https://fanyi.youdao.com/index.html#/', 'src': './images/navlogo/base/youdao.png' },
                { 'title': '搜狗翻译', 'desc': '搜狗翻译', 'url': 'https://fanyi.sogou.com/text', 'src': './images/navlogo/base/sougou.ico' },
                //人工智能
                { 'title': '文心一言', 'desc': '文心一言', 'url': 'https://yiyan.baidu.com/', 'src': './images/navlogo/base/wenxin.png' },
                //工具
                { 'title': '百度网盘', 'desc': '百度网盘', 'url': 'https://pan.baidu.com/', 'src': './images/navlogo/base/baiduwangpan.ico' },
                { 'title': 'github', 'desc': 'github官网', 'url': 'https://github.com/', 'src': './images/navlogo/base/github.png' },
                //娱乐
                { 'title': 'bilibili', 'desc': 'bilibili', 'url': 'https://www.bilibili.com/', 'src': './images/navlogo/base/bilibili.ico' },
                { 'title': '樱花动漫', 'desc': '樱花动漫(动漫)', 'url': 'http://www.yinghuacd.com/', 'src': './images/navlogo/base/yinghua.ico' },
                { 'title': '网易云音乐', 'desc': '网易云音乐', 'url': 'https://music.163.com/', 'src': './images/navlogo/base/wymusic.ico' },
                //导航类
                { 'title': '程序员导航', 'desc': '程序员导航', 'url': 'http://www.cxysite.com/', 'src': './images/navlogo/base/default.ico' },
                { 'title': '即时工具', 'desc': '即时工具', 'url': 'https://www.67tool.com/', 'src': './images/navlogo/base/67tool.ico' },
                { 'title': '爱达杂货铺', 'desc': '爱达杂货铺', 'url': 'https://adzhp.xyz/favorites/dongman', 'src': './images/navlogo/base/adzhp.ico' },
                { 'title': 'wikihow搜索', 'desc': 'wikihow搜索专业知识', 'url': 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5', 'src': './images/navlogo/base/wikihow.ico' },
                { 'title': 'yandex', 'desc': '以图搜图', 'url': 'https://yandex.com/images', 'src': './images/navlogo/base/yandex.ico' },
                { 'title': '一糖导航', 'desc': '一糖导航', 'url': 'https://iitang.com/', 'src': './images/navlogo/base/default.ico' },
                { 'title': '图欧学习资源库', 'desc': '图欧学习资源库', 'url': 'https://link3.cc/tuostudy', 'src': './images/navlogo/base/link3.ico' },
                { 'title': 'saucenao', 'desc': '以图搜图', 'url': 'https://saucenao.com/', 'src': './images/navlogo/base/saucenao.ico' },
                { 'title': 'ai工具箱', 'desc': '别摸鱼导航ai工具箱', 'url': 'https://biemoyu.com/', 'src': './images/navlogo/base/moyu.png' },
                { 'title': '别摸鱼导航', 'desc': '别摸鱼导航', 'url': 'https://soushu.biemoyu.com/', 'src': './images/navlogo/base/moyu.png' },
                { 'title': '鸠摩搜索', 'desc': '鸠摩搜索书籍搜索', 'url': 'https://www.jiumodiary.com/', 'src': './images/navlogo/base/jiumo.png' },
                { 'title': 'onlinedoctranslator', 'desc': '免费文档在线翻译', 'url': 'https://www.onlinedoctranslator.com/zh-CN/', 'src': './images/navlogo/base/onlinedoctranslator.svg' },
                { 'title': 'localhost', 'desc': 'localhost服务器目录', 'url': 'http://localhost/', 'src': './images/navlogo/base/localhost.png' },
                // { 'title': '远程导航预览', 'desc': '远程导航预览', 'url': 'https://htmlpreview.github.io/?https://mm-and-my.github.io/Navigation/', 'src': './images/navlogo/base/github.png' },
                { 'title': '远程导航', 'desc': '远程导航', 'url': ' https://mm-and-my.github.io/Navigation/', 'src': './images/navlogo/base/github.png' },
                { 'title': '阿里云盘', 'desc': '阿里云盘', 'url': 'https://www.aliyundrive.com/', 'src': './images/navlogo/base/aliyunpan.ico' },
                { 'title': 'qq邮箱', 'desc': 'qq邮箱', 'url': 'https://mail.qq.com/', 'src': './images/navlogo/base/qqemail.png' },
                { 'title': '163邮箱', 'desc': '网易163邮箱', 'url': 'https://mail.163.com/', 'src': './images/navlogo/base/163email.ico' },
                { 'title': 'Google gmail', 'desc': 'Google邮箱', 'url': 'https://mail.google.com/', 'src': './images/navlogo/base/gmail.ico' },
                { 'title': '知乎', 'desc': '知乎', 'url': 'https://www.zhihu.com/', 'src': './images/navlogo/base/zhihu.ico' },
                { 'title': '百度贴吧', 'desc': '百度贴吧', 'url': 'https://tieba.baidu.com/', 'src': './images/navlogo/base/baidulogo.ico' },
                { 'title': '百度文库', 'desc': '百度文库', 'url': 'https://wenku.baidu.com/', 'src': './images/navlogo/base/baidulogo.ico' },
                { 'title': '知网', 'desc': '知网', 'url': 'https://www.cnki.net/', 'src': './images/navlogo/base/zhiwang.ico' },
                { 'title': 'QQ音乐', 'desc': 'QQ音乐', 'url': 'https://y.qq.com/', 'src': './images/navlogo/base/qqmusic.ico' },
                { 'title': '新浪微博', 'desc': '新浪微博', 'url': 'https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F', 'src': './images/navlogo/base/xinliangweibo.ico' },
                { 'title': '百度脑图', 'desc': '百度脑图', 'url': 'https://naotu.baidu.com/', 'src': './images/navlogo/base/baidunaotu.ico' },
                { 'title': '思维导图', 'desc': '思维导图', 'url': 'https://boardmix.cn/mindmapping/?channel=bd&utm_source=baidu&utm_medium=ocpc&utm_term=mindmap&_channel_track_key=tWzZt0X0&bd_vid=11901531421781939060', 'src': './images/navlogo/base/siweidaotu.ico' },
                { 'title': '原神', 'desc': '原神官网', 'url': 'https://ys.mihoyo.com/', 'src': './images/navlogo/base/genshin.ico' },
                { 'title': '原神', 'desc': '原神官网', 'url': 'https://www.aenslrle.cf/index.php', 'src': './images/navlogo/base/genshin.ico' },

                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/base/.png' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-jichu3'
        }
    },
    // 绑定函数
    methods: {

    },
    //过滤器
    filters: {

    },
    //计算属性
    computed: {

    }
}
);
const school = Vue.component('my-component2', {
    //组件注册——学校部分
    template: "#model_pic",
    data() {
        return {
            h3name: '学校部分',
            basessarr: [
                { 'title': '学信网', 'desc': '学信网平台', 'url': 'https://www.chsi.com.cn/', 'src': './images/navlogo/school/xuexinwang.ico' },
                { 'title': '学校官网', 'desc': '广东机电职业技术学院', 'url': 'https://www.gdmec.edu.cn/', 'src': './images/navlogo/school/gdmec.ico' },
                { 'title': '校园网', 'desc': '校园网登录认证', 'url': 'http://219.222.95.38/', 'src': './images/navlogo/school/default.ico' },
                { 'title': '学习通', 'desc': '学习通登录页面', 'url': 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a', 'src': './images/navlogo/school/xuexitong.png' },
                { 'title': '5y平台', 'desc': '5y平台校内', 'url': 'http://192.168.153.230:800/', 'src': './images/navlogo/school/5y.png' },
                { 'title': '5y平台', 'desc': '5y平台校外', 'url': 'http://58.248.104.83:800/', 'src': './images/navlogo/school/5y.png' },
                { 'title': '计算机报考', 'desc': '计算机证书报考平台CCT', 'url': 'http://gdoa.scnu.edu.cn/bm', 'src': './images/navlogo/school/zaixianbaokaopingtai.png' },
                { 'title': '计算机查询', 'desc': '计算机证书查询平台CCT', 'url': 'http://bz.ykoa.net/', 'src': './images/navlogo/school/cctchaxun.png' },
                { 'title': '普法网', 'desc': '全国青少年普法网', 'url': 'https://qspfw.moe.gov.cn/', 'src': './images/navlogo/school/qingshaonianpufawang.png' },
                { 'title': '易班', 'desc': '易班', 'url': 'https://www.yiban.cn/', 'src': './images/navlogo/school/yiban.ico' },
                // { 'title': 'java云', 'desc': 'java云服务器', 'url': '124.223.44.7', 'src': './images/navlogo/school/default.ico' },
                { 'title': '易展翅', 'desc': '易展翅', 'url': 'https://www.izhanchi.com/', 'src': './images/navlogo/school/yizhanchi.ico' },
                { 'title': '智慧职教', 'desc': '智慧职教', 'url': 'https://www.icve.com.cn/portal_new/portal/portal.html', 'src': './images/navlogo/school/zhihuizhijiao.ico' },
                { 'title': '创业服务网', 'desc': '全国大学生创业服务网', 'url': 'https://cy.ncss.cn/', 'src': './images/navlogo/school/quanguodaxueshengchuangyefuwuwang.ico' },
                { 'title': '职业规划大赛', 'desc': '全国大学生职业规划大赛网', 'url': 'https://zgs.chsi.com.cn/home', 'src': './images/navlogo/school/quanguodaxueshengzhiyeguihuadasai.ico' },
                { 'title': 'VPN', 'desc': 'VPN登录页面', 'url': 'https://webvpn.gdmec.edu.cn/frontend_static/frontend/login/index.html#/login', 'src': './images/navlogo/school/vpn.png' },
                { 'title': '达梦理论考试', 'desc': '250230061000000000000050-843041', 'url': 'https://xcx.dameng.com:9999/Exam_System/login.html', 'src': './images/navlogo/school/dameng.ico' },
                { 'title': '大学资源网', 'desc': '大学资源网', 'url': 'https://www.dxzy163.com/', 'src': './images/navlogo/school/dxzy.ico' },
                { 'title': '人人自学网', 'desc': '人人自学网', 'url': 'https://www.rrzxw.net/index.html', 'src': './images/navlogo/school/rrzxw.ico' },
                { 'title': '中国教育考试网', 'desc': '中国教育考试网-统招专升本-自考', 'url': 'https://www.neea.edu.cn/', 'src': './images/navlogo/school/eduexam.ico' },
                { 'title': '中国人事考试网', 'desc': '中国人事考试网-翻译资格证', 'url': 'http://www.cpta.com.cn/', 'src': './images/navlogo/school/eduexamrenshi.ico' },
                { 'title': '计算机等级考试', 'desc': '全国计算机等级考试', 'url': 'https://ncre.neea.edu.cn/', 'src': './images/navlogo/school/eduexam.ico' },
                { 'title': '普通话水平测试', 'desc': '国家普通话水平测试在线报名系统', 'url': 'https://bm.cltt.org/#/index', 'src': './images/navlogo/school/putonghua.ico' },
                { 'title': '英语四六级考试', 'desc': '全国大学英语四六级考试', 'url': 'https://cet.neea.edu.cn/', 'src': './images/navlogo/school/eduexam.ico' },
                { 'title': '中小学资格教师考试', 'desc': '中小学资格教师考试', 'url': 'https://ntce.neea.edu.cn/', 'src': './images/navlogo/school/eduexam.ico' },
                { 'title': '初级会计考试', 'desc': '中国人民共和国财政部', 'url': 'http://kzp.mof.gov.cn/list_warning.jsp', 'src': './images/navlogo/school/nation.ico' },
                { 'title': '知网', 'desc': '知网', 'url': 'https://www.cnki.net/', 'src': './images/navlogo/school/zhiwang.ico' },

                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/school/.png' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-xuexiao'
        }
    }
}
);
const material = Vue.component('my-component3', {
    //组件注册——素材部分
    template: "#model_pic",
    data() {
        return {
            h3name: '素材网站',
            basessarr: [
                { 'title': 'Hello算法', 'desc': 'Hello算法在线阅读', 'url': 'https://github.com/krahets/hello-algo', 'src': './images/navlogo/material/github.png' },
                { 'title': 'PHP文档', 'desc': 'PHP中文文档', 'url': 'https://learnku.com/docs/laravel/9.x', 'src': './images/navlogo/material/laravel.png' },
                { 'title': 'Bootstrap文档', 'desc': 'Bootstrap文档', 'url': 'https://v4.bootcss.com/docs/getting-started/introduction/', 'src': './images/navlogo/material/bootstrap.png' },
                { 'title': 'CSS菜鸟样式', 'desc': 'CSS菜鸟样式查询', 'url': 'https://www.runoob.com/cssref/css-selectors.html', 'src': './images/navlogo/material/cainiao.ico' },
                { 'title': 'CSDN', 'desc': 'CSDN代码网站', 'url': 'https://www.csdn.net/', 'src': './images/navlogo/material/csdn.ico' },
                { 'title': 'w3school', 'desc': 'w3school代码学习', 'url': 'https://www.w3school.com.cn/', 'src': './images/navlogo/material/w3school.png' },
                { 'title': 'github', 'desc': 'github官网', 'url': 'https://github.com/', 'src': './images/navlogo/material/github.png' },
                { 'title': '矢量图标库', 'desc': '阿里矢量图标库', 'url': 'https://www.iconfont.cn/', 'src': './images/navlogo/material/alitubiao.png' },
                { 'title': '素材图片网站', 'desc': '素材图片网站', 'url': 'https://www.veer.com/', 'src': './images/navlogo/material/veer.ico' },
                { 'title': 'Boss直聘', 'desc': 'Boss直聘', 'url': 'https://www.zhipin.com/chengshi/c101281500/?sid=sem_pz_bdpc_dasou_title', 'src': './images/navlogo/material/boos.ico' },

                { 'title': 'uupdump', 'desc': 'Windows插件及系统内容下载网站', 'url': 'https://uupdump.net', 'src': './images/navlogo/material/cover.ico' },
                { 'title': 'HelloWindows', 'desc': 'Windows系统镜像和office下载网站(包含小工具)', 'url': 'https://hellowindows.cn/', 'src': './images/navlogo/material/windows.png' },
                { 'title': 'wallhaven', 'desc': '高清壁纸网站', 'url': 'https://wallhaven.cc/', 'src': './images/navlogo/material/wallhaven.ico' },
                { 'title': 'PPT超级市场', 'desc': 'PPT内容下载网站', 'url': 'https://www.pptsupermarket.com/', 'src': './images/navlogo/material/ppt.ico' },
                { 'title': '第一PPT', 'desc': '第一PPT', 'url': 'https://www.1ppt.com/', 'src': './images/navlogo/material/oneppt.ico' },
                { 'title': 'sobooks', 'desc': '超多小说下载网站', 'url': 'https://sobooks.net/', 'src': './images/navlogo/material/sobooks.ico' },
                { 'title': '小纸条', 'desc': '超多资源链接下载网站', 'url': 'https://ali.gitcafe.ink/', 'src': './images/navlogo/material/xiaozhitiao.png' },


                { 'title': 'jQuery', 'desc': 'jQuery文件官网', 'url': 'https://jquery.com/', 'src': './images/navlogo/material/jquery.ico' },
                { 'title': '微信公众平台', 'desc': '微信小程序开发账号', 'url': 'https://mp.weixin.qq.com/', 'src': './images/navlogo/material/wechat.ico' },

                { 'title': 'JDK', 'desc': 'java编译jdk支持', 'url': 'https://www.oracle.com/java/technologies/downloads/', 'src': './images/navlogo/material/oracle.ico' },
                { 'title': 'python解释器', 'desc': 'python解释器官网', 'url': 'https://www.python.org/downloads/release/python-372/', 'src': './images/navlogo/material/python.ico' },
                { 'title': 'vue', 'desc': 'vue文件官网', 'url': 'https://cn.vuejs.org/', 'src': './images/navlogo/material/vue.svg' },
                { 'title': 'gitee', 'desc': 'gitee官网', 'url': 'https://gitee.com/', 'src': './images/navlogo/material/gitee.ico' },
                { 'title': 'json解析', 'desc': 'json解析网站', 'url': 'https://www.json.cn/', 'src': './images/navlogo/material/json.ico' },
                { 'title': '阿里镜像站', 'desc': '虚拟机光盘镜像文件下载', 'url': 'https://developer.aliyun.com/mirror/', 'src': './images/navlogo/material/aliyunjingxiang.ico' },
                { 'title': '华为镜像站', 'desc': '虚拟机光盘镜像文件下载', 'url': 'https://mirrors.huaweicloud.com/home', 'src': './images/navlogo/material/huaweijingxiang.ico' },

                { 'title': 'bootstrap', 'desc': 'bootstrap文件网站', 'url': 'https://getbootstrap.com/', 'src': './images/navlogo/material/bootstrap.png' },
                { 'title': '韩API', 'desc': '韩FREE API', 'url': 'https://api.vvhan.com/', 'src': './images/navlogo/material/han.ico' },
                { 'title': '屏幕尺寸', 'desc': '', 'url': 'https://uiiiuiii.com/screen/index.htm', 'src': './images/navlogo/material/default.ico' },
                { 'title': 'IP计算', 'desc': 'IP地址计算器', 'url': 'https://ipv4calc.bmcx.com/', 'src': './images/navlogo/material/ip.ico' },
                { 'title': 'jQuery插件', 'desc': 'jQuery插件库', 'url': 'https://www.jq22.com/', 'src': './images/navlogo/material/jquerychajian.ico' },
                { 'title': 'jQuery之家', 'desc': 'jQuery之家', 'url': 'http://www.htmleaf.com/', 'src': './images/navlogo/material/jqueryzhijia.ico' },
                { 'title': 'iconpark', 'desc': 'iconpark图标', 'url': 'https://iconpark.oceanengine.com/official', 'src': './images/navlogo/material/iconpark.svg' },
                { 'title': '优波', 'desc': '优波', 'url': 'https://www.ubuuk.com/', 'src': './images/navlogo/material/youbo.ico' },
                { 'title': '传智教育', 'desc': '传智教育官网', 'url': 'https://stu.ityxb.com/', 'src': './images/navlogo/material/chuangzhijiaoyu.ico' },
                { 'title': '文旌课堂', 'desc': '文旌课堂官网', 'url': 'https://www.wenjingketang.com/', 'src': './images/navlogo/material/wenshuketang.ico' },
                { 'title': '腾讯课堂', 'desc': '腾讯课堂', 'url': 'https://ke.qq.com/', 'src': './images/navlogo/material/tencentclass.ico' },
                { 'title': '青梨派', 'desc': '青梨派思政内容', 'url': 'https://www.qinglipai.cn/', 'src': './images/navlogo/material/qinglipai.png' },
                { 'title': '人邮教育', 'desc': '人邮教育官网', 'url': 'https://www.ryjiaoyu.com/', 'src': './images/navlogo/material/renyoujiaoyu.png' },
                { 'title': '人民邮电出版社', 'desc': '人民邮电出版社官网', 'url': 'https://www.ptpress.com.cn/', 'src': './images/navlogo/material/ptpress.ico' },
                { 'title': '思否', 'desc': '思否程序讨论网站', 'url': 'https://segmentfault.com/', 'src': './images/navlogo/material/shifou.ico' },
                { 'title': '稀土掘金', 'desc': '稀土掘金程序讨论网站', 'url': 'https://juejin.cn/', 'src': './images/navlogo/material/juejin.png' },
                { 'title': '蓝桥云课', 'desc': '蓝桥云课官网', 'url': 'https://www.lanqiao.cn/courses/10532', 'src': './images/navlogo/material/lanqiao.png' },
                { 'title': '腾讯全端', 'desc': '腾讯全端官网', 'url': 'http://www.alloyteam.com/', 'src': './images/navlogo/material/tengxunquanduan.ico' },
                { 'title': 'Java全栈', 'desc': 'Java 全栈知识体系', 'url': 'https://www.pdai.tech/', 'src': './images/navlogo/material/javaquanzhan.ico' },
                { 'title': 'tooool', 'desc': 'tooool(魔法)', 'url': 'http://tooool.org/', 'src': './images/navlogo/material/default.ico' },
                { 'title': 'javascript', 'desc': 'javascript学习网', 'url': 'https://javascript.info/', 'src': './images/navlogo/material/default.ico' },
                { 'title': '更多java', 'desc': '更多介绍java', 'url': 'https://blog.csdn.net/Ed7zgeE9X/article/details/123491916', 'src': './images/navlogo/material/csdn.ico' },
                { 'title': '开源小游戏', 'desc': '开源小游戏', 'url': 'https://www.zhihu.com/tardis/sogou/art/563421207', 'src': './images/navlogo/material/zhihu.ico' },
                { 'title': 'loading', 'desc': 'loading动画', 'url': 'https://epic-spinners.epicmax.co/', 'src': './images/navlogo/material/loading.ico' },
                { 'title': 'eleui', 'desc': 'eleui(收费)前端元素', 'url': 'https://eleui.cn/', 'src': './images/navlogo/material/qianduanyuansu.ico' },
                { 'title': 'js压缩', 'desc': 'js压缩网站', 'url': 'https://tool.oschina.net/jscompress/', 'src': './images/navlogo/material/default.ico' },
                { 'title': 'toastr', 'desc': '轻量级的消息提示插件介绍', 'url': '', 'src': './images/navlogo/material/csdn.ico' },
                { 'title': 'toastr在线', 'desc': 'jquery通知插件toastr在线调式', 'url': 'https://www.jq22.com/yanshi476', 'src': './images/navlogo/material/jquerychajian.ico' },
                { 'title': 'ueditor', 'desc': '模拟富文本编辑器插件地址一', 'url': 'https://github.com/fex-team/ueditor', 'src': './images/navlogo/material/github.png' },
                { 'title': 'ueditor', 'desc': '模拟富文本编辑器插件地址二', 'url': 'https://gitee.com/ximury/ueditor/', 'src': './images/navlogo/material/gitee.ico' },
                { 'title': '推特内容下载', 'desc': '推特内容下载网站', 'url': 'https://savetwitter.net/zh-cn', 'src': './images/navlogo/material/savetwitter.png' },
                { 'title': 'b站内容下载', 'desc': 'b站内容下载', 'url': 'https://zhouql.vip/bilibili/', 'src': './images/navlogo/material/blvip.ico' },
                { 'title': '草料', 'desc': '草料二维码', 'url': 'https://cli.im/deqr', 'src': './images/navlogo/material/caoliao.ico' },
                { 'title': '图片裁剪imageresizer', 'desc': '在线图片裁剪网站', 'url': 'https://imageresizer.com/', 'src': './images/navlogo/material/imageresizer.ico' },
                { 'title': 'convertio', 'desc': '在线文件转换器', 'url': 'https://convertio.co/zh/', 'src': './images/navlogo/material/convertio.png' },
                { 'title': '软仓', 'desc': '软仓全家桶下载网站 压缩包解压密码：ruancang.net', 'url': 'https://www.ruancang.net/', 'src': './images/navlogo/material/ruancang.svg' },
                { 'title': '搜狗翻译', 'desc': '搜狗翻译', 'url': 'https://fanyi.sogou.com/text', 'src': './images/navlogo/material/sougou.ico' },
                { 'title': 'onlinedoctranslator', 'desc': '免费文档在线翻译', 'url': 'https://www.onlinedoctranslator.com/zh-CN/', 'src': './images/navlogo/material/onlinedoctranslator.svg' },
                { 'title': '大木虫学术官网', 'desc': '大木虫学术官网', 'url': 'http://www.4243.net/', 'src': './images/navlogo/material/dmc.ico' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/material/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-sucaiku'
        }
    }
}
);
const download = Vue.component('my-component4', {
    //组件注册——下载部分
    template: "#model_pic",
    data() {
        return {
            h3name: '软件下载',
            basessarr: [
                //基础软件
                { 'title': '微信', 'desc': '微信聊天工具', 'url': 'https://pc.weixin.qq.com/', 'src': './images/navlogo/applydownload/wechat.ico' },
                { 'title': 'qq', 'desc': 'QQ微信聊天工具', 'url': 'https://im.qq.com/pcqq/', 'src': './images/navlogo/applydownload/qq.png' },
                { 'title': '企业微信', 'desc': '企业微信聊天工具', 'url': 'https://work.weixin.qq.com/', 'src': './images/navlogo/applydownload/qiyewechat.png' },
                { 'title': '腾讯会议', 'desc': '会议软件', 'url': 'https://meeting.tencent.com/', 'src': './images/navlogo/applydownload/tenxunhuiyi.ico' },
                { 'title': '钉钉', 'desc': '会议软件', 'url': 'https://www.dingtalk.com/', 'src': './images/navlogo/applydownload/dindin.ico' },
                { 'title': '迅雷', 'desc': '迅雷下载软件', 'url': 'https://www.xunlei.com/', 'src': './images/navlogo/applydownload/xunlei.png' },
                //浏览器部分
                { 'title': 'chrome', 'desc': '谷歌浏览器', 'url': 'https://www.google.cn/chrome/', 'src': './images/navlogo/applydownload/chrome.png' },
                { 'title': 'firefox', 'desc': '火狐浏览器', 'url': 'http://www.firefox.com.cn/', 'src': './images/navlogo/applydownload/firefox.ico' },
                { 'title': '搜狗浏览器', 'desc': '浏览器', 'url': 'https://ie.sogou.com/', 'src': './images/navlogo/applydownload/sougou.ico' },
                { 'title': 'qq浏览器', 'desc': 'qq浏览器', 'url': 'https://browser.qq.com/?adtag=SEM170314020', 'src': './images/navlogo/applydownload/qqllq.ico' },
                //网盘部分
                { 'title': '阿里云盘', 'desc': '阿里云盘', 'url': 'https://www.aliyundrive.com/', 'src': './images/navlogo/applydownload/aliyunpan.ico' },
                { 'title': '百度网盘', 'desc': '百度网盘', 'url': 'https://pan.baidu.com/', 'src': './images/navlogo/applydownload/baiduwangpan.ico' },
                //编辑器部分
                { 'title': 'VScode', 'desc': '编辑器', 'url': 'https://code.visualstudio.com/', 'src': './images/navlogo/applydownload/vscode.ico' },
                { 'title': '微信开发者工具', 'desc': '微信开发者工具', 'url': 'https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html', 'src': './images/navlogo/applydownload/wechat.ico' },
                { 'title': 'Wampserve', 'desc': 'wampserve服务器', 'url': 'https://sourceforge.net/projects/wampserver/', 'src': './images/navlogo/applydownload/wampserve.png' },
                { 'title': 'HbuilderX', 'desc': '编辑器', 'url': 'https://www.dcloud.io/hbuilderx.html', 'src': './images/navlogo/applydownload/hubilder.png' },
                { 'title': 'DEV C++', 'desc': 'c++编辑器', 'url': 'https://sourceforge.net/projects/orwelldevcpp/?source=directory', 'src': './images/navlogo/applydownload/devcc.png' },
                { 'title': 'PyCharm', 'desc': 'Python编辑软件', 'url': 'https://www.jetbrains.com/pycharm/download/?section=windows', 'src': './images/navlogo/applydownload/py.png' },
                { 'title': 'jetbrains官网', 'desc': 'jetbrains全家桶下载', 'url': 'https://www.jetbrains.com.cn/products/', 'src': './images/navlogo/applydownload/jetbrains.ico' },
                { 'title': 'git官网', 'desc': 'git官网,用于上传项目', 'url': 'https://git-scm.com/', 'src': './images/navlogo/applydownload/git.ico' },
                //代码支持部分
                { 'title': 'node官网', 'desc': 'node官网', 'url': 'http://nodejs.cn/download/', 'src': './images/navlogo/applydownload/node.png' },
                { 'title': 'npm官网', 'desc': 'npm官网', 'url': 'https://www.npmjs.cn/', 'src': './images/navlogo/applydownload/npm.ico' },
                { 'title': 'JDK', 'desc': 'java编译jdk支持', 'url': 'https://www.oracle.com/java/technologies/downloads/', 'src': './images/navlogo/applydownload/oracle.ico' },
                { 'title': 'python解释器', 'desc': 'python解释器官网', 'url': 'https://www.python.org/downloads/release/python-372/', 'src': './images/navlogo/applydownload/python.ico' },
                //远程控制
                { 'title': 'todesk', 'desc': '远程控制软件', 'url': 'https://www.todesk.com/', 'src': './images/navlogo/applydownload/todesk.png' },
                { 'title': '向日葵', 'desc': '远程控制软件', 'url': 'https://sunlogin.oray.com/price', 'src': './images/navlogo/applydownload/xiangrikui.ico' },
                //压缩软件
                { 'title': 'bandzip', 'desc': '压缩软件', 'url': 'http://king.mydown.com//tianji/child/f362.html?sfrom=166&TFT=1&DTS=1&keyID=73573', 'src': './images/navlogo/applydownload/bandizip.ico' },
                { 'title': '7z', 'desc': '压缩软件', 'url': 'https://7-zip.org/', 'src': './images/navlogo/applydownload/7zip.ico' },
                { 'title': 'Winrar', 'desc': '压缩软件', 'url': 'https://zip.njzhqlkj.cn/Zips_v1/index.html?keywordid=644642649557&planid=343618906&bd_vid=9633232078741270563', 'src': './images/navlogo/applydownload/winrar.png' },
                //其他
                { 'title': 'PXcook', 'desc': '图片裁剪', 'url': 'https://www.fancynode.com.cn/pxcook', 'src': './images/navlogo/applydownload/pxcook.png' },
                { 'title': '火绒', 'desc': '杀毒软件', 'url': 'https://www.huorong.cn/', 'src': './images/navlogo/applydownload/huorong.ico' },
                { 'title': '搜狗输入法', 'desc': '输入法', 'url': 'https://shurufa.sogou.com/', 'src': './images/navlogo/applydownload/sougoufont.ico' },
                { 'title': '键盘驱动', 'desc': '87键键盘驱动', 'url': 'http://www.ygwaishe.com', 'src': './images/navlogo/applydownload/jianpanqudong.png' },
                { 'title': 'viewer', 'desc': '达梦实操考试', 'url': 'https://www.realvnc.com/en/connect/download/viewer/', 'src': './images/navlogo/applydownload/vnc.png' },
                { 'title': 'Microsoft官网', 'desc': 'Microsoft官网', 'url': 'https://www.microsoft.com/zh-cn', 'src': './images/navlogo/applydownload/microsoft.ico' },
                { 'title': 'WPS官网', 'desc': 'WPS官网', 'url': 'https://www.wps.cn/', 'src': './images/navlogo/applydownload/wps.ico' },
                { 'title': 'HpSmart', 'desc': '惠普打印插件', 'url': 'https://www.hp-smart.cn/cn/zh', 'src': './images/navlogo/applydownload/hpsmart.ico' },
                { 'title': 'VPN', 'desc': 'VPN连接工具', 'url': 'https://i.anyi8.com/?invite_code=5CBG73', 'src': './images/navlogo/applydownload/ayvpn.png' },
                { 'title': 'UU', 'desc': 'UU加速器', 'url': 'https://uu.163.com/', 'src': './images/navlogo/applydownload/uu.ico' },
                { 'title': 'GI', 'desc': 'Gi加速器', 'url': 'https://www.gijsq.com/', 'src': './images/navlogo/applydownload/gi.ico' },
                { 'title': '小黑盒', 'desc': '小黑盒加速器', 'url': 'https://www.xiaoheihe.cn/home', 'src': './images/navlogo/applydownload/xiaoheihe.PNG' },
                { 'title': 'ourplay', 'desc': 'ourplay加速器', 'url': 'https://www.ourplay.net/', 'src': './images/navlogo/applydownload/ourplay.ico' },
                { 'title': '慕迅加速器', 'desc': '慕迅加速器', 'url': 'https://mxfree.ao-x.top/', 'src': './images/navlogo/applydownload/muxun.ico' },
                { 'title': '软仓', 'desc': '软仓全家桶下载网站 压缩包解压密码：ruancang.net', 'url': 'https://www.ruancang.net/', 'src': './images/navlogo/applydownload/ruancang.svg' },
                //Linux
                { 'title': 'FinalShell', 'desc': 'finalshell', 'url': 'https://www.hostbuf.com/t/988.html', 'src': './images/navlogo/applydownload/finalsell.png' },
                { 'title': 'vmware', 'desc': '虚拟机', 'url': 'https://www.vmware.com/cn/products/workstation-pro.html', 'src': './images/navlogo/applydownload/vmware.ico' },
                //操作系统下载
                { 'title': 'Linux系统下载网', 'desc': 'Linux操作系统发行版下载网', 'url': 'https://www.linuxdown.com/', 'src': './images/navlogo/applydownload/linuxdown.ico' },
                { 'title': 'Redhat红帽子', 'desc': 'Redhat红帽子Linux操作系统官网', 'url': 'https://www.redhat.com/zh', 'src': './images/navlogo/applydownload/redhat.ico' },
                { 'title': 'centos', 'desc': 'centos发行版Linux操作系统官网', 'url': 'https://www.centos.org/', 'src': './images/navlogo/applydownload/centos.png' },
                { 'title': 'openeuler', 'desc': 'openeuler发行版Linux操作系统官网', 'url': 'https://www.openeuler.org/zh/ ', 'src': './images/navlogo/applydownload/openeuler.ico' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/applydownload/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: ' iconfont icon-xiazai'
        }
    }
}
);
const item = Vue.component('my-component6', {
    //组件注册——项目代码部分
    template: "#item",
    data() {
        return {
            h3name: '代码项目',
            basessarr: [
                { 'title': 'HTML+CSS', 'desc': '使用HTML+css制作的基础前端网站', 'url': '/item/htmlcss', 'src': './images/navlogo/item/htmlcss.png' },
                { 'title': 'JavaScript', 'desc': '使用JavaScript制作的基本网站', 'url': '/item/javascript', 'src': './images/navlogo/item/javascript.webp' },
                { 'title': 'Vue', 'desc': '使用vue框架制作的网站', 'url': '/item/vue', 'src': './images/navlogo/item/vue.svg' },
                { 'title': 'BootStrap', 'desc': '响应式网站', 'url': '/item/bootstrap', 'src': './images/navlogo/item/bootstrap.png' },
                { 'title': 'PHP', 'desc': 'php后端，需要服务器', 'url': '/item/php', 'src': './images/navlogo/item/php.png' },
                { 'title': '编程码', 'desc': '编程码炫酷样式', 'url': '/item/open', 'src': './images/navlogo/item/open.png' },
                { 'title': 'Java', 'desc': 'java语言编译的网站', 'url': '/item/java', 'src': './images/navlogo/item/java.jpg' },
                { 'title': 'Mysql', 'desc': '数据库mysql相关内容', 'url': '/item/mysql', 'src': './images/navlogo/item/mysql.webp' },
                { 'title': 'Linux', 'desc': 'linux系统相关内容', 'url': '/item/linux', 'src': './images/navlogo/item/linux.webp' },
                { 'title': 'Medium', 'desc': '融媒相关内容(移动端)', 'url': '/item/medium', 'src': './images/navlogo/item/medium.png' },
                { 'title': 'Else', 'desc': '其他网页内容', 'url': '/item/else', 'src': './images/navlogo/item/else.png' },
            ],
            // 图标跳转路径
            tiaozhuangzhuye: './',
            // 图标
            iconfont: ' iconfont icon-xuexi'
        }
    },
    methods: {
        textbrightfanhui() {
            // console.log('点击返回');
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const wendang = Vue.component('my-component7', {
    //组件注册——在线文档
    template: "#model_nopic",
    data() {
        return {
            h3name: '在线文档',
            basessarr: [
                //语言笔记
                { 'title': 'JavaScript笔记(PDF)', 'url': './item/documentword/javascript/javascript.pdf' },
                { 'title': 'HtmlCss笔记(PDF)', 'url': './item/documentword/htmlcss/网页常用单词代码.pdf' },
                { 'title': 'Java笔记(PDF)', 'url': './item/documentword/java/java知识点总结.pdf' },
                { 'title': 'Linux笔记(PDF)', 'url': './item/documentword/linux/Linux知识点总结(课程版格式修订) .pdf' },
                { 'title': 'Node.js笔记(PDF)', 'url': './item/documentword/node/node知识点总结.pdf' },
                { 'title': 'Python笔记(PDF)', 'url': './item/documentword/python/python知识点总结.pdf' },
                { 'title': 'React笔记(PDF)', 'url': './item/documentword/react/react知识点总结.pdf' },
                { 'title': 'Vue笔记(PDF)', 'url': './item/documentword/vue/vue知识点总结.pdf' },
                { 'title': 'MySql笔记(PDF)', 'url': './item/documentword/mysql/mySQL.pdf' },
                { 'title': 'PHP笔记(PDF)', 'url': './item/documentword/php/PHP知识点总结.pdf' },
                { 'title': '微信小程序(PDF)', 'url': './item/documentword/wechat/微信小程序知识点总结(课程版).pdf' },

                //其他文档
                { 'title': '渡一大师课笔记(PDF)', 'url': './item/documentword/duyi/渡一大师课笔记.pdf' },
                { 'title': 'Linux系统软件安装(PDF)', 'url': './item/documentword/linux/Linux系统软件安装.pdf' },
                { 'title': '达梦笔记(PDF)', 'url': './item/documentword/dmdb/数据库实训课程讲义-最终版.pdf' },
                { 'title': '达梦手册(PDF)', 'url': './item/documentword/dmdb/DM数据库实操手册（Linux版.pdf' },
                { 'title': '达梦讲义整理(PDF)', 'url': './item/documentword/dmdb/达梦数据库.pdf' },
                { 'title': '达梦考试模拟题(PDF)', 'url': './item/documentword/dmdb/练习题.pdf' },
                { 'title': '模拟题实例详细(PDF)', 'url': './item/documentword/dmdb/DM模拟题实例详细笔记.pdf' },
                { 'title': '理论练习题(PDF)', 'url': './item/documentword/dmdb/DM数据库理论练习题（Linux）(1).pdf' },
                { 'title': '网络期末题(PDF)', 'url': './item/documentword/web/网络期末.pdf' },
                { 'title': 'MYSQL期末填空题(PDF)', 'url': './item/documentword/mysql/mysql填空题题库.pdf' },
                { 'title': 'MYSQL期末单选题(PDF)', 'url': './item/documentword/mysql/单选题库81.pdf' },

                //htm网页模式---语言笔记
                // { 'title': 'JavaScript笔记(HTML)', 'url': './item/documentword/javascript/javascript.htm' },
                // { 'title': 'HtmlCss笔记(HTML)', 'url': './item/documentword/htmlcss/网页常用单词代码.htm' },
                // { 'title': 'Java笔记(HTML)', 'url': './item/documentword/java/java知识点总结.htm' },
                // { 'title': 'Linux笔记(HTML)', 'url': './item/documentword/linux/Linux知识点总结(课程版).htm' },
                // { 'title': 'MYSQL笔记(HTML)', 'url': './item/documentword/mysql/mySQL.htm' },
                // { 'title': 'PHP(HTML)', 'url': './item/documentword/php/PHP知识点总结.htm' },
                // { 'title': 'Node.js笔记(PDF)', 'url': './item/documentword/node/node知识点总结.htm' },
                // { 'title': 'Python笔记(PDF)', 'url': './item/documentword/python/python知识点总结.htm' },
                // { 'title': 'React笔记(PDF)', 'url': './item/documentword/react/react知识点总结.htm' },
                // { 'title': 'Vue笔记(PDF)', 'url': './item/documentword/vue/vue知识点总结.htm' },
                // { 'title': '微信小程序(HTML)', 'url': './item/documentword/wechat/微信小程序知识点总结.htm' },
            ],
            tiaozhuang: './',
            iconfont: 'iconfont icon-shiyongwendang'
        }
    }
}
);
const elses = Vue.component('my-component8', {
    //组件注册——其他内容
    template: "#model_nopic",
    data() {
        return {
            h3name: '其他内容',
            basessarr: [
                { 'title': '党史答案', 'url': 'https://zhuanlan.zhihu.com/p/420286513?ivk_sa=1024609v' },
                { 'title': '舞台答案', 'url': 'https://zhuanlan.zhihu.com/p/578370437?utm_id=0' },
                { 'title': '大学生国家安全教育答案', 'url': 'https://m.jhq8.cn/daan/2023/04/1764306.html' },
                { 'title': '酷源码', 'url': 'http://www.kyuanma.com/' },
                { 'title': '源码之家', 'url': 'http://www.codejia.com/' },
                // { 'title': '', 'url': '' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-qita1'
        }
    }
}
);
const chatgpt = Vue.component('my-component5', {
    //组件注册——人工智能部分
    template: "#model_pic",
    data() {
        return {
            h3name: '人工智能',
            basessarr: [
                { 'title': 'Chat-gpt', 'desc': 'Chat-gpt', 'url': 'https://chat18.aichatos.xyz/#/chat/1710578816704', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                { 'title': '文心一言', 'desc': '文心一言', 'url': 'https://yiyan.baidu.com/', 'src': './images/navlogo/chatgpt/wenxin.png' },
                { 'title': 'AI导航', 'desc': 'AI导航', 'url': 'https://chatgpt-sites.com/', 'src': './images/navlogo/chatgpt/ai.ico' },
                { 'title': 'chatGPT', 'desc': 'chatGPT(国内节点)', 'url': 'https://chatgai.lovepor.cn/', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                { 'title': 'AI写作', 'desc': 'AI写作', 'url': 'https://xiezuocat.com/?s=aigj', 'src': './images/navlogo/chatgpt/xiezuomiao.ico' },
                { 'title': 'AIPPT', 'desc': 'AIPPT', 'url': 'https://design.meitu.com/ppt/?ref=ai-bot.cn', 'src': './images/navlogo/chatgpt/aippt.png' },
                { 'title': 'logo生成', 'desc': 'logo生成', 'url': 'https://www.logosc.cn/', 'src': './images/navlogo/chatgpt/logosheji.svg' },
                { 'title': 'gammaPPT', 'desc': 'gammaPPT', 'url': 'https://gamma.app/', 'src': './images/navlogo/chatgpt/gamma.png' },
                { 'title': 'AI编程插件', 'desc': 'AI编程插件', 'url': 'https://sky-code.singularity-ai.com/index.html#/', 'src': './images/navlogo/chatgpt/skycode.ico' },
                { 'title': 'chatGPT-4', 'desc': 'chatGPT-4(需魔法)', 'url': 'https://openai.com/product/gpt-4', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                { 'title': '更多', 'desc': '更多介绍人工', 'url': 'https://www.erweicaihong.cn/pptruanjian-xinyidai', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/chatgpt/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-rengongzhineng'
        }
    }
}
);
const game = Vue.component('my-component9', {
    //组件注册——娱乐部分
    template: "#model_pic",
    data() {
        return {
            h3name: '娱乐部分',
            basessarr: [
                { 'title': '4399', 'desc': '4399小游戏', 'url': 'https://www.4399.com/', 'src': './images/navlogo/game/4399.ico' },
                { 'title': '原神', 'desc': '原神', 'url': 'https://ys.mihoyo.com/', 'src': './images/navlogo/game/genshin.ico' },
                { 'title': '星穹铁道', 'desc': '崩坏：星穹铁道', 'url': 'https://sr.mihoyo.com/', 'src': './images/navlogo/game/xingtie.ico' },
                { 'title': '绝区零', 'desc': '绝区零', 'url': 'https://zzz.mihoyo.com/main/', 'src': './images/navlogo/game/juequling.ico' },
                { 'title': '米游社', 'desc': '米哈游米游社区', 'url': 'https://www.miyoushe.com/', 'src': './images/navlogo/game/miyoushe.ico' },
                { 'title': '王者荣耀', 'desc': '王者荣耀官网', 'url': 'https://pvp.qq.com/', 'src': './images/navlogo/game/wangzhe.ico' },
                { 'title': 'wegame', 'desc': 'wegame官网', 'url': 'https://www.wegame.com.cn/home/', 'src': './images/navlogo/game/wegame.ico' },
                { 'title': '鸣潮', 'desc': '鸣潮', 'url': 'https://mc.kurogames.com/', 'src': './images/navlogo/game/mingchao.ico' },
                { 'title': '穿越火线', 'desc': '穿越火线官网', 'url': 'https://cf.qq.com/', 'src': './images/navlogo/game/cyhx.ico' },
                { 'title': '英雄联盟', 'desc': '英雄联盟官网', 'url': 'https://www.wegame.com.cn/home/', 'src': './images/navlogo/game/yxlm.ico' },
                { 'title': 'QQ飞车', 'desc': 'QQ飞车官网', 'url': 'https://speed.qq.com/main.shtml?ADTAG=cop.innercop.lanzuan', 'src': './images/navlogo/game/qqfly.ico' },
                { 'title': 'UU', 'desc': 'UU加速器', 'url': 'https://uu.163.com/', 'src': './images/navlogo/game/uu.ico' },
                { 'title': 'GI', 'desc': 'Gi加速器', 'url': 'https://www.gijsq.com/', 'src': './images/navlogo/game/gi.ico' },
                { 'title': '小黑盒', 'desc': '小黑盒加速器', 'url': 'https://www.xiaoheihe.cn/home', 'src': './images/navlogo/game/xiaoheihe.PNG' },
                { 'title': '慕迅加速器', 'desc': '慕迅加速器', 'url': 'https://mxfree.ao-x.top/', 'src': './images/navlogo/game/muxun.ico' },
                { 'title': 'ourplay', 'desc': 'ourplay加速器', 'url': 'https://www.ourplay.net/', 'src': './images/navlogo/game/ourplay.ico' },
                { 'title': 'TapTap', 'desc': 'TapTap游戏平台', 'url': 'https://www.taptap.cn/', 'src': './images/navlogo/game/taptap.ico' },
                { 'title': 'Steam', 'desc': 'Steam游戏平台(需魔法)', 'url': 'https://store.steampowered.com/', 'src': './images/navlogo/game/steam.ico' },
                { 'title': 'Epic', 'desc': 'Epic游戏平台(需魔法)', 'url': 'https://store.epicgames.com/zh-CN/', 'src': './images/navlogo/game/epic.ico' },
                { 'title': 'VPN', 'desc': 'VPN连接工具', 'url': 'https://i.anyi8.com/?invite_code=5CBG73', 'src': './images/navlogo/game/ayvpn.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/game/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-youxiyouxiji'
        }
    }
}
);
const music = Vue.component('my-component10', {
    //组件注册——音乐网站
    template: "#model_pic",
    data() {
        return {
            h3name: '音乐网站',
            basessarr: [
                { 'title': '网易云音乐', 'desc': '网易云音乐', 'url': 'https://music.163.com/', 'src': './images/navlogo/music/wymusic.ico' },
                { 'title': 'QQ音乐', 'desc': 'QQ音乐', 'url': 'https://y.qq.com/', 'src': './images/navlogo/music/qqmusic.ico' },
                { 'title': '酷狗音乐', 'desc': '酷狗音乐', 'url': 'https://www.kugou.com/', 'src': './images/navlogo/music/kgmusic.ico' },
                { 'title': '酷我音乐', 'desc': '酷我音乐', 'url': 'http://www.kuwo.cn/', 'src': './images/navlogo/music/kwmusic.PNG' },
                { 'title': '全民k歌', 'desc': '全民k歌', 'url': 'https://kg.qq.com/index-pc.html', 'src': './images/navlogo/music/kg.ico' },
                { 'title': '无损音乐吧', 'desc': '无损音乐吧', 'url': 'https://www.dtshot.com/', 'src': './images/navlogo/music/wsmusic.ico' },
                { 'title': '无损音乐源', 'desc': '无损音乐源', 'url': 'https://www.gugutm.com/', 'src': './images/navlogo/music/wsyymusic.png' },
                { 'title': '站长素材', 'desc': '剪辑音乐素材下载', 'url': 'https://sc.chinaz.com/', 'src': './images/navlogo/music/sucaimusic.ico' },
                { 'title': '爱听音乐网', 'desc': '歌曲下载', 'url': 'http://www.2t58.com/', 'src': './images/navlogo/music/aitinmusic.ico' },
                { 'title': '爱好歌', 'desc': '歌曲下载', 'url': 'https://www.ihaoge.net/song?ivk_sa=1024320u', 'src': './images/navlogo/music/aihaomusic.ico' },
                { 'title': 'MP3下载网', 'desc': '歌曲下载', 'url': 'http://www.xxmp3.com/', 'src': './images/navlogo/music/mp3music.ico' },
                { 'title': 'MyFreeMP3', 'desc': '免费音乐网', 'url': 'http://tool.liumingye.cn/music/#/', 'src': './images/navlogo/music/MyFreeMP3.ico' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/music/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-yinle1'
        }
    }
}
);
const video = Vue.component('my-component11', {
    //组件注册——视频网站
    template: "#model_pic",
    data() {
        return {
            h3name: '视频网站',
            basessarr: [
                { 'title': '腾讯视频', 'desc': '腾讯视频', 'url': 'https://v.qq.com/', 'src': './images/navlogo/video/tenxunvideo.ico' },
                { 'title': 'bilibili', 'desc': 'bilibili', 'url': 'https://www.bilibili.com/', 'src': './images/navlogo/video/bilibili.ico' },
                { 'title': '抖音', 'desc': '抖音短视频', 'url': 'https://www.douyin.com/', 'src': './images/navlogo/video/douyin.png' },
                { 'title': '虎牙', 'desc': '虎牙直播', 'url': 'https://www.huya.com/', 'src': './images/navlogo/video/huya.ico' },
                { 'title': '斗鱼', 'desc': '斗鱼直播', 'url': 'https://www.douyu.com/?dyshid=0-92caa9572c3bc0e75c5bb29100021701', 'src': './images/navlogo/video/douyu.ico' },
                { 'title': '快手', 'desc': '快手短视频', 'url': 'https://www.kuaishou.com/new-reco', 'src': './images/navlogo/video/quickhand.ico' },
                { 'title': '爱奇艺', 'desc': '爱奇艺', 'url': 'https://www.iqiyi.com/', 'src': './images/navlogo/video/aiqiyi.png' },
                { 'title': '优酷', 'desc': '优酷', 'url': 'https://www.youku.com/channel/webhome', 'src': './images/navlogo/video/youku.png' },
                { 'title': '芒果TV', 'desc': '芒果TV', 'url': 'https://www.mgtv.com/', 'src': './images/navlogo/video/mangguotv.ico' },
                { 'title': '搜狐', 'desc': '搜狐', 'url': 'https://tv.sohu.com/', 'src': './images/navlogo/video/souhu.ico' },
                { 'title': '樱花动漫', 'desc': '樱花动漫(动漫)', 'url': 'http://www.yinghuacd.com/', 'src': './images/navlogo/video/yinghua.ico' },
                { 'title': '樱花影视', 'desc': '樱花动漫(影视)', 'url': 'https://www.bytpl.com/', 'src': './images/navlogo/video/yinghua.ico' },
                { 'title': '哔滴影视', 'desc': '哔滴影视', 'url': 'https://www.bdys10.com/', 'src': './images/navlogo/video/bidi.ico' },
                { 'title': '次元街', 'desc': '次元街', 'url': 'https://www.ciyuanjie.cn/', 'src': './images/navlogo/video/ciyuanjie.png' },
                { 'title': '漫岛', 'desc': '漫岛', 'url': 'https://www.mddm.tv/', 'src': './images/navlogo/video/mandao.ico' },
                { 'title': '七味网', 'desc': '七味影视网', 'url': 'https://www.pknull.com/', 'src': './images/navlogo/video/qiwei.ico' },
                { 'title': '桃宝影院', 'desc': '桃宝影院', 'url': 'https://taobaofed.org/', 'src': './images/navlogo/video/default.ico' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/video/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-shipin1'
        }
    }
}
);
const shop = Vue.component('my-component12', {
    //组件注册——购物网站
    template: "#model_pic",
    data() {
        return {
            h3name: '购物网站',
            basessarr: [
                { 'title': '拼多多', 'desc': '拼多多', 'url': 'https://www.pinduoduo.com/', 'src': './images/navlogo/shop/pdd.ico' },
                { 'title': '淘宝', 'desc': '淘宝', 'url': 'https://www.taobao.com/', 'src': './images/navlogo/shop/taobao.ico' },
                { 'title': '苏宁易购', 'desc': '苏宁易购', 'url': 'https://www.suning.com/', 'src': './images/navlogo/shop/suning.ico' },
                { 'title': '京东', 'desc': '京东', 'url': 'https://www.jd.com/', 'src': './images/navlogo/shop/jingdong.ico' },
                { 'title': '唯品会', 'desc': '唯品会', 'url': 'https://www.vip.com/', 'src': './images/navlogo/shop/weipinghui.ico' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/shop/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-gouwuchekong'
        }
    }
}
);
const ps = Vue.component('my-component13', {
    //组件注册——ps|pr
    template: "#model_pic",
    data() {
        return {
            h3name: '素材',
            basessarr: [
                { 'title': '矢量图标', 'desc': '矢量图标免费下载', 'url': 'https://www.onlinewebfonts.com/icon/', 'src': './images/navlogo/ps/shiliang.PNG' },
                { 'title': 'png元素', 'desc': 'png元素下载', 'url': 'http://3png.com/', 'src': './images/navlogo/ps/pngyuansu.PNG' },
                { 'title': '颜色表大全', 'desc': '十六进制颜色表', 'url': 'https://www.toolscat.com/ui/color/yansebiao', 'src': './images/navlogo/ps/gonjucat.ico' },
                { 'title': '素材图片', 'desc': '图片搜索', 'url': 'https://www.pexels.com/zh-cn/', 'src': './images/navlogo/ps/seach.ico' },
                { 'title': 'domainarchive', 'desc': '素材图片', 'url': 'https://publicdomainarchive.com/', 'src': './images/navlogo/ps/1.jpg' },
                { 'title': 'yestone', 'desc': '图片搜索', 'url': 'https://www.yestone.com/', 'src': './images/navlogo/ps/yest.ico' },
                { 'title': '微软图片搜索', 'desc': '图片搜索', 'url': 'https://cn.bing.com/images/trending', 'src': './images/navlogo/ps/weiruan.ico' },
                { 'title': '中国色彩', 'desc': '中国色彩配色网站', 'url': 'http://zhongguose.com/', 'src': './images/navlogo/ps/chinesesecai.ico' },
                { 'title': '优设', 'desc': '色彩配色网站', 'url': 'https://hao.uisdc.com/color/', 'src': './images/navlogo/ps/youshe.ico' },
                { 'title': '更多色彩网站', 'desc': '更多色彩网站知乎', 'url': 'https://zhuanlan.zhihu.com/p/62827480', 'src': './images/navlogo/ps/zhihu.ico' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/ps/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-ps'
        }
    }
}
);
const normaluse = Vue.component('my-component14', {
    //组件注册——常用网站
    template: "#model_pic",
    data() {
        return {
            h3name: '常用网站',
            basessarr: [
                { 'title': '小红书', 'desc': '小红书', 'url': 'https://www.xiaohongshu.com/explore', 'src': './images/navlogo/normaluse/smallredbook.png' },
                { 'title': '番茄小说', 'desc': '番茄小说', 'url': 'https://fanqienovel.com/', 'src': './images/navlogo/normaluse/fanqie.png' },
                { 'title': '书旗小说', 'desc': '书旗小说', 'url': 'https://www.shuqi.com/', 'src': './images/navlogo/normaluse/shuqi.ico' },
                { 'title': 'QQ小说', 'desc': 'QQ小说', 'url': 'https://book.qq.com/', 'src': './images/navlogo/normaluse/qqbook.ico' },
                { 'title': '腾讯动漫', 'desc': '腾讯动漫', 'url': 'https://ac.qq.com/', 'src': './images/navlogo/normaluse/tencentcartoon.ico' },
                { 'title': '测速网', 'desc': '测速网', 'url': 'https://www.speedtest.cn/result/111.52.65.*/70gxBZBMAJe2KbwW53ym', 'src': './images/navlogo/normaluse/cesu.ico' },
                { 'title': '查询网', 'desc': 'ip查询', 'url': 'https://www.ip138.com/', 'src': './images/navlogo/normaluse/ipchaxun.ico' },
                { 'title': '中国移动', 'desc': '中国移动官网', 'url': 'https://www.10086.cn/index/bj/index_100_100.html', 'src': './images/navlogo/normaluse/chinesemove.ico' },
                { 'title': '12306', 'desc': '12306高铁购票网站', 'url': 'https://www.12306.cn/index/', 'src': './images/navlogo/normaluse/12306.ico' },
                { 'title': '高德地图', 'desc': '高德地图', 'url': 'https://www.amap.com/', 'src': './images/navlogo/normaluse/gaodeditu.ico' },
                { 'title': '驾考宝典', 'desc': '驾考宝典', 'url': 'https://www.jiakaobaodian.com/', 'src': './images/navlogo/normaluse/jiakaobaodian.ico' },
                { 'title': '携程', 'desc': '携程旅行', 'url': 'https://flights.ctrip.com/online/channel/domestic?allianceid=4897&sid=155934&utm_medium=baidu&utm_campaign=pp&utm_source=baiduppc&bd_creative=1853994625&bd_vid=5851833252356155964&keywordid=1175313767', 'src': './images/navlogo/normaluse/xiecheng.ico' },
                { 'title': 'X', 'desc': 'X社交平台(需魔法)', 'url': 'https://twitter.com/', 'src': './images/navlogo/normaluse/x.png' },
                { 'title': 'Youtube', 'desc': 'Youtube社交平台(需魔法)', 'url': 'https://www.youtube.com/', 'src': './images/navlogo/normaluse/youtube.ico' },
                { 'title': 'Touchgal', 'desc': 'galgame游戏社区下载', 'url': 'https://www.touchgal.org/', 'src': './images/navlogo/normaluse/CnLIp.png' },
                { 'title': 'Duplichecker', 'desc': '反向图片搜索', 'url': 'https://www.duplichecker.com/zh/reverse-image-search.php', 'src': './images/navlogo/normaluse/duplichecker.ico' },
                { 'title': 'wikipedia', 'desc': '维基百科', 'url': 'https://www.wikipedia.org/', 'src': './images/navlogo/normaluse/wikipedia.ico' },
                // { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/normaluse/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-qita3'
        }
    }
}
);


const teacher = Vue.component('my-component32', {
    //组件注册——教学网站
    template: "#model_pic",
    data() {
        return {
            h3name: '教学网站',
            basessarr: [
                { 'title': 'Vue项目实战', 'desc': 'Vue项目实战课程', 'url': 'https://space.bilibili.com/470892364/?spm_id_from=333.999.0.0', 'src': './images/navlogo/teacher/bilibili.ico' },
                { 'title': 'java课程', 'desc': '黑马程序员java课程', 'url': 'https://space.bilibili.com/37974444/channel/seriesdetail?sid=240482', 'src': './images/navlogo/teacher/bilibili.ico' },
                { 'title': 'linux课程', 'desc': '黑马程序员linux课程', 'url': 'https://www.bilibili.com/video/BV1n84y1i7td/?spm_id_from=333.999.0.0&vd_source=9a058e019f276110dc031c64dcba06db', 'src': './images/navlogo/teacher/bilibili.ico' },
                { 'title': 'MySQL课程', 'desc': '黑马程序员mysql课程', 'url': 'https://www.bilibili.com/video/BV1iF411z7Pu/', 'src': './images/navlogo/teacher/bilibili.ico' },
                { 'title': '大学资源网', 'desc': '大学资源网', 'url': 'https://www.dxzy163.com/', 'src': './images/navlogo/teacher/dxzy.ico' },
                { 'title': '人人自学网', 'desc': '人人自学网', 'url': 'https://www.rrzxw.net/index.html', 'src': './images/navlogo/teacher/rrzxw.ico' },
                // { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teacher/bilibili.ico' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-icon'
        }
    }
}
);

const beiyong = Vue.component('my-component33', {
    //组件注册——备用区域有图片模板
    template: "#model_pic",
    data() {
        return {
            h3name: '备用区域',
            basessarr: [
                // { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-icon'
        }
    }
}
);












const tips = Vue.component('my-component15', {
    //组件注册——提示部分
    template: "#model_nopic",
    data() {
        return {
            h3name: '提示内容',
            basessarr: [
                { 'title': '链接', 'url': './item/tips/链接.html' },
                { 'title': 'cmd命令', 'url': './item/tips/cmd/cmd.html' },
                { 'title': 'window常见编辑', 'url': './item/tips/window常见错误.html' },
                { 'title': 'Vue相关内容及错误', 'url': './item/tips/vue相关.html' },
                { 'title': '小说漫画', 'url': './item/tips/小说漫画/1.html' },
                { 'title': 'git上传方法', 'url': './item/tips/git.html' },
                { 'title': '鼠标右键内容修改', 'url': './item/tips/修改鼠标右键.html' },
                { 'title': 'u盘错误代码', 'url': './item/tips/u盘错误代码.html' },
                { 'title': '极域万能密码', 'url': './item/tips/极域万能密码.html' },
                { 'title': 'hello算法', 'url': './item/tips/hello算法.html' },
                { 'title': '代码提示插件', 'url': './item/tips/代码提示插件/1.html' },
                { 'title': 'css定位使用', 'url': 'https://blog.csdn.net/Junehhh/article/details/129022799' },
                { 'title': 'js压缩方法', 'url': 'https://blog.csdn.net/XiaoningZhu/article/details/100162898' },
                { 'title': '图片全屏方法', 'url': './item/tips/图片全屏方法.html' },
                { 'title': '响应式文件在线', 'url': './item/tips/响应式在线连接.html' },
                { 'title': '谷歌翻译问题', 'url': 'https://zhuanlan.zhihu.com/p/571190754?utm_id=0&eqid=a943ec120032fe69000000046464d1a5' },
                { 'title': '新窗口打开', 'url': './item/tips/jQuery在新窗口打开.html' },
                { 'title': '移动端书签', 'url': './item/tips/谷歌移动端书签.html' },
                { 'title': '云', 'url': './item/tips/naozhong/index.html' },
                { 'title': 'QQ查电话', 'url': './item/tips/Api/qqSelectPhone.html' },
                { 'title': 'Adobe下载链接', 'url': './item/tips/办公软件下载链接.html' },
                { 'title': 'Wifi管理文档', 'url': './item/tips/WiFi/Wifi管理文档.pdf' },
                { 'title': '电话资料(加密)', 'url': './item/tips/phone/' },
                // { 'title': '', 'url': './item/' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-tishi'
        }
    }
}
);



const beiyong2 = Vue.component('my-component33', {
    //组件注册——备用区域无图片模板
    template: "#model_nopic",
    data() {
        return {
            h3name: '备用区域无图片模板',
            basessarr: [
                { 'title': '', 'url': './item/' },
                { 'title': '', 'url': './item/' },
                { 'title': '', 'url': './item/' },
                // { 'title': '', 'url': './item/' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-tishi'
        }
    }
}
);
const adminset = Vue.component('my-component16', {
    //组件注册——用户模板
    template: "#adminset",
    data() {
        return {
            // 图标跳转路径
            tiaozhuang: './',
            // myname名字，outtime修改时间，store仓库中获取
            myname: this.$store.state.myname,
            outtime: this.$store.state.outtime
        }
    },
    //过滤器
    filters: {
        //添加前缀
        namess(obj) {
            return obj + "-------------------------本项无法修改";
            // 使用方法{{ myname | namess }}
        }
    },
}
);
const adminset_wechat = Vue.component('my-component17', {
    //组件注册——用户模板微信
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picone'
        }
    }
}
);
const adminset_qq = Vue.component('my-component18', {
    //组件注册——用户模板qq
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay pictwo'
        }
    }
}
);
const adminset_zhifuplay = Vue.component('my-component19', {
    //组件注册——用户模板支付宝支付页
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picthree'
        }
    }
}
);
const adminset_wechatplay = Vue.component('my-component20', {
    //组件注册——用户模板微信支付页
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picfour'
        }
    }
}
);
const itemhtmlcss = Vue.component('my-component21', {
    //组件注册——代码部分html——css
    template: "#itemsectiontwo",
    data() {
        return {
            h3name: '',
            // 导航数据
            basessarr: [
                // 应输入路由路径 
                { 'title': '导航条', 'url': '/item/htmlcss/nav' },
                { 'title': '弹出框', 'url': '/item/htmlcss/alert' },
                { 'title': '404页面', 'url': '/item/htmlcss/404' },
                { 'title': '轮播图', 'url': '/item/htmlcss/banner' },
                { 'title': '盒子布局效果', 'url': '/item/htmlcss/box' },
                { 'title': '文字效果', 'url': '/item/htmlcss/font' },
                { 'title': '按钮', 'url': '/item/htmlcss/btn' },
                { 'title': '模仿', 'url': '/item/htmlcss/imitate' },
                { 'title': '页脚', 'url': '/item/htmlcss/footer' },
                { 'title': '加载页', 'url': '/item/htmlcss/loading' },
                { 'title': '时间倒计时', 'url': '/item/htmlcss/outtimes' },
                { 'title': '登录注册', 'url': '/item/htmlcss/reglogin' },
                { 'title': '移动端', 'url': '/item/htmlcss/removephone' },
                { 'title': '搜索框', 'url': '/item/htmlcss/select' },
                { 'title': '时间轴', 'url': '/item/htmlcss/timeline' },
                { 'title': 'else其他', 'url': '/item/htmlcss/else' },
                { 'title': 'model模板', 'url': '/item/htmlcss/model' },
                { 'title': 'HTML内容', 'url': '/item/htmlcss/html' },
                // { 'title': '', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'HTML-and-CSS',
            //对应项目分类图标
            classurl: 'iconfont icon-HTML isubiao'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            // console.log('点击返回');
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);


// --------------------------------------------------------htmlcss三级模板写入部分开始-----------------------------------------
const HtmlCssNav = Vue.component('my-component21', {
    //组件注册——代码部分html——css——nav
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '导航栏',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '二级导航条', 'url': './item/css/nav/1二级导航条/index.html' },
                { 'title': '下拉导航条', 'url': './item/css/nav/2下拉导航条/index.html' },
                { 'title': '侧边导航', 'url': './item/css/nav/3侧边导航/index.html' },
                { 'title': '按钮侧边', 'url': './item/css/nav/4按钮侧边导航/index.html' },
                { 'title': '侧边二级', 'url': './item/css/nav/5侧边二级导航/index.html' },
                { 'title': '侧边二级图片', 'url': './item/css/nav/6侧边二级图片导航/index.html' },
                { 'title': '侧边伸缩栏', 'url': './item/css/nav/7侧边伸缩栏/index.html' },
                { 'title': '侧边图标提示', 'url': './item/css/nav/8侧边图标提示导航/index.html' },
                { 'title': '导航二级模版', 'url': './item/css/nav/9导航条二级模版/index.html' },
                { 'title': '导航条特效1', 'url': './item/css/nav/10导航条特性2/index.html' },
                { 'title': '导航条特效2', 'url': './item/css/nav/11导航条样式/index.html' },
                { 'title': '导航下拉菜单', 'url': './item/css/nav/12导航下拉菜单/index.html' },
                { 'title': '文字上下滚动', 'url': './item/css/nav/13导航样式文字上下滚动/index.html' },
                { 'title': '二级导航-单模', 'url': './item/css/nav/14二级导航2/index.html' },
                { 'title': '二级导航-带图', 'url': './item/css/nav/15二级导航3/index.html' },
                { 'title': '二级导航-全下', 'url': './item/css/nav/16二级导航4/index.html' },
                { 'title': '二级导航下拉', 'url': './item/css/nav/17二级导航下拉/index.html' },
                { 'title': '二级导航悬停', 'url': './item/css/nav/18二级导航悬停/index.html' },
                { 'title': '二级点击下拉', 'url': './item/css/nav/19二级点击下拉/index.html' },
                { 'title': '二级图片导航', 'url': './item/css/nav/20二级图片导航/index.html' },
                { 'title': '二级下拉导航', 'url': './item/css/nav/21二级下拉导航2/index.html' },
                { 'title': '伸缩导航', 'url': './item/css/nav/22伸缩导航/index.html' },
                { 'title': '鼠标高亮导航', 'url': './item/css/nav/23鼠标高亮导航/index.html' },
                { 'title': '双重导航1', 'url': './item/css/nav/24双重导航/index.html' },
                { 'title': '双重导航2', 'url': './item/css/nav/25双重导航2/index.html' },
                { 'title': '右下导航条', 'url': './item/css/nav/26右下导航条/index.html' },
                { 'title': '古风导航效果', 'url': './item/css/nav/27古风导航效果/index.html' },
                { 'title': '底部导航栏', 'url': './item/css/nav/css-底部导航栏/底部导航栏.html' },
                { 'title': '动态侧边栏', 'url': './item/css/nav/56-css-动态侧边栏/index.html' },
                { 'title': '内凹导航栏', 'url': './item/css/nav/css-内凹导航栏/内凹导航栏.html' },
                { 'title': '滑动导航栏', 'url': './item/css/nav/64-css-滑动导航栏/滑动导航栏.html' },
                { 'title': '导航下拉菜单', 'url': './item/css/nav/76-css-导航下拉菜单-代码/index.html' },
                { 'title': '下划线跟随导航', 'url': './item/css/nav/81-css-下划线跟随导航/下划线跟随导航.html' },
                { 'title': '下划线导航栏', 'url': './item/css/nav/73-css-下划线导航栏/下划线导航栏.html' },
                { 'title': '悬停侧边栏', 'url': './item/css/nav/67-css-悬停侧边栏-代码/index.html' },
                { 'title': '悬停导航栏', 'url': './item/css/nav/75-css-悬停导航栏/悬停导航栏.html' },
                { 'title': '动感菜单', 'url': './item/css/nav/css-动感菜单/CSS-动感菜单.html' },
                // { 'title': '', 'url': './item/css/nav/' },
            ],
        }
    },
}
);
const HtmlcCssAlert = Vue.component('my-component21', {
    //组件注册——代码部分html——css——alert
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '弹出功能',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //alert
                { 'title': '弹窗样式', 'url': './item/css/alert/1弹窗样式/index.html' },
                { 'title': '弹窗右下', 'url': './item/css/alert/2弹窗右下/index.html' },
                { 'title': '弹幕功能', 'url': './item/css/alert/3弹幕功能/index.html' },
                { 'title': '展开动画', 'url': './item/css/alert/35-css-展开动画/展开动画.html' },//alert
                // { 'title': '', 'url': './item/css/alert/' },
            ],
        }
    },
}
);
const HtmlCss404 = Vue.component('my-component21', {
    //组件注册——代码部分html——css---404
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '404页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '404页面出错', 'url': './item/css/404/1-404-页面出错/index.html' },
                { 'title': '404错误返回', 'url': './item/css/404/2-404-错误返回/index.html' },
                { 'title': '404错误简约', 'url': './item/css/404/3-404-错误简约/index.html' },
                { 'title': '404动画飞碟', 'url': './item/css/404/4-404-动画飞碟/index.html' },
                { 'title': '404施工', 'url': './item/css/404/5-404-施工/404.html' },
                { 'title': '404搜索框', 'url': './item/css/404/6-404-搜索框/index.html' },
                { 'title': '404网站维护中', 'url': './item/css/404/7-404-网站维护中/index.html' },
                { 'title': '404页面', 'url': './item/css/404/8-404-页面/index.html' },
            ],
        }
    },
}
);
const HtmlCssBanner = Vue.component('my-component21', {
    //组件注册——代码部分html——css---banner
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '轮播图',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '侧边小图轮播', 'url': './item/css/banner/1侧边小图轮播/index.html' },
                { 'title': '导航条轮播', 'url': './item/css/banner/2导航条轮播/index.html' },
                { 'title': '分享轮播', 'url': './item/css/banner/3分享轮播/index.html' },
                { 'title': '轮播图带下方按钮', 'url': './item/css/banner/6轮播图带下方按钮/index.html' },
                { 'title': '轮播虚化转换', 'url': './item/css/banner/7轮播虚化转换/index.html' },
                { 'title': '购物人员轮播', 'url': './item/css/banner/5购物人员轮播/index.html' },
                { 'title': '展开卡片效果', 'url': './item/css/banner/4展开卡片效果/index.html' },
                { 'title': '全景轮播', 'url': './item/css/banner/CSS-全景轮播/全景轮播.html' },
                { 'title': '垂直轮播', 'url': './item/css/banner/CSS-垂直轮播/垂直轮播.html' },
                { 'title': '焦点轮播', 'url': './item/css/banner/CSS-焦点轮播/index.html' },
                { 'title': '苹果自动滚屏', 'url': './item/css/banner/苹果自动滚屏/gunping.html' },
                { 'title': '走马灯', 'url': './item/css/banner/05-CSS-走马灯/走马灯.html' },
                { 'title': '双开门', 'url': './item/css/banner/02-CSS-双开门/CSS-双开门.html' },
                { 'title': '3D轮播卡片', 'url': './item/css/banner/CSS-3D轮播卡片(1)/3D轮播卡片.html' },
                { 'title': '滚动卡片', 'url': './item/css/banner/滚动卡片/index.html' },
                { 'title': '立体式图片查看', 'url': './item/css/banner/立体式图片查看/立体式图片查看.html' },
                { 'title': '悬停相册', 'url': './item/css/banner/80-CSS-3D悬停相册（轮播）/CSS-悬停相册.html' },
                // { 'title': '', 'url': './item/css/banner/' },
            ],
        }
    },
}
);
const HtmlCssBox = Vue.component('my-component21', {
    //组件注册——代码部分html——css----box
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '盒子效果',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '上下扩大盒子', 'url': './item/css/box/1盒子上下扩大/index.html' },
                { 'title': '手风琴展开盒子', 'url': './item/css/box/2盒子手风琴展开/index.html' },
                { 'title': '盒子图片展开', 'url': './item/css/box/3盒子图片展开/index.html' },
                { 'title': '盒子选中边框特效', 'url': './item/css/box/4盒子选中边框特效/index.html' },
                { 'title': '块盒子放大', 'url': './item/css/box/5块盒子放大/index.html' },
                { 'title': '商品多图片查看', 'url': './item/css/box/6商品多图片查看/index.html' },
                { 'title': '商品列表详情', 'url': './item/css/box/7商品列表详情/index.html' },
                { 'title': '悬停盒子文字', 'url': './item/css/box/8鼠标悬停查看盒子文字/index.html' },
                { 'title': '悬停盒子文字', 'url': './item/css/box/9鼠标悬停盒子文字查看/index.html' },
                { 'title': '悬停打开盒子', 'url': './item/css/box/10悬停打开盒子/index.html' },
                { 'title': '全屏选项卡', 'url': './item/css/box/11全屏选项卡/index.html' },
                { 'title': '圆形遮罩效果', 'url': './item/css/box/12圆形遮罩效果/index.html' },
                { 'title': '方型遮罩投票', 'url': './item/css/box/13方型遮罩-投票/index.html' },
                { 'title': '新闻选项卡', 'url': './item/css/box/新闻选项卡/index.html' },
                { 'title': '选项卡片切换', 'url': './item/css/box/选项卡片切换/index.html' },
                { 'title': '选项卡切换', 'url': './item/css/box/选项卡切换/index.html' },
                { 'title': '边框光彩流动', 'url': './item/css/box/边框光彩流动/边框光彩流动.html' },
                { 'title': '粘性页面定位', 'url': './item/css/box/粘性页面定位/111.html' },
                { 'title': '图片放大效果', 'url': './item/css/box/图片放大效果/111.html' },
                { 'title': '视差效果', 'url': './item/css/box/视差效果/1.html' },
                // { 'title': '', 'url': './item/css/box/' },
            ],
        }
    },
}
);
const HtmlCssFont = Vue.component('my-component21', {
    //组件注册——代码部分html——css----font
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文字效果',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '幽灵文字', 'url': './item/css/font/幽灵文字/幽灵文字.html' },
                { 'title': '跳动文字', 'url': './item/css/font/跳动文字/跳动文字.html' },
                { 'title': '炫酷下拉线', 'url': './item/css/font/炫酷下拉线/炫酷拉下线.html' },
                { 'title': '文字水波特效', 'url': './item/css/font/文字水波特效/文字水波特效.html' },
                { 'title': '文字聚光灯', 'url': './item/css/font/聚光灯/聚光灯.html' },
                { 'title': '文字加载动效', 'url': './item/css/font/文字加载动效/index.html' },
                { 'title': '文字扫描加载', 'url': './item/css/font/css-文字扫描加载/文字扫描加载.html' },
                { 'title': '文字穿透效果', 'url': './item/css/font/CSS-文字穿透效果/index.html' },
                // { 'title': '', 'url': './item/css/font/' },
            ],
        }
    },
}
);
const HtmlCssBtn = Vue.component('my-component21', {
    //组件注册——代码部分html——css-----btn
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '按钮',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '按钮彩条特效', 'url': './item/css/btn/1按钮彩条特效/index.html' },
                { 'title': '按钮气泡特效', 'url': './item/css/btn/2按钮气泡特效/index.html' },
                { 'title': '按钮特效', 'url': './item/css/btn/3按钮特效3/index.html' },
                { 'title': '按钮悬停拓展', 'url': './item/css/btn/4按钮悬停上下显示/index.html' },
                { 'title': '按钮特效', 'url': './item/css/btn/5鼠标过按钮特效/index.html' },
                { 'title': '炫酷按钮精', 'url': './item/css/btn/炫酷按钮/炫酷按钮.html' },
                { 'title': '开关按钮', 'url': './item/css/btn/开关按钮/开关按钮.html' },
                { 'title': '波纹按钮特效', 'url': './item/css/btn/波纹按钮特效/波纹按钮特效.html' },
                { 'title': '刀光按钮特效', 'url': './item/css/btn/刀光按钮特效/刀光按钮特效.html' },
                { 'title': '点击按钮打钩效果', 'url': './item/css/btn/82-css-点击按钮打钩效果/index.html' },
                { 'title': '镜面按钮', 'url': './item/css/btn/镜面按钮/镜面按钮.html' },
                { 'title': '按钮切换背景（普通）', 'url': './item/css/btn/按钮切换背景（普通）/按钮.html' },
                { 'title': '悬浮动画按钮', 'url': './item/css/btn/悬浮动画/悬浮按钮.html' },
                { 'title': '按钮切换背景', 'url': './item/css/btn/按钮切换背景（高端）/炫酷按钮.html' },
                //  { 'title': '','url': './item/css/btn/'},

            ],
        }
    },
}
);
const HtmlCssImitate = Vue.component('my-component21', {
    //组件注册——代码部分html——css-----模仿
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '模仿页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '仿i7素材网站', 'url': './item/css/imitate/1仿i7素材网站/index.html' },
                { 'title': 'QQ音乐播放器', 'url': './item/css/imitate/2仿QQ音乐播放器/index.html' },
                { 'title': '仿百度搜图', 'url': './item/css/imitate/3仿百度搜图/index.html' },
                { 'title': '仿商城', 'url': './item/css/imitate/4仿商城/index.html' },
                { 'title': '仿微信', 'url': './item/css/imitate/5仿微信/index.html' },
                { 'title': '仿文件夹下拉', 'url': './item/css/imitate/6仿文件夹下拉/index.html' },
                { 'title': '仿聊天框', 'url': './item/css/imitate/7仿聊天框/index.html' },
                { 'title': '仿日历考勤表', 'url': './item/css/imitate/8仿日历考勤表/index.html' },
                { 'title': '仿播放器可伸缩', 'url': './item/css/imitate/9仿音乐播放器可伸缩/index.html' },
                { 'title': '仿日历', 'url': './item/css/imitate/10仿日历/index.html' },
                // { 'title': '', 'url': './item/css/imitate/' },
            ],
        }
    },
}
);
const HtmlCssFooter = Vue.component('my-component21', {
    //组件注册——代码部分html——css---footer
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '页脚',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '页脚模版-详', 'url': './item/css/footer/页脚模版1/index.html' },
                { 'title': '页脚模版-深色', 'url': './item/css/footer/页脚模版2/index.html' },
                { 'title': '页脚模版-简', 'url': './item/css/footer/页脚模版3/index.html' },
                { 'title': '页脚模版-表单', 'url': './item/css/footer/页脚模版4/index.html' },
                { 'title': '页脚模版-块链接', 'url': './item/css/footer/页脚模版5/index.html' },
                { 'title': '页脚模版-简', 'url': './item/css/footer/页脚模版6/index.html' },
                { 'title': '页脚标签', 'url': './item/css/footer/7页脚标签/index.html' },
                { 'title': '页尾特效', 'url': './item/css/footer/8页尾特效/index.html' },
                // { 'title': '', 'url': './item/css/footer/' },
            ],
        }
    },
}
);
const HtmlCssLoading = Vue.component('my-component21', {
    //组件注册——代码部分html——css---loading
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '加载页',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //loading
                { 'title': '连接服务器加载', 'url': './item/css/loading/2加载页-连接服务器/index.html' },
                { 'title': '加载页30种', 'url': './item/css/loading/1加载页30种/index.html' },
                { 'title': '圆形贴贴动画', 'url': './item/css/loading/3圆形贴贴动画/index.html' },
                { 'title': '全屏滑动加载', 'url': './item/css/loading/58-css-全屏滑动加载/index.html' },
                { 'title': '边缘融合加载', 'url': './item/css/loading/63-css-边缘融合加载/边缘融合loading.html' },
                { 'title': '环形进度条', 'url': './item/css/loading/环形进度条/环形进度条.html' },
                { 'title': '手风琴加载', 'url': './item/css/loading/手风琴/手风琴加载.html' },
                { 'title': '进度条', 'url': './item/css/loading/进度条/index.html' },
                { 'title': '钢铁侠加载', 'url': './item/css/loading/css-钢铁侠加载/钢铁侠加载页.html' },
                { 'title': '光线加载动画', 'url': './item/css/loading/74-css-光线加载动画/光线加载动画.html' },
                { 'title': '旋转加载中', 'url': './item/css/loading/旋转加载中/旋转加载中.html' },
                { 'title': '小球滚动加载', 'url': './item/css/loading/小球滚动加载/index.html' },

                // { 'title': '', 'url': './item/css/loading/' },
            ],
        }
    },
}
);
const HtmlCssOuttimes = Vue.component('my-component21', {
    //组件注册——代码部分html——css---outtime
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '倒计时',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '倒计时-中', 'url': './item/css/outtimes/1倒计时/index.html' },
                { 'title': '倒计时-左', 'url': './item/css/outtimes/2倒计时3/index.html' },
                { 'title': '倒计时搜索栏', 'url': './item/css/outtimes/3倒计时搜索栏/index.html' },
                { 'title': '倒计时-方格', 'url': './item/css/outtimes/4倒计时/index.html' },
                // { 'title': '', 'url': './item/css/outtimes/' },
            ],
        }
    },
}
);
const HtmlCssRegAndLogin = Vue.component('my-component21', {
    //组件注册——代码部分html——css----reglogin
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '登录注册',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径 //reg
                { 'title': '登录管理模版', 'url': './item/css/reg_login/1登录管理模版/sign.html' },
                { 'title': '登录页-单', 'url': './item/css/reg_login/2登录页/index.html' },
                { 'title': '登录页-带验证', 'url': './item/css/reg_login/3登录页123/index.html' },
                { 'title': '登录页-三', 'url': './item/css/reg_login/4登录注册忘记密码/login.html' },
                { 'title': '登录页-枫叶三', 'url': './item/css/reg_login/5登录注册忘记密码2/login.html' },
                { 'title': '登录页-简约三', 'url': './item/css/reg_login/6登录注册忘记密码3/login.html' },
                { 'title': '登录页-时尚三', 'url': './item/css/reg_login/7登录注册忘记密码4/login.html' },
                { 'title': '登录页-验证三', 'url': './item/css/reg_login/8登录注册忘记密码5/login.html' },
                { 'title': '登录页-单', 'url': './item/css/reg_login/9登录注册页12/index.html' },
                { 'title': '注册页-单', 'url': './item/css/reg_login/9登录注册页12/index2.html' },
                { 'title': '动画注册登录', 'url': './item/css/reg_login/10动画注册登录/login.html' },
                { 'title': '滑块验证注册', 'url': './item/css/reg_login/11滑块验证注册/index.html' },
                { 'title': '京东注册页', 'url': './item/css/reg_login/12京东注册页/index.html' },
                { 'title': '块显示登录注册', 'url': './item/css/reg_login/13块显示登录注册/index.html' },
                { 'title': '上小图登录页', 'url': './item/css/reg_login/14上小图登录页/index.html' },
                { 'title': '手机验证码登录页', 'url': './item/css/reg_login/15手机验证码登录页/index.html' },
                { 'title': '双边登录页', 'url': './item/css/reg_login/16双边登录页/index.html' },
                { 'title': '微信扫码登录', 'url': './item/css/reg_login/17微信扫码登录/index.html' },
                { 'title': '小鹰闭眼登录', 'url': './item/css/reg_login/18小鹰闭眼登录/index.html' },
                { 'title': '验证码登录页', 'url': './item/css/reg_login/19验证码登录页/index.html' },
                { 'title': '炫彩登录页', 'url': './item/css/reg_login/炫酷登录页/炫酷登录页.html' },
                { 'title': '流光登陆页', 'url': './item/css/reg_login/css-流光登陆页/登录页2.0.html' },
                { 'title': '登录页', 'url': './item/css/reg_login/登录页/登录.html' },
                { 'title': '花瓣登录', 'url': './item/css/reg_login/css-花瓣登录/花瓣登录.html' },
                { 'title': '密码灯登陆', 'url': './item/css/reg_login/69-css-密码灯登陆/index.html' },
                { 'title': '注册登录切换', 'url': './item/css/reg_login/70-CSS-注册登录切换/index.html' },
                { 'title': '简约登录页', 'url': './item/css/reg_login/61-css-简约登录页/login.html' },
                { 'title': '阿里云盘登陆', 'url': './item/css/reg_login/62-css-阿里云盘登陆/login.html' },
                { 'title': '水滴登录页', 'url': './item/css/reg_login/59-css-水滴登录页/index.html' },
                { 'title': '炫酷登录切换', 'url': './item/css/reg_login/CSS-炫酷登录切换/CSS-炫酷登录切换.html' },
                //  { 'title': '','url': './item/css/reg_login/'},
            ],
        }
    },
}
);
const HtmlCssRemovePhone = Vue.component('my-component21', {
    //组件注册——代码部分html——css----removephone
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '移动端',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '手机底部导航效果', 'url': './item/css/remove_phone/1手机底部导航效果/index.html' },
                { 'title': '手机端聊天应用程序', 'url': './item/css/remove_phone/2手机端聊天应用程序/index.html' },
                { 'title': '手机端音乐app', 'url': './item/css/remove_phone/3手机端音乐app/index.html' },
                { 'title': '移动段下拉条', 'url': './item/css/remove_phone/4移动段下拉条/index.html' },
                { 'title': '移动多图片上传', 'url': './item/css/remove_phone/5移动-多图片上传/index.html' },
                { 'title': '移动购物车', 'url': './item/css/remove_phone/6移动-购物车/index.html' },
                { 'title': '移动滑动更多', 'url': './item/css/remove_phone/7移动-滑动更多/index.html' },
                { 'title': '移动搜索', 'url': './item/css/remove_phone/8移动-搜索/index-search.html' },
                { 'title': '移动图片上传', 'url': './item/css/remove_phone/9移动-图片上传/index.html' },
                { 'title': '移动设计合集', 'url': './item/css/remove_phone/10移动设计合集/index.html' },
            ],
        }
    },
}
);
const HtmlCssSelect = Vue.component('my-component21', {
    //组件注册——代码部分html——css---select
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '搜索栏',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '点击更多', 'url': './item/css/select/1点击更多/index.html' },
                { 'title': '旋转工具箱', 'url': './item/css/select/旋转工具箱/旋转工具箱.html' },
                { 'title': '旋转打开盒子', 'url': './item/css/select/旋转打开盒子/index.html' },
                { 'title': '炫彩工具箱', 'url': './item/css/select/css-炫彩工具箱/CSS-炫彩工具箱.html' },
                { 'title': '点击伸缩导航栏', 'url': './item/css/select/2点击伸缩导航栏/index.html' },
                { 'title': '更多分享', 'url': './item/css/select/4更多分享3/index.html' },
                { 'title': '分享插件块', 'url': './item/css/select/3分享插件块/index.html' },
                { 'title': '搜索栏伸缩', 'url': './item/css/select/5搜索栏伸缩2/index.html' },
                { 'title': '搜索栏样式', 'url': './item/css/select/6搜索栏样式/index.html' },
                { 'title': '下拉列表美化', 'url': './item/css/select/7下拉列表美化/index.html' },
                { 'title': '输入框上方显示', 'url': './item/css/select/输入框上方显示/输入框上方显示.html' },
                { 'title': '输入框动效', 'url': './item/css/select/输入框动效/输入框动效.html' },
                { 'title': '输入文字上浮放大', 'url': './item/css/select/输入文字上浮放大/index.html' },
                { 'title': '输入文字闪光效果', 'url': './item/css/select/输入文字闪光效果/index.html' },
                { 'title': '多种输入框动效', 'url': './item/css/select/54-css-多种输入框动效/输入框特效.html' },
                { 'title': '动态搜索框', 'url': './item/css/select/CSS-动态搜索框/动态搜索框.html' },
            ],
        }
    },
}
);
const HtmlCssTimeline = Vue.component('my-component21', {
    //组件注册——代码部分html——css--timeline
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '时间轴',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //timeline
                { 'title': '时间轴-左右', 'url': './item/css/timeline/时间轴1/index.html' },
                { 'title': '时间轴-视频', 'url': './item/css/timeline/时间轴2/index.html' },
                { 'title': '时间轴-历程', 'url': './item/css/timeline/时间轴3/index.html' },
                { 'title': '时间轴-弯曲', 'url': './item/css/timeline/时间轴4/index.html' },
                { 'title': '时间轴-动画', 'url': './item/css/timeline/时间轴6/index.html' },
                { 'title': '可点击时间轴', 'url': './item/css/timeline/5可点击时间轴/index.html' },
                // { 'title': '', 'url': './item/css/timeline/' },
            ],
        }
    },
}
);
const HtmlCssElse = Vue.component('my-component21', {
    //组件注册——代码部分html——css---else
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '其他',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'css提取码', 'url': './item/css/css提取码.html' },
                { 'title': '拟态键盘', 'url': './item/css/else/A0002-拟态键盘/keyboard 1.html' },
                { 'title': 'Win10桌面', 'url': './item/css/else/html实现Win10桌面后台管理/index.html' },
                { 'title': '多行文本展开', 'url': './item/css/else/71-css-多行文本展开/index.html' },
                { 'title': '选中动画', 'url': './item/css/else/77-css-自定义选中动画/CSS-自定义选中效果.html' },
                { 'title': '苹果消息折叠效果', 'url': './item/css/else/57-css-苹果消息折叠效果/index.html' },
                { 'title': '王者翻转框', 'url': './item/css/else/42-css-王者翻转框/王者翻转框.html' },
                { 'title': '悬浮菜单', 'url': './item/css/else/悬浮图标/悬浮图标.html' },
                { 'title': '悬停魔法棒', 'url': './item/css/else/悬停魔法棒/悬停魔法棒.html' },
                { 'title': '魔力弹簧', 'url': './item/css/else/魔力弹簧/魔力弹簧.html' },
                { 'title': '云彩下雪', 'url': './item/css/else/云彩下雪/云彩下雪.html' },
                { 'title': '口罩表情', 'url': './item/css/else/口罩表情/口罩表情.html' },
                { 'title': '手机充电效果', 'url': './item/css/else/手机充电效果/shoujiconddian.html' },
                { 'title': '渐变卡片', 'url': './item/css/else/渐变卡片/渐变卡片.html' },
                { 'title': '太阳', 'url': './item/css/else/太阳/太阳.html' },
                { 'title': '日历模拟器', 'url': './item/css/else/日历模拟器/日历模拟器.html' },
                { 'title': '星际旋转', 'url': './item/css/else/17-css-星际旋转/星际旋转.html' },
                { 'title': '鼠标痕迹', 'url': './item/css/else/鼠标痕迹/鼠标痕迹.html' },
                { 'title': '3D立体相册', 'url': './item/css/else/css-3D立体相册/3D立体相册-源码.html' },
                { 'title': '3d导航', 'url': './item/css/else/25-CSS-3d导航/3d导航.html' },
                { 'title': '步骤条', 'url': './item/css/else/72-css-步骤条/CSS-步骤条源码.html' },
                { 'title': '大风车', 'url': './item/css/else/CSS-大风车/CSS-大风车.html' },
                { 'title': '缩放动画', 'url': './item/css/else/CSS-缩放动画/缩放动画.html' },
                { 'title': '网易云播放器', 'url': './item/css/else/41-css-网易云播放器/css-网易云.html' },
                { 'title': '荧光转动表', 'url': './item/css/else/36-css-荧光转动表/转动表.html' },
                { 'title': '爱你的心', 'url': './item/css/else/23-CSS-爱你的心/爱你的心.html' },
                { 'title': '贺卡纯css', 'url': './item/css/else/65-css-中秋贺卡/无图无JS-中秋贺卡.html' },
                { 'title': 'AR扫福', 'url': './item/css/else/68-CSS-AR扫福效果/index.html' },
                { 'title': '雷达扫描效果', 'url': './item/css/else/66-css-雷达扫描效果/css雷达扫描效果.html' },
                { 'title': '滑动拼图验证码', 'url': './item/css/else/78-css-滑动拼图验证码/index.html' },
                { 'title': '鸿蒙OS动画', 'url': './item/css/else/79-css-鸿蒙OS动画/鸿蒙OS动画.html' },
                { 'title': '3D翻转Tab', 'url': './item/css/else/83-css-3D翻转Tab/index.html' },
                { 'title': '颜色选择器', 'url': './item/css/else/84-css-颜色选择器-代码/index.html' },
                { 'title': '搜索标签选择', 'url': './item/css/else/搜索标签选择/index.html' },
                { 'title': '作品上传', 'url': './item/css/else/作品上传/index.html' },
                { 'title': '打赏', 'url': './item/css/else/打赏/index.html' },
                { 'title': '生日蛋糕', 'url': './item/css/else/生日蛋糕/index.html' },
                { 'title': '3d步数', 'url': './item/css/else/3d步数/index.html' },
                { 'title': '爱心背景动画', 'url': './item/css/else/爱心背景动画/index.html' },
            ],
        }
    },
}
);
const HtmlCssModel = Vue.component('my-component21', {
    //组件注册——代码部分html——css---model
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '页面模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '模版-膳食', 'url': './item/css/model/1模版-膳食/index.html' },
                { 'title': '模版-餐厅', 'url': './item/css/model/2模版-餐厅/index.html' },
                { 'title': '管理模版', 'url': './item/css/model/3管理模版/index.html' },
                { 'title': '后台管理模版', 'url': './item/css/model/4后台管理模版/index.html' },
                { 'title': '电子商务大数据', 'url': './item/css/model/5广西电子商务公共服务平台大数据中心/index.html' },
                { 'title': '物流大数据平台', 'url': './item/css/model/6湖南物流大数据服务平台/index.html' },
                { 'title': '大数据总揽图', 'url': './item/css/model/7大数据运维总揽图/index.html' },
                { 'title': 'model蔬菜', 'url': './item/css/model/model/model (1)/index.html' },
                { 'title': 'model运输', 'url': './item/css/model/model/model (2)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (3)/index.html' },
                { 'title': 'model社区', 'url': './item/css/model/model/model (4)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (5)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (6)/index.html' },
                { 'title': 'model健身', 'url': './item/css/model/model/model (7)/index.html' },
                { 'title': 'model晒图', 'url': './item/css/model/model/model (8)/index.html' },
                { 'title': 'model名片', 'url': './item/css/model/model/model (9)/index.html' },
                { 'title': 'model酒', 'url': './item/css/model/model/model (10)/index.html' },
                { 'title': 'model电子', 'url': './item/css/model/model/model (11)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (12)/index.html' },
                { 'title': 'model电子', 'url': './item/css/model/model/model (13)/index.html' },
                { 'title': 'model酒店', 'url': './item/css/model/model/model (14)/index.html' },
                { 'title': 'model梦幻', 'url': './item/css/model/model/model (15)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (16)/index.html' },
                { 'title': 'model护理', 'url': './item/css/model/model/model (17)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (18)/index.html' },
                { 'title': 'model肉', 'url': './item/css/model/model/model (19)/index.html' },
                { 'title': 'model花', 'url': './item/css/model/model/model (20)/index.html' },
                { 'title': 'model摄影', 'url': './item/css/model/model/model (21)/index.html' },
                { 'title': 'model汽车', 'url': './item/css/model/model/model (22)/index.html' },
                { 'title': 'model动画', 'url': './item/css/model/model/model (23)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (24)/index.html' },

                { 'title': '电子网站1', 'url': './item/css/model/8IT产品电子商务网站/index.html' },
                { 'title': '电子网站2', 'url': './item/css/model/8IT产品电子商务网站/index-2.html' },
                { 'title': 'Taxi出租车', 'url': './item/css/model/9Taxi出租车公司/index.html' },
                { 'title': '别墅房地产评估', 'url': './item/css/model/10别墅房地产评估公司/index.html' },
                { 'title': '冰淇淋企业', 'url': './item/css/model/11冰淇淋企业网站/index.html' },
                { 'title': '残障儿童公益项目', 'url': './item/css/model/12残障儿童公益项目/index.html' },
                { 'title': '侧导航清爽', 'url': './item/css/model/13侧导航清爽网站/index.html' },
                { 'title': '超大气宠物世界', 'url': './item/css/model/14超大气宠物世界/index.html' },
                { 'title': '宠物猫买卖交易', 'url': './item/css/model/15宠物猫买卖交易/index.html' },
                { 'title': '创意家居工艺', 'url': './item/css/model/16创意家居工艺/index.html' },
                { 'title': '大气宽屏婚庆', 'url': './item/css/model/17大气宽屏婚庆公司/index.html' },
                { 'title': '大气商务酒店', 'url': './item/css/model/18大气商务酒店/index.html' },
                { 'title': '电影影视门户', 'url': './item/css/model/19电影影视门户/index.html' },
                { 'title': '房地产公司', 'url': './item/css/model/20房地产公司/index.html' },
                { 'title': '房地产新楼盘', 'url': './item/css/model/21房地产新楼盘/index.html' },
                { 'title': '仿淘宝首页', 'url': './item/css/model/22仿淘宝首页/index.html' },
                { 'title': '粉色清爽404', 'url': './item/css/model/23粉色清爽404/index.html' },
                { 'title': '服务器销售', 'url': './item/css/model/24服务器销售网站/index.html' },
                { 'title': '服装箱包销售1', 'url': './item/css/model/25服装箱包销售网站/index.html' },
                { 'title': '服装箱包销售2', 'url': './item/css/model/25服装箱包销售网站/index-2.html' },
                { 'title': '工业制造业门户', 'url': './item/css/model/26工业制造业门户/index.html' },
                { 'title': '大气的企业', 'url': './item/css/model/27精美大气的品牌企业/index.html' },
                { 'title': '卡通动漫风格', 'url': './item/css/model/28卡通动漫风格/index.html' },
                { 'title': '蓝色笑脸404', 'url': './item/css/model/29蓝色可爱笑脸404/index.html' },
                { 'title': '贸易物流企业', 'url': './item/css/model/30贸易物流企业/index.html' },
                { 'title': '母婴用品行业', 'url': './item/css/model/31母婴用品行业/index.html' },
                { 'title': '室内装饰', 'url': './item/css/model/32室内装饰/index.html' },
                { 'title': '蔬菜农场', 'url': './item/css/model/33蔬菜农场/index.html' },
                { 'title': '游泳馆培训', 'url': './item/css/model/34游泳馆培训网站/index.html' },
            ],
        }
    },
}
);
const HtmlCssHtml = Vue.component('my-component21', {
    //组件注册——代码部分html——css---html
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: 'HTML页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'input输入框效果', 'url': './item/css/html/input.html' },
                { 'title': '新闻列表', 'url': './item/css/html/18-综合案例-新闻列表.html' },
                { 'title': '新闻', 'url': './item/css/html/19-综合案例1-新闻.html' },
                { 'title': '导航块', 'url': './item/css/html/19-综合案例1.html' },
                { 'title': '产品', 'url': './item/css/html/20-综合案例2-产品.html' },
                { 'title': '五彩导航', 'url': './item/css/html/20-综合案例2.html' },
                { 'title': '学生信息表', 'url': './item/css/html/21-综合案例-学生信息表.html' },
                { 'title': '表单', 'url': './item/css/html/22-综合案例-表单.html' },
                { 'title': '小米布局', 'url': './item/css/html/小米布局.html' },
                { 'title': '小米模块', 'url': './item/css/html/小米模块.html' },
                { 'title': '导航二维码', 'url': './item/css/html/导航二维码/02-导航二维码显示隐藏切换案例-完成样式.html' },
                { 'title': '小兔鲜项目', 'url': './item/css/html/小兔鲜项目/index.html' },
                { 'title': '新浪导航', 'url': './item/css/html/新浪导航.html' },
                { 'title': '网页新闻列表', 'url': './item/css/html/网页新闻列表.html' },
                { 'title': '学成在线网页', 'url': './item/css/html/study/index.html' },
                { 'title': '卡片模块案例', 'url': './item/css/html/卡片模块案例/02-卡片模块hot图片案例-完成样式.html' },
                { 'title': '小米登录框', 'url': './item/css/html/小米登录框/小米登录框.html' },
                { 'title': '爱宠知识新闻', 'url': './item/css/html/爱宠知识新闻/爱宠知识案例.html' },
                { 'title': '网站解决方案页', 'url': './item/css/html/网站解决方案页/index.html' },
                { 'title': '套餐选择页', 'url': './item/css/html/套餐选择页/index.html' },
                { 'title': '相册效果', 'url': './item/css/html/相册效果/index.html' },
                { 'title': '卡片样式切换', 'url': './item/css/html/卡片样式切换/index.html' },
                { 'title': '滚动式网页', 'url': './item/css/html/滚动式网页/index.html' },
                { 'title': '邮箱注册页', 'url': './item/css/html/邮箱注册页/index.html' },
                { 'title': '前端模版', 'url': './item/css/html/前段模版/index.html' },
                { 'title': '分类选项卡', 'url': './item/css/html/分类选项卡/index.html' },
                { 'title': '企业管理-高级', 'url': './item/css/html/企业管理模版/index.html' },
                { 'title': '导航登陆定位', 'url': './item/css/html/auto_position/2导航登陆定位/index.html' },


            ],
        }
    },
}
);
// --------------------------------------------------------htmlcss三级模板写入部分结束-----------------------------------------

const itemjavascript = Vue.component('my-component22', {
    //组件注册——代码部分JavaScript
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内项目', 'url': '/item/javascript/in' },
                { 'title': '课外拓展', 'url': '/item/javascript/out' },
                { 'title': '文档项目', 'url': '/item/javascript/document' },
                { 'title': '转盘', 'url': '/item/javascript/zhuangpan' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'JavaScript',
            //对应项目分类图标
            classurl: 'iconfont icon-js'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------javascript三级模板写入部分开始-----------------------------------------
const JavascriptIn = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---课内
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '键盘键值表', 'url': './item/javascript/images/键盘键值表.png' },
                { 'title': '润年判断', 'url': './item/javascript/in/润年判断/闰年判断.html' },
                { 'title': 'BIM计算', 'url': './item/javascript/in/BIM/20230307.html' },
                { 'title': '找字小游戏', 'url': './item/javascript/in/找字小游戏/找字小游戏.html' },
                { 'title': '猜数字', 'url': './item/javascript/in/猜数字/猜数字小游戏.html' },
                { 'title': '彩票', 'url': './item/javascript/in/彩票/彩票升级版.html' },
                { 'title': '计算器', 'url': './item/javascript/in/计算器/计算器（格式）.html' },
                { 'title': '发红包', 'url': './item/javascript/in/发红包/模拟抢红包（格式）.html' },
                { 'title': '城市下拉列表', 'url': './item/javascript/in/城市下拉列表/城市下拉列表2.html' },
                { 'title': '猴子选大王', 'url': './item/javascript/in/猴子选大王/猴子选大王.html' },
                { 'title': '万年历', 'url': './item/javascript/in/万年历/万年历.html' },
                { 'title': '10秒小游戏', 'url': './item/javascript/in/10秒小游戏/10秒小游戏.html' },
                { 'title': '倒计时', 'url': './item/javascript/in/倒计时/倒计时.html' },
                { 'title': '事件倒计时', 'url': './item/javascript/in/事件倒计时升级版/事件倒计时.html' },
                { 'title': '获取网页信息', 'url': './item/javascript/in/获取操作系统信息/获取操作系统信息.html' },
                { 'title': '复选框按钮', 'url': './item/javascript/in/复选框按钮/2023042301.html' },
                { 'title': '显示隐藏密码', 'url': './item/javascript/in/显示隐藏密码/2023042302.html' },
                { 'title': '点亮城市', 'url': './item/javascript/in/点亮城市/点亮城市.html' },
                { 'title': '滑动导航栏', 'url': './item/javascript/in/中国航天梦（导航栏）/导航栏.html' },
                { 'title': '开红包', 'url': './item/javascript/in/开红包/red - 空白.html' },
                { 'title': '评论区', 'url': './item/javascript/in/评论区/评论.html' },
                { 'title': '鼠标移动', 'url': './item/javascript/in/鼠标移动/鼠标.html' },
                { 'title': '猜猜我是谁', 'url': './item/javascript/in/猜猜我是谁/猜猜我是谁1.html' },
                { 'title': '文本框换行', 'url': './item/javascript/in/输入框回车/6.html' },
                { 'title': '键盘按键', 'url': './item/javascript/in/键盘按键/5.html' },
                { 'title': '璃月美景', 'url': './item/javascript/in/璃月美景/yuan.html' },
                { 'title': '奔跑的小人', 'url': './item/javascript/in/奔跑小人/1.html' },
                { 'title': '列表操作', 'url': './item/javascript/in/列表操作/node.html' },
                { 'title': '全选框', 'url': './item/javascript/in/全选框/111.html' },
                { 'title': '高考加油', 'url': './item/javascript/in/高考加油/gaokaojiayou.html' },
                { 'title': '模拟弹幕', 'url': './item/javascript/in/模拟弹幕/65.html' },
                { 'title': '模拟滚屏', 'url': './item/javascript/in/模拟滚屏/滚屏.html' },
                { 'title': '五星好评', 'url': './item/javascript/in/五星好评/66.html' },
                { 'title': '五星评分效果', 'url': './item/javascript/in/五星评分效果/index.html' },
                { 'title': '万能翻译', 'url': './item/javascript/in/万能翻译/612.html' },
                { 'title': '星座运势', 'url': './item/javascript/in/星座运势/6122.html' },
                { 'title': '热搜榜', 'url': './item/javascript/in/热搜榜/hot.html' },
                { 'title': '复习-计算器', 'url': './item/javascript/in/计算器2/index.html' },
                { 'title': '复习-信息框查看', 'url': './item/javascript/in/信息框查看表/index.html' },
                { 'title': '复习-登录页', 'url': './item/javascript/in/登录页/index.html' },
                { 'title': '复习-下拉菜单', 'url': './item/javascript/in/下拉菜单/index.html' },
                { 'title': '复习-导航下拉栏', 'url': './item/javascript/in/导航下拉栏/index.html' },
                // { 'title': '复习-', 'url': './item/javascript/in/' },
            ],
        }
    },
}
);
const JavascriptOut = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---课外
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '随机生成颜色', 'url': './item/javascript/out/黑马/随机生成颜色.html' },
                { 'title': '取款机操作', 'url': './item/javascript/out/黑马/议ATM取款机操作.html' },
                { 'title': '秒数转换为时间', 'url': './item/javascript/out/黑马/秒数转换为时间.html' },
                { 'title': '生成柱形图', 'url': './item/javascript/out/黑马/根据数据生成柱形图.html' },
                { 'title': '字段格式验证', 'url': './item/javascript/out/字段格式验证/index.html' },
                { 'title': '生成柱形图', 'url': './item/javascript/out/黑马/根据数据生成柱形图.html' },
                { 'title': '密码强度验证1', 'url': './item/javascript/out/密码强度验证/index.html' },
                { 'title': '密码强度验证2', 'url': './item/javascript/out/密码强度验证1/index.html' },
                { 'title': '滑块验证1', 'url': './item/javascript/out/滑块验证/index.html' },
                { 'title': '滑块验证2', 'url': './item/javascript/out/滑块验证2/index.html' },
                { 'title': '表单验证', 'url': './item/javascript/out/表单验证/index.html' },
                { 'title': '滑块验证', 'url': './item/javascript/out/滑块验证/index2.html' },
                { 'title': '元素拖拽', 'url': './item/javascript/out/元素拖拽/index.html' },
                { 'title': '输入框获取时间', 'url': './item/javascript/out/输入框获取时间/index.html' },
                { 'title': '标签库', 'url': './item/javascript/out/标签库/index.html' },
                { 'title': '记事本', 'url': './item/javascript/out/记事本/index.html' },
                { 'title': '键盘控制滑屏', 'url': './item/javascript/out/键盘控制滑屏/index.html' },
                { 'title': '列表双向切换', 'url': './item/javascript/out/列表双向切换/index.html' },
                { 'title': '二级项目选择', 'url': './item/javascript/out/二级项目选择/index.html' },
                // { 'title': '', 'url': './item/javascript/out/' },
            ],
        }
    },
}
);

const JavascriptDocument = Vue.component('my-component22', {
    //组件注册——代码部分html——css---文档
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                // { 'title': '#', 'url': './item/javascript/document/' },
            ],
        }
    },
}
);
const JavascriptZhuangPan = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---转盘
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '转盘',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '扁平幸运大抽奖', 'url': './item/javascript/zhuanpan/扁平幸运大抽奖/index.html' },
                { 'title': '大转盘抽奖', 'url': './item/javascript/zhuanpan/大转盘抽奖/index.html' },
                { 'title': '九宫格抽奖', 'url': './item/javascript/zhuanpan/九宫格抽奖/index.html' },
                { 'title': '积分扭蛋机', 'url': './item/javascript/zhuanpan/积分扭蛋机/index.html' },
                // { 'title': '', 'url': './item/javascript/zhuanpan/' },


            ],
        }
    },
}
);
// --------------------------------------------------------javascript三级模板写入部分结束-----------------------------------------
const itemvue = Vue.component('my-component23', {
    //组件注册——代码部分vue
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内项目', 'url': '/item/vue/in' },
                { 'title': '课外拓展', 'url': '/item/vue/out' },
                { 'title': '文档项目', 'url': '/item/vue/document' },
                { 'title': '其他项目', 'url': '/item/vue/xiangmu' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Vue',
            //对应项目分类图标
            classurl: 'iconfont icon-vue'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------Vue三级模板写入部分开始-----------------------------------------
const VueIn = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---课内
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '作业提交链接', 'url': 'http://edugzsw.com/hsh_work/2023-2024-1/stu2203.html' },
                { 'title': '按钮点击次数', 'url': ' ./item/vue/in/按钮点击次数/testTemp.html' },
                { 'title': '查找手机信息', 'url': ' ./item/vue/in/查找手机信息/6.html' },
                { 'title': '登录按钮事件', 'url': ' ./item/vue/in/登录按钮事件/3.html' },
                { 'title': '登录页', 'url': ' ./item/vue/in/登录页/4.html' },
                { 'title': '查找内容', 'url': ' ./item/vue/in/动画/查找内容.html' },
                { 'title': '方格动画', 'url': ' ./item/vue/in/动画/方格动画.html' },
                { 'title': '数组添加与删除', 'url': ' ./item/vue/in/动画/数组添加与删除.html' },
                { 'title': '添加小球', 'url': ' ./item/vue/in/动画/添加小球.html' },
                { 'title': '文字动画效果3', 'url': ' ./item/vue/in/动画/文字动画效果3.html' },
                { 'title': '文字过渡效果1', 'url': ' ./item/vue/in/动画/文字过渡效果1.html' },
                { 'title': '文字过渡效果2', 'url': ' ./item/vue/in/动画/文字过渡效果2.html' },
                { 'title': '圆形动画效果', 'url': ' ./item/vue/in/动画/圆形动画效果.html' },
                { 'title': '购物价格计算', 'url': ' ./item/vue/in/购物价格计算/2.html' },
                { 'title': '判断快递费用', 'url': ' ./item/vue/in/判断快递费用/4.html' },
                { 'title': '事件', 'url': ' ./item/vue/in/事件/1.html' },
                { 'title': '事件冒泡', 'url': ' ./item/vue/in/事件冒泡/testTemp.html' },
                { 'title': '数据更新与隐藏', 'url': ' ./item/vue/in/数据更新与隐藏/test.html' },
                { 'title': '菜单视图', 'url': ' ./item/vue/in/菜单视图.html' },
                { 'title': '菜单搜索', 'url': ' ./item/vue/in/菜单搜索.html' },
                { 'title': '菜单选择', 'url': ' ./item/vue/in/菜单选择.html' },
                { 'title': '价格表合计', 'url': ' ./item/vue/in/价格表合计.html' },
                { 'title': '文字输入框', 'url': ' ./item/vue/in/文字输入框.html' },
                //  { 'title': '', 'url': ' ./item/vue/in/'},
            ],
        }
    },
}
);
const VueOut = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---课外
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'vue项目网站', 'url': './item/vue/out/vue项目网站.html' },
                { 'title': '卡片滚动', 'url': ' ./item/vue/out/vue卡片滚动/index.html' },
                // { 'title': 'vue项目网站', 'url': './item/vue/out/'},
            ],
        }
    },
}
);
const VueDocument = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---文档
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                //  { 'title': '', 'url': './item/vue/document/'}, 
            ],
        }
    },
}
);
const VueXiangMu = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---项目
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '项目模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'vue基础模版', 'url': './item/vue/model/基础模版/模版.html' },
                // { 'title': '.', 'url': './item/vue/model/'},

            ],
        }
    },
}
);
// --------------------------------------------------------vue三级模板写入部分结束-----------------------------------------
const itembootsrtap = Vue.component('my-component24', {
    //组件注册——代码部分bootstrap
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内内容', 'url': '/item/bootstrap/in' },
                { 'title': '课外内容', 'url': '/item/bootstrap/out' },
                { 'title': '文档内容', 'url': '/item/bootstrap/document' },
                { 'title': '网页模板', 'url': '/item/bootstrap/muban' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'BootStrap',
            //对应项目分类图标
            classurl: 'iconfont icon-bootstrap'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------bootstrap三级模板写入部分开始-----------------------------------------
const BootstrapIn = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---课内
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "警告框", 'url': "./item/bootstrap/in/j警告框.html" },
                { 'title': "分页", 'url': "./item/bootstrap/in/分页.html" },
                { 'title': "列表", 'url': "./item/bootstrap/in/列表.html" },
                { 'title': "加载器", 'url': "./item/bootstrap/in/加载器.html" },
                { 'title': "卡片", 'url': "./item/bootstrap/in/卡片.html" },
                { 'title': "按钮组", 'url': "./item/bootstrap/in/按钮组.html" },
                { 'title': "进度条", 'url': "./item/bootstrap/in/进度条.html" },
                { 'title': "菜单", 'url': "./item/bootstrap/in/菜单.html" },
                { 'title': "工具提示", 'url': "./item/bootstrap/in/工具提示.html" },
                // { 'title': "", 'url': "./item/bootstrap/in/" },
            ],
        }
    },

}
);
const BootstrapOut = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---课外
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "在线文件链接", 'url': "./item/bootstrap/out/响应式在线连接.html" },
                { 'title': "画廊模版1", 'url': "./item/bootstrap/out/bootstrap画廊模版/index.html" },
                { 'title': "画廊模版2", 'url': "./item/bootstrap/out/bootstrap画廊模版/index2.html" },
                { 'title': "画廊模版3", 'url': "./item/bootstrap/out/bootstrap画廊模版/index3.html" },
                { 'title': "画廊模版4", 'url': "./item/bootstrap/out/bootstrap画廊模版/index4.html" },
                { 'title': "轮播图", 'url': "./item/bootstrap/out/bootstrap轮播图/index.html" },
                { 'title': "二级导航带图", 'url': "./item/bootstrap/out/二级导航带图/index.html" },
                { 'title': "模版", 'url': "./item/bootstrap/out/bootstrap模版/index.html" },
                { 'title': "表格样式", 'url': "./item/bootstrap/out/bootstrap表格样式/index.html" },
                { 'title': "可编辑表格", 'url': "./item/bootstrap/out/可编辑表格boot/index.html" },
                // { 'title': "", 'url': "./item/bootstrap/out/" },
            ],
        }
    },
    titlethree: '课外内容'
}
);
const BootstrapDocument = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---文档
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
            ],
        }
    },

}
);
const BootstrapMuBan = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---model
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '网页模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "詹俊浩转天网站", 'url': "./item/bootstrap/model//詹俊浩转天网站/index.html" },
                { 'title': "线上生鲜商城", 'url': "./item/bootstrap/model/线上生鲜商城/index.html" },
                { 'title': "登录页", 'url': "./item/bootstrap/model/Login/login.html" },
                { 'title': "期末项目genshin", 'url': "./item/bootstrap/model/期末/zong/mhyguanwang/index.html" },
                { 'title': "模版-美食", 'url': "./item/bootstrap/model/1模版-美食/index.html" },
                { 'title': "模版-商务", 'url': "./item/bootstrap/model/2模版-商务/index.html" },
                // { 'title': "模版-商务", 'url': "./item/bootstrap/model/" },
            ],
        }
    },

}
);
// --------------------------------------------------------bootstrap三级模板写入部分结束-----------------------------------------
const itemphp = Vue.component('my-component25', {
    //组件注册——代码部分php
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'ftp', 'url': './item/tips/ftp.html' },
                { 'title': 'localhost-导航盘', 'url': 'http://localhost/aaa/' },
                { 'title': '登录页', 'url': 'http://localhost/bbb/item/php/登录页/login.php' },
                { 'title': '双色球', 'url': 'http://localhost/bbb/item/php/双色球/1.php' },
                { 'title': '简易相册', 'url': 'http://localhost/bbb/item/php/相册/xiang.php' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'PHP',
            //对应项目分类图标
            classurl: 'iconfont icon-php'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemopen = Vue.component('my-component26', {
    //组件注册——代码部分编程码
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'gitee', 'url': 'https://gitee.com/javanoteany/html_style' },
                { 'title': '3D旋转魔方', 'url': './item/programming/3D翻转魔方/index.html' },
                { 'title': '爱心飘落', 'url': './item/programming/爱心飘落/爱心飘落.html' },
                { 'title': '吹泡泡', 'url': './item/programming/吹泡泡/index.html' },
                { 'title': '罗盘时钟', 'url': './item/programming/罗盘时钟.html' },
                { 'title': '抖音罗盘', 'url': './item/programming/抖音罗盘/index.html' },
                { 'title': '黑客帝国代码雨', 'url': './item/programming/黑客帝国代码雨/index.html' },
                { 'title': '蝴蝶特效', 'url': './item/programming/蝴蝶特效/index.html' },
                { 'title': '画心', 'url': './item/programming/画心/index.html' },
                { 'title': '四叶草', 'url': './item/programming/四叶草/1.html' },
                { 'title': '烟花粒子', 'url': './item/programming/烟花/index.html' },
                { 'title': '烟花', 'url': './item/programming/烟花源码/烟花源码.html' },
                { 'title': '爱心代码', 'url': './item/programming/爱心代码.html' },
                // { 'title': '', 'url': './item/programming/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: '编程码',
            //对应项目分类图标
            classurl: 'iconfont icon-suyuanmaguanli'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemjava = Vue.component('my-component27', {
    //组件注册——代码部分java
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Java',
            //对应项目分类图标
            classurl: 'iconfont icon-java'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemmysql = Vue.component('my-component28', {
    //组件注册——代码部分mysql
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Mysql',
            //对应项目分类图标
            classurl: 'iconfont icon-mysql'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemlinux = Vue.component('my-component29', {
    //组件注册——代码部分linux
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Linux',
            //对应项目分类图标
            classurl: 'iconfont icon-linux'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);

const itemMedium = Vue.component('my-component30', {
    //组件注册——代码部分融媒
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '融媒2022项目', 'url': './item/medium/融媒注释版/index.html' },
                { 'title': '主页', 'url': './item/medium/加载页/login.html' },
                { 'title': '加载页', 'url': './item/medium/规则页/warring.html' },
                { 'title': '规则页', 'url': './item/medium/融媒/index.html' },
                // { 'title': '规则页', 'url': './item/medium/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Medium',
            //对应项目分类图标
            classurl: 'iconfont icon-guangdianrongmei'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemelse = Vue.component('my-component31', {
    //组件注册——代码部分Else
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '电商系统(github)', 'url': 'https://github.com/macrozheng/mall' },
                { 'title': '猜猜我是谁', 'url': './item/else/猜猜我是谁/猜猜我是谁1.html' },
                { 'title': '学霸搞怪', 'url': './item/else/xueba/index.html' },
                { 'title': 'hong期末', 'url': './item/else/1/index.html' },
                { 'title': '导航页模版', 'url': './item/else/geek-navigation/indexs.html' },
                { 'title': '传统文化页面', 'url': './item/else/tradional/代码/index.html' },
                { 'title': '模拟植物大战僵尸', 'url': './item/else/植物大战僵尸/HTML5植物大战僵尸/index.html' },
                { 'title': '轮盘', 'url': './item/else/lunpan/index.html' },
                // { 'title': '轮盘', 'url': './item/else/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Else',
            //对应项目分类图标
            classurl: 'iconfont icon-qita1'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
