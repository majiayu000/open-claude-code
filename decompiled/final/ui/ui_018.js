/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_018.js
 * 处理时间: 2025-12-09T03:41:39.117Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 18/53
 * Lines: 167216 - 168715 (1500 lines)
 * Original file: cli.js
 */


        function IV(O, T) {
            n9 = O, EZ = f6 = null, O = O.dependencies, O !== null && O.firstContext !== null && ((O.lanes & T) !== 0 && (L9 = !0), O.firstContext = null)
        }

        function XF(O) {
            var T = K1 ? O._currentValue : O._currentValue2;
            if (EZ !== O)
                if (O = {
                        context: O,
                        memoizedValue: T,
                        next: null
                    }, f6 === null) {
                    if (n9 === null) throw Error(Z(308));
                    f6 = O, n9.dependencies = {
                        lanes: 0,
                        firstContext: O
                    }
                } else f6 = f6.next = O;
            return T
        }
        var FF = null;

        function V5(O) {
            FF === null ? FF = [O] : FF.push(O)
        }

        function Vx(O, T, f, n) {
            var t = T.interleaved;
            return t === null ? (f.next = f, V5(T)) : (f.next = t.next, t.next = f), T.interleaved = f, TK(O, n)
        }

        function TK(O, T) {
            O.lanes |= T;
            var f = O.alternate;
            f !== null && (f.lanes |= T), f = O;
            for (O = O.return; O !== null;) O.childLanes |= T, f = O.alternate, f !== null && (f.childLanes |= T), f = O, O = O.return;
            return f.tag === 3 ? f.stateNode : null
        }
        var eD = !1;

        function mO(O) {
            O.updateQueue = {
                baseState: O.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    interleaved: null,
                    lanes: 0
                },
                effects: null
            }
        }

        function NFA(O, T) {
            O = O.updateQueue, T.updateQueue === O && (T.updateQueue = {
                baseState: O.baseState,
                firstBaseUpdate: O.firstBaseUpdate,
                lastBaseUpdate: O.lastBaseUpdate,
                shared: O.shared,
                effects: O.effects
            })
        }

        function Fz(O, T) {
            return {
                eventTime: O,
                lane: T,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function Vz(O, T, f) {
            var n = O.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (I8 & 2) !== 0) {
                var t = n.pending;
                return t === null ? T.next = T : (T.next = t.next, t.next = T), n.pending = T, TK(O, f)
            }
            return t = n.interleaved, t === null ? (T.next = T, V5(n)) : (T.next = t.next, t.next = T), n.interleaved = T, TK(O, f)
        }

        function Kx(O, T, f) {
            if (T = T.updateQueue, T !== null && (T = T.shared, (f & 4194240) !== 0)) {
                var n = T.lanes;
                n &= O.pendingLanes, f |= n, T.lanes = f, AJ(O, f)
            }
        }

        function AX(O, T) {
            var {
                updateQueue: f,
                alternate: n
            } = O;
            if (n !== null && (n = n.updateQueue, f === n)) {
                var t = null,
                    EA = null;
                if (f = f.firstBaseUpdate, f !== null) {
                    do {
                        var G1 = {
                            eventTime: f.eventTime,
                            lane: f.lane,
                            tag: f.tag,
                            payload: f.payload,
                            callback: f.callback,
                            next: null
                        };
                        EA === null ? t = EA = G1 : EA = EA.next = G1, f = f.next
                    } while (f !== null);
                    EA === null ? t = EA = T : EA = EA.next = T
                } else t = EA = T;
                f = {
                    baseState: n.baseState,
                    firstBaseUpdate: t,
                    lastBaseUpdate: EA,
                    shared: n.shared,
                    effects: n.effects
                }, O.updateQueue = f;
                return
            }
            O = f.lastBaseUpdate, O === null ? f.firstBaseUpdate = T : O.next = T, f.lastBaseUpdate = T
        }

        function XN(O, T, f, n) {
            var t = O.updateQueue;
            eD = !1;
            var {
                firstBaseUpdate: EA,
                lastBaseUpdate: G1
            } = t, n1 = t.shared.pending;
            if (n1 !== null) {
                t.shared.pending = null;
                var q0 = n1,
                    CQ = q0.next;
                q0.next = null, G1 === null ? EA = CQ : G1.next = CQ, G1 = q0;
                var dB = O.alternate;
                dB !== null && (dB = dB.updateQueue, n1 = dB.lastBaseUpdate, n1 !== G1 && (n1 === null ? dB.firstBaseUpdate = CQ : n1.next = CQ, dB.lastBaseUpdate = q0))
            }
            if (EA !== null) {
                var Z9 = t.baseState;
                G1 = 0, dB = CQ = q0 = null, n1 = EA;
                do {
                    var {
                        lane: zB,
                        eventTime: n5
                    } = n1;
                    if ((n & zB) === zB) {
                        dB !== null && (dB = dB.next = {
                            eventTime: n5,
                            lane: 0,
                            tag: n1.tag,
                            payload: n1.payload,
                            callback: n1.callback,
                            next: null
                        });
                        A: {
                            var u3 = O,
                                b = n1;
                            switch (zB = T, n5 = f, b.tag) {
                                case 1:
                                    if (u3 = b.payload, typeof u3 === "function") {
                                        Z9 = u3.call(n5, Z9, zB);
                                        break A
                                    }
                                    Z9 = u3;
                                    break A;
                                case 3:
                                    u3.flags = u3.flags & -65537 | 128;
                                case 0:
                                    if (u3 = b.payload, zB = typeof u3 === "function" ? u3.call(n5, Z9, zB) : u3, zB === null || zB === void 0) break A;
                                    Z9 = G({}, Z9, zB);
                                    break A;
                                case 2:
                                    eD = !0
                            }
                        }
                        n1.callback !== null && n1.lane !== 0 && (O.flags |= 64, zB = t.effects, zB === null ? t.effects = [n1] : zB.push(n1))
                    } else n5 = {
                        eventTime: n5,
                        lane: zB,
                        tag: n1.tag,
                        payload: n1.payload,
                        callback: n1.callback,
                        next: null
                    }, dB === null ? (CQ = dB = n5, q0 = Z9) : dB = dB.next = n5, G1 |= zB;
                    if (n1 = n1.next, n1 === null)
                        if (n1 = t.shared.pending, n1 === null) break;
                        else zB = n1, n1 = zB.next, zB.next = null, t.lastBaseUpdate = zB, t.shared.pending = null
                } while (1);
                if (dB === null && (q0 = Z9), t.baseState = q0, t.firstBaseUpdate = CQ, t.lastBaseUpdate = dB, T = t.shared.interleaved, T !== null) {
                    t = T;
                    do G1 |= t.lane, t = t.next; while (t !== T)
                } else EA === null && (t.shared.lanes = 0);
                UN |= G1, O.lanes = G1, O.memoizedState = Z9
            }
        }

        function dQA(O, T, f) {
            if (O = T.effects, T.effects = null, O !== null)
                for (T = 0; T < O.length; T++) {
                    var n = O[T],
                        t = n.callback;
                    if (t !== null) {
                        if (n.callback = null, n = f, typeof t !== "function") throw Error(Z(191, t));
                        t.call(n)
                    }
                }
        }
        var Dx = {},
            AH = W5(Dx),
            Kz = W5(Dx),
            QJ = W5(Dx);

        function VF(O) {
            if (O === Dx) throw Error(Z(174));
            return O
        }

        function sg(O, T) {
            w4(QJ, T), w4(Kz, O), w4(AH, Dx), O = d(T), u9(AH), w4(AH, O)
        }

        function FN() {
            u9(AH), u9(Kz), u9(QJ)
        }

        function cQA(O) {
            var T = VF(QJ.current),
                f = VF(AH.current);
            T = QA(f, O.type, T), f !== T && (w4(Kz, O), w4(AH, T))
        }

        function Ra(O) {
            Kz.current === O && (u9(AH), u9(Kz))
        }
        var cG = W5(0);

        function BJ(O) {
            for (var T = O; T !== null;) {
                if (T.tag === 13) {
                    var f = T.memoizedState;
                    if (f !== null && (f = f.dehydrated, f === null || mG(f) || dG(f))) return T
                } else if (T.tag === 19 && T.memoizedProps.revealOrder !== void 0) {
                    if ((T.flags & 128) !== 0) return T
                } else if (T.child !== null) {
                    T.child.return = T, T = T.child;
                    continue
                }
                if (T === O) break;
                for (; T.sibling === null;) {
                    if (T.return === null || T.return === O) return null;
                    T = T.return
                }
                T.sibling.return = T.return, T = T.sibling
            }
            return null
        }
        var d1 = [];

        function P0() {
            for (var O = 0; O < d1.length; O++) {
                var T = d1[O];
                K1 ? T._workInProgressVersionPrimary = null : T._workInProgressVersionSecondary = null
            }
            d1.length = 0
        }
        var {
            ReactCurrentDispatcher: U0,
            ReactCurrentBatchConfig: jB
        } = I, $9 = 0, G9 = null, N8 = null, N4 = null, dO = !1, SC = !1, QX = 0, Qj = 0;

        function GJ() {
            throw Error(Z(321))
        }

        function Dz(O, T) {
            if (T === null) return !1;
            for (var f = 0; f < T.length && f < O.length; f++)
                if (!U9(O[f], T[f])) return !1;
            return !0
        }

        function VN(O, T, f, n, t, EA) {
            if ($9 = EA, G9 = T, T.memoizedState = null, T.updateQueue = null, T.lanes = 0, U0.current = O === null || O.memoizedState === null ? _a : $x, O = f(n, t), SC) {
                EA = 0;
                do {
                    if (SC = !1, QX = 0, 25 <= EA) throw Error(Z(301));
                    EA += 1, N4 = N8 = null, T.updateQueue = null, U0.current = wx, O = f(n, t)
                } while (SC)
            }
            if (U0.current = Au, T = N8 !== null && N8.next !== null, $9 = 0, N4 = N8 = G9 = null, dO = !1, T) throw Error(Z(300));
            return O
        }

        function Bj() {
            var O = QX !== 0;
            return QX = 0, O
        }

        function Z8() {
            var O = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return N4 === null ? G9.memoizedState = N4 = O : N4 = N4.next = O, N4
        }

        function _C() {
            if (N8 === null) {
                var O = G9.alternate;
                O = O !== null ? O.memoizedState : null
            } else O = N8.next;
            var T = N4 === null ? G9.memoizedState : N4.next;
            if (T !== null) N4 = T, N8 = O;
            else {
                if (O === null) throw Error(Z(310));
                N8 = O, O = {
                    memoizedState: N8.memoizedState,
                    baseState: N8.baseState,
                    baseQueue: N8.baseQueue,
                    queue: N8.queue,
                    next: null
                }, N4 === null ? G9.memoizedState = N4 = O : N4 = N4.next = O
            }
            return N4
        }

        function Hx(O, T) {
            return typeof T === "function" ? T(O) : T
        }

        function Cx(O) {
            var T = _C(),
                f = T.queue;
            if (f === null) throw Error(Z(311));
            f.lastRenderedReducer = O;
            var n = N8,
                t = n.baseQueue,
                EA = f.pending;
            if (EA !== null) {
                if (t !== null) {
                    var G1 = t.next;
                    t.next = EA.next, EA.next = G1
                }
                n.baseQueue = t = EA, f.pending = null
            }
            if (t !== null) {
                EA = t.next, n = n.baseState;
                var n1 = G1 = null,
                    q0 = null,
                    CQ = EA;
                do {
                    var dB = CQ.lane;
                    if (($9 & dB) === dB) q0 !== null && (q0 = q0.next = {
                        lane: 0,
                        action: CQ.action,
                        hasEagerState: CQ.hasEagerState,
                        eagerState: CQ.eagerState,
                        next: null
                    }), n = CQ.hasEagerState ? CQ.eagerState : O(n, CQ.action);
                    else {
                        var Z9 = {
                            lane: dB,
                            action: CQ.action,
                            hasEagerState: CQ.hasEagerState,
                            eagerState: CQ.eagerState,
                            next: null
                        };
                        q0 === null ? (n1 = q0 = Z9, G1 = n) : q0 = q0.next = Z9, G9.lanes |= dB, UN |= dB
                    }
                    CQ = CQ.next
                } while (CQ !== null && CQ !== EA);
                q0 === null ? G1 = n : q0.next = n1, U9(n, T.memoizedState) || (L9 = !0), T.memoizedState = n, T.baseState = G1, T.baseQueue = q0, f.lastRenderedState = n
            }
            if (O = f.interleaved, O !== null) {
                t = O;
                do EA = t.lane, G9.lanes |= EA, UN |= EA, t = t.next; while (t !== O)
            } else t === null && (f.lanes = 0);
            return [T.memoizedState, f.dispatch]
        }

        function pQA(O) {
            var T = _C(),
                f = T.queue;
            if (f === null) throw Error(Z(311));
            f.lastRenderedReducer = O;
            var {
                dispatch: n,
                pending: t
            } = f, EA = T.memoizedState;
            if (t !== null) {
                f.pending = null;
                var G1 = t = t.next;
                do EA = O(EA, G1.action), G1 = G1.next; while (G1 !== t);
                U9(EA, T.memoizedState) || (L9 = !0), T.memoizedState = EA, T.baseQueue === null && (T.baseState = EA), f.lastRenderedState = EA
            }
            return [EA, n]
        }

        function lQA() {}

        function iQA(O, T) {
            var f = G9,
                n = _C(),
                t = T(),
                EA = !U9(n.memoizedState, t);
            if (EA && (n.memoizedState = t, L9 = !0), n = n.queue, DN(og.bind(null, f, n, O), [O]), n.getSnapshot !== T || EA || N4 !== null && N4.memoizedState.tag & 1) {
                if (f.flags |= 2048, zx(9, KN.bind(null, f, n, t, T), void 0, null), LY === null) throw Error(Z(349));
                ($9 & 30) !== 0 || rg(f, T, t)
            }
            return t
        }

        function rg(O, T, f) {
            O.flags |= 16384, O = {
                getSnapshot: T,
                value: f
            }, T = G9.updateQueue, T === null ? (T = {
                lastEffect: null,
                stores: null
            }, G9.updateQueue = T, T.stores = [O]) : (f = T.stores, f === null ? T.stores = [O] : f.push(O))
        }

        function KN(O, T, f, n) {
            T.value = f, T.getSnapshot = n, nQA(T) && Ex(O)
        }

        function og(O, T, f) {
            return f(function() {
                nQA(T) && Ex(O)
            })
        }

        function nQA(O) {
            var T = O.getSnapshot;
            O = O.value;
            try {
                var f = T();
                return !U9(O, f)
            } catch (n) {
                return !0
            }
        }

        function Ex(O) {
            var T = TK(O, 1);
            T !== null && i5(T, O, 1, -1)
        }

        function Ta(O) {
            var T = Z8();
            return typeof O === "function" && (O = O()), T.memoizedState = T.baseState = O, O = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Hx,
                lastRenderedState: O
            }, T.queue = O, O = O.dispatch = BX.bind(null, G9, O), [T.memoizedState, O]
        }

        function zx(O, T, f, n) {
            return O = {
                tag: O,
                create: T,
                destroy: f,
                deps: n,
                next: null
            }, T = G9.updateQueue, T === null ? (T = {
                lastEffect: null,
                stores: null
            }, G9.updateQueue = T, T.lastEffect = O.next = O) : (f = T.lastEffect, f === null ? T.lastEffect = O.next = O : (n = f.next, f.next = O, O.next = n, T.lastEffect = O)), O
        }

        function tg() {
            return _C().memoizedState
        }

        function Gj(O, T, f, n) {
            var t = Z8();
            G9.flags |= O, t.memoizedState = zx(1 | T, f, void 0, n === void 0 ? null : n)
        }

        function k$(O, T, f, n) {
            var t = _C();
            n = n === void 0 ? null : n;
            var EA = void 0;
            if (N8 !== null) {
                var G1 = N8.memoizedState;
                if (EA = G1.destroy, n !== null && Dz(n, G1.deps)) {
                    t.memoizedState = zx(T, f, EA, n);
                    return
                }
            }
            G9.flags |= O, t.memoizedState = zx(1 | T, f, EA, n)
        }

        function Hz(O, T) {
            return Gj(8390656, 8, O, T)
        }

        function DN(O, T) {
            return k$(2048, 8, O, T)
        }

        function aQA(O, T) {
            return k$(4, 2, O, T)
        }

        function sQA(O, T) {
            return k$(4, 4, O, T)
        }

        function eg(O, T) {
            if (typeof T === "function") return O = O(), T(O),
                function() {
                    T(null)
                };
            if (T !== null && T !== void 0) return O = O(), T.current = O,
                function() {
                    T.current = null
                }
        }

        function cO(O, T, f) {
            return f = f !== null && f !== void 0 ? f.concat([O]) : null, k$(4, 4, eg.bind(null, T, O), f)
        }

        function Ux() {}

        function Pa(O, T) {
            var f = _C();
            T = T === void 0 ? null : T;
            var n = f.memoizedState;
            if (n !== null && T !== null && Dz(T, n[1])) return n[0];
            return f.memoizedState = [O, T], O
        }

        function LFA(O, T) {
            var f = _C();
            T = T === void 0 ? null : T;
            var n = f.memoizedState;
            if (n !== null && T !== null && Dz(T, n[1])) return n[0];
            return O = O(), f.memoizedState = [O, T], O
        }

        function rQA(O, T, f) {
            if (($9 & 21) === 0) return O.baseState && (O.baseState = !1, L9 = !0), O.memoizedState = f;
            return U9(f, T) || (f = X5(), G9.lanes |= f, UN |= f, O.baseState = !0), T
        }

        function SSA(O, T) {
            var f = B4;
            B4 = f !== 0 && 4 > f ? f : 4, O(!0);
            var n = jB.transition;
            jB.transition = {};
            try {
                O(!1), T()
            } finally {
                B4 = f, jB.transition = n
            }
        }

        function ja() {
            return _C().memoizedState
        }

        function ZJ(O, T, f) {
            var n = wN(O);
            if (f = {
                    lane: n,
                    action: f,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, MFA(O)) oQA(T, f);
            else if (f = Vx(O, T, f, n), f !== null) {
                var t = FX();
                i5(f, O, n, t), Sa(f, T, n)
            }
        }

        function BX(O, T, f) {
            var n = wN(O),
                t = {
                    lane: n,
                    action: f,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (MFA(O)) oQA(T, t);
            else {
                var EA = O.alternate;
                if (O.lanes === 0 && (EA === null || EA.lanes === 0) && (EA = T.lastRenderedReducer, EA !== null)) try {
                    var G1 = T.lastRenderedState,
                        n1 = EA(G1, f);
                    if (t.hasEagerState = !0, t.eagerState = n1, U9(n1, G1)) {
                        var q0 = T.interleaved;
                        q0 === null ? (t.next = t, V5(T)) : (t.next = q0.next, q0.next = t), T.interleaved = t;
                        return
                    }
                } catch (CQ) {} finally {}
                f = Vx(O, T, t, n), f !== null && (t = FX(), i5(f, O, n, t), Sa(f, T, n))
            }
        }

        function MFA(O) {
            var T = O.alternate;
            return O === G9 || T !== null && T === G9
        }

        function oQA(O, T) {
            SC = dO = !0;
            var f = O.pending;
            f === null ? T.next = T : (T.next = f.next, f.next = T), O.pending = T
        }

        function Sa(O, T, f) {
            if ((f & 4194240) !== 0) {
                var n = T.lanes;
                n &= O.pendingLanes, f |= n, T.lanes = f, AJ(O, f)
            }
        }
        var Au = {
                readContext: XF,
                useCallback: GJ,
                useContext: GJ,
                useEffect: GJ,
                useImperativeHandle: GJ,
                useInsertionEffect: GJ,
                useLayoutEffect: GJ,
                useMemo: GJ,
                useReducer: GJ,
                useRef: GJ,
                useState: GJ,
                useDebugValue: GJ,
                useDeferredValue: GJ,
                useTransition: GJ,
                useMutableSource: GJ,
                useSyncExternalStore: GJ,
                useId: GJ,
                unstable_isNewReconciler: !1
            },
            _a = {
                readContext: XF,
                useCallback: function(O, T) {
                    return Z8().memoizedState = [O, T === void 0 ? null : T], O
                },
                useContext: XF,
                useEffect: Hz,
                useImperativeHandle: function(O, T, f) {
                    return f = f !== null && f !== void 0 ? f.concat([O]) : null, Gj(4194308, 4, eg.bind(null, T, O), f)
                },
                useLayoutEffect: function(O, T) {
                    return Gj(4194308, 4, O, T)
                },
                useInsertionEffect: function(O, T) {
                    return Gj(4, 2, O, T)
                },
                useMemo: function(O, T) {
                    var f = Z8();
                    return T = T === void 0 ? null : T, O = O(), f.memoizedState = [O, T], O
                },
                useReducer: function(O, T, f) {
                    var n = Z8();
                    return T = f !== void 0 ? f(T) : T, n.memoizedState = n.baseState = T, O = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: O,
                        lastRenderedState: T
                    }, n.queue = O, O = O.dispatch = ZJ.bind(null, G9, O), [n.memoizedState, O]
                },
                useRef: function(O) {
                    var T = Z8();
                    return O = {
                        current: O
                    }, T.memoizedState = O
                },
                useState: Ta,
                useDebugValue: Ux,
                useDeferredValue: function(O) {
                    return Z8().memoizedState = O
                },
                useTransition: function() {
                    var O = Ta(!1),
                        T = O[0];
                    return O = SSA.bind(null, O[1]), Z8().memoizedState = O, [T, O]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(O, T, f) {
                    var n = G9,
                        t = Z8();
                    if (g3) {
                        if (f === void 0) throw Error(Z(407));
                        f = f()
                    } else {
                        if (f = T(), LY === null) throw Error(Z(349));
                        ($9 & 30) !== 0 || rg(n, T, f)
                    }
                    t.memoizedState = f;
                    var EA = {
                        value: f,
                        getSnapshot: T
                    };
                    return t.queue = EA, Hz(og.bind(null, n, EA, O), [O]), n.flags |= 2048, zx(9, KN.bind(null, n, EA, f, T), void 0, null), f
                },
                useId: function() {
                    var O = Z8(),
                        T = LY.identifierPrefix;
                    if (g3) {
                        var f = oW,
                            n = rW;
                        f = (n & ~(1 << 32 - P1(n) - 1)).toString(32) + f, T = ":" + T + "R" + f, f = QX++, 0 < f && (T += "H" + f.toString(32)), T += ":"
                    } else f = Qj++, T = ":" + T + "r" + f.toString(32) + ":";
                    return O.memoizedState = T
                },
                unstable_isNewReconciler: !1
            },
            $x = {
                readContext: XF,
                useCallback: Pa,
                useContext: XF,
                useEffect: DN,
                useImperativeHandle: cO,
                useInsertionEffect: aQA,
                useLayoutEffect: sQA,
                useMemo: LFA,
                useReducer: Cx,
                useRef: tg,
                useState: function() {
                    return Cx(Hx)
                },
                useDebugValue: Ux,
                useDeferredValue: function(O) {
                    var T = _C();
                    return rQA(T, N8.memoizedState, O)
                },
                useTransition: function() {
                    var O = Cx(Hx)[0],
                        T = _C().memoizedState;
                    return [O, T]
                },
                useMutableSource: lQA,
                useSyncExternalStore: iQA,
                useId: ja,
                unstable_isNewReconciler: !1
            },
            wx = {
                readContext: XF,
                useCallback: Pa,
                useContext: XF,
                useEffect: DN,
                useImperativeHandle: cO,
                useInsertionEffect: aQA,
                useLayoutEffect: sQA,
                useMemo: LFA,
                useReducer: pQA,
                useRef: tg,
                useState: function() {
                    return pQA(Hx)
                },
                useDebugValue: Ux,
                useDeferredValue: function(O) {
                    var T = _C();
                    return N8 === null ? T.memoizedState = O : rQA(T, N8.memoizedState, O)
                },
                useTransition: function() {
                    var O = pQA(Hx)[0],
                        T = _C().memoizedState;
                    return [O, T]
                },
                useMutableSource: lQA,
                useSyncExternalStore: iQA,
                useId: ja,
                unstable_isNewReconciler: !1
            };

        function GX(O, T) {
            if (O && O.defaultProps) {
                T = G({}, T), O = O.defaultProps;
                for (var f in O) T[f] === void 0 && (T[f] = O[f]);
                return T
            }
            return T
        }

        function y$(O, T, f, n) {
            T = O.memoizedState, f = f(n, T), f = f === null || f === void 0 ? T : G({}, T, f), O.memoizedState = f, O.lanes === 0 && (O.updateQueue.baseState = f)
        }
        var x$ = {
            isMounted: function(O) {
                return (O = O._reactInternals) ? y(O) === O : !1
            },
            enqueueSetState: function(O, T, f) {
                O = O._reactInternals;
                var n = FX(),
                    t = wN(O),
                    EA = Fz(n, t);
                EA.payload = T, f !== void 0 && f !== null && (EA.callback = f), T = Vz(O, EA, t), T !== null && (i5(T, O, t, n), Kx(T, O, t))
            },
            enqueueReplaceState: function(O, T, f) {
                O = O._reactInternals;
                var n = FX(),
                    t = wN(O),
                    EA = Fz(n, t);
                EA.tag = 1, EA.payload = T, f !== void 0 && f !== null && (EA.callback = f), T = Vz(O, EA, t), T !== null && (i5(T, O, t, n), Kx(T, O, t))
            },
            enqueueForceUpdate: function(O, T) {
                O = O._reactInternals;
                var f = FX(),
                    n = wN(O),
                    t = Fz(f, n);
                t.tag = 2, T !== void 0 && T !== null && (t.callback = T), T = Vz(O, t, n), T !== null && (i5(T, O, n, f), Kx(T, O, n))
            }
        };

        function qx(O, T, f, n, t, EA, G1) {
            return O = O.stateNode, typeof O.shouldComponentUpdate === "function" ? O.shouldComponentUpdate(n, EA, G1) : T.prototype && T.prototype.isPureReactComponent ? !JN(f, n) || !JN(t, EA) : !0
        }

        function Zj(O, T, f) {
            var n = !1,
                t = E3,
                EA = T.contextType;
            return typeof EA === "object" && EA !== null ? EA = XF(EA) : (t = ZA(T) ? dA : V9.current, n = T.contextTypes, EA = (n = n !== null && n !== void 0) ? YA(O, t) : E3), T = new T(f, EA), O.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null, T.updater = x$, O.stateNode = T, T._reactInternals = O, n && (O = O.stateNode, O.__reactInternalMemoizedUnmaskedChildContext = t, O.__reactInternalMemoizedMaskedChildContext = EA), T
        }

        function OFA(O, T, f, n) {
            O = T.state, typeof T.componentWillReceiveProps === "function" && T.componentWillReceiveProps(f, n), typeof T.UNSAFE_componentWillReceiveProps === "function" && T.UNSAFE_componentWillReceiveProps(f, n), T.state !== O && x$.enqueueReplaceState(T, T.state, null)
        }

        function tQA(O, T, f, n) {
            var t = O.stateNode;
            t.props = f, t.state = O.memoizedState, t.refs = {}, mO(O);
            var EA = T.contextType;
            typeof EA === "object" && EA !== null ? t.context = XF(EA) : (EA = ZA(T) ? dA : V9.current, t.context = YA(O, EA)), t.state = O.memoizedState, EA = T.getDerivedStateFromProps, typeof EA === "function" && (y$(O, T, EA, f), t.state = O.memoizedState), typeof T.getDerivedStateFromProps === "function" || typeof t.getSnapshotBeforeUpdate === "function" || typeof t.UNSAFE_componentWillMount !== "function" && typeof t.componentWillMount !== "function" || (T = t.state, typeof t.componentWillMount === "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount === "function" && t.UNSAFE_componentWillMount(), T !== t.state && x$.enqueueReplaceState(t, t.state, null), XN(O, f, t, n), t.state = O.memoizedState), typeof t.componentDidMount === "function" && (O.flags |= 4194308)
        }

        function pO(O, T) {
            try {
                var f = "",
                    n = T;
                do f += WN(n), n = n.return; while (n);
                var t = f
            } catch (EA) {
                t = `
Error generating stack: ` + EA.message + `
` + EA.stack
            }
            return {
                value: O,
                source: T,
                stack: t,
                digest: null
            }
        }

        function eQA(O, T, f) {
            return {
                value: O,
                source: null,
                stack: f != null ? f : null,
                digest: T != null ? T : null
            }
        }

        function ABA(O, T) {
            try {
                console.error(T.value)
            } catch (f) {
                setTimeout(function() {
                    throw f
                })
            }
        }
        var Nx = typeof WeakMap === "function" ? WeakMap : Map;

        function Ij(O, T, f) {
            f = Fz(-1, f), f.tag = 3, f.payload = {
                element: null
            };
            var n = T.value;
            return f.callback = function() {
                Kj || (Kj = !0, Fu = n), ABA(O, T)
            }, f
        }

        function QBA(O, T, f) {
            f = Fz(-1, f), f.tag = 3;
            var n = O.type.getDerivedStateFromError;
            if (typeof n === "function") {
                var t = T.value;
                f.payload = function() {
                    return n(t)
                }, f.callback = function() {
                    ABA(O, T)
                }
            }
            var EA = O.stateNode;
            return EA !== null && typeof EA.componentDidCatch === "function" && (f.callback = function() {
                ABA(O, T), typeof n !== "function" && (Uz === null ? Uz = new Set([this]) : Uz.add(this));
                var G1 = T.stack;
                this.componentDidCatch(T.value, {
                    componentStack: G1 !== null ? G1 : ""
                })
            }), f
        }

        function lA(O, T, f) {
            var n = O.pingCache;
            if (n === null) {
                n = O.pingCache = new Nx;
                var t = new Set;
                n.set(T, t)
            } else t = n.get(T), t === void 0 && (t = new Set, n.set(T, t));
            t.has(f) || (t.add(f), O = oa.bind(null, O, T, f), T.then(O, O))
        }

        function MI(O) {
            do {
                var T;
                if (T = O.tag === 13) T = O.memoizedState, T = T !== null ? T.dehydrated !== null ? !0 : !1 : !0;
                if (T) return O;
                O = O.return
            } while (O !== null);
            return null
        }

        function Lx(O, T, f, n, t) {
            if ((O.mode & 1) === 0) return O === T ? O.flags |= 65536 : (O.flags |= 128, f.flags |= 131072, f.flags &= -52805, f.tag === 1 && (f.alternate === null ? f.tag = 17 : (T = Fz(-1, 1), T.tag = 2, Vz(f, T, 1))), f.lanes |= 1), O;
            return O.flags |= 65536, O.lanes = t, O
        }
        var ZX = I.ReactCurrentOwner,
            L9 = !1;

        function IX(O, T, f, n) {
            T.child = O === null ? iQ(T, null, f, n) : z0(T, O.child, f, n)
        }

        function ka(O, T, f, n, t) {
            f = f.render;
            var EA = T.ref;
            if (IV(T, t), n = VN(O, T, f, n, EA, t), f = Bj(), O !== null && !L9) return T.updateQueue = O.updateQueue, T.flags &= -2053, O.lanes &= ~t, KF(O, T, t);
            return g3 && f && aZ(T), T.flags |= 1, IX(O, T, n, t), T.child
        }

        function ya(O, T, f, n, t) {
            if (O === null) {
                var EA = f.type;
                if (typeof EA === "function" && !ea(EA) && EA.defaultProps === void 0 && f.compare === null && f.defaultProps === void 0) return T.tag = 15, T.type = EA, v$(O, T, EA, n, t);
                return O = Nz(f.type, null, n, T, T.mode, t), O.ref = T.ref, O.return = T, T.child = O
            }
            if (EA = O.child, (O.lanes & t) === 0) {
                var G1 = EA.memoizedProps;
                if (f = f.compare, f = f !== null ? f : JN, f(G1, n) && O.ref === T.ref) return KF(O, T, t)
            }
            return T.flags |= 1, O = OY(EA, n), O.ref = T.ref, O.return = T, T.child = O
        }

        function v$(O, T, f, n, t) {
            if (O !== null) {
                var EA = O.memoizedProps;
                if (JN(EA, n) && O.ref === T.ref)
                    if (L9 = !1, T.pendingProps = n = EA, (O.lanes & t) !== 0)(O.flags & 131072) !== 0 && (L9 = !0);
                    else return T.lanes = O.lanes, KF(O, T, t)
            }
            return Qu(O, T, f, n, t)
        }

        function xa(O, T, f) {
            var n = T.pendingProps,
                t = n.children,
                EA = O !== null ? O.memoizedState : null;
            if (n.mode === "hidden")
                if ((T.mode & 1) === 0) T.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, w4(sO, WV), WV |= f;
                else {
                    if ((f & 1073741824) === 0) return O = EA !== null ? EA.baseLanes | f : f, T.lanes = T.childLanes = 1073741824, T.memoizedState = {
                        baseLanes: O,
                        cachePool: null,
                        transitions: null
                    }, T.updateQueue = null, w4(sO, WV), WV |= O, null;
                    T.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, n = EA !== null ? EA.baseLanes : f, w4(sO, WV), WV |= n
                }
            else EA !== null ? (n = EA.baseLanes | f, T.memoizedState = null) : n = f, w4(sO, WV), WV |= n;
            return IX(O, T, t, f), T.child
        }

        function va(O, T) {
            var f = T.ref;
            if (O === null && f !== null || O !== null && O.ref !== f) T.flags |= 512, T.flags |= 2097152
        }

        function Qu(O, T, f, n, t) {
            var EA = ZA(f) ? dA : V9.current;
            if (EA = YA(T, EA), IV(T, t), f = VN(O, T, f, n, EA, t), n = Bj(), O !== null && !L9) return T.updateQueue = O.updateQueue, T.flags &= -2053, O.lanes &= ~t, KF(O, T, t);
            return g3 && n && aZ(T), T.flags |= 1, IX(O, T, f, t), T.child
        }

        function BBA(O, T, f, n, t) {
            if (ZA(f)) {
                var EA = !0;
                E1(T)
            } else EA = !1;
            if (IV(T, t), T.stateNode === null) Ox(O, T), Zj(T, f, n), tQA(T, f, n, t), n = !0;
            else if (O === null) {
                var {
                    stateNode: G1,
                    memoizedProps: n1
                } = T;
                G1.props = n1;
                var q0 = G1.context,
                    CQ = f.contextType;
                typeof CQ === "object" && CQ !== null ? CQ = XF(CQ) : (CQ = ZA(f) ? dA : V9.current, CQ = YA(T, CQ));
                var dB = f.getDerivedStateFromProps,
                    Z9 = typeof dB === "function" || typeof G1.getSnapshotBeforeUpdate === "function";
                Z9 || typeof G1.UNSAFE_componentWillReceiveProps !== "function" && typeof G1.componentWillReceiveProps !== "function" || (n1 !== n || q0 !== CQ) && OFA(T, G1, n, CQ), eD = !1;
                var zB = T.memoizedState;
                G1.state = zB, XN(T, n, G1, t), q0 = T.memoizedState, n1 !== n || zB !== q0 || Q4.current || eD ? (typeof dB === "function" && (y$(T, f, dB, n), q0 = T.memoizedState), (n1 = eD || qx(T, f, n1, n, zB, q0, CQ)) ? (Z9 || typeof G1.UNSAFE_componentWillMount !== "function" && typeof G1.componentWillMount !== "function" || (typeof G1.componentWillMount === "function" && G1.componentWillMount(), typeof G1.UNSAFE_componentWillMount === "function" && G1.UNSAFE_componentWillMount()), typeof G1.componentDidMount === "function" && (T.flags |= 4194308)) : (typeof G1.componentDidMount === "function" && (T.flags |= 4194308), T.memoizedProps = n, T.memoizedState = q0), G1.props = n, G1.state = q0, G1.context = CQ, n = n1) : (typeof G1.componentDidMount === "function" && (T.flags |= 4194308), n = !1)
            } else {
                G1 = T.stateNode, NFA(O, T), n1 = T.memoizedProps, CQ = T.type === T.elementType ? n1 : GX(T.type, n1), G1.props = CQ, Z9 = T.pendingProps, zB = G1.context, q0 = f.contextType, typeof q0 === "object" && q0 !== null ? q0 = XF(q0) : (q0 = ZA(f) ? dA : V9.current, q0 = YA(T, q0));
                var n5 = f.getDerivedStateFromProps;
                (dB = typeof n5 === "function" || typeof G1.getSnapshotBeforeUpdate === "function") || typeof G1.UNSAFE_componentWillReceiveProps !== "function" && typeof G1.componentWillReceiveProps !== "function" || (n1 !== Z9 || zB !== q0) && OFA(T, G1, n, q0), eD = !1, zB = T.memoizedState, G1.state = zB, XN(T, n, G1, t);
                var u3 = T.memoizedState;
                n1 !== Z9 || zB !== u3 || Q4.current || eD ? (typeof n5 === "function" && (y$(T, f, n5, n), u3 = T.memoizedState), (CQ = eD || qx(T, f, CQ, n, zB, u3, q0) || !1) ? (dB || typeof G1.UNSAFE_componentWillUpdate !== "function" && typeof G1.componentWillUpdate !== "function" || (typeof G1.componentWillUpdate === "function" && G1.componentWillUpdate(n, u3, q0), typeof G1.UNSAFE_componentWillUpdate === "function" && G1.UNSAFE_componentWillUpdate(n, u3, q0)), typeof G1.componentDidUpdate === "function" && (T.flags |= 4), typeof G1.getSnapshotBeforeUpdate === "function" && (T.flags |= 1024)) : (typeof G1.componentDidUpdate !== "function" || n1 === O.memoizedProps && zB === O.memoizedState || (T.flags |= 4), typeof G1.getSnapshotBeforeUpdate !== "function" || n1 === O.memoizedProps && zB === O.memoizedState || (T.flags |= 1024), T.memoizedProps = n, T.memoizedState = u3), G1.props = n, G1.state = u3, G1.context = q0, n = CQ) : (typeof G1.componentDidUpdate !== "function" || n1 === O.memoizedProps && zB === O.memoizedState || (T.flags |= 4), typeof G1.getSnapshotBeforeUpdate !== "function" || n1 === O.memoizedProps && zB === O.memoizedState || (T.flags |= 1024), n = !1)
            }
            return ba(O, T, f, n, EA, t)
        }

        function ba(O, T, f, n, t, EA) {
            va(O, T);
            var G1 = (T.flags & 128) !== 0;
            if (!n && !G1) return t && S1(T, f, !1), KF(O, T, EA);
            n = T.stateNode, ZX.current = T;
            var n1 = G1 && typeof f.getDerivedStateFromError !== "function" ? null : n.render();
            return T.flags |= 1, O !== null && G1 ? (T.child = z0(T, O.child, null, EA), T.child = z0(T, null, n1, EA)) : IX(O, T, n1, EA), T.memoizedState = n.state, t && S1(T, f, !0), T.child
        }

        function YV(O) {
            var T = O.stateNode;
            T.pendingContext ? xA(O, T.pendingContext, T.pendingContext !== T.context) : T.context && xA(O, T.context, !1), sg(O, T.containerInfo)
        }

        function Bu(O, T, f, n, t) {
            return jC(), ag(t), T.flags |= 256, IX(O, T, f, n), T.child
        }
        var Cz = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function Mx(O) {
            return {
                baseLanes: O,
                cachePool: null,
                transitions: null
            }
        }

        function RFA(O, T, f) {
            var n = T.pendingProps,
                t = cG.current,
                EA = !1,
                G1 = (T.flags & 128) !== 0,
                n1;
            if ((n1 = G1) || (n1 = O !== null && O.memoizedState === null ? !1 : (t & 2) !== 0), n1) EA = !0, T.flags &= -129;
            else if (O === null || O.memoizedState !== null) t |= 1;
            if (w4(cG, t & 1), O === null) {
                if (ZV(T), O = T.memoizedState, O !== null && (O = O.dehydrated, O !== null)) return (T.mode & 1) === 0 ? T.lanes = 1 : dG(O) ? T.lanes = 8 : T.lanes = 1073741824, null;
                return G1 = n.children, O = n.fallback, EA ? (n = T.mode, EA = T.child, G1 = {
                    mode: "hidden",
                    children: G1
                }, (n & 1) === 0 && EA !== null ? (EA.childLanes = 0, EA.pendingProps = G1) : EA = xx(G1, n, 0, null), O = SK(O, n, f, null), EA.return = T, O.return = T, EA.sibling = O, T.child = EA, T.child.memoizedState = Mx(f), T.memoizedState = Cz, O) : GBA(T, G1)
            }
            if (t = O.memoizedState, t !== null && (n1 = t.dehydrated, n1 !== null)) return TFA(O, T, G1, n, n1, t, f);
            if (EA) {
                EA = n.fallback, G1 = T.mode, t = O.child, n1 = t.sibling;
                var q0 = {
                    mode: "hidden",
                    children: n.children
                };
                return (G1 & 1) === 0 && T.child !== t ? (n = T.child, n.childLanes = 0, n.pendingProps = q0, T.deletions = null) : (n = OY(t, q0), n.subtreeFlags = t.subtreeFlags & 14680064), n1 !== null ? EA = OY(n1, EA) : (EA = SK(EA, G1, f, null), EA.flags |= 2), EA.return = T, n.return = T, n.sibling = EA, T.child = n, n = EA, EA = T.child, G1 = O.child.memoizedState, G1 = G1 === null ? Mx(f) : {
                    baseLanes: G1.baseLanes | f,
                    cachePool: null,
                    transitions: G1.transitions
                }, EA.memoizedState = G1, EA.childLanes = O.childLanes & ~f, T.memoizedState = Cz, n
            }
            return EA = O.child, O = EA.sibling, n = OY(EA, {
                mode: "visible",
                children: n.children
            }), (T.mode & 1) === 0 && (n.lanes = f), n.return = T, n.sibling = null, O !== null && (f = T.deletions, f === null ? (T.deletions = [O], T.flags |= 16) : f.push(O)), T.child = n, T.memoizedState = null, n
        }

        function GBA(O, T) {
            return T = xx({
                mode: "visible",
                children: T
            }, O.mode, 0, null), T.return = O, O.child = T
        }

        function JV(O, T, f, n) {
            return n !== null && ag(n), z0(T, O.child, null, f), O = GBA(T, T.pendingProps.children), O.flags |= 2, T.memoizedState = null, O
        }

        function TFA(O, T, f, n, t, EA, G1) {
            if (f) {
                if (T.flags & 256) return T.flags &= -257, n = eQA(Error(Z(422))), JV(O, T, G1, n);
                if (T.memoizedState !== null) return T.child = O.child, T.flags |= 128, null;
                return EA = n.fallback, t = T.mode, n = xx({
                    mode: "visible",
                    children: n.children
                }, t, 0, null), EA = SK(EA, t, G1, null), EA.flags |= 2, n.return = T, EA.return = T, n.sibling = EA, T.child = n, (T.mode & 1) !== 0 && z0(T, O.child, null, G1), T.child.memoizedState = Mx(G1), T.memoizedState = Cz, EA
            }
            if ((T.mode & 1) === 0) return JV(O, T, G1, null);
            if (dG(t)) return n = U1(t).digest, EA = Error(Z(419)), n = eQA(EA, n, void 0), JV(O, T, G1, n);
            if (f = (G1 & O.childLanes) !== 0, L9 || f) {
                if (n = LY, n !== null) {
                    switch (G1 & -G1) {
                        case 4:
                            t = 2;
                            break;
                        case 16:
                            t = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            t = 32;
                            break;
                        case 536870912:
                            t = 268435456;
                            break;
                        default:
                            t = 0
                    }
                    t = (t & (n.suspendedLanes | G1)) !== 0 ? 0 : t, t !== 0 && t !== EA.retryLane && (EA.retryLane = t, TK(O, t), i5(n, O, t, -1))
                }
                return Eu(), n = eQA(Error(Z(421))), JV(O, T, G1, n)
            }
            if (mG(t)) return T.flags |= 128, T.child = O.child, T = WBA.bind(null, O), nA(t, T), null;
            return O = EA.treeContext, zA && (r7 = O0(t), b6 = T, g3 = !0, wY = null, tW = !1, O !== null && (h3[nZ++] = rW, h3[nZ++] = oW, h3[nZ++] = oD, rW = O.id, oW = O.overflow, oD = T)), T = GBA(T, n.children), T.flags |= 4096, T
        }

        function Gu(O, T, f) {
            O.lanes |= T;
            var n = O.alternate;
            n !== null && (n.lanes |= T), eW(O.return, T, f)
        }

        function fa(O, T, f, n, t) {
            var EA = O.memoizedState;
            EA === null ? O.memoizedState = {
                isBackwards: T,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: f,
                tailMode: t
            } : (EA.isBackwards = T, EA.rendering = null, EA.renderingStartTime = 0, EA.last = n, EA.tail = f, EA.tailMode = t)
        }

        function ha(O, T, f) {
            var n = T.pendingProps,
                t = n.revealOrder,
                EA = n.tail;
            if (IX(O, T, n.children, f), n = cG.current, (n & 2) !== 0) n = n & 1 | 2, T.flags |= 128;
            else {
                if (O !== null && (O.flags & 128) !== 0) A: for (O = T.child; O !== null;) {
                    if (O.tag === 13) O.memoizedState !== null && Gu(O, f, T);
                    else if (O.tag === 19) Gu(O, f, T);
                    else if (O.child !== null) {
                        O.child.return = O, O = O.child;
                        continue
                    }
                    if (O === T) break A;
                    for (; O.sibling === null;) {
                        if (O.return === null || O.return === T) break A;
                        O = O.return
                    }
                    O.sibling.return = O.return, O = O.sibling
                }
                n &= 1
            }
            if (w4(cG, n), (T.mode & 1) === 0) T.memoizedState = null;
            else switch (t) {
                case "forwards":
                    f = T.child;
                    for (t = null; f !== null;) O = f.alternate, O !== null && BJ(O) === null && (t = f), f = f.sibling;
                    f = t, f === null ? (t = T.child, T.child = null) : (t = f.sibling, f.sibling = null), fa(T, !1, t, f, EA);
                    break;
                case "backwards":
                    f = null, t = T.child;
                    for (T.child = null; t !== null;) {
                        if (O = t.alternate, O !== null && BJ(O) === null) {
                            T.child = t;
                            break
                        }
                        O = t.sibling, t.sibling = f, f = t, t = O
                    }
                    fa(T, !0, f, null, EA);
                    break;
                case "together":
                    fa(T, !1, null, null, void 0);
                    break;
                default:
                    T.memoizedState = null
            }
            return T.child
        }

        function Ox(O, T) {
            (T.mode & 1) === 0 && O !== null && (O.alternate = null, T.alternate = null, T.flags |= 2)
        }

        function KF(O, T, f) {
            if (O !== null && (T.dependencies = O.dependencies), UN |= T.lanes, (f & T.childLanes) === 0) return null;
            if (O !== null && T.child !== O.child) throw Error(Z(153));
            if (T.child !== null) {
                O = T.child, f = OY(O, O.pendingProps), T.child = f;
                for (f.return = T; O.sibling !== null;) O = O.sibling, f = f.sibling = OY(O, O.pendingProps), f.return = T;
                f.sibling = null
            }
            return T.child
        }

        function ZBA(O, T, f) {
            switch (T.tag) {
                case 3:
                    YV(T), jC();
                    break;
                case 5:
                    cQA(T);
                    break;
                case 1:
                    ZA(T.type) && E1(T);
                    break;
                case 4:
                    sg(T, T.stateNode.containerInfo);
                    break;
                case 10:
                    l8(T, T.type._context, T.memoizedProps.value);
                    break;
                case 13:
                    var n = T.memoizedState;
                    if (n !== null) {
                        if (n.dehydrated !== null) return w4(cG, cG.current & 1), T.flags |= 128, null;
                        if ((f & T.child.childLanes) !== 0) return RFA(O, T, f);
                        return w4(cG, cG.current & 1), O = KF(O, T, f), O !== null ? O.sibling : null
                    }
                    w4(cG, cG.current & 1);
                    break;
                case 19:
                    if (n = (f & T.childLanes) !== 0, (O.flags & 128) !== 0) {
                        if (n) return ha(O, T, f);
                        T.flags |= 128
                    }
                    var t = T.memoizedState;
                    if (t !== null && (t.rendering = null, t.tail = null, t.lastEffect = null), w4(cG, cG.current), n) break;
                    else return null;
                case 22:
                case 23:
                    return T.lanes = 0, xa(O, T, f)
            }
            return KF(O, T, f)
        }

        function Ez(O) {
            O.flags |= 4
        }

        function QH(O, T) {
            if (O !== null && O.child === T.child) return !0;
            if ((T.flags & 16) !== 0) return !1;
            for (O = T.child; O !== null;) {
                if ((O.flags & 12854) !== 0 || (O.subtreeFlags & 12854) !== 0) return !1;
                O = O.sibling
            }
            return !0
        }
        var Yj, Rx, Zu, HN;
        if (WA) Yj = function(O, T) {
            for (var f = T.child; f !== null;) {
                if (f.tag === 5 || f.tag === 6) KA(O, f.stateNode);
                else if (f.tag !== 4 && f.child !== null) {
                    f.child.return = f, f = f.child;
                    continue
                }
                if (f === T) break;
                for (; f.sibling === null;) {
                    if (f.return === null || f.return === T) return;
                    f = f.return
                }
                f.sibling.return = f.return, f = f.sibling
            }
        }, Rx = function() {}, Zu = function(O, T, f, n, t) {
            if (O = O.memoizedProps, O !== n) {
                var EA = T.stateNode,
                    G1 = VF(AH.current);
                f = sA(EA, f, O, n, t, G1), (T.updateQueue = f) && Ez(T)
            }
        }, HN = function(O, T, f, n) {
            f !== n && Ez(T)
        };
        else if (XA) {
            Yj = function(O, T, f, n) {
                for (var t = T.child; t !== null;) {
                    if (t.tag === 5) {
                        var EA = t.stateNode;
                        f && n && (EA = C3(EA, t.type, t.memoizedProps, t)), KA(O, EA)
                    } else if (t.tag === 6) EA = t.stateNode, f && n && (EA = CZ(EA, t.memoizedProps, t)), KA(O, EA);
                    else if (t.tag !== 4) {
                        if (t.tag === 22 && t.memoizedState !== null) EA = t.child, EA !== null && (EA.return = t), Yj(O, t, !0, !0);
                        else if (t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                    }
                    if (t === T) break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === T) return;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            };
            var ga = function(O, T, f, n) {
                for (var t = T.child; t !== null;) {
                    if (t.tag === 5) {
                        var EA = t.stateNode;
                        f && n && (EA = C3(EA, t.type, t.memoizedProps, t)), p5(O, EA)
                    } else if (t.tag === 6) EA = t.stateNode, f && n && (EA = CZ(EA, t.memoizedProps, t)), p5(O, EA);
                    else if (t.tag !== 4) {
                        if (t.tag === 22 && t.memoizedState !== null) EA = t.child, EA !== null && (EA.return = t), ga(O, t, !0, !0);
                        else if (t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                    }
                    if (t === T) break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === T) return;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            };
            Rx = function(O, T) {
                var f = T.stateNode;
                if (!QH(O, T)) {
                    O = f.containerInfo;
                    var n = h4(O);
                    ga(n, T, !1, !1), f.pendingChildren = n, Ez(T), uG(O, n)
                }
            }, Zu = function(O, T, f, n, t) {
                var {
                    stateNode: EA,
                    memoizedProps: G1
                } = O;
                if ((O = QH(O, T)) && G1 === n) T.stateNode = EA;
                else {
                    var n1 = T.stateNode,
                        q0 = VF(AH.current),
                        CQ = null;
                    G1 !== n && (CQ = sA(n1, f, G1, n, t, q0)), O && CQ === null ? T.stateNode = EA : (EA = l9(EA, CQ, f, G1, n, T, O, n1), SA(EA, f, n, t, q0) && Ez(T), T.stateNode = EA, O ? Ez(T) : Yj(EA, T, !1, !1))
                }
            }, HN = function(O, T, f, n) {
                f !== n ? (O = VF(QJ.current), f = VF(AH.current), T.stateNode = qA(n, O, f, T), Ez(T)) : T.stateNode = O.stateNode
            }
        } else Rx = function() {}, Zu = function() {}, HN = function() {};

        function b$(O, T) {
            if (!g3) switch (O.tailMode) {
                case "hidden":
                    T = O.tail;
                    for (var f = null; T !== null;) T.alternate !== null && (f = T), T = T.sibling;
                    f === null ? O.tail = null : f.sibling = null;
                    break;
                case "collapsed":
                    f = O.tail;
                    for (var n = null; f !== null;) f.alternate !== null && (n = f), f = f.sibling;
                    n === null ? T || O.tail === null ? O.tail = null : O.tail.sibling = null : n.sibling = null
            }
        }

        function IJ(O) {
            var T = O.alternate !== null && O.alternate.child === O.child,
                f = 0,
                n = 0;
            if (T)
                for (var t = O.child; t !== null;) f |= t.lanes | t.childLanes, n |= t.subtreeFlags & 14680064, n |= t.flags & 14680064, t.return = O, t = t.sibling;
            else
                for (t = O.child; t !== null;) f |= t.lanes | t.childLanes, n |= t.subtreeFlags, n |= t.flags, t.return = O, t = t.sibling;
            return O.subtreeFlags |= n, O.childLanes = f, T
        }

        function F8(O, T, f) {
            var n = T.pendingProps;
            switch (d2(T), T.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return IJ(T), null;
                case 1:
                    return ZA(T.type) && jA(), IJ(T), null;
                case 3:
                    if (f = T.stateNode, FN(), u9(Q4), u9(V9), P0(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), O === null || O.child === null) RK(T) ? Ez(T) : O === null || O.memoizedState.isDehydrated && (T.flags & 256) === 0 || (T.flags |= 1024, wY !== null && (Ku(wY), wY = null));
                    return Rx(O, T), IJ(T), null;
                case 5:
                    Ra(T), f = VF(QJ.current);
                    var t = T.type;
                    if (O !== null && T.stateNode != null) Zu(O, T, t, n, f), O.ref !== T.ref && (T.flags |= 512, T.flags |= 2097152);
                    else {
                        if (!n) {
                            if (T.stateNode === null) throw Error(Z(166));
                            return IJ(T), null
                        }
                        if (O = VF(AH.current), RK(T)) {
                            if (!zA) throw Error(Z(175));
                            O = oQ(T.stateNode, T.type, T.memoizedProps, f, O, T, !tW), T.updateQueue = O, O !== null && Ez(T)
                        } else {
                            var EA = wA(t, n, f, O, T);
                            Yj(EA, T, !1, !1), T.stateNode = EA, SA(EA, t, n, f, O) && Ez(T)
                        }
                        T.ref !== null && (T.flags |= 512, T.flags |= 2097152)
                    }
                    return IJ(T), null;
                case 6:
                    if (O && T.stateNode != null) HN(O, T, O.memoizedProps, n);
                    else {
                        if (typeof n !== "string" && T.stateNode === null) throw Error(Z(166));
                        if (O = VF(QJ.current), f = VF(AH.current), RK(T)) {
                            if (!zA) throw Error(Z(176));
                            if (O = T.stateNode, f = T.memoizedProps, n = lB(O, f, T, !tW)) {
                                if (t = b6, t !== null) switch (t.tag) {
                                    case 3:
                                        Q6(t.stateNode.containerInfo, O, f, (t.mode & 1) !== 0);
                                        break;
                                    case 5:
                                        $4(t.type, t.memoizedProps, t.stateNode, O, f, (t.mode & 1) !== 0)
                                }
                            }
                            n && Ez(T)
                        } else T.stateNode = qA(n, O, f, T)
                    }
                    return IJ(T), null;
                case 13:
                    if (u9(cG), n = T.memoizedState, O === null || O.memoizedState !== null && O.memoizedState.dehydrated !== null) {
                        if (g3 && r7 !== null && (T.mode & 1) !== 0 && (T.flags & 128) === 0) tD(), jC(), T.flags |= 98560, t = !1;
                        else if (t = RK(T), n !== null && n.dehydrated !== null) {
                            if (O === null) {
                                if (!t) throw Error(Z(318));
                                if (!zA) throw Error(Z(344));
                                if (t = T.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(Z(317));
                                k9(t, T)
                            } else jC(), (T.flags & 128) === 0 && (T.memoizedState = null), T.flags |= 4;
                            IJ(T), t = !1
                        } else wY !== null && (Ku(wY), wY = null), t = !0;