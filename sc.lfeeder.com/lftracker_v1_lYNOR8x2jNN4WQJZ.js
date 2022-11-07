! function() {
    "use strict";

    function c(n) {
        var t = r();
        return t[n] = t[n] || function(n) {
            return {
                id: n,
                plugins: {},
                getPlugins: function() {
                    var n = [];
                    for (var t in this.plugins) n.push(this.plugins[t]);
                    return n
                },
                autoTrackingInitialized: !1
            }
        }(n), t[n]
    }

    function o(n, t) {
        var e = c(n);
        return e.plugins[t] = e.plugins[t] || {}, e.plugins[t]
    }

    function r() {
        var n = an();
        return n.r = n.r || {}, n.r
    }
    un() && (window.ldfdr.registerTracker = function(n, t, e, r, i, o, a) {
        var u = c(n);
        return u.track = t, u.identify = e, u.pageview = r, u.getClientId = i, u.acceptCookie = o, u.rejectCookie = a, u
    }, window.ldfdr.setTrackerOption = function(n, t, e, r) {
        c(n)[t] = void 0 !== r ? r : e
    }, window.ldfdr.registerPlugin = function(n, t, e) {
        var r = c(n),
            i = o(n, t);
        i.init = function() {
            try {
                e()
            } catch (n) {
                console.error("Error during plugin initialization", i, n)
            }
        }, r.pluginsInitialized && i.init()
    }, window.ldfdr.registerPluginConfig = function(n, t, e, r) {
        o(n, t).config = void 0 !== r ? r : e
    });
    var n, t, e, i, w = "lYNOR8x2jNN4WQJZ",
        a = "2.57.0",
        u = "_lfa_debug_settings",
        f = ["cookieDomain", "enableAutoTracking", "trackingCookieDurationDays"];
    if ("undefined" != typeof window && void 0 !== window.ldfdr) {
        window.ldfdr = window.ldfdr || {}, window.ldfdr.cfg = window.ldfdr.cfg || {};
        var s = function() {
            var n = Sn(u) || "{}";
            try {
                return JSON.parse(n)
            } catch (n) {
                return {}
            }
        }();
        n = window.ldfdr, t = w, e = a, i = s, n.setTrackerOption(t, "lfaCookieEnabled", !0, i.enableCookie), n.setTrackerOption(t, "consentManagementEnabled", !1, i.enableCm), n.setTrackerOption(t, "useSendBeaconApi", !1, i.useBeacon), n.setTrackerOption(t, "autoTrackingMode", "on_script_load", i.atMode), n.setTrackerOption(t, "foreignCookieSettings", {
                "intercom": "^intercom-id-.*",
                "hubspot": "^hubspotutk$"
            }), n.setTrackerOption(t, "crossDomainLinking", {
                "enabled": false
            }), n.setTrackerOption(t, "useDualStackEndpoint", !1, i.useDs), n.setTrackerOption(t, "trackingCookieDurationDays", 730), n.setTrackerOption(t, "version", e), n.registerPluginConfig(t, "file-downloads", {
                filesEnabled: !0,
                filesToMatch: /(\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.key|\.txt|\.dmg|\.exe)(\?|$)/
            }), n.registerPluginConfig(t, "form-tracking", {
                formTrackingMode: "disabled",
                fields: [],
                excluded: []
            }, i.trackForms), n.registerPluginConfig(t, "yt-playback", {
                ytPlaybackTrackingEnabled: !0
            }, i.trackYt), n.registerPluginConfig(t, "vimeo-playback", {
                vimeoPlaybackTrackingEnabled: !1
            }, i.trackVimeo), n.registerPluginConfig(t, "intercom-tracking", {
                intercomTrackingEnabled: !1
            }, i.trackIntercom), n.registerPluginConfig(t, "discover", {
                jsConnectorConfigs: []
            }), n.registerPluginConfig(t, "spa-tracking", {}), n.registerPluginConfig(t, "ga-connector", {
                gaConnectorSettings: []
            }),
            function(n, t) {
                n._q = n._q || [];
                for (var e = 0; e < n._q.length; e++) {
                    var r = n._q[e];
                    switch (r[0]) {
                        case "cfg":
                            if (4 != r.length) {
                                console.warn("* [leadfeeder] invalid 'cfg' command", r);
                                break
                            }
                            var i = r[1];
                            if (-1 == f.indexOf(i)) {
                                console.warn("* [leadfeeder] unsupported 'cfg' command", r);
                                break
                            }
                            r[3] === t && n.setTrackerOption(t, i, r[2])
                    }
                }
            }(window.ldfdr, w)
    }
    var l = "__discoverLoadEventEmitted",
        d = {
            get: function(n) {
                return window[n]
            },
            set: function(n, t) {
                window[t] = n
            },
            clear: function(n) {
                this.set(null, n)
            }
        };

    function g(t, e) {
        if (!t[l]) return function(t, n, e) {
            var r = "" === n ? bt : n;
            return r = function(n) {
                return n === bt || n[n.length - 1] !== bt ? n : n.slice(0, -1)
            }(r), e.some(function(n) {
                return function(n, t, e) {
                    var r = function(n) {
                            return n.split(/\/(.*)/).filter(function(n) {
                                return "" !== n
                            })
                        }(e),
                        i = r[0],
                        o = bt + (2 <= r.length ? r[1] : "");
                    return i === n && (o === t || function(n, t) {
                        if (0 <= t.indexOf("*") && 0 === n.indexOf(t.replace("/*", "").replace("*", ""))) return !0;
                        return t === bt
                    }(t, o))
                }(t, r, n)
            })
        }(window.location.hostname, window.location.pathname, t.paths) ? void V(t.api_key, function(n) {
            ! function(n, t) {
                200 !== n.meta.status && 404 !== n.meta.status || d.set(n, t)
            }(n, t.js_object_name),
            function(t) {
                window.dataLayer = window.dataLayer || [], window.dataLayer.some(function(n) {
                    return n.event === t
                }) || (window[l] = !0, window.dataLayer.push({
                    event: t
                }))
            }(t.event_name), t[l] = !0, e()
        }) : e()
    }
    un() && an().registerPlugin(w, "discover", function() {
        ! function(n) {
            n.jsConnectorConfigs && 0 !== n.jsConnectorConfigs.length && St(n.jsConnectorConfigs.map(function(t) {
                return function(n) {
                    g(t, n)
                }
            }), 0)
        }(an().getTracker(w).plugins.discover.config)
    }), un() && an().registerPlugin(w, "file-downloads", function() {
        var e = an().getTracker(w),
            i = e.plugins["file-downloads"].config;

        function o(n) {
            function t() {
                n.removeEventListener("click", t), R(), e.track(function(n) {
                    var t = function(n) {
                            var t = n.replace(/https?\:\/\//, "").split("/"),
                                e = t[t.length - 1].replace(/[\?&].*/, "");
                            return 1 != t.length && e ? e : null
                        }(n.href),
                        e = window.location.href;
                    return {
                        eventType: "file-download",
                        properties: {
                            url: function(n, t) {
                                return "/" == n.href.charAt(0) ? function(n) {
                                    return "/" == n.charAt(n.length - 1) ? n.substr(0, n.length - 1) : n
                                }(t) + n.href : n.href
                            }(n, e),
                            filename: t
                        },
                        pageUrl: e,
                        pageTitle: t
                    }
                }(n))
            }
            n.addEventListener("click", t)
        }

        function n() {
            for (var n = document.getElementsByTagName("a"), t = 0; t < n.length; t++) {
                var e = n[t];
                if (Dt(e.getAttribute("href")).match(i.filesToMatch)) {
                    var r = "data-lf-fd-inspected-" + w;
                    if (e.getAttribute(r)) continue;
                    e.setAttribute(r, "true"), o(e)
                }
            }
        }
        i.filesEnabled && (n(), xt(n))
    }), un() && an().registerPlugin(w, "form-tracking", function() {
        var r = 500,
            c = ["button", "hidden", "image", "password", "reset", "submit"],
            i = 0,
            o = an().getTracker(w),
            f = function(n) {
                var t = (n.fields || []).map(function(n) {
                        return {
                            nameRegex: new RegExp(n.nameRegex, "i"),
                            type: n.type,
                            lfProperty: n.lfProperty
                        }
                    }),
                    e = (n.excluded || []).map(function(n) {
                        var t = {};
                        for (var e in n) t[e] = new RegExp(n[e], "i");
                        return t
                    });
                return {
                    formTrackingMode: n.formTrackingMode,
                    fields: t,
                    excluded: e
                }
            }(o.plugins["form-tracking"].config);

        function t(n) {
            s(n.target, "submit-event")
        }

        function a(n) {
            if (!n) return null;
            var t = n.type,
                e = n.tagName.toLowerCase();
            return "submit" === t ? "submit-button" : "button" === t || "button" === e ? "normal-button" : null
        }

        function e(n) {
            var t = n.target,
                e = a(t) || a(t.parentElement);
            if (e) {
                var r = t.form || t.closest("form");
                r && s(r, e)
            }
        }

        function u(t) {
            var e = window.location.href;
            return f.excluded.some(function(n) {
                return function(n, t) {
                    return t.pageUrl && n.match(t.pageUrl)
                }(e, n) || function(n, t) {
                    if (!t.inputName) return !1;
                    for (var e = n.elements, r = 0; r < e.length; r++) {
                        var i = e[r];
                        if (i.name && i.name.match(t.inputName)) return !0
                    }
                    return !1
                }(t, n) || function(n, t) {
                    return t.formId && n.id.match(t.formId)
                }(t, n) || function(n, t) {
                    return !!t.formClass && n.className.split(/\s+/).some(function(n) {
                        return n && n.match(t.formClass)
                    })
                }(t, n)
            })
        }

        function s(n, t) {
            if (!(u(n) || i + r >= (new Date).getTime())) {
                var e = function(n) {
                    for (var t = {}, e = n.elements, r = f.fields ? f.fields.filter(function(n) {
                            return !!n.lfProperty
                        }) : [], i = 0; i < e.length; i++) {
                        var o = e[i],
                            a = o.name;
                        if (a && !(0 <= c.indexOf(o.type)) && (t[a] = {
                                name: a,
                                type: o.type
                            }, l(n, o))) {
                            t[a].value = o.value;
                            var u = g(o, r);
                            u && (t[a].lfProperty = u)
                        }
                    }
                    return Ct(t)
                }(n);
                if (e && 0 != e.length) {
                    i = (new Date).getTime(), R();
                    try {
                        o.track(function(n, t, e) {
                            var r = {
                                    formTrackingMode: f.formTrackingMode,
                                    formEventType: t
                                },
                                i = n.getAttribute("id"),
                                o = n.getAttribute("class"),
                                a = n.getAttribute("action");
                            i && (r.formId = i);
                            o && (r.formClass = o);
                            a && (r.formAction = a);
                            e && (r.inputFields = e);
                            return {
                                eventType: "form-submit",
                                properties: r
                            }
                        }(n, t, e), function() {})
                    } catch (n) {}
                }
            }
        }

        function l(n, t) {
            switch (f.formTrackingMode) {
                case "configured_fields":
                    return f.fields.some(function(n) {
                        return d(t, n)
                    });
                case "all_but_excluded":
                    return !0;
                default:
                    return !1
            }
        }

        function d(n, t) {
            return (!t.type || t.type === n.type) && n.name.match(t.nameRegex)
        }

        function g(n, t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e];
                if (d(n, r)) return r.lfProperty
            }
            return null
        }

        function v(n) {
            try {
                if (!n.contentDocument) return;
                n.contentDocument.addEventListener("submit", t), n.contentDocument.addEventListener("click", e, !0)
            } catch (n) {}
        }

        function n() {
            for (var n = document.getElementsByTagName("iframe"), t = 0; t < n.length; t++) p(n[t])
        }

        function p(n) {
            var t = "data-lf-form-tracking-inspected-" + w;
            n.getAttribute(t) || (n.setAttribute(t, "true"), v(n), n.addEventListener("load", function() {
                v(n)
            }))
        }
        switch (f.formTrackingMode) {
            case "disabled":
                return;
            case "metadata":
            case "configured_fields":
            case "all_but_excluded":
                return document.addEventListener("submit", t), document.addEventListener("click", e, !0), n(), void xt(n);
            default:
                return
        }
    });
    var v = null,
        p = "__gaConnectorEventsEmitted",
        m = "LFcompanyData",
        h = "LFvisitorInfo";

    function k(n) {
        -1 === window[p].indexOf(n) && window[p].push(n)
    }

    function y(r, i) {
        setTimeout(function() {
            ! function(n, t) {
                var e = n.toLowerCase();
                X(window)(function() {
                    if (void 0 === X(window).getAll) return t(null);
                    var n = X(window).getAll().filter(function(n) {
                        return n.get("trackingId").toLowerCase() == e
                    })[0];
                    t(n)
                })
            }(r.ga_id, function(e) {
                if (!e) return i();
                V(r.api_key, function(n) {
                    var t = K(n.data, r.mappings);
                    ! function(n, t, e) {
                        var r = X(window);
                        if (null !== e) {
                            var i = n.get("name");
                            r(i + ".set", e), r(i + ".send", {
                                hitType: "event",
                                eventCategory: h,
                                eventAction: m,
                                nonInteraction: !0
                            }), k(t)
                        }
                    }(e, r.ga_id, t), i()
                })
            })
        }, 100)
    }

    function T(n, t) {
        ! function(n, t) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = n, e.onload = function() {
                t && t()
            }, document.getElementsByTagName("head")[0].appendChild(e)
        }("https://www.googletagmanager.com/gtag/js?id=" + n, function() {
            window.dataLayer = window.dataLayer || [], window.gtag = function() {
                window.dataLayer.push(arguments)
            }, window.gtag("js", new Date), window.gtag("config", n, {
                send_page_view: !1
            }), t()
        })
    }

    function b(e, r) {
        function n() {
            V(e.api_key, function(n) {
                var t = K(n.data, e.mappings);
                ! function(n, t) {
                    var e = Y(window);
                    if (null !== t) {
                        var r = JSON.parse(JSON.stringify(t));
                        r.user_properties = t, r.event_category = h, r.non_interaction = !0, r.send_to = n, e("event", m, r), k(n)
                    }
                }(e.ga_id, t), r()
            })
        }
        Y(window) ? n() : T(e.ga_id, n)
    }

    function I(n) {
        (X(window) || Y(window) || $(window)) && (clearInterval(v), St(n.map(function(t) {
            return function(n) {
                ! function(n, t) {
                    tn(n.ga_id) ? b(n, t) : X(window) && y(n, t)
                }(t, n)
            }
        }), 0))
    }
    window[p] = [], un() && an().registerPlugin(w, "ga-connector", function() {
        ! function(n) {
            n.gaConnectorSettings && 0 !== n.gaConnectorSettings.length && (v = setInterval(function() {
                I(n.gaConnectorSettings)
            }, 300), setTimeout(function() {
                clearInterval(v)
            }, 1e4))
        }(an().getTracker(w).plugins["ga-connector"].config)
    }), un() && an().registerPlugin(w, "intercom-tracking", function() {
        var n = an().getTracker(w);
        n.plugins["intercom-tracking"].config.intercomTrackingEnabled && function(n, t, e, r) {
            var i;
            t = t || 100, e = e || 1.5, r = r || 15e3;
            var o = setTimeout(function() {
                    clearInterval(i)
                }, r),
                a = function() {
                    clearInterval(i), n() ? clearTimeout(o) : (t *= e, i = setInterval(a, t))
                };
            i = setInterval(a, t)
        }(function() {
            return !(void 0 === window.Intercom || !window.Intercom.booted) && (window.Intercom("update", {
                lfClientId: n.getClientId()
            }), !0)
        })
    });
    var C = null,
        _ = null;

    function E(t, e, r) {
        setTimeout(function() {
            r && (C = _);
            var n = {
                pageUrl: _ = e
            };
            C && (n.referrer = C), t.pageview(n)
        }, 0)
    }

    function S(n) {
        window.history && (function(i, o) {
            var a = o.pushState;
            o.pushState = function(n, t, e) {
                var r = a.apply(o, arguments);
                return E(i, window.location.href, !0), r
            };
            var u = o.replaceState;
            o.replaceState = function(n, t, e) {
                var r = u.apply(o, arguments);
                return E(i, window.location.href, !1), r
            }
        }(n, window.history), window.addEventListener("popstate", function() {
            E(n, window.location.href, !0)
        }), window.addEventListener("hashchange", function() {
            E(n, window.location.href, !0)
        }))
    }

    function O(n) {
        return n.src.replace("/?", "?").split("/").pop().split("?")[0]
    }

    function N(n, t, e) {
        var r = {
            method: t
        };
        e && (r.value = e);
        var i = JSON.stringify(r);
        n.contentWindow.postMessage(i, "*")
    }

    function A(n) {
        return (Nt(n.src, "http://player.vimeo.com") || Nt(n.src, "https://player.vimeo.com")) && function(n) {
            return !!O(n)
        }(n)
    }

    function D(n) {
        A(n) && (N(n, "addEventListener", "play"), N(n, "getVideoTitle", ""))
    }

    function L() {
        var n = document.getElementsByTagName("iframe");
        if (n.length)
            for (var t = 0; t < n.length; t++) {
                var e = n[t],
                    r = "data-lf-vimeo-playback-inspected-" + w;
                e.getAttribute(r) || (e.setAttribute(r, "true"), D(e), e.addEventListener("load", function() {
                    D(e)
                }))
            }
    }
    un() && an().registerPlugin(w, "spa-tracking", function() {
        ! function(n) {
            switch (_ = window.location.href, n.autoTrackingMode) {
                case "spa":
                    S(n)
            }
        }(an().getTracker(w))
    }), un() && an().registerPlugin(w, "vimeo-playback", function() {
        var r = an().getTracker(w);
        if (r.plugins["vimeo-playback"].config.vimeoPlaybackTrackingEnabled && window.postMessage) {
            var t = {};
            window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n, !1), L(), xt(L)
        }

        function i(n) {
            return t[n] || (t[n] = {
                src: n,
                tracked: !1,
                videoData: null
            }), t[n]
        }

        function o(n) {
            var t = i(n.src);
            if (!t.tracked) {
                t.tracked = !0;
                var e = function(n) {
                    return "https://vimeo.com/" + O(n)
                }(n);
                r.track({
                    eventType: "video-start",
                    properties: {
                        videoUrl: e,
                        videoTitle: t.title
                    }
                })
            }
        }

        function n(n) {
            if (!/^https?:\/\/player.vimeo.com/.test(n.origin)) return !1;
            var t = function(t) {
                    try {
                        return JSON.parse(t.data)
                    } catch (n) {
                        return t.data
                    }
                }(n),
                e = function(n) {
                    for (var t = document.getElementsByTagName("iframe"), e = 0; e < t.length; e++)
                        if (n.source === t[e].contentWindow) return t[e]
                }(n);
            switch (t.event) {
                case "ready":
                    D(e);
                    break;
                case "play":
                    o(e)
            }
            "getVideoTitle" == t.method && (i(e.src).title = t.value, -1 !== e.src.indexOf("autoplay=1") && o(e))
        }
    }), un() && an().registerPlugin(w, "yt-playback", function() {
        var r = an().getTracker(w);
        if (r.plugins["yt-playback"].config.ytPlaybackTrackingEnabled && window.postMessage) {
            var o = {},
                t = {},
                a = !1,
                u = 0;
            n(), xt(n)
        }

        function n() {
            var n = document.getElementsByTagName("iframe");
            if (n.length) {
                ! function() {
                    if (a) return;
                    window.addEventListener("message", function(n) {
                        -1 !== ["https://www.youtube.com", "https://www.youtube-nocookie.com"].indexOf(n.origin) && void 0 !== n.data && function(n) {
                            var t;
                            try {
                                t = JSON.parse(n.data)
                            } catch (n) {
                                return
                            }
                            var e = function(n, t) {
                                if (o[n]) return o[n];
                                for (var e = document.getElementsByTagName("iframe"), r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    if (i.contentWindow === t.source || i.contentDocument && i.contentDocument.defaultView === t.source) return o[n] = i
                                }
                                return null
                            }(t.id, n);
                            if (null === e) return;
                            switch (t.event) {
                                case "initialDelivery":
                                    ! function(n, t) {
                                        var e = l(t.src);
                                        if (!n.info || !n.info.videoData || e.videoData) return;
                                        e.videoData = n.info.videoData
                                    }(t, e);
                                    break;
                                case "onStateChange":
                                    ! function(n, t) {
                                        if (-1 !== n.info) return;
                                        s(t)
                                    }(t, e)
                            }
                        }(n)
                    }), a = !0
                }();
                for (var t = 0; t < n.length; t++) {
                    var e = n[t],
                        r = "data-lf-yt-playback-inspected-" + w;
                    if (!e.getAttribute(r)) {
                        e.setAttribute(r, "true");
                        var i = ++u + 1e3;
                        f(e, i), e.addEventListener("load", c(e, i))
                    }
                }
            }
        }

        function c(n, t) {
            return function() {
                f(n, t)
            }
        }

        function f(n, t) {
            if (function(n) {
                    return function(n) {
                        return Nt(n.src, "https://www.youtube.com/embed/") || Nt(n.src, "https://www.youtube-nocookie.com/embed/")
                    }(n) && function(n) {
                        return !!i(n)
                    }(n) && ! function(n) {
                        return -1 !== n.src.indexOf("enablejsapi=0")
                    }(n)
                }(n)) {
                if (! function(n) {
                        return -1 !== n.src.indexOf("autoplay=1")
                    }(n)) return function(n) {
                    return -1 === n.src.indexOf("enablejsapi")
                }(n) ? function(n) {
                    var t = -1 === n.src.indexOf("?") ? "?" : "&";
                    t += "enablejsapi=1", t += "&origin=" + window.location.origin, n.src = n.src + t
                }(n) : void
                function(n, t) {
                    if ("undefined" != typeof YT && ("function" != typeof YT.get || !n.id || void 0 !== YT.get(n.id))) return;
                    e(o[t] = n, {
                        event: "listening",
                        id: t,
                        channel: "widget"
                    }), e(n, {
                        event: "command",
                        func: "addEventListener",
                        args: ["onStateChange"],
                        id: t,
                        channel: "widget"
                    })
                }(n, t);
                s(n)
            }
        }

        function s(n) {
            var t = l(n.src);
            if (!t.tracked) {
                t.tracked = !0;
                var e = function(n) {
                    return "https://www.youtube.com/watch?v=" + i(n)
                }(n);
                r.track({
                    eventType: "video-start",
                    properties: {
                        videoUrl: e,
                        videoTitle: function(n) {
                            return n ? n.title : void 0
                        }(t.videoData)
                    }
                })
            }
        }

        function l(n) {
            return t[n] || (t[n] = {
                src: n,
                tracked: !1,
                videoData: null
            }), t[n]
        }

        function i(n) {
            return n.src.split("/")[4].split("?")[0]
        }

        function e(n, t) {
            var e = JSON.stringify(t);
            n.contentWindow.postMessage(e, "*")
        }
    });
    var x = 250;

    function R() {
        ! function(n) {
            an().suppressUnloadUntil = n
        }((new Date).getTime() + x)
    }!un() || "suppressUnloadUntil" in an() || (an().suppressUnloadUntil = 0, window.addEventListener("beforeunload", function() {
        var n = new Date,
            t = an().suppressUnloadUntil;
        if (!(t < n.getTime()))
            for (; t >= n.getTime(); 0) n = new Date
    }, !1));
    var M, P = "_lfa",
        U = 5;

    function j(n) {
        n.crossDomainLinking.enabled && n.lfaCookieEnabled && (M = window.location.href, document.addEventListener("mousedown", function(n) {
            ! function(n) {
                var t = function(n) {
                    var t, e = 0;
                    do {
                        if (B(n)) return n;
                        t = n.parentNode, t = (n = t) ? n.parentNode : null, e++
                    } while (null !== t && e < 100);
                    return null
                }(n);
                if (!t) return;
                if (! function(n) {
                        var t = n.getAttribute("href");
                        return !!t && (!!ht(t = String(t)) && function(n, t, e) {
                            if (F(n, t)) return !1;
                            for (var r = 0; r < e.length; r++)
                                if (!F(t, e[r]) && F(n, e[r])) return !0;
                            return !1
                        }(n.hostname, document.location.hostname, Wn().crossDomainLinking.allowedDomains))
                    }(t)) return;
                ! function(n) {
                    var t = n.getAttribute("href");
                    n.setAttribute("href", function(n) {
                        n = wt(n, P);
                        var t = function() {
                            var n = Wn().getClientId(),
                                t = String(G());
                            return n + "-" + t
                        }();
                        return pt(n, P, t)
                    }(t))
                }(t)
            }(n.target)
        }))
    }

    function J() {
        if (Wn().crossDomainLinking.enabled) return function(n) {
            var t = mt(n, P);
            if (!t) return;
            var e = function(n) {
                if (47 !== n.length || !/^LF\d\.\d\.[0-9a-z]{16}\.\d{13}-\d{10}$/.test(n)) return;
                var t = n.split("-"),
                    e = t[0],
                    r = parseInt(t[1]),
                    i = G();
                if (Math.abs(i - r) > U) return;
                return e
            }(t = String(t));
            return e || void 0
        }(M)
    }

    function G() {
        return Math.floor((new Date).getTime() / 1e3)
    }

    function F(n, t) {
        n = n.toLowerCase(), t = t.toLowerCase();
        for (var e = n.split("."), r = t.split("."), i = 1; i <= r.length; i++)
            if (r[r.length - i] !== e[e.length - i]) return !1;
        return !0
    }

    function B(n) {
        if (!n) return !1;
        var t = String(n.nodeName).toLowerCase();
        return -1 !== ["a", "area"].indexOf(t)
    }
    var z = {
        key: "__lf_discover",
        softRefresh: 18e5,
        ttl: 864e6,
        storedAt: null,
        get: function() {
            if (Mn()) {
                var n = window.localStorage.getItem(this.key);
                if (null !== n) {
                    var t = null;
                    try {
                        t = JSON.parse(n), this.storedAt = t.storedAt, delete t.storedAt
                    } catch (n) {
                        if (n instanceof SyntaxError) return;
                        throw n
                    }
                    return t
                }
            }
        },
        set: function(n) {
            Mn() && (n.storedAt = Date.now(), window.localStorage.setItem(this.key, JSON.stringify(n)), delete n.storedAt)
        },
        clear: function() {
            Mn() && (this.storedAt = null, window.localStorage.removeItem(this.key))
        },
        isExpired: function() {
            return null === this.storedAt || void 0 === this.storedAt || Date.now() >= this.storedAt + this.ttl
        },
        isSoftExpired: function() {
            return null === this.storedAt || void 0 === this.storedAt || Date.now() >= this.storedAt + this.softRefresh
        }
    };

    function W(n) {
        200 !== n.meta.status && 404 !== n.meta.status || z.set(n)
    }

    function q(n, t) {
        var e = new XMLHttpRequest;
        e.open("GET", n, !0), e.onload = function() {
            if (200 === this.status) {
                var n = JSON.parse(this.response);
                t(n)
            }
        }, e.send()
    }

    function K(r, n) {
        if (!n) return null;
        if (! function(n, t) {
                return n.map(function(n) {
                    return _t(n, t)
                })
            }(n, "attribute").map(function(n) {
                return _t(r, n)
            }).some(function(n) {
                return null != n && "" !== n
            })) return null;
        var i = {};
        return n.forEach(function(n) {
            var t = _t(r, n.attribute),
                e = n.dimension;
            i[e] = t || n.fallback_value
        }), i
    }

    function V(n, t) {
        var e = "https://cs.lf-discover.com/companies/?api_key=" + n,
            r = mt(window.location.href, "_lf_discover_demo");
        "" !== r && (e = pt(e, "demo", r));
        var i = z.get();
        "" !== r ? q(e, function(n) {
            t(n)
        }) : null == i ? q(e, function(n) {
            W(n), t(n)
        }) : z.isExpired() ? (z.clear(), q(e, function(n) {
            W(n), t(n)
        })) : z.isSoftExpired() ? (t(i), q(e, function(n) {
            W(n)
        })) : t(i)
    }

    function Y(n) {
        return n.gtag || null
    }

    function $(n) {
        return n.google_tag_manager || {}
    }

    function X(n, t) {
        return (t = n.GoogleAnalyticsObject || "ga") && n[t] ? n[t] : null
    }

    function H(n) {
        return n._gat || null
    }

    function Z(n, t) {
        for (var e = function(n) {
                return n ? "function" != typeof n._getTrackers ? [] : n._getTrackers() : []
            }(H(n)), r = 0; r < e.length; r++) nn(e[r]._getAccount(), t.trackingIds, !0)
    }

    function Q(n, t) {
        for (var e = function(n) {
                return n ? "function" != typeof n.getAll ? [] : n.getAll() : []
            }(X(n)), r = 0; r < e.length; r++) nn(e[r].get("clientId"), t.clientIds), nn(e[r].get("trackingId"), t.trackingIds)
    }

    function nn(n, t, e) {
        void 0 !== n && -1 === t.indexOf(n) && (e && "object" == typeof n && "string" == typeof n.vtp_trackingId ? t.push(n.vtp_trackingId) : t.push(n))
    }

    function tn(n) {
        return /^G-[A-Z0-9]*/.test(n)
    }

    function en() {
        return function(n) {
            return n.dataLayer || []
        }(window).filter(function(n) {
            return "config" == n[0]
        }).map(function(n) {
            return n[1]
        })
    }

    function rn() {
        var n = 0,
            t = [],
            e = en(),
            r = Object.keys($(window)).filter(function(n) {
                return tn(n)
            });
        for (n = 0; n < e.length; n++) nn(e[n], t);
        for (n = 0; n < r.length; n++) nn(r[n], t);
        return t
    }

    function on() {
        var n = {
            clientIds: [],
            trackingIds: [],
            measurementIds: rn()
        };
        if (null !== X(window) ? Q(window, n) : Z(window, n), !n.clientIds.length) {
            var t = function() {
                var n = Sn("_ga");
                if (n) {
                    var t = n.split(".");
                    if (!(t.length < 2)) return t[t.length - 2] + "." + t[t.length - 1]
                }
            }();
            t && n.clientIds.push(t)
        }
        return n
    }

    function an() {
        return "undefined" == typeof window ? null : window.ldfdr
    }

    function un() {
        return "undefined" != typeof window && void 0 !== window.ldfdr
    }

    function cn(t) {
        var n = Ct(r());
        return It(t) ? n.map(function(n) {
            return t(n)
        }) : n
    }
    window.ldfdr.getTracker = function(n, t) {
        var e = r()[n] || null;
        return It(t) ? t(e) : e
    }, window.ldfdr.getAll = cn, window.ldfdr.track = function(t) {
        cn(function(n) {
            n.track(t)
        })
    }, window.ldfdr.identify = function(t) {
        cn(function(n) {
            n.identify(t)
        })
    }, window.ldfdr.pageview = function(t) {
        cn(function(n) {
            n.pageview(t)
        })
    }, window.ldfdr.acceptCookie = function(t) {
        return cn(function(n) {
            return n.acceptCookie(t)
        }).some(function(n) {
            return !0 === n
        })
    }, window.ldfdr.rejectCookie = function(t) {
        return cn(function(n) {
            return n.rejectCookie(t)
        }).some(function(n) {
            return !0 === n
        })
    }, window.ldfdr.setDebugSettings = function(n) {
        ! function(n) {
            yn(u, JSON.stringify(n), 36e5)
        }(n)
    };
    var fn, sn = "none",
        ln = "basic",
        dn = "all",
        gn = [sn, ln, dn],
        vn = "__lfaCmClientId",
        pn = "_lfa",
        wn = "LF1.1",
        mn = "_lfa_consent";

    function hn() {
        In(Cn()), In(pn), kn(pn), In(mn), kn(mn)
    }

    function kn(n) {
        if (Sn(n)) {
            var t = window.ldfdr.cfg.cookieDomain;
            if (t) Ln(n, t);
            else
                for (var e = An().reverse(), r = 0; r < e.length; r++)
                    if (Ln(n, t = e[r]), !Sn(n)) return
        }
    }

    function yn(n, t, e) {
        var r = window.ldfdr.cfg.cookieDomain || fn;
        if (r) xn(n, t, e, "/", r);
        else
            for (var i = An(), o = 0; o < i.length; o++)
                if (xn(n, t, e, "/", r = i[o]), Tn(r) && Sn(n) === t) return void(fn = r)
    }

    function Tn(n) {
        var t = "_lfa_test_cookie_stored",
            e = (new Date).getTime().toString() + "-" + Math.random().toString();
        xn(t, e, 1e3, "/", n);
        var r = Sn(t) === e;
        return Ln(t, n), r
    }

    function bn(n, t, e) {
        if (yn(n, t, e), Mn()) {
            window.localStorage.setItem(n, t);
            var r = new Date;
            r.setTime(r.getTime() + e), window.localStorage.setItem(Cn(), r.toISOString())
        }
    }

    function In(n) {
        Mn() && window.localStorage.removeItem(n)
    }

    function Cn() {
        return pn + "_expiry"
    }

    function _n() {
        return function() {
            var n = Sn(pn);
            if (!n) return;
            if (!Nt(n, wn)) {
                var t = function(n) {
                    var t;
                    try {
                        t = function(n) {
                            if (!n) return 0;
                            var t = function(n) {
                                try {
                                    return decodeURIComponent(window.atob(n).split("").map(function(n) {
                                        return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
                                    }).join(""))
                                } catch (n) {
                                    return 0
                                }
                            }(n);
                            return t ? JSON.parse(t) : 0
                        }(n)
                    } catch (n) {
                        return 0
                    }
                    return t ? Ct(t)[0] : 0
                }(n);
                if (t) return t
            }
            return n
        }() || function() {
            if (!Mn()) return 0;
            var n = window.localStorage.getItem(pn);
            if (null == n) return 0;
            var t = window.localStorage.getItem(Cn());
            null != t && (new Date).toISOString() > t && (n = 0);
            return n
        }()
    }

    function En() {
        var n = Sn(mn);
        return !n && Mn() && (n = window.localStorage.getItem(mn)), n ? "true" === n ? dn : -1 == gn.indexOf(n) ? null : n : null
    }

    function Sn(n) {
        var t = new RegExp("(^|;)[ ]*" + n + "=([^;]*)").exec(document.cookie);
        return t ? window.decodeURIComponent(t[2]) : 0
    }

    function On(n, t) {
        n && Nt(n, wn) || (n = Dn(Et()));
        return bn(pn, n, t), n
    }

    function Nn(n, t) {
        return -1 == gn.indexOf(n) ? En() : (bn(mn, n, t), n)
    }

    function An(n) {
        var t = n || document.location.hostname,
            e = (t = 0 === t.indexOf("www.") ? t.substring(4) : t).split(".");
        if (4 === e.length) {
            var r = e[e.length - 1];
            if (parseInt(r, 10) == r) return ["none"]
        }
        for (var i = [], o = e.length - 2; 0 <= o; o--) i.push(e.slice(o).join("."));
        return i.push("none"), i
    }

    function Dn(n) {
        return wn + "." + n + "." + (new Date).getTime()
    }

    function Ln(n, t) {
        xn(n, "", -3600, "/", t)
    }

    function xn(n, t, e, r, i, o) {
        var a;
        e && (a = new Date).setTime(a.getTime() + e), document.cookie = n + "=" + window.encodeURIComponent(t) + (e ? ";expires=" + a.toGMTString() : "") + ";path=" + (r || "/") + (i && "none" !== i ? ";domain=" + i : "") + (o ? ";secure" : "") + ";SameSite=Lax"
    }

    function Rn() {
        return Tn(null)
    }

    function Mn() {
        try {
            return !!window.localStorage
        } catch (n) {
            return !1
        }
    }
    var Pn, Un = 1e3,
        jn = /^0_([0-9a-f]+)-([0-9a-f]+)-([0-9]*)$/,
        Jn = null,
        Gn = [],
        Fn = null,
        Bn = {
            success: !1
        },
        zn = 0;

    function Wn() {
        return an().getTracker(w)
    }

    function qn() {
        var n = Wn(),
            t = n.foreignCookieSettings,
            e = [];
        if (!t || !at(n)) return e;
        for (var r = function() {
                for (var n = document.cookie.split(";"), t = {}, e = 0; e < n.length; e++) {
                    var r = n[e].split("=");
                    t[Dt(r[0]).trim()] = unescape(r.slice(1).join("="))
                }
                return t
            }(), i = Object.keys(r), o = Object.keys(t), a = 0; a < o.length; a++)
            for (var u = o[a], c = t[u], f = 0; f < i.length; f++) {
                var s = i[f];
                if (s.match(c)) {
                    var l = r[s];
                    e.push({
                        type: u,
                        value: l
                    })
                }
            }
        return e
    }

    function Kn() {
        return J() || _n()
    }

    function Vn(n) {
        return null === Jn && (Jn = En()), !(!Yn(n) || !Rn()) && ($n(n) ? function(n) {
            switch (n) {
                case dn:
                case ln:
                    return !0;
                default:
                    return !1
            }
        }(Jn) : Jn !== sn)
    }

    function Yn(n) {
        return !0 === n.lfaCookieEnabled
    }

    function $n(n) {
        return !0 === n.consentManagementEnabled
    }

    function Xn() {
        return !0 === Wn().useDualStackEndpoint
    }

    function Hn(n, t) {
        t = t || {};
        var e = on(),
            r = t.eventType || "tracking-event",
            i = Wn();
        return {
            gaTrackingIds: e.trackingIds,
            gaMeasurementIds: e.measurementIds,
            gaClientIds: e.clientIds,
            context: function(n, t) {
                var e = n.referrer || document.referrer;
                "form-submit" === t && (e = "");
                return {
                    library: {
                        name: "lftracker",
                        version: a
                    },
                    pageUrl: function(n) {
                        if (at(Wn())) return n;
                        return null === mt(n, "utm_term").match(jn) ? n : wt(n, "utm_term")
                    }(Zn(n)),
                    pageTitle: n.pageTitle || document.title,
                    referrer: e
                }
            }(t, r),
            event: r,
            clientEventId: Et(),
            scriptId: w,
            cookiesEnabled: Vn(i),
            consentLevel: Jn || sn,
            anonymizeIp: !1,
            lfClientId: n,
            foreignCookies: qn(),
            properties: t.properties || {},
            autoTrackingEnabled: !1 !== i.enableAutoTracking,
            autoTrackingMode: i.autoTrackingMode
        }
    }

    function Zn(n) {
        return n.pageUrl || window.location.href
    }

    function Qn(n, t, e) {
        var r = n + "?sid=" + encodeURIComponent(t.scriptId),
            i = Ot(JSON.stringify(t)),
            o = navigator.sendBeacon(r, i);
        return ft(e, {
            success: o
        }), o
    }

    function nt(n, t, e) {
        var r = n + "?sid=" + encodeURIComponent(t.scriptId),
            i = Ot(JSON.stringify(t)),
            o = document.createElement("img");
        return o.width = 1, o.height = 1, o.src = r + "&data=" + i, o.onload = function() {
            ft(e, {
                success: !0
            })
        }, o.onerror = function() {
            ft(e, {
                success: !1
            })
        }, o
    }

    function tt() {
        var n = null,
            t = Wn().trackingCookieDurationDays;
        return t && (n = 24 * t * 60 * 60 * 1e3), n
    }

    function et() {
        return Vn(Wn()) ? On(Kn(), tt()) : (_n() && setTimeout(rt, 1e3), function(n) {
            return $n(n) && Jn !== sn
        }(Wn()) ? function() {
            if (!window[vn]) {
                var n = Dn(Et()) + ".CM";
                window[vn] = n
            }
            return window[vn]
        }() : wn + "." + Et() + ".NC")
    }

    function rt() {
        _n() && (! function() {
            for (var n = 0, t = an().getAll(); n < t.length; n++)
                if (Vn(t[n])) return !1;
            return !0
        }() || hn())
    }

    function it(n) {
        var t = Wn();
        void 0 === t.gaInitRetries && (t.gaInitRetries = 0);
        var e = 1 <= t.gaInitRetries;
        return function(n) {
            var t = X(n);
            return null !== t && "function" == typeof t && "function" == typeof t.getAll || null !== (t = H(n)) && "object" == typeof t && "function" == typeof t._getTrackers
        }(window) ? n() : e ? n() : (setTimeout(function() {
            return it(n)
        }, 100 * Math.pow(2, t.gaInitRetries)), void(t.gaInitRetries += 1))
    }

    function ot(t, e) {
        ! function(n) {
            switch (n) {
                case "form-submit":
                case "identify":
                    return at(Wn());
                default:
                    return !0
            }
        }((t = t || {}).eventType) ? Gn.push({
            args: t,
            doneCallback: e
        }): it(function() {
            var n = Hn(st(), t);
            !0 === Wn().useSendBeaconApi && navigator && navigator.sendBeacon ? (Qn("https://tr-rc.lfeeder.com", n, e), Xn() && Qn("https://tr2.lfeeder.com", n)) : (nt("https://tr-rc.lfeeder.com", n, e), Xn() && nt("https://tr2.lfeeder.com", n))
        })
    }

    function at(n) {
        return !!Vn(n) && (!$n(n) || Jn === dn)
    }

    function ut(n, t) {
        var e = (n = n || {}).email;
        if (function(n) {
                return "string" == typeof n && !!n.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/)
            }(e)) {
            var r = n.firstName,
                i = n.lastName,
                o = {
                    email: e
                };
            r && "string" == typeof r && (o.firstName = r), i && "string" == typeof i && (o.lastName = i), ot({
                eventType: "identify",
                properties: o
            }, t)
        }
    }

    function ct(n, t) {
        var e = function(n) {
                var t = {
                    eventType: "tracking-event"
                };
                (n = n || {}).pageUrl && (t.pageUrl = n.pageUrl);
                n.pageTitle && (t.pageTitle = n.pageTitle);
                n.referrer && (t.referrer = n.referrer);
                return t
            }(n),
            r = Zn(e);
        !ht(r) && Nt(r, "/") && (r = window.location.protocol + "//" + window.location.host + r), r === Fn && zn + Un >= (new Date).getTime() ? ft(t, Bn) : (Fn = r, zn = (new Date).getTime(), Bn = {
            success: !0
        }, ot(e, function(n) {
            ft(t, Bn = n)
        }))
    }

    function ft(n, t) {
        It(n) && n(t)
    }

    function st() {
        return function(n) {
            return Pn = Pn || n()
        }(et)
    }

    function lt(n) {
        var t = Wn();
        return !!gt(t) && (void 0 === n && (n = dn), function(n, t) {
            switch (n) {
                case dn:
                    return function(n) {
                        vt(dn), n.track({
                            eventType: "consent"
                        });
                        for (var t = 0; t < Gn.length; t++) {
                            var e = Gn[t];
                            ot(e.args, e.doneCallback)
                        }
                        return Gn = [], !0
                    }(t);
                case ln:
                    return function(n) {
                        return vt(ln), n.track({
                            eventType: "consent"
                        }), Gn = [], !0
                    }(t)
            }
            return console.warn("* [leadfeeder] invalid consent level", n), !1
        }(n, t))
    }

    function dt() {
        var n = Wn();
        return !!gt(n) && (Pn = void 0, Fn = Jn = null, Bn = {
            success: !(Gn = [])
        }, zn = 0, hn(), Jn = Nn(sn, tt()), n.track({
            eventType: "consent"
        }), !0)
    }

    function gt(n) {
        return !!Rn() && !! function(n) {
            return Yn(n) && $n(n)
        }(n)
    }

    function vt(n) {
        var t = tt();
        Pn = Jn !== n && En() !== n ? (At(Pn, ".NC") && (Pn = void 0), Jn = Nn(n, t), On(st(), t)) : (Jn = En(), Kn())
    }

    function pt(n, t, e) {
        e = e || "";
        var r = (n = String(n)).indexOf("#"),
            i = n.length; - 1 === r && (r = i);
        var o = n.substr(0, r),
            a = n.substr(r, i - r);
        return -1 === o.indexOf("?") ? o += "?" : At(o, "?") || (o += "&"), o + window.encodeURIComponent(t) + "=" + window.encodeURIComponent(e) + a
    }

    function wt(n, t) {
        if (-1 === (n = String(n)).indexOf("?" + t) && -1 === n.indexOf("&" + t)) return n;
        var e = n.indexOf("?");
        if (-1 === e) return n;
        var r = n.substr(e + 1),
            i = n.substr(0, e);
        if (r) {
            var o = "",
                a = r.indexOf("#"); - 1 !== a && (o = r.substr(a + 1), r = r.substr(0, a));
            for (var u = r.split("&"), c = u.length - 1; 0 <= c; c--) u[c].split("=")[0] === t && u.splice(c, 1);
            var f = u.join("&");
            f && (i = i + "?" + f), o && (i += "#" + o)
        }
        return i
    }

    function mt(n, t) {
        var e = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(n);
        return e ? function(t) {
            try {
                return window.decodeURIComponent(t)
            } catch (n) {
                return unescape(t)
            }
        }(e[1]) : ""
    }

    function ht(n) {
        return Nt(n, "//") || Nt(n, "http://") || Nt(n, "https://")
    }
    var kt, yt, Tt, bt = "/";

    function It(n) {
        return "function" == typeof n
    }

    function Ct(n) {
        if (Object.values) return Object.values(n);
        var t = [];
        for (var e in n) "string" == typeof e && n.propertyIsEnumerable(e) && t.push(n[e]);
        return t
    }

    function _t(n, t) {
        for (var e = t.split("."); e.length && (n = n[e.shift()]););
        return n
    }

    function Et() {
        return function(n) {
            function t(n, t) {
                return n << t | n >>> 32 - t
            }

            function e(n) {
                var t, e = "";
                for (t = 7; 0 <= t; t--) e += (n >>> 4 * t & 15).toString(16);
                return e
            }
            var r, i, o, a, u, c, f, s, l, d, g = [],
                v = 1732584193,
                p = 4023233417,
                w = 2562383102,
                m = 271733878,
                h = 3285377520,
                k = [];
            for (n = function(n) {
                    return unescape(window.encodeURIComponent(n))
                }(n), d = n.length, i = 0; i < d - 3; i += 4) o = n.charCodeAt(i) << 24 | n.charCodeAt(i + 1) << 16 | n.charCodeAt(i + 2) << 8 | n.charCodeAt(i + 3), k.push(o);
            switch (3 & d) {
                case 0:
                    i = 2147483648;
                    break;
                case 1:
                    i = n.charCodeAt(d - 1) << 24 | 8388608;
                    break;
                case 2:
                    i = n.charCodeAt(d - 2) << 24 | n.charCodeAt(d - 1) << 16 | 32768;
                    break;
                case 3:
                    i = n.charCodeAt(d - 3) << 24 | n.charCodeAt(d - 2) << 16 | n.charCodeAt(d - 1) << 8 | 128
            }
            k.push(i);
            for (; 14 != (15 & k.length);) k.push(0);
            for (k.push(d >>> 29), k.push(d << 3 & 4294967295), r = 0; r < k.length; r += 16) {
                for (i = 0; i < 16; i++) g[i] = k[r + i];
                for (i = 16; i <= 79; i++) g[i] = t(g[i - 3] ^ g[i - 8] ^ g[i - 14] ^ g[i - 16], 1);
                for (a = v, u = p, c = w, f = m, s = h, i = 0; i <= 19; i++) l = t(a, 5) + (u & c | ~u & f) + s + g[i] + 1518500249 & 4294967295, s = f, f = c, c = t(u, 30), u = a, a = l;
                for (i = 20; i <= 39; i++) l = t(a, 5) + (u ^ c ^ f) + s + g[i] + 1859775393 & 4294967295, s = f, f = c, c = t(u, 30), u = a, a = l;
                for (i = 40; i <= 59; i++) l = t(a, 5) + (u & c | u & f | c & f) + s + g[i] + 2400959708 & 4294967295, s = f, f = c, c = t(u, 30), u = a, a = l;
                for (i = 60; i <= 79; i++) l = t(a, 5) + (u ^ c ^ f) + s + g[i] + 3395469782 & 4294967295, s = f, f = c, c = t(u, 30), u = a, a = l;
                v = v + a & 4294967295, p = p + u & 4294967295, w = w + c & 4294967295, m = m + f & 4294967295, h = h + s & 4294967295
            }
            return (l = e(v) + e(p) + e(w) + e(m) + e(h)).toLowerCase()
        }("" + (new Date).getTime() + Math.random()).slice(0, 16)
    }

    function St(n, t) {
        t != n.length && n[t](function() {
            St(n, t + 1)
        })
    }

    function Ot(n) {
        return window.btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function(n, t) {
            return String.fromCharCode("0x" + t)
        }))
    }

    function Nt(n, t) {
        return !!n && n.substring(0, t.length) === t
    }

    function At(n, t) {
        return -1 !== (n = String(n)).indexOf(t, n.length - t.length)
    }

    function Dt(n) {
        return n + ""
    }

    function Lt(e, r, i) {
        var o, a, u, c, f = 0;
        i = i || {};

        function s() {
            f = !1 === i.leading ? 0 : (new Date).getTime(), o = null, c = e.apply(a, u), o || (a = u = null)
        }

        function n() {
            var n = (new Date).getTime();
            f || !1 !== i.leading || (f = n);
            var t = r - (n - f);
            return a = this, u = arguments, t <= 0 || r < t ? (o && (clearTimeout(o), o = null), f = n, c = e.apply(a, u), o || (a = u = null)) : o || !1 === i.trailing || (o = setTimeout(s, t)), c
        }
        return n.cancel = function() {
            clearTimeout(o), f = 0, o = a = u = null
        }, n
    }

    function xt(n, t) {
        t = t ? t++ : 1, window.MutationObserver && (10 <= t || (document.body ? new MutationObserver(Lt(n, 100, {
            leading: !1
        })).observe(document.body, {
            childList: !0,
            subtree: !0
        }) : setTimeout(xt.bind(null, n, t), 100)))
    }
    if (un()) {
        location.href;
        var Rt = (function(n) {
            for (var t = n.getPlugins(), e = 0; e < t.length; e++) {
                var r = t[e];
                r.initialized || r.init(), r.initialized = !0
            }
            n.pluginsInitialized = !0
        }(Tt = an().registerTracker(w, ot, ut, ct, st, lt, dt)), j(Tt), !0 === $n(Tt) && null !== (Jn = En()) && Nn(Jn, tt()), kt = Tt, (yt = document.createEvent("Event")).tracker = kt, yt.initEvent("ldfdr.trackerReady", !0, !1), void document.dispatchEvent(yt), Tt);
        "disabled" === Rt.autoTrackingMode || "on_script_load" === Rt.autoTrackingMode && !1 === Rt.enableAutoTracking || Rt.pageview({}, function() {
            Rt.autoTrackingInitialized = !0
        })
    }
}();