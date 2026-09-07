/*! For license information please see options.js.LICENSE.txt */
(() => {
    "use strict";
    var t,
    e,
    r,
    n,
    o = {
        6637: (t, e, r) => {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                 : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n(t)
            }
            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, i(n.key), n)
                }
            }
            function i(t) {
                var e = function (t, e) {
                    if ("object" != n(t) || !t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, e || "default");
                        if ("object" != n(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }
                (t, "string");
                return "symbol" == n(e) ? e : e + ""
            }
            var a;
            r.d(e, {
                W: () => c
            }),
            function (t) {
                t[t.activeTab = 0] = "activeTab",
                t[t.foregroundTab = 1] = "foregroundTab",
                t[t.backgroundTab = 2] = "backgroundTab",
                t[t.newWindow = 3] = "newWindow",
                t[t.newIncognitoWindow = 4] = "newIncognitoWindow"
            }
            (a || (a = {}));
            var c = function () {
                return t = function t() {
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, t)
                },
                r = [{
                        key: "open",
                        value: function (t, e) {
                            return new Promise((function (r, n) {
                                    switch (e) {
                                    case a.foregroundTab:
                                        chrome.tabs.create({
                                            url: t,
                                            active: !0
                                        }),
                                        r();
                                        break;
                                    case a.backgroundTab:
                                        chrome.tabs.create({
                                            url: t,
                                            active: !1
                                        }),
                                        r();
                                        break;
                                    case a.newWindow:
                                        chrome.windows.create({
                                            url: t
                                        }),
                                        r();
                                        break;
                                    case a.newIncognitoWindow:
                                        chrome.windows.create({
                                            url: t,
                                            incognito: !0
                                        }),
                                        r();
                                        break;
                                    default:
                                    case a.activeTab:
                                        var o = /^javascript:(.*)/i.exec(t);
                                        o && o[1] ? (alert("Unfortunately there seems to be no way to run bookmarklets in Chrome with Manifest V3. If anyone has any advice, please contact me."), n()) : (chrome.tabs.update({
                                                url: t,
                                                active: !0
                                            }), r())
                                    }
                                }))
                        }
                    }, {
                        key: "openAll",
                        value: function (t, e) {
                            var r = this;
                            if (t.children) {
                                var n = this.getAllBookmarkUrlsInFolder(t),
                                o = a.activeTab;
                                e && (o = a.backgroundTab),
                                this.open(n[0], o),
                                n.slice(1).forEach((function (t) {
                                        r.open(t, a.backgroundTab)
                                    }))
                            }
                        }
                    }, {
                        key: "getAllBookmarkUrlsInFolder",
                        value: function (t) {
                            var e = this,
                            r = [];
                            return t.url && r.push(t.url),
                            t.children && t.children.forEach((function (t) {
                                    r = r.concat(e.getAllBookmarkUrlsInFolder(t))
                                })),
                            r
                        }
                    }
                ],
                (e = null) && o(t.prototype, e),
                r && o(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                e,
                r
            }
            ()
        },
        3889: (t, e, r) => {
            r.d(e, {
                A: () => f
            });
            var n = r(6637),
            o = r(9259);
            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                 : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i(t)
            }
            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, c(n.key), n)
                }
            }
            function c(t) {
                var e = function (t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != i(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }
                (t, "string");
                return "symbol" == i(e) ? e : e + ""
            }
            var u,
            l,
            s,
            f = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, t)
                }
                return e = t,
                o = [{
                        key: "getElementData",
                        value: function (t, e) {
                            var r = t.dataset[e];
                            if (void 0 === r)
                                throw new Error('Element does not have data in key "' + e + '"');
                            return r
                        }
                    }, {
                        key: "openAllBookmarks",
                        value: function (t) {
                            chrome.bookmarks.getSubTree(t, (function (t) {
                                    n.W.openAll(t[0], !0),
                                    window.close()
                                }))
                        }
                    }, {
                        key: "nothing",
                        value: function (t) {
                            return t.preventDefault(),
                            t.stopPropagation(),
                            t.stopImmediatePropagation(),
                            !1
                        }
                    }, {
                        key: "setBrowserActionIcon",
                        value: function (t) {
                            var e = {
                            default:
                                "/icons/bookmark48.png",
                                star: "/icons/black-star.png",
                                star_empty: "/icons/black-open-star.png",
                                white_star: "/icons/white-star.png",
                                white_star_empty: "/icons/white-open-star.png"
                            };
                            e.hasOwnProperty(t) && chrome.action.setIcon({
                                path: e[t]
                            })
                        }
                    }, {
                        key: "translateDocument",
                        value: function (e) {
                            e.querySelectorAll("[data-i18n-key]").forEach((function (e) {
                                    var r = e.getAttribute("data-i18n-key");
                                    if (null !== r) {
                                        var n = t.translator.translate(r);
                                        "" !== n && (e.innerHTML = n)
                                    }
                                }))
                        }
                    }, {
                        key: "addEventListenerMulti",
                        value: function (t, e, r) {
                            e.split(" ").forEach((function (e) {
                                    return t.addEventListener(e, r, !1)
                                }))
                        }
                    }
                ],
                (r = null) && a(e.prototype, r),
                o && a(e, o),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e;
                var e,
                r,
                o
            }
            ();
            u = f,
            l = "translator",
            s = new o.H,
            (l = c(l))in u ? Object.defineProperty(u, l, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[l] = s
        },
        288: (t, e, r) => {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                 : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n(t)
            }
            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, a(n.key), n)
                }
            }
            function i(t, e, r) {
                return (e = a(e))in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r,
                t
            }
            function a(t) {
                var e = function (t, e) {
                    if ("object" != n(t) || !t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, e || "default");
                        if ("object" != n(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }
                (t, "string");
                return "symbol" == n(e) ? e : e + ""
            }
            r.d(e, {
                z: () => c
            });
            var c = function () {
                return t = function t(e, r) {
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, t),
                    i(this, "settings", void 0),
                    i(this, "setter", void 0),
                    this.settings = e || {},
                    this.setter = r
                },
                (e = [{
                            key: "set",
                            value: function (t, e) {
                                this.settings[t] = e,
                                this.setter(t, e)
                            }
                        }, {
                            key: "getNumber",
                            value: function (t) {
                                var e = this.settings[t];
                                if ("string" == typeof e)
                                    return parseInt(e, 10);
                                if ("number" != typeof e)
                                    throw new Error('Setting "'.concat(t, " is not a number!"));
                                return e
                            }
                        }, {
                            key: "getString",
                            value: function (t) {
                                var e = this.settings[t];
                                if ("number" == typeof e)
                                    return String(e);
                                if ("string" != typeof e)
                                    throw new Error('Setting "'.concat(t, " is not a string!"));
                                return e
                            }
                        }, {
                            key: "isEnabled",
                            value: function (t) {
                                var e = this.settings[t];
                                if ("boolean" != typeof e)
                                    throw new Error('Setting "'.concat(t, " is not a boolean!"));
                                return e
                            }
                        }
                    ]) && o(t.prototype, e),
                r && o(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                e,
                r
            }
            ()
        },
        6981: (t, e, r) => {
            r.d(e, {
                k: () => s
            });
            var n = r(288);
            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                 : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                o(t)
            }
            function i() {
                i = function () {
                    return e
                };
                var t,
                e = {},
                r = Object.prototype,
                n = r.hasOwnProperty,
                a = Object.defineProperty || function (t, e, r) {
                    t[e] = r.value
                },
                c = "function" == typeof Symbol ? Symbol : {},
                u = c.iterator || "@@iterator",
                l = c.asyncIterator || "@@asyncIterator",
                s = c.toStringTag || "@@toStringTag";
                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function (t, e, r) {
                        return t[e] = r
                    }
                }
                function y(t, e, r, n) {
                    var o = e && e.prototype instanceof g ? e : g,
                    i = Object.create(o.prototype),
                    c = new N(n || []);
                    return a(i, "_invoke", {
                        value: L(t, r, c)
                    }),
                    i
                }
                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = y;
                var h = "suspendedStart",
                v = "suspendedYield",
                b = "executing",
                m = "completed",
                d = {};
                function g() {}
                function w() {}
                function k() {}
                var S = {};
                f(S, u, (function () {
                        return this
                    }));
                var _ = Object.getPrototypeOf,
                E = _ && _(_(I([])));
                E && E !== r && n.call(E, u) && (S = E);
                var x = k.prototype = g.prototype = Object.create(S);
                function j(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                            f(t, e, (function (t) {
                                    return this._invoke(e, t)
                                }))
                        }))
                }
                function P(t, e) {
                    function r(i, a, c, u) {
                        var l = p(t[i], t, a);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                            f = s.value;
                            return f && "object" == o(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                                    r("next", t, c, u)
                                }), (function (t) {
                                    r("throw", t, c, u)
                                })) : e.resolve(f).then((function (t) {
                                    s.value = t,
                                    c(s)
                                }), (function (t) {
                                    return r("throw", t, c, u)
                                }))
                        }
                        u(l.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function (t, n) {
                            function o() {
                                return new e((function (e, o) {
                                        r(t, n, e, o)
                                    }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }
                function L(e, r, n) {
                    var o = h;
                    return function (i, a) {
                        if (o === b)
                            throw Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a; ; ) {
                            var c = n.delegate;
                            if (c) {
                                var u = O(c, n);
                                if (u) {
                                    if (u === d)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h)
                                    throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            o = b;
                            var l = p(e, r, n);
                            if ("normal" === l.type) {
                                if (o = n.done ? m : v, l.arg === d)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (o = m, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }
                function O(e, r) {
                    var n = r.method,
                    o = e.iterator[n];
                    if (o === t)
                        return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, O(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                    var i = p(o, e.iterator, r.arg);
                    if ("throw" === i.type)
                        return r.method = "throw", r.arg = i.arg, r.delegate = null, d;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d)
                }
                function T(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function A(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function N(t) {
                    this.tryEntries = [{
                            tryLoc: "root"
                        }
                    ],
                    t.forEach(T, this),
                    this.reset(!0)
                }
                function I(e) {
                    if (e || "" === e) {
                        var r = e[u];
                        if (r)
                            return r.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                            a = function r() {
                                for (; ++i < e.length; )
                                    if (n.call(e, i))
                                        return r.value = e[i], r.done = !1, r;
                                return r.value = t,
                                r.done = !0,
                                r
                            };
                            return a.next = a
                        }
                    }
                    throw new TypeError(o(e) + " is not iterable")
                }
                return w.prototype = k,
                a(x, "constructor", {
                    value: k,
                    configurable: !0
                }),
                a(k, "constructor", {
                    value: w,
                    configurable: !0
                }),
                w.displayName = f(k, s, "GeneratorFunction"),
                e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                },
                e.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : (t.__proto__ = k, f(t, s, "GeneratorFunction")),
                    t.prototype = Object.create(x),
                    t
                },
                e.awrap = function (t) {
                    return {
                        __await: t
                    }
                },
                j(P.prototype),
                f(P.prototype, l, (function () {
                        return this
                    })),
                e.AsyncIterator = P,
                e.async = function (t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(y(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                            return t.done ? t.value : a.next()
                        }))
                },
                j(x),
                f(x, s, "Generator"),
                f(x, u, (function () {
                        return this
                    })),
                f(x, "toString", (function () {
                        return "[object Generator]"
                    })),
                e.keys = function (t) {
                    var e = Object(t),
                    r = [];
                    for (var n in e)
                        r.push(n);
                    return r.reverse(),
                    function t() {
                        for (; r.length; ) {
                            var n = r.pop();
                            if (n in e)
                                return t.value = n, t.done = !1, t
                        }
                        return t.done = !0,
                        t
                    }
                },
                e.values = I,
                N.prototype = {
                    constructor: N,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e)
                            for (var r in this)
                                "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done)
                            throw e;
                        var r = this;
                        function o(n, o) {
                            return c.type = "throw",
                            c.arg = e,
                            r.next = n,
                            o && (r.method = "next", r.arg = t),
                            !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                            c = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                l = n.call(a, "finallyLoc");
                                if (u && l) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (u) {
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
                    abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t,
                        a.arg = e,
                        i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                        d
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t)
                                return this.complete(r.completion, r.afterLoc), A(r), d
                        }
                    },
                    catch : function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    A(r)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                delegateYield: function (e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function a(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a),
                u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function c(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, l(n.key), n)
            }
        }
        function u(t, e, r) {
            return (e = l(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function l(t) {
            var e = function (t, e) {
                if ("object" != o(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != o(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }
            (t, "string");
            return "symbol" == o(e) ? e : e + ""
        }
        var s = function () {
            return t = function t() {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                    }
                    (this, t)
                },
                e = null,
                r = [{
                        key: "create",
                        value: (o = i().mark((function t() {
                                        var e,
                                        r,
                                        o,
                                        a,
                                        c,
                                        l,
                                        s;
                                        return i().wrap((function (t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        if (null !== this.settings) {
                                                            t.next = 20;
                                                            break
                                                        }
                                                        return e = {
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
                                                            root_folder: "all",
                                                            keyboard_support: !1
                                                        },
                                                        t.next = 4,
                                                        chrome.storage.local.get(e);
                                                    case 4:
                                                        if (void 0 !== (r = t.sent).close_old_folder || "undefined" == typeof localStorage) {
                                                            t.next = 19;
                                                            break
                                                        }
                                                        o = 0,
                                                        a = Object.keys(e);
                                                    case 7:
                                                        if (!(o < a.length)) {
                                                            t.next = 19;
                                                            break
                                                        }
                                                        if (c = a[o], null !== (l = localStorage.getItem("setting_".concat(c)))) {
                                                            t.next = 12;
                                                            break
                                                        }
                                                        return t.abrupt("continue", 16);
                                                    case 12:
                                                        return s = JSON.parse(l),
                                                        t.next = 15,
                                                        chrome.storage.local.set(u({}, c, s));
                                                    case 15:
                                                        r[c] = s;
                                                    case 16:
                                                        o++,
                                                        t.next = 7;
                                                        break;
                                                    case 19:
                                                        this.settings = new n.z(r, (function (t, e) {
                                                                    return chrome.storage.local.set(u({}, t, e))
                                                                }));
                                                    case 20:
                                                        return t.abrupt("return", this.settings);
                                                    case 21:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }), t, this)
                                    })), l = function () {
                            var t = this,
                            e = arguments;
                            return new Promise((function (r, n) {
                                    var i = o.apply(t, e);
                                    function c(t) {
                                        a(i, r, n, c, u, "next", t)
                                    }
                                    function u(t) {
                                        a(i, r, n, c, u, "throw", t)
                                    }
                                    c(void 0)
                                }))
                        }, function () {
                            return l.apply(this, arguments)
                        })
                    }
                ],
                e && c(t.prototype, e),
                r && c(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                e,
                r,
                o,
                l
            }
            ();
            u(s, "settings", null)
        },
        9259: (t, e, r) => {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                 : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n(t)
            }
            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, i(n.key), n)
                }
            }
            function i(t) {
                var e = function (t, e) {
                    if ("object" != n(t) || !t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, e || "default");
                        if ("object" != n(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }
                (t, "string");
                return "symbol" == n(e) ? e : e + ""
            }
            r.d(e, {
                H: () => a
            });
            var a = function () {
                return t = function t() {
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, t)
                },
                (e = [{
                            key: "translate",
                            value: function (t) {
                                return chrome.i18n.getMessage(t)
                            }
                        }
                    ]) && o(t.prototype, e),
                r && o(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t;
                var t,
                e,
                r
            }
            ()
        },
        2997: (t, e, r) => {
            r.a(t, (async(t, e) => {
                    try {
                        var n = r(6981),
                        o = r(3889),
                        i = await n.k.create(),
                        a = window.document.querySelector("#font");

                        null !== a && chrome.fontSettings && chrome.fontSettings.getFontList && chrome.fontSettings.getFontList((function (t) {
                                t.forEach((function (t) {
                                        var e = window.document.createElement("option");
                                        e.textContent = t.displayName,
                                        e.style.fontFamily = '"'.concat(t.displayName, '"'),
                                        e.textContent = t.displayName,
                                        a.appendChild(e)
                                    })),
                                a.parentElement.classList.remove("hidden")
                            })),

                        (function () {
                            var rootFolderSelect = document.querySelector("#root_folder");

                            if (null !== rootFolderSelect) {
                                chrome.bookmarks.getTree((function (nodes) {
                                    function addFolders(items, level) {
                                        items.forEach((function (item) {
                                            if (void 0 === item.url) {
                                                var option = document.createElement("option");
                                                option.value = item.id;
                                                option.textContent = "— ".repeat(level) + item.title;
                                                rootFolderSelect.appendChild(option);

                                                if (void 0 !== item.children) {
                                                    addFolders(item.children, level + 1);
                                                }
                                            }
                                        }));
                                    }

                                    addFolders(nodes, 0);

                                    rootFolderSelect.value = i.getString("root_folder");

                                    if (rootFolderSelect.value === "" || null === rootFolderSelect.querySelector('option[value="' + rootFolderSelect.value + '"]')) {
                                        rootFolderSelect.value = "all";
                                    }
                                }));
                            }
                        })(),

                        window.document.querySelectorAll("select").forEach((function (t) {
                                var e = t.getAttribute("id");
                                null !== e && (t.value = i.getString(e), "font" === e && (t.style.fontFamily = '"'.concat(t.value, '"')), o.A.addEventListenerMulti(t, "change click keyup", (function () {
                                            i.set(e, t.value),
                                            "icon" === e && o.A.setBrowserActionIcon(t.value),
                                            "font" === e && (t.style.fontFamily = '"'.concat(t.value, '"'))
                                        })))
                            })),
                        window.document.querySelectorAll('input[type="checkbox"]').forEach((function (t) {
                                var e = t.getAttribute("id");
                                null !== e && (i.isEnabled(e) && t.setAttribute("checked", "checked"), o.A.addEventListenerMulti(t, "click keyup", (function () {
                                            i.set(e, t.checked)
                                        })))
                            })),
                        window.document.querySelectorAll('input[type="number"]').forEach((function (t) {
                                var e = t.getAttribute("id");
                                null !== e && (t.value = i.getString(e), o.A.addEventListenerMulti(t, "change keyup", (function () {
                                            var r = parseInt(t.value, 10),
                                            n = parseInt(t.getAttribute("min") || "100", 10),
                                            o = parseInt(t.getAttribute("max") || "100", 10);
                                            Number.isNaN(r) || r < n || r > o ? t.style.border = "1px solid red" : (t.style.border = "", i.set(e, t.value))
                                        })))
                            })),
                        document.querySelector(".license-toggle").addEventListener("click", (function (t) {
                                return document.querySelector("#license").style.display = "block",
                                document.querySelector(".license-toggle").style.display = "none",
                                o.A.nothing(t)
                            })),
                        o.A.translateDocument(window.document),
                        e()
                    } catch (t) {
                        e(t)
                    }
                }), 1)
        }
    },
    i = {};
    function a(t) {
        var e = i[t];
        if (void 0 !== e)
            return e.exports;
        var r = i[t] = {
            exports: {}
        };
        return o[t](r, r.exports, a),
        r.exports
    }
    t = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    e = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    r = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    n = t => {
        t && t.d < 1 && (t.d = 1, t.forEach((t => t.r--)), t.forEach((t => t.r-- ? t.r++ : t())))
    },
    a.a = (o, i, a) => {
        var c;
        a && ((c = []).d = -1);
        var u,
        l,
        s,
        f = new Set,
        y = o.exports,
        p = new Promise(((t, e) => {
                    s = e,
                    l = t
                }));
        p[e] = y,
        p[t] = t => (c && t(c), f.forEach(t), p.catch((t => {}))),
        o.exports = p,
        i((o => {
                var i;
                u = (o => o.map((o => {
                            if (null !== o && "object" == typeof o) {
                                if (o[t])
                                    return o;
                                if (o.then) {
                                    var i = [];
                                    i.d = 0,
                                    o.then((t => {
                                            a[e] = t,
                                            n(i)
                                        }), (t => {
                                            a[r] = t,
                                            n(i)
                                        }));
                                    var a = {};
                                    return a[t] = t => t(i),
                                    a
                                }
                            }
                            var c = {};
                            return c[t] = t => {},
                            c[e] = o,
                            c
                        })))(o);
                var a = () => u.map((t => {
                        if (t[r])
                            throw t[r];
                        return t[e]
                    })),
                l = new Promise((e => {
                            (i = () => e(a)).r = 0;
                            var r = t => t !== c && !f.has(t) && (f.add(t), t && !t.d && (i.r++, t.push(i)));
                            u.map((e => e[t](r)))
                        }));
                return i.r ? l : a()
            }), (t => (t ? s(p[r] = t) : l(y), n(c)))),
        c && c.d < 0 && (c.d = 0)
    },
    a.d = (t, e) => {
        for (var r in e)
            a.o(e, r) && !a.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    },
    a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    a(2997)
})();