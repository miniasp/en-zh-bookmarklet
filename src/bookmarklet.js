(function(){
    var idx;

    if(location.hostname.indexOf('google.com') >= 0) {
        // https://developers.google.com/web/fundamentals/?hl=en-us
        idx = location.search.indexOf('hl=');
        if(idx == -1) {
            if(location.search.indexOf('?')==0){
                void(location.search += '&hl=en-us');
            } else {
                void(location.search += '?hl=en-us');
            }
        } else {
            if(location.search.substr(idx+3, 2)=='en') {
                void(location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i, 'hl=zh-Hant'));
            } else {
                void(location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i, 'hl=en-us'));
            }
        }
    }

    if(location.hostname.indexOf('microsoft.com') >= 0) {
        if(location.hostname.indexOf('support.microsoft.com') >= 0) {
            // http://support.microsoft.com/kb/2951262
            idx = location.pathname.search(/^\/kb\/\d+/i);
            if(idx >= 0) {
                // http://support.microsoft.com/kb/2951262/
                if(location.pathname.search(/^\/kb\/\d+\/?$/i) >= 0) {
                    void(location.pathname=location.pathname.replace(/^(\/kb\/\d+)(\/)?(\w\w-\w\w)?$/i, '$1/en-us'));
                }
                else {
                    // http://support.microsoft.com/kb/2951262/en-us
                    if(location.pathname.search(/^\/kb\/\d+\/(\w\w)(-\w\w)?/i) >= 0) {
                        if(location.pathname.search(/^(\/kb\/\d+\/)en(-\w\w)?$/i) >= 0) {
                            // http://support.microsoft.com/kb/2951262/zh-tw
                            void(location.pathname=location.pathname.replace(/^(\/kb\/\d+\/)en(-\w\w)?$/i, '$1zh-tw'));
                        } else {
                            // http://support.microsoft.com/kb/2951262/en-us
                            void(location.pathname=location.pathname.replace(/^(\/kb\/\d+\/)\w\w(-\w\w)?$/i, '$1en-us'));
                        }
                    } else {
                        void(location.pathname=location.pathname.replace(/^(\/kb\/\d+)(\/\w\w-\w\w)?$/i, '$1/en-us'));
                    }
                }
            }
        } else {
            // http://msdn.microsoft.com/ja-jp/library/system.drawing.color.aspx
            if(location.pathname.search(/^\/(\w\w)(-\w\w)?\/?/i) >= 0) {
                if(location.pathname.search(/^\/(en)(-\w\w)?(\/)?(.*)/i) >= 0) {
                    void(location.pathname=location.pathname.replace(/^\/(en)(-\w\w)?(\/)?(.*)/i, '/zh-tw$3$4'));
                } else {
                    void(location.pathname=location.pathname.replace(/^\/(\w\w)(-\w\w)?(\/)?(.*)/i, '/en-us$3$4'));
                }
            }
        }
    }
}());