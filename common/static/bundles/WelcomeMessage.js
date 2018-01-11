(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([1],{

/***/ "./openedx/features/course_experience/static/course_experience/js/WelcomeMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_cookie__ = __webpack_require__("./common/static/js/vendor/jquery.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery_cookie__);
/* globals $ */


class WelcomeMessage {
  // eslint-disable-line import/prefer-default-export

  constructor(dismissUrl) {
    $('.dismiss-message button').click(() => {
      $.ajax({
        type: 'POST',
        url: dismissUrl,
        headers: {
          'X-CSRFToken': $.cookie('csrftoken')
        },
        success: () => {
          $('.welcome-message').hide();
        }
      });
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["WelcomeMessage"] = WelcomeMessage;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ })

},["./openedx/features/course_experience/static/course_experience/js/WelcomeMessage.js"])));
//# sourceMappingURL=WelcomeMessage.js.map