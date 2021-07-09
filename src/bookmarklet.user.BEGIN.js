// ==UserScript==
// @name         中、英文網頁切換的瀏覽器書籤小工具
// @namespace    https://blog.miniasp.com/
// @version      0.1
// @description  按下 Alt+s 就會自動將目前網頁切換至中文或英文版
// @license      MIT
// @homepage     https://blog.miniasp.com/
// @homepageURL  https://blog.miniasp.com/
// @website      https://www.facebook.com/will.fans
// @source       https://github.com/miniasp/en-zh-bookmarklet
// @namespace    https://github.com/miniasp/en-zh-bookmarklet
// @author       Will Huang
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', (ev) => {
        if (ev.altKey && ev.key === 's' && !/^(?:input|select|textarea|button)$/i.test(ev.target.nodeName)) {

