/** 此处的发布订阅，是根据自己的理解来写的，只是实现一些基本的功能 */
let _events = {}; // 用于存放所有的订阅事件及其回调，执行发布的时候拿到这个对象里所有的事件及其回调，依次执行


// 订阅
export function subscribe(eventName, callback) {
    // 判断一下，这个新添加的订阅事件，在不在_events对象里
    if (_events[eventName]) {
        // 如果存在的话，放一个新的回调进去
        _events[eventName].push(callback);
    } else {
        // 如果没有的话，就为新订阅的事件创建一个回调的数组
        _events[eventName] = [callback];
    }
}

// 发布
export function publish (eventName, arg) {
    // 发布的时候,判断一下有没有订阅新发布的这个事件,如果有订阅了新发布的这个事件，拿到所有已经订阅了这个事件的回调依次执行一遍
    if (_events[eventName]) {
        _events[eventName].forEach(item => {
            // 发布消息的参数传给回调函数
            item(arg);
        })
    }
}

// 取消订阅
export function cancelSubScribe (eventName, callback) {
    if (_events[eventName]) {
        // 将所有已经订阅此事件的回调移除，发布消息的时候就不会执行已经移除的回调
        _events[eventName] = _events[eventName].filter(item => item !== callback);
    }
}
