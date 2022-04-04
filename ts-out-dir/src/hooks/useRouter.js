import router from '@/router';
const hooksFunc = function () {
    const route = router.currentRoute;
    const getQueryParam = () => {
        if (route.value.query.params) {
            return JSON.parse(route.value.query.params);
        }
    };
    const routerPushMixin = (name, params) => {
        let data = {};
        if (params) {
            data = {
                params: JSON.stringify(params)
            };
        }
        else {
            data = {};
        }
        router.push({
            name: name,
            query: data
        });
    };
    const routerReplaceMixin = (name, params) => {
        let data = {};
        if (params) {
            data = {
                params: JSON.stringify(params)
            };
        }
        else {
            data = {};
        }
        router.replace({
            name: name,
            query: data
        });
    };
    const routerBackMixin = () => {
        router.go(-1);
    };
    return {
        routerPushMixin,
        routerReplaceMixin,
        routerBackMixin,
        getQueryParam
    };
};
export default hooksFunc();
