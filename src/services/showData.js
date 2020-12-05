import xhtml from 'xhtml.js';

let isObject = function (value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

let isString = function (value) {
    if (value == null) return false;
    const type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object String]');
};

let doit = (target, obj) => {

    xhtml(target).find('span').bind('click', () => {

        // 如果是字符串，就不需要展开了
        if (isString(obj)) return;

        // 如果没有加载过
        if (target.getAttribute('hadload') != 'yes') {

            target.setAttribute('hadload', 'yes');
            target.setAttribute('isopen', 'yes');

            let template = "<ol>";

            for (let key in obj) {
                template += `<li><span><i style='font-style:normal;color:#905'>${key}</i>:${obj[key]}</span></li>`;
            }
            template += "</ol>";
            xhtml(target).append(template);

            // 添加交互
            let index = 0, lis = xhtml(target).find('li');
            for (let key in obj) {
                doit(lis[index++], obj[key]);
            }
        }

        // 如果加载过了，直接控制打开或者关闭即可
        else {
            if (target.getAttribute('isopen') == 'no') target.setAttribute('isopen', 'yes');
            else target.setAttribute('isopen', 'no');
        }

    });

};

export default function (target, ol, data) {

    ol.setAttribute('class', 'showobject');

    for (let i = 0; i < data.length; i++) {

        let li = target.$document.createElement('li');

        if (undefined === data[i]) li.innerText = 'undefined';
        else if (null === data[i]) li.innerText = 'null';

        else if (isObject(data[i])) {

            // 默认作为对象显示
            li.setAttribute('hadload', 'no');
            li.setAttribute('isopen', 'no');
            li.innerHTML = `<span>${data[i]}</span>`;
            doit(li, data[i]);

        } else {
            li.innerText = data[i];
        }

        ol.appendChild(li);
    }

};
