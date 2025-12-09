/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.993Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 34/34
 * Lines: 385823 - 387317 (1495 lines)
 * Original file: cli.js
 */

                    dA = C(dA);
                    var xA = new K(function(mA, E1) {
                        var S1;
                        jA.ready().then(function() {
                            if (S1 = jA._dbInfo, q.call(YA) === "[object Blob]") return x(S1.db).then(function(P1) {
                                if (P1) return YA;
                                return IA(YA)
                            });
                            return YA
                        }).then(function(P1) {
                            sA(jA._dbInfo, P, function(c1, l1) {
                                if (c1) return E1(c1);
                                try {
                                    var I0 = l1.objectStore(jA._dbInfo.storeName);
                                    if (P1 === null) P1 = void 0;
                                    var e0 = I0.put(P1, dA);
                                    l1.oncomplete = function() {
                                        if (P1 === void 0) P1 = null;
                                        mA(P1)
                                    }, l1.onabort = l1.onerror = function() {
                                        var dQ = e0.error ? e0.error : e0.transaction.error;
                                        E1(dQ)
                                    }
                                } catch (dQ) {
                                    E1(dQ)
                                }
                            })
                        }).catch(E1)
                    });
                    return D(xA, ZA), xA
                }

function K1(dA, YA) {
                    var ZA = this;
                    dA = C(dA);
                    var jA = new K(function(xA, mA) {
                        ZA.ready().then(function() {
                            sA(ZA._dbInfo, P, function(E1, S1) {
                                if (E1) return mA(E1);
                                try {
                                    var P1 = S1.objectStore(ZA._dbInfo.storeName),
                                        c1 = P1.delete(dA);
                                    S1.oncomplete = function() {
                                        xA()
                                    }, S1.onerror = function() {
                                        mA(c1.error)
                                    }, S1.onabort = function() {
                                        var l1 = c1.error ? c1.error : c1.transaction.error;
                                        mA(l1)
                                    }
                                } catch (l1) {
                                    mA(l1)
                                }
                            })
                        }).catch(mA)
                    });
                    return D(jA, YA), jA
                }

