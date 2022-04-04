import defaultSettings from '@/settings';
const state = {
    settings: defaultSettings,
    cachedViews: [],
    test: false
};
const mutations = {
    M_vuex_test: (state, data) => {
        state.test = data;
    },
    M_ADD_CACHED_VIEW: (state, view) => {
        if (state.cachedViews.includes(view))
            return;
        state.cachedViews.push(view);
    },
    M_DEL_CACHED_VIEW: (state, view) => {
        const index = state.cachedViews.indexOf(view);
        index > -1 && state.cachedViews.splice(index, 1);
    },
    M_RESET_CACHED_VIEW: (state) => {
        state.cachedViews = [];
    }
};
const actions = {
    A_vuex_test({ commit }, data) {
        commit('M_vuex_test', data);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
