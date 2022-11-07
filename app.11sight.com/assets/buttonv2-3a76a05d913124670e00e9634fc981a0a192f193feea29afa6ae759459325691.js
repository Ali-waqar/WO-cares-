window.ElevenButtonManager = function(e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(n) {
                return e[n]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = "./button-widget/main.js")
}({
    "./button-widget/button-styles.js":
        /*!****************************************!*\
          !*** ./button-widget/button-styles.js ***!
          \****************************************/
        /*! exports provided: defaultMainColor, buttonStyles */
        /*! ModuleConcatenation bailout: Module is an entry point */
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultMainColor\", function() { return defaultMainColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonStyles\", function() { return buttonStyles; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/const */ \"./button-widget/src/const.js\");\n\n\nvar COLOR_NEUTRAL_0 = '#fff';\nvar COLOR_ACCENT_1 = '#51ad4c';\nvar FONT = {\n  fontFamily: \"Poppins, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\",\n  fontWeight: 600,\n  fontSize: '18px'\n};\nvar BASIC_BOX_SHADOW = {\n  boxShadow: '0px 8px 13px 0 rgba(0, 0, 0, 0.25), inset 0px -2px 0 0 rgba(0, 0, 0, 0.13)'\n};\nfunction defaultMainColor() {\n  return COLOR_ACCENT_1;\n}\nfunction buttonStyles(mainColor) {\n  if (!mainColor) {\n    mainColor = COLOR_ACCENT_1;\n  }\n\n  return {\n    'elevensight-outer-frame': {\n      border: \"1px solid \" + mainColor,\n      borderRadius: '12px',\n      width: _src_const__WEBPACK_IMPORTED_MODULE_1__[\"BTN_WIDTH\"] + 'px',\n      boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10), 0 5px 17px 0 rgba(0,0,0,0.14), 0 7px 23px 0 rgba(0,0,0,0.19)',\n      overflow: 'hidden',\n      backgroundColor: COLOR_NEUTRAL_0,\n      zIndex: '10000000'\n    },\n    'elevensight-outer-frame--br': {\n      position: 'fixed',\n      right: '10px',\n      bottom: '32px'\n    },\n    'elevensight-outer-frame--bl': {\n      position: 'fixed',\n      left: '10px',\n      bottom: '32px'\n    },\n    'elevensight-outer-frame--tr': {\n      position: 'fixed',\n      right: '10px',\n      top: '32px'\n    },\n    'elevensight-outer-frame--tl': {\n      position: 'fixed',\n      left: '10px',\n      top: '32px'\n    },\n    'elevensight-outer-frame--bm': {\n      position: 'fixed',\n      bottom: '0px',\n      left: '45%'\n    },\n    'elevensight-outer-frame--inline': {},\n    'elevensight-inner-frame--br': {\n      position: 'absolute'\n    },\n    'elevensight-inner-frame--bl': {\n      position: 'absolute'\n    },\n    'elevensight-inner-frame--tr': {\n      position: 'absolute'\n    },\n    'elevensight-inner-frame--tl': {\n      position: 'absolute'\n    },\n    'elevensight-inner-frame--bm': {\n      position: 'absolute'\n    },\n    'elevensight-inner-frame--inline': {},\n    'elevensight-inner-frame': {\n      border: 0,\n      width: _src_const__WEBPACK_IMPORTED_MODULE_1__[\"BTN_WIDTH\"] + 'px',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0,\n      zIndex: 100000\n    },\n    'elevensight-launcher': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      minWidth: '60px',\n      height: '60px',\n      borderRadius: '27.5px',\n      cursor: 'pointer',\n      lineHeight: '24px',\n      zIndex: 10000,\n      whiteSpace: 'nowrap'\n    }, FONT),\n    'elevensight-launcher--light': {\n      borderRadius: '999em',\n      boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10), 0 5px 17px 0 rgba(0,0,0,0.14), 0 7px 23px 0 rgba(0,0,0,0.19)',\n      lineHeight: '60px',\n      fontWeight: 'bold',\n      color: mainColor,\n      paddingRight: '2em',\n      userSelect: 'none',\n      backgroundColor: 'white'\n    },\n    'elevensight-launcher--square': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      minWidth: '80px',\n      height: '55px',\n      borderRadius: '4px',\n      backgroundColor: COLOR_NEUTRAL_0,\n      position: 'relative'\n    }, BASIC_BOX_SHADOW),\n    'elevensight-launcher--dark': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      backgroundColor: '#333333'\n    }, BASIC_BOX_SHADOW),\n    'elevensight-launcher--gradient': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      backgroundImage: 'linear-gradient(to top, #e0e0e0, #ffffff)'\n    }, BASIC_BOX_SHADOW),\n    'elevensight-launcher--rounded': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      backgroundColor: '#ffffff'\n    }, BASIC_BOX_SHADOW),\n    'elevensight-launcher--br': {\n      position: 'fixed',\n      right: '10px',\n      bottom: '32px'\n    },\n    'elevensight-launcher--bl': {\n      position: 'fixed',\n      left: '10px',\n      bottom: '32px'\n    },\n    'elevensight-launcher--tr': {\n      position: 'fixed',\n      right: '10px',\n      top: '32px'\n    },\n    'elevensight-launcher--tl': {\n      position: 'fixed',\n      left: '10px',\n      top: '32px'\n    },\n    'elevensight-launcher--bm': {\n      position: 'fixed',\n      bottom: '0px',\n      left: '45%'\n    },\n    'elevensight-launcher--inline': {},\n    'elevensight-launcher-icon': {\n      display: 'inline-block',\n      width: '53px',\n      height: '53px',\n      backgroundColor: mainColor,\n      backgroundRepeat: 'no-repeat',\n      margin: '3px 10px 3px 3px',\n      borderRadius: '50%',\n      float: 'unset',\n      padding: '0px'\n    },\n    'elevensight-launcher-icon--light': {},\n    'elevensight-launcher-icon--square': {\n      width: '29px',\n      height: '18px',\n      backgroundColor: 'white',\n      margin: '19px 15px 19px 0px',\n      verticalAlign: 'top',\n      backgroundImage: null,\n      borderRadius: null\n    },\n    'elevensight-launcher-icon--dark': {\n      backgroundColor: 'white',\n      verticalAlign: 'top',\n      margin: '3px 1px 3px 25px'\n    },\n    'elevensight-launcher-icon--gradient': {\n      verticalAlign: 'top',\n      backgroundColor: 'transparent',\n      margin: '3px 10px 3px 1px'\n    },\n    'elevensight-launcher-icon--rounded': {\n      verticalAlign: 'top',\n      margin: '3px 1px 3px 20px'\n    },\n    'elevensight-launcher-text': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n      display: 'inline-block',\n      verticalAlign: 'top',\n      lineHeight: '60px',\n      padding: '0px',\n      float: 'unset'\n    }, FONT),\n    'elevensight-launcher-text--light': {},\n    'elevensight-launcher-text--square': {\n      color: mainColor,\n      margin: '0 0 0 15px',\n      lineHeight: '55px'\n    },\n    'elevensight-launcher-text--dark': {\n      height: '60px',\n      verticalAlign: 'middle',\n      color: 'white',\n      margin: '0 0 0 24px'\n    },\n    'elevensight-launcher-text--gradient': {\n      verticalAlign: 'middle',\n      color: mainColor,\n      margin: '0 0 0 24px',\n      height: '60px'\n    },\n    'elevensight-launcher-text--rounded': {\n      verticalAlign: 'middle',\n      color: mainColor,\n      margin: '0 0 0 24px'\n    },\n    'elevensight-launcher--square-separator': {\n      display: 'inline-block',\n      width: '1px',\n      height: '55px',\n      opacity: '0.2',\n      backgroundColor: '#4c4c4c',\n      margin: '0 15px 0 17px'\n    },\n    'elevensight-img-btn-over': {\n      position: 'absolute',\n      top: '-85px',\n      width: '90px',\n      height: '90px',\n      borderRadius: '100%',\n      zIndex: '1000',\n      border: '5px solid #ffffff'\n    },\n    'elevensight-img-btn-over--dark': {\n      border: '5px solid #333333'\n    }\n  };\n}\n\n//# sourceURL=webpack://ElevenButtonManager/./button-widget/button-styles.js?")
        },
    "./button-widget/main.js":
        /*!*******************************************!*\
          !*** ./button-widget/main.js + 2 modules ***!
          \*******************************************/
        /*! exports provided: default */
        /*! ModuleConcatenation bailout: Cannot concat with ./button-widget/src/ButtonLauncher.js */
        /*! ModuleConcatenation bailout: Cannot concat with ./button-widget/src/SimpleLogger.js */
        /*! ModuleConcatenation bailout: Cannot concat with ./button-widget/src/const.js */
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval("\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js\nvar es7_symbol_async_iterator = __webpack_require__(\"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js\nvar es6_symbol = __webpack_require__(\"./node_modules/core-js/modules/es6.symbol.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js\nvar web_dom_iterable = __webpack_require__(\"./node_modules/core-js/modules/web.dom.iterable.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js\nvar es6_array_iterator = __webpack_require__(\"./node_modules/core-js/modules/es6.array.iterator.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js\nvar es6_object_keys = __webpack_require__(\"./node_modules/core-js/modules/es6.object.keys.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js\nvar es6_regexp_to_string = __webpack_require__(\"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n\n// EXTERNAL MODULE: ./button-widget/src/const.js\nvar src_const = __webpack_require__(\"./button-widget/src/const.js\");\n\n// CONCATENATED MODULE: ./button-widget/src/ButtonParser.js\n\n\nvar ButtonParser_ButtonParser =\n/*#__PURE__*/\nfunction () {\n  function ButtonParser(logger) {\n    this.parse = this.parse.bind(this);\n    this.findButtons = this.findButtons.bind(this);\n    this.parseButtons = this.parseButtons.bind(this);\n    this.findRenderedButtons = this.findRenderedButtons.bind(this);\n    this.buttonTag = 'a';\n    this.buttonClass = 'elevensight-11button-v2';\n    this.buttonRenderedClass = src_const[\"RENDERED_BTN_CLASS\"];\n    this.logger = logger;\n  }\n\n  var _proto = ButtonParser.prototype;\n\n  _proto.parse = function parse() {\n    var buttons = this.findButtons();\n    this.logger.log('Found buttons', buttons);\n    var btnObjects = this.parseButtons(buttons);\n    this.logger.log('Button Data Parsed', btnObjects);\n    return btnObjects;\n  };\n\n  _proto.findButtons = function findButtons() {\n    // This do not work for IE7- but I think it's not relevant anymore...\n    // return Array instead of NodeList\n    return [].slice.call(document.querySelectorAll(this.buttonTag + \".\" + this.buttonClass + \":not(.\" + this.buttonRenderedClass + \")\"));\n  };\n\n  _proto.parseButtons = function parseButtons(buttons) {\n    var _this = this;\n\n    this.logger.log(buttons);\n    return buttons.reduce(function (accum, btn) {\n      _this.logger.log(btn);\n\n      var btnStyleHashId = btn.getAttribute('data-btn-style-hash-id');\n      accum[btnStyleHashId] = btn;\n      return accum;\n    }, {});\n  };\n\n  _proto.findRenderedButtons = function findRenderedButtons() {\n    return [].slice.call(document.querySelectorAll(this.buttonTag + \".\" + this.buttonClass + \".\" + this.buttonRenderedClass));\n  };\n\n  return ButtonParser;\n}();\n\n\n// EXTERNAL MODULE: ./button-widget/src/SimpleLogger.js\nvar SimpleLogger = __webpack_require__(\"./button-widget/src/SimpleLogger.js\");\n\n// EXTERNAL MODULE: ./button-widget/src/ButtonLauncher.js + 1 modules\nvar ButtonLauncher = __webpack_require__(\"./button-widget/src/ButtonLauncher.js\");\n\n// CONCATENATED MODULE: ./button-widget/src/App.js\n\n\n\n\n\n\n\n\n\n\n\nvar App_App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    this.parseAndRenderButtons = this.parseAndRenderButtons.bind(this);\n    this.init = this.init.bind(this);\n    this.onMessage = this.onMessage.bind(this);\n    this.enableDebug = this.enableDebug.bind(this);\n    this.disableDebug = this.disableDebug.bind(this);\n    this.renderButtons = this.renderButtons.bind(this);\n    this.makeJsonpRequest = this.makeJsonpRequest.bind(this);\n    this.removeRenderedContent = this.removeRenderedContent.bind(this);\n    this.destroyButtons = this.destroyButtons.bind(this);\n    this._renderedLaunchers = {};\n    this.debugMode = false;\n    this.domain = src_const[\"DEFAULT_DOMAIN\"];\n    this.logger = new SimpleLogger[\"SimpleLogger\"]();\n  }\n\n  var _proto = App.prototype;\n\n  _proto.init = function init(_ref) {\n    var _this = this;\n\n    var domain = _ref.domain,\n        debug_mode = _ref.debug_mode,\n        delay = _ref.delay,\n        request_domain = _ref.request_domain,\n        force_show_form = _ref.force_show_form;\n    this.domain = domain;\n    this.debugMode = debug_mode;\n    this.parser = new ButtonParser_ButtonParser(this.logger);\n    this.delay = delay;\n    this.requestDomain = request_domain;\n    this.forceShowForm = force_show_form;\n\n    if (this.debugMode) {\n      this.enableDebug();\n    }\n\n    this._renderedLaunchers = {};\n    this._btnObjects = {};\n\n    if (delay && delay > 0) {\n      this.logger.log('Execution and parsing will be delay ' + delay.toString() + ' ms');\n      setTimeout(function () {\n        _this.parseAndRenderButtons();\n      }, delay);\n    } else {\n      this.logger.log('No delay received. Executing parsing and rendering');\n      this.parseAndRenderButtons();\n    }\n  };\n\n  _proto.destroyButtons = function destroyButtons() {\n    this.logger.log('Destroying existing buttons');\n    this._renderedLaunchers = {};\n    this._btnObjects = {};\n    this.removeRenderedContent();\n  };\n\n  _proto.reloadButtons = function reloadButtons() {\n    this.logger.log('Reloading buttons');\n    this.destroyButtons();\n    this.parseAndRenderButtons();\n  };\n\n  _proto.removeRenderedContent = function removeRenderedContent() {\n    this.logger.log('Removing rendered widget launchers');\n\n    for (var _iterator = document.querySelectorAll('.elevensight-widget-launcher'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {\n      var _ref2;\n\n      if (_isArray) {\n        if (_i >= _iterator.length) break;\n        _ref2 = _iterator[_i++];\n      } else {\n        _i = _iterator.next();\n        if (_i.done) break;\n        _ref2 = _i.value;\n      }\n\n      var cnt = _ref2;\n      cnt.remove();\n    }\n\n    this.logger.log('Removing rendered class on existing buttons');\n\n    for (var _iterator2 = this.parser.findRenderedButtons(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {\n      var _ref3;\n\n      if (_isArray2) {\n        if (_i2 >= _iterator2.length) break;\n        _ref3 = _iterator2[_i2++];\n      } else {\n        _i2 = _iterator2.next();\n        if (_i2.done) break;\n        _ref3 = _i2.value;\n      }\n\n      var btn = _ref3;\n      btn.classList.remove(src_const[\"RENDERED_BTN_CLASS\"]);\n    }\n  };\n\n  _proto.enableDebug = function enableDebug() {\n    this.debugMode = true;\n    this.logger.debugMode = true;\n  };\n\n  _proto.disableDebug = function disableDebug() {\n    this.debugMode = false;\n    this.logger.debugMode = false;\n  };\n\n  _proto.parseAndRenderButtons = function parseAndRenderButtons() {\n    this.logger.log('Starting parse and rendering');\n    this._btnObjects = this.parser.parse();\n    this.fetchButtonConfigs(this._btnObjects);\n  };\n\n  _proto.fetchButtonConfigs = function fetchButtonConfigs(btnObjects) {\n    var hostname = window.location.hostname;\n    var path = window.location.pathname;\n    var btnParamUrl = 'hostname=' + encodeURIComponent(hostname) + '&pathname=' + encodeURIComponent(path);\n\n    if (this.forceShowForm) {\n      btnParamUrl += '&f=1';\n    }\n\n    var _arr = Object.keys(btnObjects);\n\n    for (var _i3 = 0; _i3 < _arr.length; _i3++) {\n      var btnStyleHashId = _arr[_i3];\n      this.logger.log(btnStyleHashId, btnObjects[btnStyleHashId]);\n      btnParamUrl += '&b[]=' + btnStyleHashId; // Find other data elements if there are any...\n\n      var btn = btnObjects[btnStyleHashId];\n\n      if (Object.keys(btn.dataset).length > 1) {\n        var prmString = \"\";\n\n        for (var k in btn.dataset) {\n          if (\"btnStyleHashId\" === k) {\n            continue;\n          }\n\n          prmString += \"&v[\" + btnStyleHashId + \"][\" + k + \"]=\" + encodeURIComponent(btn.dataset[k]);\n        }\n\n        btnParamUrl += prmString;\n      }\n    }\n\n    this.logger.log('Jsonp request params created', btnParamUrl);\n    var requestUrl = this.domain + '/btn_config.js?' + btnParamUrl;\n    this.makeJsonpRequest(requestUrl);\n  };\n\n  _proto.makeJsonpRequest = function makeJsonpRequest(url) {\n    var buttonDataScriptTagIdBase = 'elevenSightButtonWidgetData_';\n    var buttonDataScriptTagId; // Run at most 10 times...\n\n    var i = 0;\n\n    do {\n      if (i > 10) {\n        this.logger.log('Id generation failed to generate a unique id. Exiting to prevent infinite loop');\n        break;\n      }\n\n      i += 1;\n      buttonDataScriptTagId = buttonDataScriptTagIdBase + Math.floor(Math.random() * 1000000);\n    } while (document.getElementById(buttonDataScriptTagId) != undefined);\n\n    var js;\n    var fjs = document.getElementsByTagName('script')[0];\n    js = document.createElement('script');\n    js.id = buttonDataScriptTagId;\n    js.src = url;\n    fjs.parentNode.insertBefore(js, fjs);\n  };\n\n  _proto.renderButtons = function renderButtons(btnConfigs) {\n    if (!btnConfigs) {\n      this.logger.log(\"Btn Config is not available. Ignoring rendering\");\n      return;\n    }\n\n    var self = this;\n    this.logger.log('Rendering btns: ', btnConfigs);\n\n    var _arr2 = Object.keys(btnConfigs);\n\n    for (var _i4 = 0; _i4 < _arr2.length; _i4++) {\n      var btnStyleHashId = _arr2[_i4];\n      var c = btnConfigs[btnStyleHashId];\n      var l = new ButtonLauncher[\"default\"](this._btnObjects[c.id], this.logger);\n      l.init(c);\n      self._renderedLaunchers[c.id] = {\n        launcher: l,\n        config: c,\n        domObject: this._btnObjects[c.id]\n      }; // Mark button as rendered\n\n      this._btnObjects[c.id].classList.add(src_const[\"RENDERED_BTN_CLASS\"]);\n    }\n  };\n\n  _proto.onMessage = function onMessage(event) {\n    this.logger.log('iframe message received: ', event); // Check sender origin to be trusted\n\n    if (event.origin !== this.domain) {\n      return;\n    } // Check if the received message is of type iisight...\n\n\n    if (event.data && event.data.mType && event.data.mType === 'iisight') {\n      var msg = event.data.message;\n      var btnIndex = event.data.btnIndex;\n      this.logger.log('iframe message received: ', msg, btnIndex);\n\n      if (this._renderedLaunchers[btnIndex]) {\n        if ('toggleWidget' === msg) {\n          this._renderedLaunchers[btnIndex].launcher.clicked();\n        }\n\n        if ('resizeHeight' === msg) {\n          this._renderedLaunchers[btnIndex].launcher.resizeWidget(event.data.newHeight);\n        }\n\n        if ('gaEvent' === msg) {\n          this._renderedLaunchers[btnIndex].launcher.recordEvent(event.data.gaEventName);\n        }\n      } else {\n        this.logger.log('Button Index: ' + btnIndex + ' do not have a valid rendered launcher');\n      }\n    }\n  };\n\n  return App;\n}();\n\n\n// CONCATENATED MODULE: ./button-widget/main.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main_AppStarter; });\n\n\n\n\n\nvar main_AppStarter =\n/*#__PURE__*/\nfunction () {\n  function AppStarter() {}\n\n  AppStarter.start = function start(ctx) {\n    ctx.elevensightApp = new App_App();\n\n    for (var _iterator = ctx.elevensight.queue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {\n      var _ref;\n\n      if (_isArray) {\n        if (_i >= _iterator.length) break;\n        _ref = _iterator[_i++];\n      } else {\n        _i = _iterator.next();\n        if (_i.done) break;\n        _ref = _i.value;\n      }\n\n      var args = _ref;\n      ctx.elevensightApp[args[0]].call(null, args[1]);\n    }\n\n    if (ctx.addEventListener) {\n      ctx.addEventListener('message', ctx.elevensightApp.onMessage, false);\n    } else if (ctx.attachEvent) {\n      ctx.attachEvent('onmessage', ctx.elevensightApp.onMessage, false);\n    }\n  };\n\n  return AppStarter;\n}();\n\n\n\n//# sourceURL=webpack://ElevenButtonManager/./button-widget/main.js_+_2_modules?")
        },
    "./button-widget/src/ButtonLauncher.js":
        /*!*********************************************************!*\
          !*** ./button-widget/src/ButtonLauncher.js + 1 modules ***!
          \*********************************************************/
        /*! exports provided: default */
        /*! ModuleConcatenation bailout: Cannot concat with ./button-widget/button-styles.js (<- Module is an entry point) */
        /*! ModuleConcatenation bailout: Cannot concat with ./button-widget/src/const.js */
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval("\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js\nvar es6_object_assign = __webpack_require__(\"./node_modules/core-js/modules/es6.object.assign.js\");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js\nvar es6_regexp_to_string = __webpack_require__(\"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n\n// EXTERNAL MODULE: ./button-widget/src/const.js\nvar src_const = __webpack_require__(\"./button-widget/src/const.js\");\n\n// EXTERNAL MODULE: ./button-widget/button-styles.js\nvar button_styles = __webpack_require__(\"./button-widget/button-styles.js\");\n\n// CONCATENATED MODULE: ./button-widget/src/Widget.js\n\n\n\n\n\nvar Widget_Widget =\n/*#__PURE__*/\nfunction () {\n  function Widget(logger) {\n    this.logger = logger;\n    this.config = this.config.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.containerBox = this.containerBox.bind(this);\n    this.displayWidget = false;\n    this.baseContainerId = 'elevensight-container';\n    this.baseFrameId = 'elevensight-frame';\n    this.containerId = '';\n    this.frameId = '';\n    this.id = null;\n    this.frameContainer = null;\n    this.frame = null;\n    this.mainColor = null;\n  }\n\n  var _proto = Widget.prototype;\n\n  _proto.config = function config(_ref) {\n    var id = _ref.id,\n        container = _ref.container,\n        messengerUrl = _ref.messengerUrl,\n        minHeight = _ref.minHeight,\n        position = _ref.position,\n        mainColor = _ref.mainColor;\n    this.id = id;\n    this.messengerUrl = messengerUrl;\n    this.minHeight = minHeight;\n    this.position = position || src_const[\"POS_BTM_RIGHT\"];\n    this.container = container;\n    this.containerId = this.baseContainerId + '-' + this.id;\n    this.frameId = this.frameId + '-' + this.id;\n    this.mainColor = mainColor;\n    this.styles = Object(button_styles[\"buttonStyles\"])(this.mainColor);\n  };\n\n  _proto.containerBox = function containerBox() {\n    return this.frameContainer;\n  };\n\n  _proto.resize = function resize(newHeight) {\n    this.frameContainer.style.height = newHeight.toString() + 'px';\n    this.frame.style.height = (newHeight - 20).toString() + 'px';\n  };\n\n  _proto.reposition = function reposition() {\n    if (src_const[\"POS_BTM_MIDDLE\"] === this.position) {\n      var containerWidth = this.container.getBoundingClientRect().width;\n      var frameWidth = this.frameContainer.getBoundingClientRect().width;\n      var newWidth = parseInt((containerWidth - frameWidth) / 2);\n      this.logger.log('repositioning frame to middle', containerWidth, frameWidth, newWidth);\n      this.frameContainer.style.left = newWidth + \"px\";\n    }\n  };\n\n  _proto.toggle = function toggle() {\n    var _this = this;\n\n    var self = this;\n    this.displayWidget = !this.displayWidget;\n    this.frameContainer = document.getElementById(this.containerId);\n\n    if (this.displayWidget) {\n      // display\n      if (this.frameContainer) {\n        this.frameContainer.style.display = 'block';\n      } else {\n        // create frame object\n        this.frameContainer = document.createElement('div');\n        var positionStyle = 'inline';\n\n        if (src_const[\"POS_BTM_RIGHT\"] === this.position) {\n          positionStyle = 'br';\n        } else if (src_const[\"POS_BTM_LEFT\"] === this.position) {\n          positionStyle = 'bl';\n        } else if (src_const[\"POS_TOP_RIGHT\"] === this.position) {\n          positionStyle = 'tr';\n        } else if (src_const[\"POS_TOP_LEFT\"] === this.position) {\n          positionStyle = 'tl';\n        } else if (src_const[\"POS_BTM_MIDDLE\"] === this.position) {\n          positionStyle = 'bm';\n        }\n\n        var baseOuterFrameClass = 'elevensight-outer-frame';\n        var baseInnerFrameClass = 'elevensight-inner-frame';\n        var outerFrameStyles = [baseOuterFrameClass, baseOuterFrameClass + '--' + positionStyle].map(function (v) {\n          return _this.styles[v];\n        });\n        outerFrameStyles.push({\n          width: src_const[\"BTN_WIDTH\"].toString() + 'px',\n          maxWidth: src_const[\"BTN_WIDTH\"].toString() + 'px',\n          height: this.minHeight.toString() + 'px',\n          borderColor: this.mainColor\n        });\n        var innerFrameStyles = [baseInnerFrameClass, baseInnerFrameClass + '--' + positionStyle].map(function (v) {\n          return _this.styles[v];\n        });\n        innerFrameStyles.push({\n          height: (this.minHeight - 20).toString() + 'px',\n          width: src_const[\"BTN_WIDTH\"].toString() + 'px'\n        });\n        this.logger.log('outer frame styles: ', outerFrameStyles);\n        Object.assign.apply(Object, [this.frameContainer.style].concat(outerFrameStyles));\n        this.frameContainer.id = this.containerId;\n        this.frame = document.createElement('iframe');\n        this.frame.src = this.messengerUrl;\n        this.frame.id = this.frameId;\n        Object.assign.apply(Object, [this.frame.style].concat(innerFrameStyles));\n        this.frameContainer.appendChild(this.frame);\n        this.container.appendChild(this.frameContainer);\n\n        window.onresize = function () {\n          self.reposition();\n        };\n      }\n\n      this.reposition();\n    } else if (this.frameContainer) {\n      this.frameContainer.style.display = 'none';\n    }\n  };\n\n  return Widget;\n}();\n\n\n// CONCATENATED MODULE: ./button-widget/src/ButtonLauncher.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonLauncher_ButtonLauncher; });\n\n\n\n\n\nvar ButtonLauncher_ButtonLauncher =\n/*#__PURE__*/\nfunction () {\n  function ButtonLauncher(container, logger, autoRender) {\n    if (autoRender === void 0) {\n      autoRender = true;\n    }\n\n    this.init = this.init.bind(this);\n    this.buildLauncher = this.buildLauncher.bind(this);\n    this.buildWidget = this.buildWidget.bind(this);\n    this.renderLauncher = this.renderLauncher.bind(this);\n    this.clicked = this.clicked.bind(this);\n    this.isExpanded = this.isExpanded.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.resize = this.resize.bind(this);\n    this.resizeWidget = this.resizeWidget.bind(this);\n    this.recordEvent = this.recordEvent.bind(this);\n    this.autoRender = autoRender;\n    this.container = container;\n    this.logger = logger;\n  }\n\n  var _proto = ButtonLauncher.prototype;\n\n  _proto.init = function init(_ref) {\n    var _this = this;\n\n    var id = _ref.id,\n        text = _ref.text,\n        domain = _ref.domain,\n        messenger_url = _ref.messenger_url,\n        call_btns_height = _ref.call_btns_height,\n        user_btns_height = _ref.user_btns_height,\n        position = _ref.position,\n        is_expandable = _ref.is_expandable,\n        call_url = _ref.call_url,\n        style = _ref.style,\n        super_btn_enabled = _ref.super_btn_enabled,\n        img_btn_over = _ref.img_btn_over,\n        expands_on_hover = _ref.expands_on_hover,\n        render_delay = _ref.render_delay,\n        main_color = _ref.main_color,\n        analytics = _ref.analytics,\n        rollup_buttons = _ref.rollup_buttons,\n        is_chat_only = _ref.is_chat_only;\n    this.id = id;\n    this.text = text || 'Call us!';\n    this.domain = domain || src_const[\"DEFAULT_DOMAIN\"];\n    this.messengerUrl = messenger_url || this.domain + \"/messenger_embed.html?b=\" + this.id;\n    this.minHeight = super_btn_enabled ? user_btns_height : call_btns_height;\n    this.position = position || src_const[\"POS_BTM_RIGHT\"];\n    this.isExpandable = is_expandable;\n    this.callUrl = call_url || this.domain + \"/call?button_id=\" + this.id;\n    this.style = style;\n    this.imgBtnOver = img_btn_over;\n    this.imgBtnOverSize = 90;\n    this.expandsOnHover = expands_on_hover || false;\n    this.renderDelay = render_delay;\n    this.mainColor = main_color || Object(button_styles[\"defaultMainColor\"])();\n    this.analytics = {\n      ga: analytics && analytics.ga\n    };\n    this.rollupButtons = rollup_buttons;\n    this.isChatOnly = is_chat_only;\n    this.styles = Object(button_styles[\"buttonStyles\"])(this.mainColor);\n    var self = this;\n\n    if (main_color) {\n      this.logger.log('Different main color is defined as: ' + main_color);\n    }\n\n    if (this.analytics.ga) {\n      this.logger.log('Google Analytics is enabled for: ' + this.id);\n    }\n\n    this.displayLauncher = true;\n    this.widget = this.buildWidget();\n    this.launcher = this.buildLauncher();\n\n    if (this.autoRender) {\n      if (this.renderDelay > 0) {\n        this.logger.log('Rendering is delayed by ' + this.renderDelay + ' seconds');\n        setTimeout(function () {\n          _this.renderLauncher();\n\n          _this.recordEvent(src_const[\"GA_EVT_VIEW\"]);\n        }, this.renderDelay * 1000);\n      } else {\n        this.logger.log('Button wil be rendered without delay');\n        this.renderLauncher();\n        this.recordEvent(src_const[\"GA_EVT_VIEW\"]);\n      }\n    }\n\n    window.onresize = function () {\n      self.reposition();\n    };\n  };\n\n  _proto.getMaxRollupState = function getMaxRollupState() {\n    if (!this.isExpandable) {\n      if (this.isChatOnly) {\n        return 'chat';\n      }\n\n      return 'video';\n    }\n\n    var current = 'chat';\n\n    for (var i in this.rollupButtons['default_btns']) {\n      var rb = this.rollupButtons['default_btns'][i];\n\n      if (rb['icon'] === 'video') {\n        current = 'video';\n        break;\n      } else if (rb['icon'] === 'audio') {\n        current = 'audio';\n      }\n    }\n\n    return current;\n  };\n\n  _proto.buildLauncher = function buildLauncher() {\n    var _this2 = this;\n\n    var launcher = document.createElement('div');\n    var icon = document.createElement('span');\n    var text = document.createElement('span');\n    text.className = 'iictrl-text';\n    launcher.title = this.text;\n\n    if (this.imgBtnOver) {\n      var imgContainer = document.createElement('div');\n      imgContainer.style = 'position: relative;';\n      var img = document.createElement('img');\n      img.id = 'eleventsight-img-btn-over-' + this.id;\n      img.src = this.imgBtnOver;\n      Object.assign(img.style, this.styles['elevensight-img-btn-over']);\n\n      if (src_const[\"STL_DARK\"] === this.style) {\n        Object.assign(img.style, this.styles['elevensight-img-btn-over--dark']);\n      }\n\n      imgContainer.appendChild(img);\n      launcher.appendChild(imgContainer);\n    }\n\n    var styleExtension = 'light';\n    var viewBox = '5 0 49 49';\n    var iconStyle = 'fill: ' + this.mainColor + ';';\n\n    if (src_const[\"STL_LIGHT\"] === this.style) {\n      styleExtension = 'light';\n      launcher.appendChild(icon);\n      launcher.appendChild(text);\n      iconStyle = 'fill: white;';\n      viewBox = '-2 0 49 49';\n    } else if (src_const[\"STL_SQUARE\"] === this.style) {\n      var separator = document.createElement('div');\n      Object.assign(separator.style, this.styles['elevensight-launcher--square-separator']);\n      styleExtension = 'square';\n      launcher.appendChild(text);\n      launcher.appendChild(separator);\n      launcher.appendChild(icon);\n      viewBox = '15 16 18 18';\n    } else if (src_const[\"STL_DARK\"] === this.style) {\n      styleExtension = 'dark';\n      launcher.appendChild(text);\n      launcher.appendChild(icon);\n      viewBox = '-2 0 49 49';\n    } else if (src_const[\"STL_GRADIENT\"] === this.style) {\n      styleExtension = 'gradient';\n      launcher.appendChild(text);\n      launcher.appendChild(icon);\n      viewBox = '-5 0 49 49';\n    } else if (src_const[\"STL_ROUNDED\"] === this.style) {\n      styleExtension = 'rounded';\n      launcher.appendChild(text);\n      launcher.appendChild(icon);\n      viewBox = '5 0 49 49';\n      iconStyle = 'fill: white; margin: 0 6px 10px 6px;';\n    }\n\n    var currentIcon = this.getMaxRollupState();\n    var iconSvg = document.createElement('svg');\n    icon.appendChild(iconSvg);\n\n    switch (currentIcon) {\n      case 'audio':\n        iconSvg.outerHTML = '<svg title=\"' + this.text + '\" style=\"' + iconStyle + '\" id=\"icon-audio\" viewBox=\"1 0 49 49\" width=\"100%\" height=\"100%\"><path fill=\"svg-currentColor\" d=\"M14.0205094,16.2790122 C13.8498187,15.0940906 14.7662057,14.0298406 15.9633419,14.0192465 L18.1213887,14.0000763 C19.0220673,13.9922064 19.8132878,14.5937478 20.0461115,15.4631679 L21.1915202,19.7368158 C21.2029263,19.7788894 21.2150327,19.8201558 21.232542,19.8599088 C21.2990774,20.0136742 21.4842758,20.7459767 20.216402,22.6752073 C19.7991803,23.3102462 19.7793698,24.1287138 20.1716782,24.7785843 C20.6991586,25.6515357 21.565619,26.9155596 22.8031767,28.1967358 C24.0845576,29.4344259 25.3484293,30.3013236 26.2214932,30.828202 C26.8710384,31.2206871 27.6897735,31.2009115 28.324811,30.7837069 C30.2540362,29.5156471 30.9864254,29.700892 31.1402071,29.7675842 C31.1799282,29.7848374 31.2211501,29.7972476 31.2633726,29.8084471 L35.5371437,30.9539183 C36.4066057,31.186887 37.0079253,31.9784153 36.999921,32.8785077 L36.9809109,35.0366712 C36.9705054,36.2338011 35.9057396,37.1504405 34.7212101,36.9794219 C28.2276593,36.0437132 23.7391741,33.4694551 20.6353246,30.3650898 C17.5309749,27.2616326 14.956807,22.7729755 14.0205094,16.2790122 Z\"></path></svg>';\n        break;\n\n      case 'chat':\n        iconSvg.outerHTML = '<svg title=\"' + this.text + '\" style=\"' + iconStyle + '\" id=\"icon-chat\" viewBox=\"1 0 49 49\" width=\"100%\" height=\"100%\"><path fill=\"svg-currentColor\" d=\"M29.7231098,35.4691847 L24.5382275,35.4691847 C23.8314996,35.4691847 23.2817031,34.9059983 23.2817031,34.1818156 L23.2817031,32.5280553 L33.2725499,32.5280553 C33.9818137,32.5250554 34.5286842,31.9228699 34.5286842,31.2406862 L34.5286842,21.6469165 L36.7437682,21.6469165 C37.4504961,21.6469165 38,22.210103 38,22.9341856 L38,34.1818156 C38,34.8622993 37.4560555,35.4630849 36.7437682,35.4691847 L33.985325,35.4691847 L33.985325,39 L29.7231098,35.4691847 Z M17.7856888,31.0574906 L13.2563294,31.0574906 C12.5496014,31.0574906 12,30.4943041 12,29.7701215 L12,15.2873691 C12,14.5631865 12.5496014,14 13.2563294,14 L31.8262253,14 C32.5329532,14 33.0823596,14.5631865 33.0823596,15.2873691 L33.0823596,29.7701215 C33.0823596,30.4523051 32.5356841,31.0544907 31.8262253,31.0574906 L22.3434306,31.0574906 L17.7856888,35.1765918 L17.7856888,31.0574906 Z\"></path></svg>';\n        break;\n\n      default:\n        iconSvg.outerHTML = '<svg title=\"' + this.text + '\" style=\"' + iconStyle + '\" id=\"icon-video\" viewBox=\"' + viewBox + '\" width=\"100%\" height=\"100%\"><path fill=\"svg-currentColor\" d=\"M30.2001228,33 L11.2800221,33 C10.560165,33 10,32.4387117 10,31.7169698 L10,17.2830302 C10,16.5612883 10.560165,16 11.2800221,16 L30.2001228,16 C30.9201787,16 31.4801449,16.5612883 31.4801449,17.2830302 L31.4801449,31.7169698 C31.4801449,32.3973525 30.9222656,32.9977078 30.2001228,33 Z M37.0803039,30.5141665 L33.2400388,28.3491403 C33.0401005,28.22885 32.9202568,28.0283329 32.9202568,27.7877523 L32.9202568,21.2122477 C32.9202568,20.9716671 33.0401005,20.7712497 33.2400388,20.6509594 L37.0803039,18.4858335 C37.4801804,18.2453526 38,18.5659606 38,19.0471219 L38,29.9929417 C38,30.4339397 37.4801804,30.7547471 37.0803039,30.5141665 Z\"></path></svg>';\n        break;\n    }\n\n    launcher.id = 'elevensight-widget-launcher-' + this.id;\n    launcher.classList.add('elevensight-widget-launcher');\n    var positionExtension = 'inline';\n\n    if (src_const[\"POS_BTM_RIGHT\"] === this.position) {\n      positionExtension = 'br';\n    } else if (src_const[\"POS_BTM_LEFT\"] === this.position) {\n      positionExtension = 'bl';\n    } else if (src_const[\"POS_TOP_RIGHT\"] === this.position) {\n      positionExtension = 'tr';\n    } else if (src_const[\"POS_TOP_LEFT\"] === this.position) {\n      positionExtension = 'tl';\n    } else if (src_const[\"POS_BTM_MIDDLE\"] === this.position) {\n      positionExtension = 'bm'; // eslint-disable-next-line no-empty\n    } else if (src_const[\"POS_INLINE\"] === this.position) {}\n\n    var baseLauncherClass = 'elevensight-launcher';\n    Object.assign.apply(Object, [launcher.style].concat([baseLauncherClass, baseLauncherClass + '--' + styleExtension, baseLauncherClass + '--' + positionExtension].map(function (v) {\n      return _this2.styles[v];\n    })));\n    Object.assign.apply(Object, [icon.style].concat([baseLauncherClass + '-icon', baseLauncherClass + '-icon--' + styleExtension].map(function (v) {\n      return _this2.styles[v];\n    })));\n    Object.assign.apply(Object, [text.style].concat([baseLauncherClass + '-text', baseLauncherClass + '-text--' + styleExtension].map(function (v) {\n      return _this2.styles[v];\n    })));\n    text.innerText = this.text;\n    return launcher;\n  };\n\n  _proto.resize = function resize(launcher) {\n    if (src_const[\"POS_INLINE\"] === this.position) {\n      var text = launcher.querySelector('.iictrl-text');\n      var offsetWidthBasedOnStyle = 82;\n\n      if (src_const[\"STL_SQUARE\"] === this.style) {\n        offsetWidthBasedOnStyle = 85;\n      } else if (src_const[\"STL_DARK\"] === this.style) {\n        offsetWidthBasedOnStyle = 96;\n      } else if (src_const[\"STL_GRADIENT\"] === this.style) {\n        offsetWidthBasedOnStyle = 90;\n      } else if (src_const[\"STL_ROUNDED\"] === this.style) {\n        offsetWidthBasedOnStyle = 90;\n      }\n\n      var width = parseInt(text.getBoundingClientRect().width, 10) + 20 + offsetWidthBasedOnStyle;\n      this.logger.log('Dynamic width final calculation: ', width, ' offset width: ', offsetWidthBasedOnStyle);\n      Object.assign(launcher.style, {\n        width: width + 'px'\n      });\n    } // Reposition the above btn image if there is something like that.\n\n\n    if (this.imgBtnOver) {\n      this.logger.log('Found img btn over, resizing');\n      var img = launcher.querySelector('#eleventsight-img-btn-over-' + this.id);\n\n      var _width = parseInt(launcher.getBoundingClientRect().width, 10);\n\n      if (img) {\n        this.logger.log('Found img dom object', _width, this.imgBtnOverSize);\n        Object.assign(img.style, {\n          left: (_width - this.imgBtnOverSize) / 2 + 'px'\n        });\n      }\n    }\n  };\n\n  _proto.reposition = function reposition() {\n    if (src_const[\"POS_BTM_MIDDLE\"] === this.position) {\n      // TODO: Later we might need to change this to use this.container instead of body directly...\n      var containerWidth = document.body.getBoundingClientRect().width;\n      var frameWidth = this.launcher.getBoundingClientRect().width;\n      var newWidth = parseInt((containerWidth - frameWidth) / 2);\n      this.logger.log('repositioning launcher to middle', containerWidth, frameWidth, newWidth);\n      this.launcher.style.left = newWidth + \"px\";\n    }\n  };\n\n  _proto.clicked = function clicked() {\n    if (this.isExpandable && null !== this.widget) {\n      this.toggle();\n      this.widget.toggle();\n    } else {\n      this.recordEvent(src_const[\"GA_EVT_VIDEO_CALL_START\"]);\n      window.open(this.callUrl, '_blank');\n    }\n\n    this.reposition();\n  };\n\n  _proto.recordEvent = function recordEvent(event) {\n    this.logger.log('Record event received: ' + event + ' for id: ' + this.id);\n\n    if (this.analytics.ga) {\n      var prefixes = window.ANALYTICS_GA_PREFIXES;\n\n      if (window.gtag) {\n        this.logger.log('Gtag is being used instead of ga function');\n        window.gtag(\"event\", event, {\n          event_category: \"11Sight\",\n          event_label: this.id\n        });\n      } else if (window.ga) {\n        for (var i in prefixes) {\n          var p = prefixes[i];\n          var m = \"send\";\n\n          if (\"\" !== p) {\n            m = p + \".\" + m;\n          }\n\n          window.ga(m, 'event', '11Sight', event, this.id);\n        }\n      } else {\n        this.logger.error('GA is enabled but ga function is not found');\n      }\n    } else {\n      this.logger.log('GA is not enabled');\n    }\n  };\n\n  _proto.toggle = function toggle() {\n    this.displayLauncher = !this.displayLauncher;\n\n    if (this.displayLauncher) {\n      this.launcher.style.display = 'block';\n\n      if (src_const[\"POS_INLINE\"] === this.position) {\n        this.container.style.width = null;\n      }\n\n      this.recordEvent(src_const[\"GA_EVT_ROLLUP_CLOSE\"]);\n    } else {\n      this.launcher.style.display = 'none'; // If we are hiding the launcher means, we are showing the rollup...\n\n      this.logger.log(this.container, this.position);\n\n      if (src_const[\"POS_INLINE\"] === this.position) {\n        this.container.style.width = src_const[\"BTN_WIDTH\"] + 'px';\n      }\n\n      this.recordEvent(src_const[\"GA_EVT_ROLLUP_OPEN\"]);\n    }\n  };\n\n  _proto.isExpanded = function isExpanded() {\n    return this.isExpandable && null !== this.widget && this.widget.displayWidget;\n  };\n\n  _proto.setInlinePosition = function setInlinePosition(container) {\n    // Reset container's styles like border, padding, margin...\n    Object.assign(container.style, {\n      display: 'inline-block',\n      textDecoration: 'none',\n      border: 0,\n      padding: 0,\n      margin: 0,\n      // set the z-index as well so that it always be on top\n      // FIXME: maybe not for inline?\n      zIndex: '100000',\n      boxShadow: 'none',\n      whiteSpace: 'nowrap'\n    });\n  };\n\n  _proto.renderLauncher = function renderLauncher() {\n    var _this3 = this;\n\n    var container = document.body;\n\n    if (src_const[\"POS_INLINE\"] === this.position) {\n      container = this.container;\n      this.setInlinePosition(container);\n    }\n\n    container.appendChild(this.launcher);\n    this.resize(this.launcher);\n    this.reposition();\n    this.launcher.addEventListener('click', function () {\n      _this3.logger.log('Launcher clicked', _this3.id);\n\n      _this3.clicked();\n    });\n\n    if (this.isExpandable && this.expandsOnHover) {\n      var handleClose = function handleClose() {\n        if (_this3.isExpanded()) {\n          _this3.logger.log('Widget out', _this3.id);\n\n          _this3.clicked();\n        }\n      };\n\n      var handleOpen = function handleOpen() {\n        if (!_this3.isExpanded()) {\n          _this3.logger.log('Launcher over', _this3.id);\n\n          _this3.clicked();\n\n          _this3.widget.containerBox().removeEventListener('mouseout', handleClose);\n\n          _this3.widget.containerBox().addEventListener('mouseout', handleClose);\n        }\n      };\n\n      this.launcher.addEventListener('mouseover', handleOpen);\n    }\n  };\n\n  _proto.resizeWidget = function resizeWidget(newHeight) {\n    this.widget.resize(newHeight);\n  };\n\n  _proto.buildWidget = function buildWidget() {\n    if (this.isExpandable) {\n      var widget = new Widget_Widget(this.logger);\n      widget.config({\n        id: this.id,\n        messengerUrl: this.messengerUrl,\n        minHeight: this.minHeight,\n        position: this.position,\n        container: src_const[\"POS_INLINE\"] === this.position ? this.container : document.body,\n        mainColor: this.mainColor\n      });\n      return widget;\n    }\n\n    return null;\n  };\n\n  return ButtonLauncher;\n}();\n\n\n\n//# sourceURL=webpack://ElevenButtonManager/./button-widget/src/ButtonLauncher.js_+_1_modules?")
        },
    "./button-widget/src/SimpleLogger.js":
        /*!*******************************************!*\
          !*** ./button-widget/src/SimpleLogger.js ***!
          \*******************************************/
        /*! exports provided: SimpleLogger */
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLogger", function() { return SimpleLogger; });\nvar SimpleLogger =\n/*#__PURE__*/\nfunction () {\n  function SimpleLogger() {\n    this.log = this.log.bind(this);\n    this.error = this.error.bind(this);\n    this.debugMode = false;\n    this.disableLogging = false; // Check IE 11, if so, don\'t do anything...\n\n    if (window.navigator.userAgent.indexOf("Trident/7.0") >= 0) {\n      this.disableLogging = true;\n    }\n  }\n\n  var _proto = SimpleLogger.prototype;\n\n  _proto.log = function log() {\n    if (this.debugMode && !this.disableLogging) {\n      console.log.apply(null, arguments);\n    }\n  };\n\n  _proto.error = function error() {\n    if (!this.disableLogging) {\n      console.error.apply(null, arguments);\n    }\n  };\n\n  return SimpleLogger;\n}();\n\n//# sourceURL=webpack://ElevenButtonManager/./button-widget/src/SimpleLogger.js?')
        },
    "./button-widget/src/const.js":
        /*!************************************!*\
          !*** ./button-widget/src/const.js ***!
          \************************************/
        /*! exports provided: POS_INLINE, POS_BTM_RIGHT, POS_BTM_LEFT, POS_TOP_RIGHT, POS_TOP_LEFT, POS_BTM_MIDDLE, STL_DARK, STL_LIGHT, STL_ROUNDED, STL_GRADIENT, STL_SQUARE, DEFAULT_DOMAIN, BTN_WIDTH, RENDERED_BTN_CLASS, GA_EVT_ROLLUP_OPEN, GA_EVT_ROLLUP_CLOSE, GA_EVT_VIDEO_CALL_START, GA_EVT_VIEW */
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_INLINE", function() { return POS_INLINE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_BTM_RIGHT", function() { return POS_BTM_RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_BTM_LEFT", function() { return POS_BTM_LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_TOP_RIGHT", function() { return POS_TOP_RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_TOP_LEFT", function() { return POS_TOP_LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POS_BTM_MIDDLE", function() { return POS_BTM_MIDDLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STL_DARK", function() { return STL_DARK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STL_LIGHT", function() { return STL_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STL_ROUNDED", function() { return STL_ROUNDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STL_GRADIENT", function() { return STL_GRADIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STL_SQUARE", function() { return STL_SQUARE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN", function() { return DEFAULT_DOMAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_WIDTH", function() { return BTN_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDERED_BTN_CLASS", function() { return RENDERED_BTN_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_EVT_ROLLUP_OPEN", function() { return GA_EVT_ROLLUP_OPEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_EVT_ROLLUP_CLOSE", function() { return GA_EVT_ROLLUP_CLOSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_EVT_VIDEO_CALL_START", function() { return GA_EVT_VIDEO_CALL_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_EVT_VIEW", function() { return GA_EVT_VIEW; });\nvar POS_INLINE = 1;\nvar POS_BTM_RIGHT = 2;\nvar POS_BTM_LEFT = 3;\nvar POS_TOP_RIGHT = 4;\nvar POS_TOP_LEFT = 5;\nvar POS_BTM_MIDDLE = 6;\nvar STL_DARK = 1;\nvar STL_LIGHT = 2;\nvar STL_ROUNDED = 3;\nvar STL_GRADIENT = 4;\nvar STL_SQUARE = 5;\nvar DEFAULT_DOMAIN = \'https://app.11sight.com\';\nvar BTN_WIDTH = 305;\nvar RENDERED_BTN_CLASS = \'elevensight-rendered\';\nvar GA_EVT_ROLLUP_OPEN = "Rollup Open";\nvar GA_EVT_ROLLUP_CLOSE = "Rollup Close";\nvar GA_EVT_VIDEO_CALL_START = "Video Call Start";\nvar GA_EVT_VIEW = "Button View";\n\n//# sourceURL=webpack://ElevenButtonManager/./button-widget/src/const.js?')
        },
    "./node_modules/@babel/runtime/helpers/defineProperty.js":
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
          \***************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval('function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/@babel/runtime/helpers/defineProperty.js?')
        },
    "./node_modules/@babel/runtime/helpers/objectSpread.js":
        /*!*************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
          \*************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? Object(arguments[i]) : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === \'function\') {\n      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/@babel/runtime/helpers/objectSpread.js?')
        },
    "./node_modules/core-js/modules/_a-function.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_a-function.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_a-function.js?")
        },
    "./node_modules/core-js/modules/_add-to-unscopables.js":
        /*!*************************************************************!*\
          !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
          \*************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'unscopables\');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_add-to-unscopables.js?')
        },
    "./node_modules/core-js/modules/_an-object.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_an-object.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_an-object.js?")
        },
    "./node_modules/core-js/modules/_array-includes.js":
        /*!*********************************************************!*\
          !*** ./node_modules/core-js/modules/_array-includes.js ***!
          \*********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_array-includes.js?')
        },
    "./node_modules/core-js/modules/_cof.js":
        /*!**********************************************!*\
          !*** ./node_modules/core-js/modules/_cof.js ***!
          \**********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_cof.js?")
        },
    "./node_modules/core-js/modules/_core.js":
        /*!***********************************************!*\
          !*** ./node_modules/core-js/modules/_core.js ***!
          \***********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_core.js?")
        },
    "./node_modules/core-js/modules/_ctx.js":
        /*!**********************************************!*\
          !*** ./node_modules/core-js/modules/_ctx.js ***!
          \**********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_ctx.js?')
        },
    "./node_modules/core-js/modules/_defined.js":
        /*!**************************************************!*\
          !*** ./node_modules/core-js/modules/_defined.js ***!
          \**************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval('// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on  " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_defined.js?')
        },
    "./node_modules/core-js/modules/_descriptors.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_descriptors.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_descriptors.js?")
        },
    "./node_modules/core-js/modules/_dom-create.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_dom-create.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;\n// typeof document.createElement is \'object\' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_dom-create.js?')
        },
    "./node_modules/core-js/modules/_enum-bug-keys.js":
        /*!********************************************************!*\
          !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
          \********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_enum-bug-keys.js?")
        },
    "./node_modules/core-js/modules/_enum-keys.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_enum-keys.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_enum-keys.js?')
        },
    "./node_modules/core-js/modules/_export.js":
        /*!*************************************************!*\
          !*** ./node_modules/core-js/modules/_export.js ***!
          \*************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");\nvar PROTOTYPE = \'prototype\';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == \'function\' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_export.js?')
        },
    "./node_modules/core-js/modules/_fails.js":
        /*!************************************************!*\
          !*** ./node_modules/core-js/modules/_fails.js ***!
          \************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_fails.js?")
        },
    "./node_modules/core-js/modules/_flags.js":
        /*!************************************************!*\
          !*** ./node_modules/core-js/modules/_flags.js ***!
          \************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_flags.js?")
        },
    "./node_modules/core-js/modules/_global.js":
        /*!*************************************************!*\
          !*** ./node_modules/core-js/modules/_global.js ***!
          \*************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_global.js?")
        },
    "./node_modules/core-js/modules/_has.js":
        /*!**********************************************!*\
          !*** ./node_modules/core-js/modules/_has.js ***!
          \**********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_has.js?")
        },
    "./node_modules/core-js/modules/_hide.js":
        /*!***********************************************!*\
          !*** ./node_modules/core-js/modules/_hide.js ***!
          \***********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_hide.js?')
        },
    "./node_modules/core-js/modules/_html.js":
        /*!***********************************************!*\
          !*** ./node_modules/core-js/modules/_html.js ***!
          \***********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_html.js?')
        },
    "./node_modules/core-js/modules/_ie8-dom-define.js":
        /*!*********************************************************!*\
          !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
          \*********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")(\'div\'), \'a\', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_ie8-dom-define.js?')
        },
    "./node_modules/core-js/modules/_iobject.js":
        /*!**************************************************!*\
          !*** ./node_modules/core-js/modules/_iobject.js ***!
          \**************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_iobject.js?")
        },
    "./node_modules/core-js/modules/_is-array.js":
        /*!***************************************************!*\
          !*** ./node_modules/core-js/modules/_is-array.js ***!
          \***************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_is-array.js?")
        },
    "./node_modules/core-js/modules/_is-object.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_is-object.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_is-object.js?")
        },
    "./node_modules/core-js/modules/_iter-create.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_iter-create.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval('\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'iterator\'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + \' Iterator\');\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_iter-create.js?')
        },
    "./node_modules/core-js/modules/_iter-define.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_iter-define.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_iter-define.js?")
        },
    "./node_modules/core-js/modules/_iter-step.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_iter-step.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_iter-step.js?")
        },
    "./node_modules/core-js/modules/_iterators.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_iterators.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = {};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_iterators.js?")
        },
    "./node_modules/core-js/modules/_library.js":
        /*!**************************************************!*\
          !*** ./node_modules/core-js/modules/_library.js ***!
          \**************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = false;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_library.js?")
        },
    "./node_modules/core-js/modules/_meta.js":
        /*!***********************************************!*\
          !*** ./node_modules/core-js/modules/_meta.js ***!
          \***********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_meta.js?")
        },
    "./node_modules/core-js/modules/_object-assign.js":
        /*!********************************************************!*\
          !*** ./node_modules/core-js/modules/_object-assign.js ***!
          \********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval('\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = \'abcdefghijklmnopqrst\';\n  A[S] = 7;\n  K.split(\'\').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join(\'\') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-assign.js?')
        },
    "./node_modules/core-js/modules/_object-create.js":
        /*!********************************************************!*\
          !*** ./node_modules/core-js/modules/_object-create.js ***!
          \********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-create.js?")
        },
    "./node_modules/core-js/modules/_object-dp.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_object-dp.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-dp.js?")
        },
    "./node_modules/core-js/modules/_object-dps.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_object-dps.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-dps.js?')
        },
    "./node_modules/core-js/modules/_object-gopd.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_object-gopd.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-gopd.js?')
        },
    "./node_modules/core-js/modules/_object-gopn-ext.js":
        /*!**********************************************************!*\
          !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
          \**********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-gopn-ext.js?")
        },
    "./node_modules/core-js/modules/_object-gopn.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_object-gopn.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-gopn.js?")
        },
    "./node_modules/core-js/modules/_object-gops.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_object-gops.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-gops.js?")
        },
    "./node_modules/core-js/modules/_object-gpo.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_object-gpo.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")(\'IE_PROTO\');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == \'function\' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-gpo.js?')
        },
    "./node_modules/core-js/modules/_object-keys-internal.js":
        /*!***************************************************************!*\
          !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
          \***************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")(\'IE_PROTO\');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-keys-internal.js?')
        },
    "./node_modules/core-js/modules/_object-keys.js":
        /*!******************************************************!*\
          !*** ./node_modules/core-js/modules/_object-keys.js ***!
          \******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-keys.js?')
        },
    "./node_modules/core-js/modules/_object-pie.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_object-pie.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-pie.js?")
        },
    "./node_modules/core-js/modules/_object-sap.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_object-sap.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), \'Object\', exp);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_object-sap.js?')
        },
    "./node_modules/core-js/modules/_property-desc.js":
        /*!********************************************************!*\
          !*** ./node_modules/core-js/modules/_property-desc.js ***!
          \********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_property-desc.js?")
        },
    "./node_modules/core-js/modules/_redefine.js":
        /*!***************************************************!*\
          !*** ./node_modules/core-js/modules/_redefine.js ***!
          \***************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_redefine.js?")
        },
    "./node_modules/core-js/modules/_set-to-string-tag.js":
        /*!************************************************************!*\
          !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
          \************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")(\'toStringTag\');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_set-to-string-tag.js?')
        },
    "./node_modules/core-js/modules/_shared-key.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_shared-key.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")(\'keys\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_shared-key.js?')
        },
    "./node_modules/core-js/modules/_shared.js":
        /*!*************************************************!*\
          !*** ./node_modules/core-js/modules/_shared.js ***!
          \*************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '\xa9 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_shared.js?")
        },
    "./node_modules/core-js/modules/_to-absolute-index.js":
        /*!************************************************************!*\
          !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
          \************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-absolute-index.js?')
        },
    "./node_modules/core-js/modules/_to-integer.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_to-integer.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-integer.js?")
        },
    "./node_modules/core-js/modules/_to-iobject.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_to-iobject.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-iobject.js?')
        },
    "./node_modules/core-js/modules/_to-length.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_to-length.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-length.js?')
        },
    "./node_modules/core-js/modules/_to-object.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/_to-object.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-object.js?')
        },
    "./node_modules/core-js/modules/_to-primitive.js":
        /*!*******************************************************!*\
          !*** ./node_modules/core-js/modules/_to-primitive.js ***!
          \*******************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_to-primitive.js?")
        },
    "./node_modules/core-js/modules/_uid.js":
        /*!**********************************************!*\
          !*** ./node_modules/core-js/modules/_uid.js ***!
          \**********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports) {
            eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_uid.js?")
        },
    "./node_modules/core-js/modules/_wks-define.js":
        /*!*****************************************************!*\
          !*** ./node_modules/core-js/modules/_wks-define.js ***!
          \*****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != \'_\' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_wks-define.js?')
        },
    "./node_modules/core-js/modules/_wks-ext.js":
        /*!**************************************************!*\
          !*** ./node_modules/core-js/modules/_wks-ext.js ***!
          \**************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_wks-ext.js?')
        },
    "./node_modules/core-js/modules/_wks.js":
        /*!**********************************************!*\
          !*** ./node_modules/core-js/modules/_wks.js ***!
          \**********************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/_wks.js?")
        },
    "./node_modules/core-js/modules/es6.array.iterator.js":
        /*!************************************************************!*\
          !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
          \************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.array.iterator.js?")
        },
    "./node_modules/core-js/modules/es6.object.assign.js":
        /*!***********************************************************!*\
          !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
          \***********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\n\n$export($export.S + $export.F, \'Object\', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.object.assign.js?')
        },
    "./node_modules/core-js/modules/es6.object.keys.js":
        /*!*********************************************************!*\
          !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
          \*********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");\nvar $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\n\n__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")(\'keys\', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.object.keys.js?')
        },
    "./node_modules/core-js/modules/es6.regexp.flags.js":
        /*!**********************************************************!*\
          !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
          \**********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != \'g\') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, \'flags\', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")\n});\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.regexp.flags.js?')
        },
    "./node_modules/core-js/modules/es6.regexp.to-string.js":
        /*!**************************************************************!*\
          !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
          \**************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.regexp.to-string.js?")
        },
    "./node_modules/core-js/modules/es6.symbol.js":
        /*!****************************************************!*\
          !*** ./node_modules/core-js/modules/es6.symbol.js ***!
          \****************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            "use strict";
            eval('\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");\nvar shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");\nvar wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");\nvar isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");\nvar _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");\nvar $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");\nvar $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = \'prototype\';\nvar HIDDEN = wks(\'_hidden\');\nvar TO_PRIMITIVE = wks(\'toPrimitive\');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared(\'symbol-registry\');\nvar AllSymbols = shared(\'symbols\');\nvar OPSymbols = shared(\'op-symbols\');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == \'function\';\nvar QObject = global.QObject;\n// Don\'t use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, \'a\', {\n    get: function () { return dP(this, \'a\', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == \'symbol\' ? function (it) {\n  return typeof it == \'symbol\';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError(\'Symbol is not a constructor!\');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], \'toString\', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {\n    redefine(ObjectProto, \'propertyIsEnumerable\', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  \'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\'\n).split(\',\'), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, \'Symbol\', {\n  // 19.4.2.1 Symbol.for(key)\n  \'for\': function (key) {\n    return has(SymbolRegistry, key += \'\')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + \' is not a symbol!\');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, \'Object\', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != \'[null]\' || _stringify({ a: S }) != \'{}\' || _stringify(Object(S)) != \'{}\';\n})), \'JSON\', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == \'function\') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, \'Symbol\');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, \'Math\', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, \'JSON\', true);\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es6.symbol.js?')
        },
    "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
        /*!*******************************************************************!*\
          !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
          \*******************************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/es7.symbol.async-iterator.js?")
        },
    "./node_modules/core-js/modules/web.dom.iterable.js":
        /*!**********************************************************!*\
          !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
          \**********************************************************/
        /*! no static exports found */
        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(module, exports, __webpack_require__) {
            eval('var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");\nvar wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");\nvar ITERATOR = wks(\'iterator\');\nvar TO_STRING_TAG = wks(\'toStringTag\');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://ElevenButtonManager/./node_modules/core-js/modules/web.dom.iterable.js?')
        }
});
var AppStarter = window.ElevenButtonManager["default"];
AppStarter.start(window);