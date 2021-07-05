export default [


    {
        path: "/",
        redirect: "/login",
        meta: {
            tabbar: false
        },
    },

    {
        path: "/login",
        name: "About",
        hidden: true,
        meta: {
            tabbar: false,
            title: "登录",
        },
        component: () =>
            import ("@/views/authorization"),
    },
    {
        path: "/agreement",
        name: "Agreement",
        hidden: true,
        meta: {
            tabbar: false,
            title: "协议",
        },
        component: () =>
            import ("@/components/agreement"),
    },
];