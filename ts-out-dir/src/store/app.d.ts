export declare const useAppStore: import("pinia").StoreDefinition<"app", {
    settings: {
        title: string;
        openProdMock: boolean;
        errorLog: string[];
        tmpToken: string;
        viteBasePath: string;
    };
    cachedViews: string[];
    test: boolean;
}, {}, {
    M_vuex_test(data: any): void;
    M_ADD_CACHED_VIEW(view: any): void;
    M_DEL_CACHED_VIEW(view: any): void;
    M_RESET_CACHED_VIEW(): void;
    A_vuex_test(data: any): void;
}>;
