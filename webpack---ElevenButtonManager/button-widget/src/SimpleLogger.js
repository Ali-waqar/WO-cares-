__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__, "SimpleLogger", function() {
    return SimpleLogger;
});
var SimpleLogger =
    /*#__PURE__*/
    function() {
        function SimpleLogger() {
            this.log = this.log.bind(this);
            this.error = this.error.bind(this);
            this.debugMode = false;
            this.disableLogging = false; // Check IE 11, if so, don't do anything...

            if (window.navigator.userAgent.indexOf("Trident/7.0") >= 0) {
                this.disableLogging = true;
            }
        }

        var _proto = SimpleLogger.prototype;

        _proto.log = function log() {
            if (this.debugMode && !this.disableLogging) {
                console.log.apply(null, arguments);
            }
        };

        _proto.error = function error() {
            if (!this.disableLogging) {
                console.error.apply(null, arguments);
            }
        };

        return SimpleLogger;
    }();

//# sourceURL=webpack://ElevenButtonManager/./button-widget/src/SimpleLogger.js?