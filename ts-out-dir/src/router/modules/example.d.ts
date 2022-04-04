declare const exampleRouter: ({
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
    component: () => Promise<typeof import("@/views/example/keep-alive")>;
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
})[];
export default exampleRouter;
