// 绑定事件
export function bindEvent(target, eventType, callback) {
    if (window.attachEvent)
        target.attachEvent("on" + eventType, callback);
    else
        target.addEventListener(eventType, callback, false);
};