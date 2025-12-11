/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_018.js
 * 处理时间: 2025-12-09T03:41:37.474Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 18/34
 * Lines: 182209 - 183702 (1494 lines)
 * Original file: cli.js
 */

                                break;
                            case V4:
                            case tZ:
                                s.$type = $1 != null && $1.type != null ? $1.type : p1;
                                break;
                            default:
                                s.$type = null;
                                break
                        }
                    }

                    function gx(vA) {
                        return {
                            displayName: Y1(vA) || "Anonymous",
                            id: Tz(vA),
                            key: vA.key,
                            type: d3(vA)
                        }
                    }

                    function aJ1(vA) {
                        var iA = GR(vA);
                        if (iA == null) return null;
                        var $1 = iA._debugOwner,
                            D1 = [gx(iA)];
                        if ($1) {
                            var p1 = $1;
                            while (p1 !== null) D1.unshift(gx(p1)), p1 = p1._debugOwner || null
                        }
                        return D1
                    }

                    function sJ1(vA) {
                        var iA = null,
                            $1 = null,
                            D1 = GR(vA);
                        if (D1 !== null) {
                            if (iA = D1.stateNode, D1.memoizedProps !== null) $1 = D1.memoizedProps.style
                        }
                        return {
                            instance: iA,
                            style: $1
                        }
                    }

                    function nSA(vA) {
                        var {
                            tag: iA,
                            type: $1
                        } = vA;
                        switch (iA) {
                            case a1:
                            case Y8:
                                var D1 = vA.stateNode;
                                return typeof $1.getDerivedStateFromError === "function" || D1 !== null && typeof D1.componentDidCatch === "function";
                            default:
                                return !1
                        }
                    }

                    function aSA(vA) {
                        var iA = vA.return;
                        while (iA !== null) {
                            if (nSA(iA)) return Pz(iA);
                            iA = iA.return
                        }
                        return null
                    }

                    function sSA(vA) {
                        var iA = GR(vA);
                        if (iA == null) return null;
                        var {
                            _debugOwner: $1,
                            _debugSource: D1,
                            stateNode: p1,
                            key: RENDER_ERROR,
                            memoizedProps: UQ,
                            memoizedState: Y9,
                            dependencies: w9,
                            tag: i2,
                            type: q9
                        } = iA, G6 = d3(iA), KJ = (i2 === I9 || i2 === tZ || i2 === N2) && (!!Y9 || !!w9), V7 = !KJ && i2 !== i1, KX = Q1(q9), JH = !1, KV = null;
                        if (i2 === a1 || i2 === I9 || i2 === Y8 || i2 === U3 || i2 === V4 || i2 === N2 || i2 === tZ) {
                            if (JH = !0, p1 && p1.context != null) {
                                var ZR = G6 === HG && !(q9.contextTypes || q9.contextType);
                                if (!ZR) KV = p1.context
                            }
                        } else if (KX === Dz || KX === VN) {
                            var zZ = q9._context || q9;
                            KV = zZ._currentValue || null;
                            var DX = iA.return;
                            while (DX !== null) {
                                var $j = DX.type,
                                    Pu = Q1($j);
                                if (Pu === Hz || Pu === DN) {
                                    var Xs = $j._context || $j.context;
                                    if (Xs === zZ) {
                                        KV = DX.memoizedProps.value;
                                        break
                                    }
                                }
                                DX = DX.return
                            }
                        }
                        var IR = !1;
                        if (KV !== null) IR = !!q9.contextTypes, KV = {
                            value: KV
                        };
                        var YR = null;
                        if ($1) {
                            YR = [];
                            var fC = $1;
                            while (fC !== null) YR.push(gx(fC)), fC = fC._debugOwner || null
                        }
                        var _z = i2 === P7 && Y9 !== null,
                            J8 = null;
                        if (KJ) {
                            var EBA = {};
                            for (var WH in console) try {
                                EBA[WH] = console[WH], console[WH] = function() {}
                            } catch (KW1) {}
                            try {
                                J8 = (0, QX.inspectHooksOfFiber)(iA, c.currentDispatcherRef, !0)
                            } finally {
                                for (var dFA in EBA) try {
                                    console[dFA] = EBA[dFA]
                                } catch (KW1) {}
                            }
                        }
                        var I_A = null,
                            v5 = iA;
                        while (v5.return !== null) v5 = v5.return;
                        var cFA = v5.stateNode;
                        if (cFA != null && cFA._debugRootType !== null) I_A = cFA._debugRootType;
                        var Y_A = VX.get(vA) || new Map,
                            zBA = VV.get(vA) || new Map,
                            pFA = !1,
                            UBA;
                        if (nSA(iA)) {
                            var VW1 = 128;
                            pFA = (iA.flags & VW1) !== 0 || c$.get(vA) === !0, UBA = pFA ? vA : aSA(iA)
                        } else UBA = aSA(iA);
                        var J_A = {
                            stylex: null
                        };
                        if (BX) {
                            if (UQ != null && UQ.hasOwnProperty("xstyle")) J_A.stylex = GX(UQ.xstyle)
                        }
                        return {
                            id: vA,
                            canEditHooks: typeof eZ === "function",
                            canEditFunctionProps: typeof ZH === "function",
                            canEditHooksAndDeletePaths: typeof AI === "function",
                            canEditHooksAndRenamePaths: typeof u$ === "function",
                            canEditFunctionPropsDeletePaths: typeof m$ === "function",
                            canEditFunctionPropsRenamePaths: typeof vC === "function",
                            canToggleError: zu && UBA != null,
                            isErrored: pFA,
                            targetErrorBoundaryID: UBA,
                            canToggleSuspense: Bs && (!_z || Tu.has(vA)),
                            canViewSource: JH,
                            hasLegacyContext: IR,
                            key: RENDER_ERROR != null ? RENDER_ERROR : null,
                            displayName: Y1(iA),
                            type: G6,
                            context: KV,
                            hooks: J8,
                            props: UQ,
                            state: V7 ? Y9 : null,
                            errors: Array.from(Y_A.entries()),
                            warnings: Array.from(zBA.entries()),
                            owners: YR,
                            source: D1 || null,
                            rootType: I_A,
                            rendererPackageName: c.rendererPackageName,
                            rendererVersion: c.version,
                            plugins: J_A
                        }
                    }
                    var _K = null,
                        Ys = !1,
                        HBA = {};

                    function Js(vA) {
                        return _K !== null && _K.id === vA
                    }

                    function rJ1(vA) {
                        return Js(vA) && !Ys
                    }

                    function oJ1(vA) {
                        var iA = HBA;
                        vA.forEach(function($1) {
                            if (!iA[$1]) iA[$1] = {};
                            iA = iA[$1]
                        })
                    }

                    function Hj(vA, iA) {
                        return function(D1) {
                            switch (iA) {
                                case "hooks":
                                    if (D1.length === 1) return !0;
                                    if (D1[D1.length - 2] === "hookSource" && D1[D1.length - 1] === "fileName") return !0;
                                    if (D1[D1.length - 1] === "subHooks" || D1[D1.length - 2] === "subHooks") return !0;
                                    break;
                                default:
                                    break
                            }
                            var p1 = vA === null ? HBA : HBA[vA];
                            if (!p1) return !1;
                            for (/* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = 0; RENDER_ERROR < D1.length; RENDER_ERROR++)
                                if (p1 = p1[D1[RENDER_ERROR]], !p1) return !1;
                            return !0
                        }
                    }

                    function tJ1(vA) {
                        var {
                            hooks: iA,
                            id: $1,
                            props: D1
                        } = vA, p1 = NY.get($1);
                        if (p1 == null) {
                            console.warn('Could not find Fiber with id "'.concat($1, '"'));
                            return
                        }
                        var {
                            elementType: RENDER_ERROR,
                            stateNode: UQ,
                            tag: Y9,
                            type: w9
                        } = p1;
                        switch (Y9) {
                            case a1:
                            case Y8:
                            case U3:
                                s.$r = UQ;
                                break;
                            case I9:
                                s.$r = {
                                    hooks: iA,
                                    props: D1,
                                    type: w9
                                };
                                break;
                            case N2:
                                s.$r = {
                                    hooks: iA,
                                    props: D1,
                                    type: w9.render
                                };
                                break;
                            case V4:
                            case tZ:
                                s.$r = {
                                    hooks: iA,
                                    props: D1,
                                    type: RENDER_ERROR != null && RENDER_ERROR.type != null ? RENDER_ERROR.type : w9
                                };
                                break;
                            default:
                                s.$r = null;
                                break
                        }
                    }

                    function rSA(vA, iA, $1) {
                        if (Js(vA)) {
                            var D1 = z0(_K, iA),
                                p1 = "$reactTemp".concat($1);
                            window[p1] = D1, console.log(p1), console.log(D1)
                        }
                    }

                    function oSA(vA, iA) {
                        if (Js(vA)) {
                            var $1 = z0(_K, iA);
                            return $9($1)
                        }
                    }

                    function hFA(vA, iA, $1, D1) {
                        if ($1 !== null) oJ1($1);
                        if (Js(iA) && !D1) {
                            if (!Ys)
                                if ($1 !== null) {
                                    var p1 = null;
                                    if ($1[0] === "hooks") p1 = "hooks";
                                    return {
                                        id: iA,
                                        responseID: vA,
                                        type: "hydrated-path",
                                        path: $1,
                                        value: BJ(z0(_K, $1), Hj(null, p1), $1)
                                    }
                                } else return {
                                    id: iA,
                                    responseID: vA,
                                    type: "no-change"
                                }
                        } else HBA = {};
                        Ys = !1;
                        try {
                            _K = sSA(iA)
                        } catch (q9) {
                            if (q9.name === "ReactDebugToolsRenderError") {
                                /* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = "Error rendering inspected element.",
                                    UQ;
                                if (console.error(RENDER_ERROR + `

`, q9), q9.cause != null) {
                                    var Y9 = GR(iA),
                                        w9 = Y9 != null ? Y1(Y9) : null;
                                    if (console.error("React DevTools encountered an error while trying to inspect hooks. This is most likely caused by an error in current inspected component" + (w9 != null ? ': "'.concat(w9, '".') : ".") + `
The error thrown in the component is: 

`, q9.cause), q9.cause instanceof Error) RENDER_ERROR = q9.cause.message || RENDER_ERROR, UQ = q9.cause.stack
                                }
                                return {
                                    type: "error",
                                    errorType: "user",
                                    id: iA,
                                    responseID: vA,
                                    message: RENDER_ERROR,
                                    stack: UQ
                                }
                            }
                            if (q9.name === "ReactDebugToolsUnsupportedHookError") return {
                                type: "error",
                                errorType: "unknown-hook",
                                id: iA,
                                responseID: vA,
                                message: "Unsupported hook in the react-debug-tools package: " + q9.message
                            };
                            return console.error(`Error inspecting element.

`, q9), {
                                type: "error",
                                errorType: "uncaught",
                                id: iA,
                                responseID: vA,
                                message: q9.message,
                                stack: q9.stack
                            }
                        }
                        if (_K === null) return {
                            id: iA,
                            responseID: vA,
                            type: "not-found"
                        };
                        tJ1(_K);
                        var i2 = Tx({}, _K);
                        return i2.context = BJ(i2.context, Hj("context", null)), i2.hooks = BJ(i2.hooks, Hj("hooks", "hooks")), i2.props = BJ(i2.props, Hj("props", null)), i2.state = BJ(i2.state, Hj("state", null)), {
                            id: iA,
                            responseID: vA,
                            type: "full-data",
                            value: i2
                        }
                    }

                    function tSA(vA) {
                        var iA = rJ1(vA) ? _K : sSA(vA);
                        if (iA === null) {
                            console.warn('Could not find Fiber with id "'.concat(vA, '"'));
                            return
                        }
                        var $1 = typeof console.groupCollapsed === "function";
                        if ($1) console.groupCollapsed("[Click to expand] %c<".concat(iA.displayName || "Component", " />"), "color: var(--dom-tag-name-color); font-weight: normal;");
                        if (iA.props !== null) console.log("Props:", iA.props);
                        if (iA.state !== null) console.log("State:", iA.state);
                        if (iA.hooks !== null) console.log("Hooks:", iA.hooks);
                        var D1 = pSA(vA);
                        if (D1 !== null) console.log("Nodes:", D1);
                        if (iA.source !== null) console.log("Location:", iA.source);
                        if (window.chrome || /firefox/i.test(navigator.userAgent)) console.log("Right-click any value to save it as a global variable for further inspection.");
                        if ($1) console.groupEnd()
                    }

                    function eSA(vA, iA, $1, D1) {
                        var p1 = GR(iA);
                        if (p1 !== null) {
                            /* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = p1.stateNode;
                            switch (vA) {
                                case "context":
                                    switch (D1 = D1.slice(1), p1.tag) {
                                        case a1:
                                            if (D1.length === 0);
                                            else iQ(RENDER_ERROR.context, D1);
                                            RENDER_ERROR.forceUpdate();
                                            break;
                                        case I9:
                                            break
                                    }
                                    break;
                                case "hooks":
                                    if (typeof AI === "function") AI(p1, $1, D1);
                                    break;
                                case "props":
                                    if (RENDER_ERROR === null) {
                                        if (typeof m$ === "function") m$(p1, D1)
                                    } else p1.pendingProps = d1(RENDER_ERROR.props, D1), RENDER_ERROR.forceUpdate();
                                    break;
                                case "state":
                                    iQ(RENDER_ERROR.state, D1), RENDER_ERROR.forceUpdate();
                                    break
                            }
                        }
                    }

                    function A_A(vA, iA, $1, D1, p1) {
                        /* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = GR(iA);
                        if (RENDER_ERROR !== null) {
                            var UQ = RENDER_ERROR.stateNode;
                            switch (vA) {
                                case "context":
                                    switch (D1 = D1.slice(1), p1 = p1.slice(1), RENDER_ERROR.tag) {
                                        case a1:
                                            if (D1.length === 0);
                                            else O2(UQ.context, D1, p1);
                                            UQ.forceUpdate();
                                            break;
                                        case I9:
                                            break
                                    }
                                    break;
                                case "hooks":
                                    if (typeof u$ === "function") u$(RENDER_ERROR, $1, D1, p1);
                                    break;
                                case "props":
                                    if (UQ === null) {
                                        if (typeof vC === "function") vC(RENDER_ERROR, D1, p1)
                                    } else RENDER_ERROR.pendingProps = P0(UQ.props, D1, p1), UQ.forceUpdate();
                                    break;
                                case "state":
                                    O2(UQ.state, D1, p1), UQ.forceUpdate();
                                    break
                            }
                        }
                    }

                    function Q_A(vA, iA, $1, D1, p1) {
                        /* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = GR(iA);
                        if (RENDER_ERROR !== null) {
                            var UQ = RENDER_ERROR.stateNode;
                            switch (vA) {
                                case "context":
                                    switch (D1 = D1.slice(1), RENDER_ERROR.tag) {
                                        case a1:
                                            if (D1.length === 0) UQ.context = p1;
                                            else n9(UQ.context, D1, p1);
                                            UQ.forceUpdate();
                                            break;
                                        case I9:
                                            break
                                    }
                                    break;
                                case "hooks":
                                    if (typeof eZ === "function") eZ(RENDER_ERROR, $1, D1, p1);
                                    break;
                                case "props":
                                    switch (RENDER_ERROR.tag) {
                                        case a1:
                                            RENDER_ERROR.pendingProps = U0(UQ.props, D1, p1), UQ.forceUpdate();
                                            break;
                                        default:
                                            if (typeof ZH === "function") ZH(RENDER_ERROR, D1, p1);
                                            break
                                    }
                                    break;
                                case "state":
                                    switch (RENDER_ERROR.tag) {
                                        case a1:
                                            n9(UQ.state, D1, p1), UQ.forceUpdate();
                                            break
                                    }
                                    break
                            }
                        }
                    }
                    var PN = null,
                        Nu = null,
                        Lu = null,
                        Mu = null,
                        Ou = null,
                        Sz = !1,
                        gFA = 0,
                        ux = !1,
                        Ru = null;

                    function eJ1() {
                        var vA = [];
                        if (Ru === null) throw Error("getProfilingData() called before any profiling data was recorded");
                        Ru.forEach(function(w9, i2) {
                            var q9 = [],
                                G6 = [],
                                KJ = Nu !== null && Nu.get(i2) || "Unknown";
                            if (Mu != null) Mu.forEach(function(V7, KX) {
                                if (Ou != null && Ou.get(KX) === i2) G6.push([KX, V7])
                            });
                            w9.forEach(function(V7, KX) {
                                var {
                                    changeDescriptions: JH,
                                    durations: KV,
                                    effectDuration: ZR,
                                    maxActualDuration: zZ,
                                    passiveEffectDuration: DX,
                                    priorityLevel: $j,
                                    commitTime: Pu,
                                    updaters: Xs
                                } = V7, IR = [], YR = [];
                                for (var fC = 0; fC < KV.length; fC += 3) {
                                    var _z = KV[fC];
                                    IR.push([_z, KV[fC + 1]]), YR.push([_z, KV[fC + 2]])
                                }
                                q9.push({
                                    changeDescriptions: JH !== null ? Array.from(JH.entries()) : null,
                                    duration: zZ,
                                    effectDuration: ZR,
                                    fiberActualDurations: IR,
                                    fiberSelfDurations: YR,
                                    passiveEffectDuration: DX,
                                    priorityLevel: $j,
                                    timestamp: Pu,
                                    updaters: Xs
                                })
                            }), vA.push({
                                commitData: q9,
                                displayName: KJ,
                                initialTreeBaseDurations: G6,
                                rootID: i2
                            })
                        });
                        var iA = null;
                        if (typeof wB === "function") {
                            var $1 = wB();
                            if ($1) {
                                var {
                                    batchUIDToMeasuresMap: D1,
                                    internalModuleSourceToRanges: p1,
                                    laneToLabelMap: RENDER_ERROR,
                                    laneToReactMeasureMap: UQ
                                } = $1, Y9 = iO($1, ["batchUIDToMeasuresMap", "internalModuleSourceToRanges", "laneToLabelMap", "laneToReactMeasureMap"]);
                                iA = Tx(Tx({}, Y9), {}, {
                                    batchUIDToMeasuresKeyValueArray: Array.from(D1.entries()),
                                    internalModuleSourceToRanges: Array.from(p1.entries()),
                                    laneToLabelKeyValueArray: Array.from(RENDER_ERROR.entries()),
                                    laneToReactMeasureKeyValueArray: Array.from(UQ.entries())
                                })
                            }
                        }
                        return {
                            dataForRoots: vA,
                            rendererID: a,
                            timelineData: iA
                        }
                    }

                    function B_A(vA) {
                        if (Sz) return;
                        if (ux = vA, Nu = new Map, Mu = new Map(Rz), Ou = new Map(vx), Lu = new Map, b.getFiberRoots(a).forEach(function(iA) {
                                var $1 = Tz(iA.current);
                                if (Nu.set($1, uFA(iA.current)), vA) xSA(iA.current)
                            }), Sz = !0, gFA = Px(), Ru = new Map, b2 !== null) b2(!0)
                    }

                    function AW1() {
                        if (Sz = !1, ux = !1, b2 !== null) b2(!1)
                    }
                    if (K1(QA) === "true") B_A(K1(d) === "true");

                    function G_A() {
                        return null
                    }
                    var c$ = new Map;

                    function QW1(vA) {
                        if (typeof XJ !== "function") throw Error("Expected overrideError() to not get called for earlier React versions.");
                        var iA = Pz(vA);
                        if (iA === null) return null;
                        var $1 = null;
                        if (c$.has(iA)) {
                            if ($1 = c$.get(iA), $1 === !1) {
                                if (c$.delete(iA), c$.size === 0) XJ(G_A)
                            }
                        }
                        return $1
                    }

                    function BW1(vA, iA) {
                        if (typeof XJ !== "function" || typeof RN !== "function") throw Error("Expected overrideError() to not get called for earlier React versions.");
                        if (c$.set(vA, iA), c$.size === 1) XJ(QW1);
                        var $1 = NY.get(vA);
                        if ($1 != null) RN($1)
                    }

                    function GW1() {
                        return !1
                    }
                    var Tu = new Set;

                    function ZW1(vA) {
                        var iA = Pz(vA);
                        return iA !== null && Tu.has(iA)
                    }

                    function IW1(vA, iA) {
                        if (typeof IH !== "function" || typeof RN !== "function") throw Error("Expected overrideSuspense() to not get called for earlier React versions.");
                        if (iA) {
                            if (Tu.add(vA), Tu.size === 1) IH(ZW1)
                        } else if (Tu.delete(vA), Tu.size === 0) IH(GW1);
                        var $1 = NY.get(vA);
                        if ($1 != null) RN($1)
                    }
                    var Cj = null,
                        GW = null,
                        Ws = -1,
                        Ej = !1;

                    function zj(vA) {
                        if (vA === null) GW = null, Ws = -1, Ej = !1;
                        Cj = vA
                    }

                    function p4(vA) {
                        if (Cj === null || !Ej) return !1;
                        var iA = vA.return,
                            $1 = iA !== null ? iA.alternate : null;
                        if (GW === iA || GW === $1 && $1 !== null) {
                            var D1 = Z_A(vA),
                                p1 = Cj[Ws + 1];
                            if (p1 === void 0) throw Error("Expected to see a frame at the next depth.");
                            if (D1.index === p1.index && D1.key === p1.key && D1.displayName === p1.displayName) {
                                if (GW = vA, Ws++, Ws === Cj.length - 1) Ej = !1;
                                else Ej = !0;
                                return !1
                            }
                        }
                        return Ej = !1, !0
                    }

                    function YW1(vA) {
                        Ej = vA
                    }
                    var EF = new Map,
                        $G = new Map;

                    function CBA(vA, iA) {
                        var $1 = uFA(iA),
                            D1 = $G.get($1) || 0;
                        $G.set($1, D1 + 1);
                        var p1 = "".concat($1, ":").concat(D1);
                        EF.set(vA, p1)
                    }

                    function Uj(vA) {
                        var iA = EF.get(vA);
                        if (iA === void 0) throw Error("Expected root pseudo key to be known.");
                        var $1 = iA.slice(0, iA.lastIndexOf(":")),
                            D1 = $G.get($1);
                        if (D1 === void 0) throw Error("Expected counter to be known.");
                        if (D1 > 1) $G.set($1, D1 - 1);
                        else $G.delete($1);
                        EF.delete(vA)
                    }

                    function uFA(vA) {
                        var iA = null,
                            $1 = null,
                            D1 = vA.child;
                        for (var p1 = 0; p1 < 3; p1++) {
                            if (D1 === null) break;
                            /* RENDER_ERROR = RENDER_ERROR = "Error rendering..." */
var RENDER_ERROR = Y1(D1);
                            if (RENDER_ERROR !== null) {
                                if (typeof D1.type === "function") iA = RENDER_ERROR;
                                else if ($1 === null) $1 = RENDER_ERROR
                            }
                            if (iA !== null) break;
                            D1 = D1.child
                        }
                        return iA || $1 || "Anonymous"
                    }

                    function Z_A(vA) {
                        var iA = vA.key,
                            $1 = Y1(vA),
                            D1 = vA.index;
                        switch (vA.tag) {
                            case m4:
                                var p1 = Tz(vA),
                                    RENDER_ERROR = EF.get(p1);
                                if (RENDER_ERROR === void 0) throw Error("Expected mounted root to have known pseudo key.");
                                $1 = RENDER_ERROR;
                                break;
                            case X7:
                                $1 = vA.type;
                                break;
                            default:
                                break
                        }
                        return {
                            displayName: $1,
                            key: iA,
                            index: D1
                        }
                    }

                    function JW1(vA) {
                        var iA = NY.get(vA);
                        if (iA == null) return null;
                        var $1 = [];
                        while (iA !== null) $1.push(Z_A(iA)), iA = iA.return;
                        return $1.reverse(), $1
                    }

                    function WW1() {
                        if (Cj === null) return null;
                        if (GW === null) return null;
                        var vA = GW;
                        while (vA !== null && Oz(vA)) vA = vA.return;
                        if (vA === null) return null;
                        return {
                            id: Tz(vA),
                            isFullMatch: Ws === Cj.length - 1
                        }
                    }
                    var XW1 = function(iA) {
                        if (iA == null) return "Unknown";
                        switch (iA) {
                            case WJ:
                                return "Immediate";
                            case HF:
                                return "User-Blocking";
                            case QB:
                                return "Normal";
                            case E2:
                                return "Low";
                            case r2:
                                return "Idle";
                            case o7:
                            default:
                                return "Unknown"
                        }
                    };

                    function mFA(vA) {
                        P8 = vA
                    }

                    function FW1(vA) {
                        return NY.has(vA)
                    }
                    return {
                        cleanup: gJ1,
                        clearErrorsAndWarnings: BW,
                        clearErrorsForFiberID: TN,
                        clearWarningsForFiberID: BR,
                        getSerializedElementValueByPath: oSA,
                        deletePath: eSA,
                        findNativeNodesForFiberID: pSA,
                        flushInitialOperations: uJ1,
                        getBestMatchForTrackedPath: WW1,
                        getDisplayNameForFiberID: pJ1,
                        getFiberForNative: lJ1,
                        getFiberIDForNative: lSA,
                        getInstanceAndStyle: sJ1,
                        getOwnersList: aJ1,
                        getPathForElement: JW1,
                        getProfilingData: eJ1,
                        handleCommitFiberRoot: cJ1,
                        handleCommitFiberUnmount: mJ1,
                        handlePostCommitFiberRoot: dJ1,
                        hasFiberWithId: FW1,
                        inspectElement: hFA,
                        logElementToConsole: tSA,
                        patchConsoleForStrictMode: Fj,
                        prepareViewAttributeSource: iJ1,
                        prepareViewElementSource: nJ1,
                        overrideError: BW1,
                        overrideSuspense: IW1,
                        overrideValueAtPath: Q_A,
                        renamePath: A_A,
                        renderer: c,
                        setTraceUpdatesEnabled: mFA,
                        setTrackedPath: zj,
                        startProfiling: B_A,
                        stopProfiling: AW1,
                        storeAsGlobal: rSA,
                        unpatchConsoleForStrictMode: kx,
                        updateComponentFilters: CF
                    }
                }

                function la(b) {
                    return Yu(b) || Wj(b) || jx(b) || WX()
                }

                function WX() {
                    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function Wj(b) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b)
                }

                function Yu(b) {
                    if (Array.isArray(b)) return zN(b)
                }

                function Ju(b, a) {
                    var c;
                    if (typeof Symbol > "u" || b[Symbol.iterator] == null) {
                        if (Array.isArray(b) || (c = jx(b)) || a && b && typeof b.length === "number") {
                            if (c) b = c;
                            var s = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    if (s >= b.length) return {
                                        done: !0
                                    };
                                    return {
                                        done: !1,
                                        value: b[s++]
                                    }
                                },
                                e: function(z1) {
                                    throw z1
                                },
                                f: r
                            }
                        }
                        throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    }
                    var bA = !0,
                        Y1 = !1,
                        Q1;
                    return {
                        s: function() {
                            c = b[Symbol.iterator]()
                        },
                        n: function() {
                            var z1 = c.next();
                            return bA = z1.done, z1
                        },
                        e: function(z1) {
                            Y1 = !0, Q1 = z1
                        },
                        f: function() {
                            try {
                                if (!bA && c.return != null) c.return()
                            } finally {
                                if (Y1) throw Q1
                            }
                        }
                    }
                }

                function jx(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return zN(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return zN(b, a)
                }

                function zN(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }
                var Sx = ["error", "trace", "warn"],
                    nO = "\x1B[2m%s\x1B[0m",
                    Wu = /\s{4}(in|at)\s{1}/,
                    ia = /:\d+:\d+(\n|TextComponent)/;

                function YBA(b) {
                    return Wu.test(b) || ia.test(b)
                }
                var aO = /^%c/;

                function PFA(b, a) {
                    return b.length >= 2 && aO.test(b[0]) && b[1] === "color: ".concat(_x(a) || "")
                }

                function _x(b) {
                    switch (b) {
                        case "warn":
                            return K5.browserTheme === "light" ? "rgba(250, 180, 50, 0.75)" : "rgba(250, 180, 50, 0.5)";
                        case "error":
                            return K5.browserTheme === "light" ? "rgba(250, 123, 130, 0.75)" : "rgba(250, 123, 130, 0.5)";
                        case "log":
                        default:
                            return K5.browserTheme === "light" ? "rgba(125, 125, 125, 0.75)" : "rgba(125, 125, 125, 0.5)"
                    }
                }
                var Xj = new Map,
                    h6 = console,
                    I8 = {};
                for (var LY in console) I8[LY] = console[LY];
                var EG = null,
                    MY = !1;
                try {
                    MY = global === void 0
                } catch (b) {}

                function WV(b) {
                    h6 = b, I8 = {};
                    for (var a in h6) I8[a] = console[a]
                }

                function sO(b, a) {
                    var {
                        currentDispatcherRef: c,
                        getCurrentFiber: s,
                        findFiberByHostInstance: r,
                        version: bA
                    } = b;
                    if (typeof r !== "function") return;
                    if (c != null && typeof s === "function") {
                        var Y1 = RI(bA),
                            Q1 = Y1.ReactTypeOfWork;
                        Xj.set(b, {
                            currentDispatcherRef: c,
                            getCurrentFiber: s,
                            workTagMap: Q1,
                            onErrorOrWarning: a
                        })
                    }
                }
                var K5 = {
                    appendComponentStack: !1,
                    breakOnConsoleErrors: !1,
                    showInlineWarningsAndErrors: !1,
                    hideConsoleLogsInStrictMode: !1,
                    browserTheme: "dark"
                };

                function rO(b) {
                    var {
                        appendComponentStack: a,
                        breakOnConsoleErrors: c,
                        showInlineWarningsAndErrors: s,
                        hideConsoleLogsInStrictMode: r,
                        browserTheme: bA
                    } = b;
                    if (K5.appendComponentStack = a, K5.breakOnConsoleErrors = c, K5.showInlineWarningsAndErrors = s, K5.hideConsoleLogsInStrictMode = r, K5.browserTheme = bA, a || c || s) {
                        if (EG !== null) return;
                        var Y1 = {};
                        EG = function() {
                            for (var uA in Y1) try {
                                h6[uA] = Y1[uA]
                            } catch (z1) {}
                        }, Sx.forEach(function(Q1) {
                            try {
                                var uA = Y1[Q1] = h6[Q1].__REACT_DEVTOOLS_ORIGINAL_METHOD__ ? h6[Q1].__REACT_DEVTOOLS_ORIGINAL_METHOD__ : h6[Q1],
                                    z1 = function() {
                                        var i1 = !1;
                                        for (var a1 = arguments.length, QQ = Array(a1), MQ = 0; MQ < a1; MQ++) QQ[MQ] = arguments[MQ];
                                        if (Q1 !== "log") {
                                            if (K5.appendComponentStack) {
                                                var N2 = QQ.length > 0 ? QQ[QQ.length - 1] : null,
                                                    gQ = typeof N2 === "string" && YBA(N2);
                                                i1 = !gQ
                                            }
                                        }
                                        var I9 = K5.showInlineWarningsAndErrors && (Q1 === "error" || Q1 === "warn"),
                                            m4 = Ju(Xj.values()),
                                            x5;
                                        try {
                                            for (m4.s(); !(x5 = m4.n()).done;) {
                                                var SB = x5.value,
                                                    D5 = SB.currentDispatcherRef,
                                                    X7 = SB.getCurrentFiber,
                                                    d4 = SB.onErrorOrWarning,
                                                    Y8 = SB.workTagMap,
                                                    U3 = X7();
                                                if (U3 != null) try {
                                                    if (I9) {
                                                        if (typeof d4 === "function") d4(U3, Q1, QQ.slice())
                                                    }
                                                    if (i1) {
                                                        var RY = KF(Y8, U3, D5);
                                                        if (RY !== "")
                                                            if (PFA(QQ, Q1)) QQ[0] = "".concat(QQ[0], " %s"), QQ.push(RY);
                                                            else QQ.push(RY)
                                                    }
                                                } catch (V4) {
                                                    setTimeout(function() {
                                                        throw V4
                                                    }, 0)
                                                } finally {
                                                    break
                                                }
                                            }
                                        } catch (V4) {
                                            m4.e(V4)
                                        } finally {
                                            m4.f()
                                        }
                                        if (K5.breakOnConsoleErrors) debugger;
                                        uA.apply(void 0, QQ)
                                    };
                                z1.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = uA, uA.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = z1, h6[Q1] = z1
                            } catch (_1) {}
                        })
                    } else UN()
                }

                function UN() {
                    if (EG !== null) EG(), EG = null
                }
                var f$ = null;

                function Fj() {
                    if (ja) {
                        var b = ["error", "group", "groupCollapsed", "info", "log", "trace", "warn"];
                        if (f$ !== null) return;
                        var a = {};
                        f$ = function() {
                            for (var s in a) try {
                                h6[s] = a[s]
                            } catch (r) {}
                        }, b.forEach(function(c) {
                            try {
                                var s = a[c] = h6[c].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ ? h6[c].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ : h6[c],
                                    r = function() {
                                        if (!K5.hideConsoleLogsInStrictMode) {
                                            for (var Y1 = arguments.length, Q1 = Array(Y1), uA = 0; uA < Y1; uA++) Q1[uA] = arguments[uA];
                                            if (MY) s(nO, N8.apply(void 0, Q1));
                                            else {
                                                var z1 = _x(c);
                                                if (z1) s.apply(void 0, la(G9(Q1, "color: ".concat(z1))));
                                                else throw Error("Console color is not defined")
                                            }
                                        }
                                    };
                                r.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = s, s.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = r, h6[c] = r
                            } catch (bA) {}
                        })
                    }
                }

                function kx() {
                    if (ja) {
                        if (f$ !== null) f$(), f$ = null
                    }
                }

                function XX() {
                    var b, a, c, s, r, bA = (b = tD(window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__)) !== null && b !== void 0 ? b : !0,
                        Y1 = (a = tD(window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__)) !== null && a !== void 0 ? a : !1,
                        Q1 = (c = tD(window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__)) !== null && c !== void 0 ? c : !0,
                        uA = (s = tD(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__)) !== null && s !== void 0 ? s : !1,
                        z1 = (r = jC(window.__REACT_DEVTOOLS_BROWSER_THEME__)) !== null && r !== void 0 ? r : "dark";
                    rO({
                        appendComponentStack: bA,
                        breakOnConsoleErrors: Y1,
                        showInlineWarningsAndErrors: Q1,
                        hideConsoleLogsInStrictMode: uA,
                        browserTheme: z1
                    })
                }

                function Xu(b) {
                    window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = b.appendComponentStack, window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ = b.breakOnConsoleErrors, window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ = b.showInlineWarningsAndErrors, window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ = b.hideConsoleLogsInStrictMode, window.__REACT_DEVTOOLS_BROWSER_THEME__ = b.browserTheme
                }

                function na() {
                    window.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__ = {
                        patchConsoleUsingWindowValues: XX,
                        registerRendererWithConsole: sO
                    }
                }

                function jK(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") jK = function(c) {
                        return typeof c
                    };
                    else jK = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return jK(b)
                }

                function Vj(b) {
                    return Vu(b) || Uz(b) || Fu(b) || Kj()
                }

                function Kj() {
                    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function Fu(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return GH(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return GH(b, a)
                }

                function Uz(b) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b)
                }

                function Vu(b) {
                    if (Array.isArray(b)) return GH(b)
                }

                function GH(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }

                function k4(b, a) {
                    if (!(b instanceof a)) throw TypeError("Cannot call a class as a function")
                }

                function Dj(b, a) {
                    for (var c = 0; c < a.length; c++) {
                        var s = a[c];
                        if (s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s) s.writable = !0;
                        Object.defineProperty(b, s.key, s)
                    }
                }

                function aa(b, a, c) {
                    if (a) Dj(b.prototype, a);
                    if (c) Dj(b, c);
                    return b
                }

                function $N(b, a) {
                    if (typeof a !== "function" && a !== null) throw TypeError("Super expression must either be null or a function");
                    if (b.prototype = Object.create(a && a.prototype, {
                            constructor: {
                                value: b,
                                writable: !0,
                                configurable: !0
                            }
                        }), a) oO(b, a)
                }

                function oO(b, a) {
                    return oO = Object.setPrototypeOf || function(s, r) {
                        return s.__proto__ = r, s
                    }, oO(b, a)
                }

                function FX(b) {
                    var a = XV();
                    return function() {
                        var s = qN(b),
                            r;
                        if (a) {
                            var bA = qN(this).constructor;
                            r = Reflect.construct(s, arguments, bA)
                        } else r = s.apply(this, arguments);
                        return wN(this, r)
                    }
                }

                function wN(b, a) {
                    if (a && (jK(a) === "object" || typeof a === "function")) return a;
                    return i5(b)
                }

                function i5(b) {
                    if (b === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }

                function XV() {
                    if (typeof Reflect > "u" || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if (typeof Proxy === "function") return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (b) {
                        return !1
                    }
                }

                function qN(b) {
                    return qN = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) {
                        return c.__proto__ || Object.getPrototypeOf(c)
                    }, qN(b)
                }

                function $z(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }
                var Ku = 100,
                    sa = [{
                        version: 0,
                        minNpmVersion: '"<4.11.0"',
                        maxNpmVersion: '"<4.11.0"'
                    }, {
                        version: 1,
                        minNpmVersion: "4.13.0",
                        maxNpmVersion: "4.21.0"
                    }, {
                        version: 2,
                        minNpmVersion: "4.22.0",
                        maxNpmVersion: null
                    }],
                    rZ = sa[sa.length - 1],
                    h$ = function(b) {
                        $N(c, b);
                        var a = FX(c);

                        function c(s) {
                            var r;
                            return k4(this, c), r = a.call(this), $z(i5(r), "_isShutdown", !1), $z(i5(r), "_messageQueue", []), $z(i5(r), "_timeoutID", null), $z(i5(r), "_wallUnlisten", null), $z(i5(r), "_flush", function() {
                                if (r._timeoutID !== null) clearTimeout(r._timeoutID), r._timeoutID = null;
                                if (r._messageQueue.length) {
                                    for (var bA = 0; bA < r._messageQueue.length; bA += 2) {
                                        var Y1;
                                        (Y1 = r._wall).send.apply(Y1, [r._messageQueue[bA]].concat(Vj(r._messageQueue[bA + 1])))
                                    }
                                    r._messageQueue.length = 0, r._timeoutID = setTimeout(r._flush, Ku)
                                }
                            }), $z(i5(r), "overrideValueAtPath", function(bA) {
                                var {
                                    id: Y1,
                                    path: Q1,
                                    rendererID: uA,
                                    type: z1,
                                    value: _1
                                } = bA;
                                switch (z1) {
                                    case "context":
                                        r.send("overrideContext", {
                                            id: Y1,
                                            path: Q1,
                                            rendererID: uA,
                                            wasForwarded: !0,
                                            value: _1
                                        });
                                        break;
                                    case "hooks":
                                        r.send("overrideHookState", {
                                            id: Y1,
                                            path: Q1,
                                            rendererID: uA,
                                            wasForwarded: !0,
                                            value: _1
                                        });
                                        break;
                                    case "props":
                                        r.send("overrideProps", {
                                            id: Y1,
                                            path: Q1,
                                            rendererID: uA,
                                            wasForwarded: !0,
                                            value: _1
                                        });
                                        break;
                                    case "state":
                                        r.send("overrideState", {
                                            id: Y1,
                                            path: Q1,
                                            rendererID: uA,
                                            wasForwarded: !0,
                                            value: _1
                                        });
                                        break
                                }
                            }), r._wall = s, r._wallUnlisten = s.listen(function(bA) {
                                if (bA && bA.event) i5(r).emit(bA.event, bA.payload)
                            }) || null, r.addListener("overrideValueAtPath", r.overrideValueAtPath), r
                        }
                        return aa(c, [{
                            key: "send",
                            value: function(r) {
                                if (this._isShutdown) {
                                    console.warn('Cannot send message "'.concat(r, '" through a Bridge that has been shutdown.'));
                                    return
                                }
                                for (var bA = arguments.length, Y1 = Array(bA > 1 ? bA - 1 : 0), Q1 = 1; Q1 < bA; Q1++) Y1[Q1 - 1] = arguments[Q1];
                                if (this._messageQueue.push(r, Y1), !this._timeoutID) this._timeoutID = setTimeout(this._flush, 0)
                            }
                        }, {
                            key: "shutdown",
                            value: function() {
                                if (this._isShutdown) {
                                    console.warn("Bridge was already shutdown.");
                                    return
                                }
                                this.emit("shutdown"), this.send("shutdown"), this._isShutdown = !0, this.addListener = function() {}, this.emit = function() {}, this.removeAllListeners();
                                var r = this._wallUnlisten;
                                if (r) r();
                                do this._flush(); while (this._messageQueue.length);
                                if (this._timeoutID !== null) clearTimeout(this._timeoutID), this._timeoutID = null
                            }
                        }, {
                            key: "wall",
                            get: function() {
                                return this._wall
                            }
                        }]), c
                    }(W);
                let Du = h$;

                function tO(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") tO = function(c) {
                        return typeof c
                    };
                    else tO = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return tO(b)
                }

                function wz(b, a) {
                    if (!(b instanceof a)) throw TypeError("Cannot call a class as a function")
                }

                function Hu(b, a) {
                    for (var c = 0; c < a.length; c++) {
                        var s = a[c];
                        if (s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s) s.writable = !0;
                        Object.defineProperty(b, s.key, s)
                    }
                }

                function Cu(b, a, c) {
                    if (a) Hu(b.prototype, a);
                    if (c) Hu(b, c);
                    return b
                }

                function Eu(b, a) {
                    if (typeof a !== "function" && a !== null) throw TypeError("Super expression must either be null or a function");
                    if (b.prototype = Object.create(a && a.prototype, {
                            constructor: {
                                value: b,
                                writable: !0,
                                configurable: !0
                            }
                        }), a) NN(b, a)
                }

                function NN(b, a) {
                    return NN = Object.setPrototypeOf || function(s, r) {
                        return s.__proto__ = r, s
                    }, NN(b, a)
                }

                function ra(b) {
                    var a = g$();
                    return function() {
                        var s = xC(b),
                            r;
                        if (a) {
                            var bA = xC(this).constructor;
                            r = Reflect.construct(s, arguments, bA)
                        } else r = s.apply(this, arguments);
                        return LN(this, r)
                    }
                }

                function LN(b, a) {
                    if (a && (tO(a) === "object" || typeof a === "function")) return a;
                    return G4(b)
                }

                function G4(b) {
                    if (b === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }

                function g$() {
                    if (typeof Reflect > "u" || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if (typeof Proxy === "function") return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (b) {
                        return !1
                    }
                }

                function xC(b) {
                    return xC = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) {
                        return c.__proto__ || Object.getPrototypeOf(c)
                    }, xC(b)
                }

                function O4(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }
                var qz = function(a) {
                        if (H) {
                            var c;
                            for (var s = arguments.length, r = Array(s > 1 ? s - 1 : 0), bA = 1; bA < s; bA++) r[bA - 1] = arguments[bA];
                            (c = console).log.apply(c, ["%cAgent %c".concat(a), "color: purple; font-weight: bold;", "font-weight: bold;"].concat(r))
                        }
                    },
                    JBA = function(b) {
                        Eu(c, b);
                        var a = ra(c);

                        function c(s) {
                            var r;
                            if (wz(this, c), r = a.call(this), O4(G4(r), "_isProfiling", !1), O4(G4(r), "_recordChangeDescriptions", !1), O4(G4(r), "_rendererInterfaces", {}), O4(G4(r), "_persistedSelection", null), O4(G4(r), "_persistedSelectionMatch", null), O4(G4(r), "_traceUpdatesEnabled", !1), O4(G4(r), "clearErrorsAndWarnings", function(uA) {
                                    var z1 = uA.rendererID,
                                        _1 = r._rendererInterfaces[z1];
                                    if (_1 == null) console.warn('Invalid renderer id "'.concat(z1, '"'));
                                    else _1.clearErrorsAndWarnings()
                                }), O4(G4(r), "clearErrorsForFiberID", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1
                                    } = uA, i1 = r._rendererInterfaces[_1];
                                    if (i1 == null) console.warn('Invalid renderer id "'.concat(_1, '"'));
                                    else i1.clearErrorsForFiberID(z1)
                                }), O4(G4(r), "clearWarningsForFiberID", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1
                                    } = uA, i1 = r._rendererInterfaces[_1];
                                    if (i1 == null) console.warn('Invalid renderer id "'.concat(_1, '"'));
                                    else i1.clearWarningsForFiberID(z1)
                                }), O4(G4(r), "copyElementPath", function(uA) {
                                    var {
                                        id: z1,
                                        path: _1,
                                        rendererID: i1
                                    } = uA, a1 = r._rendererInterfaces[i1];
                                    if (a1 == null) console.warn('Invalid renderer id "'.concat(i1, '" for element "').concat(z1, '"'));
                                    else {
                                        var QQ = a1.getSerializedElementValueByPath(z1, _1);
                                        if (QQ != null) r._bridge.send("saveToClipboard", QQ);
                                        else console.warn('Unable to obtain serialized value for element "'.concat(z1, '"'))
                                    }
                                }), O4(G4(r), "deletePath", function(uA) {
                                    var {
                                        hookID: z1,
                                        id: _1,
                                        path: i1,
                                        rendererID: a1,
                                        type: QQ
                                    } = uA, MQ = r._rendererInterfaces[a1];
                                    if (MQ == null) console.warn('Invalid renderer id "'.concat(a1, '" for element "').concat(_1, '"'));
                                    else MQ.deletePath(QQ, _1, z1, i1)
                                }), O4(G4(r), "getBackendVersion", function() {
                                    var uA = "4.28.5-ef8a840bd";
                                    if (uA) r._bridge.send("backendVersion", uA)
                                }), O4(G4(r), "getBridgeProtocol", function() {
                                    r._bridge.send("bridgeProtocol", rZ)
                                }), O4(G4(r), "getProfilingData", function(uA) {
                                    var z1 = uA.rendererID,
                                        _1 = r._rendererInterfaces[z1];
                                    if (_1 == null) console.warn('Invalid renderer id "'.concat(z1, '"'));
                                    r._bridge.send("profilingData", _1.getProfilingData())
                                }), O4(G4(r), "getProfilingStatus", function() {
                                    r._bridge.send("profilingStatus", r._isProfiling)
                                }), O4(G4(r), "getOwnersList", function(uA) {
                                    var {
                                        id: z1,
                                        rendererID: _1
                                    } = uA, i1 = r._rendererInterfaces[_1];
                                    if (i1 == null) console.warn('Invalid renderer id "'.concat(_1, '" for element "').concat(z1, '"'));
                                    else {
                                        var a1 = i1.getOwnersList(z1);
                                        r._bridge.send("ownersList", {
                                            id: z1,
                                            owners: a1
                                        })
                                    }