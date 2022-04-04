const title = 'Vue3 Mobile Vant';
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`;
    }
    return `${title}`;
}
