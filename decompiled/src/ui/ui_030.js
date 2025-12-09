/**
 * Claude Code Decompiled
 * Category: ui
 * File: 30/53
 * Lines: 197166 - 198663 (1498 lines)
 * Original file: cli.js
 */

                if (Q && Array.isArray(Q)) Q.forEach((B) => {
                    let [G, Z] = B;
                    Af.set(G, {
                        ...Z,
                        staleAt: new Date(Z.staleAt)
                    })
                });
                YRB()
            }
        }
    } catch (A) {}
    if (!fH.disableIdleStreams) {
        let A = m7A.startIdleListener();
        if (A) m7A.stopIdleListener = A
    }
}

function YRB() {
    let A = Array.from(Af.entries()).map((B) => {
            let [G, Z] = B;
            return {
                key: G,
                staleAt: Z.staleAt.getTime()
            }
        }).sort((B, G) => B.staleAt - G.staleAt),
        Q = Math.min(Math.max(0, Af.size - fH.maxEntries), Af.size);
    for (let B = 0; B < Q; B++) Af.delete(A[B].key)
}

function JRB(A, Q, B) {
    let G = B.dateUpdated || "",
        Z = new Date(Date.now() + fH.staleTTL),
        I = !fH.disableCache ? Af.get(Q) : void 0;
    if (I && G && I.version === G) {
        I.staleAt = Z, BRB();
        return
    }
    if (!fH.disableCache) Af.set(Q, {
        data: B,
        version: G,
        staleAt: Z,
        sse: p7A.has(A)
    }), YRB();
    BRB();
    let Y = d7A.get(A);
    Y && Y.forEach((J) => O$6(J, B))
}
async function O$6(A, Q) {
    await A.setPayload(Q || A.getPayload())
}
async function Nm1(A) {
    let {
        apiHost: Q,
        apiRequestHeaders: B
    } = A.getApiHosts(), G = A.getClientKey(), Z = "isRemoteEval" in A && A.isRemoteEval(), I = T$A(A), Y = Lm1(A), J = usA.get(Y);
    if (!J) J = (Z ? m7A.fetchRemoteEvalCall({
        host: Q,
        clientKey: G,
        payload: {
            attributes: A.getAttributes(),
            forcedVariations: A.getForcedVariations(),
            forcedFeatures: Array.from(A.getForcedFeatures().entries()),
            url: A.getUrl()
        },
        headers: B
    }) : m7A.fetchFeaturesCall({
        host: Q,
        clientKey: G,
        headers: B
    })).then((X) => {
        if (!X.ok) throw Error(`HTTP error: ${X.status}`);
        if (X.headers.get("x-sse-support") === "enabled") p7A.add(I);
        return X.json()
    }).then((X) => {
        return JRB(I, Y, X), Mm1(A), usA.delete(Y), {
            data: X,
            success: !0,
            source: "network"
        }
    }).catch((X) => {
        return usA.delete(Y), {
            data: null,
            source: "error",
            success: !1,
            error: X
        }
    }), usA.set(Y, J);
    return J
}

function Mm1(A) {
    let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        B = T$A(A),
        G = Lm1(A),
        {
            streamingHost: Z,
            streamingHostRequestHeaders: I
        } = A.getApiHosts(),
        Y = A.getClientKey();
    if (Q) p7A.add(B);
    if (fH.backgroundSync && p7A.has(B) && v_.EventSource) {
        if (c7A.has(B)) return;
        let J = {
            src: null,
            host: Z,
            clientKey: Y,
            headers: I,
            cb: (W) => {
                try {
                    if (W.type === "features-updated") {
                        let X = d7A.get(B);
                        X && X.forEach((F) => {
                            Nm1(F)
                        })
                    } else if (W.type === "features") {
                        let X = JSON.parse(W.data);
                        JRB(B, G, X)
                    }
                    J.errors = 0
                } catch (X) {
                    WRB(J)
                }
            },
            errors: 0,
            state: "active"
        };
        c7A.set(B, J), Rm1(J)
    }
}

function WRB(A) {
    if (A.state === "idle") return;
    if (A.errors++, A.errors > 3 || A.src && A.src.readyState === 2) {
        let Q = Math.pow(3, A.errors - 3) * (1000 + Math.random() * 1000);
        Om1(A), setTimeout(() => {
            if (["idle", "active"].includes(A.state)) return;
            Rm1(A)
        }, Math.min(Q, 300000))
    }
}

function Om1(A) {
    if (!A.src) return;
    if (A.src.onopen = null, A.src.onerror = null, A.src.close(), A.src = null, A.state === "active") A.state = "disabled"
}

function Rm1(A) {
    A.src = m7A.eventSourceCall({
        host: A.host,
        clientKey: A.clientKey,
        headers: A.headers
    }), A.state = "active", A.src.addEventListener("features", A.cb), A.src.addEventListener("features-updated", A.cb), A.src.onerror = () => WRB(A), A.src.onopen = () => {
        A.errors = 0
    }
}

function R$6(A, Q) {
    Om1(A), c7A.delete(Q)
}

function T$6() {
    p7A.clear(), c7A.forEach(R$6), d7A.clear(), m7A.stopIdleListener()
}

function msA(A, Q) {
    if (Q.streaming) {
        if (!A.getClientKey()) throw Error("Must specify clientKey to enable streaming");
        if (Q.payload) Mm1(A, !0);
        w$6(A)
    }
}
var fH, v_, m7A, d7A, QRB = !1,
    Af, usA, c7A, p7A;
