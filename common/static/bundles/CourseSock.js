(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([2],{

/***/ "./openedx/features/course_experience/static/course_experience/js/CourseSock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* globals Logger */

class CourseSock {
  // eslint-disable-line import/prefer-default-export
  constructor() {
    const $toggleActionButton = $('.action-toggle-verification-sock');
    const $verificationSock = $('.verification-sock .verification-main-panel');
    const $upgradeToVerifiedButton = $('.verification-sock .action-upgrade-certificate');
    const pageLocation = window.location.href.indexOf('courseware') > -1 ? 'Course Content Page' : 'Home Page';

    // Behavior to fix button to bottom of screen on scroll
    const fixUpgradeButton = () => {
      if (!$upgradeToVerifiedButton.is(':visible')) return;

      // Grab the current scroll location
      const documentBottom = $(window).scrollTop() + $(window).height();

      // Establish a sliding window in which the button is fixed
      const startFixed = $verificationSock.offset().top + 320;
      const endFixed = startFixed + $verificationSock.height() - 220;

      // Assure update button stays in sock even when max-width is exceeded
      const distLeft = $verificationSock.offset().left + $verificationSock.width() - ($upgradeToVerifiedButton.width() + 22);

      // Update positioning when scrolling is in fixed window and screen width is sufficient
      if (documentBottom > startFixed && documentBottom < endFixed || $(window).width() < 960) {
        $upgradeToVerifiedButton.addClass('attached');
        $upgradeToVerifiedButton.css('left', `${distLeft}px`);
      } else {
        // If outside sliding window, reset to un-attached state
        $upgradeToVerifiedButton.removeClass('attached');
        $upgradeToVerifiedButton.css('left', 'auto');

        // Add class to define absolute location
        if (documentBottom < startFixed) {
          $upgradeToVerifiedButton.addClass('stuck-top');
          $upgradeToVerifiedButton.removeClass('stuck-bottom');
        } else if (documentBottom > endFixed) {
          $upgradeToVerifiedButton.addClass('stuck-bottom');
          $upgradeToVerifiedButton.removeClass('stuck-top');
        }
      }
    };

    // Fix the sock to the screen on scroll and resize events
    if ($upgradeToVerifiedButton.length) {
      $(window).scroll(fixUpgradeButton).resize(fixUpgradeButton);
    }

    // Open the sock when user clicks to Learn More
    $toggleActionButton.on('click', () => {
      const toggleSpeed = 400;
      $toggleActionButton.toggleClass('active').toggleClass('aria-expanded');
      $verificationSock.slideToggle(toggleSpeed, fixUpgradeButton);

      // Log open and close events
      const isOpening = $toggleActionButton.hasClass('active');
      const logMessage = isOpening ? 'User opened the verification sock.' : 'User closed the verification sock.';
      Logger.log(logMessage, {
        from_page: pageLocation
      });
    });

    $upgradeToVerifiedButton.on('click', () => {
      Logger.log('User clicked the upgrade button in the verification sock.', {
        from_page: pageLocation
      });
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["CourseSock"] = CourseSock;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ })

},["./openedx/features/course_experience/static/course_experience/js/CourseSock.js"])));
//# sourceMappingURL=CourseSock.js.map