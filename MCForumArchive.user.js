// ==UserScript==
// @name         MC JP Forum Archive
// @namespace    https://monatann.azurewebsites.net/index.php
// @version      1.1
// @description  Automatically jump to Wayback Machine Archive
// @author       monatann
// @match        https://forum.minecraftuser.jp/viewtopic.php*
// @require      https://monatann.azurewebsites.net/files/nicoaddon/script/jquery-3.2.1.js
// @grant        none
// ==/UserScript==

(function() {
    var html = jQuery("#message > div > p").text();
    if(html.indexOf("本フォーラムは閉鎖しました") != -1){
        var url = location.href;
        location.href = "https://web.archive.org/web/20190715114909/" + url;
    }
})();