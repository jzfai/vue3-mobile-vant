export declare const constantRoutes: ({
    path: string;
    component: () => Promise<any>;
    name: string;
    meta: {
        title: string;
        cachePage?: undefined;
        leaveRmCachePage?: undefined;
        activeMenu?: undefined;
    };
    hidden?: undefined;
} | {
    path: string;
    component: () => Promise<typeof import("../views/example/keep-alive")>;
    name: string;
    meta: {
        title: string;
        cachePage: boolean;
        leaveRmCachePage: boolean;
        activeMenu?: undefined;
    };
    hidden?: undefined;
} | {
    path: string;
    name: string;
    hidden: boolean;
    component: () => Promise<any>;
    meta: {
        title: string;
        activeMenu: string;
        cachePage?: undefined;
        leaveRmCachePage?: undefined;
    };
} | {
    path: string;
    component: () => Promise<any>;
    hidden: boolean;
    meta?: undefined;
    children?: undefined;
    redirect?: undefined;
} | {
    path: string;
    meta: {
        title: string;
    };
    component: () => Promise<any>;
    children: never[];
    hidden?: undefined;
    redirect?: undefined;
} | {
    path: string;
    redirect: string;
    hidden: boolean;
    component?: undefined;
    meta?: undefined;
    children?: undefined;
})[];
declare const router: import("vue-router").Router;
export default router;
