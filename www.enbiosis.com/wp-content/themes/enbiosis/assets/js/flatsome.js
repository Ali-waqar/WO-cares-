! function(t) {
    function e(e) {
        for (var n, o, r = e[0], a = e[1], s = 0, l = []; s < r.length; s++) o = r[s], Object.prototype.hasOwnProperty.call(i, o) && i[o] && l.push(i[o][0]), i[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (c && c(e); l.length;) l.shift()()
    }
    var n = {},
        i = {
            1: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise((function(e, o) {
                    n = i[t] = [e, o]
                }));
                e.push(n[2] = r);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function(t) {
                    return o.p + "chunk." + ({
                        0: "countup",
                        2: "sticky-sidebar",
                        3: "tooltips",
                        4: "vendors-popups",
                        5: "vendors-slider"
                    }[t] || t) + "." + {
                        0: "fe2c1016",
                        2: "a58a6557",
                        3: "29144c1c",
                        4: "947eca5c",
                        5: "f0d2cbc9"
                    }[t] + ".js"
                }(t);
                var c = new Error;
                a = function(e) {
                    s.onerror = s.onload = null, clearTimeout(l);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")", c.name = "ChunkLoadError", c.type = o, c.request = r, n[1](c)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var r = window.flatsomeJsonp = window.flatsomeJsonp || [],
        a = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var c = a;
    o(o.s = 10)
}([function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    })), n.d(e, "b", (function() {
        return c
    })), n.d(e, "c", (function() {
        return l
    }));
    var i = document.body,
        o = "body-scroll-lock--active",
        r = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        a = 0;

    function s() {
        if (r) {
            a = window.pageYOffset;
            var t = document.getElementById("wpadminbar"),
                e = a - (t ? t.offsetHeight : 0);
            i.style.overflow = "hidden", i.style.position = "fixed", i.style.top = "-".concat(e, "px"), i.style.width = "100%", i.classList.add(o)
        }
    }

    function c() {
        r && (i.style.removeProperty("overflow"), i.style.removeProperty("position"), i.style.removeProperty("top"), i.style.removeProperty("width"), window.scrollTo(0, a), i.classList.remove(o))
    }

    function l() {
        return i.classList.contains(o)
    }
}, function(t, e, n) {
    "use strict";

    function i() {
        return jQuery.fn.magnificPopup ? Promise.resolve() : n.e(4).then(n.t.bind(null, 9, 7))
    }
    n.d(e, "a", (function() {
        return i
    })), jQuery.loadMagnificPopup = i, jQuery.fn.lazyMagnificPopup = function(t) {
        var e = jQuery(this),
            n = t.delegate ? e.find(t.delegate) : e;
        return n.one("click", (function(o) {
            o.preventDefault(), i().then((function() {
                e.data("magnificPopup") || e.magnificPopup(t), e.magnificPopup("open", n.index(o.currentTarget) || 0)
            }))
        })), e
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return new IntersectionObserver((function(e) {
            for (var n = 0; n < e.length; n++) t(e[n])
        }), {
            rootMargin: "0px",
            threshold: .1
        })
    }
    n.d(e, "a", (function() {
        return i
    }))
}, function(t, e) {
    t.exports = window.jQuery
}, function(t, e, n) {
    n.p = window.flatsomeVars ? window.flatsomeVars.assets_url : "/"
}, function(t, e, n) {
    (function(e) {
        var n;
        n = void 0 !== e ? e : this, t.exports = function(t, e, i) {
            if (void 0 === e) {
                var o = ("; " + n.document.cookie).split("; " + t + "=");
                return 2 === o.length ? o.pop().split(";").shift() : null
            }!1 === e && (i = -1);
            var r = "";
            if (i) {
                var a = new Date;
                a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3), r = "; expires=" + a.toGMTString()
            }
            n.document.cookie = t + "=" + e + r + "; path=/"
        }
    }).call(this, n(2))
}, function(t, e) {
    function n(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
            return typeof t
        } : t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(e)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, , function(t, e, n) {
    n(5), t.exports = n(11)
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var e = n(6),
                i = n.n(e);
            n(12), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(1), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44), n(45), n(46), n(47), jQuery((function() {
                return t.Flatsome.attach(document)
            })), t.cookie = i.a
        }.call(this, n(2))
}, function(t, e, n) {
    var i, o;
    ! function(r, a) {
        "use strict";
        i = [n(13)], void 0 === (o = function(t) {
            return function(t, e) {
                var n = t.jQuery,
                    i = t.console;

                function o(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                }
                var r = Array.prototype.slice;

                function a(t, e, s) {
                    if (!(this instanceof a)) return new a(t, e, s);
                    var c, l = t;
                    "string" == typeof t && (l = document.querySelectorAll(t)), l ? (this.elements = (c = l, Array.isArray(c) ? c : "object" == typeof c && "number" == typeof c.length ? r.call(c) : [c]), this.options = o({}, this.options), "function" == typeof e ? s = e : o(this.options, e), s && this.on("always", s), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (l || t))
                }
                a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                    this.images = [], this.elements.forEach(this.addElementImages, this)
                }, a.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && s[e]) {
                        for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                            var o = n[i];
                            this.addImage(o)
                        }
                        if ("string" == typeof this.options.background) {
                            var r = t.querySelectorAll(this.options.background);
                            for (i = 0; i < r.length; i++) {
                                var a = r[i];
                                this.addElementBackgroundImages(a)
                            }
                        }
                    }
                };
                var s = {
                    1: !0,
                    9: !0,
                    11: !0
                };

                function c(t) {
                    this.img = t
                }

                function l(t, e) {
                    this.url = t, this.element = e, this.img = new Image
                }
                return a.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                            var o = i && i[2];
                            o && this.addBackground(o, t), i = n.exec(e.backgroundImage)
                        }
                }, a.prototype.addImage = function(t) {
                    var e = new c(t);
                    this.images.push(e)
                }, a.prototype.addBackground = function(t, e) {
                    var n = new l(t, e);
                    this.images.push(n)
                }, a.prototype.check = function() {
                    var t = this;

                    function e(e, n, i) {
                        setTimeout((function() {
                            t.progress(e, n, i)
                        }))
                    }
                    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                        t.once("progress", e), t.check()
                    })) : this.complete()
                }, a.prototype.progress = function(t, e, n) {
                    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, t, e)
                }, a.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }, c.prototype = Object.create(e.prototype), c.prototype.check = function() {
                    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                }, c.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }, c.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                }, c.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, c.prototype.onload = function() {
                    this.confirm(!0, "onload"), this.unbindEvents()
                }, c.prototype.onerror = function() {
                    this.confirm(!1, "onerror"), this.unbindEvents()
                }, c.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, l.prototype = Object.create(c.prototype), l.prototype.check = function() {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                }, l.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, l.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                }, a.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function(t, e) {
                        return new a(this, t, e).jqDeferred.promise(n(this))
                    })
                }, a.makeJQueryPlugin(), a
            }(r, t)
        }.apply(e, i)) || (t.exports = o)
    }("undefined" != typeof window ? window : this)
}, function(t, e, n) {
    var i, o;
    "undefined" != typeof window && window, void 0 === (o = "function" == typeof(i = function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
                    var r = n[o];
                    i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }) ? i.call(e, n, e, t) : i) || (t.exports = o)
}, function(t, e) {
    ! function() {
        var t = window.MutationObserver || window.WebKitMutationObserver,
            e = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        if (void 0 === document.documentElement.style["touch-action"] && !document.documentElement.style["-ms-touch-action"] && e && t) {
            window.Hammer = window.Hammer || {};
            var n = /touch-action[:][\s]*(none)[^;'"]*/,
                i = /touch-action[:][\s]*(manipulation)[^;'"]*/,
                o = /touch-action/,
                r = /(iP(ad|hone|od))/.test(navigator.userAgent) && ("indexedDB" in window || !!window.performance);
            window.Hammer.time = {
                getTouchAction: function(t) {
                    return this.checkStyleString(t.getAttribute("style"))
                },
                checkStyleString: function(t) {
                    if (o.test(t)) return n.test(t) ? "none" : !i.test(t) || "manipulation"
                },
                shouldHammer: function(t) {
                    var e = t.target.hasParent;
                    return !(!e || r && !(Date.now() - t.target.lastStart < 125)) && e
                },
                touchHandler: function(t) {
                    var e = this.shouldHammer(t);
                    if ("none" === e) this.dropHammer(t);
                    else if ("manipulation" === e) {
                        var n = t.target.getBoundingClientRect();
                        n.top === this.pos.top && n.left === this.pos.left && this.dropHammer(t)
                    }
                    this.scrolled = !1, delete t.target.lastStart, delete t.target.hasParent
                },
                dropHammer: function(t) {
                    "touchend" === t.type && (t.target.focus(), setTimeout((function() {
                        t.target.click()
                    }), 0)), t.preventDefault()
                },
                touchStart: function(t) {
                    this.pos = t.target.getBoundingClientRect(), t.target.hasParent = this.hasParent(t.target), r && t.target.hasParent && (t.target.lastStart = Date.now())
                },
                styleWatcher: function(t) {
                    t.forEach(this.styleUpdater, this)
                },
                styleUpdater: function(t) {
                    if (t.target.updateNext) t.target.updateNext = !1;
                    else {
                        var e = this.getTouchAction(t.target);
                        e ? "none" !== e && (t.target.hadTouchNone = !1) : !e && (t.oldValue && this.checkStyleString(t.oldValue) || t.target.hadTouchNone) && (t.target.hadTouchNone = !0, t.target.updateNext = !1, t.target.setAttribute("style", t.target.getAttribute("style") + " touch-action: none;"))
                    }
                },
                hasParent: function(t) {
                    for (var e, n = t; n && n.parentNode; n = n.parentNode)
                        if (e = this.getTouchAction(n)) return e;
                    return !1
                },
                installStartEvents: function() {
                    document.addEventListener("touchstart", this.touchStart.bind(this)), document.addEventListener("mousedown", this.touchStart.bind(this))
                },
                installEndEvents: function() {
                    document.addEventListener("touchend", this.touchHandler.bind(this), !0), document.addEventListener("mouseup", this.touchHandler.bind(this), !0)
                },
                installObserver: function() {
                    this.observer = new t(this.styleWatcher.bind(this)).observe(document, {
                        subtree: !0,
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: ["style"]
                    })
                },
                install: function() {
                    this.installEndEvents(), this.installStartEvents(), this.installObserver()
                }
            }, window.Hammer.time.install()
        }
    }()
}, function(t, e, n) {
    var i, o, r;
    ! function(a) {
        "use strict";
        o = [n(4)], void 0 === (r = "function" == typeof(i = function(t) {
            var e = t.scrollTo = function(e, n, i) {
                return t(window).scrollTo(e, n, i)
            };

            function n(e) {
                return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
            }

            function i(t) {
                return "function" == typeof t
            }

            function o(e) {
                return i(e) || t.isPlainObject(e) ? e : {
                    top: e,
                    left: e
                }
            }
            return e.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, t.fn.scrollTo = function(r, a, s) {
                "object" == typeof a && (s = a, a = 0), "function" == typeof s && (s = {
                    onAfter: s
                }), "max" === r && (r = 9e9), s = t.extend({}, e.defaults, s), a = a || s.duration;
                var c = s.queue && s.axis.length > 1;
                return c && (a /= 2), s.offset = o(s.offset), s.over = o(s.over), this.each((function() {
                    if (null !== r) {
                        var l, u = n(this),
                            d = u ? this.contentWindow || window : this,
                            f = t(d),
                            h = r,
                            p = {};
                        switch (typeof h) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                                    h = o(h);
                                    break
                                }
                                h = u ? t(h) : t(h, d);
                            case "object":
                                if (0 === h.length) return;
                                (h.is || h.style) && (l = (h = t(h)).offset())
                        }
                        var y = i(s.offset) && s.offset(d, h) || s.offset;
                        t.each(s.axis.split(""), (function(t, n) {
                            var i = "x" === n ? "Left" : "Top",
                                o = i.toLowerCase(),
                                r = "scroll" + i,
                                a = f[r](),
                                m = e.max(d, n);
                            if (l) p[r] = l[o] + (u ? 0 : a - f.offset()[o]), s.margin && (p[r] -= parseInt(h.css("margin" + i), 10) || 0, p[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), p[r] += y[o] || 0, s.over[o] && (p[r] += h["x" === n ? "width" : "height"]() * s.over[o]);
                            else {
                                var v = h[o];
                                p[r] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * m : v
                            }
                            s.limit && /^\d+$/.test(p[r]) && (p[r] = p[r] <= 0 ? 0 : Math.min(p[r], m)), !t && s.axis.length > 1 && (a === p[r] ? p = {} : c && (g(s.onAfterFirst), p = {}))
                        })), g(s.onAfter)
                    }

                    function g(e) {
                        var n = t.extend({}, s, {
                            queue: !0,
                            duration: a,
                            complete: e && function() {
                                e.call(d, h, s)
                            }
                        });
                        f.animate(p, n)
                    }
                }))
            }, e.max = function(e, i) {
                var o = "x" === i ? "Width" : "Height",
                    r = "scroll" + o;
                if (!n(e)) return e[r] - t(e)[o.toLowerCase()]();
                var a = "client" + o,
                    s = e.ownerDocument || e.document,
                    c = s.documentElement,
                    l = s.body;
                return Math.max(c[r], l[r]) - Math.min(c[a], l[a])
            }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
                get: function(e) {
                    return t(e.elem)[e.prop]()
                },
                set: function(e) {
                    var n = this.get(e);
                    if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();
                    var i = Math.round(e.now);
                    n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e))
                }
            }, e
        }) ? i.apply(e, o) : i) || (t.exports = r)
    }()
}, function(t, e) {
    ! function() {
        "use strict";
        var t = 0,
            e = {};

        function n(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = n.Adapter.extend({}, n.defaults, i), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
        }
        n.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, n.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, n.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete e[this.key]
        }, n.prototype.disable = function() {
            return this.enabled = !1, this
        }, n.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, n.prototype.next = function() {
            return this.group.next(this)
        }, n.prototype.previous = function() {
            return this.group.previous(this)
        }, n.invokeAll = function(t) {
            var n = [];
            for (var i in e) n.push(e[i]);
            for (var o = 0, r = n.length; o < r; o++) n[o][t]()
        }, n.destroyAll = function() {
            n.invokeAll("destroy")
        }, n.disableAll = function() {
            n.invokeAll("disable")
        }, n.enableAll = function() {
            for (var t in n.Context.refreshAll(), e) e[t].enabled = !0;
            return this
        }, n.refreshAll = function() {
            n.Context.refreshAll()
        }, n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, n.adapters = [], n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = n
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        var e = 0,
            n = {},
            i = window.Waypoint,
            o = window.onload;

        function r(t) {
            this.element = t, this.Adapter = i.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, e += 1, i.windowContext || (i.windowContext = !0, i.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        r.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, r.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
        }, r.prototype.createThrottledResizeHandler = function() {
            var t = this;

            function e() {
                t.handleResize(), t.didResize = !1
            }
            this.adapter.on("resize.waypoints", (function() {
                t.didResize || (t.didResize = !0, i.requestAnimationFrame(e))
            }))
        }, r.prototype.createThrottledScrollHandler = function() {
            var t = this;

            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", (function() {
                t.didScroll && !i.isTouch || (t.didScroll = !0, i.requestAnimationFrame(e))
            }))
        }, r.prototype.handleResize = function() {
            i.Context.refreshAll()
        }, r.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in e) {
                var i = e[n],
                    o = i.newScroll > i.oldScroll ? i.forward : i.backward;
                for (var r in this.waypoints[n]) {
                    var a = this.waypoints[n][r];
                    if (null !== a.triggerPoint) {
                        var s = i.oldScroll < a.triggerPoint,
                            c = i.newScroll >= a.triggerPoint;
                        (s && c || !s && !c) && (a.queueTrigger(o), t[a.group.id] = a.group)
                    }
                }
            }
            for (var l in t) t[l].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, r.prototype.innerHeight = function() {
            return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
        }, r.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, r.prototype.innerWidth = function() {
            return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
        }, r.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
            for (var i = 0, o = t.length; i < o; i++) t[i].destroy()
        }, r.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                n = e ? void 0 : this.adapter.offset(),
                o = {};
            for (var r in this.handleScroll(), t = {
                    horizontal: {
                        contextOffset: e ? 0 : n.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: e ? 0 : n.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var a = t[r];
                for (var s in this.waypoints[r]) {
                    var c, l, u, d, f = this.waypoints[r][s],
                        h = f.options.offset,
                        p = f.triggerPoint,
                        y = 0,
                        g = null == p;
                    f.element !== f.element.window && (y = f.adapter.offset()[a.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(a.contextDimension * h / 100))), c = a.contextScroll - a.contextOffset, f.triggerPoint = Math.floor(y + c - h), l = p < a.oldScroll, u = f.triggerPoint >= a.oldScroll, d = !l && !u, !g && l && u ? (f.queueTrigger(a.backward), o[f.group.id] = f.group) : (!g && d || g && a.oldScroll >= f.triggerPoint) && (f.queueTrigger(a.forward), o[f.group.id] = f.group)
                }
            }
            return i.requestAnimationFrame((function() {
                for (var t in o) o[t].flushTriggers()
            })), this
        }, r.findOrCreateByElement = function(t) {
            return r.findByElement(t) || new r(t)
        }, r.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, r.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            o && o(), r.refreshAll()
        }, i.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, i.Context = r
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            i = window.Waypoint;

        function o(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        o.prototype.add = function(t) {
            this.waypoints.push(t)
        }, o.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, o.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    o = "up" === n || "left" === n;
                i.sort(o ? e : t);
                for (var r = 0, a = i.length; r < a; r += 1) {
                    var s = i[r];
                    (s.options.continuous || r === i.length - 1) && s.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, o.prototype.next = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
        }, o.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, o.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, o.prototype.remove = function(t) {
            var e = i.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, o.prototype.first = function() {
            return this.waypoints[0]
        }, o.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, o.findOrCreate = function(t) {
            return n[t.axis][t.name] || new o(t)
        }, i.Group = o
    }(),
    function() {
        "use strict";
        var t = window.jQuery,
            e = window.Waypoint;

        function n(e) {
            this.$element = t(e)
        }
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(t, e) {
            n.prototype[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        })), t.each(["extend", "inArray", "isEmptyObject"], (function(e, i) {
            n[i] = t[i]
        })), e.adapters.push({
            name: "jquery",
            Adapter: n
        }), e.Adapter = n
    }(),
    function() {
        "use strict";
        var t = window.Waypoint;

        function e(e) {
            return function() {
                var n = [],
                    i = arguments[0];
                return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]), this.each((function() {
                    var o = e.extend({}, i, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), n.push(new t(o))
                })), n
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }()
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e = n(7),
            i = n.n(e);
        t.Flatsome = {
            behaviors: {},
            plugin: function(t, e, n) {
                n = n || {}, jQuery.fn[t] = function(o) {
                    if ("string" == typeof arguments[0]) {
                        var r = null,
                            a = arguments[0],
                            s = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            if (!jQuery.data(this, "plugin_" + t) || "function" != typeof jQuery.data(this, "plugin_" + t)[a]) throw new Error("Method " + a + " does not exist on jQuery." + t);
                            r = jQuery.data(this, "plugin_" + t)[a].apply(this, s)
                        })), "destroy" === a && this.each((function() {
                            jQuery(this).removeData("plugin_" + t)
                        })), void 0 !== r ? r : this
                    }
                    if ("object" === i()(o) || !o) return this.each((function() {
                        jQuery.data(this, "plugin_" + t) || (o = jQuery.extend({}, n, o), jQuery.data(this, "plugin_" + t, new e(this, o)))
                    }))
                }
            },
            behavior: function(t, e) {
                this.behaviors[t] = e, e.arrive && jQuery(document).arrive(e.arrive.selector, e.arrive.handler || function() {
                    Flatsome.attach(t, this.parentNode)
                })
            },
            attach: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t) return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].attach ? this.behaviors[t].attach(e || document) : null;
                for (var n in this.behaviors) "function" == typeof this.behaviors[n].attach && this.behaviors[n].attach(e || document)
            },
            detach: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t) return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].detach ? this.behaviors[t].detach(e || document) : null;
                for (var n in this.behaviors) "function" == typeof this.behaviors[n].detach && this.behaviors[n].detach(e || document)
            }
        }
    }).call(this, n(2))
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = jQuery("#wrapper"),
        r = jQuery("#header"),
        a = jQuery(".header-top", r),
        s = jQuery("#wpadminbar"),
        c = s.length && s.is(":visible") ? s.height() : 0,
        l = r.hasClass("has-sticky"),
        u = r.hasClass("sticky-hide-on-scroll"),
        d = -jQuery(".header-wrapper").height() - 100,
        f = a.hasClass("hide-for-sticky") ? -a.height() - 1 : -1;
    if (jQuery(".sticky-shrink .header-wrapper").length) {
        var h = a.hasClass("hide-for-sticky") ? a.height() : 0;
        d = -1 - h + c, f = -1 - h
    }
    if (l && (r.find(".header-wrapper").waypoint((function(t) {
            var e = jQuery(this.element),
                n = r.height();
            "down" === t && (jQuery(document).trigger("flatsome-header-sticky"), e.addClass("stuck"), r.height(n), jQuery(".has-transparent").removeClass("transparent"), jQuery(".toggle-nav-dark").removeClass("nav-dark"))
        }), {
            offset: d
        }), o.waypoint((function(t) {
            Object(i.c)() || "up" === t && (r.height(""), jQuery(".header-wrapper").removeClass("stuck"), jQuery(".has-transparent").addClass("transparent"), jQuery(".toggle-nav-dark").addClass("nav-dark"))
        }), {
            offset: f + c
        }), u)) {
        var p, y = 0;
        jQuery(window).on("scroll", (function() {
            if (!Object(i.c)()) {
                clearTimeout(p);
                var t = jQuery(window).scrollTop(),
                    e = jQuery(".header-wrapper");
                t >= e.outerHeight() && (t <= y ? (e.addClass("stuck"), r.removeClass("sticky-hide-on-scroll--active")) : (e.removeClass("stuck"), r.addClass("sticky-hide-on-scroll--active"))), p = setTimeout((function() {
                    y = jQuery(window).scrollTop()
                }), 100)
            }
        }))
    }
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = [];

    function o() {
        for (var t = 0; t < i.length; t++) i[t].element.offsetParent ? r(i[t]) : i.splice(t, 1)
    }

    function r(t) {
        ! function(t) {
            var e = t.element,
                n = t.type,
                i = u(e.dataset.parallax),
                o = c(e),
                r = (window.innerHeight - o.offsetHeight) * i;
            switch (n) {
                case "backgroundImage":
                    e.style.backgroundSize = i ? "100% auto" : null;
                    break;
                case "backgroundElement":
                    e.style.height = i ? "".concat(o.offsetHeight + r, "px") : null
            }
        }(t),
        function(t) {
            var e, n = t.element,
                i = t.type,
                o = u(n.dataset.parallax || n.dataset.parallaxBackground),
                r = window.innerHeight,
                a = c(n),
                l = n.offsetHeight - a.offsetHeight,
                d = n.getBoundingClientRect(),
                f = a !== n ? a.getBoundingClientRect() : d,
                h = d.top + n.offsetHeight / 2,
                p = r / 2 - h,
                y = r / 2 - (f.top + a.offsetHeight / 2),
                g = h + s() < r / 2 ? s() : p,
                m = (Math.abs(p), Math.abs(g) / (r / 2)),
                v = 0;
            if (!(f.top > r || f.top + a.offsetHeight < 0)) switch (i) {
                case "backgroundImage":
                    v = f.top * o, n.style.backgroundPosition = o ? "50% ".concat(v.toFixed(0), "px") : null, n.style.backgroundAttachment = o ? "fixed" : null;
                    break;
                case "backgroundElement":
                    v = y * o - l / 2, n.style.transform = o ? "translate3d(0, ".concat(v.toFixed(2), "px, 0)") : null, n.style.backfaceVisibility = o ? "hidden" : null;
                    break;
                case "element":
                    v = g * o, n.style.transform = o ? "translate3d(0, ".concat(v.toFixed(2), "px, 0)") : null, n.style.backfaceVisibility = o ? "hidden" : null, void 0 !== n.dataset.parallaxFade && (n.style.opacity = o ? (e = 1 - m, e * (2 - e)).toFixed(2) : null)
            }
        }(t)
    }

    function a(t) {
        return void 0 !== t.dataset.parallaxBackground ? "backgroundElement" : void 0 !== t.dataset.parallaxElemenet ? "element" : "" !== t.style.backgroundImage ? "backgroundImage" : "element"
    }

    function s() {
        return document.documentElement.scrollTop || document.body.scrollTop
    }

    function c(t) {
        return function(t) {
            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; t && !l(t).call(t, e);) t = t.parentElement;
            return t
        }(t, t.dataset.parallaxContainer || "[data-parallax-container]") || t
    }

    function l(t) {
        return t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
    }

    function u(t) {
        return t / 10 * -1 / (2 - Math.abs(t) / 10)
    }
    window.addEventListener("scroll", (function() {
        return window.requestAnimationFrame(o)
    })), window.addEventListener("resize", (function() {
        return window.requestAnimationFrame(o)
    })), window.addEventListener("DOMNodeInserted", (function() {
        return window.requestAnimationFrame(o)
    })), window.jQuery && (window.jQuery.fn.flatsomeParallax = function(t) {
        "destroy" !== t && this.each((function(t, e) {
            return function(t) {
                t.classList.add("parallax-active"), !document.querySelector("body").classList.contains("parallax-mobile") && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || t.classList && t.dataset && (i.push({
                    element: t,
                    type: a(t)
                }), r(i[i.length - 1]))
            }(e)
        }))
    })
}, function(t, e) {
    Flatsome.plugin("resizeselect", (function(t, e) {
        jQuery(t).change((function() {
            var t = jQuery(this),
                e = t.find("option:selected").val(),
                n = t.find("option:selected").text(),
                i = jQuery('<span class="select-resize-ghost">').html(n);
            i.appendTo(t.parent());
            var o = i.width();
            i.remove(), t.width(o + 7), e && t.parent().parent().find("input.search-field").focus()
        })).change()
    }))
}, function(t, e, n) {
    "use strict";
    var i = n(3);

    function o() {
        return console.warn("Flatsome: Flickity is lazy loaded. Use 'lazyFlickity()' to instantiate and 'flatsome-flickity-ready' event to interact with Flickity instead."), this
    }
    jQuery.fn.flickity || (jQuery.fn.flickity = o), jQuery.fn.lazyFlickity = function(t) {
        var e = Object(i.a)((function(i) {
            if (i.isIntersecting) {
                if (e.unobserve(i.target), !jQuery.fn.flickity || jQuery.fn.flickity === o) return n.e(5).then(n.t.bind(null, 54, 7)).then((function() {
                    jQuery(i.target).flickity(t), jQuery(i.target).trigger("flatsome-flickity-ready")
                }));
                jQuery(i.target).flickity(t), jQuery(i.target).trigger("flatsome-flickity-ready")
            }
        }));
        return this.each((function(n, i) {
            "string" == typeof t ? jQuery.fn.flickity && jQuery(i).flickity(t) : e.observe(i)
        }))
    }
}, function(t, e, n) {
    jQuery.fn.lazyTooltipster = function(t) {
        return this.each((function(e, i) {
            var o = jQuery(i);
            "string" == typeof t ? jQuery.fn.tooltipster && o.hasClass("tooltipstered") && o.tooltipster(t) : o.one("mouseenter", (function(e) {
                ! function(t, e) {
                    (jQuery.fn.tooltipster ? Promise.resolve() : n.e(3).then(n.t.bind(null, 55, 7))).then((function() {
                        t.hasClass("tooltipstered") || t.tooltipster(e), t.tooltipster("show")
                    }))
                }(o, t)
            }))
        }))
    }
}, function(t, e) {
    jQuery(".section .loading-spin, .banner .loading-spin, .page-loader").fadeOut(), jQuery("#top-link").on("click", (function(t) {
        jQuery.scrollTo(0, 300), t.preventDefault()
    })), jQuery(".scroll-for-more").on("click", (function() {
        jQuery.scrollTo(jQuery(this), {
            duration: 300
        })
    })), jQuery(".search-dropdown button").on("click", (function(t) {
        jQuery(this).parent().find("input").trigger("focus"), t.preventDefault()
    })), jQuery(".current-cat").addClass("active"), jQuery("html").removeClass("loading-site"), setTimeout((function() {
        jQuery(".page-loader").remove()
    }), 1e3), jQuery(".resize-select").resizeselect(), flatsomeVars.user.can_edit_pages && jQuery(".block-edit-link").each((function() {
        var t = jQuery(this),
            e = t.data("link"),
            n = t.data("backend"),
            i = t.data("title"),
            o = t.parents('[id^="menu-item-"]');
        if (o.length && o.hasClass("menu-item-has-block")) {
            var r = o.attr("id").match(/menu-item-(\d+)/);
            r && r[1] && (e += "&menu_id=".concat(r[1]))
        }
        jQuery(this).next().addClass("has-block").lazyTooltipster({
            animationDuration: 100,
            distance: -15,
            delay: 0,
            repositionOnScroll: !0,
            interactive: !0,
            contentAsHTML: !0,
            content: i + ' <br/> <a class="button edit-block-button edit-block-button-builder" href="' + e + '">UX Builder</a> <a class="button edit-block-button edit-block-button edit-block-button-backend" href="' + n + '">WP Editor</a>'
        }), jQuery(this).remove()
    })), document.addEventListener("uxb_app_ready", (function() {
        var t = new URLSearchParams(window.top.location.search),
            e = parseInt(t.get("menu_id"));
        e && setTimeout((function() {
            var t = jQuery("#menu-item-".concat(e)),
                n = t.parent().hasClass("ux-nav-vertical-menu");
            t.hasClass("menu-item-has-block has-dropdown") && !t.hasClass("current-dropdown") && (n && jQuery(".header-vertical-menu__fly-out").addClass("header-vertical-menu__fly-out--open"), jQuery("#menu-item-".concat(e, " a:first")).trigger("click"))
        }), 1e3)
    })), jQuery("#hotspot").on("click", (function(t) {
        t.preventDefault()
    })), jQuery(".wpcf7-form .wpcf7-submit").on("click", (function(t) {
        jQuery(this).parent().parent().addClass("processing")
    })), jQuery(".wpcf7").on("wpcf7invalid wpcf7spam wpcf7mailsent wpcf7mailfailed", (function(t) {
        jQuery(".processing").removeClass("processing")
    })), jQuery(document).ajaxComplete((function(t, e, n) {
        jQuery(".processing").removeClass("processing")
    }))
}, function(t, e) {
    Flatsome.behavior("animate", {
        attach: function(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                var n = jQuery(e);
                if (0 === n.data("animate").length) return n.attr("data-animated", "true");
                n.waypoint((function(t) {
                    if ("down" === t) {
                        if ("true" == n.data("animated")) return;
                        setTimeout((function() {
                            n.attr("data-animated", "true")
                        }), 300)
                    }
                }), {
                    offset: "101%"
                })
            }))
        },
        detach: function(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                jQuery(e).attr("data-animated", "false")
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("commons", {
        attach: function(t) {
            jQuery("select.resizeselect").resizeselect(), jQuery("[data-parallax]", t).flatsomeParallax(), jQuery.fn.packery && (jQuery("[data-packery-options], .has-packery", t).each((function() {
                var t = jQuery(this);
                t.packery({
                    originLeft: !flatsomeVars.rtl
                }), setTimeout((function() {
                    t.imagesLoaded((function() {
                        t.packery("layout")
                    }))
                }), 100)
            })), jQuery(".banner-grid-wrapper").imagesLoaded((function() {
                jQuery(this.elements).removeClass("processing")
            }))), "objectFitPolyfill" in window && window.objectFitPolyfill()
        },
        detach: function(t) {}
    })
}, function(t, e, n) {
    Flatsome.behavior("count-up", {
        attach: function(t) {
            jQuery("span.count-up", t).each((function(t, e) {
                var i = jQuery(e);
                i.waypoint({
                    handler: function(t) {
                        jQuery(this.element).hasClass("active") || n.e(0).then(n.bind(null, 56)).then((function(t) {
                            var e = t.CountUp,
                                n = parseInt(i.text());
                            new e(i.get(0), n, {
                                decimalPlaces: 0,
                                duration: 4
                            }).start(), i.addClass("active")
                        }))
                    },
                    offset: "100%"
                })
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e = n(8),
            i = n.n(e);

        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    i()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function a(e) {
            e.addClass("current-dropdown"),
                function(e) {
                    var n = e,
                        i = n.closest(".container").width(),
                        o = n.closest("li.menu-item"),
                        a = o.hasClass("menu-item-design-full-width"),
                        s = o.hasClass("menu-item-design-container-width"),
                        c = o.parent().hasClass("ux-nav-vertical-menu"),
                        l = !a && !s,
                        u = t.flatsomeVars.rtl;
                    if (l && !c) {
                        if (i < 750) return !1;
                        var d = n.outerWidth(),
                            f = n.offset(),
                            h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            p = f.left - (h - i) / 2;
                        u && (p = jQuery(window).width() - (f.left + d) - (h - i) / 2);
                        var y = n.width(),
                            g = i - (p + y),
                            m = !1;
                        p > g && p < y && (m = (p + g) / 3), g < 0 && (m = -g), m && u ? n.css("margin-right", -m) : m && n.css("margin-left", -m), y > i && n.addClass("nav-dropdown-full")
                    }
                    if (s) {
                        n.css({
                            inset: 0
                        });
                        var v = n.closest(".container").get(0).getBoundingClientRect(),
                            b = n.get(0).getBoundingClientRect();
                        n.css(r(r({
                            width: i
                        }, u && {
                            right: 15 - (v.right - b.right)
                        }), !u && {
                            left: v.left - b.left + 15
                        }))
                    }
                    if (a) {
                        n.css({
                            inset: 0
                        });
                        var w = document.body,
                            j = w.getBoundingClientRect(),
                            k = n.get(0).getBoundingClientRect(),
                            Q = w.clientWidth;
                        n.css(r(r({
                            width: Q
                        }, u && {
                            right: -(j.right - k.right)
                        }), !u && {
                            left: j.left - k.left
                        }))
                    }
                    if (s || a) {
                        var x = null;
                        if (o.closest("#top-bar").length && (x = document.querySelector("#top-bar")), o.closest("#masthead").length && (x = document.querySelector("#masthead")), o.closest("#wide-nav").length && (x = document.querySelector("#wide-nav")), null !== x) {
                            var C = x.getBoundingClientRect(),
                                P = o.get(0).getBoundingClientRect();
                            n.css({
                                top: C.bottom - P.bottom + P.height
                            })
                        }
                    }
                }(e.find(".nav-dropdown"))
        }

        function s(t) {
            t.removeClass("current-dropdown"), t.find(".nav-dropdown").attr("style", "")
        }

        function c(t) {
            t.each((function(t, e) {
                var n = jQuery(e);
                n.hasClass("current-dropdown") && s(n)
            }))
        }

        function l(t, e) {
            t.length && t.removeClass("ux-body-overlay--".concat(e, "-active"))
        }
        Flatsome.behavior("dropdown", {
            attach: function(t) {
                var e = jQuery(".nav li.has-dropdown", t),
                    n = "uxBuilder" === jQuery("html").attr("ng-app"),
                    i = jQuery(".ux-body-overlay"),
                    o = "ontouchstart" in window,
                    r = !1,
                    u = null;
                e.each((function(t, d) {
                    var f = jQuery(d),
                        h = f.hasClass("nav-dropdown-toggle") && !o,
                        p = !1,
                        y = !1;
                    f.on("touchstart click", (function(t) {
                        "touchstart" === t.type && (p = !0), "click" === t.type && p && (p && !y && t.preventDefault(), y = !0)
                    })), n || h ? (r = !0, f.on("click", "a:first", (function(t) {
                        if (t.preventDefault(), u = f, f.hasClass("current-dropdown")) return s(f), void l(i, "click");
                        c(e), a(f),
                            function(t, e) {
                                t.length && t.addClass("ux-body-overlay--".concat("click", "-active"))
                            }(i), jQuery(document).trigger("flatsome-dropdown-opened", [f])
                    }))) : f.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over: function(t) {
                            c(e), a(f), l(i, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [f])
                        },
                        out: function() {
                            y = !1, p = !1, s(f)
                        }
                    })
                })), !n && r && jQuery(document).on("click", (function(t) {
                    null === u || u === t.target || u.has(t.target).length || (s(u), l(i, "click"))
                })), jQuery(document).on("flatsome-dropdown-opened", (function(t, e) {
                    e.hasClass("menu-item-has-block") && jQuery.fn.packery && e.find("[data-packery-options]").packery("layout")
                })), jQuery(document).on("flatsome-header-sticky", (function() {
                    c(e), l(i, "click")
                }))
            }
        })
    }).call(this, n(2))
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-gallery", {
        attach: function(t) {
            var e = {
                delegate: "a",
                type: "image",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    verticalFit: !1
                },
                callbacks: {
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    }
                }
            };
            jQuery('.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox a.lightbox-gallery', t).parent().lazyMagnificPopup(e), jQuery(".lightbox .lightbox-multi-gallery", t).length && jQuery(".lightbox-multi-gallery", t).each((function() {
                jQuery(this).lazyMagnificPopup(e)
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-image", {
        attach: function(t) {
            jQuery(['.lightbox *[id^="attachment"] a[href*=".jpg"]', '.lightbox *[id^="attachment"] a[href*=".jpeg"]', '.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])', ".lightbox a.image-lightbox", '.lightbox .entry-content a[href*=".jpg"]', '.lightbox .entry-content a[href*=".jpeg"]'].join(","), t).not([".lightbox a.lightbox-gallery", '.lightbox .gallery a[href*=".jpg"]', '.lightbox .gallery a[href*=".jpeg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpeg"]'].join(",")).lazyMagnificPopup({
                type: "image",
                tLoading: '<div class="loading-spin centered dark"></div>',
                closeOnContentClick: !0,
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                removalDelay: 300,
                image: {
                    verticalFit: !1
                },
                callbacks: {
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    }
                }
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(0);
    Flatsome.behavior("lightboxes-link", {
        attach: function(t) {
            jQuery(".lightbox-by-id", t).each((function() {
                var e = jQuery(this).attr("id");
                jQuery('a[href="#' + e + '"]', t).on("click", (function(t) {
                    t.preventDefault();
                    var e = jQuery(t.currentTarget);
                    Object(i.a)().then((function() {
                        var t = e.attr("href").substring(1),
                            n = jQuery("#".concat(t, ".lightbox-by-id"));
                        if (t && n.length > 0) {
                            var i = n[0],
                                r = jQuery.magnificPopup.open ? 300 : 0;
                            r && jQuery.magnificPopup.close(), setTimeout((function() {
                                jQuery.magnificPopup.open({
                                    removalDelay: 300,
                                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                    closeMarkup: flatsomeVars.lightbox.close_markup,
                                    items: {
                                        src: i,
                                        type: "inline",
                                        tLoading: '<div class="loading-spin dark"></div>'
                                    },
                                    callbacks: {
                                        beforeOpen: function() {
                                            Object(o.a)()
                                        },
                                        open: function() {
                                            if (Flatsome.attach(this.content), jQuery.fn.flickity && jQuery("[data-flickity-options].flickity-enabled", this.content).each((function(t, e) {
                                                    jQuery(e).flickity("resize")
                                                })), jQuery.fn.packery) {
                                                var t = jQuery("[data-packery-options]", this.content);
                                                t && t.imagesLoaded((function() {
                                                    t.packery("layout")
                                                }))
                                            }
                                        },
                                        beforeClose: function() {
                                            Object(o.b)()
                                        }
                                    }
                                })
                            }), r)
                        }
                    }))
                }))
            }))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    Flatsome.behavior("lightbox-video", {
        attach: function(t) {
            jQuery('a.open-video, a.button[href*="vimeo"], a.button[href*="youtube.com/watch"]', t).lazyMagnificPopup({
                type: "iframe",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                mainClass: "my-mfp-video",
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                preloader: !0,
                callbacks: {
                    beforeOpen: function() {
                        Object(i.a)()
                    },
                    open: function() {
                        jQuery(".slider .is-selected .video").trigger("pause")
                    },
                    beforeClose: function() {
                        Object(i.b)()
                    },
                    close: function() {
                        jQuery(".slider .is-selected .video").trigger("play")
                    }
                }
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        o = n(0);
    Flatsome.behavior("lightboxes", {
        attach: function(t) {
            jQuery("[data-open]", t).on("click", (function(t) {
                t.preventDefault();
                var e = jQuery(t.currentTarget);
                Object(i.a)().then((function() {
                    var t = e.data("open"),
                        n = e.data("color"),
                        i = e.data("bg"),
                        r = e.data("pos"),
                        a = e.data("visible-after"),
                        s = e.data("class"),
                        c = e.attr("data-focus");
                    e.offset(), e.addClass("current-lightbox-clicked"), jQuery.magnificPopup.open({
                        items: {
                            src: t,
                            type: "inline",
                            tLoading: '<div class="loading-spin dark"></div>'
                        },
                        removalDelay: 300,
                        closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                        closeMarkup: flatsomeVars.lightbox.close_markup,
                        focus: c,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.mainClass = "off-canvas ".concat(n, " off-canvas-").concat(r), Object(o.a)()
                            },
                            open: function() {
                                jQuery("html").addClass("has-off-canvas"), jQuery("html").addClass("has-off-canvas-" + r), s && jQuery(".mfp-content").addClass(s), i && jQuery(".mfp-bg").addClass(i), jQuery(".mfp-content .resize-select").change(), jQuery.fn.packery && jQuery("[data-packery-options], .has-packery").packery("layout")
                            },
                            beforeClose: function() {
                                jQuery("html").removeClass("has-off-canvas"), Object(o.b)()
                            },
                            afterClose: function() {
                                jQuery("html").removeClass("has-off-canvas-" + r), jQuery(".current-lightbox-clicked").removeClass("current-lightbox-clicked"), a && jQuery(t).removeClass("mfp-hide")
                            }
                        }
                    })
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("slider", {
        attach: function(t) {
            var e;
            (e = jQuery(t).data("flickityOptions") ? jQuery(t) : jQuery("[data-flickity-options]", t)).length && e.each((function(t, e) {
                var n = jQuery(e),
                    i = n.closest(".slider-wrapper"),
                    o = n.data("flickity-options");
                "undefined" != typeof UxBuilder && (o.draggable = !1), !0 !== o.watchCSS && (n.on("flatsome-flickity-ready", (function() {
                    n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play"), "requestAnimationFrame" in window && (n.removeClass("flickity-enabled"), window.requestAnimationFrame((function() {
                        n.addClass("flickity-enabled")
                    })));
                    var t = n.data("flickity");
                    if (t && o.parallax) {
                        var e = n.find(".bg, .flickity-slider > .img img");
                        n.addClass("slider-has-parallax"), n.on("scroll.flickity", (function(n, i) {
                            t.slides.forEach((function(n, i) {
                                var r = e[i],
                                    a = -1 * (n.target + t.x) / o.parallax;
                                r && (r.style.transform = "translateX( " + a + "px)")
                            }))
                        }))
                    }
                })), n.lazyFlickity(o), n.imagesLoaded((function() {
                    i.find(".loading-spin").fadeOut()
                })), n.on("change.flickity", (function() {
                    n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play")
                })), n.on("dragStart.flickity", (function() {
                    document.ontouchmove = function(t) {
                        return t.preventDefault()
                    }, n.addClass("is-dragging")
                })), n.on("dragEnd.flickity", (function() {
                    document.ontouchmove = function() {
                        return !0
                    }, n.removeClass("is-dragging")
                })))
            }))
        },
        detach: function(t) {
            jQuery.fn.flickity && (jQuery(t).data("flickityOptions") ? jQuery(t).flickity("destroy") : jQuery("[data-flickity-options]", t).flickity("destroy"))
        }
    })
}, function(t, e) {
    function n(t, e, n) {
        e.each((function(e, n) {
            return jQuery(n).toggleClass("active", e === t)
        })), n.each((function(e, n) {
            return jQuery(n).toggleClass("active", e === t)
        })), jQuery.fn.packery && jQuery("[data-packery-options]", n[t]).packery("layout")
    }
    Flatsome.behavior("tabs", {
        attach: function(t) {
            var e = window.location.hash;
            jQuery(".tabbed-content", t).each((function(t, i) {
                var o = jQuery(i),
                    r = o.find("> .nav > li"),
                    a = o.find("> .tab-panels > .panel"),
                    s = o.find("> .nav").hasClass("active-on-hover");
                a.removeAttr("style"), r.each((function(t, i) {
                    var o = jQuery(i).find("a");
                    o.on("click", (function(e) {
                        n(t, r, a), e.preventDefault(), e.stopPropagation()
                    })), s && o.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over: function(e) {
                            n(t, r, a)
                        },
                        out: function() {}
                    }), e.substr(1).length && e.substr(1) === o.attr("href").split("#")[1] && n(t, r, a)
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("toggle", {
        attach: function(t) {
            function e(t) {
                var e = jQuery(t.currentTarget).parent();
                e.toggleClass("active"), e.attr("aria-expanded", "false" === e.attr("aria-expanded") ? "true" : "false"), t.preventDefault()
            }
            jQuery([".widget ul.children", ".nav ul.children", ".menu .sub-menu", ".mobile-sidebar-levels-2 .nav ul.children > li > ul"].join(", "), t).each((function() {
                var t = jQuery(this).parents(".nav-slide").length ? "right" : "down";
                jQuery(this).parent().addClass("has-child").attr("aria-expanded", "false"), jQuery(this).before('<button class="toggle"><i class="icon-angle-'.concat(t, '"></i></button>'))
            })), jQuery(".current-cat-parent", t).addClass("active").attr("aria-expanded", "true").removeClass("current-cat-parent"), jQuery(".toggle", t).on("click", e);
            var n = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".sidebar-menu li.menu-item.has-child", t).each((function() {
                var t = jQuery(this),
                    i = t.find("> a:first");
                "#" === i.attr("href") ? i.on("click", (function(e) {
                    e.preventDefault(), t.toggleClass("active"), t.attr("aria-expanded", "false" === t.attr("aria-expanded") ? "true" : "false")
                })) : n && i.next(".toggle").length && i.on("click", e)
            }))
        }
    })
}, function(t, e) {
    function n(t) {
        t.attr("aria-hidden", "true"), t.find("> li > a, > li > button").attr("tabindex", "-1")
    }
    Flatsome.behavior("sidebar-slider", {
        attach: function(t) {
            var e = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".mobile-sidebar-slide", t).each((function(t, i) {
                var o = parseInt(jQuery(i).data("levels"), 10) || 1,
                    r = jQuery(".sidebar-menu", i),
                    a = jQuery(".nav-sidebar", i);
                jQuery(["> li > ul.children", "> li > .sub-menu", o > 1 ? "> li > ul.children > li > ul" : null].filter(Boolean).join(", "), a).each((function(t, i) {
                    var o = jQuery(i),
                        a = o.parent(),
                        s = a.parents("ul:first"),
                        c = jQuery(["> .toggle", '> a[href="#"]', e && "> a"].filter(Boolean).join(","), a),
                        l = a.find("> a").text().trim(),
                        u = o.parents("ul").length,
                        d = Boolean(window.flatsomeVars.rtl),
                        f = jQuery('\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                '.concat(l || window.flatsomeVars.i18n.mainMenu, "\n              </button>\n            </li>\n          "));
                    o.prepend(f), n(o);
                    var h = null;
                    c.off("click").on("click", (function(t) {
                        var e;
                        a.attr("aria-expanded", "true"), s.addClass("is-current-parent"), o.addClass("is-current-slide"), r.css("transform", "translateX(".concat(d ? "" : "-").concat(100 * u, "%)")), (e = o).attr("aria-hidden", "false"), e.find("> li > a, > li > button").attr("tabindex", ""), clearTimeout(h), t.preventDefault()
                    })), f.find(".toggle").on("click", (function() {
                        r.css("transform", "translateX(".concat(d ? "" : "-").concat(100 * (u - 1), "%)")), n(o), h = setTimeout((function() {
                            o.removeClass("is-current-slide"), s.removeClass("is-current-parent")
                        }), 300), a.removeClass("active"), a.attr("aria-expanded", "false")
                    }))
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("sidebar-tabs", {
        attach: function(t) {
            jQuery(".sidebar-menu-tabs", t).each((function(t, e) {
                var n = jQuery(e),
                    i = n.find(".sidebar-menu-tabs__tab"),
                    o = n.parent().find("ul.nav-sidebar");
                i.each((function(t, e) {
                    jQuery(e).on("click", (function(e) {
                        ! function(t, e, n) {
                            e.each((function(e, n) {
                                return jQuery(n).toggleClass("active", e === t)
                            })), n.each((function(e, n) {
                                return jQuery(n).toggleClass("hidden", e === t)
                            }))
                        }(t, i, o), e.preventDefault(), e.stopPropagation()
                    }))
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("nav-hover", {
        attach: function(t) {
            var e = jQuery(".ux-body-overlay", t);
            e.length && jQuery([".nav-prompts-overlay li.menu-item", ".nav-prompts-overlay .header-vertical-menu__opener"].join(", "), t).on({
                mouseenter: function() {
                    e.addClass("ux-body-overlay--hover-active")
                },
                mouseleave: function() {
                    e.removeClass("ux-body-overlay--hover-active")
                }
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("back-to-top", {
        attach: function(t) {
            jQuery("body", t).waypoint({
                handler: function(e) {
                    jQuery(".back-to-top", t).toggleClass("active")
                },
                offset: "-100%"
            })
        }
    })
}, function(t, e) {
    Flatsome.behavior("scroll-to", {
        attach: function() {
            var t = jQuery("span.scroll-to"),
                e = jQuery(".scroll-to-bullets"),
                n = flatsomeVars.sticky_height;
            if (e.length && (e.children().lazyTooltipster("destroy"), e.remove()), jQuery("li.scroll-to-link").remove(), t.length && (e = jQuery('<div class="scroll-to-bullets hide-for-medium"/>'), jQuery("body").append(e), t.each((function(t, e) {
                    var i = jQuery(e),
                        o = i.data("link"),
                        r = i.data("title"),
                        a = i.data("bullet"),
                        s = 'a[href*="'.concat(o || "<nolink>", '"]');
                    if (a) {
                        var c = jQuery('\n          <a href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          <strong></strong>\n          </a>\n        '));
                        c.lazyTooltipster({
                            position: "left",
                            delay: 50,
                            contentAsHTML: !0,
                            touchDevices: !1
                        }), jQuery(".scroll-to-bullets").append(c)
                    }
                    var l = jQuery('\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          ').concat(r, "\n          </a></li>\n        "));
                    jQuery("li.nav-single-page").before(l), setTimeout((function() {
                        jQuery(".scroll-to-link a").attr("data-animated", "true")
                    }), 300), i.waypoint((function(t) {
                        jQuery(".scroll-to-bullets a, .scroll-to-link").removeClass("active"), jQuery(".scroll-to-bullets").find(s).addClass("active"), jQuery(".nav-single-page").parent().find(s).parent().addClass("active"), "up" === t && jQuery(".scroll-to-bullets, .nav-single-page").find(s).removeClass("active").prev().addClass("active")
                    }), {
                        offset: n
                    }), jQuery(s).off("click").on("click", (function(t) {
                        var e = jQuery(this).attr("href").split("#")[1];
                        e && (setTimeout((function() {
                            jQuery.scrollTo("a[name=" + e + "]", {
                                duration: 500,
                                axis: "y",
                                offset: -n
                            })
                        }), 0), jQuery.fn.magnificPopup && jQuery.magnificPopup.close(), t.preventDefault())
                    }))
                })), location.hash)) {
                var i = location.hash.replace("#", "");
                jQuery.scrollTo("a[name=" + i + "]", {
                    duration: 500,
                    axis: "y",
                    offset: -n
                })
            }
        },
        detach: function() {
            jQuery("span.scroll-to").length && setTimeout(this.attach, 0)
        }
    })
}, function(t, e) {
    Flatsome.behavior("accordion", {
        attach: function(t) {
            jQuery(".accordion", t).each((function() {
                var t = jQuery(this).attr("rel");
                if (t > 0) {
                    var e = jQuery(this).find(".accordion-item:nth-child(" + t + ") .accordion-inner");
                    e.show(), e.prev().addClass("active"), jQuery.fn.packery && e.find("[data-packery-options]").packery("layout")
                }
            }))
        }
    }), Flatsome.behavior("accordion-title", {
        attach: function(t) {
            jQuery(".accordion-title", t).each((function() {
                jQuery(this).off("click.flatsome").on("click.flatsome", (function(t) {
                    var e = this;
                    jQuery(this).next().is(":hidden") ? (jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200), jQuery(this).toggleClass("active").next().slideDown(200, (function() {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && jQuery.scrollTo(jQuery(this).prev(), {
                            duration: 300,
                            offset: -100
                        })
                    })), window.requestAnimationFrame((function() {
                        jQuery.fn.flickity && jQuery(e).next().find("[data-flickity-options].flickity-enabled").each((function(t, e) {
                            jQuery(e).flickity("resize")
                        })), jQuery.fn.packery && jQuery(e).next().find("[data-packery-options]").packery("layout")
                    }))) : jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200), t.preventDefault()
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("tooltips", {
        attach: function(t) {
            jQuery(".tooltip, .has-tooltip, .tip-top, li.chosen a", t).lazyTooltipster(), jQuery(".tooltip-as-html", t).lazyTooltipster({
                interactive: !0,
                contentAsHTML: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(3);
    Flatsome.behavior("lazy-load-bg", {
        attach: function(t) {
            var e = Object(i.a)((function(t) {
                t.intersectionRatio > 0 && (e.unobserve(t.target), jQuery(t.target).addClass("bg-loaded"))
            }));
            jQuery(".bg", t).each((function(t, n) {
                e.observe(n)
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("sticky-section", {
        attach: function(t) {
            jQuery(".sticky-section", t).each((function(t, e) {
                var n = jQuery(e);
                n.waypoint((function(t) {
                    "down" === t && (n.addClass("is-sticky-section"), n.after('<div class="sticky-section-helper"></div>')), "up" === t && (n.removeClass("is-sticky-section"), n.next(".sticky-section-helper").remove())
                }), {
                    offset: "0.1px"
                }), n.waypoint((function(t) {
                    "down" === t && (n.removeClass("is-sticky-section"), n.next(".sticky-section-helper").remove()), "up" === t && (n.addClass("is-sticky-section"), n.after('<div class="sticky-section-helper"></div>'))
                }), {
                    offset: "-100%"
                })
            }))
        }
    })
}, function(t, e, n) {
    Flatsome.behavior("sticky-sidebar", {
        attach: function(t) {
            var e = parseInt(flatsomeVars.sticky_height) + 15;
            jQuery(".is-sticky-column", t).each((function(t, i) {
                n.e(2).then(n.t.bind(null, 57, 7)).then((function() {
                    jQuery(i).stickySidebar({
                        topSpacing: e,
                        bottomSpacing: 15,
                        minWidth: 850,
                        innerWrapperSelector: ".is-sticky-column__inner"
                    }), jQuery(document).on("updated_checkout flatsome-infiniteScroll-append", (function() {
                        jQuery(i).stickySidebar("updateSticky")
                    }))
                }))
            }))
        }
    })
}, function(t, e) {
    Flatsome.behavior("youtube", {
        attach: function(t) {
            var e, n, i, o, r, a = jQuery(".ux-youtube", t);
            0 !== a.length && (window.onYouTubePlayerAPIReady = function() {
                a.each((function() {
                    var t = jQuery(this),
                        e = t.attr("id"),
                        n = t.data("videoid"),
                        i = t.data("loop"),
                        o = t.data("audio");
                    new YT.Player(e, {
                        height: "100%",
                        width: "100%",
                        playerVars: {
                            html5: 1,
                            autoplay: 1,
                            controls: 0,
                            rel: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            showinfo: 0,
                            fs: 0,
                            loop: i,
                            el: 0,
                            playlist: i ? n : void 0
                        },
                        videoId: n,
                        events: {
                            onReady: function(t) {
                                0 === o && t.target.mute()
                            }
                        }
                    })
                }))
            }, n = "script", i = "youtube-jssdk", r = (e = document).getElementsByTagName(n)[0], e.getElementById(i) || ((o = e.createElement(n)).id = i, o.src = "https://www.youtube.com/player_api", r.parentNode.insertBefore(o, r)))
        }
    })
}]);