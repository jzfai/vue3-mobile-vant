import { reactive } from 'vue';
import momentMini from 'moment-mini';
const hooksFunc = function () {
    const state = reactive({
        todayTimeMixin: null,
        currentTimeMixin: null,
        todayTimeLastMixin: null,
        yesterdayTimeMixin: null,
        beforeThreeDateTimeMixin: null
    });
    state.todayTimeMixin = momentMini().startOf('day').format('YYYY-MM-DD HH:mm:ss');
    state.currentTimeMixin = momentMini(new Date()).format('YYYY-MM-DD HH:mm:ss');
    state.todayTimeLastMixin = momentMini().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    state.beforeThreeDateTimeMixin = momentMini().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss');
    state.yesterdayTimeMixin = momentMini().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss');
    const sleepMixin = (time) => {
        return new Promise((resolve) => {
            const timer = setTimeout(() => {
                clearTimeout(timer);
                resolve('');
            }, time);
        });
    };
    return {
        sleepMixin,
        state
    };
};
export default hooksFunc();