var XRB = L(() => {
    R$A();
    fH = {
        staleTTL: 60000,
        maxAge: 14400000,
        cacheKey: "gbFeaturesCache",
        backgroundSync: !0,
        maxEntries: 10,
        disableIdleStreams: !1,
        idleStreamInterval: 20000,
        disableCache: !1
    }, v_ = nOB(), m7A = {
        fetchFeaturesCall: (A) => {
            let {
                host: Q,
                clientKey: B,
                headers: G
            } = A;
            return v_.fetch(`${Q}/api/features/${B}`, {
                headers: G
            })
        },
        fetchRemoteEvalCall: (A) => {
            let {
                host: Q,
                clientKey: B,
                payload: G,
                headers: Z
            } = A, I = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...Z
                },
                body: JSON.stringify(G)
            };
            return v_.fetch(`${Q}/api/eval/${B}`, I)
        },
        eventSourceCall: (A) => {
            let {
                host: Q,
                clientKey: B,
                headers: G
            } = A;
            if (G) return new v_.EventSource(`${Q}/sub/${B}`, {
                headers: G
            });
            return new v_.EventSource(`${Q}/sub/${B}`)
        },
        startIdleListener: () => {
            let A;
            if (!(typeof window < "u" && typeof document < "u")) return;
            let B = () => {
                if (document.visibilityState === "visible") window.clearTimeout(A), N$6();
                else if (document.visibilityState === "hidden") A = window.setTimeout(q$6, fH.idleStreamInterval)
            };
            return document.addEventListener("visibilitychange", B), () => document.removeEventListener("visibilitychange", B)
        },
        stopIdleListener: () => {}
    };
    try {
        if (globalThis.localStorage) v_.localStorage = globalThis.localStorage
    } catch (A) {}
    d7A = new Map, Af = new Map, usA = new Map, c7A = new Map, p7A = new Set
});
var qRB = U((wRB) => {
    Object.defineProperty(wRB, "__esModule", {
        value: !0
    });
    var DRB = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
        jm1 = {
            revert: function() {}
        },
        lsA = new Map,
        Pm1 = new Set;

    function isA(A) {
        var Q = lsA.get(A);
        return Q || lsA.set(A, Q = {
            element: A,
            attributes: {}
        }), Q
    }

    function nsA(A, Q, B, G, Z) {
        var I = B(A),
            Y = {
                isDirty: !1,
                originalValue: I,
                virtualValue: I,
                mutations: [],
                el: A,
                _positionTimeout: null,
                observer: new MutationObserver(function() {
                    if (Q !== "position" || !Y._positionTimeout) {
                        Q === "position" && (Y._positionTimeout = setTimeout(function() {
                            Y._positionTimeout = null
                        }, 1000));
                        var J = B(A);
                        Q === "position" && J.parentNode === Y.virtualValue.parentNode && J.insertBeforeNode === Y.virtualValue.insertBeforeNode || J !== Y.virtualValue && (Y.originalValue = J, Z(Y))
                    }
                }),
                mutationRunner: Z,
                setValue: G,
                getCurrentValue: B
            };
        return Q === "position" && A.parentNode ? Y.observer.observe(A.parentNode, {
            childList: !0,
            subtree: !0,
            attributes: !1,
            characterData: !1
        }) : Y.observer.observe(A, function(J) {
            return J === "html" ? {
                childList: !0,
                subtree: !0,
                attributes: !0,
                characterData: !0
            } : {
                childList: !1,
                subtree: !1,
                attributes: !0,
                attributeFilter: [J]
            }
        }(Q)), Y
    }

    function asA(A, Q) {
        var B = Q.getCurrentValue(Q.el);
        Q.virtualValue = A, A && typeof A != "string" ? B && A.parentNode === B.parentNode && A.insertBeforeNode === B.insertBeforeNode || (Q.isDirty = !0, FRB()) : A !== B && (Q.isDirty = !0, FRB())
    }

    function P$6(A) {
        var Q = A.originalValue;
        A.mutations.forEach(function(B) {
            return Q = B.mutate(Q)
        }), asA(function(B) {
            return dsA || (dsA = document.createElement("div")), dsA.innerHTML = B, dsA.innerHTML
        }(Q), A)
    }

    function j$6(A) {
        var Q = new Set(A.originalValue.split(/\s+/).filter(Boolean));
        A.mutations.forEach(function(B) {
            return B.mutate(Q)
        }), asA(Array.from(Q).filter(Boolean).join(" "), A)
    }

    function S$6(A) {
        var Q = A.originalValue;
        A.mutations.forEach(function(B) {
            return Q = B.mutate(Q)
        }), asA(Q, A)
    }

    function _$6(A) {
        var Q = A.originalValue;
        A.mutations.forEach(function(B) {
            var G = function(Z) {
                var I = Z.insertBeforeSelector,
                    Y = document.querySelector(Z.parentSelector);
                if (!Y) return null;
                var J = I ? document.querySelector(I) : null;
                return I && !J ? null : {
                    parentNode: Y,
                    insertBeforeNode: J
                }
            }(B.mutate());
            Q = G || Q
        }), asA(Q, A)
    }
    var k$6 = function(A) {
            return A.innerHTML
        },
        y$6 = function(A, Q) {
            return A.innerHTML = Q
        };

    function HRB(A) {
        var Q = isA(A);
        return Q.html || (Q.html = nsA(A, "html", k$6, y$6, P$6)), Q.html
    }
    var x$6 = function(A) {
            return {
                parentNode: A.parentElement,
                insertBeforeNode: A.nextElementSibling
            }
        },
        v$6 = function(A, Q) {
            Q.insertBeforeNode && !Q.parentNode.contains(Q.insertBeforeNode) || Q.parentNode.insertBefore(A, Q.insertBeforeNode)
        };

    function CRB(A) {
        var Q = isA(A);
        return Q.position || (Q.position = nsA(A, "position", x$6, v$6, _$6)), Q.position
    }
    var dsA, j$A, b$6 = function(A, Q) {
            return Q ? A.className = Q : A.removeAttribute("class")
        },
        f$6 = function(A) {
            return A.className
        };

    function ERB(A) {
        var Q = isA(A);
        return Q.classes || (Q.classes = nsA(A, "class", f$6, b$6, j$6)), Q.classes
    }

    function zRB(A, Q) {
        var B, G = isA(A);
        return G.attributes[Q] || (G.attributes[Q] = nsA(A, Q, (B = Q, function(Z) {
            var I;
            return (I = Z.getAttribute(B)) != null ? I : null
        }), function(Z) {
            return function(I, Y) {
                return Y !== null ? I.setAttribute(Z, Y) : I.removeAttribute(Z)
            }
        }(Q), S$6)), G.attributes[Q]
    }

    function csA(A, Q, B) {
        if (B.isDirty) {
            B.isDirty = !1;
            var G = B.virtualValue;
            B.mutations.length || function(Z, I) {
                var Y, J, W = lsA.get(Z);
                if (W)
                    if (I === "html")(Y = W.html) == null || (J = Y.observer) == null || J.disconnect(), delete W.html;
                    else if (I === "class") {
                    var X, F;
                    (X = W.classes) == null || (F = X.observer) == null || F.disconnect(), delete W.classes
                } else if (I === "position") {
                    var V, K;
                    (V = W.position) == null || (K = V.observer) == null || K.disconnect(), delete W.position
                } else {
                    var D, H, C;
                    (D = W.attributes) == null || (H = D[I]) == null || (C = H.observer) == null || C.disconnect(), delete W.attributes[I]
                }
            }(A, Q), B.setValue(A, G)
        }
    }

    function h$6(A, Q) {
        A.html && csA(Q, "html", A.html), A.classes && csA(Q, "class", A.classes), A.position && csA(Q, "position", A.position), Object.keys(A.attributes).forEach(function(B) {
            csA(Q, B, A.attributes[B])
        })
    }

    function FRB() {
        lsA.forEach(h$6)
    }

    function URB(A) {
        if (A.kind !== "position" || A.elements.size !== 1) {
            var Q = new Set(A.elements);
            document.querySelectorAll(A.selector).forEach(function(B) {
                Q.has(B) || (A.elements.add(B), function(G, Z) {
                    var I = null;
                    G.kind === "html" ? I = HRB(Z) : G.kind === "class" ? I = ERB(Z) : G.kind === "attribute" ? I = zRB(Z, G.attribute) : G.kind === "position" && (I = CRB(Z)), I && (I.mutations.push(G), I.mutationRunner(I))
                }(A, B))
            })
        }
    }

    function VRB() {
        Pm1.forEach(URB)
    }

    function $RB() {
        typeof document < "u" && (j$A || (j$A = new MutationObserver(function() {
            VRB()
        })), VRB(), j$A.observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !1,
            characterData: !1
        }))
    }

    function ssA(A) {
        return typeof document > "u" ? jm1 : (Pm1.add(A), URB(A), {
            revert: function() {
                var Q;
                (Q = A).elements.forEach(function(B) {
                    return function(G, Z) {
                        var I = null;
                        if (G.kind === "html" ? I = HRB(Z) : G.kind === "class" ? I = ERB(Z) : G.kind === "attribute" ? I = zRB(Z, G.attribute) : G.kind === "position" && (I = CRB(Z)), I) {
                            var Y = I.mutations.indexOf(G);
                            Y !== -1 && I.mutations.splice(Y, 1), I.mutationRunner(I)
                        }
                    }(Q, B)
                }), Q.elements.clear(), Pm1.delete(Q)
            }
        })
    }

    function Tm1(A, Q) {
        return ssA({
            kind: "html",
            elements: new Set,
            mutate: Q,
            selector: A
        })
    }

    function KRB(A, Q) {
        return ssA({
            kind: "position",
            elements: new Set,
            mutate: Q,
            selector: A
        })
    }

    function P$A(A, Q) {
        return ssA({
            kind: "class",
            elements: new Set,
            mutate: Q,
            selector: A
        })
    }

    function psA(A, Q, B) {
        return DRB.test(Q) ? Q === "class" || Q === "className" ? P$A(A, function(G) {
            var Z = B(Array.from(G).join(" "));
            G.clear(), Z && Z.split(/\s+/g).filter(Boolean).forEach(function(I) {
                return G.add(I)
            })
        }) : ssA({
            kind: "attribute",
            attribute: Q,
            elements: new Set,
            mutate: B,
            selector: A
        }) : jm1
    }
    $RB();
    var g$6 = {
        html: Tm1,
        classes: P$A,
        attribute: psA,
        position: KRB,
        declarative: function(A) {
            var {
                selector: Q,
                action: B,
                value: G,
                attribute: Z,
                parentSelector: I,
                insertBeforeSelector: Y
            } = A;
            if (Z === "html") {
                if (B === "append") return Tm1(Q, function(J) {
                    return J + (G != null ? G : "")
                });
                if (B === "set") return Tm1(Q, function() {
                    return G != null ? G : ""
                })
            } else if (Z === "class") {
                if (B === "append") return P$A(Q, function(J) {
                    G && J.add(G)
                });
                if (B === "remove") return P$A(Q, function(J) {
                    G && J.delete(G)
                });
                if (B === "set") return P$A(Q, function(J) {
                    J.clear(), G && J.add(G)
                })
            } else if (Z === "position") {
                if (B === "set" && I) return KRB(Q, function() {
                    return {
                        insertBeforeSelector: Y,
                        parentSelector: I
                    }
                })
            } else {
                if (B === "append") return psA(Q, Z, function(J) {
                    return J !== null ? J + (G != null ? G : "") : G != null ? G : ""
                });
                if (B === "set") return psA(Q, Z, function() {
                    return G != null ? G : ""
                });
                if (B === "remove") return psA(Q, Z, function() {
                    return null
                })
            }
            return jm1
        }
    };
    wRB.connectGlobalObserver = $RB, wRB.default = g$6, wRB.disconnectGlobalObserver = function() {
        j$A && j$A.disconnect()
    }, wRB.validAttributeName = DRB
});

