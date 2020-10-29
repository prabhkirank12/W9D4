/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 50:0-14 */
/***/ ((module) => {

class FollowToggle {

    constructor(el) {
        this.$el = $(el);
        this.userId = $(el).data('user-id');
        this.followState = $(el).data('initial-follow-state');
        this.render();
        this.$el.on('click', (e) => { this.handleClick(e)})
    }

    render() {
        if (this.followState === "unfollowed") {
            // debugger;
            this.$el.html('Follow');
        } else if (this.followState === "followed") {
            // debugger;
            this.$el.html('Unfollow');
        }
    }

    handleClick(e) {
        e.preventDefault();

        if (this.followState === "unfollowed"){ 
            return $.ajax ({
                method: "POST",
                url: `/users/${this.userId}/follow`,
                dataType: 'json',
                success: response => {
                    this.followState = "followed"
                    this.render()

                }
            })
        } else{
            return $.ajax ({
                method: "DELETE",
                url: `/users/${this.userId}/follow`,
                dataType: 'json',
                success: response => {
                    this.followState = "unfollowed"
                    this.render()
                }
            })
        }
    }
    
};

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

    $(document).ready( function () {
        $("button.follow-toggle").each(function (idx, el ){
            // debugger;
            new FollowToggle(el);
        });
    });


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map