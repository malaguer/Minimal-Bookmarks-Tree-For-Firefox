/*! For license information please see browser_action.js.LICENSE.txt */
(() => {
    var e,
    t,
    n,
    r,
    o = {
        7235: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                cancelAnimationFrame: () => i,
                requestAnimationFrame: () => o
            });
            var r = ["webkit", "moz", "ms", "o"],
            o = function () {
                for (var e = 0, t = r.length; e < t && !window.requestAnimationFrame; ++e)
                    window.requestAnimationFrame = window[r[e] + "RequestAnimationFrame"];
                if (!window.requestAnimationFrame) {
                    var n = 0;
                    window.requestAnimationFrame = function (e) {
                        var t = (new Date).getTime(),
                        r = Math.max(0, 16 - t - n),
                        o = window.setTimeout((function () {
                                    return e(t + r)
                                }), r);
                        return n = t + r,
                        o
                    }
                }
                return window.requestAnimationFrame.bind(window)
            }
            (),
            i = function () {
                for (var e = 0, t = r.length; e < t && !window.cancelAnimationFrame; ++e)
                    window.cancelAnimationFrame = window[r[e] + "CancelAnimationFrame"] || window[r[e] + "CancelRequestAnimationFrame"];
                return window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                    window.clearTimeout(e)
                }),
                window.cancelAnimationFrame.bind(window)
            }
            ()
        },
        8089: (e, t, n) => {
            e.exports = "function" == typeof Array.from ? Array.from : n(3166)
        },
        3166: e => {
            var t,
            n,
            r,
            o;
            e.exports = (t = function (e) {
                return "function" == typeof e
            }, n = Math.pow(2, 53) - 1, r = function (e) {
                var t = function (e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }
                (e);
                return Math.min(Math.max(t, 0), n)
            }, o = function (e) {
                var t = e.next();
                return !Boolean(t.done) && t
            }, function (e) {
                "use strict";
                var n,
                i,
                a,
                u = this,
                c = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== c) {
                    if (!t(c))
                        throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (n = arguments[2])
                }
                var l = function (e, n) {
                    if (null != e && null != n) {
                        var r = e[n];
                        if (null == r)
                            return;
                        if (!t(r))
                            throw new TypeError(r + " is not a function");
                        return r
                    }
                }
                (e, function (e) {
                    if (null != e) {
                        if (["string", "number", "boolean", "symbol"].indexOf(typeof e) > -1)
                            return Symbol.iterator;
                        if ("undefined" != typeof Symbol && "iterator" in Symbol && Symbol.iterator in e)
                            return Symbol.iterator;
                        if ("@@iterator" in e)
                            return "@@iterator"
                    }
                }
                    (e));
                if (void 0 !== l) {
                    i = t(u) ? Object(new u) : [];
                    var s,
                    f,
                    d = l.call(e);
                    if (null == d)
                        throw new TypeError("Array.from requires an array-like or iterable object");
                    for (a = 0; ; ) {
                        if (!(s = o(d)))
                            return i.length = a, i;
                        f = s.value,
                        i[a] = c ? c.call(n, f, a) : f,
                        a++
                    }
                } else {
                    var m = Object(e);
                    if (null == e)
                        throw new TypeError("Array.from requires an array-like object - not null or undefined");
                    var p,
                    v = r(m.length);
                    for (i = t(u) ? Object(new u(v)) : new Array(v), a = 0; a < v; )
                        p = m[a], i[a] = c ? c.call(n, p, a) : p, a++;
                    i.length = v
                }
                return i
            })
        },
        9015: e => {
            e.exports = function (e, t) {
                return Array.prototype.slice.call(e, t)
            }
        },
        8881: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(3889),
            o = n(2187);
            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i(e)
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, c(r.key), r)
                }
            }
            function u(e, t, n) {
                return (t = c(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function c(e) {
                var t = function (e, t) {
                    if ("object" != i(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == i(t) ? t : t + ""
            }
            var l = function () {
                return e = function e(t, n, r) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    u(this, "translator", void 0),
                    u(this, "dialogRenderer", void 0),
                    u(this, "settings", void 0),
                    this.translator = t,
                    this.dialogRenderer = n,
                    this.settings = r
                },
                (t = [{
                            key: "deleteBookmark",
                            value: function (e) {
                                var t = r.A.getElementData(e, "itemId"),
                                n = e.querySelector("span").innerText,
                                i = function () {
                                    chrome.bookmarks.remove(t, (function () {
                                            e.parentNode.removeChild(e)
                                        }))
                                };
                                this.settings.isEnabled("confirm_bookmark_deletion") ? this.dialogRenderer.render(new o.T("".concat(this.translator.translate("deleteBookmark"), "<br /><br />").concat(n), i)) : i()
                            }
                        }
                    ]) && a(e.prototype, t),
                n && a(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        5992: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => l
            });
            var r = n(6637),
            o = n(3889);
            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i(e)
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, c(r.key), r)
                }
            }
            function u(e, t, n) {
                return (t = c(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function c(e) {
                var t = function (e, t) {
                    if ("object" != i(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == i(t) ? t : t + ""
            }
            var l = function () {
                function e(t, n, r, o) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    u(this, "settings", void 0),
                    u(this, "contextMenuFactory", void 0),
                    u(this, "contextMenuRenderer", void 0),
                    u(this, "folderToggler", void 0),
                    this.settings = t,
                    this.contextMenuFactory = n,
                    this.contextMenuRenderer = r,
                    this.folderToggler = o
                }
                return t = e,
                i = [{
                        key: "openBookmark",
                        value: function (e, t) {
                            var n,
                            o = !0;
                            switch (t) {
                            case "new":
                                n = r.I.foregroundTab;
                                break;
                            case "background":
                                n = r.I.backgroundTab,
                                o = !1;
                                break;
                            case "new-window":
                                n = r.I.newWindow;
                                break;
                            case "new-incognito-window":
                                n = r.I.newIncognitoWindow;
                                break;
                            default:
                                n = r.I.activeTab
                            }
                            r.W.open(e, n).then((function () {
                                    o && window.close()
                                }))
                        }
                    }
                ],
                (n = [{
                            key: "handleClick",
                            value: function (t) {
                                if (!this.contextMenuRenderer.isMenuOpen()) {
                                    if (!(t.target instanceof HTMLElement))
                                        return !1;
                                    if ("SPAN" !== t.target.nodeName)
                                        return !1;
                                    if (document.querySelectorAll(".selected").forEach((function (e) {
                                                e.classList.remove("selected")
                                            })), t.target.parentNode instanceof HTMLElement && t.target.parentNode.classList.contains("folder"))
                                        return this.folderToggler.toggle(t.target.parentNode), !1;
                                    if (0 !== t.button)
                                        return !1;
                                    var n = "click_action";
                                    if ((t.ctrlKey || t.metaKey) && (n = "super_click_action"), t.target.parentNode instanceof HTMLElement) {
                                        var r = o.A.getElementData(t.target.parentNode, "url");
                                        e.openBookmark(r, this.settings.getString(n))
                                    }
                                    return o.A.nothing(t)
                                }
                                this.contextMenuRenderer.clear()
                            }
                        }, {
                            key: "handleRightClick",
                            value: function (e) {
                                if (!(e.target instanceof HTMLElement))
                                    return o.A.nothing(e);
                                if ("SPAN" !== e.target.nodeName)
                                    return o.A.nothing(e);
                                if (document.querySelectorAll(".selected").forEach((function (e) {
                                            e.classList.remove("selected")
                                        })), !(e.target.parentNode instanceof HTMLElement))
                                    return o.A.nothing(e);
                                var t = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                if (e.target.parentNode.classList.contains("folder")) {
                                    var n = e.target.parentNode;
                                    return n.classList.add("selected"),
                                    this.contextMenuRenderer.render(this.contextMenuFactory.forFolder(n), t),
                                    o.A.nothing(e)
                                }
                                var r = e.target.parentNode;
                                return r.classList.add("selected"),
                                this.contextMenuRenderer.render(this.contextMenuFactory.forBookmark(r), t),
                                o.A.nothing(e)
                            }
                        }, {
                            key: "handleMouseDown",
                            value: function (t) {
                                if (t.preventDefault(), !(t.target instanceof HTMLElement))
                                    return !1;
                                if ("SPAN" !== t.target.nodeName)
                                    return !1;
                                if (document.querySelectorAll(".selected").forEach((function (e) {
                                            e.classList.remove("selected")
                                        })), 1 !== t.button || !(t.target.parentNode instanceof HTMLElement))
                                    return !1;
                                if (t.target.parentNode.classList.contains("folder"))
                                    return o.A.openAllBookmarks(o.A.getElementData(t.target.parentNode, "itemId")), o.A.nothing(t);
                                var n = o.A.getElementData(t.target.parentNode, "url");
                                e.openBookmark(n, this.settings.getString("middle_click_action"))
                            }
                        }
                    ]) && a(t.prototype, n),
                i && a(t, i),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                n,
                i
            }
            ()
        },
        743: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                d: () => A
            });
            var a = function () {
                return e = function e(t) {
                    var n,
                    r,
                    o;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    n = this,
                    o = void 0,
                    (r = i(r = "items"))in n ? Object.defineProperty(n, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[r] = o,
                    this.items = t
                },
                (t = [{
                            key: "render",
                            value: function (e, t) {
                                this.items.forEach((function (n) {
                                        e.appendChild(n.render(document, t))
                                    }))
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ();
            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u(e)
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, s(r.key), r)
                }
            }
            function l(e, t, n) {
                return (t = s(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function s(e) {
                var t = function (e, t) {
                    if ("object" != u(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != u(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == u(t) ? t : t + ""
            }
            var f = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    l(this, "label", void 0),
                    l(this, "callback", void 0),
                    this.label = t,
                    this.callback = n
                },
                (t = [{
                            key: "render",
                            value: function (e, t) {
                                var n = this,
                                r = window.document.createElement("li");
                                return r.innerText = this.label,
                                r.addEventListener("click", (function () {
                                        n.callback(),
                                        t()
                                    })),
                                r
                            }
                        }
                    ]) && c(e.prototype, t),
                n && c(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            (),
            d = n(4604);
            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                m(e)
            }
            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, y(r.key), r)
                }
            }
            function v(e, t, n) {
                return (t = y(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function y(e) {
                var t = function (e, t) {
                    if ("object" != m(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != m(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == m(t) ? t : t + ""
            }
            var h = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    v(this, "inputFields", void 0),
                    v(this, "callback", void 0),
                    v(this, "inputs", []),
                    this.inputFields = t,
                    this.callback = n
                },
                (t = [{
                            key: "render",
                            value: function (e, t, n, r) {
                                var o = this;
                                this.inputFields.forEach((function (n) {
                                        var r = t.createElement("div");
                                        r.className = "row";
                                        var i = t.createElement("label");
                                        i.htmlFor = n.id,
                                        i.innerText = n.label,
                                        r.appendChild(i);
                                        var a = t.createElement("input");
                                        a.type = "text",
                                        a.id = n.id,
                                        a.value = n.value,
                                        r.appendChild(a),
                                        e.appendChild(r),
                                        o.inputs = o.inputs.concat(a)
                                    }));
                                var i = new d.i;
                                e.appendChild(i.createButton(t, n.translate("bookmarkEditSave"), (function () {
                                            var e = {};
                                            o.inputs.forEach((function (t) {
                                                    e[t.id] = t.value
                                                })),
                                            o.callback(e),
                                            r()
                                        }), !0)),
                                e.appendChild(i.createButton(t, n.translate("bookmarkEditCancel"), r))
                            }
                        }, {
                            key: "onBeforeRender",
                            value: function (e) {}
                        }, {
                            key: "onAfterRender",
                            value: function (e) {
                                this.inputs[0]instanceof HTMLInputElement && this.inputs[0].focus()
                            }
                        }
                    ]) && p(e.prototype, t),
                n && p(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            (),
            b = n(2187);
            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                g(e)
            }
            function w(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, S(r.key), r)
                }
            }
            function S(e) {
                var t = function (e, t) {
                    if ("object" != g(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != g(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == g(t) ? t : t + ""
            }
            var E = function () {
                return e = function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                },
                (t = [{
                            key: "render",
                            value: function (e, t) {
                                return window.document.createElement("hr")
                            }
                        }
                    ]) && w(e.prototype, t),
                n && w(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            (),
            k = n(6637),
            T = n(3889);
            function j(e) {
                return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                j(e)
            }
            function x(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, O(r.key), r)
                }
            }
            function P(e, t, n) {
                return (t = O(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function O(e) {
                var t = function (e, t) {
                    if ("object" != j(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != j(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == j(t) ? t : t + ""
            }
            var A = function () {
                return e = function e(t, n, r, o) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    P(this, "bookmarkManager", void 0),
                    P(this, "translator", void 0),
                    P(this, "dialogRenderer", void 0),
                    P(this, "settings", void 0),
                    this.bookmarkManager = t,
                    this.translator = n,
                    this.dialogRenderer = r,
                    this.settings = o
                },
                (t = [{
                            key: "forBookmark",
                            value: function (e) {
                                var t = this,
                                n = T.A.getElementData(e, "url"),
                                r = T.A.getElementData(e, "itemId"),
                                o = e.querySelector("span").innerText;
                                return new a([new f(this.translator.translate("popupEditBookmark"), (function () {
                                                t.dialogRenderer.render(new h([{
                                                                id: "name",
                                                                label: t.translator.translate("bookmarkEditName"),
                                                                value: o
                                                            }, {
                                                                id: "url",
                                                                label: t.translator.translate("bookmarkEditUrl"),
                                                                value: n
                                                            }
                                                        ], (function (t) {
                                                            chrome.bookmarks.update(r, {
                                                                title: t.name,
                                                                url: t.url
                                                            }, (function () {
                                                                    e.querySelector("span").innerText = t.name,
                                                                    e.dataset.url = t.url
                                                                }))
                                                        }))),
                                                e.classList.remove("selected")
                                            })), new f(this.translator.translate("popupDeleteBookmark"), (function () {
                                                t.bookmarkManager.deleteBookmark(e)
                                            })), new E, new f(this.translator.translate("popupOpenNewTab"), (function () {
                                                k.W.open(n, k.I.foregroundTab)
                                            })), new f(this.translator.translate("popupOpenNewWindow"), (function () {
                                                k.W.open(n, k.I.newWindow)
                                            })), new f(this.translator.translate("popupOpenNewIncognitoWindow"), (function () {
                                                k.W.open(n, k.I.newIncognitoWindow)
                                            }))])
                            }
                        }, {
                            key: "forFolder",
                            value: function (e) {
                                var t = this,
                                n = T.A.getElementData(e, "itemId"),
                                r = e.querySelector("span").innerText;
                                return new a([new f(this.translator.translate("popupOpenAll"), (function () {
                                                T.A.openAllBookmarks(n)
                                            })), new f(this.translator.translate("popupEditFolder"), (function () {
                                                t.dialogRenderer.render(new h([{
                                                                id: "name",
                                                                label: t.translator.translate("bookmarkEditName"),
                                                                value: r
                                                            }
                                                        ], (function (t) {
                                                            chrome.bookmarks.update(n, {
                                                                title: t.name
                                                            }, (function () {
                                                                    e.querySelector("span").innerText = t.name
                                                                }))
                                                        }))),
                                                e.classList.remove("selected")
                                            })), new f(this.translator.translate("popupDeleteFolder"), (function () {
                                                t.dialogRenderer.render(new b.T("".concat(t.translator.translate("deleteBookmarkFolder"), "<br /><br />").concat(r), (function () {
                                                            chrome.bookmarks.removeTree(n, (function () {
                                                                    e.parentNode.removeChild(e)
                                                                }))
                                                        }))),
                                                e.classList.remove("selected")
                                            }))])
                            }
                        }
                    ]) && x(e.prototype, t),
                n && x(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        7797: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, a(r.key), r)
                }
            }
            function i(e, t, n) {
                return (t = a(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                q: () => u
            });
            var u = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    i(this, "document", void 0),
                    i(this, "locationCalculator", void 0),
                    i(this, "wrapper", null),
                    this.document = t,
                    this.locationCalculator = n
                },
                (t = [{
                            key: "render",
                            value: function (e, t) {
                                var n = this;
                                this.clear();
                                var r = window.document.createElement("ul");
                                r.className = "contextMenu",
                                e.render(r, (function () {
                                        n.clear()
                                    })),
                                r.style.left = "-10000px",
                                this.wrapper = r,
                                this.document.body.appendChild(this.wrapper);
                                var o = this.locationCalculator.calculate(r.getBoundingClientRect(), t);
                                r.style.left = "".concat(o.x, "px"),
                                r.style.top = "".concat(o.y, "px")
                            }
                        }, {
                            key: "isMenuOpen",
                            value: function () {
                                return null !== this.wrapper
                            }
                        }, {
                            key: "clear",
                            value: function () {
                                null !== this.wrapper && (this.document.body.removeChild(this.wrapper), this.wrapper = null)
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        4459: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, a(r.key), r)
                }
            }
            function i(e, t, n) {
                return (t = a(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                q: () => u
            });
            var u = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    i(this, "document", void 0),
                    i(this, "wrapper", null),
                    i(this, "translator", void 0),
                    this.document = t,
                    this.translator = n
                },
                (t = [{
                            key: "render",
                            value: function (e) {
                                var t = this;
                                this.clear(),
                                e.onBeforeRender(this.document);
                                var n = this.document.createElement("div");
                                n.id = "dialog",
                                e.render(n, this.document, this.translator, (function () {
                                        t.clear()
                                    })),
                                this.wrapper = n,
                                this.document.body.appendChild(n),
                                e.onAfterRender(this.document)
                            }
                        }, {
                            key: "clear",
                            value: function () {
                                null !== this.wrapper && (document.body.removeChild(this.wrapper), this.wrapper = null)
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        9413: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, a(r.key), r)
                }
            }
            function i(e, t, n) {
                return (t = a(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                x: () => m
            });
            var u = function () {
                return e = function e(t, n, r) {
                    if (function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                        }
                            (this, e), i(this, "element", void 0), i(this, "duration", 1), i(this, "initialHeight", 0), i(this, "delta", 0), i(this, "targetHeight", 0), i(this, "startTime", 0), this.element = t, this.duration = r, "auto" === n)this.targetHeight = Array.prototype.reduce.call(t.childNodes, (function (e, t) {
                                    return e + (t.offsetHeight || 0)
                                }), 0);
                    else {
                        if ("number" != typeof n)
                            throw new Error('Target height must be an integer or "auto"');
                        this.targetHeight = n
                    }
                    this.startTime = null
                },
                (t = [{
                            key: "requestFrame",
                            value: function () {
                                var e = this;
                                window.requestAnimationFrame((function (t) {
                                        e.animateFrame(t)
                                    }))
                            }
                        }, {
                            key: "animateFrame",
                            value: function (e) {
                                this.startTime = this.startTime || e;
                                var t = (e - this.startTime) / this.duration;
                                t >= 1 ? this.element.style.height = 0 === this.targetHeight ? "0px" : "auto" : (this.element.style.height = "".concat(this.initialHeight + t * this.delta, "px"), this.requestFrame())
                            }
                        }, {
                            key: "start",
                            value: function () {
                                if (this.duration <= 0)
                                    this.element.style.height = "".concat(this.targetHeight, "px");
                                else {
                                    var e = window.getComputedStyle(this.element, null);
                                    this.initialHeight = parseFloat(e.getPropertyValue("height")),
                                    this.initialHeight !== this.targetHeight && (this.delta = this.targetHeight - this.initialHeight, this.requestFrame())
                                }
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            (),
            c = n(3889);
            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l(e)
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, d(r.key), r)
                }
            }
            function f(e, t, n) {
                return (t = d(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function d(e) {
                var t = function (e, t) {
                    if ("object" != l(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != l(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == l(t) ? t : t + ""
            }
            var m = function () {
                function e(t, n, r) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    f(this, "openFolders", void 0),
                    f(this, "treeRenderer", void 0),
                    f(this, "settings", void 0),
                    this.openFolders = t,
                    this.treeRenderer = n,
                    this.settings = r
                }
                return t = e,
                r = [{
                        key: "slideUp",
                        value: function (e, t) {
                            new u(e, 0, t).start()
                        }
                    }, {
                        key: "slideDown",
                        value: function (e, t) {
                            new u(e, "auto", t).start()
                        }
                    }, {
                        key: "getAncestorsWithClass",
                        value: function (t, n) {
                            var r = [];
                            return t.parentNode instanceof Element ? (t.parentNode.classList.contains(n) && r.push(t.parentNode), r.concat(e.getAncestorsWithClass(t.parentNode, n))) : r
                        }
                    }
                ],
                (n = [{
                            key: "toggle",
                            value: function (e) {
                                var t = this;
                                "1" !== c.A.getElementData(e, "loaded") ? chrome.bookmarks.getSubTree(c.A.getElementData(e, "itemId"), (function (n) {
                                        var r = t.treeRenderer.renderTree(n[0], document, !1, !1);
                                        e.appendChild(r),
                                        e.dataset.loaded = "1",
                                        t.folderLoaded(e)
                                    })) : this.folderLoaded(e)
                            }
                        }, {
                            key: "folderLoaded",
                            value: function (t) {
                                var n = this,
                                r = this.settings.getNumber("animation_duration");
                                if (this.settings.isEnabled("close_old_folder")) {
                                    if (!(t.parentNode instanceof HTMLElement))
                                        return;
                                    t.parentNode.querySelectorAll(".folder.open").forEach((function (n) {
                                            n !== t && (n.classList.remove("open"), n.querySelectorAll(".sub").forEach((function (t) {
                                                        e.slideUp(t, r)
                                                    })))
                                        }))
                                }
                                t.classList.toggle("open");
                                var o = t.classList.contains("open"),
                                i = t.querySelectorAll(".sub")[0];
                                o ? e.slideDown(i, r) : e.slideUp(i, r);
                                var a = c.A.getElementData(i.parentNode, "itemId");
                                if (this.settings.isEnabled("close_old_folder"))
                                    return this.openFolders.clear(), o && this.openFolders.add(a), void e.getAncestorsWithClass(t, "open").forEach((function (e) {
                                            n.openFolders.add(c.A.getElementData(e, "itemId"))
                                        }));
                                o ? this.openFolders.add(a) : (this.openFolders.remove(a), i.querySelectorAll("li").forEach((function (t) {
                                            n.openFolders.remove(c.A.getElementData(t, "itemId")),
                                            t.classList.remove("open"),
                                            t.querySelectorAll(".sub").forEach((function (t) {
                                                    e.slideUp(t, r)
                                                }))
                                        })))
                            }
                        }
                    ]) && s(t.prototype, n),
                r && s(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                n,
                r
            }
            ()
        },
        5849: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                C: () => a
            });
            var a = function () {
                return e = function e(t) {
                    var n,
                    r,
                    o;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    n = this,
                    o = void 0,
                    (r = i(r = "bookmarkManager"))in n ? Object.defineProperty(n, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[r] = o,
                    this.bookmarkManager = t
                },
                (t = [{
                            key: "handleKeyUp",
                            value: function (e) {
                                if ("Delete" === e.key) {
                                    var t = document.querySelectorAll(":hover[data-item-id]:not(.folder)");
                                    if (1 === t.length) {
                                        var n = t[0];
                                        n instanceof HTMLElement && this.bookmarkManager.deleteBookmark(n)
                                    }
                                }
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        3065: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, a(r.key), r)
                }
            }
            function i(e, t, n) {
                return (t = a(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                A: () => u
            });
            var u = function () {
                return e = function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    i(this, "key", void 0),
                    i(this, "elements", void 0),
                    this.key = t,
                    this.elements = [],
                    this.load()
                },
                (t = [{
                            key: "add",
                            value: function (e) {
                                -1 === this.elements.indexOf(e) && (this.elements.push(e), this.save())
                            }
                        }, {
                            key: "remove",
                            value: function (e) {
                                var t = this.elements.indexOf(e);
                                -1 !== t && (this.elements.splice(t, 1), this.save())
                            }
                        }, {
                            key: "clear",
                            value: function () {
                                this.elements = [],
                                this.save()
                            }
                        }, {
                            key: "contains",
                            value: function (e) {
                                return this.elements.indexOf(e) > -1
                            }
                        }, {
                            key: "load",
                            value: function () {
                                var e = localStorage.getItem(this.key);
                                null !== e && (this.elements = JSON.parse(e))
                            }
                        }, {
                            key: "save",
                            value: function () {
                                var e = JSON.stringify(this.elements);
                                localStorage.setItem(this.key, e)
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        9119: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function (e, t) {
                            if (!e)
                                return;
                            if ("string" == typeof e)
                                return i(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n)
                                    return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return i(e, t)
                            }
                                (e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                            o = function () {};
                            return {
                                s: o,
                                n: function () {
                                    return r >= e.length ? {
                                        done: !0
                                    }
                                     : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function (e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a,
                u = !0,
                c = !1;
                return {
                    s: function () {
                        n = n.call(e)
                    },
                    n: function () {
                        var e = n.next();
                        return u = e.done,
                        e
                    },
                    e: function (e) {
                        c = !0,
                        a = e
                    },
                    f: function () {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                }
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, c(r.key), r)
                }
            }
            function u(e, t, n) {
                return (t = c(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function c(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                g: () => l
            });
            var l = function () {
                return e = function e(t, n, r) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    u(this, "openFolders", void 0),
                    u(this, "hideEmptyFolders", void 0),
                    u(this, "startWithAllFoldersClosed", void 0),
                    this.openFolders = t,
                    this.hideEmptyFolders = n,
                    this.startWithAllFoldersClosed = r
                },
                t = [{
                        key: "renderTree",
                        value: function (e, t) {
                            var n,
                            r = this,
                            o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                            return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? n = t.createDocumentFragment() : ((n = t.createElement("ul")).className = "sub", o && (n.style.height = "auto")),
                            void 0 === e.children || e.children.forEach((function (e) {
                                    void 0 !== e && (e.url ? n.appendChild(r.renderBookmark(e, t)) : n.appendChild(r.renderFolder(!r.startWithAllFoldersClosed && r.openFolders.contains(e.id), t, e)))
                                })),
                            n
                        }
                    }, {
                        key: "renderFolder",
                        value: function (e, t, n) {
                            var r = t.createElement("li");
                            if (void 0 !== n.url)
                                throw new Error("Element appears to be a bookmark rather than a folder. Unable to render.");
                            r.classList.add("folder"),
                            e && r.classList.add("open");
                            var o = t.createElement("span");
                            if (o.innerText = n.title, r.appendChild(o), this.hideEmptyFolders && this.isFolderEmpty(n))
                                r.classList.add("hidden");
                            else if (r.dataset.itemId = n.id, n.children && n.children.length) {
                                if (e) {
                                    var i = this.renderTree(n, t, !1, e);
                                    r.appendChild(i)
                                }
                                r.dataset.loaded = e ? "1" : "0"
                            }
                            return r
                        }
                    }, {
                        key: "renderBookmark",
                        value: function (e, t) {
                            if (void 0 === e.url)
                                throw new Error("Element does not appear to be a bookmark. Unable to render.");
                            var n = t.createElement("li");
                            n.dataset.url = e.url,
                            n.dataset.itemId = e.id;
                            var r = t.createElement("span");
                            return /^\s*$/.test(e.title) ? r.innerHTML = "&nbsp;" : r.innerText = e.title,
                            r.title = "".concat(e.title, " [").concat(e.url, "]"),
                            r.style.backgroundImage = 'url("'.concat(this.getFaviconUrl(e.url), '")'),
                            r.className = "bookmark",
                            n.appendChild(r),
                            n
                        }
                    }, {
                        key: "getFaviconUrl",
                        value: function (e) {
                            var t = new URL(chrome.runtime.getURL("/_favicon/"));
                            return t.searchParams.set("pageUrl", e),
                            t.searchParams.set("size", "32"),
                            t.toString()
                        }
                    }, {
                        key: "isFolderEmpty",
                        value: function (e) {
                            if (void 0 === e.children)
                                return !1;
                            var t = e.children;
                            if (0 === t.length)
                                return !0;
                            var n,
                            r = o(t);
                            try {
                                for (r.s(); !(n = r.n()).done; )
                                    if (e = n.value, !this.isFolderEmpty(e))
                                        return !1
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            return !0
                        }
                    }
                ],
                t && a(e.prototype, t),
                n && a(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        2187: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => c
            });
            var r = n(4604);
            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o(e)
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, u(r.key), r)
                }
            }
            function a(e, t, n) {
                return (t = u(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function u(e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != o(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == o(t) ? t : t + ""
            }
            var c = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    a(this, "question", void 0),
                    a(this, "callback", void 0),
                    this.question = t,
                    this.callback = n
                },
                (t = [{
                            key: "render",
                            value: function (e, t, n, o) {
                                var i = this,
                                a = t.createElement("p");
                                a.innerHTML = this.question,
                                e.appendChild(a);
                                var u = new r.i;
                                e.appendChild(u.createButton(t, n.translate("confirmationConfirm"), (function () {
                                            i.callback(),
                                            o()
                                        }), !0)),
                                e.appendChild(u.createButton(t, n.translate("confirmationDeny"), o))
                            }
                        }, {
                            key: "onBeforeRender",
                            value: function (e) {}
                        }, {
                            key: "onAfterRender",
                            value: function (e) {}
                        }
                    ]) && i(e.prototype, t),
                n && i(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        4604: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                i: () => a
            });
            var a = function () {
                return e = function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                },
                t = [{
                        key: "createButton",
                        value: function (e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = e.createElement("button");
                            return o.className = "btn " + (r ? " primary" : ""),
                            o.innerText = t,
                            o.addEventListener("click", (function () {
                                    return n()
                                })),
                            o
                        }
                    }
                ],
                t && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        4208: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => u
            });
            var r = n(9866),
            o = n(5427),
            i = n(3889);
            function a(e) {
                return e.parentNode instanceof Element ? Array.from(e.parentNode.childNodes).filter((function (e) {
                        return e.nodeType !== Node.TEXT_NODE
                    })).indexOf(e) : -1
            }
            function u(e, t) {
                var n = null,
                u = o([e], {
                    isContainer: function (e) {
                        return e.classList.contains("sub")
                    },
                    moves: function (e) {
                        return !e.classList.contains("nosort")
                    },
                    accepts: function (e, t) {
                        return ("bookmarks" !== e.parentNode.getAttribute("id") || 0 !== a(e)) && (e.classList.contains("folder") || t.classList.contains("sub"))
                    },
                    revertOnSpill: !0
                }).on("drag", (function (e) {
                            n = a(e)
                        })).on("drop", (function (e) {
                            var t = a(e);
                            if (-1 !== t && null !== n) {
                                var r = {
                                    index: t
                                };
                                r.index > n && r.index++,
                                "bookmarks" === e.parentNode.getAttribute("id") ? r.index-- : r.parentId = i.A.getElementData(e.parentNode.parentNode, "itemId"),
                                chrome.bookmarks.move(i.A.getElementData(e, "itemId"), r)
                            }
                        }));
                r([t], {
                    margin: 20,
                    maxSpeed: 5,
                    scrollWhenOutside: !0,
                    autoScroll: function () {
                        return this.down && u.dragging
                    }
                })
            }
        },
        4346: (e, t, n) => {
            "use strict";
            n.a(e, (async(e, t) => {
                    try {
                        var r,
                        o = n(6981),
                        i = n(4208),
                        a = n(5992),
                        u = n(743),
                        c = n(9259),
                        l = n(4459),
                        s = n(7797),
                        f = n(3662),
                        d = n(9119),
                        m = n(3065),
                        p = n(9413),
                        v = n(3889),
                        y = n(5849),
                        h = n(8881),
                        b = await o.k.create(),
                        g = new c.H,
                        w = new l.q(document, g),
                        S = new h.A(g, w, b),
                        E = new u.d(S, g, w, b),
                        k = new s.q(document, new f.y(window)),
                        T = new m.A("openfolders"),
                        j = new d.g(T, b.isEnabled("hide_empty_folders"), b.isEnabled("start_with_all_folders_closed")),
                        x = new p.x(T, j, b),
                        P = new a.F(b, E, k, x),
                        O = new y.C(S),
                        A = document.querySelector("#loading"),
                        L = document.querySelector("#bookmarks"),
                        N = document.querySelector("#wrapper");
                        if (String(b.settings.root_folder) === "all") {
                            chrome.bookmarks.getTree((function (e) {
                                if (void 0 !== e[0] && void 0 !== e[0].children) {
                                    var t = j.renderTree(e[0].children[1], document, !0);
                                    delete e[0].children[1];
                                    var n = j.renderTree(e[0], document, !0);
                                    if (n && (L.appendChild(n), L.childNodes.forEach((function (e) {
                                        "LI" === e.nodeName && e.classList.add("nosort")
                                    }))), t && L.appendChild(t), b.isEnabled("remember_scroll_position")) {
                                        var r = localStorage.getItem("scrolltop");
                                        null !== r && setTimeout((function () {
                                            N.scrollTop = parseInt(r, 10)
                                        }), 10)
                                    }
                                    L.style.display = "block",
                                    A.parentNode.removeChild(A)
                                }
                            }))
                        } else {
                            chrome.bookmarks.getSubTree(String(b.settings.root_folder), (function (e) {
                                if (void 0 !== e[0]) {
                                    var t = j.renderTree(e[0], document, !0);
                                    t && (L.appendChild(t), L.childNodes.forEach((function (e) {
                                        "LI" === e.nodeName && e.classList.add("nosort")
                                    })));
                                    if (b.isEnabled("remember_scroll_position")) {
                                        var r = localStorage.getItem("scrolltop");
                                        null !== r && setTimeout((function () {
                                            N.scrollTop = parseInt(r, 10)
                                        }), 10)
                                    }
                                    L.style.display = "block",
                                    A.parentNode.removeChild(A)
                                }
                            }))
                        }

                        L.addEventListener("click", (function (e) {
                            P.handleClick(e)
                        })),
                        L.addEventListener("contextmenu", (function (e) {
                            P.handleRightClick(e)
                        })),
                        L.addEventListener("mousedown", (function (e) {
                            P.handleMouseDown(e)
                        })),
                        b.isEnabled("keyboard_support") && window.addEventListener("keyup", (function (e) {
                            O.handleKeyUp(e)
                        })),
                        document.addEventListener("contextmenu", (function () {
                            return !1
                        })),
                        (0, i.S)(L, N);

                        b.isEnabled("remember_scroll_position") && N.addEventListener("scroll", (function () {
                            clearTimeout(r),
                            r = setTimeout((function () {
                                localStorage.setItem("scrolltop", String(N.scrollTop))
                            }), 100)
                        }));
                        v.A.translateDocument(window.document);
                        var _ = Math.floor(Math.min(800, b.getNumber("width"))),
                        C = Math.floor(Math.min(600, b.getNumber("height")));
                        N.style.width = "".concat(_, "px"),
                        N.style.minWidth = "".concat(_, "px"),
                        N.style.maxWidth = "".concat(_, "px"),
                        N.style.maxHeight = "".concat(C, "px");
                        var F = b.getString("font");
                        "__default__" !== F && (document.body.style.fontFamily = '"'.concat(F, '"')),
                        document.body.classList.add("theme--".concat(b.getString("theme"))),
                        t()
                    } catch (e) {
                        t(e)
                    }
                }), 1)
        },
        3662: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                y: () => a
            });
            var a = function () {
                return e = function e(t) {
                    var n,
                    r,
                    o;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    n = this,
                    o = void 0,
                    (r = i(r = "window"))in n ? Object.defineProperty(n, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[r] = o,
                    this.window = t
                },
                (t = [{
                            key: "calculate",
                            value: function (e, t) {
                                return {
                                    x: Math.min(t.x, this.window.innerWidth - e.width - 15),
                                    y: Math.min(t.y, this.window.innerHeight - e.height - 15)
                                }
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        6637: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            var a;
            n.d(t, {
                I: () => a,
                W: () => u
            }),
            function (e) {
                e[e.activeTab = 0] = "activeTab",
                e[e.foregroundTab = 1] = "foregroundTab",
                e[e.backgroundTab = 2] = "backgroundTab",
                e[e.newWindow = 3] = "newWindow",
                e[e.newIncognitoWindow = 4] = "newIncognitoWindow"
            }
            (a || (a = {}));
            var u = function () {
                return e = function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                },
                n = [{
                        key: "open",
                        value: function (e, t) {
                            return new Promise((function (n, r) {
                                    switch (t) {
                                    case a.foregroundTab:
                                        chrome.tabs.create({
                                            url: e,
                                            active: !0
                                        }),
                                        n();
                                        break;
                                    case a.backgroundTab:
                                        chrome.tabs.create({
                                            url: e,
                                            active: !1
                                        }),
                                        n();
                                        break;
                                    case a.newWindow:
                                        chrome.windows.create({
                                            url: e
                                        }),
                                        n();
                                        break;
                                    case a.newIncognitoWindow:
                                        chrome.windows.create({
                                            url: e,
                                            incognito: !0
                                        }),
                                        n();
                                        break;
                                    default:
                                    case a.activeTab:
                                        var o = /^javascript:(.*)/i.exec(e);
                                        o && o[1] ? (alert("Unfortunately there seems to be no way to run bookmarklets in Chrome with Manifest V3. If anyone has any advice, please contact me."), r()) : (chrome.tabs.update({
                                                url: e,
                                                active: !0
                                            }), n())
                                    }
                                }))
                        }
                    }, {
                        key: "openAll",
                        value: function (e, t) {
                            var n = this;
                            if (e.children) {
                                var r = this.getAllBookmarkUrlsInFolder(e),
                                o = a.activeTab;
                                t && (o = a.backgroundTab),
                                this.open(r[0], o),
                                r.slice(1).forEach((function (e) {
                                        n.open(e, a.backgroundTab)
                                    }))
                            }
                        }
                    }, {
                        key: "getAllBookmarkUrlsInFolder",
                        value: function (e) {
                            var t = this,
                            n = [];
                            return e.url && n.push(e.url),
                            e.children && e.children.forEach((function (e) {
                                    n = n.concat(t.getAllBookmarkUrlsInFolder(e))
                                })),
                            n
                        }
                    }
                ],
                (t = null) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        3889: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f
            });
            var r = n(6637),
            o = n(9259);
            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i(e)
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, u(r.key), r)
                }
            }
            function u(e) {
                var t = function (e, t) {
                    if ("object" != i(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == i(t) ? t : t + ""
            }
            var c,
            l,
            s,
            f = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                }
                return t = e,
                o = [{
                        key: "getElementData",
                        value: function (e, t) {
                            var n = e.dataset[t];
                            if (void 0 === n)
                                throw new Error('Element does not have data in key "' + t + '"');
                            return n
                        }
                    }, {
                        key: "openAllBookmarks",
                        value: function (e) {
                            chrome.bookmarks.getSubTree(e, (function (e) {
                                    r.W.openAll(e[0], !0),
                                    window.close()
                                }))
                        }
                    }, {
                        key: "nothing",
                        value: function (e) {
                            return e.preventDefault(),
                            e.stopPropagation(),
                            e.stopImmediatePropagation(),
                            !1
                        }
                    }, {
                        key: "setBrowserActionIcon",
                        value: function (e) {
                            var t = {
                            default:
                                "/icons/bookmark48.png",
                                star: "/icons/black-star.png",
                                star_empty: "/icons/black-open-star.png",
                                white_star: "/icons/white-star.png",
                                white_star_empty: "/icons/white-open-star.png"
                            };
                            t.hasOwnProperty(e) && chrome.action.setIcon({
                                path: t[e]
                            })
                        }
                    }, {
                        key: "translateDocument",
                        value: function (t) {
                            t.querySelectorAll("[data-i18n-key]").forEach((function (t) {
                                    var n = t.getAttribute("data-i18n-key");
                                    if (null !== n) {
                                        var r = e.translator.translate(n);
                                        "" !== r && (t.innerHTML = r)
                                    }
                                }))
                        }
                    }, {
                        key: "addEventListenerMulti",
                        value: function (e, t, n) {
                            t.split(" ").forEach((function (t) {
                                    return e.addEventListener(t, n, !1)
                                }))
                        }
                    }
                ],
                (n = null) && a(t.prototype, n),
                o && a(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                n,
                o
            }
            ();
            c = f,
            l = "translator",
            s = new o.H,
            (l = u(l))in c ? Object.defineProperty(c, l, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : c[l] = s
        },
        288: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, a(r.key), r)
                }
            }
            function i(e, t, n) {
                return (t = a(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                z: () => u
            });
            var u = function () {
                return e = function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    i(this, "settings", void 0),
                    i(this, "setter", void 0),
                    this.settings = t || {},
                    this.setter = n
                },
                (t = [{
                            key: "set",
                            value: function (e, t) {
                                this.settings[e] = t,
                                this.setter(e, t)
                            }
                        }, {
                            key: "getNumber",
                            value: function (e) {
                                var t = this.settings[e];
                                if ("string" == typeof t)
                                    return parseInt(t, 10);
                                if ("number" != typeof t)
                                    throw new Error('Setting "'.concat(e, " is not a number!"));
                                return t
                            }
                        }, {
                            key: "getString",
                            value: function (e) {
                                var t = this.settings[e];
                                if ("number" == typeof t)
                                    return String(t);
                                if ("string" != typeof t)
                                    throw new Error('Setting "'.concat(e, " is not a string!"));
                                return t
                            }
                        }, {
                            key: "isEnabled",
                            value: function (e) {
                                var t = this.settings[e];
                                if ("boolean" != typeof t)
                                    throw new Error('Setting "'.concat(e, " is not a boolean!"));
                                return t
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        6981: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => s
            });
            var r = n(288);
            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o(e)
            }
            function i() {
                i = function () {
                    return t
                };
                var e,
                t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                a = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                },
                u = "function" == typeof Symbol ? Symbol : {},
                c = u.iterator || "@@iterator",
                l = u.asyncIterator || "@@asyncIterator",
                s = u.toStringTag || "@@toStringTag";
                function f(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    f({}, "")
                } catch (e) {
                    f = function (e, t, n) {
                        return e[t] = n
                    }
                }
                function d(e, t, n, r) {
                    var o = t && t.prototype instanceof g ? t : g,
                    i = Object.create(o.prototype),
                    u = new _(r || []);
                    return a(i, "_invoke", {
                        value: O(e, n, u)
                    }),
                    i
                }
                function m(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = d;
                var p = "suspendedStart",
                v = "suspendedYield",
                y = "executing",
                h = "completed",
                b = {};
                function g() {}
                function w() {}
                function S() {}
                var E = {};
                f(E, c, (function () {
                        return this
                    }));
                var k = Object.getPrototypeOf,
                T = k && k(k(C([])));
                T && T !== n && r.call(T, c) && (E = T);
                var j = S.prototype = g.prototype = Object.create(E);
                function x(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                            f(e, t, (function (e) {
                                    return this._invoke(t, e)
                                }))
                        }))
                }
                function P(e, t) {
                    function n(i, a, u, c) {
                        var l = m(e[i], e, a);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                            f = s.value;
                            return f && "object" == o(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                    n("next", e, u, c)
                                }), (function (e) {
                                    n("throw", e, u, c)
                                })) : t.resolve(f).then((function (e) {
                                    s.value = e,
                                    u(s)
                                }), (function (e) {
                                    return n("throw", e, u, c)
                                }))
                        }
                        c(l.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function (e, r) {
                            function o() {
                                return new t((function (t, o) {
                                        n(e, r, t, o)
                                    }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }
                function O(t, n, r) {
                    var o = p;
                    return function (i, a) {
                        if (o === y)
                            throw Error("Generator is already running");
                        if (o === h) {
                            if ("throw" === i)
                                throw a;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = i, r.arg = a; ; ) {
                            var u = r.delegate;
                            if (u) {
                                var c = A(u, r);
                                if (c) {
                                    if (c === b)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === r.method)
                                r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p)
                                    throw o = h, r.arg;
                                r.dispatchException(r.arg)
                            } else
                                "return" === r.method && r.abrupt("return", r.arg);
                            o = y;
                            var l = m(t, n, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? h : v, l.arg === b)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = h, r.method = "throw", r.arg = l.arg)
                        }
                    }
                }
                function A(t, n) {
                    var r = n.method,
                    o = t.iterator[r];
                    if (o === e)
                        return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
                    var i = m(o, t.iterator, n.arg);
                    if ("throw" === i.type)
                        return n.method = "throw", n.arg = i.arg, n.delegate = null, b;
                    var a = i.arg;
                    return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, b) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                }
                function L(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function _(e) {
                    this.tryEntries = [{
                            tryLoc: "root"
                        }
                    ],
                    e.forEach(L, this),
                    this.reset(!0)
                }
                function C(t) {
                    if (t || "" === t) {
                        var n = t[c];
                        if (n)
                            return n.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var i = -1,
                            a = function n() {
                                for (; ++i < t.length; )
                                    if (r.call(t, i))
                                        return n.value = t[i], n.done = !1, n;
                                return n.value = e,
                                n.done = !0,
                                n
                            };
                            return a.next = a
                        }
                    }
                    throw new TypeError(o(t) + " is not iterable")
                }
                return w.prototype = S,
                a(j, "constructor", {
                    value: S,
                    configurable: !0
                }),
                a(S, "constructor", {
                    value: w,
                    configurable: !0
                }),
                w.displayName = f(S, s, "GeneratorFunction"),
                t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
                },
                t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S, f(e, s, "GeneratorFunction")),
                    e.prototype = Object.create(j),
                    e
                },
                t.awrap = function (e) {
                    return {
                        __await: e
                    }
                },
                x(P.prototype),
                f(P.prototype, l, (function () {
                        return this
                    })),
                t.AsyncIterator = P,
                t.async = function (e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(d(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                            return e.done ? e.value : a.next()
                        }))
                },
                x(j),
                f(j, s, "Generator"),
                f(j, c, (function () {
                        return this
                    })),
                f(j, "toString", (function () {
                        return "[object Generator]"
                    })),
                t.keys = function (e) {
                    var t = Object(e),
                    n = [];
                    for (var r in t)
                        n.push(r);
                    return n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                                return e.value = r, e.done = !1, e
                        }
                        return e.done = !0,
                        e
                    }
                },
                t.values = C,
                _.prototype = {
                    constructor: _,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t)
                            for (var n in this)
                                "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done)
                            throw t;
                        var n = this;
                        function o(r, o) {
                            return u.type = "throw",
                            u.arg = t,
                            n.next = r,
                            o && (n.method = "next", n.arg = e),
                            !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                            u = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e,
                        a.arg = t,
                        i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(a)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                        b
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc), N(n), b
                        }
                    },
                    catch : function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    N(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                delegateYield: function (t, n, r) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = e),
                    b
                }
            },
            t
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a),
                c = u.value
            } catch (e) {
                return void n(e)
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, l(r.key), r)
            }
        }
        function c(e, t, n) {
            return (t = l(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e) {
            var t = function (e, t) {
                if ("object" != o(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != o(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            (e, "string");
            return "symbol" == o(t) ? t : t + ""
        }
        var s = function () {
            return e = function e() {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                },
                t = null,
                n = [{
                        key: "create",
                        value: (o = i().mark((function e() {
                                        var t,
                                        n,
                                        o,
                                        a,
                                        u,
                                        l,
                                        s;
                                        return i().wrap((function (e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (null !== this.settings) {
                                                            e.next = 20;
                                                            break
                                                        }
                                                        return t = {
                                                            close_old_folder: !1,
                                                            open_all_sub: !0,
                                                            animation_duration: 200,
                                                            start_with_all_folders_closed: !1,
                                                            hide_empty_folders: !1,
                                                            remember_scroll_position: !0,
                                                            height: 500,
                                                            width: 300,
                                                            icon: "default",
                                                            confirm_bookmark_deletion: !0,
                                                            click_action: "current",
                                                            middle_click_action: "background",
                                                            super_click_action: "new",
                                                            font: "__default__",
                                                            theme: "light",
                                                            keyboard_support: !1
                                                        },
                                                        e.next = 4,
                                                        chrome.storage.local.get(t);
                                                    case 4:
                                                        if (void 0 !== (n = e.sent).close_old_folder || "undefined" == typeof localStorage) {
                                                            e.next = 19;
                                                            break
                                                        }
                                                        o = 0,
                                                        a = Object.keys(t);
                                                    case 7:
                                                        if (!(o < a.length)) {
                                                            e.next = 19;
                                                            break
                                                        }
                                                        if (u = a[o], null !== (l = localStorage.getItem("setting_".concat(u)))) {
                                                            e.next = 12;
                                                            break
                                                        }
                                                        return e.abrupt("continue", 16);
                                                    case 12:
                                                        return s = JSON.parse(l),
                                                        e.next = 15,
                                                        chrome.storage.local.set(c({}, u, s));
                                                    case 15:
                                                        n[u] = s;
                                                    case 16:
                                                        o++,
                                                        e.next = 7;
                                                        break;
                                                    case 19:
                                                        this.settings = new r.z(n, (function (e, t) {
                                                                    return chrome.storage.local.set(c({}, e, t))
                                                                }));
                                                    case 20:
                                                        return e.abrupt("return", this.settings);
                                                    case 21:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }), e, this)
                                    })), l = function () {
                            var e = this,
                            t = arguments;
                            return new Promise((function (n, r) {
                                    var i = o.apply(e, t);
                                    function u(e) {
                                        a(i, n, r, u, c, "next", e)
                                    }
                                    function c(e) {
                                        a(i, n, r, u, c, "throw", e)
                                    }
                                    u(void 0)
                                }))
                        }, function () {
                            return l.apply(this, arguments)
                        })
                    }
                ],
                t && u(e.prototype, t),
                n && u(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n,
                o,
                l
            }
            ();
            c(s, "settings", null)
        },
        9259: (e, t, n) => {
            "use strict";
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                 : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, i(r.key), r)
                }
            }
            function i(e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != r(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                H: () => a
            });
            var a = function () {
                return e = function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                },
                (t = [{
                            key: "translate",
                            value: function (e) {
                                return chrome.i18n.getMessage(e)
                            }
                        }
                    ]) && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                t,
                n
            }
            ()
        },
        9801: (e, t, n) => {
            "use strict";
            var r = n(9394);
            e.exports = function (e, t, n) {
                e && r((function () {
                        e.apply(n || null, t || [])
                    }))
            }
        },
        2130: (e, t, n) => {
            "use strict";
            var r = n(9015),
            o = n(9801);
            e.exports = function (e, t) {
                var n = t || {},
                i = {};
                return void 0 === e && (e = {}),
                e.on = function (t, n) {
                    return i[t] ? i[t].push(n) : i[t] = [n],
                    e
                },
                e.once = function (t, n) {
                    return n._once = !0,
                    e.on(t, n),
                    e
                },
                e.off = function (t, n) {
                    var r = arguments.length;
                    if (1 === r)
                        delete i[t];
                    else if (0 === r)
                        i = {};
                    else {
                        var o = i[t];
                        if (!o)
                            return e;
                        o.splice(o.indexOf(n), 1)
                    }
                    return e
                },
                e.emit = function () {
                    var t = r(arguments);
                    return e.emitterSnapshot(t.shift()).apply(this, t)
                },
                e.emitterSnapshot = function (t) {
                    var a = (i[t] || []).slice(0);
                    return function () {
                        var i = r(arguments),
                        u = this || e;
                        if ("error" === t && !1 !== n.throws && !a.length)
                            throw 1 === i.length ? i[0] : i;
                        return a.forEach((function (r) {
                                n.async ? o(r, i, u) : r.apply(u, i),
                                r._once && e.off(t, r)
                            })),
                        e
                    }
                },
                e
            }
        },
        4025: (e, t, n) => {
            "use strict";
            var r = n(1803);
            e.exports = function (e, t) {
                t = t || {};
                var n = r.boolean(t.allowUpdate, !0);
                return function (t) {
                    if (t = t || window.event, e.target = t.target || t.srcElement || t.originalTarget, e.element = this, e.type = t.type, n(t)) {
                        if (t.targetTouches)
                            e.x = t.targetTouches[0].clientX, e.y = t.targetTouches[0].clientY, e.pageX = t.targetTouches[0].pageX, e.pageY = t.targetTouches[0].pageY, e.screenX = t.targetTouches[0].screenX, e.screenY = t.targetTouches[0].screenY;
                        else {
                            if (null === t.pageX && null !== t.clientX) {
                                var r = t.target && t.target.ownerDocument || document,
                                o = r.documentElement,
                                i = r.body;
                                e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0),
                                e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)
                            } else
                                e.pageX = t.pageX, e.pageY = t.pageY;
                            e.x = t.clientX,
                            e.y = t.clientY,
                            e.screenX = t.screenX,
                            e.screenY = t.screenY
                        }
                        e.clientX = e.x,
                        e.clientY = e.y
                    }
                }
            }
        },
        9046: (e, t, n) => {
            "use strict";
            var r = n(1047),
            o = n(6371),
            i = n.g.document,
            a = function (e, t, n, r) {
                return e.addEventListener(t, n, r)
            },
            u = function (e, t, n, r) {
                return e.removeEventListener(t, n, r)
            },
            c = [];
            function l(e, t, n) {
                var r = function (e, t, n) {
                    var r,
                    o;
                    for (r = 0; r < c.length; r++)
                        if ((o = c[r]).element === e && o.type === t && o.fn === n)
                            return r
                }
                (e, t, n);
                if (r) {
                    var o = c[r].wrapper;
                    return c.splice(r, 1),
                    o
                }
            }
            n.g.addEventListener || (a = function (e, t, r) {
                return e.attachEvent("on" + t, function (e, t, r) {
                    var o = l(e, t, r) || function (e, t, r) {
                        return function (t) {
                            var o = t || n.g.event;
                            o.target = o.target || o.srcElement,
                            o.preventDefault = o.preventDefault || function () {
                                o.returnValue = !1
                            },
                            o.stopPropagation = o.stopPropagation || function () {
                                o.cancelBubble = !0
                            },
                            o.which = o.which || o.keyCode,
                            r.call(e, o)
                        }
                    }
                    (e, 0, r);
                    return c.push({
                        wrapper: o,
                        element: e,
                        type: t,
                        fn: r
                    }),
                    o
                }
                    (e, t, r))
            }, u = function (e, t, n) {
                var r = l(e, t, n);
                if (r)
                    return e.detachEvent("on" + t, r)
            }),
            e.exports = {
                add: a,
                remove: u,
                fabricate: function (e, t, n) {
                    var a = -1 === o.indexOf(t) ? new r(t, {
                        detail: n
                    }) : function () {
                        var e;
                        i.createEvent ? (e = i.createEvent("Event")).initEvent(t, !0, !0) : i.createEventObject && (e = i.createEventObject());
                        return e
                    }
                    ();
                    e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent("on" + t, a)
                }
            }
        },
        6371: (e, t, n) => {
            "use strict";
            var r = [],
            o = "",
            i = /^on/;
            for (o in n.g)
                i.test(o) && r.push(o.slice(2));
            e.exports = r
        },
        1047: (e, t, n) => {
            var r = n.g.CustomEvent;
            e.exports = function () {
                try {
                    var e = new r("cat", {
                        detail: {
                            foo: "bar"
                        }
                    });
                    return "cat" === e.type && "bar" === e.detail.foo
                } catch (e) {}
                return !1
            }
            () ? r : "undefined" != typeof document && "function" == typeof document.createEvent ? function (e, t) {
                var n = document.createEvent("CustomEvent");
                return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0),
                n
            }
             : function (e, t) {
                var n = document.createEventObject();
                return n.type = e,
                t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0),
                n
            }
        },
        9866: (e, t, n) => {
            "use strict";
            var r,
            o = n(1803),
            i = n(7235),
            a = n(727),
            u = n(3385),
            c = (r = n(6123)) && "object" == typeof r && "default" in r ? r.default : r;
            function l(e, t) {
                void 0 === t && (t = {});
                var n = this,
                r = 4,
                l = !1;
                this.margin = t.margin || -1,
                this.scrollWhenOutside = t.scrollWhenOutside || !1;
                var f = {},
                d = u.createPointCB(f),
                m = c(),
                p = !1;
                window.addEventListener("mousemove", d, !1),
                window.addEventListener("touchmove", d, !1),
                isNaN(t.maxSpeed) || (r = t.maxSpeed),
                this.autoScroll = o.boolean(t.autoScroll),
                this.syncMove = o.boolean(t.syncMove, !1),
                this.destroy = function (t) {
                    window.removeEventListener("mousemove", d, !1),
                    window.removeEventListener("touchmove", d, !1),
                    window.removeEventListener("mousedown", S, !1),
                    window.removeEventListener("touchstart", S, !1),
                    window.removeEventListener("mouseup", E, !1),
                    window.removeEventListener("touchend", E, !1),
                    window.removeEventListener("pointerup", E, !1),
                    window.removeEventListener("mouseleave", T, !1),
                    window.removeEventListener("mousemove", x, !1),
                    window.removeEventListener("touchmove", x, !1),
                    window.removeEventListener("scroll", w, !0),
                    e = [],
                    t && k()
                },
                this.add = function () {
                    for (var t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    return a.addElements.apply(void 0, [e].concat(t)),
                    this
                },
                this.remove = function () {
                    for (var t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    return a.removeElements.apply(void 0, [e].concat(t))
                };
                var v,
                y,
                h = null;
                "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]),
                y = e,
                e = [],
                y.forEach((function (e) {
                        e === window ? h = window : n.add(e)
                    })),
                Object.defineProperties(this, {
                    down: {
                        get: function () {
                            return p
                        }
                    },
                    maxSpeed: {
                        get: function () {
                            return r
                        }
                    },
                    point: {
                        get: function () {
                            return f
                        }
                    },
                    scrolling: {
                        get: function () {
                            return l
                        }
                    }
                });
                var b,
                g = null;
                function w(t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t.target) {
                            l = !0;
                            break
                        }
                    l && i.requestAnimationFrame((function () {
                            return l = !1
                        }))
                }
                function S() {
                    p = !0
                }
                function E() {
                    p = !1,
                    k()
                }
                function k() {
                    i.cancelAnimationFrame(b),
                    i.cancelAnimationFrame(v)
                }
                function T() {
                    p = !1
                }
                function j() {
                    for (var t = null, n = 0; n < e.length; n++)
                        s(f, e[n]) && (t = e[n]);
                    return t
                }
                function x(t) {
                    if (n.autoScroll() && !t.dispatched) {
                        var r = t.target,
                        o = document.body;
                        g && !s(f, g) && (n.scrollWhenOutside || (g = null)),
                        r && r.parentNode === o ? r = j() : (r = function (t) {
                                if (!t)
                                    return null;
                                if (g === t)
                                    return t;
                                if (a.hasElement(e, t))
                                    return t;
                                for (; t = t.parentNode; )
                                    if (a.hasElement(e, t))
                                        return t;
                                return null
                            }
                                (r)) || (r = j()),
                        r && r !== g && (g = r),
                        h && (i.cancelAnimationFrame(v), v = i.requestAnimationFrame(P)),
                        g && (i.cancelAnimationFrame(b), b = i.requestAnimationFrame(O))
                    }
                }
                function P() {
                    A(h),
                    i.cancelAnimationFrame(v),
                    v = i.requestAnimationFrame(P)
                }
                function O() {
                    g && (A(g), i.cancelAnimationFrame(b), b = i.requestAnimationFrame(O))
                }
                function A(e) {
                    var t,
                    r,
                    o = u.getClientRect(e);
                    t = f.x < o.left + n.margin ? Math.floor(Math.max(-1, (f.x - o.left) / n.margin - 1) * n.maxSpeed) : f.x > o.right - n.margin ? Math.ceil(Math.min(1, (f.x - o.right) / n.margin + 1) * n.maxSpeed) : 0,
                    r = f.y < o.top + n.margin ? Math.floor(Math.max(-1, (f.y - o.top) / n.margin - 1) * n.maxSpeed) : f.y > o.bottom - n.margin ? Math.ceil(Math.min(1, (f.y - o.bottom) / n.margin + 1) * n.maxSpeed) : 0,
                    n.syncMove() && m.dispatch(e, {
                        pageX: f.pageX + t,
                        pageY: f.pageY + r,
                        clientX: f.x + t,
                        clientY: f.y + r
                    }),
                    setTimeout((function () {
                            r && function (e, t) {
                                e === window ? window.scrollTo(e.pageXOffset, e.pageYOffset + t) : e.scrollTop += t
                            }
                            (e, r),
                            t && function (e, t) {
                                e === window ? window.scrollTo(e.pageXOffset + t, e.pageYOffset) : e.scrollLeft += t
                            }
                            (e, t)
                        }))
                }
                window.addEventListener("mousedown", S, !1),
                window.addEventListener("touchstart", S, !1),
                window.addEventListener("mouseup", E, !1),
                window.addEventListener("touchend", E, !1),
                window.addEventListener("pointerup", E, !1),
                window.addEventListener("mousemove", x, !1),
                window.addEventListener("touchmove", x, !1),
                window.addEventListener("mouseleave", T, !1),
                window.addEventListener("scroll", w, !0)
            }
            function s(e, t, n) {
                return n ? e.y > n.top && e.y < n.bottom && e.x > n.left && e.x < n.right : u.pointInside(e, t)
            }
            e.exports = function (e, t) {
                return new l(e, t)
            }
        },
        6123: e => {
            "use strict";
            var t,
            n = void 0;
            "function" != typeof Object.create ? (t = function () {}, n = function (e, n) {
                if (e !== Object(e) && null !== e)
                    throw TypeError("Argument must be an object, or null");
                t.prototype = e || {};
                var r = new t;
                return t.prototype = null,
                void 0 !== n && Object.defineProperties(r, n),
                null === e && (r.__proto__ = null),
                r
            }) : n = Object.create;
            var r = n,
            o = ["altKey", "button", "buttons", "clientX", "clientY", "ctrlKey", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "pageX", "pageY", "region", "relatedTarget", "screenX", "screenY", "shiftKey", "which", "x", "y"];
            function i(e, t) {
                t = t || {};
                for (var n = r(e), i = 0; i < o.length; i++)
                    void 0 !== t[o[i]] && (n[o[i]] = t[o[i]]);
                return n
            }
            function a(e, t) {
                console.log("data ", t),
                e.data = t || {},
                e.dispatched = "mousemove"
            }
            e.exports = function (e) {
                var t = {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    ctrlKey: !1,
                    shiftKey: !1,
                    altKey: !1,
                    metaKey: !1,
                    button: 0,
                    buttons: 1,
                    relatedTarget: null,
                    region: null
                };
                function n(e) {
                    for (var n = 0; n < o.length; n++)
                        t[o[n]] = e[o[n]]
                }
                return void 0 !== e && e.addEventListener("mousemove", n), {
                    destroy: function () {
                        e && e.removeEventListener("mousemove", n, !1),
                        t = null
                    },
                    dispatch: MouseEvent ? function (e, n, r) {
                        var o = new MouseEvent("mousemove", i(t, n));
                        return a(o, r),
                        e.dispatchEvent(o)
                    }
                     : "function" == typeof document.createEvent ? function (e, n, r) {
                        var o = i(t, n),
                        u = document.createEvent("MouseEvents");
                        return u.initMouseEvent("mousemove", !0, !0, window, 0, o.screenX, o.screenY, o.clientX, o.clientY, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.button, o.relatedTarget),
                        a(u, r),
                        e.dispatchEvent(u)
                    }
                     : "function" == typeof document.createEventObject ? function (e, n, r) {
                        var o = document.createEventObject(),
                        u = i(t, n);
                        for (var c in u)
                            o[c] = u[c];
                        return a(o, r),
                        e.dispatchEvent(o)
                    }
                     : void 0
                }
            }
        },
        3385: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r,
            o = (r = n(4025)) && "object" == typeof r && "default" in r ? r.default : r;
            function i(e) {
                if (e === window)
                    return function () {
                        var e = {
                            top: {
                                value: 0,
                                enumerable: !0
                            },
                            left: {
                                value: 0,
                                enumerable: !0
                            },
                            right: {
                                value: window.innerWidth,
                                enumerable: !0
                            },
                            bottom: {
                                value: window.innerHeight,
                                enumerable: !0
                            },
                            width: {
                                value: window.innerWidth,
                                enumerable: !0
                            },
                            height: {
                                value: window.innerHeight,
                                enumerable: !0
                            },
                            x: {
                                value: 0,
                                enumerable: !0
                            },
                            y: {
                                value: 0,
                                enumerable: !0
                            }
                        };
                        if (Object.create)
                            return Object.create({}, e);
                        var t = {};
                        return Object.defineProperties(t, e),
                        t
                    }
                ();
                try {
                    var t = e.getBoundingClientRect();
                    return void 0 === t.x && (t.x = t.left, t.y = t.top),
                    t
                } catch (t) {
                    throw new TypeError("Can't call getBoundingClientRect on " + e)
                }
            }
            t.createPointCB = o,
            t.getClientRect = i,
            t.pointInside = function (e, t) {
                var n = i(t);
                return e.y > n.top && e.y < n.bottom && e.x > n.left && e.x < n.right
            }
        },
        727: (e, t, n) => {
            "use strict";
            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(8089)),
            i = r(n(7749)),
            a = r(n(7152)),
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
             : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            c = function (e) {
                return null != e && "object" === (void 0 === e ? "undefined" : u(e)) && 1 === e.nodeType && "object" === u(e.style) && "object" === u(e.ownerDocument)
            };
            function l(e) {
                if ("string" == typeof e)
                    try {
                        return document.querySelector(e)
                    } catch (e) {
                        throw e
                    }
                else if (a(e))
                    return e
            }
            function s(e, t) {
                if (t = m(t, !0), !c(t))
                    return -1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            function f(e, t) {
                return -1 !== s(e, t)
            }
            function d(e) {
                if (!e)
                    return [];
                try {
                    return "string" == typeof e ? o(document.querySelectorAll(e)) : i(e) ? e.map(m) : void 0 === e.length ? [m(e)] : o(e, m)
                } catch (e) {
                    throw new Error(e)
                }
            }
            function m(e, t) {
                if ("string" == typeof e)
                    try {
                        return document.querySelector(e)
                    } catch (e) {
                        throw e
                    }
                if (!c(e) && !t)
                    throw new TypeError(e + " is not a DOM element.");
                return e
            }
            t.indexOfElement = s,
            t.hasElement = f,
            t.domListOf = d,
            t.concatElementLists = function () {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                return e.reduce((function (e, t) {
                        return t.length ? e : e.concat(d(t))
                    }), [])
            },
            t.addElements = function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                return function (e, t) {
                    for (var n = 0; n < t.length; n++)
                        f(e, t[n]) || e.push(t[n]);
                    return t
                }
                (e, t = t.map(m))
            },
            t.removeElements = function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                return t.map(m).reduce((function (t, n) {
                        var r = s(e, n);
                        return -1 !== r ? t.concat(e.splice(r, 1)) : t
                    }), [])
            },
            t.resolveElement = m,
            t.select = l,
            t.selectAll = function (e) {
                return "string" == typeof e ? Array.prototype.slice.apply(document.querySelectorAll(e)) : i(e) ? e.map(l) : "length" in e ? o(e).map(l) : void 0
            }
        },
        3541: e => {
            "use strict";
            var t = {},
            n = "(?:^|\\s)",
            r = "(?:\\s|$)";
            function o(e) {
                var o = t[e];
                return o ? o.lastIndex = 0 : t[e] = o = new RegExp(n + e + r, "g"),
                o
            }
            e.exports = {
                add: function (e, t) {
                    var n = e.className;
                    n.length ? o(t).test(n) || (e.className += " " + t) : e.className = t
                },
                rm: function (e, t) {
                    e.className = e.className.replace(o(t), " ").trim()
                }
            }
        },
        5427: (e, t, n) => {
            "use strict";
            var r = n(2130),
            o = n(9046),
            i = n(3541),
            a = document,
            u = a.documentElement;
            function c(e, t, r, i) {
                n.g.navigator.pointerEnabled ? o[t](e, {
                    mouseup: "pointerup",
                    mousedown: "pointerdown",
                    mousemove: "pointermove"
                }
                    [r], i) : n.g.navigator.msPointerEnabled ? o[t](e, {
                    mouseup: "MSPointerUp",
                    mousedown: "MSPointerDown",
                    mousemove: "MSPointerMove"
                }
                    [r], i) : (o[t](e, {
                        mouseup: "touchend",
                        mousedown: "touchstart",
                        mousemove: "touchmove"
                    }
                        [r], i), o[t](e, r, i))
            }
            function l(e) {
                if (void 0 !== e.touches)
                    return e.touches.length;
                if (void 0 !== e.which && 0 !== e.which)
                    return e.which;
                if (void 0 !== e.buttons)
                    return e.buttons;
                var t = e.button;
                return void 0 !== t ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : void 0
            }
            function s(e, t) {
                return void 0 !== n.g[t] ? n.g[t] : u.clientHeight ? u[e] : a.body[e]
            }
            function f(e, t, n) {
                var r,
                o = (e = e || {}).className || "";
                return e.className += " gu-hide",
                r = a.elementFromPoint(t, n),
                e.className = o,
                r
            }
            function d() {
                return !1
            }
            function m() {
                return !0
            }
            function p(e) {
                return e.width || e.right - e.left
            }
            function v(e) {
                return e.height || e.bottom - e.top
            }
            function y(e) {
                return e.parentNode === a ? null : e.parentNode
            }
            function h(e) {
                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName || b(e)
            }
            function b(e) {
                return !!e && ("false" !== e.contentEditable && ("true" === e.contentEditable || b(y(e))))
            }
            function g(e) {
                return e.nextElementSibling || function () {
                    var t = e;
                    do {
                        t = t.nextSibling
                    } while (t && 1 !== t.nodeType);
                    return t
                }
                ()
            }
            function w(e, t) {
                var n = function (e) {
                    return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e
                }
                (t),
                r = {
                    pageX: "clientX",
                    pageY: "clientY"
                };
                return e in r && !(e in n) && r[e]in n && (e = r[e]),
                n[e]
            }
            e.exports = function (e, t) {
                var n,
                b,
                S,
                E,
                k,
                T,
                j,
                x,
                P,
                O,
                A;
                1 === arguments.length && !1 === Array.isArray(e) && (t = e, e = []);
                var L,
                N = null,
                _ = t || {};
                void 0 === _.moves && (_.moves = m),
                void 0 === _.accepts && (_.accepts = m),
                void 0 === _.invalid && (_.invalid = function () {
                    return !1
                }),
                void 0 === _.containers && (_.containers = e || []),
                void 0 === _.isContainer && (_.isContainer = d),
                void 0 === _.copy && (_.copy = !1),
                void 0 === _.copySortSource && (_.copySortSource = !1),
                void 0 === _.revertOnSpill && (_.revertOnSpill = !1),
                void 0 === _.removeOnSpill && (_.removeOnSpill = !1),
                void 0 === _.direction && (_.direction = "vertical"),
                void 0 === _.ignoreInputTextSelection && (_.ignoreInputTextSelection = !0),
                void 0 === _.mirrorContainer && (_.mirrorContainer = a.body);
                var C = r({
                    containers: _.containers,
                    start: function (e) {
                        var t = D(e);
                        t && R(t)
                    },
                    end: H,
                    cancel: z,
                    remove: G,
                    destroy: function () {
                        M(!0),
                        U({})
                    },
                    canMove: function (e) {
                        return !!D(e)
                    },
                    dragging: !1
                });
                return !0 === _.removeOnSpill && C.on("over", (function (e) {
                        i.rm(e, "gu-hide")
                    })).on("out", (function (e) {
                        C.dragging && i.add(e, "gu-hide")
                    })),
                M(),
                C;
                function F(e) {
                    return -1 !== C.containers.indexOf(e) || _.isContainer(e)
                }
                function M(e) {
                    var t = e ? "remove" : "add";
                    c(u, t, "mousedown", X),
                    c(u, t, "mouseup", U)
                }
                function I(e) {
                    c(u, e ? "remove" : "add", "mousemove", Y)
                }
                function q(e) {
                    var t = e ? "remove" : "add";
                    o[t](u, "selectstart", B),
                    o[t](u, "click", B)
                }
                function B(e) {
                    L && e.preventDefault()
                }
                function X(e) {
                    if (T = e.clientX, j = e.clientY, !(1 !== l(e) || e.metaKey || e.ctrlKey)) {
                        var t = e.target,
                        n = D(t);
                        n && (L = n, I(), "mousedown" === e.type && (h(t) ? t.focus() : e.preventDefault()))
                    }
                }
                function Y(e) {
                    if (L)
                        if (0 !== l(e)) {
                            if (!(void 0 !== e.clientX && Math.abs(e.clientX - T) <= (_.slideFactorX || 0) && void 0 !== e.clientY && Math.abs(e.clientY - j) <= (_.slideFactorY || 0))) {
                                if (_.ignoreInputTextSelection) {
                                    var t = w("clientX", e) || 0,
                                    r = w("clientY", e) || 0;
                                    if (h(a.elementFromPoint(t, r)))
                                        return
                                }
                                var o = L;
                                I(!0),
                                q(),
                                H(),
                                R(o);
                                var f,
                                d = {
                                    left: (f = S.getBoundingClientRect()).left + s("scrollLeft", "pageXOffset"),
                                    top: f.top + s("scrollTop", "pageYOffset")
                                };
                                E = w("pageX", e) - d.left,
                                k = w("pageY", e) - d.top,
                                i.add(O || S, "gu-transit"),
                                function () {
                                    if (n)
                                        return;
                                    var e = S.getBoundingClientRect();
                                    (n = S.cloneNode(!0)).style.width = p(e) + "px",
                                    n.style.height = v(e) + "px",
                                    i.rm(n, "gu-transit"),
                                    i.add(n, "gu-mirror"),
                                    _.mirrorContainer.appendChild(n),
                                    c(u, "add", "mousemove", Q),
                                    i.add(_.mirrorContainer, "gu-unselectable"),
                                    C.emit("cloned", n, S, "mirror")
                                }
                                (),
                                Q(e)
                            }
                        } else
                            U({})
                }
                function D(e) {
                    if (!(C.dragging && n || F(e))) {
                        for (var t = e; y(e) && !1 === F(y(e)); ) {
                            if (_.invalid(e, t))
                                return;
                            if (!(e = y(e)))
                                return
                        }
                        var r = y(e);
                        if (r)
                            if (!_.invalid(e, t))
                                if (_.moves(e, r, t, g(e)))
                                    return {
                                        item: e,
                                        source: r
                                    }
                    }
                }
                function R(e) {
                    var t,
                    n;
                    t = e.item,
                    n = e.source,
                    ("boolean" == typeof _.copy ? _.copy : _.copy(t, n)) && (O = e.item.cloneNode(!0), C.emit("cloned", O, e.item, "copy")),
                    b = e.source,
                    S = e.item,
                    x = P = g(e.item),
                    C.dragging = !0,
                    C.emit("drag", S, b)
                }
                function H() {
                    if (C.dragging) {
                        var e = O || S;
                        K(e, y(e))
                    }
                }
                function W() {
                    L = !1,
                    I(!0),
                    q(!0)
                }
                function U(e) {
                    if (W(), C.dragging) {
                        var t = O || S,
                        r = w("clientX", e) || 0,
                        o = w("clientY", e) || 0,
                        i = $(f(n, r, o), r, o);
                        i && (O && _.copySortSource || !O || i !== b) ? K(t, i) : _.removeOnSpill ? G() : z()
                    }
                }
                function K(e, t) {
                    var n = y(e);
                    O && _.copySortSource && t === b && n.removeChild(S),
                    V(t) ? C.emit("cancel", e, b, b) : C.emit("drop", e, t, b, P),
                    J()
                }
                function G() {
                    if (C.dragging) {
                        var e = O || S,
                        t = y(e);
                        t && t.removeChild(e),
                        C.emit(O ? "cancel" : "remove", e, t, b),
                        J()
                    }
                }
                function z(e) {
                    if (C.dragging) {
                        var t = arguments.length > 0 ? e : _.revertOnSpill,
                        n = O || S,
                        r = y(n),
                        o = V(r);
                        !1 === o && t && (O ? r && r.removeChild(O) : b.insertBefore(n, x)),
                        o || t ? C.emit("cancel", n, b, b) : C.emit("drop", n, r, b, P),
                        J()
                    }
                }
                function J() {
                    var e = O || S;
                    W(),
                    n && (i.rm(_.mirrorContainer, "gu-unselectable"), c(u, "remove", "mousemove", Q), y(n).removeChild(n), n = null),
                    e && i.rm(e, "gu-transit"),
                    A && clearTimeout(A),
                    C.dragging = !1,
                    N && C.emit("out", e, N, b),
                    C.emit("dragend", e),
                    b = S = O = x = P = A = N = null
                }
                function V(e, t) {
                    var r;
                    return r = void 0 !== t ? t : n ? P : g(O || S),
                    e === b && r === x
                }
                function $(e, t, n) {
                    for (var r = e; r && !o(); )
                        r = y(r);
                    return r;
                    function o() {
                        if (!1 === F(r))
                            return !1;
                        var o = Z(r, e),
                        i = ee(r, o, t, n);
                        return !!V(r, i) || _.accepts(S, r, b, i)
                    }
                }
                function Q(e) {
                    if (n) {
                        e.preventDefault();
                        var t = w("clientX", e) || 0,
                        r = w("clientY", e) || 0,
                        o = t - E,
                        i = r - k;
                        n.style.left = o + "px",
                        n.style.top = i + "px";
                        var a = O || S,
                        u = f(n, t, r),
                        c = $(u, t, r),
                        l = null !== c && c !== N;
                        (l || null === c) && (N && p("out"), N = c, l && p("over"));
                        var s = y(a);
                        if (c !== b || !O || _.copySortSource) {
                            var d,
                            m = Z(c, u);
                            if (null !== m)
                                d = ee(c, m, t, r);
                            else {
                                if (!0 !== _.revertOnSpill || O)
                                    return void(O && s && s.removeChild(a));
                                d = x,
                                c = b
                            }
                            (null === d && l || d !== a && d !== g(a)) && (P = d, c.insertBefore(a, d), C.emit("shadow", a, c, b))
                        } else
                            s && s.removeChild(a)
                    }
                    function p(e) {
                        C.emit(e, a, N, b)
                    }
                }
                function Z(e, t) {
                    for (var n = t; n !== e && y(n) !== e; )
                        n = y(n);
                    return n === u ? null : n
                }
                function ee(e, t, n, r) {
                    var o = "horizontal" === _.direction,
                    i = t !== e ? function () {
                        var e = t.getBoundingClientRect();
                        if (o)
                            return a(n > e.left + p(e) / 2);
                        return a(r > e.top + v(e) / 2)
                    }
                    () : function () {
                        var t,
                        i,
                        a,
                        u = e.children.length;
                        for (t = 0; t < u; t++) {
                            if (a = (i = e.children[t]).getBoundingClientRect(), o && a.left + a.width / 2 > n)
                                return i;
                            if (!o && a.top + a.height / 2 > r)
                                return i
                        }
                        return null
                    }
                    ();
                    return i;
                    function a(e) {
                        return e ? g(t) : t
                    }
                }
            }
        },
        7749: e => {
            var t = Array.isArray,
            n = Object.prototype.toString;
            e.exports = t || function (e) {
                return !!e && "[object Array]" == n.call(e)
            }
        },
        7152: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
            default:
                () => o
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
             : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            function o(e) {
                return null != e && "object" === (void 0 === e ? "undefined" : r(e)) && 1 === e.nodeType && "object" === r(e.style) && "object" === r(e.ownerDocument)
            }
        },
        9394: e => {
            var t;
            t = "function" == typeof setImmediate ? function (e) {
                setImmediate(e)
            }
             : function (e) {
                setTimeout(e, 0)
            },
            e.exports = t
        },
        1803: (e, t) => {
            "use strict";
            function n(e, t) {
                return void 0 === e ? void 0 === t ? e : t : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.boolean = function (e, t) {
                return "function" == typeof(e = n(e, t)) ? function () {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return !!e.apply(this, n)
                }
                 : e ? function () {
                    return !0
                }
                 : function () {
                    return !1
                }
            },
            t.integer = function (e, t) {
                return "function" == typeof(e = n(e, t)) ? function () {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    var o = parseInt(e.apply(this, n), 10);
                    return o != o ? 0 : o
                }
                 : (e = parseInt(e, 10)) != e ? function () {
                    return 0
                }
                 : function () {
                    return e
                }
            },
            t.string = function (e, t) {
                return "function" == typeof(e = n(e, t)) ? function () {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return "" + e.apply(this, n)
                }
                 : (e = "" + e, function () {
                    return e
                })
            }
        }
    },
    i = {};
    function a(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var n = i[e] = {
            exports: {}
        };
        return o[e](n, n.exports, a),
        n.exports
    }
    e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    t = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    n = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    r = e => {
        e && e.d < 1 && (e.d = 1, e.forEach((e => e.r--)), e.forEach((e => e.r-- ? e.r++ : e())))
    },
    a.a = (o, i, a) => {
        var u;
        a && ((u = []).d = -1);
        var c,
        l,
        s,
        f = new Set,
        d = o.exports,
        m = new Promise(((e, t) => {
                    s = t,
                    l = e
                }));
        m[t] = d,
        m[e] = e => (u && e(u), f.forEach(e), m.catch((e => {}))),
        o.exports = m,
        i((o => {
                var i;
                c = (o => o.map((o => {
                            if (null !== o && "object" == typeof o) {
                                if (o[e])
                                    return o;
                                if (o.then) {
                                    var i = [];
                                    i.d = 0,
                                    o.then((e => {
                                            a[t] = e,
                                            r(i)
                                        }), (e => {
                                            a[n] = e,
                                            r(i)
                                        }));
                                    var a = {};
                                    return a[e] = e => e(i),
                                    a
                                }
                            }
                            var u = {};
                            return u[e] = e => {},
                            u[t] = o,
                            u
                        })))(o);
                var a = () => c.map((e => {
                        if (e[n])
                            throw e[n];
                        return e[t]
                    })),
                l = new Promise((t => {
                            (i = () => t(a)).r = 0;
                            var n = e => e !== u && !f.has(e) && (f.add(e), e && !e.d && (i.r++, e.push(i)));
                            c.map((t => t[e](n)))
                        }));
                return i.r ? l : a()
            }), (e => (e ? s(m[n] = e) : l(d), r(u)))),
        u && u.d < 0 && (u.d = 0)
    },
    a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }),
        t
    },
    a.d = (e, t) => {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    },
    a.g = function () {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }
    (),
    a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    a(4346)
})();