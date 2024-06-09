
const index = Vue.component('my-component1', {
    template: "#index",
    methods: {
        denglu() {
            location.href = './index.html#/culture'
        }
    }
}
);
const story = Vue.component('my-component2', {
    template: "#story",
}
);
const culture = Vue.component('my-component3', {
    template: "#culture",
}
);
const traditional = Vue.component('my-component4', {
    template: "#traditional",
    methods: {
        up() {
            const items = document.querySelectorAll(".pic");
            slide.prepend(items[items.length - 1]);
        },
        out() {
            const items = document.querySelectorAll(".pic");
            slide.appendChild(items[0]);
        }
    }
}
);


const router_web = new VueRouter({
    routes: [
        { path: '/', name: "index", component: index },
        { path: '/story', name: "story", component: story },
        { path: '/culture', name: "culture", component: culture },
        { path: '/traditional', name: "traditional", component: traditional },
    ]
});

const web = new Vue({
    data: {
        myname: 'xmy',
    },
    router: router_web
});
web.$mount('#box');



