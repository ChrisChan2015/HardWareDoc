module.exports = {
    title: "采集指令速查表",
    base:"/hardwaredoc/",
    themeConfig: {
        logo: "/assets/img/logo.png",
        sidebar: [
            "/",
            {
                title: "位移计",
                sidebarDepth: 0,
                children: [
                    { path: "/dis/zheDa", title: "浙达位移" },
                    { path: "/dis/jiGuang", title: "激光位移" }
                ]
            },
            {
                title: "风速仪",
                sidebarDepth: 0,
                children: [
                    { path: "/wind/jinMa", title: "金码二维风速仪" },
                    { path: "/wind/renKe", title: "建大仁科二维风速仪" }
                ]
            },
            {
                title: "温度计",
                sidebarDepth: 0,
                children: [
                    { path: "/temperature/kunHang", title: "鲲航数字温度" }
                ]
            }
        ],
    }
};