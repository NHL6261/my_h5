export default [

    {
        path: "/app/home",
        name: "home",
        meta: {
            title: "首页", //title或者菜单名
            tab_bar: true, //是否创建tab_bar
            menu_img: ["btn-bottom1_1.png", "btn-bottom1_0.png"], //底部菜单图片，默认为第一个为选中状态
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
            menu_img: ["btn-bottom2_0.png", "btn-bottom2_1.png"],
            icon: "apps-o"
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
            menu_img: ["btn-bottom3_0.png", "btn-bottom3_1.png"],
            icon: "shopping-cart-o"
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
            menu_img: ["btn-bottom2_0.png", "btn-bottom2_1.png"],
            icon: "friends-o"
        },
        component: () =>
            import ("@/views/System/my"),
    },
];