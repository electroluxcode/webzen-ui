/**
 * @des 路由合并
 */
// 返回示例 规则有两个
// behindRouter
const behindRouter = [
    {
        name: 'routes.main.design.self',
        redirect: '/design/data',
        meta: {
            icon: 'noto-v1:direct-hit',
        },
        // hideMenu: true,
        children: [
            {
                icon: 'material-symbols:folder-copy-rounded',
                meta: {
                    // title: 'routes.main.design.data',
                    icon: 'material-symbols:folder-copy-rounded',
                    // hideMenu: false,
                },
                name: 'routes.main.design.data',
                // path: '/design/data',
            },
        ],
    },
];
const frontRouter = [
    {
        name: 'PageNotFound',
        path: '/:path(.*)*',
        meta: {
            title: 'ErrorPage',
            hideBreadcrumb: true,
            hideMenu: true,
        },
        components: '@/xxxxx.vue',
    },
    {
        name: 'Page',
        path: '/:path(.*)*',
        meta: {
            title: 'ErrorPage',
            hideBreadcrumb: true,
            hideMenu: true,
        },
        components: '@/xxxxx.vue',
    },
    {
        path: '/design',
        name: 'routes.main.design.self',
        redirect: '/design/data',
        meta: {
            icon: '前端控制',
            title: '前端控制',
            orderNo: 1,
        },
        other: "前端控制",
        children: [
            {
                path: 'data',
                name: 'routes.main.design.data',
                meta: {
                    icon: 'material-symbols:folder-copy-rounded',
                    hideMenu: false,
                },
                components: '@/xxxxx.vue',
            },
        ],
    },
];
/**
 * @des step1:后端返回的数据扁平化
 */
function flatBehindTree(arr) {
    if (!arr) {
        return [];
    }
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        // arr[i].
        const temp = arr[i];
        if (JSON.stringify(temp.children) == '[]') {
            result[temp.name] = temp;
        }
        else {
            result[temp.name] = temp;
            result = { ...flatBehindTree(temp.children), ...result };
        }
    }
    return result;
}
/**
 * @des step2:前端按照后端的返回进行删除 并且组合
 */
function flatFrontTree(frontRouter, flatData) {
    if (!frontRouter) {
        return;
    }
    for (const i in frontRouter) {
        if (flatData[frontRouter[i].name]) {
            if (frontRouter[i].children) {
                flatFrontTree(frontRouter[i].children, flatData);
            }
            frontRouter[i] = {
                ...flatData[frontRouter[i].name],
                ...frontRouter[i],
            };
            // console.log('frontRouter[i]:', frontRouter[i]);
        }
        else {
            delete frontRouter[i];
        }
    }
    return frontRouter;
}
// function
function mergeRouter(behindRouter, frontRouter) {
    const hash = flatBehindTree(behindRouter);
    const result = flatFrontTree(frontRouter, hash);
    return result;
}
export function behindRouterGet(menuList) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mergeRouter(behindRouter, menuList));
        }, 1000);
    });
}
behindRouterGet(frontRouter).then((e) => {
    console.log(e);
});
