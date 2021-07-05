export default [

    {
        path: "/app/home",
        name: "home",
        meta: {
            title: "首页", //title或者菜单名
            tab_bar: true, //是否创建tab_bar
            icon: "home-o",
        },
        component: () =>
            import ("@/views/System/home"),
    },
    {
        path: "/app/classification",
        name: "classification",
        meta: {
            title: "分类",
            tab_bar: true,
            icon: "apps-o",
        },
        component: () =>
            import ("@/views/System/classification"),
    },
    {
        path: "/app/shoppingcart",
        name: "shoppingcart",
        meta: {
            title: "购物车",
            tab_bar: true,
            icon: "shopping-cart-o",
        },
        component: () =>
            import ("@/views/System/shoppingcart"),
    },

    {
        path: "/app/my",
        name: "my",
        meta: {
            title: "我的",
            tab_bar: true,
            icon: "friends-o",
            iconShow: false
        },
        component: () =>
            import ("@/views/System/my"),
    },

    // 跳转到详情页面
    {
        path: "/app/order",
        name: "MyOrder",
        hidden: true,
        meta: {
            title: "我的订单",
            icon: "friends-o",
            iconShow: true
        },
        component: () =>
            import ("@/components/orderDetails"),
    },
];