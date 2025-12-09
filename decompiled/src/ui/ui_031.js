/**
 * Claude Code Decompiled
 * Category: ui
 * File: 31/53
 * Lines: 201662 - 203161 (1500 lines)
 * Original file: cli.js
 */

        return {
            cursor: this.modifyText(A),
            killed: Q
        }
    }
    deleteToLogicalLineEnd() {
        if (this.text[this.offset] === `
`) return this.modifyText(this.right());
        return this.modifyText(this.endOfLogicalLine())
    }
    deleteWordBefore() {
        if (this.isAtStart()) return {
            cursor: this,
            killed: ""
        };
        let A = this.prevWord(),
            Q = this.text.slice(A.offset, this.offset);
        return {
            cursor: A.modifyText(this),
            killed: Q
        }
    }
    deleteWordAfter() {
        if (this.isAtEnd()) return this;
        return this.modifyText(this.nextWord())
    }
    isOverWordChar() {
        let A = this.text[this.offset] ?? "";
        return /\w/.test(A)
    }
    isOverWhitespace() {
        let A = this.text[this.offset] ?? "";
        return /\s/.test(A)
    }
    equals(A) {
        return this.offset === A.offset && this.measuredText === A.measuredText
    }
    isAtStart() {
        return this.offset === 0
    }
    isAtEnd() {
        return this.offset >= this.text.length
    }
    startOfFirstLine() {
        return new q7(this.measuredText, 0, 0)
    }
    startOfLastLine() {
        let A = this.text.lastIndexOf(`
`);
        if (A === -1) return this.startOfLine();
        return new q7(this.measuredText, A + 1, 0)
    }
    get text() {
        return this.measuredText.text
    }
    get columns() {
        return this.measuredText.columns + 1
    }
    getPosition() {
        return this.measuredText.getPositionFromOffset(this.offset)
    }
    getOffset(A) {
        return this.measuredText.getOffsetFromPosition(A)
    }
}
class MrA {
    text;
    startOffset;
    isPrecededByNewline;
    endsWithNewline;
    constructor(A, Q, B, G = !1) {
        this.text = A;
        this.startOffset = Q;
        this.isPrecededByNewline = B;
        this.endsWithNewline = G
    }
    equals(A) {
        return this.text === A.text && this.startOffset === A.startOffset
    }
    get length() {
        return this.text.length + (this.endsWithNewline ? 1 : 0)
    }
}
class gTB {
    columns;
    _wrappedLines;
    text;
    navigationCache;
    graphemeBoundaries;
    constructor(A, Q) {
        this.columns = Q;
        this.text = A.normalize("NFC"), this.navigationCache = new Map
    }
    get wrappedLines() {
        if (!this._wrappedLines) this._wrappedLines = this.measureWrappedText();
        return this._wrappedLines
    }
    getGraphemeBoundaries() {
        if (!this.graphemeBoundaries) {
            this.graphemeBoundaries = [];
            for (let {
                    index: A
                }
                of Id1.segment(this.text)) this.graphemeBoundaries.push(A);
            this.graphemeBoundaries.push(this.text.length)
        }
        return this.graphemeBoundaries
    }
    binarySearchBoundary(A, Q, B) {
        let G = 0,
            Z = A.length - 1,
            I = B ? this.text.length : 0;
        while (G <= Z) {
            let Y = Math.floor((G + Z) / 2),
                J = A[Y];
            if (J === void 0) break;
            if (B)
                if (J > Q) I = J, Z = Y - 1;
                else G = Y + 1;
            else if (J < Q) I = J, G = Y + 1;
            else Z = Y - 1
        }
        return I
    }
    stringIndexToDisplayWidth(A, Q) {
        if (Q <= 0) return 0;
        if (Q >= A.length) return SZ(A);
        return SZ(A.substring(0, Q))
    }
    displayWidthToStringIndex(A, Q) {
        if (Q <= 0) return 0;
        if (!A) return 0;
        if (A === this.text) return this.offsetAtDisplayWidth(Q);
        let B = 0,
            G = 0;
        for (let {
                segment: Z,
                index: I
            }
            of Id1.segment(A)) {
            let Y = SZ(Z);
            if (B + Y > Q) break;
            B += Y, G = I + Z.length
        }
        return G
    }
    offsetAtDisplayWidth(A) {
        if (A <= 0) return 0;
        let Q = 0,
            B = this.getGraphemeBoundaries();
        for (let G = 0; G < B.length - 1; G++) {
            let Z = B[G],
                I = B[G + 1];
            if (Z === void 0 || I === void 0) continue;
            let Y = this.text.substring(Z, I),
                J = SZ(Y);
            if (Q + J > A) return Z;
            Q += J
        }
        return this.text.length
    }
    measureWrappedText() {
        let A = K7A(this.text, this.columns, {
                hard: !0,
                trim: !1
            }),
            Q = [],
            B = 0,
            G = -1,
            Z = A.split(`
`);
        for (let I = 0; I < Z.length; I++) {
            let Y = Z[I],
                J = (W) => I === 0 || W > 0 && this.text[W - 1] === `
`;
            if (Y.length === 0)
                if (G = this.text.indexOf(`
`, G + 1), G !== -1) {
                    let W = G,
                        X = !0;
                    Q.push(new MrA(Y, W, J(W), !0))
                } else {
                    let W = this.text.length;
                    Q.push(new MrA(Y, W, J(W), !1))
                }
            else {
                let W = this.text.indexOf(Y, B);
                if (W === -1) throw Error("Failed to find wrapped line in text");
                B = W + Y.length;
                let X = W + Y.length,
                    F = X < this.text.length && this.text[X] === `
`;
                if (F) G = X;
                Q.push(new MrA(Y, W, J(W), F))
            }
        }
        return Q
    }
    getWrappedText() {
        return this.wrappedLines.map((A) => A.isPrecededByNewline ? A.text : A.text.trimStart())
    }
    getWrappedLines() {
        return this.wrappedLines
    }
    getLine(A) {
        let Q = this.wrappedLines;
        return Q[Math.max(0, Math.min(A, Q.length - 1))]
    }
    getOffsetFromPosition(A) {
        let Q = this.getLine(A.line);
        if (Q.text.length === 0 && Q.endsWithNewline) return Q.startOffset;
        let B = Q.isPrecededByNewline ? 0 : Q.text.length - Q.text.trimStart().length,
            G = A.column + B,
            Z = this.displayWidthToStringIndex(Q.text, G),
            I = Q.startOffset + Z,
            Y = Q.startOffset + Q.text.length,
            J = Y,
            W = SZ(Q.text);
        if (Q.endsWithNewline && A.column > W) J = Y + 1;
        return Math.min(I, J)
    }
    getLineLength(A) {
        let Q = this.getLine(A);
        return SZ(Q.text)
    }
    getPositionFromOffset(A) {
        let Q = this.wrappedLines;
        for (let Z = 0; Z < Q.length; Z++) {
            let I = Q[Z],
                Y = Q[Z + 1];
            if (A >= I.startOffset && (!Y || A < Y.startOffset)) {
                let J = A - I.startOffset,
                    W;
                if (I.isPrecededByNewline) W = this.stringIndexToDisplayWidth(I.text, J);
                else {
                    let X = I.text.length - I.text.trimStart().length;
                    if (J < X) W = 0;
                    else {
                        let F = I.text.trimStart(),
                            V = J - X;
                        W = this.stringIndexToDisplayWidth(F, V)
                    }
                }
                return {
                    line: Z,
                    column: Math.max(0, W)
                }
            }
        }
        let B = Q.length - 1,
            G = this.wrappedLines[B];
        return {
            line: B,
            column: SZ(G.text)
        }
    }
    get lineCount() {
        return this.wrappedLines.length
    }
    withCache(A, Q) {
        let B = this.navigationCache.get(A);
        if (B !== void 0) return B;
        let G = Q();
        return this.navigationCache.set(A, G), G
    }
    nextOffset(A) {
        return this.withCache(`next:${A}`, () => {
            let Q = this.getGraphemeBoundaries();
            return this.binarySearchBoundary(Q, A, !0)
        })
    }
    prevOffset(A) {
        if (A <= 0) return 0;
        return this.withCache(`prev:${A}`, () => {
            let Q = this.getGraphemeBoundaries();
            return this.binarySearchBoundary(Q, A, !1)
        })
    }
}
var LrA = "",
    Zd1 = !1,
    Id1;