function Dp(A, Q, B) {
    B = B || {};
    for (let [G, Z] of Object.entries(Q)) switch (G) {
        case "$or":
            if (!NRB(A, Z, B)) return !1;
            break;
        case "$nor":
            if (NRB(A, Z, B)) return !1;
            break;
        case "$and":
            if (!l$6(A, Z, B)) return !1;
            break;
        case "$not":
            if (Dp(A, Z, B)) return !1;
            break;
        default:
            if (!S$A(Z, u$6(A, G), B)) return !1
    }
    return !0
}

function u$6(A, Q) {
    let B = Q.split("."),
        G = A;
    for (let Z = 0; Z < B.length; Z++)
        if (G && typeof G === "object" && B[Z] in G) G = G[B[Z]];
        else return null;
    return G
}

function m$6(A) {
    if (!Sm1[A]) Sm1[A] = new RegExp(A.replace(/([^\\])\//g, "$1\\/"));
    return Sm1[A]
}

function S$A(A, Q, B) {
    if (typeof A === "string") return Q + "" === A;
    if (typeof A === "number") return Q * 1 === A;
    if (typeof A === "boolean") return Q !== null && !!Q === A;
    if (A === null) return Q === null;
    if (Array.isArray(A) || !LRB(A)) return JSON.stringify(Q) === JSON.stringify(A);
    for (let G in A)
        if (!p$6(G, Q, A[G], B)) return !1;
    return !0
}

function LRB(A) {
    let Q = Object.keys(A);
    return Q.length > 0 && Q.filter((B) => B[0] === "$").length === Q.length
}

function d$6(A) {
    if (A === null) return "null";
    if (Array.isArray(A)) return "array";
    let Q = typeof A;
    if (["string", "number", "boolean", "object", "undefined"].includes(Q)) return Q;
    return "unknown"
}

function c$6(A, Q, B) {
    if (!Array.isArray(A)) return !1;
    let G = LRB(Q) ? (Z) => S$A(Q, Z, B) : (Z) => Dp(Z, Q, B);
    for (let Z = 0; Z < A.length; Z++)
        if (A[Z] && G(A[Z])) return !0;
    return !1
}

function rsA(A, Q) {
    if (Array.isArray(A)) return A.some((B) => Q.includes(B));
    return Q.includes(A)
}

function p$6(A, Q, B, G) {
    switch (A) {
        case "$veq":
            return ow(Q) === ow(B);
        case "$vne":
            return ow(Q) !== ow(B);
        case "$vgt":
            return ow(Q) > ow(B);
        case "$vgte":
            return ow(Q) >= ow(B);
        case "$vlt":
            return ow(Q) < ow(B);
        case "$vlte":
            return ow(Q) <= ow(B);
        case "$eq":
            return Q === B;
        case "$ne":
            return Q !== B;
        case "$lt":
            return Q < B;
        case "$lte":
            return Q <= B;
        case "$gt":
            return Q > B;
        case "$gte":
            return Q >= B;
        case "$exists":
            return B ? Q != null : Q == null;
        case "$in":
            if (!Array.isArray(B)) return !1;
            return rsA(Q, B);
        case "$inGroup":
            return rsA(Q, G[B] || []);
        case "$notInGroup":
            return !rsA(Q, G[B] || []);
        case "$nin":
            if (!Array.isArray(B)) return !1;
            return !rsA(Q, B);
        case "$not":
            return !S$A(B, Q, G);
        case "$size":
            if (!Array.isArray(Q)) return !1;
            return S$A(B, Q.length, G);
        case "$elemMatch":
            return c$6(Q, B, G);
        case "$all":
            if (!Array.isArray(Q)) return !1;
            for (let Z = 0; Z < B.length; Z++) {
                let I = !1;
                for (let Y = 0; Y < Q.length; Y++)
                    if (S$A(B[Z], Q[Y], G)) {
                        I = !0;
                        break
                    } if (!I) return !1
            }
            return !0;
        case "$regex":
            try {
                return m$6(B).test(Q)
            } catch (Z) {
                return !1
            }
        case "$type":
            return d$6(Q) === B;
        default:
            return console.error("Unknown operator: " + A), !1
    }
}

function NRB(A, Q, B) {
    if (!Q.length) return !0;
    for (let G = 0; G < Q.length; G++)
        if (Dp(A, Q[G], B)) return !0;
    return !1
}

function l$6(A, Q, B) {
    for (let G = 0; G < Q.length; G++)
        if (!Dp(A, Q[G], B)) return !1;
    return !0
}
var Sm1;
var MRB = L(() => {
    R$A();
    Sm1 = {}
});

function a$6(A) {
    let Q = new Map;
    if (A.global.forcedFeatureValues) A.global.forcedFeatureValues.forEach((B, G) => Q.set(G, B));
    if (A.user.forcedFeatureValues) A.user.forcedFeatureValues.forEach((B, G) => Q.set(G, B));
    return Q
}

function s$6(A) {
    if (A.global.forcedVariations && A.user.forcedVariations) return {
        ...A.global.forcedVariations,
        ...A.user.forcedVariations
    };
    else if (A.global.forcedVariations) return A.global.forcedVariations;
    else if (A.user.forcedVariations) return A.user.forcedVariations;
    else return {}
}
async function l7A(A) {
    try {
        await A()
    } catch (Q) {}
}

function ORB(A, Q, B) {
    if (A.user.trackedExperiments) {
        let Z = esA(Q, B);
        if (A.user.trackedExperiments.has(Z)) return [];
        A.user.trackedExperiments.add(Z)
    }
    if (A.user.enableDevMode && A.user.devLogs) A.user.devLogs.push({
        experiment: Q,
        result: B,
        timestamp: Date.now().toString(),
        logType: "experiment"
    });
    let G = [];
    if (A.global.trackingCallback) {
        let Z = A.global.trackingCallback;
        G.push(l7A(() => Z(Q, B, A.user)))
    }
    if (A.user.trackingCallback) {
        let Z = A.user.trackingCallback;
        G.push(l7A(() => Z(Q, B)))
    }
    if (A.global.eventLogger) {
        let Z = A.global.eventLogger;
        G.push(l7A(() => Z(n$6, {
            experimentId: Q.key,
            variationId: B.key,
            hashAttribute: B.hashAttribute,
            hashValue: B.hashValue
        }, A.user)))
    }
    return G
}

function r$6(A, Q, B) {
    if (A.user.trackedFeatureUsage) {
        let G = JSON.stringify(B.value);
        if (A.user.trackedFeatureUsage[Q] === G) return;
        if (A.user.trackedFeatureUsage[Q] = G, A.user.enableDevMode && A.user.devLogs) A.user.devLogs.push({
            featureKey: Q,
            result: B,
            timestamp: Date.now().toString(),
            logType: "feature"
        })
    }
    if (A.global.onFeatureUsage) {
        let G = A.global.onFeatureUsage;
        l7A(() => G(Q, B, A.user))
    }
    if (A.user.onFeatureUsage) {
        let G = A.user.onFeatureUsage;
        l7A(() => G(Q, B))
    }
    if (A.global.eventLogger) {
        let G = A.global.eventLogger;
        l7A(() => G(i$6, {
            feature: Q,
            source: B.source,
            value: B.value,
            ruleId: B.source === "defaultValue" ? "$default" : B.ruleId || "",
            variationId: B.experimentResult ? B.experimentResult.key : ""
        }, A.user))
    }
}

function osA(A, Q) {
    if (Q.stack.evaluatedFeatures.has(A)) return Hp(Q, A, null, "cyclicPrerequisite");
    Q.stack.evaluatedFeatures.add(A), Q.stack.id = A;
    let B = a$6(Q);
    if (B.has(A)) return Hp(Q, A, B.get(A), "override");
    if (!Q.global.features || !Q.global.features[A]) return Hp(Q, A, null, "unknownFeature");
    let G = Q.global.features[A];
    if (G.rules) {
        let Z = new Set(Q.stack.evaluatedFeatures);
        A: for (let I of G.rules) {
            if (I.parentConditions)
                for (let W of I.parentConditions) {
                    Q.stack.evaluatedFeatures = new Set(Z);
                    let X = osA(W.id, Q);
                    if (X.source === "cyclicPrerequisite") return Hp(Q, A, null, "cyclicPrerequisite");
                    let F = {
                        value: X.value
                    };
                    if (!Dp(F, W.condition || {})) {
                        if (W.gate) return Hp(Q, A, null, "prerequisite");
                        continue A
                    }
                }
            if (I.filters && PRB(I.filters, Q)) continue;
            if ("force" in I) {
                if (I.condition && !TRB(I.condition, Q)) continue;
                if (!o$6(Q, I.seed || A, I.hashAttribute, Q.user.saveStickyBucketAssignmentDoc && !I.disableStickyBucketing ? I.fallbackAttribute : void 0, I.range, I.coverage, I.hashVersion)) continue;
                if (I.tracks) I.tracks.forEach((W) => {
                    if (!ORB(Q, W.experiment, W.result).length && Q.global.saveDeferredTrack) Q.global.saveDeferredTrack({
                        experiment: W.experiment,
                        result: W.result
                    })
                });
                return Hp(Q, A, I.force, "force", I.id)
            }
            if (!I.variations) continue;
            let Y = {
                variations: I.variations,
                key: I.key || A
            };
            if ("coverage" in I) Y.coverage = I.coverage;
            if (I.weights) Y.weights = I.weights;
            if (I.hashAttribute) Y.hashAttribute = I.hashAttribute;
            if (I.fallbackAttribute) Y.fallbackAttribute = I.fallbackAttribute;
            if (I.disableStickyBucketing) Y.disableStickyBucketing = I.disableStickyBucketing;
            if (I.bucketVersion !== void 0) Y.bucketVersion = I.bucketVersion;
            if (I.minBucketVersion !== void 0) Y.minBucketVersion = I.minBucketVersion;
            if (I.namespace) Y.namespace = I.namespace;
            if (I.meta) Y.meta = I.meta;
            if (I.ranges) Y.ranges = I.ranges;
            if (I.name) Y.name = I.name;
            if (I.phase) Y.phase = I.phase;
            if (I.seed) Y.seed = I.seed;
            if (I.hashVersion) Y.hashVersion = I.hashVersion;
            if (I.filters) Y.filters = I.filters;
            if (I.condition) Y.condition = I.condition;
            let {
                result: J
            } = tsA(Y, A, Q);
            if (Q.global.onExperimentEval && Q.global.onExperimentEval(Y, J), J.inExperiment && !J.passthrough) return Hp(Q, A, J.value, "experiment", I.id, Y, J)
        }
    }
    return Hp(Q, A, G.defaultValue === void 0 ? null : G.defaultValue, "defaultValue")
}

function tsA(A, Q, B) {
    let G = A.key,
        Z = A.variations.length;
    if (Z < 2) return {
        result: AY(B, A, -1, !1, Q)
    };
    if (B.global.enabled === !1 || B.user.enabled === !1) return {
        result: AY(B, A, -1, !1, Q)
    };
    if (A = t$6(A, B), A.urlPatterns && !fsA(B.user.url || "", A.urlPatterns)) return {
        result: AY(B, A, -1, !1, Q)
    };
    let I = oOB(G, B.user.url || "", Z);
    if (I !== null) return {
        result: AY(B, A, I, !1, Q)
    };
    let Y = s$6(B);
    if (G in Y) {
        let E = Y[G];
        return {
            result: AY(B, A, E, !1, Q)
        }
    }
    if (A.status === "draft" || A.active === !1) return {
        result: AY(B, A, -1, !1, Q)
    };
    let {
        hashAttribute: J,
        hashValue: W
    } = rt(B, A.hashAttribute, B.user.saveStickyBucketAssignmentDoc && !A.disableStickyBucketing ? A.fallbackAttribute : void 0);
    if (!W) return {
        result: AY(B, A, -1, !1, Q)
    };
    let X = -1,
        F = !1,
        V = !1;
    if (B.user.saveStickyBucketAssignmentDoc && !A.disableStickyBucketing) {
        let {
            variation: E,
            versionIsBlocked: z
        } = Qw6({
            ctx: B,
            expKey: A.key,
            expBucketVersion: A.bucketVersion,
            expHashAttribute: A.hashAttribute,
            expFallbackAttribute: A.fallbackAttribute,
            expMinBucketVersion: A.minBucketVersion,
            expMeta: A.meta
        });
        F = E >= 0, X = E, V = !!z
    }
    if (!F) {
        if (A.filters) {
            if (PRB(A.filters, B)) return {
                result: AY(B, A, -1, !1, Q)
            }
        } else if (A.namespace && !aOB(W, A.namespace)) return {
            result: AY(B, A, -1, !1, Q)
        };
        if (A.include && !tOB(A.include)) return {
            result: AY(B, A, -1, !1, Q)
        };
        if (A.condition && !TRB(A.condition, B)) return {
            result: AY(B, A, -1, !1, Q)
        };
        if (A.parentConditions) {
            let E = new Set(B.stack.evaluatedFeatures);
            for (let z of A.parentConditions) {
                B.stack.evaluatedFeatures = new Set(E);
                let w = osA(z.id, B);
                if (w.source === "cyclicPrerequisite") return {
                    result: AY(B, A, -1, !1, Q)
                };
                let N = {
                    value: w.value
                };
                if (!Dp(N, z.condition || {})) return {
                    result: AY(B, A, -1, !1, Q)
                }
            }
        }
        if (A.groups && !Aw6(A.groups, B)) return {
            result: AY(B, A, -1, !1, Q)
        }
    }
    if (A.url && !e$6(A.url, B)) return {
        result: AY(B, A, -1, !1, Q)
    };
    let K = M$A(A.seed || G, W, A.hashVersion || 1);
    if (K === null) return {
        result: AY(B, A, -1, !1, Q)
    };
    if (!F) {
        let E = A.ranges || rOB(Z, A.coverage === void 0 ? 1 : A.coverage, A.weights);
        X = sOB(K, E)
    }
    if (V) return {
        result: AY(B, A, -1, !1, Q, void 0, !0)
    };
    if (X < 0) return {
        result: AY(B, A, -1, !1, Q)
    };
    if ("force" in A) return {
        result: AY(B, A, A.force === void 0 ? -1 : A.force, !1, Q)
    };
    if (B.global.qaMode || B.user.qaMode) return {
        result: AY(B, A, -1, !1, Q)
    };
    if (A.status === "stopped") return {
        result: AY(B, A, -1, !1, Q)
    };
    let D = AY(B, A, X, !0, Q, K, F);
    if (B.user.saveStickyBucketAssignmentDoc && !A.disableStickyBucketing) {
        let {
            changed: E,
            key: z,
            doc: w
        } = Gw6(B, J, O$A(W), {
            [_m1(A.key, A.bucketVersion)]: D.key
        });
        if (E) B.user.stickyBucketAssignmentDocs = B.user.stickyBucketAssignmentDocs || {}, B.user.stickyBucketAssignmentDocs[z] = w, B.user.saveStickyBucketAssignmentDoc(w)
    }
    let H = ORB(B, A, D);
    if (H.length === 0 && B.global.saveDeferredTrack) B.global.saveDeferredTrack({
        experiment: A,
        result: D
    });
    let C = !H.length ? void 0 : H.length === 1 ? H[0] : Promise.all(H).then(() => {});
    return "changeId" in A && A.changeId && B.global.recordChangeId && B.global.recordChangeId(A.changeId), {
        result: D,
        trackingCall: C
    }
}

function Hp(A, Q, B, G, Z, I, Y) {
    let J = {
        value: B,
        on: !!B,
        off: !B,
        source: G,
        ruleId: Z || ""
    };
    if (I) J.experiment = I;
    if (Y) J.experimentResult = Y;
    if (G !== "override") r$6(A, Q, J);
    return J
}

function RRB(A) {
    return {
        ...A.user.attributes,
        ...A.user.attributeOverrides
    }
}

function TRB(A, Q) {
    return Dp(RRB(Q), A, Q.global.savedGroups || {})
}

function PRB(A, Q) {
    return A.some((B) => {
        let {
            hashValue: G
        } = rt(Q, B.attribute);
        if (!G) return !0;
        let Z = M$A(B.seed, G, B.hashVersion || 2);
        if (Z === null) return !0;
        return !B.ranges.some((I) => bsA(Z, I))
    })
}

function o$6(A, Q, B, G, Z, I, Y) {
    if (!Z && I === void 0) return !0;
    if (!Z && I === 0) return !1;
    let {
        hashValue: J
    } = rt(A, B, G);
    if (!J) return !1;
    let W = M$A(Q, J, Y || 1);
    if (W === null) return !1;
    return Z ? bsA(W, Z) : I !== void 0 ? W <= I : !0
}

function AY(A, Q, B, G, Z, I, Y) {
    let J = !0;
    if (B < 0 || B >= Q.variations.length) B = 0, J = !1;
    let {
        hashAttribute: W,
        hashValue: X
    } = rt(A, Q.hashAttribute, A.user.saveStickyBucketAssignmentDoc && !Q.disableStickyBucketing ? Q.fallbackAttribute : void 0), F = Q.meta ? Q.meta[B] : {}, V = {
        key: F.key || "" + B,
        featureId: Z,
        inExperiment: J,
        hashUsed: G,
        variationId: B,
        value: Q.variations[B],
        hashAttribute: W,
        hashValue: X,
        stickyBucketUsed: !!Y
    };
    if (F.name) V.name = F.name;
    if (I !== void 0) V.bucket = I;
    if (F.passthrough) V.passthrough = F.passthrough;
    return V
}

function t$6(A, Q) {
    let B = A.key,
        G = Q.global.overrides;
    if (G && G[B]) {
        if (A = Object.assign({}, A, G[B]), typeof A.url === "string") A.url = qm1(A.url)
    }
    return A
}

function rt(A, Q, B) {
    let G = Q || "id",
        Z = "",
        I = RRB(A);
    if (I[G]) Z = I[G];
    if (!Z && B) {
        if (I[B]) Z = I[B];
        if (Z) G = B
    }
    return {
        hashAttribute: G,
        hashValue: Z
    }
}

function e$6(A, Q) {
    let B = Q.user.url;
    if (!B) return !1;
    let G = B.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
    if (A.test(B)) return !0;
    if (A.test(G)) return !0;
    return !1
}

function Aw6(A, Q) {
    let B = Q.global.groups || {};
    for (let G = 0; G < A.length; G++)
        if (B[A[G]]) return !0;
    return !1
}

function Qw6(A) {
    let {
        ctx: Q,
        expKey: B,
        expBucketVersion: G,
        expHashAttribute: Z,
        expFallbackAttribute: I,
        expMinBucketVersion: Y,
        expMeta: J
    } = A;
    G = G || 0, Y = Y || 0, Z = Z || "id", J = J || [];
    let W = _m1(B, G),
        X = Bw6(Q, Z, I);
    if (Y > 0)
        for (let K = 0; K <= Y; K++) {
            let D = _m1(B, K);
            if (X[D] !== void 0) return {
                variation: -1,
                versionIsBlocked: !0
            }
        }
    let F = X[W];
    if (F === void 0) return {
        variation: -1
    };
    let V = J.findIndex((K) => K.key === F);
    if (V < 0) return {
        variation: -1
    };
    return {
        variation: V
    }
}

function _m1(A, Q) {
    return Q = Q || 0, `${A}__${Q}`
}

function km1(A, Q) {
    return `${A}||${Q}`
}

function Bw6(A, Q, B) {
    if (!A.user.stickyBucketAssignmentDocs) return {};
    let {
        hashAttribute: G,
        hashValue: Z
    } = rt(A, Q), I = km1(G, O$A(Z)), {
        hashAttribute: Y,
        hashValue: J
    } = rt(A, B), W = J ? km1(Y, O$A(J)) : null, X = {};
    if (W && A.user.stickyBucketAssignmentDocs[W]) Object.assign(X, A.user.stickyBucketAssignmentDocs[W].assignments || {});
    if (A.user.stickyBucketAssignmentDocs[I]) Object.assign(X, A.user.stickyBucketAssignmentDocs[I].assignments || {});
    return X
}

function Gw6(A, Q, B, G) {
    let Z = km1(Q, B),
        I = A.user.stickyBucketAssignmentDocs && A.user.stickyBucketAssignmentDocs[Z] ? A.user.stickyBucketAssignmentDocs[Z].assignments || {} : {},
        Y = {
            ...I,
            ...G
        },
        J = JSON.stringify(I) !== JSON.stringify(Y);
    return {
        key: Z,
        doc: {
            attributeName: Q,
            attributeValue: B,
            assignments: Y
        },
        changed: J
    }
}

function Zw6(A, Q) {
    let B = new Set,
        G = Q && Q.features ? Q.features : A.global.features || {},
        Z = Q && Q.experiments ? Q.experiments : A.global.experiments || [];
    return Object.keys(G).forEach((I) => {
        let Y = G[I];
        if (Y.rules) {
            for (let J of Y.rules)
                if (J.variations) {
                    if (B.add(J.hashAttribute || "id"), J.fallbackAttribute) B.add(J.fallbackAttribute)
                }
        }
    }), Z.map((I) => {
        if (B.add(I.hashAttribute || "id"), I.fallbackAttribute) B.add(I.fallbackAttribute)
    }), Array.from(B)
}
async function jRB(A, Q, B) {
    let G = ym1(A, B);
    return Q.getAllAssignments(G)
}

function ym1(A, Q) {
    let B = {};
    return Zw6(A, Q).forEach((Z) => {
        let {
            hashValue: I
        } = rt(A, Z);
        B[Z] = O$A(I)
    }), B
}
async function SRB(A, Q, B) {
    if (A = {
            ...A
        }, A.encryptedFeatures) {
        try {
            A.features = JSON.parse(await st(A.encryptedFeatures, Q, B))
        } catch (G) {
            console.error(G)
        }
        delete A.encryptedFeatures
    }
    if (A.encryptedExperiments) {
        try {
            A.experiments = JSON.parse(await st(A.encryptedExperiments, Q, B))
        } catch (G) {
            console.error(G)
        }
        delete A.encryptedExperiments
    }
    if (A.encryptedSavedGroups) {
        try {
            A.savedGroups = JSON.parse(await st(A.encryptedSavedGroups, Q, B))
        } catch (G) {
            console.error(G)
        }
        delete A.encryptedSavedGroups
    }
    return A
}

function _RB(A) {
    let Q = A.apiHost || "https://cdn.growthbook.io";
    return {
        apiHost: Q.replace(/\/*$/, ""),
        streamingHost: (A.streamingHost || Q).replace(/\/*$/, ""),
        apiRequestHeaders: A.apiHostRequestHeaders,
        streamingHostRequestHeaders: A.streamingHostRequestHeaders
    }
}

function esA(A, Q) {
    return Q.hashAttribute + Q.hashValue + A.key + Q.variationId
}
var i$6 = "Feature Evaluated",
    n$6 = "Experiment Viewed";
var kRB = L(() => {
    MRB();
    R$A()
});
class ArA {
    constructor(A) {
        if (A = A || {}, this.version = Iw6, this._options = this.context = A, this._renderer = A.renderer || null, this._trackedExperiments = new Set, this._completedChangeIds = new Set, this._trackedFeatures = {}, this.debug = !!A.debug, this._subscriptions = new Set, this.ready = !1, this._assigned = new Map, this._activeAutoExperiments = new Map, this._triggeredExpKeys = new Set, this._initialized = !1, this._redirectedUrl = "", this._deferredTrackingCalls = new Map, this._autoExperimentsAllowed = !A.disableExperimentsOnLoad, this._destroyCallbacks = [], this.logs = [], this.log = this.log.bind(this), this._saveDeferredTrack = this._saveDeferredTrack.bind(this), this._fireSubscriptions = this._fireSubscriptions.bind(this), this._recordChangedId = this._recordChangedId.bind(this), A.remoteEval) {
            if (A.decryptionKey) throw Error("Encryption is not available for remoteEval");
            if (!A.clientKey) throw Error("Missing clientKey");
            let Q = !1;
            try {
                Q = !!new URL(A.apiHost || "").hostname.match(/growthbook\.io$/i)
            } catch (B) {}
            if (Q) throw Error("Cannot use remoteEval on GrowthBook Cloud")
        } else if (A.cacheKeyAttributes) throw Error("cacheKeyAttributes are only used for remoteEval");
        if (A.stickyBucketService) {
            let Q = A.stickyBucketService;
            this._saveStickyBucketAssignmentDoc = (B) => {
                return Q.saveAssignments(B)
            }
        }
        if (A.plugins)
            for (let Q of A.plugins) Q(this);
        if (A.features) this.ready = !0;
        if (i7A && A.enableDevMode) window._growthbook = this, document.dispatchEvent(new Event("gbloaded"));
        if (A.experiments) this.ready = !0, this._updateAllAutoExperiments();
        if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs)
            for (let Q in this._options.stickyBucketAssignmentDocs) {
                let B = this._options.stickyBucketAssignmentDocs[Q];
                if (B) this._options.stickyBucketService.saveAssignments(B).catch(() => {})
            }
        if (this.ready) this.refreshStickyBuckets(this.getPayload())
    }
    async setPayload(A) {
        this._payload = A;
        let Q = await SRB(A, this._options.decryptionKey);
        if (this._decryptedPayload = Q, await this.refreshStickyBuckets(Q), Q.features) this._options.features = Q.features;
        if (Q.savedGroups) this._options.savedGroups = Q.savedGroups;
        if (Q.experiments) this._options.experiments = Q.experiments, this._updateAllAutoExperiments();
        this.ready = !0, this._render()
    }
    initSync(A) {
        this._initialized = !0;
        let Q = A.payload;
        if (Q.encryptedExperiments || Q.encryptedFeatures) throw Error("initSync does not support encrypted payloads");
        if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, Q);
        if (this._payload = Q, this._decryptedPayload = Q, Q.features) this._options.features = Q.features;
        if (Q.experiments) this._options.experiments = Q.experiments, this._updateAllAutoExperiments();
        return this.ready = !0, msA(this, A), this
    }
    async init(A) {
        if (this._initialized = !0, A = A || {}, A.cacheSettings) GRB(A.cacheSettings);
        if (A.payload) return await this.setPayload(A.payload), msA(this, A), {
            success: !0,
            source: "init"
        };
        else {
            let {
                data: Q,
                ...B
            } = await this._refresh({
                ...A,
                allowStale: !0
            });
            return msA(this, A), await this.setPayload(Q || {}), B
        }
    }
    async loadFeatures(A) {
        A = A || {}, await this.init({
            skipCache: A.skipCache,
            timeout: A.timeout,
            streaming: (this._options.backgroundSync ?? !0) && (A.autoRefresh || this._options.subscribeToChanges)
        })
    }
    async refreshFeatures(A) {
        let Q = await this._refresh({
            ...A || {},
            allowStale: !1
        });
        if (Q.data) await this.setPayload(Q.data)
    }
    getApiInfo() {
        return [this.getApiHosts().apiHost, this.getClientKey()]
    }
    getApiHosts() {
        return _RB(this._options)
    }
    getClientKey() {
        return this._options.clientKey || ""
    }
    getPayload() {
        return this._payload || {
            features: this.getFeatures(),
            experiments: this.getExperiments()
        }
    }
    getDecryptedPayload() {
        return this._decryptedPayload || this.getPayload()
    }
    isRemoteEval() {
        return this._options.remoteEval || !1
    }
    getCacheKeyAttributes() {
        return this._options.cacheKeyAttributes
    }
    async _refresh(A) {
        let {
            timeout: Q,
            skipCache: B,
            allowStale: G,
            streaming: Z
        } = A;
        if (!this._options.clientKey) throw Error("Missing clientKey");
        return ZRB({
            instance: this,
            timeout: Q,
            skipCache: B || this._options.disableCache,
            allowStale: G,
            backgroundSync: Z ?? this._options.backgroundSync ?? !0
        })
    }
    _render() {
        if (this._renderer) try {
            this._renderer()
        } catch (A) {
            console.error("Failed to render", A)
        }
    }
    setFeatures(A) {
        this._options.features = A, this.ready = !0, this._render()
    }
    async setEncryptedFeatures(A, Q, B) {
        let G = await st(A, Q || this._options.decryptionKey, B);
        this.setFeatures(JSON.parse(G))
    }
    setExperiments(A) {
        this._options.experiments = A, this.ready = !0, this._updateAllAutoExperiments()
    }
    async setEncryptedExperiments(A, Q, B) {
        let G = await st(A, Q || this._options.decryptionKey, B);
        this.setExperiments(JSON.parse(G))
    }
    async setAttributes(A) {
        if (this._options.attributes = A, this._options.stickyBucketService) await this.refreshStickyBuckets();
        if (this._options.remoteEval) {
            await this._refreshForRemoteEval();
            return
        }
        this._render(), this._updateAllAutoExperiments()
    }
    async updateAttributes(A) {
        return this.setAttributes({
            ...this._options.attributes,
            ...A
        })
    }
    async setAttributeOverrides(A) {
        if (this._options.attributeOverrides = A, this._options.stickyBucketService) await this.refreshStickyBuckets();
        if (this._options.remoteEval) {
            await this._refreshForRemoteEval();
            return
        }
        this._render(), this._updateAllAutoExperiments()
    }
    async setForcedVariations(A) {
        if (this._options.forcedVariations = A || {}, this._options.remoteEval) {
            await this._refreshForRemoteEval();
            return
        }
        this._render(), this._updateAllAutoExperiments()
    }
    setForcedFeatures(A) {
        this._options.forcedFeatureValues = A, this._render()
    }
    async setURL(A) {
        if (A === this._options.url) return;
        if (this._options.url = A, this._redirectedUrl = "", this._options.remoteEval) {
            await this._refreshForRemoteEval(), this._updateAllAutoExperiments(!0);
            return
        }
        this._updateAllAutoExperiments(!0)
    }
    getAttributes() {
        return {
            ...this._options.attributes,
            ...this._options.attributeOverrides
        }
    }
    getForcedVariations() {
        return this._options.forcedVariations || {}
    }
    getForcedFeatures() {
        return this._options.forcedFeatureValues || new Map
    }
    getStickyBucketAssignmentDocs() {
        return this._options.stickyBucketAssignmentDocs || {}
    }
    getUrl() {
        return this._options.url || ""
    }
    getFeatures() {
        return this._options.features || {}
    }
    getExperiments() {
        return this._options.experiments || []
    }
    getCompletedChangeIds() {
        return Array.from(this._completedChangeIds)
    }
    subscribe(A) {
        return this._subscriptions.add(A), () => {
            this._subscriptions.delete(A)
        }
    }
    async _refreshForRemoteEval() {
        if (!this._options.remoteEval) return;
        if (!this._initialized) return;
        let A = await this._refresh({
            allowStale: !1
        });
        if (A.data) await this.setPayload(A.data)
    }
    getAllResults() {
        return new Map(this._assigned)
    }