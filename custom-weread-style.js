(function() {
  'use strict';
  function addGlobalStyle(css, id) {
    var head, style;
    if (id && document.getElementById(id)) return;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.id = id;
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }

  var appContentCSS = "div.app_content { max-width: 100vw !important; width: min(1400px, 100vw) !important; }";
  var topNavBarCSS = "div.readerTopBar { max-width: 100vw !important; width: min(1400px, 100vw) !important; height: auto; }";
  var homeNavLogoCSS = "a.readerTopBar_home { width: 40px; height: 40px; }"
  var purchaseBtnCSS = "button.readerFooter_button_twoLines { bottom: 500px !important; }"
  var floatBtnsCSS = "div.readerControls { left: auto; right: 16px; bottom: 24px; width: auto; margin-left: 0; }"
  var nextChapterBtnCSS = "div.readerFooter button { position: fixed; right: 10px; bottom: 420px; width: auto; padding: 16px 8px; line-height: 1; height: auto; }"
  var prevChapterBtnCSS = "div.readerContentHeader button { position: fixed; right: 10px; bottom: 504px; width: auto; height: auto; padding: 16px 8px; line-height: 1; background-color: #f6f7f9; font-size: 16px; border-radius: 12px; } div.readerContentHeader button:hover { background-color: #edeeef; }"
  var catalogModalCSS = ".wr_whiteTheme div.readerCatalog { right: 0; margin-left: auto; }";
  var customCSS = appContentCSS + topNavBarCSS + homeNavLogoCSS + purchaseBtnCSS + floatBtnsCSS + nextChapterBtnCSS + prevChapterBtnCSS + catalogModalCSS;

  addGlobalStyle(customCSS, "custom_reader_layout");
})();
