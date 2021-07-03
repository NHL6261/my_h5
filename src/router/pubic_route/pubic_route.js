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
        },
        component: () =>
            import ("@/views/authorization"),
    },
    {
        path: "/agreement",
        name: "Agreement",
        meta: {
            tabbar: false,
        },
        component: () =>
            import ("@/components/agreement"),
    },
    // {
    //     path: "/home",
    //     name: "Home",
    //     meta: {
    //         tabbar: false,
    //     },
    //     component: () =>
    //         import ("@/views/System/home"),
    // },
];