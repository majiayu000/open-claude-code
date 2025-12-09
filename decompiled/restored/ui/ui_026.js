/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ui_026.js
 * 处理时间: 2025-12-09T03:37:26.010Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 26/53
 * Lines: 183703 - 185194 (1492 lines)
 * Original file: cli.js
 */

                                }), O4(G4(r), "inspectElement", function(uA) {
                                    var {
                                        forceFullData: z1,
                                        id: _1,
                                        path: i1,
                                        rendererID: a1,
                                        requestID: QQ
                                    } = uA, MQ = r._rendererInterfaces[a1];
                                    if (MQ == null) console.warn('Invalid renderer id "'.concat(a1, '" for element "').concat(_1, '"'));
                                    else if (r._bridge.send("inspectedElement", MQ.inspectElement(QQ, _1, i1, z1)), r._persistedSelectionMatch === null || r._persistedSelectionMatch.id !== _1) r._persistedSelection = null, r._persistedSelectionMatch = null, MQ.setTrackedPath(null), r._throttledPersistSelection(a1, _1)
                                }), O4(G4(r), "logElementToConsole", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1
                                    } = uA, i1 = r._rendererInterfaces[_1];
                                    if (i1 == null) console.warn('Invalid renderer id "'.concat(_1, '" for element "').concat(z1, '"'));
                                    else i1.logElementToConsole(z1)
                                }), O4(G4(r), "overrideError", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1,
                                        forceError: i1
                                    } = uA, a1 = r._rendererInterfaces[_1];
                                    if (a1 == null) console.warn('Invalid renderer id "'.concat(_1, '" for element "').concat(z1, '"'));
                                    else a1.overrideError(z1, i1)
                                }), O4(G4(r), "overrideSuspense", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1,
                                        forceFallback: i1
                                    } = uA, a1 = r._rendererInterfaces[_1];
                                    if (a1 == null) console.warn('Invalid renderer id "'.concat(_1, '" for element "').concat(z1, '"'));
                                    else a1.overrideSuspense(z1, i1)
                                }), O4(G4(r), "overrideValueAtPath", function(uA) {
                                    var {
                                        hookID: z1,
                                        id: _1,
                                        path: i1,
                                        rendererID: a1,
                                        type: QQ,
                                        value: MQ
                                    } = uA, N2 = r._rendererInterfaces[a1];
                                    if (N2 == null) console.warn('Invalid renderer id "'.concat(a1, '" for element "').concat(_1, '"'));
                                    else N2.overrideValueAtPath(QQ, _1, z1, i1, MQ)
                                }), O4(G4(r), "overrideContext", function(uA) {
                                    var {
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        wasForwarded: a1,
                                        value: QQ
                                    } = uA;
                                    if (!a1) r.overrideValueAtPath({
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        type: "context",
                                        value: QQ
                                    })
                                }), O4(G4(r), "overrideHookState", function(uA) {
                                    var {
                                        id: z1,
                                        hookID: _1,
                                        path: i1,
                                        rendererID: a1,
                                        wasForwarded: QQ,
                                        value: MQ
                                    } = uA;
                                    if (!QQ) r.overrideValueAtPath({
                                        id: z1,
                                        path: i1,
                                        rendererID: a1,
                                        type: "hooks",
                                        value: MQ
                                    })
                                }), O4(G4(r), "overrideProps", function(uA) {
                                    var {
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        wasForwarded: a1,
                                        value: QQ
                                    } = uA;
                                    if (!a1) r.overrideValueAtPath({
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        type: "props",
                                        value: QQ
                                    })
                                }), O4(G4(r), "overrideState", function(uA) {
                                    var {
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        wasForwarded: a1,
                                        value: QQ
                                    } = uA;
                                    if (!a1) r.overrideValueAtPath({
                                        id: z1,
                                        path: _1,
                                        rendererID: i1,
                                        type: "state",
                                        value: QQ
                                    })
                                }), O4(G4(r), "reloadAndProfile", function(uA) {
                                    XA(QA, "true"), XA(d, uA ? "true" : "false"), r._bridge.send("reloadAppForProfiling")
                                }), O4(G4(r), "renamePath", function(uA) {
                                    var {
                                        hookID: z1,
                                        id: _1,
                                        newPath: i1,
                                        oldPath: a1,
                                        rendererID: QQ,
                                        type: MQ
                                    } = uA, N2 = r._rendererInterfaces[QQ];
                                    if (N2 == null) console.warn('Invalid renderer id "'.concat(QQ, '" for element "').concat(_1, '"'));
                                    else N2.renamePath(MQ, _1, z1, a1, i1)
                                }), O4(G4(r), "setTraceUpdatesEnabled", function(uA) {
                                    r._traceUpdatesEnabled = uA, C1(uA);
                                    for (var z1 in r._rendererInterfaces) {
                                        var _1 = r._rendererInterfaces[z1];
                                        _1.setTraceUpdatesEnabled(uA)
                                    }
                                }), O4(G4(r), "syncSelectionFromNativeElementsPanel", function() {
                                    var uA = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;
                                    if (uA == null) return;
                                    r.selectNode(uA)
                                }), O4(G4(r), "shutdown", function() {
                                    r.emit("shutdown")
                                }), O4(G4(r), "startProfiling", function(uA) {
                                    r._recordChangeDescriptions = uA, r._isProfiling = !0;
                                    for (var z1 in r._rendererInterfaces) {
                                        var _1 = r._rendererInterfaces[z1];
                                        _1.startProfiling(uA)
                                    }
                                    r._bridge.send("profilingStatus", r._isProfiling)
                                }), O4(G4(r), "stopProfiling", function() {
                                    r._isProfiling = !1, r._recordChangeDescriptions = !1;
                                    for (var uA in r._rendererInterfaces) {
                                        var z1 = r._rendererInterfaces[uA];
                                        z1.stopProfiling()
                                    }
                                    r._bridge.send("profilingStatus", r._isProfiling)
                                }), O4(G4(r), "stopInspectingNative", function(uA) {
                                    r._bridge.send("stopInspectingNative", uA)
                                }), O4(G4(r), "storeAsGlobal", function(uA) {
                                    var {
                                        count: z1,
                                        id: _1,
                                        path: i1,
                                        rendererID: a1
                                    } = uA, QQ = r._rendererInterfaces[a1];
                                    if (QQ == null) console.warn('Invalid renderer id "'.concat(a1, '" for element "').concat(_1, '"'));
                                    else QQ.storeAsGlobal(_1, i1, z1)
                                }), O4(G4(r), "updateConsolePatchSettings", function(uA) {
                                    var {
                                        appendComponentStack: z1,
                                        breakOnConsoleErrors: _1,
                                        showInlineWarningsAndErrors: i1,
                                        hideConsoleLogsInStrictMode: a1,
                                        browserTheme: QQ
                                    } = uA;
                                    rO({
                                        appendComponentStack: z1,
                                        breakOnConsoleErrors: _1,
                                        showInlineWarningsAndErrors: i1,
                                        hideConsoleLogsInStrictMode: a1,
                                        browserTheme: QQ
                                    })
                                }), O4(G4(r), "updateComponentFilters", function(uA) {
                                    for (var z1 in r._rendererInterfaces) {
                                        var _1 = r._rendererInterfaces[z1];
                                        _1.updateComponentFilters(uA)
                                    }
                                }), O4(G4(r), "viewAttributeSource", function(uA) {
                                    var {
                                        id: z1,
                                        path: _1,
                                        rendererID: i1
                                    } = uA, a1 = r._rendererInterfaces[i1];
                                    if (a1 == null) console.warn('Invalid renderer id "'.concat(i1, '" for element "').concat(z1, '"'));
                                    else a1.prepareViewAttributeSource(z1, _1)
                                }), O4(G4(r), "viewElementSource", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1
                                    } = uA, i1 = r._rendererInterfaces[_1];
                                    if (i1 == null) console.warn('Invalid renderer id "'.concat(_1, '" for element "').concat(z1, '"'));
                                    else i1.prepareViewElementSource(z1)
                                }), O4(G4(r), "onTraceUpdates", function(uA) {
                                    r.emit("traceUpdates", uA)
                                }), O4(G4(r), "onFastRefreshScheduled", function() {
                                    if (H) qz("onFastRefreshScheduled");
                                    r._bridge.send("fastRefreshScheduled")
                                }), O4(G4(r), "onHookOperations", function(uA) {
                                    if (H) qz("onHookOperations", "(".concat(uA.length, ") [").concat(uA.join(", "), "]"));
                                    if (r._bridge.send("operations", uA), r._persistedSelection !== null) {
                                        var z1 = uA[0];
                                        if (r._persistedSelection.rendererID === z1) {
                                            var _1 = r._rendererInterfaces[z1];
                                            if (_1 == null) console.warn('Invalid renderer id "'.concat(z1, '"'));
                                            else {
                                                var i1 = r._persistedSelectionMatch,
                                                    a1 = _1.getBestMatchForTrackedPath();
                                                r._persistedSelectionMatch = a1;
                                                var QQ = i1 !== null ? i1.id : null,
                                                    MQ = a1 !== null ? a1.id : null;
                                                if (QQ !== MQ) {
                                                    if (MQ !== null) r._bridge.send("selectFiber", MQ)
                                                }
                                                if (a1 !== null && a1.isFullMatch) r._persistedSelection = null, r._persistedSelectionMatch = null, _1.setTrackedPath(null)
                                            }
                                        }
                                    }
                                }), O4(G4(r), "_throttledPersistSelection", F()(function(uA, z1) {
                                    var _1 = r._rendererInterfaces[uA],
                                        i1 = _1 != null ? _1.getPathForElement(z1) : null;
                                    if (i1 !== null) XA(u, JSON.stringify({
                                        rendererID: uA,
                                        path: i1
                                    }));
                                    else WA(u)
                                }, 1000)), K1(QA) === "true") r._recordChangeDescriptions = K1(d) === "true", r._isProfiling = !0, WA(d), WA(QA);
                            var bA = K1(u);
                            if (bA != null) r._persistedSelection = JSON.parse(bA);
                            if (r._bridge = s, s.addListener("clearErrorsAndWarnings", r.clearErrorsAndWarnings), s.addListener("clearErrorsForFiberID", r.clearErrorsForFiberID), s.addListener("clearWarningsForFiberID", r.clearWarningsForFiberID), s.addListener("copyElementPath", r.copyElementPath), s.addListener("deletePath", r.deletePath), s.addListener("getBackendVersion", r.getBackendVersion), s.addListener("getBridgeProtocol", r.getBridgeProtocol), s.addListener("getProfilingData", r.getProfilingData), s.addListener("getProfilingStatus", r.getProfilingStatus), s.addListener("getOwnersList", r.getOwnersList), s.addListener("inspectElement", r.inspectElement), s.addListener("logElementToConsole", r.logElementToConsole), s.addListener("overrideError", r.overrideError), s.addListener("overrideSuspense", r.overrideSuspense), s.addListener("overrideValueAtPath", r.overrideValueAtPath), s.addListener("reloadAndProfile", r.reloadAndProfile), s.addListener("renamePath", r.renamePath), s.addListener("setTraceUpdatesEnabled", r.setTraceUpdatesEnabled), s.addListener("startProfiling", r.startProfiling), s.addListener("stopProfiling", r.stopProfiling), s.addListener("storeAsGlobal", r.storeAsGlobal), s.addListener("syncSelectionFromNativeElementsPanel", r.syncSelectionFromNativeElementsPanel), s.addListener("shutdown", r.shutdown), s.addListener("updateConsolePatchSettings", r.updateConsolePatchSettings), s.addListener("updateComponentFilters", r.updateComponentFilters), s.addListener("viewAttributeSource", r.viewAttributeSource), s.addListener("viewElementSource", r.viewElementSource), s.addListener("overrideContext", r.overrideContext), s.addListener("overrideHookState", r.overrideHookState), s.addListener("overrideProps", r.overrideProps), s.addListener("overrideState", r.overrideState), r._isProfiling) s.send("profilingStatus", !0);
                            var Y1 = "4.28.5-ef8a840bd";
                            if (Y1) r._bridge.send("backendVersion", Y1);
                            r._bridge.send("bridgeProtocol", rZ);
                            var Q1 = !1;
                            try {
                                localStorage.getItem("test"), Q1 = !0
                            } catch (uA) {}
                            return s.send("isBackendStorageAPISupported", Q1), s.send("isSynchronousXHRSupported", N4()), p0(s, G4(r)), nA(G4(r)), r
                        }
                        return Cu(c, [{
                            key: "getInstanceAndStyle",
                            value: function(r) {
                                var {
                                    id: bA,
                                    rendererID: Y1
                                } = r, Q1 = this._rendererInterfaces[Y1];
                                if (Q1 == null) return console.warn('Invalid renderer id "'.concat(Y1, '"')), null;
                                return Q1.getInstanceAndStyle(bA)
                            }
                        }, {
                            key: "getBestMatchingRendererInterface",
                            value: function(r) {
                                var bA = null;
                                for (var Y1 in this._rendererInterfaces) {
                                    var Q1 = this._rendererInterfaces[Y1],
                                        uA = Q1.getFiberForNative(r);
                                    if (uA !== null) {
                                        if (uA.stateNode === r) return Q1;
                                        else if (bA === null) bA = Q1
                                    }
                                }
                                return bA
                            }
                        }, {
                            key: "getIDForNode",
                            value: function(r) {
                                var bA = this.getBestMatchingRendererInterface(r);
                                if (bA != null) try {
                                    return bA.getFiberIDForNative(r, !0)
                                } catch (Y1) {}
                                return null
                            }
                        }, {
                            key: "selectNode",
                            value: function(r) {
                                var bA = this.getIDForNode(r);
                                if (bA !== null) this._bridge.send("selectFiber", bA)
                            }
                        }, {
                            key: "setRendererInterface",
                            value: function(r, bA) {
                                if (this._rendererInterfaces[r] = bA, this._isProfiling) bA.startProfiling(this._recordChangeDescriptions);
                                bA.setTraceUpdatesEnabled(this._traceUpdatesEnabled);
                                var Y1 = this._persistedSelection;
                                if (Y1 !== null && Y1.rendererID === r) bA.setTrackedPath(Y1.path)
                            }
                        }, {
                            key: "onUnsupportedRenderer",
                            value: function(r) {
                                this._bridge.send("unsupportedRendererVersion", r)
                            }
                        }, {
                            key: "rendererInterfaces",
                            get: function() {
                                return this._rendererInterfaces
                            }
                        }]), c
                    }(W);

                function W7(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") W7 = function(c) {
                        return typeof c
                    };
                    else W7 = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return W7(b)
                }

                function oa(b) {
                    return XBA(b) || jFA(b) || WBA(b) || ta()
                }

                function ta() {
                    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function WBA(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return yx(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return yx(b, a)
                }

                function jFA(b) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b)
                }

                function XBA(b) {
                    if (Array.isArray(b)) return yx(b)
                }

                function yx(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }

                function FV(b) {
                    if (b.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__")) return null;
                    var a = console,
                        c = {};
                    for (var s in console) c[s] = console[s];

                    function r(QB) {
                        a = QB, c = {};
                        for (var E2 in a) c[E2] = console[E2]
                    }

                    function bA(QB) {
                        try {
                            if (typeof QB.version === "string") {
                                if (QB.bundleType > 0) return "development";
                                return "production"
                            }
                            var E2 = Function.prototype.toString;
                            if (QB.Mount && QB.Mount._renderNewRootComponent) {
                                var r2 = E2.call(QB.Mount._renderNewRootComponent);
                                if (r2.indexOf("function") !== 0) return "production";
                                if (r2.indexOf("storedMeasure") !== -1) return "development";
                                if (r2.indexOf("should be a pure function") !== -1) {
                                    if (r2.indexOf("NODE_ENV") !== -1) return "development";
                                    if (r2.indexOf("development") !== -1) return "development";
                                    if (r2.indexOf("true") !== -1) return "development";
                                    if (r2.indexOf("nextElement") !== -1 || r2.indexOf("nextComponent") !== -1) return "unminified";
                                    else return "development"
                                }
                                if (r2.indexOf("nextElement") !== -1 || r2.indexOf("nextComponent") !== -1) return "unminified";
                                return "outdated"
                            }
                        } catch (o7) {}
                        return "production"
                    }

                    function Y1(QB) {
                        try {
                            var E2 = Function.prototype.toString,
                                r2 = E2.call(QB);
                            if (r2.indexOf("^_^") > -1) QQ = !0, setTimeout(function() {
                                throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")
                            })
                        } catch (o7) {}
                    }

                    function Q1(QB, E2) {
                        if (QB === void 0 || QB === null || QB.length === 0 || typeof QB[0] === "string" && QB[0].match(/([^%]|^)(%c)/g) || E2 === void 0) return QB;
                        var r2 = /([^%]|^)((%%)*)(%([oOdisf]))/g;
                        if (typeof QB[0] === "string" && QB[0].match(r2)) return ["%c".concat(QB[0]), E2].concat(oa(QB.slice(1)));
                        else {
                            var o7 = QB.reduce(function(TI, zG, eZ) {
                                if (eZ > 0) TI += " ";
                                switch (W7(zG)) {
                                    case "string":
                                    case "boolean":
                                    case "symbol":
                                        return TI += "%s";
                                    case "number":
                                        var AI = Number.isInteger(zG) ? "%i" : "%f";
                                        return TI += AI;
                                    default:
                                        return TI += "%o"
                                }
                            }, "%c");
                            return [o7, E2].concat(oa(QB))
                        }
                    }
                    var uA = null;

                    function z1(QB) {
                        var {
                            hideConsoleLogsInStrictMode: E2,
                            browserTheme: r2
                        } = QB, o7 = ["error", "group", "groupCollapsed", "info", "log", "trace", "warn"];
                        if (uA !== null) return;
                        var TI = {};
                        uA = function() {
                            for (var eZ in TI) try {
                                a[eZ] = TI[eZ]
                            } catch (AI) {}
                        }, o7.forEach(function(zG) {
                            try {
                                var eZ = TI[zG] = a[zG].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ ? a[zG].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ : a[zG],
                                    AI = function() {
                                        if (!E2) {
                                            var ZH;
                                            switch (zG) {
                                                case "warn":
                                                    ZH = r2 === "light" ? "rgba(250, 180, 50, 0.75)" : "rgba(250, 180, 50, 0.5)";
                                                    break;
                                                case "error":
                                                    ZH = r2 === "light" ? "rgba(250, 123, 130, 0.75)" : "rgba(250, 123, 130, 0.5)";
                                                    break;
                                                case "log":
                                                default:
                                                    ZH = r2 === "light" ? "rgba(125, 125, 125, 0.75)" : "rgba(125, 125, 125, 0.5)";
                                                    break
                                            }
                                            if (ZH) {
                                                for (var m$ = arguments.length, vC = Array(m$), Mz = 0; Mz < m$; Mz++) vC[Mz] = arguments[Mz];
                                                eZ.apply(void 0, oa(Q1(vC, "color: ".concat(ZH))))
                                            } else throw Error("Console color is not defined")
                                        }
                                    };
                                AI.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = eZ, eZ.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = AI, a[zG] = AI
                            } catch (u$) {}
                        })
                    }

                    function _1() {
                        if (uA !== null) uA(), uA = null
                    }
                    var i1 = 0;

                    function a1(QB) {
                        var E2 = ++i1;
                        m3.set(E2, QB);
                        var r2 = QQ ? "deadcode" : bA(QB);
                        if (b.hasOwnProperty("__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__")) {
                            var o7 = b.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__,
                                TI = o7.registerRendererWithConsole,
                                zG = o7.patchConsoleUsingWindowValues;
                            if (typeof TI === "function" && typeof zG === "function") TI(QB), zG()
                        }
                        var eZ = b.__REACT_DEVTOOLS_ATTACH__;
                        if (typeof eZ === "function") {
                            var AI = eZ(HF, E2, QB, b);
                            HF.rendererInterfaces.set(E2, AI)
                        }
                        return HF.emit("renderer", {
                            id: E2,
                            renderer: QB,
                            reactBuildType: r2
                        }), E2
                    }
                    var QQ = !1;

                    function MQ(QB, E2) {
                        return HF.on(QB, E2),
                            function() {
                                return HF.off(QB, E2)
                            }
                    }

                    function N2(QB, E2) {
                        if (!a9[QB]) a9[QB] = [];
                        a9[QB].push(E2)
                    }

                    function gQ(QB, E2) {
                        if (!a9[QB]) return;
                        var r2 = a9[QB].indexOf(E2);
                        if (r2 !== -1) a9[QB].splice(r2, 1);
                        if (!a9[QB].length) delete a9[QB]
                    }

                    function I9(QB, E2) {
                        if (a9[QB]) a9[QB].map(function(r2) {
                            return r2(E2)
                        })
                    }

                    function m4(QB) {
                        var E2 = tZ;
                        if (!E2[QB]) E2[QB] = new Set;
                        return E2[QB]
                    }

                    function x5(QB, E2) {
                        var r2 = P7.get(QB);
                        if (r2 != null) r2.handleCommitFiberUnmount(E2)
                    }

                    function SB(QB, E2, r2) {
                        var o7 = HF.getFiberRoots(QB),
                            TI = E2.current,
                            zG = o7.has(E2),
                            eZ = TI.memoizedState == null || TI.memoizedState.element == null;
                        if (!zG && !eZ) o7.add(E2);
                        else if (zG && eZ) o7.delete(E2);
                        var AI = P7.get(QB);
                        if (AI != null) AI.handleCommitFiberRoot(E2, r2)
                    }

                    function D5(QB, E2) {
                        var r2 = P7.get(QB);
                        if (r2 != null) r2.handlePostCommitFiberRoot(E2)
                    }

                    function X7(QB, E2) {
                        var r2 = P7.get(QB);
                        if (r2 != null)
                            if (E2) r2.patchConsoleForStrictMode();
                            else r2.unpatchConsoleForStrictMode();
                        else if (E2) {
                            var o7 = window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ === !0,
                                TI = window.__REACT_DEVTOOLS_BROWSER_THEME__;
                            z1({
                                hideConsoleLogsInStrictMode: o7,
                                browserTheme: TI
                            })
                        } else _1()
                    }
                    var d4 = [],
                        Y8 = [];

                    function U3(QB) {
                        var E2 = QB.stack.split(`
`),
                            r2 = E2.length > 1 ? E2[1] : null;
                        return r2
                    }

                    function RY() {
                        return Y8
                    }

                    function V4(QB) {
                        var E2 = U3(QB);
                        if (E2 !== null) d4.push(E2)
                    }

                    function JJ(QB) {
                        if (d4.length > 0) {
                            var E2 = d4.pop(),
                                r2 = U3(QB);
                            if (r2 !== null) Y8.push([E2, r2])
                        }
                    }
                    var tZ = {},
                        P7 = new Map,
                        a9 = {},
                        m3 = new Map,
                        WJ = new Map,
                        HF = {
                            rendererInterfaces: P7,
                            listeners: a9,
                            backends: WJ,
                            renderers: m3,
                            emit: I9,
                            getFiberRoots: m4,
                            inject: a1,
                            on: N2,
                            off: gQ,
                            sub: MQ,
                            supportsFiber: !0,
                            checkDCE: Y1,
                            onCommitFiberUnmount: x5,
                            onCommitFiberRoot: SB,
                            onPostCommitFiberRoot: D5,
                            setStrictMode: X7,
                            getInternalModuleRanges: RY,
                            registerInternalModuleStart: V4,
                            registerInternalModuleStop: JJ
                        };
                    return Object.defineProperty(b, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
                        configurable: !1,
                        enumerable: !1,
                        get: function() {
                            return HF
                        }
                    }), HF
                }

                function oZ(b, a, c) {
                    var s = b[a];
                    return b[a] = function(r) {
                        return c.call(this, s, arguments)
                    }, s
                }

                function ea(b, a) {
                    var c = {};
                    for (var s in a) c[s] = oZ(b, s, a[s]);
                    return c
                }

                function FBA(b, a) {
                    for (var c in a) b[c] = a[c]
                }

                function OY(b) {
                    if (typeof b.forceUpdate === "function") b.forceUpdate();
                    else if (b.updater != null && typeof b.updater.enqueueForceUpdate === "function") b.updater.enqueueForceUpdate(this, function() {}, "forceUpdate")
                }

                function Nz(b, a) {
                    var c = Object.keys(b);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(b);
                        if (a) s = s.filter(function(r) {
                            return Object.getOwnPropertyDescriptor(b, r).enumerable
                        });
                        c.push.apply(c, s)
                    }
                    return c
                }

                function SK(b) {
                    for (var a = 1; a < arguments.length; a++) {
                        var c = arguments[a] != null ? arguments[a] : {};
                        if (a % 2) Nz(Object(c), !0).forEach(function(s) {
                            xx(b, s, c[s])
                        });
                        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(b, Object.getOwnPropertyDescriptors(c));
                        else Nz(Object(c)).forEach(function(s) {
                            Object.defineProperty(b, s, Object.getOwnPropertyDescriptor(c, s))
                        })
                    }
                    return b
                }

                function xx(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }

                function eO(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") eO = function(c) {
                        return typeof c
                    };
                    else eO = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return eO(b)
                }

                function MN(b) {
                    var a = null,
                        c = null;
                    if (b._currentElement != null) {
                        if (b._currentElement.key) c = String(b._currentElement.key);
                        var s = b._currentElement.type;
                        if (typeof s === "string") a = s;
                        else if (typeof s === "function") a = b6(s)
                    }
                    return {
                        displayName: a,
                        key: c
                    }
                }

                function DF(b) {
                    if (b._currentElement != null) {
                        var a = b._currentElement.type;
                        if (typeof a === "function") {
                            var c = b.getPublicInstance();
                            if (c !== null) return HG;
                            else return WF
                        } else if (typeof a === "string") return z3
                    }
                    return UY
                }

                function Lz(b) {
                    var a = [];
                    if (eO(b) !== "object");
                    else if (b._currentElement === null || b._currentElement === !1);
                    else if (b._renderedComponent) {
                        var c = b._renderedComponent;
                        if (DF(c) !== UY) a.push(c)
                    } else if (b._renderedChildren) {
                        var s = b._renderedChildren;
                        for (var r in s) {
                            var bA = s[r];
                            if (DF(bA) !== UY) a.push(bA)
                        }
                    }
                    return a
                }

                function VBA(b, a, c, s) {
                    var r = new Map,
                        bA = new WeakMap,
                        Y1 = new WeakMap,
                        Q1 = null,
                        uA, z1 = function(BQ) {
                            return null
                        };
                    if (c.ComponentTree) Q1 = function(BQ, YQ) {
                        var qQ = c.ComponentTree.getClosestInstanceFromNode(BQ);
                        return bA.get(qQ) || null
                    }, uA = function(BQ) {
                        var YQ = r.get(BQ);
                        return c.ComponentTree.getNodeFromInstance(YQ)
                    }, z1 = function(BQ) {
                        return c.ComponentTree.getClosestInstanceFromNode(BQ)
                    };
                    else if (c.Mount.getID && c.Mount.getNode) Q1 = function(BQ, YQ) {
                        return null
                    }, uA = function(BQ) {
                        return null
                    };

                    function _1(i0) {
                        var BQ = r.get(i0);
                        return BQ ? MN(BQ).displayName : null
                    }

                    function i1(i0) {
                        if (eO(i0) !== "object" || i0 === null) throw Error("Invalid internal instance: " + i0);
                        if (!bA.has(i0)) {
                            var BQ = g3();
                            bA.set(i0, BQ), r.set(BQ, i0)
                        }
                        return bA.get(i0)
                    }

                    function a1(i0, BQ) {
                        if (i0.length !== BQ.length) return !1;
                        for (var YQ = 0; YQ < i0.length; YQ++)
                            if (i0[YQ] !== BQ[YQ]) return !1;
                        return !0
                    }
                    var QQ = [],
                        MQ = null;
                    if (c.Reconciler) MQ = ea(c.Reconciler, {
                        mountComponent: function(BQ, YQ) {
                            var qQ = YQ[0],
                                tB = YQ[3];
                            if (DF(qQ) === UY) return BQ.apply(this, YQ);
                            if (tB._topLevelWrapper === void 0) return BQ.apply(this, YQ);
                            var c4 = i1(qQ),
                                P8 = QQ.length > 0 ? QQ[QQ.length - 1] : 0;
                            gQ(qQ, c4, P8), QQ.push(c4), Y1.set(qQ, i1(tB._topLevelWrapper));
                            try {
                                var $3 = BQ.apply(this, YQ);
                                return QQ.pop(), $3
                            } catch (CF) {
                                throw QQ = [], CF
                            } finally {
                                if (QQ.length === 0) {
                                    var FJ = Y1.get(qQ);
                                    if (FJ === void 0) throw Error("Expected to find root ID.");
                                    RY(FJ)
                                }
                            }
                        },
                        performUpdateIfNecessary: function(BQ, YQ) {
                            var qQ = YQ[0];
                            if (DF(qQ) === UY) return BQ.apply(this, YQ);
                            var tB = i1(qQ);
                            QQ.push(tB);
                            var c4 = Lz(qQ);
                            try {
                                var P8 = BQ.apply(this, YQ),
                                    $3 = Lz(qQ);
                                if (!a1(c4, $3)) I9(qQ, tB, $3);
                                return QQ.pop(), P8
                            } catch (CF) {
                                throw QQ = [], CF
                            } finally {
                                if (QQ.length === 0) {
                                    var FJ = Y1.get(qQ);
                                    if (FJ === void 0) throw Error("Expected to find root ID.");
                                    RY(FJ)
                                }
                            }
                        },
                        receiveComponent: function(BQ, YQ) {
                            var qQ = YQ[0];
                            if (DF(qQ) === UY) return BQ.apply(this, YQ);
                            var tB = i1(qQ);
                            QQ.push(tB);
                            var c4 = Lz(qQ);
                            try {
                                var P8 = BQ.apply(this, YQ),
                                    $3 = Lz(qQ);
                                if (!a1(c4, $3)) I9(qQ, tB, $3);
                                return QQ.pop(), P8
                            } catch (CF) {
                                throw QQ = [], CF
                            } finally {
                                if (QQ.length === 0) {
                                    var FJ = Y1.get(qQ);
                                    if (FJ === void 0) throw Error("Expected to find root ID.");
                                    RY(FJ)
                                }
                            }
                        },
                        unmountComponent: function(BQ, YQ) {
                            var qQ = YQ[0];
                            if (DF(qQ) === UY) return BQ.apply(this, YQ);
                            var tB = i1(qQ);
                            QQ.push(tB);
                            try {
                                var c4 = BQ.apply(this, YQ);
                                return QQ.pop(), m4(qQ, tB), c4
                            } catch ($3) {
                                throw QQ = [], $3
                            } finally {
                                if (QQ.length === 0) {
                                    var P8 = Y1.get(qQ);
                                    if (P8 === void 0) throw Error("Expected to find root ID.");
                                    RY(P8)
                                }
                            }
                        }
                    });

                    function N2() {
                        if (MQ !== null)
                            if (c.Component) FBA(c.Component.Mixin, MQ);
                            else FBA(c.Reconciler, MQ);
                        MQ = null
                    }

                    function gQ(i0, BQ, YQ) {
                        var qQ = YQ === 0;
                        if (H) console.log("%crecordMount()", "color: green; font-weight: bold;", BQ, MN(i0).displayName);
                        if (qQ) {
                            var tB = i0._currentElement != null && i0._currentElement._owner != null;
                            V4(E), V4(BQ), V4(C2), V4(0), V4(0), V4(0), V4(tB ? 1 : 0)
                        } else {
                            var c4 = DF(i0),
                                P8 = MN(i0),
                                $3 = P8.displayName,
                                FJ = P8.key,
                                CF = i0._currentElement != null && i0._currentElement._owner != null ? i1(i0._currentElement._owner) : 0,
                                Oz = JJ($3),
                                d3 = JJ(FJ);
                            V4(E), V4(BQ), V4(c4), V4(YQ), V4(CF), V4(Oz), V4(d3)
                        }
                    }

                    function I9(i0, BQ, YQ) {
                        V4(w), V4(BQ);
                        var qQ = YQ.map(i1);
                        V4(qQ.length);
                        for (var tB = 0; tB < qQ.length; tB++) V4(qQ[tB])
                    }

                    function m4(i0, BQ) {
                        d4.push(BQ), r.delete(BQ)
                    }

                    function x5(i0, BQ, YQ) {
                        if (H) console.group("crawlAndRecordInitialMounts() id:", i0);
                        var qQ = r.get(i0);
                        if (qQ != null) Y1.set(qQ, YQ), gQ(qQ, i0, BQ), Lz(qQ).forEach(function(tB) {
                            return x5(i1(tB), i0, YQ)
                        });
                        if (H) console.groupEnd()
                    }

                    function SB() {
                        var i0 = c.Mount._instancesByReactRootID || c.Mount._instancesByContainerID;
                        for (var BQ in i0) {
                            var YQ = i0[BQ],
                                qQ = i1(YQ);
                            x5(qQ, 0, qQ), RY(qQ)
                        }
                    }
                    var D5 = [],
                        X7 = new Map,
                        d4 = [],
                        Y8 = 0,
                        U3 = null;

                    function RY(i0) {
                        if (D5.length === 0 && d4.length === 0 && U3 === null) return;
                        var BQ = d4.length + (U3 === null ? 0 : 1),
                            YQ = Array(3 + Y8 + (BQ > 0 ? 2 + BQ : 0) + D5.length),
                            qQ = 0;
                        if (YQ[qQ++] = a, YQ[qQ++] = i0, YQ[qQ++] = Y8, X7.forEach(function(P8, $3) {
                                YQ[qQ++] = $3.length;
                                var FJ = OK($3);
                                for (var CF = 0; CF < FJ.length; CF++) YQ[qQ + CF] = FJ[CF];
                                qQ += $3.length
                            }), BQ > 0) {
                            YQ[qQ++] = z, YQ[qQ++] = BQ;
                            for (var tB = 0; tB < d4.length; tB++) YQ[qQ++] = d4[tB];
                            if (U3 !== null) YQ[qQ] = U3, qQ++
                        }
                        for (var c4 = 0; c4 < D5.length; c4++) YQ[qQ + c4] = D5[c4];
                        if (qQ += D5.length, H) y5(YQ);
                        b.emit("operations", YQ), D5.length = 0, d4 = [], U3 = null, X7.clear(), Y8 = 0
                    }

                    function V4(i0) {
                        D5.push(i0)
                    }

                    function JJ(i0) {
                        if (i0 === null) return 0;
                        var BQ = X7.get(i0);
                        if (BQ !== void 0) return BQ;
                        var YQ = X7.size + 1;
                        return X7.set(i0, YQ), Y8 += i0.length + 1, YQ
                    }
                    var tZ = null,
                        P7 = {};

                    function a9(i0) {
                        var BQ = P7;
                        i0.forEach(function(YQ) {
                            if (!BQ[YQ]) BQ[YQ] = {};
                            BQ = BQ[YQ]
                        })
                    }

                    function m3(i0) {
                        return function(YQ) {
                            var qQ = P7[i0];
                            if (!qQ) return !1;
                            for (var tB = 0; tB < YQ.length; tB++)
                                if (qQ = qQ[YQ[tB]], !qQ) return !1;
                            return !0
                        }
                    }

                    function WJ(i0) {
                        var BQ = null,
                            YQ = null,
                            qQ = r.get(i0);
                        if (qQ != null) {
                            BQ = qQ._instance || null;
                            var tB = qQ._currentElement;
                            if (tB != null && tB.props != null) YQ = tB.props.style || null
                        }
                        return {
                            instance: BQ,
                            style: YQ
                        }
                    }

                    function HF(i0) {
                        var BQ = r.get(i0);
                        if (BQ == null) {
                            console.warn('Could not find instance with id "'.concat(i0, '"'));
                            return
                        }
                        switch (DF(BQ)) {
                            case HG:
                                s.$r = BQ._instance;
                                break;
                            case WF:
                                var YQ = BQ._currentElement;
                                if (YQ == null) {
                                    console.warn('Could not find element with id "'.concat(i0, '"'));
                                    return
                                }
                                s.$r = {
                                    props: YQ.props,
                                    type: YQ.type
                                };
                                break;
                            default:
                                s.$r = null;
                                break
                        }
                    }

                    function QB(i0, BQ, YQ) {
                        var qQ = o7(i0);
                        if (qQ !== null) {
                            var tB = z0(qQ, BQ),
                                c4 = "$reactTemp".concat(YQ);
                            window[c4] = tB, console.log(c4), console.log(tB)
                        }
                    }

                    function E2(i0, BQ) {
                        var YQ = o7(i0);
                        if (YQ !== null) {
                            var qQ = z0(YQ, BQ);
                            return $9(qQ)
                        }
                    }

                    function r2(i0, BQ, YQ, qQ) {
                        if (qQ || tZ !== BQ) tZ = BQ, P7 = {};
                        var tB = o7(BQ);
                        if (tB === null) return {
                            id: BQ,
                            responseID: i0,
                            type: "not-found"
                        };
                        if (YQ !== null) a9(YQ);
                        return HF(BQ), tB.context = BJ(tB.context, m3("context")), tB.props = BJ(tB.props, m3("props")), tB.state = BJ(tB.state, m3("state")), {
                            id: BQ,
                            responseID: i0,
                            type: "full-data",
                            value: tB
                        }
                    }

                    function o7(i0) {
                        var BQ = r.get(i0);
                        if (BQ == null) return null;
                        var YQ = MN(BQ),
                            qQ = YQ.displayName,
                            tB = YQ.key,
                            c4 = DF(BQ),
                            P8 = null,
                            $3 = null,
                            FJ = null,
                            CF = null,
                            Oz = null,
                            d3 = BQ._currentElement;
                        if (d3 !== null) {
                            FJ = d3.props, Oz = d3._source != null ? d3._source : null;
                            var Rz = d3._owner;
                            if (Rz) {
                                $3 = [];
                                while (Rz != null)
                                    if ($3.push({
                                            displayName: MN(Rz).displayName || "Unknown",
                                            id: i1(Rz),
                                            key: d3.key,
                                            type: DF(Rz)
                                        }), Rz._currentElement) Rz = Rz._currentElement._owner
                            }
                        }
                        var vx = BQ._instance;
                        if (vx != null) P8 = vx.context || null, CF = vx.state || null;
                        var VJ = [],
                            d$ = [];
                        return {
                            id: i0,
                            canEditHooks: !1,
                            canEditFunctionProps: !1,
                            canEditHooksAndDeletePaths: !1,
                            canEditHooksAndRenamePaths: !1,
                            canEditFunctionPropsDeletePaths: !1,
                            canEditFunctionPropsRenamePaths: !1,
                            canToggleError: !1,
                            isErrored: !1,
                            targetErrorBoundaryID: null,
                            canToggleSuspense: !1,
                            canViewSource: c4 === HG || c4 === WF,
                            hasLegacyContext: !0,
                            displayName: qQ,
                            type: c4,
                            key: tB != null ? tB : null,
                            context: P8,
                            hooks: null,
                            props: FJ,
                            state: CF,
                            errors: VJ,
                            warnings: d$,
                            owners: $3,
                            source: Oz,
                            rootType: null,
                            rendererPackageName: null,
                            rendererVersion: null,
                            plugins: {
                                stylex: null
                            }
                        }
                    }

                    function TI(i0) {
                        var BQ = o7(i0);
                        if (BQ === null) {
                            console.warn('Could not find element with id "'.concat(i0, '"'));
                            return
                        }
                        var YQ = typeof console.groupCollapsed === "function";
                        if (YQ) console.groupCollapsed("[Click to expand] %c<".concat(BQ.displayName || "Component", " />"), "color: var(--dom-tag-name-color); font-weight: normal;");
                        if (BQ.props !== null) console.log("Props:", BQ.props);
                        if (BQ.state !== null) console.log("State:", BQ.state);
                        if (BQ.context !== null) console.log("Context:", BQ.context);
                        var qQ = uA(i0);
                        if (qQ !== null) console.log("Node:", qQ);
                        if (window.chrome || /firefox/i.test(navigator.userAgent)) console.log("Right-click any value to save it as a global variable for further inspection.");
                        if (YQ) console.groupEnd()
                    }

                    function zG(i0, BQ) {
                        var YQ = o7(i0);
                        if (YQ !== null) window.$attribute = z0(YQ, BQ)
                    }

                    function eZ(i0) {
                        var BQ = r.get(i0);
                        if (BQ == null) {
                            console.warn('Could not find instance with id "'.concat(i0, '"'));
                            return
                        }
                        var YQ = BQ._currentElement;
                        if (YQ == null) {
                            console.warn('Could not find element with id "'.concat(i0, '"'));
                            return
                        }
                        s.$type = YQ.type
                    }

                    function AI(i0, BQ, YQ, qQ) {
                        var tB = r.get(BQ);
                        if (tB != null) {
                            var c4 = tB._instance;
                            if (c4 != null) switch (i0) {
                                case "context":
                                    iQ(c4.context, qQ), OY(c4);
                                    break;
                                case "hooks":
                                    throw Error("Hooks not supported by this renderer");
                                case "props":
                                    var P8 = tB._currentElement;
                                    tB._currentElement = SK(SK({}, P8), {}, {
                                        props: d1(P8.props, qQ)
                                    }), OY(c4);
                                    break;
                                case "state":
                                    iQ(c4.state, qQ), OY(c4);
                                    break
                            }
                        }
                    }

                    function u$(i0, BQ, YQ, qQ, tB) {
                        var c4 = r.get(BQ);
                        if (c4 != null) {
                            var P8 = c4._instance;
                            if (P8 != null) switch (i0) {
                                case "context":
                                    O2(P8.context, qQ, tB), OY(P8);
                                    break;
                                case "hooks":
                                    throw Error("Hooks not supported by this renderer");
                                case "props":
                                    var $3 = c4._currentElement;
                                    c4._currentElement = SK(SK({}, $3), {}, {
                                        props: P0($3.props, qQ, tB)
                                    }), OY(P8);
                                    break;
                                case "state":
                                    O2(P8.state, qQ, tB), OY(P8);
                                    break
                            }
                        }
                    }

                    function ZH(i0, BQ, YQ, qQ, tB) {
                        var c4 = r.get(BQ);
                        if (c4 != null) {
                            var P8 = c4._instance;
                            if (P8 != null) switch (i0) {
                                case "context":
                                    n9(P8.context, qQ, tB), OY(P8);
                                    break;
                                case "hooks":
                                    throw Error("Hooks not supported by this renderer");
                                case "props":
                                    var $3 = c4._currentElement;
                                    c4._currentElement = SK(SK({}, $3), {}, {
                                        props: U0($3.props, qQ, tB)
                                    }), OY(P8);
                                    break;
                                case "state":
                                    n9(P8.state, qQ, tB), OY(P8);
                                    break
                            }
                        }
                    }
                    var m$ = function() {
                            throw Error("getProfilingData not supported by this renderer")
                        },
                        vC = function() {
                            throw Error("handleCommitFiberRoot not supported by this renderer")
                        },
                        Mz = function() {
                            throw Error("handleCommitFiberUnmount not supported by this renderer")
                        },
                        XJ = function() {
                            throw Error("handlePostCommitFiberRoot not supported by this renderer")
                        },
                        IH = function() {
                            throw Error("overrideError not supported by this renderer")
                        },
                        RN = function() {
                            throw Error("overrideSuspense not supported by this renderer")
                        },
                        zu = function() {},
                        Bs = function() {};

                    function wB() {
                        return null
                    }

                    function b2(i0) {
                        return null
                    }

                    function T8(i0) {}

                    function g6(i0) {}

                    function QI(i0) {}

                    function UG(i0) {
                        return null
                    }

                    function VX() {}

                    function VV(i0) {}

                    function BW(i0) {}

                    function bC() {}

                    function TN() {}

                    function BR(i0) {
                        return r.has(i0)
                    }
                    return {
                        clearErrorsAndWarnings: VX,
                        clearErrorsForFiberID: VV,
                        clearWarningsForFiberID: BW,
                        cleanup: N2,
                        getSerializedElementValueByPath: E2,
                        deletePath: AI,
                        flushInitialOperations: SB,
                        getBestMatchForTrackedPath: wB,
                        getDisplayNameForFiberID: _1,
                        getFiberForNative: z1,
                        getFiberIDForNative: Q1,
                        getInstanceAndStyle: WJ,
                        findNativeNodesForFiberID: function(BQ) {
                            var YQ = uA(BQ);
                            return YQ == null ? null : [YQ]
                        },
                        getOwnersList: UG,
                        getPathForElement: b2,
                        getProfilingData: m$,
                        handleCommitFiberRoot: vC,
                        handleCommitFiberUnmount: Mz,
                        handlePostCommitFiberRoot: XJ,
                        hasFiberWithId: BR,
                        inspectElement: r2,
                        logElementToConsole: TI,
                        overrideError: IH,
                        overrideSuspense: RN,
                        overrideValueAtPath: ZH,
                        renamePath: u$,
                        patchConsoleForStrictMode: bC,
                        prepareViewAttributeSource: zG,
                        prepareViewElementSource: eZ,
                        renderer: c,
                        setTraceUpdatesEnabled: g6,
                        setTrackedPath: QI,
                        startProfiling: zu,
                        stopProfiling: Bs,
                        storeAsGlobal: QB,
                        unpatchConsoleForStrictMode: TN,
                        updateComponentFilters: T8
                    }
                }

                function As(b) {
                    return !cG(b)
                }

                function Qs(b, a, c) {
                    if (b == null) return function() {};
                    var s = [b.sub("renderer-attached", function(Y1) {
                            var {
                                id: Q1,
                                renderer: uA,
                                rendererInterface: z1
                            } = Y1;
                            a.setRendererInterface(Q1, z1), z1.flushInitialOperations()
                        }), b.sub("unsupported-renderer-version", function(Y1) {
                            a.onUnsupportedRenderer(Y1)
                        }), b.sub("fastRefreshScheduled", a.onFastRefreshScheduled), b.sub("operations", a.onHookOperations), b.sub("traceUpdates", a.onTraceUpdates)],
                        r = function(Q1, uA) {
                            if (!As(uA.reconcilerVersion || uA.version)) return;
                            var z1 = b.rendererInterfaces.get(Q1);
                            if (z1 == null) {
                                if (typeof uA.findFiberByHostInstance === "function") z1 = EN(b, Q1, uA, c);
                                else if (uA.ComponentTree) z1 = VBA(b, Q1, uA, c);
                                if (z1 != null) b.rendererInterfaces.set(Q1, z1)
                            }
                            if (z1 != null) b.emit("renderer-attached", {
                                id: Q1,
                                renderer: uA,
                                rendererInterface: z1
                            });
                            else b.emit("unsupported-renderer-version", Q1)
                        };
                    b.renderers.forEach(function(Y1, Q1) {
                        r(Q1, Y1)
                    }), s.push(b.sub("renderer", function(Y1) {
                        var {
                            id: Q1,
                            renderer: uA
                        } = Y1;
                        r(Q1, uA)
                    })), b.emit("react-devtools", a), b.reactDevtoolsAgent = a;
                    var bA = function() {
                        s.forEach(function(Q1) {
                            return Q1()
                        }), b.rendererInterfaces.forEach(function(Q1) {
                            Q1.cleanup()
                        }), b.reactDevtoolsAgent = null
                    };
                    return a.addListener("shutdown", bA), s.push(function() {
                            a.removeListener("shutdown", bA)
                        }),
                        function() {
                            s.forEach(function(Y1) {
                                return Y1()
                            })
                        }
                }

                function ON(b, a) {
                    var c = !1,
                        s = {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0
                        },
                        r = a[b];
                    if (r != null) {
                        for (var bA = 0, Y1 = Object.keys(s); bA < Y1.length; bA++) {
                            var Q1 = Y1[bA];
                            s[Q1] = r
                        }
                        c = !0
                    }
                    var uA = a[b + "Horizontal"];
                    if (uA != null) s.left = uA, s.right = uA, c = !0;
                    else {
                        var z1 = a[b + "Left"];
                        if (z1 != null) s.left = z1, c = !0;
                        var _1 = a[b + "Right"];
                        if (_1 != null) s.right = _1, c = !0;
                        var i1 = a[b + "End"];
                        if (i1 != null) s.right = i1, c = !0;
                        var a1 = a[b + "Start"];
                        if (a1 != null) s.left = a1, c = !0
                    }
                    var QQ = a[b + "Vertical"];
                    if (QQ != null) s.bottom = QQ, s.top = QQ, c = !0;
                    else {
                        var MQ = a[b + "Bottom"];
                        if (MQ != null) s.bottom = MQ, c = !0;
                        var N2 = a[b + "Top"];
                        if (N2 != null) s.top = N2, c = !0
                    }
                    return c ? s : null
                }

                function AR(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") AR = function(c) {
                        return typeof c
                    };
                    else AR = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return AR(b)
                }

                function QR(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }

                function O(b, a, c, s) {
                    b.addListener("NativeStyleEditor_measure", function(r) {
                        var {
                            id: bA,
                            rendererID: Y1
                        } = r;
                        n(a, b, c, bA, Y1)
                    }), b.addListener("NativeStyleEditor_renameAttribute", function(r) {
                        var {
                            id: bA,
                            rendererID: Y1,
                            oldName: Q1,
                            newName: uA,
                            value: z1
                        } = r;
                        EA(a, bA, Y1, Q1, uA, z1), setTimeout(function() {
                            return n(a, b, c, bA, Y1)
                        })
                    }), b.addListener("NativeStyleEditor_setValue", function(r) {
                        var {
                            id: bA,
                            rendererID: Y1,
                            name: Q1,
                            value: uA
                        } = r;
                        G1(a, bA, Y1, Q1, uA), setTimeout(function() {
                            return n(a, b, c, bA, Y1)
                        })
                    }), b.send("isNativeStyleEditorSupported", {
                        isSupported: !0,
                        validAttributes: s
                    })
                }
                var T = {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    f = new Map;

                function n(b, a, c, s, r) {
                    var bA = b.getInstanceAndStyle({
                        id: s,
                        rendererID: r
                    });
                    if (!bA || !bA.style) {
                        a.send("NativeStyleEditor_styleAndLayout", {
                            id: s,
                            layout: null,
                            style: null
                        });
                        return
                    }
                    var {
                        instance: Y1,
                        style: Q1
                    } = bA, uA = c(Q1), z1 = f.get(s);
                    if (z1 != null) uA = Object.assign({}, uA, z1);
                    if (!Y1 || typeof Y1.measure !== "function") {
                        a.send("NativeStyleEditor_styleAndLayout", {
                            id: s,
                            layout: null,
                            style: uA || null
                        });
                        return
                    }
                    Y1.measure(function(_1, i1, a1, QQ, MQ, N2) {
                        if (typeof _1 !== "number") {
                            a.send("NativeStyleEditor_styleAndLayout", {
                                id: s,
                                layout: null,
                                style: uA || null
                            });
                            return
                        }
                        var gQ = uA != null && ON("margin", uA) || T,
                            I9 = uA != null && ON("padding", uA) || T;