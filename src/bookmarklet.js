(function () {
    var idx;

    if (location.href === 'https://getbootstrap.com/') {
        void(location.href = 'http://bootstrap.hexschool.com');
    }

    if (location.href.indexOf('//getbootstrap.com/docs/3.3/') >= 0) {
        void(location.href = location.href.replace(/getbootstrap\.com\/docs\/3\.3\//i, 'v3.bootcss.com/'));
    }
    if (location.href.indexOf('//v3.bootcss.com/') >= 0) {
        void(location.href = location.href.replace(/v3\.bootcss\.com\//i, 'getbootstrap.com/docs/3.3/'));
    }

    if (location.href.indexOf('//bootstrap.hexschool.com/') >= 0) {
        void(location.href = location.href.replace(/bootstrap\.hexschool\.com/i, 'getbootstrap.com'));
    }
    if (location.href.indexOf('//getbootstrap.com/docs/4.0/') >= 0) {
        void(location.href = location.href.replace(/http(s?)\:\/\/getbootstrap\.com/i, 'http://bootstrap.hexschool.com'));
    }

    if (location.href.indexOf('//angular.io/') >= 0) {
        void(location.href = location.href.replace(/angular\.io/i, 'angular.cn'));
    }
    if (location.href.indexOf('//angular.cn/') >= 0) {
        void(location.href = location.href.replace(/angular\.cn/i, 'angular.io'));
    }

    if (location.href.indexOf('//www.jquery123.com/') >= 0) {
        void(location.href = location.href.replace(/www\.jquery123\.com/i, 'api.jquery.com'));
    }
    if (location.href.indexOf('//api.jquery.com/') >= 0) {
        void(location.href = location.href.replace(/http(s?)\:\/\/api\.jquery\.com/i, 'http://www.jquery123.com'));
    }


    if (location.hostname.indexOf('google.com') >= 0) {
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

    if (location.hostname.indexOf('microsoft.com') >= 0) {
        // http://support.microsoft.com/kb/2951262
        idx = location.pathname.search(/^\/kb\/\d+/i);
        if (location.hostname.indexOf('support.microsoft.com') >= 0 && idx >= 0) {
            // http://support.microsoft.com/kb/2951262/
            if (location.pathname.search(/^\/kb\/\d+\/?$/i) >= 0) {
                void(location.pathname = location.pathname.replace(/^(\/kb\/\d+)(\/)?(\w\w-\w\w)?$/i, '$1/en-us'));
            } else {
                // http://support.microsoft.com/kb/2951262/en-us
                if (location.pathname.search(/^\/kb\/\d+\/(\w\w)(-\w\w)?/i) >= 0) {
                    if (location.pathname.search(/^(\/kb\/\d+\/)en(-\w\w)?$/i) >= 0) {
                        // http://support.microsoft.com/kb/2951262/zh-tw
                        void(location.pathname = location.pathname.replace(/^(\/kb\/\d+\/)en(-\w\w)?$/i, '$1zh-tw'));
                    } else {
                        // http://support.microsoft.com/kb/2951262/en-us
                        void(location.pathname = location.pathname.replace(/^(\/kb\/\d+\/)\w\w(-\w\w)?$/i, '$1en-us'));
                    }
                } else {
                    void(location.pathname = location.pathname.replace(/^(\/kb\/\d+)(\/\w\w-\w\w)?$/i, '$1/en-us'));
                }
            }
        } else {
            // http://msdn.microsoft.com/ja-jp/library/system.drawing.color.aspx
            if (location.pathname.search(/^\/(\w\w)(-\w\w)?\/?/i) >= 0) {
                if (location.pathname.search(/^\/(en)(-\w\w)?(\/)?(.*)/i) >= 0) {
                    void(location.pathname = location.pathname.replace(/^\/(en)(-\w\w)?(\/)?(.*)/i, '/zh-tw$3$4'));
                } else {
                    void(location.pathname = location.pathname.replace(/^\/(\w\w)(-\w\w)?(\/)?(.*)/i, '/en-us$3$4'));
                }
            }
        }
    }
}());