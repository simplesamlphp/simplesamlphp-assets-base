'use strict';

/**
 * Automatically click the input button to redirect the user to
 * the SSO
 */
ready(function () {
    // Reveal #slowPostMessage after a delay (default 30000 ms).
    // If you want to change the delay per page, set data-slow-post-delay on the element.
    const el = document.getElementById('slowPostMessage');
    if (el) {
      const pageTitle = document.getElementById('page-title');
      const attr = (el.dataset && el.dataset.slowPostDelay) || el.getAttribute('data-slow-post-delay');
      let delay = parseInt(attr, 10);
      if (!Number.isFinite(delay) || delay < 0) delay = 30000;

      setTimeout(function () {
        el.classList.remove('hidden');
        if (pageTitle) {
          pageTitle.classList.remove('hidden');
        }
      }, delay);
    }

    // Automatically click the input button to redirect the user to
    // the SSO
    const btn = document.getElementById('postLoginSubmitButton');
    if (btn) {
        // Schedule the click on the next event loop turn so pending UI updates can render first
        setTimeout(function () { btn.click(); }, 0);
    }
});
