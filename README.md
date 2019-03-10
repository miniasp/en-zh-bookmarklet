# 中、英文網頁切換的瀏覽器書籤小工具

* 作　者: 多奇數位創意有限公司 黃保翕 ( Will 保哥 )
* 粉絲頁: [Will 保哥的技術交流中心](https://www.facebook.com/will.fans)
* 部落格: [The Will Will Web](http://blog.miniasp.com/)
* 噗　浪: [★★★ Will 保哥的噗浪 ★★★](http://www.plurk.com/willh/invite)
* Google+: [Will Huang (保哥)](https://plus.google.com/+WillHuang)

## 工具簡介

開發人員經常會到 Microsoft 或 Google 網站查詢相關文件，由於這些網站經常都會提供多國語系的內容，但並不是每個開發人員都知道要如何快速切換中、英文網頁之間，這個書籤工具就是為了這個用途而生的。近期也陸續增加了許多其他常用文件的中英文件轉換功能，例如 Angular、Bootstrap、jQuery 等等。

## 主要功能

* 自動判斷網頁的目前網頁顯示的語系，並且自動切換網頁至另一個語系的網頁版本
* 本工具僅自動判斷 `zh-*` 與 `en-*` 語系之間，任何其他國家語系預設都會切換至英文語系
* 支援 Google 大部分多國語網站自動切換 ([Search](http://www.google.com), [Chrome Help](https://support.google.com/chrome/), [Image](https://images.google.com/), ...)
* 支援 Mozilla 大部分多國語網站自動切換 ([MDN Web Docs](https://developer.mozilla.org/), [Firefox](https://www.mozilla.org/zh-TW/firefox/), ...)
* 支援 Microsoft 大部分多國語網站自動切換 ([Docs](https://docs.microsoft.com/), [VisualStudio.com](https://www.visualstudio.com/), [Azure](https://azure.microsoft.com), [KB](https://support.microsoft.com/), ...)
* 支援 Bootstrap 4 中英文文件翻譯轉換
  * 針對 `getbootstrap.com` 與 `bootstrap.hexschool.com` 網站進行切換 (繁體中文翻譯)
* 支援 Bootstrap 3 中英文文件翻譯轉換
  * 針對 `getbootstrap.com` 與 `v3.bootcss.com` 網站進行切換 (簡體中文翻譯)
* 支援 Angular 官網中英文文件翻譯轉換
  * 針對 `angular.io` 與 `angular.cn` 網站進行切換 (簡體中文翻譯)
* 支援 jQuery 官網 API 中英文文件翻譯轉換
  * 針對 `api.jquery.com` 與 `www.jquery123.com` 網站進行切換 (簡體中文翻譯)
* 支援 RxJS 官網 API 中英文文件翻譯轉換
  * 針對 `reactivex.io/rxjs` 與 `cn.rx.js.org` 網站進行切換 (簡體中文翻譯)
  * 注意: 由於 [RxJS 官網文件](http://reactivex.io/rxjs/) 近期改版，預設連到首頁就會轉向到新網站，所以從簡體網站首頁轉回英文版時，我會另外轉向到 [http://reactivex.io/rxjs/manual/index.html](http://reactivex.io/rxjs/manual/index.html) 避免連到無法翻譯的頁面。
* 支援 Vue.js 官網中英文文件翻譯轉換
  * 針對 `vuejs.org` 與 `cn.vuejs.org` 網站進行切換 (簡體中文翻譯)

## 安裝方式

1. 開啟瀏覽器，並打開瀏覽器的**書籤工具列**或**我的最愛列**：
   * Google Chrome 瀏覽器請按下 `Ctrl+Shift+B` 進行切換。
   * Internet Explorer 瀏覽器請點選主選單的 `[檢視]` / `[工具列]` / `[我的最愛列]` 進行切換。
2. 將以下超連結 (**中-英**)，直接利用滑鼠拖曳到**書籤工具列**或**我的最愛列**上

   * [中-英](https://www.facebook.com/will.fans)

3. 請你手動修改這個 **中-英** 的超連結，並將超連結改成以下程式碼即可！

```js
javascript:!function(){var o,e=location.hostname.toLowerCase(),a=location.href,c=location.pathname;if("https://getbootstrap.com/"!==a&&"http://getbootstrap.com/"!==a||(location.href="http://bootstrap.hexschool.com"),0<=a.indexOf("//getbootstrap.com/docs/3.3/")&&(location.href=a.replace(/getbootstrap\.com\/docs\/3\.3\//i,"v3.bootcss.com/")),0<=a.indexOf("//v3.bootcss.com/")&&(location.href=a.replace(/v3\.bootcss\.com\//i,"getbootstrap.com/docs/3.3/")),0<=a.indexOf("//bootstrap.hexschool.com/")&&(location.href=a.replace(/bootstrap\.hexschool\.com/i,"getbootstrap.com")),0<=a.indexOf("//getbootstrap.com/docs/4.0/")&&(location.href=a.replace(/http(s?)\:\/\/getbootstrap\.com/i,"http://bootstrap.hexschool.com")),0<=a.indexOf("//angular.io/")&&(location.href=a.replace(/angular\.io/i,"angular.tw")),0<=a.indexOf("//angular.tw/")&&(location.href=a.replace(/angular\.tw/i,"angular.io")),0<=a.indexOf("//www.jquery123.com/")&&(location.href=a.replace(/www\.jquery123\.com/i,"api.jquery.com")),0<=a.indexOf("//api.jquery.com/")&&(location.href=a.replace(/http(s?)\:\/\/api\.jquery\.com/i,"http://www.jquery123.com")),0<=a.indexOf("//reactivex.io/rxjs/")&&(location.href=a.replace(/reactivex\.io\/rxjs/i,"cn.rx.js.org")),0<=a.indexOf("//cn.rx.js.org/")){if("https://cn.rx.js.org/"==a)return location.href="http://reactivex.io/rxjs/manual/index.html";location.href=a.replace(/https:\/\/cn\.rx\.js\.org/i,"http://reactivex.io/rxjs")}0<=a.indexOf("//vuejs.org/")&&(location.href=a.replace(/vuejs\.org/i,"cn.vuejs.org")),0<=a.indexOf("//cn.vuejs.org/")&&(location.href=a.replace(/cn\.vuejs\.org/i,"vuejs.org")),0<=e.indexOf("google.com")&&(-1==(o=location.search.indexOf("hl="))?0==location.search.indexOf("?")?location.search+="&hl=en-us":location.search+="?hl=en-us":"en"==location.search.substr(o+3,2)?location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i,"hl=zh-Hant"):location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i,"hl=en-us")),0<=e.indexOf("mozilla.org")&&(0<=c.search(/^\/(en)(-\w\w)?(\/)?(.*)/i)?location.pathname=c.replace(/^\/en(-\w\w)?\//i,"/zh-tw/"):location.pathname=c.replace(/^\/\w\w(-\w\w)?\//i,"/en-us/")),(0<=e.indexOf("microsoft.com")||0<=e.indexOf("visualstudio.com"))&&(o=c.search(/^\/kb\/\d+/i),0<=e.indexOf("support.microsoft.com")&&0<=o?0<=c.search(/^\/kb\/\d+\/?$/i)?location.pathname=c.replace(/^(\/kb\/\d+)(\/)?(\w\w-\w\w)?$/i,"$1/en-us"):0<=c.search(/^\/kb\/\d+\/(\w\w)(-\w\w)?/i)?0<=c.search(/^(\/kb\/\d+\/)en(-\w\w)?$/i)?location.pathname=c.replace(/^(\/kb\/\d+\/)en(-\w\w)?$/i,"$1zh-tw"):location.pathname=c.replace(/^(\/kb\/\d+\/)\w\w(-\w\w)?$/i,"$1en-us"):location.pathname=c.replace(/^(\/kb\/\d+)(\/\w\w-\w\w)?$/i,"$1/en-us"):0<=c.search(/^\/(\w\w)(-\w\w)?\/?/i)&&(0<=c.search(/^\/(en)(-\w\w)?(\/)?(.*)/i)?location.pathname=c.replace(/^\/(en)(-\w\w)?(\/)?(.*)/i,"/zh-tw$3$4"):location.pathname=c.replace(/^\/(\w\w)(-\w\w)?(\/)?(.*)/i,"/en-us$3$4")))}();
```

## 使用方式與範例

1. 微軟知識庫文件網站 (support.microsoft.com)
   * 先連到 http://support.microsoft.com/kb/2951262 這個網址
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文介面(en-us)
2. 微軟最有價值專家網站 (mvp.microsoft.com)
   * 先連到 http://mvp.microsoft.com/en-us/mvp/Will%20Huang-4015686 這個網址
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到中文介面(zh-tw)
3. Microsoft Azure 文件中心 (azure.microsoft.com)
   * 先連到 http://azure.microsoft.com/en-us/documentation/ 這個網址
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到中文(zh-tw)
4. 微軟 MSDN Library ( msdn.microsoft.com )
   * 先連到 http://msdn.microsoft.com/ja-jp/library/system.drawing.color.aspx (日文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文文介面(en-us)
5. Web Fundamentals — Google Developers
   * 先連到 https://developers.google.com/web/fundamentals/ (預設顯示中文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文文介面(en-us)
6. Angular Official Website
   * 先連到 https://angular.io/ 任何一頁 (顯示英文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到簡體中文文件
7. Bootstrap · The world's most popular mobile-first and responsive front-end framework.
   * 先連到 http://getbootstrap.com/ (顯示英文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到繁體中文文件
8. RxJS · The ReactiveX library for JavaScript.
   * 先連到 http://reactivex.io/rxjs/ (顯示英文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到繁體中文文件
9. JavaScript | MDN
   * 先連到 https://developer.mozilla.org/en-US/docs/Web/JavaScript (顯示英文)
   * 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到繁體中文文件

## 注意事項

* 繁體中文用戶建議可搭配 **新同文堂** 進行繁簡轉換
  * Google Chrome 瀏覽器: 可下載 **[新同文堂](https://chrome.google.com/webstore/detail/new-tong-wen-tang/ldmgbgaoglmaiblpnphffibpbfchjaeg?hl=zh-TW)** 擴充套件
  * Mozilla Firefox 瀏覽器: 可下載 **[新同文堂](https://addons.mozilla.org/zh-TW/firefox/addon/new_tongwentang/)** 擴充套件
* 如果你想支援其他語系，請自行 fork 後修改，也歡迎多多利用 pull request 功能分享你的修改。