var Yd1 = L(() => {
    lf1();
    F7A();
    Id1 = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
    })
});
var f_ = U((rr7, mTB) => {
    var uTB = function(A) {
            return typeof A < "u" && A !== null
        },
        aw6 = function(A) {
            return typeof A === "object"
        },
        sw6 = function(A) {
            return Object.prototype.toString.call(A) === "[object Object]"
        },
        rw6 = function(A) {
            return typeof A === "function"
        },
        ow6 = function(A) {
            return typeof A === "boolean"
        },
        tw6 = function(A) {
            return A instanceof Buffer
        },
        ew6 = function(A) {
            if (uTB(A)) switch (A.constructor) {
                case Uint8Array:
                case Uint8ClampedArray:
                case Int8Array:
                case Uint16Array:
                case Int16Array:
                case Uint32Array:
                case Int32Array:
                case Float32Array:
                case Float64Array:
                    return !0
            }
            return !1
        },
        Aq6 = function(A) {
            return A instanceof ArrayBuffer
        },
        Qq6 = function(A) {
            return typeof A === "string" && A.length > 0
        },
        Bq6 = function(A) {
            return typeof A === "number" && !Number.isNaN(A)
        },
        Gq6 = function(A) {
            return Number.isInteger(A)
        },
        Zq6 = function(A, Q, B) {
            return A >= Q && A <= B
        },
        Iq6 = function(A, Q) {
            return Q.includes(A)
        },
        Yq6 = function(A, Q, B) {
            return Error(`Expected ${Q} for ${A} but received ${B} of type ${typeof B}`)
        },
        Jq6 = function(A, Q) {
            return Q.message = A.message, Q
        };
    mTB.exports = {
        defined: uTB,
        object: aw6,
        plainObject: sw6,
        fn: rw6,
        bool: ow6,
        buffer: tw6,
        typedArray: ew6,
        arrayBuffer: Aq6,
        string: Qq6,
        number: Bq6,
        integer: Gq6,
        inRange: Zq6,
        inArray: Iq6,
        invalidParameterError: Yq6,
        nativeError: Jq6
    }
});
var pTB = U((or7, cTB) => {
    var dTB = () => process.platform === "linux",
        TrA = null,
        Wq6 = () => {
            if (!TrA)
                if (dTB() && process.report) {
                    let A = process.report.excludeNetwork;
                    process.report.excludeNetwork = !0, TrA = process.report.getReport(), process.report.excludeNetwork = A
                } else TrA = {};
            return TrA
        };
    cTB.exports = {
        isLinux: dTB,
        getReport: Wq6
    }
});
var nTB = U((tr7, iTB) => {
    var lTB = UA("fs"),
        Xq6 = (A) => lTB.readFileSync(A, "utf-8"),
        Fq6 = (A) => new Promise((Q, B) => {
            lTB.readFile(A, "utf-8", (G, Z) => {
                if (G) B(G);
                else Q(Z)
            })
        });
    iTB.exports = {
        LDD_PATH: "/usr/bin/ldd",
        readFileSync: Xq6,
        readFile: Fq6
    }
});
var jrA = U((er7, XPB) => {
    var sTB = UA("child_process"),
        {
            isLinux: GGA,
            getReport: rTB
        } = pTB(),
        {
            LDD_PATH: PrA,
            readFile: oTB,
            readFileSync: tTB
        } = nTB(),
        h_, g_, qp = "",
        eTB = () => {
            if (!qp) return new Promise((A) => {
                sTB.exec("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", (Q, B) => {
                    qp = Q ? " " : B, A(qp)
                })
            });
            return qp
        },
        APB = () => {
            if (!qp) try {
                qp = sTB.execSync("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", {
                    encoding: "utf8"
                })
            } catch (A) {
                qp = " "
            }
            return qp
        },
        Np = "glibc",
        QPB = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,
        BGA = "musl",
        Vq6 = (A) => A.includes("libc.musl-") || A.includes("ld-musl-"),
        BPB = () => {
            let A = rTB();
            if (A.header && A.header.glibcVersionRuntime) return Np;
            if (Array.isArray(A.sharedObjects)) {
                if (A.sharedObjects.some(Vq6)) return BGA
            }
            return null
        },
        GPB = (A) => {
            let [Q, B] = A.split(/[\r\n]+/);
            if (Q && Q.includes(Np)) return Np;
            if (B && B.includes(BGA)) return BGA;
            return null
        },
        ZPB = (A) => {
            if (A.includes("musl")) return BGA;
            if (A.includes("GNU C Library")) return Np;
            return null
        },
        Kq6 = async () => {
            if (h_ !== void 0) return h_;
            h_ = null;
            try {
                let A = await oTB(PrA);
                h_ = ZPB(A)
            } catch (A) {}
            return h_
        }, Dq6 = () => {
            if (h_ !== void 0) return h_;
            h_ = null;
            try {
                let A = tTB(PrA);
                h_ = ZPB(A)
            } catch (A) {}
            return h_
        }, IPB = async () => {
            let A = null;
            if (GGA()) {
                if (A = await Kq6(), !A) A = BPB();
                if (!A) {
                    let Q = await eTB();
                    A = GPB(Q)
                }
            }
            return A
        }, YPB = () => {
            let A = null;
            if (GGA()) {
                if (A = Dq6(), !A) A = BPB();
                if (!A) {
                    let Q = APB();
                    A = GPB(Q)
                }
            }
            return A
        }, Hq6 = async () => GGA() && await IPB() !== Np, Cq6 = () => GGA() && YPB() !== Np, Eq6 = async () => {
            if (g_ !== void 0) return g_;
            g_ = null;
            try {
                let Q = (await oTB(PrA)).match(QPB);
                if (Q) g_ = Q[1]
            } catch (A) {}
            return g_
        }, zq6 = () => {
            if (g_ !== void 0) return g_;
            g_ = null;
            try {
                let Q = tTB(PrA).match(QPB);
                if (Q) g_ = Q[1]
            } catch (A) {}
            return g_
        }, JPB = () => {
            let A = rTB();
            if (A.header && A.header.glibcVersionRuntime) return A.header.glibcVersionRuntime;
            return null
        }, aTB = (A) => A.trim().split(/\s+/)[1], WPB = (A) => {
            let [Q, B, G] = A.split(/[\r\n]+/);
            if (Q && Q.includes(Np)) return aTB(Q);
            if (B && G && B.includes(BGA)) return aTB(G);
            return null
        }, Uq6 = async () => {
            let A = null;
            if (GGA()) {
                if (A = await Eq6(), !A) A = JPB();
                if (!A) {
                    let Q = await eTB();
                    A = WPB(Q)
                }
            }
            return A
        }, $q6 = () => {
            let A = null;
            if (GGA()) {
                if (A = zq6(), !A) A = JPB();
                if (!A) {
                    let Q = APB();
                    A = WPB(Q)
                }
            }
            return A
        };
    XPB.exports = {
        GLIBC: Np,
        MUSL: BGA,
        family: IPB,
        familySync: YPB,
        isNonGlibcLinux: Hq6,
        isNonGlibcLinuxSync: Cq6,
        version: Uq6,
        versionSync: $q6
    }
});
var Jd1 = U((Ao7, wq6) => {
    wq6.exports = {
        name: "sharp",
        description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
        version: "0.33.5",
        author: "Lovell Fuller <npm@lovell.info>",
        homepage: "https://sharp.pixelplumbing.com",
        contributors: ["Pierre Inglebert <pierre.inglebert@gmail.com>", "Jonathan Ong <jonathanrichardong@gmail.com>", "Chanon Sajjamanochai <chanon.s@gmail.com>", "Juliano Julio <julianojulio@gmail.com>", "Daniel Gasienica <daniel@gasienica.ch>", "Julian Walker <julian@fiftythree.com>", "Amit Pitaru <pitaru.amit@gmail.com>", "Brandon Aaron <hello.brandon@aaron.sh>", "Andreas Lind <andreas@one.com>", "Maurus Cuelenaere <mcuelenaere@gmail.com>", "Linus Unnebäck <linus@folkdatorn.se>", "Victor Mateevitsi <mvictoras@gmail.com>", "Alaric Holloway <alaric.holloway@gmail.com>", "Bernhard K. Weisshuhn <bkw@codingforce.com>", "Chris Riley <criley@primedia.com>", "David Carley <dacarley@gmail.com>", "John Tobin <john@limelightmobileinc.com>", "Kenton Gray <kentongray@gmail.com>", "Felix Bünemann <Felix.Buenemann@gmail.com>", "Samy Al Zahrani <samyalzahrany@gmail.com>", "Chintan Thakkar <lemnisk8@gmail.com>", "F. Orlando Galashan <frulo@gmx.de>", "Kleis Auke Wolthuizen <info@kleisauke.nl>", "Matt Hirsch <mhirsch@media.mit.edu>", "Matthias Thoemmes <thoemmes@gmail.com>", "Patrick Paskaris <patrick@paskaris.gr>", "Jérémy Lal <kapouer@melix.org>", "Rahul Nanwani <r.nanwani@gmail.com>", "Alice Monday <alice0meta@gmail.com>", "Kristo Jorgenson <kristo.jorgenson@gmail.com>", "YvesBos <yves_bos@outlook.com>", "Guy Maliar <guy@tailorbrands.com>", "Nicolas Coden <nicolas@ncoden.fr>", "Matt Parrish <matt.r.parrish@gmail.com>", "Marcel Bretschneider <marcel.bretschneider@gmail.com>", "Matthew McEachen <matthew+github@mceachen.org>", "Jarda Kotěšovec <jarda.kotesovec@gmail.com>", "Kenric D'Souza <kenric.dsouza@gmail.com>", "Oleh Aleinyk <oleg.aleynik@gmail.com>", "Marcel Bretschneider <marcel.bretschneider@gmail.com>", "Andrea Bianco <andrea.bianco@unibas.ch>", "Rik Heywood <rik@rik.org>", "Thomas Parisot <hi@oncletom.io>", "Nathan Graves <nathanrgraves+github@gmail.com>", "Tom Lokhorst <tom@lokhorst.eu>", "Espen Hovlandsdal <espen@hovlandsdal.com>", "Sylvain Dumont <sylvain.dumont35@gmail.com>", "Alun Davies <alun.owain.davies@googlemail.com>", "Aidan Hoolachan <ajhoolachan21@gmail.com>", "Axel Eirola <axel.eirola@iki.fi>", "Freezy <freezy@xbmc.org>", "Daiz <taneli.vatanen@gmail.com>", "Julian Aubourg <j@ubourg.net>", "Keith Belovay <keith@picthrive.com>", "Michael B. Klein <mbklein@gmail.com>", "Jordan Prudhomme <jordan@raboland.fr>", "Ilya Ovdin <iovdin@gmail.com>", "Andargor <andargor@yahoo.com>", "Paul Neave <paul.neave@gmail.com>", "Brendan Kennedy <brenwken@gmail.com>", "Brychan Bennett-Odlum <git@brychan.io>", "Edward Silverton <e.silverton@gmail.com>", "Roman Malieiev <aromaleev@gmail.com>", "Tomas Szabo <tomas.szabo@deftomat.com>", "Robert O'Rourke <robert@o-rourke.org>", "Guillermo Alfonso Varela Chouciño <guillevch@gmail.com>", "Christian Flintrup <chr@gigahost.dk>", "Manan Jadhav <manan@motionden.com>", "Leon Radley <leon@radley.se>", "alza54 <alza54@thiocod.in>", "Jacob Smith <jacob@frende.me>", "Michael Nutt <michael@nutt.im>", "Brad Parham <baparham@gmail.com>", "Taneli Vatanen <taneli.vatanen@gmail.com>", "Joris Dugué <zaruike10@gmail.com>", "Chris Banks <christopher.bradley.banks@gmail.com>", "Ompal Singh <ompal.hitm09@gmail.com>", "Brodan <christopher.hranj@gmail.com>", "Ankur Parihar <ankur.github@gmail.com>", "Brahim Ait elhaj <brahima@gmail.com>", "Mart Jansink <m.jansink@gmail.com>", "Lachlan Newman <lachnewman007@gmail.com>", "Dennis Beatty <dennis@dcbeatty.com>", "Ingvar Stepanyan <me@rreverser.com>", "Don Denton <don@happycollision.com>"],
        scripts: {
            install: "node install/check",
            clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
            test: "npm run test-lint && npm run test-unit && npm run test-licensing && npm run test-types",
            "test-lint": "semistandard && cpplint",
            "test-unit": "nyc --reporter=lcov --reporter=text --check-coverage --branches=100 mocha",
            "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;LGPL-3.0-or-later;MIT"',
            "test-leak": "./test/leak/leak.sh",
            "test-types": "tsd",
            "package-from-local-build": "node npm/from-local-build",
            "package-from-github-release": "node npm/from-github-release",
            "docs-build": "node docs/build && node docs/search-index/build",
            "docs-serve": "cd docs && npx serve",
            "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
        },
        type: "commonjs",
        main: "lib/index.js",
        types: "lib/index.d.ts",
        files: ["install", "lib", "src/*.{cc,h,gyp}"],
        repository: {
            type: "git",
            url: "git://github.com/lovell/sharp.git"
        },
        keywords: ["jpeg", "png", "webp", "avif", "tiff", "gif", "svg", "jp2", "dzi", "image", "resize", "thumbnail", "crop", "embed", "libvips", "vips"],
        dependencies: {
            color: "^4.2.3",
            "detect-libc": "^2.0.3",
            semver: "^7.6.3"
        },
        optionalDependencies: {
            "@img/sharp-darwin-arm64": "0.33.5",
            "@img/sharp-darwin-x64": "0.33.5",
            "@img/sharp-libvips-darwin-arm64": "1.0.4",
            "@img/sharp-libvips-darwin-x64": "1.0.4",
            "@img/sharp-libvips-linux-arm": "1.0.5",
            "@img/sharp-libvips-linux-arm64": "1.0.4",
            "@img/sharp-libvips-linux-s390x": "1.0.4",
            "@img/sharp-libvips-linux-x64": "1.0.4",
            "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
            "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
            "@img/sharp-linux-arm": "0.33.5",
            "@img/sharp-linux-arm64": "0.33.5",
            "@img/sharp-linux-s390x": "0.33.5",
            "@img/sharp-linux-x64": "0.33.5",
            "@img/sharp-linuxmusl-arm64": "0.33.5",
            "@img/sharp-linuxmusl-x64": "0.33.5",
            "@img/sharp-wasm32": "0.33.5",
            "@img/sharp-win32-ia32": "0.33.5",
            "@img/sharp-win32-x64": "0.33.5"
        },
        devDependencies: {
            "@emnapi/runtime": "^1.2.0",
            "@img/sharp-libvips-dev": "1.0.4",
            "@img/sharp-libvips-dev-wasm32": "1.0.5",
            "@img/sharp-libvips-win32-ia32": "1.0.4",
            "@img/sharp-libvips-win32-x64": "1.0.4",
            "@types/node": "*",
            async: "^3.2.5",
            cc: "^3.0.1",
            emnapi: "^1.2.0",
            "exif-reader": "^2.0.1",
            "extract-zip": "^2.0.1",
            icc: "^3.0.0",
            "jsdoc-to-markdown": "^8.0.3",
            "license-checker": "^25.0.1",
            mocha: "^10.7.3",
            "node-addon-api": "^8.1.0",
            nyc: "^17.0.0",
            prebuild: "^13.0.1",
            semistandard: "^17.0.0",
            "tar-fs": "^3.0.6",
            tsd: "^0.31.1"
        },
        license: "Apache-2.0",
        engines: {
            node: "^18.17.0 || ^20.3.0 || >=21.0.0"
        },
        config: {
            libvips: ">=8.15.3"
        },
        funding: {
            url: "https://opencollective.com/libvips"
        },
        binary: {
            napi_versions: [9]
        },
        semistandard: {
            env: ["mocha"]
        },
        cc: {
            linelength: "120",
            filter: ["build/include"]
        },
        nyc: {
            include: ["lib"]
        },
        tsd: {
            directory: "test/types/"
        }
    }
});
var Xd1 = U((Qo7, $PB) => {
    var {
        spawnSync: SrA
    } = UA("node:child_process"), {
        createHash: qq6
    } = UA("node:crypto"), DPB = Kg1(), Nq6 = Q$A(), Lq6 = P7A(), FPB = jrA(), {
        config: Mq6,
        engines: VPB,
        optionalDependencies: Oq6
    } = Jd1(), Rq6 = process.env.npm_package_config_libvips || Mq6.libvips, HPB = DPB(Rq6).version, Tq6 = ["darwin-arm64", "darwin-x64", "linux-arm", "linux-arm64", "linux-s390x", "linux-x64", "linuxmusl-arm64", "linuxmusl-x64", "win32-ia32", "win32-x64"], _rA = {
        encoding: "utf8",
        shell: !0
    }, Pq6 = (A) => {
        if (A instanceof Error) console.error(`sharp: Installation error: ${A.message}`);
        else console.log(`sharp: ${A}`)
    }, CPB = () => FPB.isNonGlibcLinuxSync() ? FPB.familySync() : "", jq6 = () => `${process.platform}${CPB()}-${process.arch}`, ZGA = () => {
        if (EPB()) return "wasm32";
        let {
            npm_config_arch: A,
            npm_config_platform: Q,
            npm_config_libc: B
        } = process.env, G = typeof B === "string" ? B : CPB();
        return `${Q||process.platform}${G}-${A||process.arch}`
    }, Sq6 = () => {
        try {
            return UA(`@img/sharp-libvips-dev-${ZGA()}/include`)
        } catch {
            try {
                return (() => {
                    throw new Error("Cannot require module " + "@img/sharp-libvips-dev/include");
                })()
            } catch {}
        }
        return ""
    }, _q6 = () => {
        try {
            return (() => {
                throw new Error("Cannot require module " + "@img/sharp-libvips-dev/cplusplus");
            })()
        } catch {}
        return ""
    }, kq6 = () => {
        try {
            return UA(`@img/sharp-libvips-dev-${ZGA()}/lib`)
        } catch {
            try {
                return UA(`@img/sharp-libvips-${ZGA()}/lib`)
            } catch {}
        }
        return ""
    }, yq6 = () => {
        if (process.release?.name === "node" && process.versions) {
            if (!Lq6(process.versions.node, VPB.node)) return {
                found: process.versions.node,
                expected: VPB.node
            }
        }
    }, EPB = () => {
        let {
            CC: A
        } = process.env;
        return Boolean(A && A.endsWith("/emcc"))
    }, xq6 = () => {
        if (process.platform === "darwin" && process.arch === "x64") return (SrA("sysctl sysctl.proc_translated", _rA).stdout || "").trim() === "sysctl.proc_translated: 1";
        return !1
    }, KPB = (A) => qq6("sha512").update(A).digest("hex"), vq6 = () => {
        try {
            let A = KPB(`imgsharp-libvips-${ZGA()}`),
                Q = DPB(Oq6[`@img/sharp-libvips-${ZGA()}`]).version;
            return KPB(`${A}npm:${Q}`).slice(0, 10)
        } catch {}
        return ""
    }, bq6 = () => SrA(`node-gyp rebuild --directory=src ${EPB()?"--nodedir=emscripten":""}`, {
        ..._rA,
        stdio: "inherit"
    }).status, zPB = () => {
        if (process.platform !== "win32") return (SrA("pkg-config --modversion vips-cpp", {
            ..._rA,
            env: {
                ...process.env,
                PKG_CONFIG_PATH: UPB()
            }
        }).stdout || "").trim();
        else return ""
    }, UPB = () => {
        if (process.platform !== "win32") return [(SrA('which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2', _rA).stdout || "").trim(), process.env.PKG_CONFIG_PATH, "/usr/local/lib/pkgconfig", "/usr/lib/pkgconfig", "/usr/local/libdata/pkgconfig", "/usr/libdata/pkgconfig"].filter(Boolean).join(":");
        else return ""
    }, Wd1 = (A, Q, B) => {
        if (B) B(`Detected ${Q}, skipping search for globally-installed libvips`);
        return A
    }, fq6 = (A) => {
        if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === !0) return Wd1(!1, "SHARP_IGNORE_GLOBAL_LIBVIPS", A);
        if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === !0) return Wd1(!0, "SHARP_FORCE_GLOBAL_LIBVIPS", A);
        if (xq6()) return Wd1(!1, "Rosetta", A);
        let Q = zPB();
        return !!Q && Nq6(Q, HPB)
    };
    $PB.exports = {
        minimumLibvipsVersion: HPB,
        prebuiltPlatforms: Tq6,
        buildPlatformArch: ZGA,
        buildSharpLibvipsIncludeDir: Sq6,
        buildSharpLibvipsCPlusPlusDir: _q6,
        buildSharpLibvipsLibDir: kq6,
        isUnsupportedNodeRuntime: yq6,
        runtimePlatformArch: jq6,
        log: Pq6,
        yarnLocator: vq6,
        spawnRebuild: bq6,
        globalLibvipsVersion: zPB,
        pkgConfigPath: UPB,
        useGlobalLibvips: fq6
    }
});
var d$A = U((Go7, qPB) => {
    var {
        familySync: hq6,
        versionSync: gq6
    } = jrA(), {
        runtimePlatformArch: uq6,
        isUnsupportedNodeRuntime: wPB,
        prebuiltPlatforms: mq6,
        minimumLibvipsVersion: dq6
    } = Xd1(), Be = uq6(), cq6 = [`../src/build/Release/sharp-${Be}.node`, "../src/build/Release/sharp-wasm32.node", `@img/sharp-${Be}/sharp.node`, "@img/sharp-wasm32/sharp.node"], Fd1, krA = [];
    for (let A of cq6) try {
        Fd1 = UA(A);
        break
    } catch (Q) {
        krA.push(Q)
    }
    if (Fd1) qPB.exports = Fd1;
    else {
        let [A, Q, B] = ["linux", "darwin", "win32"].map((I) => Be.startsWith(I)), G = [`Could not load the "sharp" module using the ${Be} runtime`];
        krA.forEach((I) => {
            if (I.code !== "MODULE_NOT_FOUND") G.push(`${I.code}: ${I.message}`)
        });
        let Z = krA.map((I) => I.message).join(" ");
        if (G.push("Possible solutions:"), wPB()) {
            let {
                found: I,
                expected: Y
            } = wPB();
            G.push("- Please upgrade Node.js:", `    Found ${I}`, `    Requires ${Y}`)
        } else if (mq6.includes(Be)) {
            let [I, Y] = Be.split("-"), J = I.endsWith("musl") ? " --libc=musl" : "";
            G.push("- Ensure optional dependencies can be installed:", "    npm install --include=optional sharp", "- Ensure your package manager supports multi-platform installation:", "    See https://sharp.pixelplumbing.com/install#cross-platform", "- Add platform-specific dependencies:", `    npm install --os=${I.replace("musl","")}${J} --cpu=${Y} sharp`)
        } else G.push(`- Manually install libvips >= ${dq6}`, "- Add experimental WebAssembly-based dependencies:", "    npm install --cpu=wasm32 sharp", "    npm install @img/sharp-wasm32");
        if (A && /(symbol not found|CXXABI_)/i.test(Z)) try {
            let {
                config: I
            } = UA(`@img/sharp-libvips-${Be}/package`), Y = `${hq6()} ${gq6()}`, J = `${I.musl?"musl":"glibc"} ${I.musl||I.glibc}`;
            G.push("- Update your OS:", `    Found ${Y}`, `    Requires ${J}`)
        } catch (I) {}
        if (A && /\/snap\/core[0-9]{2}/.test(Z)) G.push("- Remove the Node.js Snap, which does not support native modules", "    snap remove node");
        if (Q && /Incompatible library version/.test(Z)) G.push("- Update Homebrew:", "    brew update && brew upgrade vips");
        if (krA.some((I) => I.code === "ERR_DLOPEN_DISABLED")) G.push("- Run Node.js without using the --no-addons flag");
        if (B && /The specified procedure could not be found/.test(Z)) G.push("- Using the canvas package on Windows?", "    See https://sharp.pixelplumbing.com/install#canvas-and-windows", "- Check for outdated versions of sharp in the dependency tree:", "    npm ls sharp");
        throw G.push("- Consult the installation documentation:", "    See https://sharp.pixelplumbing.com/install"), Error(G.join(`
`))
    }
});
var LPB = U((Io7, NPB) => {
    var pq6 = UA("node:util"),
        Vd1 = UA("node:stream"),
        lq6 = f_();
    d$A();
    var iq6 = pq6.debuglog("sharp"),
        Ge = function(A, Q) {
            if (arguments.length === 1 && !lq6.defined(A)) throw Error("Invalid input");
            if (!(this instanceof Ge)) return new Ge(A, Q);
            return Vd1.Duplex.call(this), this.options = {
                topOffsetPre: -1,
                leftOffsetPre: -1,
                widthPre: -1,
                heightPre: -1,
                topOffsetPost: -1,
                leftOffsetPost: -1,
                widthPost: -1,
                heightPost: -1,
                width: -1,
                height: -1,
                canvas: "crop",
                position: 0,
                resizeBackground: [0, 0, 0, 255],
                useExifOrientation: !1,
                angle: 0,
                rotationAngle: 0,
                rotationBackground: [0, 0, 0, 255],
                rotateBeforePreExtract: !1,
                flip: !1,
                flop: !1,
                extendTop: 0,
                extendBottom: 0,
                extendLeft: 0,
                extendRight: 0,
                extendBackground: [0, 0, 0, 255],
                extendWith: "background",
                withoutEnlargement: !1,
                withoutReduction: !1,
                affineMatrix: [],
                affineBackground: [0, 0, 0, 255],
                affineIdx: 0,
                affineIdy: 0,
                affineOdx: 0,
                affineOdy: 0,
                affineInterpolator: this.constructor.interpolators.bilinear,
                kernel: "lanczos3",
                fastShrinkOnLoad: !0,
                tint: [-1, 0, 0, 0],
                flatten: !1,
                flattenBackground: [0, 0, 0],
                unflatten: !1,
                negate: !1,
                negateAlpha: !0,
                medianSize: 0,
                blurSigma: 0,
                precision: "integer",
                minAmpl: 0.2,
                sharpenSigma: 0,
                sharpenM1: 1,
                sharpenM2: 2,
                sharpenX1: 2,
                sharpenY2: 10,
                sharpenY3: 20,
                threshold: 0,
                thresholdGrayscale: !0,
                trimBackground: [],
                trimThreshold: -1,
                trimLineArt: !1,
                gamma: 0,
                gammaOut: 0,
                greyscale: !1,
                normalise: !1,
                normaliseLower: 1,
                normaliseUpper: 99,
                claheWidth: 0,
                claheHeight: 0,
                claheMaxSlope: 3,
                brightness: 1,
                saturation: 1,
                hue: 0,
                lightness: 0,
                booleanBufferIn: null,
                booleanFileIn: "",
                joinChannelIn: [],
                extractChannel: -1,
                removeAlpha: !1,
                ensureAlpha: -1,
                colourspace: "srgb",
                colourspacePipeline: "last",
                composite: [],
                fileOut: "",
                formatOut: "input",
                streamOut: !1,
                keepMetadata: 0,
                withMetadataOrientation: -1,
                withMetadataDensity: 0,
                withIccProfile: "",
                withExif: {},
                withExifMerge: !0,
                resolveWithObject: !1,
                jpegQuality: 80,
                jpegProgressive: !1,
                jpegChromaSubsampling: "4:2:0",
                jpegTrellisQuantisation: !1,
                jpegOvershootDeringing: !1,
                jpegOptimiseScans: !1,
                jpegOptimiseCoding: !0,
                jpegQuantisationTable: 0,
                pngProgressive: !1,
                pngCompressionLevel: 6,
                pngAdaptiveFiltering: !1,
                pngPalette: !1,
                pngQuality: 100,
                pngEffort: 7,
                pngBitdepth: 8,
                pngDither: 1,
                jp2Quality: 80,
                jp2TileHeight: 512,
                jp2TileWidth: 512,
                jp2Lossless: !1,
                jp2ChromaSubsampling: "4:4:4",
                webpQuality: 80,
                webpAlphaQuality: 100,
                webpLossless: !1,
                webpNearLossless: !1,
                webpSmartSubsample: !1,
                webpPreset: "default",
                webpEffort: 4,
                webpMinSize: !1,
                webpMixed: !1,
                gifBitdepth: 8,
                gifEffort: 7,
                gifDither: 1,
                gifInterFrameMaxError: 0,
                gifInterPaletteMaxError: 3,
                gifReuse: !0,
                gifProgressive: !1,
                tiffQuality: 80,
                tiffCompression: "jpeg",
                tiffPredictor: "horizontal",
                tiffPyramid: !1,
                tiffMiniswhite: !1,
                tiffBitdepth: 8,
                tiffTile: !1,
                tiffTileHeight: 256,
                tiffTileWidth: 256,
                tiffXres: 1,
                tiffYres: 1,
                tiffResolutionUnit: "inch",
                heifQuality: 50,
                heifLossless: !1,
                heifCompression: "av1",
                heifEffort: 4,
                heifChromaSubsampling: "4:4:4",
                heifBitdepth: 8,
                jxlDistance: 1,
                jxlDecodingTier: 0,
                jxlEffort: 7,
                jxlLossless: !1,
                rawDepth: "uchar",
                tileSize: 256,
                tileOverlap: 0,
                tileContainer: "fs",
                tileLayout: "dz",
                tileFormat: "last",
                tileDepth: "last",
                tileAngle: 0,
                tileSkipBlanks: -1,
                tileBackground: [255, 255, 255, 255],
                tileCentre: !1,
                tileId: "https://example.com/iiif",
                tileBasename: "",
                timeoutSeconds: 0,
                linearA: [],
                linearB: [],
                debuglog: (B) => {
                    this.emit("warning", B), iq6(B)
                },
                queueListener: function(B) {
                    Ge.queue.emit("change", B)
                }
            }, this.options.input = this._createInputDescriptor(A, Q, {
                allowStream: !0
            }), this
        };
    Object.setPrototypeOf(Ge.prototype, Vd1.Duplex.prototype);
    Object.setPrototypeOf(Ge, Vd1.Duplex);

    function nq6() {
        let A = this.constructor.call(),
            {
                debuglog: Q,
                queueListener: B,
                ...G
            } = this.options;
        if (A.options = structuredClone(G), A.options.debuglog = Q, A.options.queueListener = B, this._isStreamInput()) this.on("finish", () => {
            this._flattenBufferIn(), A.options.input.buffer = this.options.input.buffer, A.emit("finish")
        });
        return A
    }
    Object.assign(Ge.prototype, {
        clone: nq6
    });
    NPB.exports = Ge
});
var Kd1 = U((Yo7, MPB) => {
    MPB.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
});
var RPB = U((Jo7, OPB) => {
    OPB.exports = function(Q) {
        if (!Q || typeof Q === "string") return !1;
        return Q instanceof Array || Array.isArray(Q) || Q.length >= 0 && (Q.splice instanceof Function || Object.getOwnPropertyDescriptor(Q, Q.length - 1) && Q.constructor.name !== "String")
    }
});
var jPB = U((Wo7, PPB) => {
    var aq6 = RPB(),
        sq6 = Array.prototype.concat,
        rq6 = Array.prototype.slice,
        TPB = PPB.exports = function(Q) {
            var B = [];
            for (var G = 0, Z = Q.length; G < Z; G++) {
                var I = Q[G];
                if (aq6(I)) B = sq6.call(B, rq6.call(I));
                else B.push(I)
            }
            return B
        };
    TPB.wrap = function(A) {
        return function() {
            return A(TPB(arguments))
        }
    }
});
var yPB = U((Xo7, kPB) => {
    var p$A = Kd1(),
        l$A = jPB(),
        SPB = Object.hasOwnProperty,
        _PB = Object.create(null);
    for (c$A in p$A)
        if (SPB.call(p$A, c$A)) _PB[p$A[c$A]] = c$A;
    var c$A, tw = kPB.exports = {
        to: {},
        get: {}
    };
    tw.get = function(A) {
        var Q = A.substring(0, 3).toLowerCase(),
            B, G;
        switch (Q) {
            case "hsl":
                B = tw.get.hsl(A), G = "hsl";
                break;
            case "hwb":
                B = tw.get.hwb(A), G = "hwb";
                break;
            default:
                B = tw.get.rgb(A), G = "rgb";
                break
        }
        if (!B) return null;
        return {
            model: G,
            value: B
        }
    };
    tw.get.rgb = function(A) {
        if (!A) return null;
        var Q = /^#([a-f0-9]{3,4})$/i,
            B = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
            G = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
            Z = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
            I = /^(\w+)$/,
            Y = [0, 0, 0, 1],
            J, W, X;
        if (J = A.match(B)) {
            X = J[2], J = J[1];
            for (W = 0; W < 3; W++) {
                var F = W * 2;
                Y[W] = parseInt(J.slice(F, F + 2), 16)
            }
            if (X) Y[3] = parseInt(X, 16) / 255
        } else if (J = A.match(Q)) {
            J = J[1], X = J[3];
            for (W = 0; W < 3; W++) Y[W] = parseInt(J[W] + J[W], 16);
            if (X) Y[3] = parseInt(X + X, 16) / 255
        } else if (J = A.match(G)) {
            for (W = 0; W < 3; W++) Y[W] = parseInt(J[W + 1], 0);
            if (J[4])
                if (J[5]) Y[3] = parseFloat(J[4]) * 0.01;
                else Y[3] = parseFloat(J[4])
        } else if (J = A.match(Z)) {
            for (W = 0; W < 3; W++) Y[W] = Math.round(parseFloat(J[W + 1]) * 2.55);
            if (J[4])
                if (J[5]) Y[3] = parseFloat(J[4]) * 0.01;
                else Y[3] = parseFloat(J[4])
        } else if (J = A.match(I)) {
            if (J[1] === "transparent") return [0, 0, 0, 0];
            if (!SPB.call(p$A, J[1])) return null;
            return Y = p$A[J[1]], Y[3] = 1, Y
        } else return null;
        for (W = 0; W < 3; W++) Y[W] = Lp(Y[W], 0, 255);
        return Y[3] = Lp(Y[3], 0, 1), Y
    };
    tw.get.hsl = function(A) {
        if (!A) return null;
        var Q = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
            B = A.match(Q);
        if (B) {
            var G = parseFloat(B[4]),
                Z = (parseFloat(B[1]) % 360 + 360) % 360,
                I = Lp(parseFloat(B[2]), 0, 100),
                Y = Lp(parseFloat(B[3]), 0, 100),
                J = Lp(isNaN(G) ? 1 : G, 0, 1);
            return [Z, I, Y, J]
        }
        return null
    };
    tw.get.hwb = function(A) {
        if (!A) return null;
        var Q = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
            B = A.match(Q);
        if (B) {
            var G = parseFloat(B[4]),
                Z = (parseFloat(B[1]) % 360 + 360) % 360,
                I = Lp(parseFloat(B[2]), 0, 100),
                Y = Lp(parseFloat(B[3]), 0, 100),
                J = Lp(isNaN(G) ? 1 : G, 0, 1);
            return [Z, I, Y, J]
        }
        return null
    };
    tw.to.hex = function() {
        var A = l$A(arguments);
        return "#" + yrA(A[0]) + yrA(A[1]) + yrA(A[2]) + (A[3] < 1 ? yrA(Math.round(A[3] * 255)) : "")
    };
    tw.to.rgb = function() {
        var A = l$A(arguments);
        return A.length < 4 || A[3] === 1 ? "rgb(" + Math.round(A[0]) + ", " + Math.round(A[1]) + ", " + Math.round(A[2]) + ")" : "rgba(" + Math.round(A[0]) + ", " + Math.round(A[1]) + ", " + Math.round(A[2]) + ", " + A[3] + ")"
    };
    tw.to.rgb.percent = function() {
        var A = l$A(arguments),
            Q = Math.round(A[0] / 255 * 100),
            B = Math.round(A[1] / 255 * 100),
            G = Math.round(A[2] / 255 * 100);
        return A.length < 4 || A[3] === 1 ? "rgb(" + Q + "%, " + B + "%, " + G + "%)" : "rgba(" + Q + "%, " + B + "%, " + G + "%, " + A[3] + ")"
    };
    tw.to.hsl = function() {
        var A = l$A(arguments);
        return A.length < 4 || A[3] === 1 ? "hsl(" + A[0] + ", " + A[1] + "%, " + A[2] + "%)" : "hsla(" + A[0] + ", " + A[1] + "%, " + A[2] + "%, " + A[3] + ")"
    };
    tw.to.hwb = function() {
        var A = l$A(arguments),
            Q = "";
        if (A.length >= 4 && A[3] !== 1) Q = ", " + A[3];
        return "hwb(" + A[0] + ", " + A[1] + "%, " + A[2] + "%" + Q + ")"
    };
    tw.to.keyword = function(A) {
        return _PB[A.slice(0, 3)]
    };

    function Lp(A, Q, B) {
        return Math.min(Math.max(Q, A), B)
    }

    function yrA(A) {
        var Q = Math.round(A).toString(16).toUpperCase();
        return Q.length < 2 ? "0" + Q : Q
    }
});
var Dd1 = U((Fo7, vPB) => {
    var i$A = Kd1(),
        xPB = {};
    for (let A of Object.keys(i$A)) xPB[i$A[A]] = A;
    var g2 = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: ["hex"]
        },
        keyword: {
            channels: 1,
            labels: ["keyword"]
        },
        ansi16: {
            channels: 1,
            labels: ["ansi16"]
        },
        ansi256: {
            channels: 1,
            labels: ["ansi256"]
        },
        hcg: {
            channels: 3,
            labels: ["h", "c", "g"]
        },
        apple: {
            channels: 3,
            labels: ["r16", "g16", "b16"]
        },
        gray: {
            channels: 1,
            labels: ["gray"]
        }
    };
    vPB.exports = g2;
    for (let A of Object.keys(g2)) {
        if (!("channels" in g2[A])) throw Error("missing channels property: " + A);
        if (!("labels" in g2[A])) throw Error("missing channel labels property: " + A);
        if (g2[A].labels.length !== g2[A].channels) throw Error("channel and label counts mismatch: " + A);
        let {
            channels: Q,
            labels: B
        } = g2[A];
        delete g2[A].channels, delete g2[A].labels, Object.defineProperty(g2[A], "channels", {
            value: Q
        }), Object.defineProperty(g2[A], "labels", {
            value: B
        })
    }
    g2.rgb.hsl = function(A) {
        let Q = A[0] / 255,
            B = A[1] / 255,
            G = A[2] / 255,
            Z = Math.min(Q, B, G),
            I = Math.max(Q, B, G),
            Y = I - Z,
            J, W;
        if (I === Z) J = 0;
        else if (Q === I) J = (B - G) / Y;
        else if (B === I) J = 2 + (G - Q) / Y;
        else if (G === I) J = 4 + (Q - B) / Y;
        if (J = Math.min(J * 60, 360), J < 0) J += 360;
        let X = (Z + I) / 2;
        if (I === Z) W = 0;
        else if (X <= 0.5) W = Y / (I + Z);
        else W = Y / (2 - I - Z);
        return [J, W * 100, X * 100]
    };
    g2.rgb.hsv = function(A) {
        let Q, B, G, Z, I, Y = A[0] / 255,
            J = A[1] / 255,
            W = A[2] / 255,
            X = Math.max(Y, J, W),
            F = X - Math.min(Y, J, W),
            V = function(K) {
                return (X - K) / 6 / F + 0.5
            };
        if (F === 0) Z = 0, I = 0;
        else {
            if (I = F / X, Q = V(Y), B = V(J), G = V(W), Y === X) Z = G - B;
            else if (J === X) Z = 0.3333333333333333 + Q - G;
            else if (W === X) Z = 0.6666666666666666 + B - Q;
            if (Z < 0) Z += 1;
            else if (Z > 1) Z -= 1
        }
        return [Z * 360, I * 100, X * 100]
    };
    g2.rgb.hwb = function(A) {
        let Q = A[0],
            B = A[1],
            G = A[2],
            Z = g2.rgb.hsl(A)[0],
            I = 0.00392156862745098 * Math.min(Q, Math.min(B, G));
        return G = 1 - 0.00392156862745098 * Math.max(Q, Math.max(B, G)), [Z, I * 100, G * 100]
    };
    g2.rgb.cmyk = function(A) {
        let Q = A[0] / 255,
            B = A[1] / 255,
            G = A[2] / 255,
            Z = Math.min(1 - Q, 1 - B, 1 - G),
            I = (1 - Q - Z) / (1 - Z) || 0,
            Y = (1 - B - Z) / (1 - Z) || 0,
            J = (1 - G - Z) / (1 - Z) || 0;
        return [I * 100, Y * 100, J * 100, Z * 100]
    };

    function oq6(A, Q) {
        return (A[0] - Q[0]) ** 2 + (A[1] - Q[1]) ** 2 + (A[2] - Q[2]) ** 2
    }
    g2.rgb.keyword = function(A) {
        let Q = xPB[A];
        if (Q) return Q;
        let B = 1 / 0,
            G;
        for (let Z of Object.keys(i$A)) {
            let I = i$A[Z],
                Y = oq6(A, I);
            if (Y < B) B = Y, G = Z
        }
        return G
    };
    g2.keyword.rgb = function(A) {
        return i$A[A]
    };
    g2.rgb.xyz = function(A) {
        let Q = A[0] / 255,
            B = A[1] / 255,
            G = A[2] / 255;
        Q = Q > 0.04045 ? ((Q + 0.055) / 1.055) ** 2.4 : Q / 12.92, B = B > 0.04045 ? ((B + 0.055) / 1.055) ** 2.4 : B / 12.92, G = G > 0.04045 ? ((G + 0.055) / 1.055) ** 2.4 : G / 12.92;
        let Z = Q * 0.4124 + B * 0.3576 + G * 0.1805,
            I = Q * 0.2126 + B * 0.7152 + G * 0.0722,
            Y = Q * 0.0193 + B * 0.1192 + G * 0.9505;
        return [Z * 100, I * 100, Y * 100]
    };
    g2.rgb.lab = function(A) {
        let Q = g2.rgb.xyz(A),
            B = Q[0],
            G = Q[1],
            Z = Q[2];