// ==UserScript==
// @name         Rm Zhihu Login Modal
// @namespace    glooory
// @version      0.1
// @description  Remove Login modal
// @author       glooorypu@gmail.com
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  let removed = false;
  const retryDuration = 500;
  const maxRetryTime = 10;
  let retriedTimes = 0;

  const closeLoginModalBtnSelector = 'div.Modal.Modal--default.signFlowModal > button';
  const stickyHeaderSelector = 'header.AppHeader';

  function removeLoginModal() {
    if (!removed) {
      const stickyHeader = document.querySelector(stickyHeaderSelector);
      if (stickyHeader) {
        stickyHeader.style.height = '0';
        stickyHeader.style.overflow = 'hidden';
      }

      const closeLoginModalBtn = document.querySelector(closeLoginModalBtnSelector);
      if (closeLoginModalBtn) {
        closeLoginModalBtn.click();
        removed = true;
      } else {
        if (retriedTimes <= maxRetryTime) {
          setTimeout(removeLoginModal, retryDuration);
          retriedTimes++;
        }
      }
    }
  }

  removeLoginModal();
})();
