
// 拦截本地存储服务

let sessionStorage = window.sessionStorage;
let localStorage = window.localStorage;

// 会修改数据的方法

const session_setItem = sessionStorage.setItem;
const session_clear = sessionStorage.clear;
const session_removeItem = sessionStorage.removeItem;

const local_setItem = localStorage.setItem;
const local_clear = localStorage.clear;
const local_removeItem = localStorage.removeItem;

export default function (target) {

    sessionStorage.setItem = function () {
        session_setItem.apply(this, arguments);
        target.trigger('sessionStorage');
    };

    sessionStorage.clear = function () {
        session_clear.apply(this, arguments);
        target.trigger('sessionStorage');
    };

    sessionStorage.removeItem = function () {
        session_removeItem.apply(this, arguments);
        target.trigger('sessionStorage');
    };

    localStorage.setItem = function () {
        local_setItem.apply(this, arguments);
        target.trigger('localStorage');
    };

    localStorage.clear = function () {
        local_clear.apply(this, arguments);
        target.trigger('localStorage');
    };

    localStorage.removeItem = function () {
        local_removeItem.apply(this, arguments);
        target.trigger('localStorage');
    };

};
