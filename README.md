中、英文網頁切換的瀏覽器書籤小工具
==============================

* 作　者: 多奇數位創意有限公司 黃保翕 ( Will 保哥 )
* 粉絲頁: [Will 保哥的技術交流中心](https://www.facebook.com/will.fans)
* 部落格: [The Will Will Web](http://blog.miniasp.com/)
* 噗　浪: [★★★ Will 保哥的噗浪 ★★★](http://www.plurk.com/willh/invite)
* Google+: [Will Huang (保哥)](https://plus.google.com/+WillHuang)

工具簡介
--------

開發人員經常會到 Microsoft 或 Google 網站查詢相關文件，由於這些網站經常都會提供多國語系的內容，但並不是每個開發人員都知道要如何快速切換中、英文網頁之間，這個書籤工具就是為了這個用途而生的。

主要功能
--------

* 自動判斷網頁的目前網頁顯示的語系，並且自動切換網頁至另一個語系的網頁版本
* 本工具僅自動判斷 ``zh-*`` 與 ``en-*`` 語系之間，任何其他國家語系預設都會切換至英文語系
* 支援 Google 大部分多國語網站自動切換 ([Search](http://www.google.com), [Chrome Help](https://support.google.com/chrome/), [Image](https://images.google.com/), ...)
* 支援 Microsoft 大部分多國語網站自動切換 ([MSDN](http://msdn.microsoft.com/), [TechNet](http://technet.microsoft.com/), [Azure](http://azure.microsoft.com), [KB](http://support.microsoft.com/), ...)


安裝方式
--------

1. 開啟瀏覽器，並打開瀏覽器的**書籤工具列**或**我的最愛列**：
	* Google Chrome 瀏覽器請按下 ``Ctrl+Shift+B`` 進行切換。
	* Internet Explorer 瀏覽器請點選主選單的 ``[檢視]`` / ``[工具列]`` / ``[我的最愛列]`` 進行切換。   
2. 將以下超連結 (**中-英**)，直接利用滑鼠拖曳到**書籤工具列**或**我的最愛列**上
  * [中-英](https://www.facebook.com/will.fans)
3. 請你手動修改這個 **中-英** 的超連結，並將超連結改成以下程式碼即可！

  ```
  javascript:(function(){var e;if(location.hostname.indexOf('google.com')>=0){e=location.search.indexOf('hl=');if(e==-1){if(location.search.indexOf('?')==0){void (location.search+='&hl=en-us')}else{void (location.search+='?hl=en-us')}}else{if(location.search.substr(e+3,2)=='en'){void (location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i,'hl=zh-Hant'))}else{void (location.search=location.search.replace(/hl=(\w\w)(-\w+)?/i,'hl=en-us'))}}}if(location.hostname.indexOf('microsoft.com')>=0){if(location.hostname.indexOf('support.microsoft.com')>=0){e=location.pathname.search(/^\/kb\/\d+/i);if(e>=0){if(location.pathname.search(/^\/kb\/\d+\/?$/i)>=0){void (location.pathname=location.pathname.replace(/^(\/kb\/\d+)(\/)?(\w\w-\w\w)?$/i,'$1/en-us'))}else{if(location.pathname.search(/^\/kb\/\d+\/(\w\w)(-\w\w)?/i)>=0){if(location.pathname.search(/^(\/kb\/\d+\/)en(-\w\w)?$/i)>=0){void (location.pathname=location.pathname.replace(/^(\/kb\/\d+\/)en(-\w\w)?$/i,'$1zh-tw'))}else{void (location.pathname=location.pathname.replace(/^(\/kb\/\d+\/)\w\w(-\w\w)?$/i,'$1en-us'))}}else{void (location.pathname=location.pathname.replace(/^(\/kb\/\d+)(\/\w\w-\w\w)?$/i,'$1/en-us'))}}}}else{if(location.pathname.search(/^\/(\w\w)(-\w\w)?\/?/i)>=0){if(location.pathname.search(/^\/(en)(-\w\w)?(\/)?(.*)/i)>=0){void (location.pathname=location.pathname.replace(/^\/(en)(-\w\w)?(\/)?(.*)/i,'/zh-tw$3$4'))}else{void (location.pathname=location.pathname.replace(/^\/(\w\w)(-\w\w)?(\/)?(.*)/i,'/en-us$3$4'))}}}}})()
  ```

使用方式與範例
-------------

1. 範例1: 微軟知識庫文件網站 (support.microsoft.com)
	* 先連到 http://support.microsoft.com/kb/2951262 這個網址
	* 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文介面(en-us)
2. 範例2: 微軟最有價值專家網站 (mvp.microsoft.com)
	* 先連到 http://mvp.microsoft.com/en-us/mvp/Will%20Huang-4015686 這個網址
	* 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到中文介面(zh-tw)
3. 範例3: Microsoft Azure 文件中心 (azure.microsoft.com)
	* 先連到 http://azure.microsoft.com/en-us/documentation/ 這個網址
	* 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到中文(zh-tw)
4. 範例4: 微軟 MSDN Library ( msdn.microsoft.com )
	* 先連到 http://msdn.microsoft.com/ja-jp/library/system.drawing.color.aspx (日文)
	* 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文文介面(en-us)
5. 範例5: Web Fundamentals — Google Developers
	* 先連到 https://developers.google.com/web/fundamentals/ (預設顯示中文)
	* 此時點擊**書籤工具列**或**我的最愛列**上的**中-英**書籤連結，這時就會自動切換到英文文介面(en-us)

注意事項
--------

* 目前僅針對 ``*.microsoft.com`` 與 ``*.google.com`` 這兩個網站自動進行語系切換，如果你想支援其他語系，請自行 fork 後修改，也歡迎多多利用 pull request 將您的修改合併回來。
