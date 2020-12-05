/**
 * 控制制定的结点的某个class增加删除切换
 * --------------------------
 * ui-togger-class:classsName='dom'
 * dom结点的className增加和删除切换进行
 *
 */

import iCrush from 'icrush';
import xhtml from 'xhtml.js';

iCrush.directive('uiToggerClass', {

    inserted(el, binding) {

        let viewXhtml = xhtml(binding.target.$document.getElementById(binding.exp));

        xhtml(el).bind('click', () => {

            viewXhtml.toggerClass(binding.type);

        });

    }
});

