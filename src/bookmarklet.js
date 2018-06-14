(function () {
    var idx,
        hn = location.hostname.toLowerCase(),
        ln = location.href,
        pn = location.pathname;

    if (ln === 'https://getbootstrap.com/') {
        void(location.href = 'http://bootstrap.hexschool.com');
    }

    if (ln.indexOf('//getbootstrap.com/docs/3.3/') >= 0) {
        void(location.href = ln.replace(/getbootstrap\.com\/docs\/3\.3\//i, 'v3.bootcss.com/'));
    }
    if (ln.indexOf('//v3.bootcss.com/') >= 0) {
        void(location.href = ln.replace(/v3\.bootcss\.com\//i, 'getbootstrap.com/docs/3.3/'));
    }

    if (ln.indexOf('//bootstrap.hexschool.com/') >= 0) {
        void(location.href = ln.replace(/bootstrap\.hexschool\.com/i, 'getbootstrap.com'));
    }
    if (ln.indexOf('//getbootstrap.com/docs/4.0/') >= 0) {
        void(location.href = ln.replace(/http(s?)\:\/\/getbootstrap\.com/i, 'http://bootstrap.hexschool.com'));
    }

    if (ln.indexOf('//angular.io/') >= 0) {
        void(location.href = ln.replace(/angular\.io/i, 'angular.cn'));
    }
    if (ln.indexOf('//angular.cn/') >= 0) {
        void(location.href = ln.replace(/angular\.cn/i, 'angular.io'));
    }

    if (ln.indexOf('//www.jquery123.com/') >= 0) {
        void(location.href = ln.replace(/www\.jquery123\.com/i, 'api.jquery.com'));
    }
    if (ln.indexOf('//api.jquery.com/') >= 0) {
        void(location.href = ln.replace(/http(s?)\:\/\/api\.jquery\.com/i, 'http://www.jquery123.com'));
    }

    if (ln.indexOf('//reactivex.io/rxjs/') >= 0) {
        void(location.href = ln.replace(/reactivex\.io\/rxjs/i, 'cn.rx.js.org'));
    }
    if (ln.indexOf('//cn.rx.js.org/') >= 0) {
        if (ln == 'https://cn.rx.js.org/') {
            location.href = 'http://reactivex.io/rxjs/manual/index.html';
            return;
        }
        void(location.href = ln.replace(/https:\/\/cn\.rx\.js\.org/i, 'http://reactivex.io/rxjs'));
    }

    if (ln.indexOf('//vuejs.org/') >= 0) {
        void(location.href = ln.replace(/vuejs\.org/i, 'cn.vuejs.org'));
    }
    if (ln.indexOf('//cn.vuejs.org/') >= 0) {
        void(location.href = ln.replace(/cn\.vuejs\.org/i, 'vuejs.org'));
    }

    if (hn.indexOf('google.com') >= 0) {
        // https://developers.google.com/web/fundamentals/?hl=en-us
        idx = location.search.indexOf('hl=');
        if (idx == -1) {
            if (location.search.indexOf('?') == 0) {
                void(location.search += '&hl=en-us');
            } else {
                void(location.search += '?hl=en-us');
            }
        } else {
            if (location.search.substr(idx + 3, 2) == 'en') {
                void(location.search = location.search.replace(/hl=(\w\w)(-\w+)?/i, 'hl=zh-Hant'));
            } else {
                void(location.search = location.search.replace(/hl=(\w\w)(-\w+)?/i, 'hl=en-us'));
            }
        }
    }
    
    if (hn.indexOf('mozilla.org') >= 0) {
        if (pn.search(/^\/(en)(-\w\w)?(\/)?(.*)/i) >= 0) {
            void(location.pathname = pn.replace(/^\/en(-\w\w)?\//i, '/zh-tw/'));
        } else {
            void(location.pathname = pn.replace(/^\/\w\w(-\w\w)?\//i, '/en-us/'));
        }
    }

    if (hn.indexOf('microsoft.com') >= 0 || hn.indexOf('visualstudio.com') >= 0) {
        // http://support.microsoft.com/kb/2951262
        idx = pn.search(/^\/kb\/\d+/i);
        if (hn.indexOf('support.microsoft.com') >= 0 && idx >= 0) {
            // http://support.microsoft.com/kb/2951262/
            if (pn.search(/^\/kb\/\d+\/?$/i) >= 0) {
                void(location.pathname = pn.replace(/^(\/kb\/\d+)(\/)?(\w\w-\w\w)?$/i, '$1/en-us'));
            } else {
                // http://support.microsoft.com/kb/2951262/en-us
                if (pn.search(/^\/kb\/\d+\/(\w\w)(-\w\w)?/i) >= 0) {
                    if (pn.search(/^(\/kb\/\d+\/)en(-\w\w)?$/i) >= 0) {
                        // http://support.microsoft.com/kb/2951262/zh-tw
                        void(location.pathname = pn.replace(/^(\/kb\/\d+\/)en(-\w\w)?$/i, '$1zh-tw'));
                    } else {
                        // http://support.microsoft.com/kb/2951262/en-us
                        void(location.pathname = pn.replace(/^(\/kb\/\d+\/)\w\w(-\w\w)?$/i, '$1en-us'));
                    }
                } else {
                    void(location.pathname = pn.replace(/^(\/kb\/\d+)(\/\w\w-\w\w)?$/i, '$1/en-us'));
                }
            }
        } else {
            // http://msdn.microsoft.com/ja-jp/library/system.drawing.color.aspx
            if (pn.search(/^\/(\w\w)(-\w\w)?\/?/i) >= 0) {
                if (pn.search(/^\/(en)(-\w\w)?(\/)?(.*)/i) >= 0) {
                    void(location.pathname = pn.replace(/^\/(en)(-\w\w)?(\/)?(.*)/i, '/zh-tw$3$4'));
                } else {
                    void(location.pathname = pn.replace(/^\/(\w\w)(-\w\w)?(\/)?(.*)/i, '/en-us$3$4'));
                }
            }
        }
    }
}());
