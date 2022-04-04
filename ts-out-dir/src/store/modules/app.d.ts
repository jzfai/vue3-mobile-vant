import { AppTy } from '~/store';
declare const _default: {
    namespaced: boolean;
    state: {
        settings: {
            openProdMock: boolean;
            errorLog: string[];
            tmpToken: string;
            viteBasePath: string;
        };
        cachedViews: never[];
        test: boolean;
    };
    mutations: {
        M_vuex_test: (state: AppTy, data: any) => void;
        M_ADD_CACHED_VIEW: (state: AppTy, view: string) => void;
        M_DEL_CACHED_VIEW: (state: AppTy, view: string) => void;
        M_RESET_CACHED_VIEW: (state: AppTy) => void;
    };
    actions: {
        A_vuex_test({ commit }: any, data: any): void;
    };
};
export default _default;
