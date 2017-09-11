/**
 * 获取浏览器窗口大小
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
export function getWindowSize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;
    return {width, height};
}