function WA(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                sA(YA._dbInfo, P, function(mA, E1) {
                                    if (mA) return xA(mA);
                                    try {
                                        var S1 = E1.objectStore(YA._dbInfo.storeName),
                                            P1 = S1.clear();
                                        E1.oncomplete = function() {
                                            jA()
                                        }, E1.onabort = E1.onerror = function() {
                                            var c1 = P1.error ? P1.error : P1.transaction.error;
                                            xA(c1)
                                        }
                                    } catch (c1) {
                                        xA(c1)
                                    }
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function XA(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                sA(YA._dbInfo, R, function(mA, E1) {
                                    if (mA) return xA(mA);
                                    try {
                                        var S1 = E1.objectStore(YA._dbInfo.storeName),
                                            P1 = S1.count();
                                        P1.onsuccess = function() {
                                            jA(P1.result)
                                        }, P1.onerror = function() {
                                            xA(P1.error)
                                        }
                                    } catch (c1) {
                                        xA(c1)
                                    }
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function zA(dA, YA) {
                    var ZA = this,
                        jA = new K(function(xA, mA) {
                            if (dA < 0) {
                                xA(null);
                                return
                            }
                            ZA.ready().then(function() {
                                sA(ZA._dbInfo, R, function(E1, S1) {
                                    if (E1) return mA(E1);
                                    try {
                                        var P1 = S1.objectStore(ZA._dbInfo.storeName),
                                            c1 = !1,
                                            l1 = P1.openKeyCursor();
                                        l1.onsuccess = function() {
                                            var I0 = l1.result;
                                            if (!I0) {
                                                xA(null);
                                                return
                                            }
                                            if (dA === 0) xA(I0.key);
                                            else if (!c1) c1 = !0, I0.advance(dA);
                                            else xA(I0.key)
                                        }, l1.onerror = function() {
                                            mA(l1.error)
                                        }
                                    } catch (I0) {
                                        mA(I0)
                                    }
                                })
                            }).catch(mA)
                        });
                    return D(jA, YA), jA
                }

                function $A(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                sA(YA._dbInfo, R, function(mA, E1) {
                                    if (mA) return xA(mA);
                                    try {
                                        var S1 = E1.objectStore(YA._dbInfo.storeName),
                                            P1 = S1.openKeyCursor(),
                                            c1 = [];
                                        P1.onsuccess = function() {
                                            var l1 = P1.result;
                                            if (!l1) {
                                                jA(c1);
                                                return
                                            }
                                            c1.push(l1.key), l1.continue()
                                        }, P1.onerror = function() {
                                            xA(P1.error)
                                        }
                                    } catch (l1) {
                                        xA(l1)
                                    }
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function LA(dA, YA) {
                    YA = E.apply(this, arguments);
                    var ZA = this.config();
                    if (dA = typeof dA !== "function" && dA || {}, !dA.name) dA.name = dA.name || ZA.name, dA.storeName = dA.storeName || ZA.storeName;
                    var jA = this,
                        xA;
                    if (!dA.name) xA = K.reject("Invalid arguments");
                    else {
                        var mA = dA.name === ZA.name && jA._dbInfo.db,
                            E1 = mA ? K.resolve(jA._dbInfo.db) : k(dA).then(function(S1) {
                                var P1 = N[dA.name],
                                    c1 = P1.forages;
                                P1.db = S1;
                                for (var l1 = 0; l1 < c1.length; l1++) c1[l1]._dbInfo.db = S1;
                                return S1
                            });
                        if (!dA.storeName) xA = E1.then(function(S1) {
                            p(dA);
                            var P1 = N[dA.name],
                                c1 = P1.forages;
                            S1.close();
                            for (var l1 = 0; l1 < c1.length; l1++) {
                                var I0 = c1[l1];
                                I0._dbInfo.db = null
                            }
                            var e0 = new K(function(dQ, iB) {
                                var EB = X.deleteDatabase(dA.name);
                                EB.onerror = function() {
                                    var m2 = EB.result;
                                    if (m2) m2.close();
                                    iB(EB.error)
                                }, EB.onblocked = function() {
                                    console.warn('dropInstance blocked for database "' + dA.name + '" until all open connections are closed')
                                }, EB.onsuccess = function() {
                                    var m2 = EB.result;
                                    if (m2) m2.close();
                                    dQ(m2)
                                }
                            });
                            return e0.then(function(dQ) {
                                P1.db = dQ;
                                for (var iB = 0; iB < c1.length; iB++) {
                                    var EB = c1[iB];
                                    u(EB._dbInfo)
                                }
                            }).catch(function(dQ) {
                                throw (o(dA, dQ) || K.resolve()).catch(function() {}), dQ
                            })
                        });
                        else xA = E1.then(function(S1) {
                            if (!S1.objectStoreNames.contains(dA.storeName)) return;
                            var P1 = S1.version + 1;
                            p(dA);
                            var c1 = N[dA.name],
                                l1 = c1.forages;
                            S1.close();
                            for (var I0 = 0; I0 < l1.length; I0++) {
                                var e0 = l1[I0];
                                e0._dbInfo.db = null, e0._dbInfo.version = P1
                            }
                            var dQ = new K(function(iB, EB) {
                                var m2 = X.open(dA.name, P1);
                                m2.onerror = function(q4) {
                                    var J7 = m2.result;
                                    J7.close(), EB(q4)
                                }, m2.onupgradeneeded = function() {
                                    var q4 = m2.result;
                                    q4.deleteObjectStore(dA.storeName)
                                }, m2.onsuccess = function() {
                                    var q4 = m2.result;
                                    q4.close(), iB(q4)
                                }
                            });
                            return dQ.then(function(iB) {
                                c1.db = iB;
                                for (var EB = 0; EB < l1.length; EB++) {
                                    var m2 = l1[EB];
                                    m2._dbInfo.db = iB, u(m2._dbInfo)
                                }
                            }).catch(function(iB) {
                                throw (o(dA, iB) || K.resolve()).catch(function() {}), iB
                            })
                        })
                    }
                    return D(xA, YA), xA
                }

var TA = {
                    _driver: "asyncStorage",
                    _initStorage: qA,
                    _support: F(),
                    iterate: yA,
                    getItem: DA,
                    setItem: rA,
                    removeItem: K1,
                    clear: WA,
                    length: XA,
                    key: zA,
                    keys: $A,
                    dropInstance: LA
                };

function eA() {
                    return typeof openDatabase === "function"
                }
                var aA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    I1 = "~~local_forage_type~",
                    w1 = /^~~local_forage_type~([^~]+)~/,
                    PA = "__lfsc__:",
                    B1 = PA.length,
                    Q0 = "arbf",
                    b1 = "blob",
                    Y0 = "si08",
                    x0 = "ui08",
                    u0 = "uic8",
                    k1 = "si16",
                    T0 = "si32",
                    fQ = "ur16",
                    F1 = "ui32",
                    R1 = "fl32",
                    N1 = "fl64",
                    Z0 = B1 + Q0.length,
                    J0 = Object.prototype.toString;

function s1(dA) {
                    var YA = dA.length * 0.75,
                        ZA = dA.length,
                        jA, xA = 0,
                        mA, E1, S1, P1;
                    if (dA[dA.length - 1] === "=") {
                        if (YA--, dA[dA.length - 2] === "=") YA--
                    }
                    var c1 = new ArrayBuffer(YA),
                        l1 = new Uint8Array(c1);
                    for (jA = 0; jA < ZA; jA += 4) mA = aA.indexOf(dA[jA]), E1 = aA.indexOf(dA[jA + 1]), S1 = aA.indexOf(dA[jA + 2]), P1 = aA.indexOf(dA[jA + 3]), l1[xA++] = mA << 2 | E1 >> 4, l1[xA++] = (E1 & 15) << 4 | S1 >> 2, l1[xA++] = (S1 & 3) << 6 | P1 & 63;
                    return c1
                }

function p0(dA) {
                    var YA = new Uint8Array(dA),
                        ZA = "",
                        jA;
                    for (jA = 0; jA < YA.length; jA += 3) ZA += aA[YA[jA] >> 2], ZA += aA[(YA[jA] & 3) << 4 | YA[jA + 1] >> 4], ZA += aA[(YA[jA + 1] & 15) << 2 | YA[jA + 2] >> 6], ZA += aA[YA[jA + 2] & 63];
                    if (YA.length % 3 === 2) ZA = ZA.substring(0, ZA.length - 1) + "=";
                    else if (YA.length % 3 === 1) ZA = ZA.substring(0, ZA.length - 2) + "==";
                    return ZA
                }

function HQ(dA, YA) {
                    var ZA = "";
                    if (dA) ZA = J0.call(dA);
                    if (dA && (ZA === "[object ArrayBuffer]" || dA.buffer && J0.call(dA.buffer) === "[object ArrayBuffer]")) {
                        var jA, xA = PA;
                        if (dA instanceof ArrayBuffer) jA = dA, xA += Q0;
                        else if (jA = dA.buffer, ZA === "[object Int8Array]") xA += Y0;
                        else if (ZA === "[object Uint8Array]") xA += x0;
                        else if (ZA === "[object Uint8ClampedArray]") xA += u0;
                        else if (ZA === "[object Int16Array]") xA += k1;
                        else if (ZA === "[object Uint16Array]") xA += fQ;
                        else if (ZA === "[object Int32Array]") xA += T0;
                        else if (ZA === "[object Uint32Array]") xA += F1;
                        else if (ZA === "[object Float32Array]") xA += R1;
                        else if (ZA === "[object Float64Array]") xA += N1;
                        else YA(Error("Failed to get type for BinaryArray"));
                        YA(xA + p0(jA))
                    } else if (ZA === "[object Blob]") {
                        var mA = new FileReader;
                        mA.onload = function() {
                            var E1 = I1 + dA.type + "~" + p0(this.result);
                            YA(PA + b1 + E1)
                        }, mA.readAsArrayBuffer(dA)
                    } else try {
                        YA(JSON.stringify(dA))
                    } catch (E1) {
                        console.error("Couldn't convert value into a JSON string: ", dA), YA(null, E1)
                    }
                }

function ZB(dA) {
                    if (dA.substring(0, B1) !== PA) return JSON.parse(dA);
                    var YA = dA.substring(Z0),
                        ZA = dA.substring(B1, Z0),
                        jA;
                    if (ZA === b1 && w1.test(YA)) {
                        var xA = YA.match(w1);
                        jA = xA[1], YA = YA.substring(xA[0].length)
                    }
                    var mA = s1(YA);
                    switch (ZA) {
                        case Q0:
                            return mA;
                        case b1:
                            return V([mA], {
                                type: jA
                            });
                        case Y0:
                            return new Int8Array(mA);
                        case x0:
                            return new Uint8Array(mA);
                        case u0:
                            return new Uint8ClampedArray(mA);
                        case k1:
                            return new Int16Array(mA);
                        case fQ:
                            return new Uint16Array(mA);
                        case T0:
                            return new Int32Array(mA);
                        case F1:
                            return new Uint32Array(mA);
                        case R1:
                            return new Float32Array(mA);
                        case N1:
                            return new Float64Array(mA);
                        default:
                            throw Error("Unkown type: " + ZA)
                    }
                }

var rQ = {
                    serialize: HQ,
                    deserialize: ZB,
                    stringToBuffer: s1,
                    bufferToString: p0
                };

function PB(dA, YA, ZA, jA) {
                    dA.executeSql("CREATE TABLE IF NOT EXISTS " + YA.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], ZA, jA)
                }

function IQ(dA) {
                    var YA = this,
                        ZA = {
                            db: null
                        };
                    if (dA)
                        for (var jA in dA) ZA[jA] = typeof dA[jA] !== "string" ? dA[jA].toString() : dA[jA];
                    var xA = new K(function(mA, E1) {
                        try {
                            ZA.db = openDatabase(ZA.name, String(ZA.version), ZA.description, ZA.size)
                        } catch (S1) {
                            return E1(S1)
                        }
                        ZA.db.transaction(function(S1) {
                            PB(S1, ZA, function() {
                                YA._dbInfo = ZA, mA()
                            }, function(P1, c1) {
                                E1(c1)
                            })
                        }, E1)
                    });
                    return ZA.serializer = rQ, xA
                }

function l9(dA, YA, ZA, jA, xA, mA) {
                    dA.executeSql(ZA, jA, xA, function(E1, S1) {
                        if (S1.code === S1.SYNTAX_ERR) E1.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [YA.storeName], function(P1, c1) {
                            if (!c1.rows.length) PB(P1, YA, function() {
                                P1.executeSql(ZA, jA, xA, mA)
                            }, mA);
                            else mA(P1, S1)
                        }, mA);
                        else mA(E1, S1)
                    }, mA)
                }

function h4(dA, YA) {
                    var ZA = this;
                    dA = C(dA);
                    var jA = new K(function(xA, mA) {
                        ZA.ready().then(function() {
                            var E1 = ZA._dbInfo;
                            E1.db.transaction(function(S1) {
                                l9(S1, E1, "SELECT * FROM " + E1.storeName + " WHERE key = ? LIMIT 1", [dA], function(P1, c1) {
                                    var l1 = c1.rows.length ? c1.rows.item(0).value : null;
                                    if (l1) l1 = E1.serializer.deserialize(l1);
                                    xA(l1)
                                }, function(P1, c1) {
                                    mA(c1)
                                })
                            })
                        }).catch(mA)
                    });
                    return D(jA, YA), jA
                }

function p5(dA, YA) {
                    var ZA = this,
                        jA = new K(function(xA, mA) {
                            ZA.ready().then(function() {
                                var E1 = ZA._dbInfo;
                                E1.db.transaction(function(S1) {
                                    l9(S1, E1, "SELECT * FROM " + E1.storeName, [], function(P1, c1) {
                                        var l1 = c1.rows,
                                            I0 = l1.length;
                                        for (var e0 = 0; e0 < I0; e0++) {
                                            var dQ = l1.item(e0),
                                                iB = dQ.value;
                                            if (iB) iB = E1.serializer.deserialize(iB);
                                            if (iB = dA(iB, dQ.key, e0 + 1), iB !== void 0) {
                                                xA(iB);
                                                return
                                            }
                                        }
                                        xA()
                                    }, function(P1, c1) {
                                        mA(c1)
                                    })
                                })
                            }).catch(mA)
                        });
                    return D(jA, YA), jA
                }

function uG(dA, YA, ZA, jA) {
                    var xA = this;
                    dA = C(dA);
                    var mA = new K(function(E1, S1) {
                        xA.ready().then(function() {
                            if (YA === void 0) YA = null;
                            var P1 = YA,
                                c1 = xA._dbInfo;
                            c1.serializer.serialize(YA, function(l1, I0) {
                                if (I0) S1(I0);
                                else c1.db.transaction(function(e0) {
                                    l9(e0, c1, "INSERT OR REPLACE INTO " + c1.storeName + " (key, value) VALUES (?, ?)", [dA, l1], function() {
                                        E1(P1)
                                    }, function(dQ, iB) {
                                        S1(iB)
                                    })
                                }, function(e0) {
                                    if (e0.code === e0.QUOTA_ERR) {
                                        if (jA > 0) {
                                            E1(uG.apply(xA, [dA, P1, ZA, jA - 1]));
                                            return
                                        }
                                        S1(e0)
                                    }
                                })
                            })
                        }).catch(S1)
                    });
                    return D(mA, ZA), mA
                }

function DG(dA, YA, ZA) {
                    return uG.apply(this, [dA, YA, ZA, 1])
                }

function C3(dA, YA) {
                    var ZA = this;
                    dA = C(dA);
                    var jA = new K(function(xA, mA) {
                        ZA.ready().then(function() {
                            var E1 = ZA._dbInfo;
                            E1.db.transaction(function(S1) {
                                l9(S1, E1, "DELETE FROM " + E1.storeName + " WHERE key = ?", [dA], function() {
                                    xA()
                                }, function(P1, c1) {
                                    mA(c1)
                                })
                            })
                        }).catch(mA)
                    });
                    return D(jA, YA), jA
                }

function CZ(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                var mA = YA._dbInfo;
                                mA.db.transaction(function(E1) {
                                    l9(E1, mA, "DELETE FROM " + mA.storeName, [], function() {
                                        jA()
                                    }, function(S1, P1) {
                                        xA(P1)
                                    })
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function LI(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                var mA = YA._dbInfo;
                                mA.db.transaction(function(E1) {
                                    l9(E1, mA, "SELECT COUNT(key) as c FROM " + mA.storeName, [], function(S1, P1) {
                                        var c1 = P1.rows.item(0).c;
                                        jA(c1)
                                    }, function(S1, P1) {
                                        xA(P1)
                                    })
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function e8(dA, YA) {
                    var ZA = this,
                        jA = new K(function(xA, mA) {
                            ZA.ready().then(function() {
                                var E1 = ZA._dbInfo;
                                E1.db.transaction(function(S1) {
                                    l9(S1, E1, "SELECT key FROM " + E1.storeName + " WHERE id = ? LIMIT 1", [dA + 1], function(P1, c1) {
                                        var l1 = c1.rows.length ? c1.rows.item(0).key : null;
                                        xA(l1)
                                    }, function(P1, c1) {
                                        mA(c1)
                                    })
                                })
                            }).catch(mA)
                        });
                    return D(jA, YA), jA
                }

function _5(dA) {
                    var YA = this,
                        ZA = new K(function(jA, xA) {
                            YA.ready().then(function() {
                                var mA = YA._dbInfo;
                                mA.db.transaction(function(E1) {
                                    l9(E1, mA, "SELECT key FROM " + mA.storeName, [], function(S1, P1) {
                                        var c1 = [];
                                        for (var l1 = 0; l1 < P1.rows.length; l1++) c1.push(P1.rows.item(l1).key);
                                        jA(c1)
                                    }, function(S1, P1) {
                                        xA(P1)
                                    })
                                })
                            }).catch(xA)
                        });
                    return D(ZA, dA), ZA
                }

function mG(dA) {
                    return new K(function(YA, ZA) {
                        dA.transaction(function(jA) {
                            jA.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(xA, mA) {
                                var E1 = [];
                                for (var S1 = 0; S1 < mA.rows.length; S1++) E1.push(mA.rows.item(S1).name);
                                YA({
                                    db: dA,
                                    storeNames: E1
                                })
                            }, function(xA, mA) {
                                ZA(mA)
                            })
                        }, function(jA) {
                            ZA(jA)
                        })
                    })
                }

function dG(dA, YA) {
                    YA = E.apply(this, arguments);
                    var ZA = this.config();
                    if (dA = typeof dA !== "function" && dA || {}, !dA.name) dA.name = dA.name || ZA.name, dA.storeName = dA.storeName || ZA.storeName;
                    var jA = this,
                        xA;
                    if (!dA.name) xA = K.reject("Invalid arguments");
                    else xA = new K(function(mA) {
                        var E1;
                        if (dA.name === ZA.name) E1 = jA._dbInfo.db;
                        else E1 = openDatabase(dA.name, "", "", 0);
                        if (!dA.storeName) mA(mG(E1));
                        else mA({
                            db: E1,
                            storeNames: [dA.storeName]
                        })
                    }).then(function(mA) {
                        return new K(function(E1, S1) {
                            mA.db.transaction(function(P1) {
                                function c1(dQ) {
                                    return new K(function(iB, EB) {
                                        P1.executeSql("DROP TABLE IF EXISTS " + dQ, [], function() {
                                            iB()
                                        }, function(m2, q4) {
                                            EB(q4)
                                        })
                                    })
                                }

var l1 = [];
                                for (var I0 = 0, e0 = mA.storeNames.length; I0 < e0; I0++) l1.push(c1(mA.storeNames[I0]));
                                K.all(l1).then(function() {
                                    E1()
                                }).catch(function(dQ) {
                                    S1(dQ)
                                })
                            }, function(P1) {
                                S1(P1)
                            })
                        })
                    });
                    return D(xA, YA), xA
                }

var U1 = {
                    _driver: "webSQLStorage",
                    _initStorage: IQ,
                    _support: eA(),
                    iterate: p5,
                    getItem: h4,
                    setItem: DG,
                    removeItem: C3,
                    clear: CZ,
                    length: LI,
                    key: e8,
                    keys: _5,
                    dropInstance: dG
                };

function nA() {
                    try {
                        return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem
                    } catch (dA) {
                        return !1
                    }
                }

function C1(dA, YA) {
                    var ZA = dA.name + "/";
                    if (dA.storeName !== YA.storeName) ZA += dA.storeName + "/";
                    return ZA
                }

function O1() {
                    var dA = "_localforage_support_test";
                    try {
                        return localStorage.setItem(dA, !0), localStorage.removeItem(dA), !1
                    } catch (YA) {
                        return !0
                    }
                }

function y1() {
                    return !O1() || localStorage.length > 0
                }

function O0(dA) {
                    var YA = this,
                        ZA = {};
                    if (dA)
                        for (var jA in dA) ZA[jA] = dA[jA];
                    if (ZA.keyPrefix = C1(dA, YA._defaultConfig), !y1()) return K.reject();
                    return YA._dbInfo = ZA, ZA.serializer = rQ, K.resolve()
                }

function oQ(dA) {
                    var YA = this,
                        ZA = YA.ready().then(function() {
                            var jA = YA._dbInfo.keyPrefix;
                            for (var xA = localStorage.length - 1; xA >= 0; xA--) {
                                var mA = localStorage.key(xA);
                                if (mA.indexOf(jA) === 0) localStorage.removeItem(mA)
                            }
                        });
                    return D(ZA, dA), ZA
                }

function lB(dA, YA) {
                    var ZA = this;
                    dA = C(dA);
                    var jA = ZA.ready().then(function() {
                        var xA = ZA._dbInfo,
                            mA = localStorage.getItem(xA.keyPrefix + dA);
                        if (mA) mA = xA.serializer.deserialize(mA);
                        return mA
                    });
                    return D(jA, YA), jA
                }

function k9(dA, YA) {
                    var ZA = this,
                        jA = ZA.ready().then(function() {
                            var xA = ZA._dbInfo,
                                mA = xA.keyPrefix,
                                E1 = mA.length,
                                S1 = localStorage.length,
                                P1 = 1;
                            for (var c1 = 0; c1 < S1; c1++) {
                                var l1 = localStorage.key(c1);
                                if (l1.indexOf(mA) !== 0) continue;
                                var I0 = localStorage.getItem(l1);
                                if (I0) I0 = xA.serializer.deserialize(I0);
                                if (I0 = dA(I0, l1.substring(E1), P1++), I0 !== void 0) return I0
                            }
                        });
                    return D(jA, YA), jA
                }

function C6(dA, YA) {
                    var ZA = this,
                        jA = ZA.ready().then(function() {
                            var xA = ZA._dbInfo,
                                mA;
                            try {
                                mA = localStorage.key(dA)
                            } catch (E1) {
                                mA = null
                            }
                            if (mA) mA = mA.substring(xA.keyPrefix.length);
                            return mA
                        });
                    return D(jA, YA), jA
                }

function y9(dA) {
                    var YA = this,
                        ZA = YA.ready().then(function() {
                            var jA = YA._dbInfo,
                                xA = localStorage.length,
                                mA = [];
                            for (var E1 = 0; E1 < xA; E1++) {
                                var S1 = localStorage.key(E1);
                                if (S1.indexOf(jA.keyPrefix) === 0) mA.push(S1.substring(jA.keyPrefix.length))
                            }
                            return mA
                        });
                    return D(ZA, dA), ZA
                }

function A6(dA) {
                    var YA = this,
                        ZA = YA.keys().then(function(jA) {
                            return jA.length
                        });
                    return D(ZA, dA), ZA
                }

function v6(dA, YA) {
                    var ZA = this;
                    dA = C(dA);
                    var jA = ZA.ready().then(function() {
                        var xA = ZA._dbInfo;
                        localStorage.removeItem(xA.keyPrefix + dA)
                    });
                    return D(jA, YA), jA
                }

function w8(dA, YA, ZA) {
                    var jA = this;
                    dA = C(dA);
                    var xA = jA.ready().then(function() {
                        if (YA === void 0) YA = null;
                        var mA = YA;
                        return new K(function(E1, S1) {
                            var P1 = jA._dbInfo;
                            P1.serializer.serialize(YA, function(c1, l1) {
                                if (l1) S1(l1);
                                else try {
                                    localStorage.setItem(P1.keyPrefix + dA, c1), E1(mA)
                                } catch (I0) {
                                    if (I0.name === "QuotaExceededError" || I0.name === "NS_ERROR_DOM_QUOTA_REACHED") S1(I0);
                                    S1(I0)
                                }
                            })
                        })
                    });
                    return D(xA, ZA), xA
                }

function i9(dA, YA) {
                    if (YA = E.apply(this, arguments), dA = typeof dA !== "function" && dA || {}, !dA.name) {
                        var ZA = this.config();
                        dA.name = dA.name || ZA.name, dA.storeName = dA.storeName || ZA.storeName
                    }
                    var jA = this,
                        xA;
                    if (!dA.name) xA = K.reject("Invalid arguments");
                    else xA = new K(function(mA) {
                        if (!dA.storeName) mA(dA.name + "/");
                        else mA(C1(dA, jA._defaultConfig))
                    }).then(function(mA) {
                        for (var E1 = localStorage.length - 1; E1 >= 0; E1--) {
                            var S1 = localStorage.key(E1);
                            if (S1.indexOf(mA) === 0) localStorage.removeItem(S1)
                        }
                    });
                    return D(xA, YA), xA
                }

var Q6 = {
                        _driver: "localStorageWrapper",
                        _initStorage: O0,
                        _support: nA(),
                        iterate: k9,
                        getItem: lB,
                        setItem: w8,
                        removeItem: v6,
                        clear: oQ,
                        length: A6,
                        key: C6,
                        keys: y9,
                        dropInstance: i9
                    },
                    $4 = function(YA, ZA) {
                        return YA === ZA || typeof YA === "number" && typeof ZA === "number" && isNaN(YA) && isNaN(ZA)
                    },
                    n7 = function(YA, ZA) {
                        var jA = YA.length,
                            xA = 0;
                        while (xA < jA) {
                            if ($4(YA[xA], ZA)) return !0;
                            xA++
                        }
                        return !1
                    },
                    B6 = Array.isArray || function(dA) {
                        return Object.prototype.toString.call(dA) === "[object Array]"
                    },
                    k5 = {},
                    g9 = {},
                    g4 = {
                        INDEXEDDB: TA,
                        WEBSQL: U1,
                        LOCALSTORAGE: Q6
                    },
                    q8 = [g4.INDEXEDDB._driver, g4.WEBSQL._driver, g4.LOCALSTORAGE._driver],
                    B8 = ["dropInstance"],
                    W5 = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(B8),
                    u9 = {
                        description: "",
                        driver: q8.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    };

function w4(dA, YA) {
                    dA[YA] = function() {
                        var ZA = arguments;
                        return dA.ready().then(function() {
                            return dA[YA].apply(dA, ZA)
                        })
                    }
                }

function E3() {
                    for (var dA = 1; dA < arguments.length; dA++) {
                        var YA = arguments[dA];
                        if (YA) {
                            for (var ZA in YA)
                                if (YA.hasOwnProperty(ZA))
                                    if (B6(YA[ZA])) arguments[0][ZA] = YA[ZA].slice();
                                    else arguments[0][ZA] = YA[ZA]
                        }
                    }
                    return arguments[0]
                }

var V9 = function() {
                        function dA(YA) {
                            J(this, dA);
                            for (var ZA in g4)
                                if (g4.hasOwnProperty(ZA)) {
                                    var jA = g4[ZA],
                                        xA = jA._driver;
                                    if (this[ZA] = xA, !k5[xA]) this.defineDriver(jA)
                                } this._defaultConfig = E3({}, u9), this._config = E3({}, this._defaultConfig, YA), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                        }
                        return dA.prototype.config = function(ZA) {
                            if ((typeof ZA > "u" ? "undefined" : Y(ZA)) === "object") {
                                if (this._ready) return Error("Can't call config() after localforage has been used.");
                                for (var jA in ZA) {
                                    if (jA === "storeName") ZA[jA] = ZA[jA].replace(/\W/g, "_");
                                    if (jA === "version" && typeof ZA[jA] !== "number") return Error("Database version must be a number.");
                                    this._config[jA] = ZA[jA]
                                }
                                if ("driver" in ZA && ZA.driver) return this.setDriver(this._config.driver);
                                return !0
                            } else if (typeof ZA === "string") return this._config[ZA];
                            else return this._config
                        }, dA.prototype.defineDriver = function(ZA, jA, xA) {
                            var mA = new K(function(E1, S1) {
                                try {
                                    var P1 = ZA._driver,
                                        c1 = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                    if (!ZA._driver) {
                                        S1(c1);
                                        return
                                    }
                                    var l1 = W5.concat("_initStorage");
                                    for (var I0 = 0, e0 = l1.length; I0 < e0; I0++) {
                                        var dQ = l1[I0],
                                            iB = !n7(B8, dQ);
                                        if ((iB || ZA[dQ]) && typeof ZA[dQ] !== "function") {
                                            S1(c1);
                                            return
                                        }
                                    }

var EB = function() {
                                        var J7 = function(AJ) {
                                            return function() {
                                                var B4 = Error("Method " + AJ + " is not implemented by the current driver"),
                                                    QV = K.reject(B4);
                                                return D(QV, arguments[arguments.length - 1]), QV
                                            }
                                        };
                                        for (var X5 = 0, sW = B8.length; X5 < sW; X5++) {
                                            var l5 = B8[X5];
                                            if (!ZA[l5]) ZA[l5] = J7(l5)
                                        }
                                    };
                                    EB();

var m2 = function(J7) {
                                        if (k5[P1]) console.info("Redefining LocalForage driver: " + P1);
                                        k5[P1] = ZA, g9[P1] = J7, E1()
                                    };
                                    if ("_support" in ZA)
                                        if (ZA._support && typeof ZA._support === "function") ZA._support().then(m2, S1);
                                        else m2(!!ZA._support);
                                    else m2(!0)
                                } catch (q4) {
                                    S1(q4)
                                }
                            });
                            return H(mA, jA, xA), mA
                        }, dA.prototype.driver = function() {
                            return this._driver || null
                        }, dA.prototype.getDriver = function(ZA, jA, xA) {
                            var mA = k5[ZA] ? K.resolve(k5[ZA]) : K.reject(Error("Driver not found."));
                            return H(mA, jA, xA), mA
                        }, dA.prototype.getSerializer = function(ZA) {
                            var jA = K.resolve(rQ);
                            return H(jA, ZA), jA
                        }, dA.prototype.ready = function(ZA) {
                            var jA = this,
                                xA = jA._driverSet.then(function() {
                                    if (jA._ready === null) jA._ready = jA._initDriver();
                                    return jA._ready
                                });
                            return H(xA, ZA, ZA), xA
                        }, dA.prototype.setDriver = function(ZA, jA, xA) {
                            var mA = this;
                            if (!B6(ZA)) ZA = [ZA];
                            var E1 = this._getSupportedDrivers(ZA);

function S1() {
                                mA._config.driver = mA.driver()
                            }

function P1(I0) {
                                return mA._extend(I0), S1(), mA._ready = mA._initStorage(mA._config), mA._ready
                            }

function c1(I0) {
                                return function() {
                                    var e0 = 0;

function dQ() {
                                        while (e0 < I0.length) {
                                            var iB = I0[e0];
                                            return e0++, mA._dbInfo = null, mA._ready = null, mA.getDriver(iB).then(P1).catch(dQ)
                                        }
                                        S1();
                                        var EB = Error("No available storage method found.");
                                        return mA._driverSet = K.reject(EB), mA._driverSet
                                    }
                                    return dQ()
                                }
                            }
                            var l1 = this._driverSet !== null ? this._driverSet.catch(function() {
                                return K.resolve()
                            }) : K.resolve();
                            return this._driverSet = l1.then(function() {
                                var I0 = E1[0];
                                return mA._dbInfo = null, mA._ready = null, mA.getDriver(I0).then(function(e0) {
                                    mA._driver = e0._driver, S1(), mA._wrapLibraryMethodsWithReady(), mA._initDriver = c1(E1)
                                })
                            }).catch(function() {
                                S1();
                                var I0 = Error("No available storage method found.");
                                return mA._driverSet = K.reject(I0), mA._driverSet
                            }), H(this._driverSet, jA, xA), this._driverSet
                        }, dA.prototype.supports = function(ZA) {
                            return !!g9[ZA]
                        }, dA.prototype._extend = function(ZA) {
                            E3(this, ZA)
                        }, dA.prototype._getSupportedDrivers = function(ZA) {
                            var jA = [];
                            for (var xA = 0, mA = ZA.length; xA < mA; xA++) {
                                var E1 = ZA[xA];
                                if (this.supports(E1)) jA.push(E1)
                            }
                            return jA
                        }, dA.prototype._wrapLibraryMethodsWithReady = function() {
                            for (var ZA = 0, jA = W5.length; ZA < jA; ZA++) w4(this, W5[ZA])
                        }, dA.prototype.createInstance = function(ZA) {
                            return new dA(ZA)
                        }, dA
                    }(),
                    Q4 = new V9;
                Z.exports = Q4
            }, {
                "3": 3
            }]
        }, {}, [4])(4)
    })
});
var ve2 = U((xe2) => {
    Object.defineProperty(xe2, "__esModule", {
        value: !0
    });
    var ny = l0(),
        VU3 = ye2(),
        IQA = RPA(),
        sn = ny.GLOBAL_OBJ;

class TPA {
        static __initStatic() {
            this.id = "Offline"
        }
        constructor(A = {}) {
            this.name = TPA.id, this.maxStoredEvents = A.maxStoredEvents || 30, this.offlineEventStore = VU3.createInstance({
                name: "sentry/offlineEventStore"
            })
        }
        setupOnce(A, Q) {
            if (this.hub = Q(), "addEventListener" in sn) sn.addEventListener("online", () => {
                this._sendEvents().catch(() => {
                    IQA.DEBUG_BUILD && ny.logger.warn("could not send cached events")
                })
            });
            let B = (G) => {
                if (this.hub && this.hub.getIntegration(TPA)) {
                    if ("navigator" in sn && "onLine" in sn.navigator && !sn.navigator.onLine) return IQA.DEBUG_BUILD && ny.logger.log("Event dropped due to being a offline - caching instead"), this._cacheEvent(G).then((Z) => this._enforceMaxEvents()).catch((Z) => {
                        IQA.DEBUG_BUILD && ny.logger.warn("could not cache event while offline")
                    }), null
                }
                return G
            };
            if (B.id = this.name, A(B), "navigator" in sn && "onLine" in sn.navigator && sn.navigator.onLine) this._sendEvents().catch(() => {
                IQA.DEBUG_BUILD && ny.logger.warn("could not send cached events")
            })
        }
        async _cacheEvent(A) {
            return this.offlineEventStore.setItem(ny.uuid4(), ny.normalize(A))
        }
        async _enforceMaxEvents() {
            let A = [];
            return this.offlineEventStore.iterate((Q, B, G) => {
                A.push({
                    cacheKey: B,
                    event: Q
                })
            }).then(() => this._purgeEvents(A.sort((Q, B) => (B.event.timestamp || 0) - (Q.event.timestamp || 0)).slice(this.maxStoredEvents < A.length ? this.maxStoredEvents : A.length).map((Q) => Q.cacheKey))).catch((Q) => {
                IQA.DEBUG_BUILD && ny.logger.warn("could not enforce max events")
            })
        }
        async _purgeEvent(A) {
            return this.offlineEventStore.removeItem(A)
        }
        async _purgeEvents(A) {
            return Promise.all(A.map((Q) => this._purgeEvent(Q))).then()
        }
        async _sendEvents() {
            return this.offlineEventStore.iterate((A, Q, B) => {
                if (this.hub) this.hub.captureEvent(A), this._purgeEvent(Q).catch((G) => {
                    IQA.DEBUG_BUILD && ny.logger.warn("could not purge event from cache")
                });
                else IQA.DEBUG_BUILD && ny.logger.warn("no hub found - could not send cached event")
            })
        }
    }
    TPA.__initStatic();
    xe2.Offline = TPA
});
var me2 = U((ue2) => {
    Object.defineProperty(ue2, "__esModule", {
        value: !0
    });
    var PPA = P4(),
        fe2 = l0(),
        DU3 = fe2.GLOBAL_OBJ,
        he2 = "ReportingObserver",
        be2 = new WeakMap,
        HU3 = (A = {}) => {
            let Q = A.types || ["crash", "deprecation", "intervention"];

function B(G) {
                if (!be2.has(PPA.getClient())) return;
                for (let Z of G) PPA.withScope((I) => {
                    I.setExtra("url", Z.url);
                    let Y = `ReportingObserver [${Z.type}]`,
                        J = "No details available";
                    if (Z.body) {
                        let W = {};
                        for (let X in Z.body) W[X] = Z.body[X];
                        if (I.setExtra("body", W), Z.type === "crash") {
                            let X = Z.body;
                            J = [X.crashId || "", X.reason || ""].join(" ").trim() || J
                        } else J = Z.body.message || J
                    }
                    PPA.captureMessage(`${Y}: ${J}`)
                })
            }
            return {
                name: he2,
                setupOnce() {
                    if (!fe2.supportsReportingObserver()) return;
                    new DU3.ReportingObserver(B, {
                        buffered: !0,
                        types: Q
                    }).observe()
                },
                setup(G) {
                    be2.set(G, !0)
                }
            }
        },
        ge2 = PPA.defineIntegration(HU3),
        CU3 = PPA.convertIntegrationFnToClass(he2, ge2);
    ue2.ReportingObserver = CU3;
    ue2.reportingObserverIntegration = ge2
});
var ne2 = U((ie2) => {
    Object.defineProperty(ie2, "__esModule", {
        value: !0
    });
    var ce2 = P4(),
        de2 = l0(),
        pe2 = "RewriteFrames",
        UU3 = (A = {}) => {
            let Q = A.root,
                B = A.prefix || "app:///",
                G = A.iteratee || ((Y) => {
                    if (!Y.filename) return Y;
                    let J = /^[a-zA-Z]:\\/.test(Y.filename) || Y.filename.includes("\\") && !Y.filename.includes("/"),
                        W = /^\//.test(Y.filename);
                    if (J || W) {
                        let X = J ? Y.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : Y.filename,
                            F = Q ? de2.relative(Q, X) : de2.basename(X);
                        Y.filename = `${B}${F}`
                    }
                    return Y
                });

function Z(Y) {
                try {
                    return {
                        ...Y,
                        exception: {
                            ...Y.exception,
                            values: Y.exception.values.map((J) => ({
                                ...J,
                                ...J.stacktrace && {
                                    stacktrace: I(J.stacktrace)
                                }
                            }))
                        }
                    }
                } catch (J) {
                    return Y
                }
            }

function I(Y) {
                return {
                    ...Y,
                    frames: Y && Y.frames && Y.frames.map((J) => G(J))
                }
            }
            return {
                name: pe2,
                setupOnce() {},
                processEvent(Y) {
                    let J = Y;
                    if (Y.exception && Array.isArray(Y.exception.values)) J = Z(J);
                    return J
                }
            }
        },
        le2 = ce2.defineIntegration(UU3),
        $U3 = ce2.convertIntegrationFnToClass(pe2, le2);
    ie2.RewriteFrames = $U3;
    ie2.rewriteFramesIntegration = le2
});
var te2 = U((oe2) => {
    Object.defineProperty(oe2, "__esModule", {
        value: !0
    });
    var ae2 = P4(),
        se2 = "SessionTiming",
        NU3 = () => {
            let A = Date.now();
            return {
                name: se2,
                setupOnce() {},
                processEvent(Q) {
                    let B = Date.now();
                    return {
                        ...Q,
                        extra: {
                            ...Q.extra,
                            ["session:start"]: A,
                            ["session:duration"]: B - A,
                            ["session:end"]: B
                        }
                    }
                }
            }
        },
        re2 = ae2.defineIntegration(NU3),
        LU3 = ae2.convertIntegrationFnToClass(se2, re2);
    oe2.SessionTiming = LU3;
    oe2.sessionTimingIntegration = re2
});
var QA9 = U((AA9) => {
    Object.defineProperty(AA9, "__esModule", {
        value: !0
    });
    var RU3 = P4(),
        ee2 = "Transaction",
        TU3 = () => {
            return {
                name: ee2,
                setupOnce() {},
                processEvent(A) {
                    let Q = jU3(A);
                    for (let B = Q.length - 1; B >= 0; B--) {
                        let G = Q[B];
                        if (G.in_app === !0) {
                            A.transaction = SU3(G);
                            break
                        }
                    }
                    return A
                }
            }
        },
        PU3 = RU3.convertIntegrationFnToClass(ee2, TU3);

function jU3(A) {
        let Q = A.exception && A.exception.values && A.exception.values[0];
        return Q && Q.stacktrace && Q.stacktrace.frames || []
    }

function SU3(A) {
        return A.module || A.function ? `${A.module||"?"}/${A.function||"?"}` : "<unknown>"
    }
    AA9.Transaction = PU3
});
var XA9 = U((WA9) => {
    Object.defineProperty(WA9, "__esModule", {
        value: !0
    });
    var Hg = P4(),
        ay = l0(),
        IZ1 = RPA(),
        BA9 = "HttpClient",
        kU3 = (A = {}) => {
            let Q = {
                failedRequestStatusCodes: [
                    [500, 599]
                ],
                failedRequestTargets: [/.*/],
                ...A
            };
            return {
                name: BA9,
                setupOnce() {},
                setup(B) {
                    mU3(B, Q), dU3(B, Q)
                }
            }
        },
        GA9 = Hg.defineIntegration(kU3),
        yU3 = Hg.convertIntegrationFnToClass(BA9, GA9);

function xU3(A, Q, B, G) {
        if (IA9(A, B.status, B.url)) {
            let Z = cU3(Q, G),
                I, Y, J, W;
            if (JA9())[{
                headers: I,
                cookies: J
            }, {
                headers: Y,
                cookies: W
            }] = [{
                cookieHeader: "Cookie",
                obj: Z
            }, {
                cookieHeader: "Set-Cookie",
                obj: B
            }].map(({
                cookieHeader: F,
                obj: V
            }) => {
                let K = fU3(V.headers),
                    D;
                try {
                    let H = K[F] || K[F.toLowerCase()] || void 0;
                    if (H) D = ZA9(H)
                } catch (H) {
                    IZ1.DEBUG_BUILD && ay.logger.log(`Could not extract cookies from header ${F}`)
                }
                return {
                    headers: K,
                    cookies: D
                }
            });
            let X = YA9({
                url: Z.url,
                method: Z.method,
                status: B.status,
                requestHeaders: I,
                responseHeaders: Y,
                requestCookies: J,
                responseCookies: W
            });
            Hg.captureEvent(X)
        }
    }

function vU3(A, Q, B, G) {
        if (IA9(A, Q.status, Q.responseURL)) {
            let Z, I, Y;
            if (JA9()) {
                try {
                    let W = Q.getResponseHeader("Set-Cookie") || Q.getResponseHeader("set-cookie") || void 0;
                    if (W) I = ZA9(W)
                } catch (W) {
                    IZ1.DEBUG_BUILD && ay.logger.log("Could not extract cookies from response headers")
                }
                try {
                    Y = hU3(Q)
                } catch (W) {
                    IZ1.DEBUG_BUILD && ay.logger.log("Could not extract headers from response")
                }
                Z = G
            }
            let J = YA9({
                url: Q.responseURL,
                method: B,
                status: Q.status,
                requestHeaders: Z,
                responseHeaders: Y,
                responseCookies: I
            });
            Hg.captureEvent(J)
        }
    }

function bU3(A) {
        if (A) {
            let Q = A["Content-Length"] || A["content-length"];
            if (Q) return parseInt(Q, 10)
        }
        return
    }

function ZA9(A) {
        return A.split("; ").reduce((Q, B) => {
            let [G, Z] = B.split("=");
            return Q[G] = Z, Q
        }, {})
    }

function fU3(A) {
        let Q = {};
        return A.forEach((B, G) => {
            Q[G] = B
        }), Q
    }

function hU3(A) {
        let Q = A.getAllResponseHeaders();
        if (!Q) return {};
        return Q.split(`\r
`).reduce((B, G) => {
            let [Z, I] = G.split(": ");
            return B[Z] = I, B
        }, {})
    }

function gU3(A, Q) {
        return A.some((B) => {
            if (typeof B === "string") return Q.includes(B);
            return B.test(Q)
        })
    }

function uU3(A, Q) {
        return A.some((B) => {
            if (typeof B === "number") return B === Q;
            return Q >= B[0] && Q <= B[1]
        })
    }

function mU3(A, Q) {
        if (!ay.supportsNativeFetch()) return;
        ay.addFetchInstrumentationHandler((B) => {
            if (Hg.getClient() !== A) return;
            let {
                response: G,
                args: Z
            } = B, [I, Y] = Z;
            if (!G) return;
            xU3(Q, I, G, Y)
        })
    }

function dU3(A, Q) {
        if (!("XMLHttpRequest" in ay.GLOBAL_OBJ)) return;
        ay.addXhrInstrumentationHandler((B) => {
            if (Hg.getClient() !== A) return;
            let G = B.xhr,
                Z = G[ay.SENTRY_XHR_DATA_KEY];
            if (!Z) return;
            let {
                method: I,
                request_headers: Y
            } = Z;
            try {
                vU3(Q, G, I, Y)
            } catch (J) {
                IZ1.DEBUG_BUILD && ay.logger.warn("Error while extracting response event form XHR response", J)
            }
        })
    }

function IA9(A, Q, B) {
        return uU3(A.failedRequestStatusCodes, Q) && gU3(A.failedRequestTargets, B) && !Hg.isSentryRequestUrl(B, Hg.getClient())
    }
