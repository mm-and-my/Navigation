// 组件路由注册
const router = new VueRouter({
    //路由条数定义
    routes: [
        //满足路由时打开组件basess
        { path: '/', name: "basess", component: basess },
        { path: '/school', name: "school", component: school },
        { path: '/material', name: "material", component: material },
        { path: '/download', name: "download", component: download },
        {
            path: '/item', name: "item", component: item,
            // 项目代码二级项目导航路由定义
            children: [
                {
                    path: '/item/htmlcss', name: "itemhtmlcss", component: itemhtmlcss,
                    // htmlcss三级项目路由定义
                    children: [
                        { path: '/item/htmlcss/nav', name: "htmlcssnav", component: HtmlCssNav },
                        { path: '/item/htmlcss/alert', name: "HtmlcCssAlert", component: HtmlcCssAlert },
                        { path: '/item/htmlcss/404', name: "HtmlCss404", component: HtmlCss404 },
                        { path: '/item/htmlcss/banner', name: "HtmlCssBanner", component: HtmlCssBanner },
                        { path: '/item/htmlcss/box', name: "HtmlCssBox", component: HtmlCssBox },
                        { path: '/item/htmlcss/font', name: "HtmlCssFont", component: HtmlCssFont },
                        { path: '/item/htmlcss/btn', name: "HtmlCssBtn", component: HtmlCssBtn },
                        { path: '/item/htmlcss/imitate', name: "HtmlCssImitate", component: HtmlCssImitate },
                        { path: '/item/htmlcss/footer', name: "HtmlCssFooter", component: HtmlCssFooter },
                        { path: '/item/htmlcss/loading', name: "HtmlCssLoading", component: HtmlCssLoading },
                        { path: '/item/htmlcss/outtimes', name: "HtmlCssOuttimes", component: HtmlCssOuttimes },
                        { path: '/item/htmlcss/reglogin', name: "HtmlCssRegAndLogin", component: HtmlCssRegAndLogin },
                        { path: '/item/htmlcss/removephone', name: "HtmlCssRemovePhone", component: HtmlCssRemovePhone },
                        { path: '/item/htmlcss/select', name: "HtmlCssSelect", component: HtmlCssSelect },
                        { path: '/item/htmlcss/timeline', name: "HtmlCssTimeline", component: HtmlCssTimeline },
                        { path: '/item/htmlcss/else', name: "HtmlCssElse", component: HtmlCssElse },
                        { path: '/item/htmlcss/model', name: "HtmlCssModel", component: HtmlCssModel },
                        { path: '/item/htmlcss/html', name: "HtmlCssHtml", component: HtmlCssHtml },
                        // { path: '/item/htmlcss/', name: "", component:  },
                    ]
                },
                {
                    path: '/item/javascript', name: "itemjavascript", component: itemjavascript,
                    // JavaScript三级项目路由定义
                    children: [
                        { path: '/item/javascript/in', name: "JavascriptIn", component: JavascriptIn },
                        { path: '/item/javascript/out', name: "JavascriptOut", component: JavascriptOut },
                        { path: '/item/javascript/zhuangpan', name: "JavascriptZhuangPan", component: JavascriptZhuangPan },
                        { path: '/item/javascript/document', name: "JavascriptDocument", component: JavascriptDocument },
                    ]
                },
                {
                    path: '/item/vue', name: "itemvue", component: itemvue,
                    // vue三级项目路由定义
                    children: [
                        { path: '/item/vue/in', name: "VueIn", component: VueIn },
                        { path: '/item/vue/out', name: "VueOut", component: VueOut },
                        { path: '/item/vue/document', name: "VueDocument", component: VueDocument },
                        { path: '/item/vue/xiangmu', name: "VueXiangMu", component: VueXiangMu },
                    ]
                },
                {
                    path: '/item/bootstrap', name: "itembootsrtap", component: itembootsrtap,
                    // bootstrap三级项目路由定义
                    children: [
                        { path: '/item/bootstrap/in', name: "BootstrapIn", component: BootstrapIn },
                        { path: '/item/bootstrap/out', name: "BootstrapOut", component: BootstrapOut },
                        { path: '/item/bootstrap/document', name: "BootstrapDocument", component: BootstrapDocument },
                        { path: '/item/bootstrap/muban', name: "BootstrapMuBan", component: BootstrapMuBan },
                    ]
                },
                { path: '/item/php', name: "itemphp", component: itemphp },
                { path: '/item/open', name: "itemopen", component: itemopen },
                { path: '/item/java', name: "itemjava", component: itemjava },
                { path: '/item/mysql', name: "itemmysql", component: itemmysql },
                { path: '/item/linux', name: "itemlinux", component: itemlinux },
                { path: '/item/medium', name: "itemMedium", component: itemMedium },
                { path: '/item/else', name: "itemelse", component: itemelse },
            ]
        },
        { path: '/wendang', name: "wendang", component: wendang },
        { path: '/elses', name: "elses", component: elses },
        { path: '/teacher', name: "teacher", component: teacher },
        { path: '/beiyong', name: "beiyong", component: beiyong },
        { path: '/chatgpt', name: "chatgpt", component: chatgpt },
        { path: '/game', name: "game", component: game },
        { path: '/music', name: "music", component: music },
        { path: '/video', name: "video", component: video },
        { path: '/shop', name: "shop", component: shop },
        { path: '/ps', name: "ps", component: ps },
        { path: '/normaluse', name: "normaluse", component: normaluse },
        { path: '/tips', name: "tips", component: tips },
        { path: '/beiyong2', name: "beiyong2", component: beiyong2 },
        {
            path: '/adminset', name: "adminset", component: adminset,
            //  // 二级项目导航路由定义
            children: [
                { path: '/adminset/wechat', name: "adminset_wecaht", component: adminset_wechat },
                { path: '/adminset/qq', name: "adminset_qq", component: adminset_qq },
                { path: '/adminset/zhifuplay', name: "adminset_zhifuplay", component: adminset_zhifuplay },
                { path: '/adminset/wechatplay', name: "adminset_wechatplay", component: adminset_wechatplay },
            ]
        },
    ]
});


