__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__, "defaultMainColor", function() {
    return defaultMainColor;
});
/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__, "buttonStyles", function() {
    return buttonStyles;
});
/* harmony import */
var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */
var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _src_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./src/const */ "./button-widget/src/const.js");


var COLOR_NEUTRAL_0 = '#fff';
var COLOR_ACCENT_1 = '#51ad4c';
var FONT = {
    fontFamily: "Poppins, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 600,
    fontSize: '18px'
};
var BASIC_BOX_SHADOW = {
    boxShadow: '0px 8px 13px 0 rgba(0, 0, 0, 0.25), inset 0px -2px 0 0 rgba(0, 0, 0, 0.13)'
};

function defaultMainColor() {
    return COLOR_ACCENT_1;
}

function buttonStyles(mainColor) {
    if (!mainColor) {
        mainColor = COLOR_ACCENT_1;
    }

    return {
        'elevensight-outer-frame': {
            border: "1px solid " + mainColor,
            borderRadius: '12px',
            width: _src_const__WEBPACK_IMPORTED_MODULE_1__["BTN_WIDTH"] + 'px',
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10), 0 5px 17px 0 rgba(0,0,0,0.14), 0 7px 23px 0 rgba(0,0,0,0.19)',
            overflow: 'hidden',
            backgroundColor: COLOR_NEUTRAL_0,
            zIndex: '10000000'
        },
        'elevensight-outer-frame--br': {
            position: 'fixed',
            right: '10px',
            bottom: '32px'
        },
        'elevensight-outer-frame--bl': {
            position: 'fixed',
            left: '10px',
            bottom: '32px'
        },
        'elevensight-outer-frame--tr': {
            position: 'fixed',
            right: '10px',
            top: '32px'
        },
        'elevensight-outer-frame--tl': {
            position: 'fixed',
            left: '10px',
            top: '32px'
        },
        'elevensight-outer-frame--bm': {
            position: 'fixed',
            bottom: '0px',
            left: '45%'
        },
        'elevensight-outer-frame--inline': {},
        'elevensight-inner-frame--br': {
            position: 'absolute'
        },
        'elevensight-inner-frame--bl': {
            position: 'absolute'
        },
        'elevensight-inner-frame--tr': {
            position: 'absolute'
        },
        'elevensight-inner-frame--tl': {
            position: 'absolute'
        },
        'elevensight-inner-frame--bm': {
            position: 'absolute'
        },
        'elevensight-inner-frame--inline': {},
        'elevensight-inner-frame': {
            border: 0,
            width: _src_const__WEBPACK_IMPORTED_MODULE_1__["BTN_WIDTH"] + 'px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100000
        },
        'elevensight-launcher': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            minWidth: '60px',
            height: '60px',
            borderRadius: '27.5px',
            cursor: 'pointer',
            lineHeight: '24px',
            zIndex: 10000,
            whiteSpace: 'nowrap'
        }, FONT),
        'elevensight-launcher--light': {
            borderRadius: '999em',
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10), 0 5px 17px 0 rgba(0,0,0,0.14), 0 7px 23px 0 rgba(0,0,0,0.19)',
            lineHeight: '60px',
            fontWeight: 'bold',
            color: mainColor,
            paddingRight: '2em',
            userSelect: 'none',
            backgroundColor: 'white'
        },
        'elevensight-launcher--square': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            minWidth: '80px',
            height: '55px',
            borderRadius: '4px',
            backgroundColor: COLOR_NEUTRAL_0,
            position: 'relative'
        }, BASIC_BOX_SHADOW),
        'elevensight-launcher--dark': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            backgroundColor: '#333333'
        }, BASIC_BOX_SHADOW),
        'elevensight-launcher--gradient': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            backgroundImage: 'linear-gradient(to top, #e0e0e0, #ffffff)'
        }, BASIC_BOX_SHADOW),
        'elevensight-launcher--rounded': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            backgroundColor: '#ffffff'
        }, BASIC_BOX_SHADOW),
        'elevensight-launcher--br': {
            position: 'fixed',
            right: '10px',
            bottom: '32px'
        },
        'elevensight-launcher--bl': {
            position: 'fixed',
            left: '10px',
            bottom: '32px'
        },
        'elevensight-launcher--tr': {
            position: 'fixed',
            right: '10px',
            top: '32px'
        },
        'elevensight-launcher--tl': {
            position: 'fixed',
            left: '10px',
            top: '32px'
        },
        'elevensight-launcher--bm': {
            position: 'fixed',
            bottom: '0px',
            left: '45%'
        },
        'elevensight-launcher--inline': {},
        'elevensight-launcher-icon': {
            display: 'inline-block',
            width: '53px',
            height: '53px',
            backgroundColor: mainColor,
            backgroundRepeat: 'no-repeat',
            margin: '3px 10px 3px 3px',
            borderRadius: '50%',
            float: 'unset',
            padding: '0px'
        },
        'elevensight-launcher-icon--light': {},
        'elevensight-launcher-icon--square': {
            width: '29px',
            height: '18px',
            backgroundColor: 'white',
            margin: '19px 15px 19px 0px',
            verticalAlign: 'top',
            backgroundImage: null,
            borderRadius: null
        },
        'elevensight-launcher-icon--dark': {
            backgroundColor: 'white',
            verticalAlign: 'top',
            margin: '3px 1px 3px 25px'
        },
        'elevensight-launcher-icon--gradient': {
            verticalAlign: 'top',
            backgroundColor: 'transparent',
            margin: '3px 10px 3px 1px'
        },
        'elevensight-launcher-icon--rounded': {
            verticalAlign: 'top',
            margin: '3px 1px 3px 20px'
        },
        'elevensight-launcher-text': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            display: 'inline-block',
            verticalAlign: 'top',
            lineHeight: '60px',
            padding: '0px',
            float: 'unset'
        }, FONT),
        'elevensight-launcher-text--light': {},
        'elevensight-launcher-text--square': {
            color: mainColor,
            margin: '0 0 0 15px',
            lineHeight: '55px'
        },
        'elevensight-launcher-text--dark': {
            height: '60px',
            verticalAlign: 'middle',
            color: 'white',
            margin: '0 0 0 24px'
        },
        'elevensight-launcher-text--gradient': {
            verticalAlign: 'middle',
            color: mainColor,
            margin: '0 0 0 24px',
            height: '60px'
        },
        'elevensight-launcher-text--rounded': {
            verticalAlign: 'middle',
            color: mainColor,
            margin: '0 0 0 24px'
        },
        'elevensight-launcher--square-separator': {
            display: 'inline-block',
            width: '1px',
            height: '55px',
            opacity: '0.2',
            backgroundColor: '#4c4c4c',
            margin: '0 15px 0 17px'
        },
        'elevensight-img-btn-over': {
            position: 'absolute',
            top: '-85px',
            width: '90px',
            height: '90px',
            borderRadius: '100%',
            zIndex: '1000',
            border: '5px solid #ffffff'
        },
        'elevensight-img-btn-over--dark': {
            border: '5px solid #333333'
        }
    };
}

//# sourceURL=webpack://ElevenButtonManager/./button-widget/button-styles.js?