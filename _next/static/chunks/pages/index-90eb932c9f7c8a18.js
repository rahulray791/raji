(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(n, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(3678)
            }])
        },
        3678: function(n, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var t = i(5893),
                s = i(7294),
                r = i(1163),
                c = i(9008),
                u = i.n(c),
                f = i(5675),
                o = i.n(f);

            function a() {
                var n = (0, r.useRouter)();
                return (0, s.useEffect)(function() {
                    setTimeout(function() {
                        n.push("/h")
                    }, 1)
                }, [n]), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(u(), {
                        children: [(0, t.jsx)("title", {
                            children: "Verifying ..."
                        }), (0, t.jsx)("meta", {
                            name: "description",
                            content: "please wait"
                        }), (0, t.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "text-center loading-fast",
                        children: [(0, t.jsx)(o(), {
                            src: "/spinner.gif",
                            alt: "loading",
                            quality: 100,
                            layout: "fixed",
                            width: 100,
                            height: 100
                        }), (0, t.jsx)("h1", {
                            children: "Verifying ..."
                        })]
                    })]
                })
            }
        }
    },
    function(n) {
        n.O(0, [345, 774, 888, 179], function() {
            return n(n.s = 5557)
        }), _N_E = n.O()
    }
]);