//状态管理的仓库对象
const store = new Vuex.Store({
    //状态数据的容器
    state: {
        myname: 'xmy',
        outtime: '2024年6月7日13:03:05'
    },
    //同步操作模块this.$store.commit('')
    mutations: {

    },
    //异步操作模块dispatch this.$store.dispatch('')
    actions: {

    }
});
// vue实例注册
const Box = new Vue({
    data: {

    },
    //要绑定函数
    methods: {
    },
    //v-model：''计算属性,响应式
    computed: {

    },
    //过滤器
    filters: {

    },
    //仓库
    store: store,
    //路由
    router: router

});
// 挂载函数
Box.$mount('#navigation');

// 导航条发光
// 获取全体导航
const bright = document.querySelectorAll('.textbright');
// 点击单个导航时，当前导航高亮，其他暗
$(bright).on('click', function () {
    $('#basessnav').removeClass('brighttext');
    $(this).addClass('brighttext').siblings().removeClass('brighttext');
});
// 二级代码项目内容点击时,保证对应代码项目导航仍然高亮
const brigthtwo = document.querySelectorAll('.textbrighttwo');
$(brigthtwo).on('click', function () {
    $('#basessnav').removeClass('brighttext');
    $('#textbrighttwo').addClass('brighttext');
});

//控制台输出部分
//%c特许占位符，用于修改控制台文字颜色,换行符（\n）
const setmyname = '制作者:' + store.state.myname;
const setouttime = '最后修改时间:' + "\n" + store.state.outtime;
console.log(`%c${setmyname}`, 'color:blue;font-size:2em;font-family:liuti,"楷体";');
console.log(`%c${setouttime}`, 'color:red;font-size:2em;font-family:liuti,"楷体";');