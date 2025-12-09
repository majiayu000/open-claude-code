/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: api_014.js
 * 处理时间: 2025-12-09T03:37:23.794Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * GA         (  6x) = esmImport(module) - ESM import helper
 * UA         (  5x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 14/30
 * Lines: 204640 - 206139 (1500 lines)
 * Original file: cli.js
 */

    ePB.exports = function(A) {
        Object.assign(A.prototype, {
            rotate: ON6,
            flip: RN6,
            flop: TN6,
            affine: PN6,
            sharpen: jN6,
            median: SN6,
            blur: _N6,
            flatten: kN6,
            unflatten: yN6,
            gamma: xN6,
            negate: vN6,
            normalise: bN6,
            normalize: fN6,
            clahe: hN6,
            convolve: gN6,
            threshold: uN6,
            boolean: mN6,
            linear: dN6,
            recomb: cN6,
            modulate: pN6
        })
    }
});
var GjB = U((Uo7, BjB) => {
    var lN6 = brA(),
        Gf = f_(),
        QjB = {
            multiband: "multiband",
            "b-w": "b-w",
            bw: "b-w",
            cmyk: "cmyk",
            srgb: "srgb"
        };

    function iN6(A) {
        return this._setBackgroundColourOption("tint", A), this
    }

    function nN6(A) {
        return this.options.greyscale = Gf.bool(A) ? A : !0, this
    }

    function aN6(A) {
        return this.greyscale(A)
    }

    function sN6(A) {
        if (!Gf.string(A)) throw Gf.invalidParameterError("colourspace", "string", A);
        return this.options.colourspacePipeline = A, this
    }

    function rN6(A) {
        return this.pipelineColourspace(A)
    }

    function oN6(A) {
        if (!Gf.string(A)) throw Gf.invalidParameterError("colourspace", "string", A);
        return this.options.colourspace = A, this
    }

    function tN6(A) {
        return this.toColourspace(A)
    }

    function eN6(A, Q) {
        if (Gf.defined(Q))
            if (Gf.object(Q) || Gf.string(Q)) {
                let B = lN6(Q);
                this.options[A] = [B.red(), B.green(), B.blue(), Math.round(B.alpha() * 255)]
            } else throw Gf.invalidParameterError("background", "object or string", Q)
    }
    BjB.exports = function(A) {
        Object.assign(A.prototype, {
            tint: iN6,
            greyscale: nN6,
            grayscale: aN6,
            pipelineColourspace: sN6,
            pipelineColorspace: rN6,
            toColourspace: oN6,
            toColorspace: tN6,
            _setBackgroundColourOption: eN6
        }), A.colourspace = QjB, A.colorspace = QjB
    }
});
var IjB = U(($o7, ZjB) => {
    var u_ = f_(),
        AL6 = {
            and: "and",
            or: "or",
            eor: "eor"
        };

    function QL6() {
        return this.options.removeAlpha = !0, this
    }

    function BL6(A) {
        if (u_.defined(A))
            if (u_.number(A) && u_.inRange(A, 0, 1)) this.options.ensureAlpha = A;
            else throw u_.invalidParameterError("alpha", "number between 0 and 1", A);
        else this.options.ensureAlpha = 1;
        return this
    }

    function GL6(A) {
        let Q = {
            red: 0,
            green: 1,
            blue: 2,
            alpha: 3
        };
        if (Object.keys(Q).includes(A)) A = Q[A];
        if (u_.integer(A) && u_.inRange(A, 0, 4)) this.options.extractChannel = A;
        else throw u_.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", A);
        return this
    }

    function ZL6(A, Q) {
        if (Array.isArray(A)) A.forEach(function(B) {
            this.options.joinChannelIn.push(this._createInputDescriptor(B, Q))
        }, this);
        else this.options.joinChannelIn.push(this._createInputDescriptor(A, Q));
        return this
    }

    function IL6(A) {
        if (u_.string(A) && u_.inArray(A, ["and", "or", "eor"])) this.options.bandBoolOp = A;
        else throw u_.invalidParameterError("boolOp", "one of: and, or, eor", A);
        return this
    }
    ZjB.exports = function(A) {
        Object.assign(A.prototype, {
            removeAlpha: QL6,
            ensureAlpha: BL6,
            extractChannel: GL6,
            joinChannel: ZL6,
            bandbool: IL6
        }), A.bool = AL6
    }
});
var VjB = U((wo7, FjB) => {
    var qd1 = UA("node:path"),
        Z1 = f_(),
        JGA = d$A(),
        YjB = new Map([
            ["heic", "heif"],
            ["heif", "heif"],
            ["avif", "avif"],
            ["jpeg", "jpeg"],
            ["jpg", "jpeg"],
            ["jpe", "jpeg"],
            ["tile", "tile"],
            ["dz", "tile"],
            ["png", "png"],
            ["raw", "raw"],
            ["tiff", "tiff"],
            ["tif", "tiff"],
            ["webp", "webp"],
            ["gif", "gif"],
            ["jp2", "jp2"],
            ["jpx", "jp2"],
            ["j2k", "jp2"],
            ["j2c", "jp2"],
            ["jxl", "jxl"]
        ]),
        YL6 = /\.(jp[2x]|j2[kc])$/i,
        JjB = () => Error("JP2 output requires libvips with support for OpenJPEG"),
        WjB = (A) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(A)));

    function JL6(A, Q) {
        let B;
        if (!Z1.string(A)) B = Error("Missing output file path");
        else if (Z1.string(this.options.input.file) && qd1.resolve(this.options.input.file) === qd1.resolve(A)) B = Error("Cannot use same file for input and output");
        else if (YL6.test(qd1.extname(A)) && !this.constructor.format.jp2k.output.file) B = JjB();
        if (B)
            if (Z1.fn(Q)) Q(B);
            else return Promise.reject(B);
        else {
            this.options.fileOut = A;
            let G = Error();
            return this._pipeline(Q, G)
        }
        return this
    }

    function WL6(A, Q) {
        if (Z1.object(A)) this._setBooleanOption("resolveWithObject", A.resolveWithObject);
        else if (this.options.resolveWithObject) this.options.resolveWithObject = !1;
        this.options.fileOut = "";
        let B = Error();
        return this._pipeline(Z1.fn(A) ? A : Q, B)
    }

    function XL6() {
        return this.options.keepMetadata |= 1, this
    }

    function FL6(A) {
        if (Z1.object(A))
            for (let [Q, B] of Object.entries(A))
                if (Z1.object(B))
                    for (let [G, Z] of Object.entries(B))
                        if (Z1.string(Z)) this.options.withExif[`exif-${Q.toLowerCase()}-${G}`] = Z;
                        else throw Z1.invalidParameterError(`${Q}.${G}`, "string", Z);
        else throw Z1.invalidParameterError(Q, "object", B);
        else throw Z1.invalidParameterError("exif", "object", A);
        return this.options.withExifMerge = !1, this.keepExif()
    }

    function VL6(A) {
        return this.withExif(A), this.options.withExifMerge = !0, this
    }

    function KL6() {
        return this.options.keepMetadata |= 8, this
    }

    function DL6(A, Q) {
        if (Z1.string(A)) this.options.withIccProfile = A;
        else throw Z1.invalidParameterError("icc", "string", A);
        if (this.keepIccProfile(), Z1.object(Q)) {
            if (Z1.defined(Q.attach))
                if (Z1.bool(Q.attach)) {
                    if (!Q.attach) this.options.keepMetadata &= -9
                } else throw Z1.invalidParameterError("attach", "boolean", Q.attach)
        }
        return this
    }

    function HL6() {
        return this.options.keepMetadata = 31, this
    }

    function CL6(A) {
        if (this.keepMetadata(), this.withIccProfile("srgb"), Z1.object(A)) {
            if (Z1.defined(A.orientation))
                if (Z1.integer(A.orientation) && Z1.inRange(A.orientation, 1, 8)) this.options.withMetadataOrientation = A.orientation;
                else throw Z1.invalidParameterError("orientation", "integer between 1 and 8", A.orientation);
            if (Z1.defined(A.density))
                if (Z1.number(A.density) && A.density > 0) this.options.withMetadataDensity = A.density;
                else throw Z1.invalidParameterError("density", "positive number", A.density);
            if (Z1.defined(A.icc)) this.withIccProfile(A.icc);
            if (Z1.defined(A.exif)) this.withExifMerge(A.exif)
        }
        return this
    }

    function EL6(A, Q) {
        let B = YjB.get((Z1.object(A) && Z1.string(A.id) ? A.id : A).toLowerCase());
        if (!B) throw Z1.invalidParameterError("format", `one of: ${[...YjB.keys()].join(", ")}`, A);
        return this[B](Q)
    }

    function zL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.jpegQuality = A.quality;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            if (Z1.defined(A.progressive)) this._setBooleanOption("jpegProgressive", A.progressive);
            if (Z1.defined(A.chromaSubsampling))
                if (Z1.string(A.chromaSubsampling) && Z1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jpegChromaSubsampling = A.chromaSubsampling;
                else throw Z1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling);
            let Q = Z1.bool(A.optimizeCoding) ? A.optimizeCoding : A.optimiseCoding;
            if (Z1.defined(Q)) this._setBooleanOption("jpegOptimiseCoding", Q);
            if (Z1.defined(A.mozjpeg))
                if (Z1.bool(A.mozjpeg)) {
                    if (A.mozjpeg) this.options.jpegTrellisQuantisation = !0, this.options.jpegOvershootDeringing = !0, this.options.jpegOptimiseScans = !0, this.options.jpegProgressive = !0, this.options.jpegQuantisationTable = 3
                } else throw Z1.invalidParameterError("mozjpeg", "boolean", A.mozjpeg);
            let B = Z1.bool(A.trellisQuantization) ? A.trellisQuantization : A.trellisQuantisation;
            if (Z1.defined(B)) this._setBooleanOption("jpegTrellisQuantisation", B);
            if (Z1.defined(A.overshootDeringing)) this._setBooleanOption("jpegOvershootDeringing", A.overshootDeringing);
            let G = Z1.bool(A.optimizeScans) ? A.optimizeScans : A.optimiseScans;
            if (Z1.defined(G)) {
                if (this._setBooleanOption("jpegOptimiseScans", G), G) this.options.jpegProgressive = !0
            }
            let Z = Z1.number(A.quantizationTable) ? A.quantizationTable : A.quantisationTable;
            if (Z1.defined(Z))
                if (Z1.integer(Z) && Z1.inRange(Z, 0, 8)) this.options.jpegQuantisationTable = Z;
                else throw Z1.invalidParameterError("quantisationTable", "integer between 0 and 8", Z)
        }
        return this._updateFormatOut("jpeg", A)
    }

    function UL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.progressive)) this._setBooleanOption("pngProgressive", A.progressive);
            if (Z1.defined(A.compressionLevel))
                if (Z1.integer(A.compressionLevel) && Z1.inRange(A.compressionLevel, 0, 9)) this.options.pngCompressionLevel = A.compressionLevel;
                else throw Z1.invalidParameterError("compressionLevel", "integer between 0 and 9", A.compressionLevel);
            if (Z1.defined(A.adaptiveFiltering)) this._setBooleanOption("pngAdaptiveFiltering", A.adaptiveFiltering);
            let Q = A.colours || A.colors;
            if (Z1.defined(Q))
                if (Z1.integer(Q) && Z1.inRange(Q, 2, 256)) this.options.pngBitdepth = WjB(Q);
                else throw Z1.invalidParameterError("colours", "integer between 2 and 256", Q);
            if (Z1.defined(A.palette)) this._setBooleanOption("pngPalette", A.palette);
            else if ([A.quality, A.effort, A.colours, A.colors, A.dither].some(Z1.defined)) this._setBooleanOption("pngPalette", !0);
            if (this.options.pngPalette) {
                if (Z1.defined(A.quality))
                    if (Z1.integer(A.quality) && Z1.inRange(A.quality, 0, 100)) this.options.pngQuality = A.quality;
                    else throw Z1.invalidParameterError("quality", "integer between 0 and 100", A.quality);
                if (Z1.defined(A.effort))
                    if (Z1.integer(A.effort) && Z1.inRange(A.effort, 1, 10)) this.options.pngEffort = A.effort;
                    else throw Z1.invalidParameterError("effort", "integer between 1 and 10", A.effort);
                if (Z1.defined(A.dither))
                    if (Z1.number(A.dither) && Z1.inRange(A.dither, 0, 1)) this.options.pngDither = A.dither;
                    else throw Z1.invalidParameterError("dither", "number between 0.0 and 1.0", A.dither)
            }
        }
        return this._updateFormatOut("png", A)
    }

    function $L6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.webpQuality = A.quality;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            if (Z1.defined(A.alphaQuality))
                if (Z1.integer(A.alphaQuality) && Z1.inRange(A.alphaQuality, 0, 100)) this.options.webpAlphaQuality = A.alphaQuality;
                else throw Z1.invalidParameterError("alphaQuality", "integer between 0 and 100", A.alphaQuality);
            if (Z1.defined(A.lossless)) this._setBooleanOption("webpLossless", A.lossless);
            if (Z1.defined(A.nearLossless)) this._setBooleanOption("webpNearLossless", A.nearLossless);
            if (Z1.defined(A.smartSubsample)) this._setBooleanOption("webpSmartSubsample", A.smartSubsample);
            if (Z1.defined(A.preset))
                if (Z1.string(A.preset) && Z1.inArray(A.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) this.options.webpPreset = A.preset;
                else throw Z1.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", A.preset);
            if (Z1.defined(A.effort))
                if (Z1.integer(A.effort) && Z1.inRange(A.effort, 0, 6)) this.options.webpEffort = A.effort;
                else throw Z1.invalidParameterError("effort", "integer between 0 and 6", A.effort);
            if (Z1.defined(A.minSize)) this._setBooleanOption("webpMinSize", A.minSize);
            if (Z1.defined(A.mixed)) this._setBooleanOption("webpMixed", A.mixed)
        }
        return XjB(A, this.options), this._updateFormatOut("webp", A)
    }

    function wL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.reuse)) this._setBooleanOption("gifReuse", A.reuse);
            if (Z1.defined(A.progressive)) this._setBooleanOption("gifProgressive", A.progressive);
            let Q = A.colours || A.colors;
            if (Z1.defined(Q))
                if (Z1.integer(Q) && Z1.inRange(Q, 2, 256)) this.options.gifBitdepth = WjB(Q);
                else throw Z1.invalidParameterError("colours", "integer between 2 and 256", Q);
            if (Z1.defined(A.effort))
                if (Z1.number(A.effort) && Z1.inRange(A.effort, 1, 10)) this.options.gifEffort = A.effort;
                else throw Z1.invalidParameterError("effort", "integer between 1 and 10", A.effort);
            if (Z1.defined(A.dither))
                if (Z1.number(A.dither) && Z1.inRange(A.dither, 0, 1)) this.options.gifDither = A.dither;
                else throw Z1.invalidParameterError("dither", "number between 0.0 and 1.0", A.dither);
            if (Z1.defined(A.interFrameMaxError))
                if (Z1.number(A.interFrameMaxError) && Z1.inRange(A.interFrameMaxError, 0, 32)) this.options.gifInterFrameMaxError = A.interFrameMaxError;
                else throw Z1.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", A.interFrameMaxError);
            if (Z1.defined(A.interPaletteMaxError))
                if (Z1.number(A.interPaletteMaxError) && Z1.inRange(A.interPaletteMaxError, 0, 256)) this.options.gifInterPaletteMaxError = A.interPaletteMaxError;
                else throw Z1.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", A.interPaletteMaxError)
        }
        return XjB(A, this.options), this._updateFormatOut("gif", A)
    }

    function qL6(A) {
        if (!this.constructor.format.jp2k.output.buffer) throw JjB();
        if (Z1.object(A)) {
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.jp2Quality = A.quality;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            if (Z1.defined(A.lossless))
                if (Z1.bool(A.lossless)) this.options.jp2Lossless = A.lossless;
                else throw Z1.invalidParameterError("lossless", "boolean", A.lossless);
            if (Z1.defined(A.tileWidth))
                if (Z1.integer(A.tileWidth) && Z1.inRange(A.tileWidth, 1, 32768)) this.options.jp2TileWidth = A.tileWidth;
                else throw Z1.invalidParameterError("tileWidth", "integer between 1 and 32768", A.tileWidth);
            if (Z1.defined(A.tileHeight))
                if (Z1.integer(A.tileHeight) && Z1.inRange(A.tileHeight, 1, 32768)) this.options.jp2TileHeight = A.tileHeight;
                else throw Z1.invalidParameterError("tileHeight", "integer between 1 and 32768", A.tileHeight);
            if (Z1.defined(A.chromaSubsampling))
                if (Z1.string(A.chromaSubsampling) && Z1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jp2ChromaSubsampling = A.chromaSubsampling;
                else throw Z1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling)
        }
        return this._updateFormatOut("jp2", A)
    }

    function XjB(A, Q) {
        if (Z1.object(A) && Z1.defined(A.loop))
            if (Z1.integer(A.loop) && Z1.inRange(A.loop, 0, 65535)) Q.loop = A.loop;
            else throw Z1.invalidParameterError("loop", "integer between 0 and 65535", A.loop);
        if (Z1.object(A) && Z1.defined(A.delay))
            if (Z1.integer(A.delay) && Z1.inRange(A.delay, 0, 65535)) Q.delay = [A.delay];
            else if (Array.isArray(A.delay) && A.delay.every(Z1.integer) && A.delay.every((B) => Z1.inRange(B, 0, 65535))) Q.delay = A.delay;
        else throw Z1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", A.delay)
    }

    function NL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.tiffQuality = A.quality;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            if (Z1.defined(A.bitdepth))
                if (Z1.integer(A.bitdepth) && Z1.inArray(A.bitdepth, [1, 2, 4, 8])) this.options.tiffBitdepth = A.bitdepth;
                else throw Z1.invalidParameterError("bitdepth", "1, 2, 4 or 8", A.bitdepth);
            if (Z1.defined(A.tile)) this._setBooleanOption("tiffTile", A.tile);
            if (Z1.defined(A.tileWidth))
                if (Z1.integer(A.tileWidth) && A.tileWidth > 0) this.options.tiffTileWidth = A.tileWidth;
                else throw Z1.invalidParameterError("tileWidth", "integer greater than zero", A.tileWidth);
            if (Z1.defined(A.tileHeight))
                if (Z1.integer(A.tileHeight) && A.tileHeight > 0) this.options.tiffTileHeight = A.tileHeight;
                else throw Z1.invalidParameterError("tileHeight", "integer greater than zero", A.tileHeight);
            if (Z1.defined(A.miniswhite)) this._setBooleanOption("tiffMiniswhite", A.miniswhite);
            if (Z1.defined(A.pyramid)) this._setBooleanOption("tiffPyramid", A.pyramid);
            if (Z1.defined(A.xres))
                if (Z1.number(A.xres) && A.xres > 0) this.options.tiffXres = A.xres;
                else throw Z1.invalidParameterError("xres", "number greater than zero", A.xres);
            if (Z1.defined(A.yres))
                if (Z1.number(A.yres) && A.yres > 0) this.options.tiffYres = A.yres;
                else throw Z1.invalidParameterError("yres", "number greater than zero", A.yres);
            if (Z1.defined(A.compression))
                if (Z1.string(A.compression) && Z1.inArray(A.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) this.options.tiffCompression = A.compression;
                else throw Z1.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", A.compression);
            if (Z1.defined(A.predictor))
                if (Z1.string(A.predictor) && Z1.inArray(A.predictor, ["none", "horizontal", "float"])) this.options.tiffPredictor = A.predictor;
                else throw Z1.invalidParameterError("predictor", "one of: none, horizontal, float", A.predictor);
            if (Z1.defined(A.resolutionUnit))
                if (Z1.string(A.resolutionUnit) && Z1.inArray(A.resolutionUnit, ["inch", "cm"])) this.options.tiffResolutionUnit = A.resolutionUnit;
                else throw Z1.invalidParameterError("resolutionUnit", "one of: inch, cm", A.resolutionUnit)
        }
        return this._updateFormatOut("tiff", A)
    }

    function LL6(A) {
        return this.heif({
            ...A,
            compression: "av1"
        })
    }

    function ML6(A) {
        if (Z1.object(A)) {
            if (Z1.string(A.compression) && Z1.inArray(A.compression, ["av1", "hevc"])) this.options.heifCompression = A.compression;
            else throw Z1.invalidParameterError("compression", "one of: av1, hevc", A.compression);
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.heifQuality = A.quality;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            if (Z1.defined(A.lossless))
                if (Z1.bool(A.lossless)) this.options.heifLossless = A.lossless;
                else throw Z1.invalidParameterError("lossless", "boolean", A.lossless);
            if (Z1.defined(A.effort))
                if (Z1.integer(A.effort) && Z1.inRange(A.effort, 0, 9)) this.options.heifEffort = A.effort;
                else throw Z1.invalidParameterError("effort", "integer between 0 and 9", A.effort);
            if (Z1.defined(A.chromaSubsampling))
                if (Z1.string(A.chromaSubsampling) && Z1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.heifChromaSubsampling = A.chromaSubsampling;
                else throw Z1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling);
            if (Z1.defined(A.bitdepth))
                if (Z1.integer(A.bitdepth) && Z1.inArray(A.bitdepth, [8, 10, 12])) {
                    if (A.bitdepth !== 8 && this.constructor.versions.heif) throw Z1.invalidParameterError("bitdepth when using prebuilt binaries", 8, A.bitdepth);
                    this.options.heifBitdepth = A.bitdepth
                } else throw Z1.invalidParameterError("bitdepth", "8, 10 or 12", A.bitdepth)
        } else throw Z1.invalidParameterError("options", "Object", A);
        return this._updateFormatOut("heif", A)
    }

    function OL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.quality))
                if (Z1.integer(A.quality) && Z1.inRange(A.quality, 1, 100)) this.options.jxlDistance = A.quality >= 30 ? 0.1 + (100 - A.quality) * 0.09 : 0.017666666666666667 * A.quality * A.quality - 1.15 * A.quality + 25;
                else throw Z1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
            else if (Z1.defined(A.distance))
                if (Z1.number(A.distance) && Z1.inRange(A.distance, 0, 15)) this.options.jxlDistance = A.distance;
                else throw Z1.invalidParameterError("distance", "number between 0.0 and 15.0", A.distance);
            if (Z1.defined(A.decodingTier))
                if (Z1.integer(A.decodingTier) && Z1.inRange(A.decodingTier, 0, 4)) this.options.jxlDecodingTier = A.decodingTier;
                else throw Z1.invalidParameterError("decodingTier", "integer between 0 and 4", A.decodingTier);
            if (Z1.defined(A.lossless))
                if (Z1.bool(A.lossless)) this.options.jxlLossless = A.lossless;
                else throw Z1.invalidParameterError("lossless", "boolean", A.lossless);
            if (Z1.defined(A.effort))
                if (Z1.integer(A.effort) && Z1.inRange(A.effort, 3, 9)) this.options.jxlEffort = A.effort;
                else throw Z1.invalidParameterError("effort", "integer between 3 and 9", A.effort)
        }
        return this._updateFormatOut("jxl", A)
    }

    function RL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.depth))
                if (Z1.string(A.depth) && Z1.inArray(A.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) this.options.rawDepth = A.depth;
                else throw Z1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", A.depth)
        }
        return this._updateFormatOut("raw")
    }

    function TL6(A) {
        if (Z1.object(A)) {
            if (Z1.defined(A.size))
                if (Z1.integer(A.size) && Z1.inRange(A.size, 1, 8192)) this.options.tileSize = A.size;
                else throw Z1.invalidParameterError("size", "integer between 1 and 8192", A.size);
            if (Z1.defined(A.overlap))
                if (Z1.integer(A.overlap) && Z1.inRange(A.overlap, 0, 8192)) {
                    if (A.overlap > this.options.tileSize) throw Z1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, A.overlap);
                    this.options.tileOverlap = A.overlap
                } else throw Z1.invalidParameterError("overlap", "integer between 0 and 8192", A.overlap);
            if (Z1.defined(A.container))
                if (Z1.string(A.container) && Z1.inArray(A.container, ["fs", "zip"])) this.options.tileContainer = A.container;
                else throw Z1.invalidParameterError("container", "one of: fs, zip", A.container);
            if (Z1.defined(A.layout))
                if (Z1.string(A.layout) && Z1.inArray(A.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) this.options.tileLayout = A.layout;
                else throw Z1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", A.layout);
            if (Z1.defined(A.angle))
                if (Z1.integer(A.angle) && !(A.angle % 90)) this.options.tileAngle = A.angle;
                else throw Z1.invalidParameterError("angle", "positive/negative multiple of 90", A.angle);
            if (this._setBackgroundColourOption("tileBackground", A.background), Z1.defined(A.depth))
                if (Z1.string(A.depth) && Z1.inArray(A.depth, ["onepixel", "onetile", "one"])) this.options.tileDepth = A.depth;
                else throw Z1.invalidParameterError("depth", "one of: onepixel, onetile, one", A.depth);
            if (Z1.defined(A.skipBlanks))
                if (Z1.integer(A.skipBlanks) && Z1.inRange(A.skipBlanks, -1, 65535)) this.options.tileSkipBlanks = A.skipBlanks;
                else throw Z1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", A.skipBlanks);
            else if (Z1.defined(A.layout) && A.layout === "google") this.options.tileSkipBlanks = 5;
            let Q = Z1.bool(A.center) ? A.center : A.centre;
            if (Z1.defined(Q)) this._setBooleanOption("tileCentre", Q);
            if (Z1.defined(A.id))
                if (Z1.string(A.id)) this.options.tileId = A.id;
                else throw Z1.invalidParameterError("id", "string", A.id);
            if (Z1.defined(A.basename))
                if (Z1.string(A.basename)) this.options.tileBasename = A.basename;
                else throw Z1.invalidParameterError("basename", "string", A.basename)
        }
        if (Z1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) this.options.tileFormat = this.options.formatOut;
        else if (this.options.formatOut !== "input") throw Z1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
        return this._updateFormatOut("dz")
    }

    function PL6(A) {
        if (!Z1.plainObject(A)) throw Z1.invalidParameterError("options", "object", A);
        if (Z1.integer(A.seconds) && Z1.inRange(A.seconds, 0, 3600)) this.options.timeoutSeconds = A.seconds;
        else throw Z1.invalidParameterError("seconds", "integer between 0 and 3600", A.seconds);
        return this
    }

    function jL6(A, Q) {
        if (!(Z1.object(Q) && Q.force === !1)) this.options.formatOut = A;
        return this
    }

    function SL6(A, Q) {
        if (Z1.bool(Q)) this.options[A] = Q;
        else throw Z1.invalidParameterError(A, "boolean", Q)
    }

    function _L6() {
        if (!this.options.streamOut) {
            this.options.streamOut = !0;
            let A = Error();
            this._pipeline(void 0, A)
        }
    }

    function kL6(A, Q) {
        if (typeof A === "function") {
            if (this._isStreamInput()) this.on("finish", () => {
                this._flattenBufferIn(), JGA.pipeline(this.options, (B, G, Z) => {
                    if (B) A(Z1.nativeError(B, Q));
                    else A(null, G, Z)
                })
            });
            else JGA.pipeline(this.options, (B, G, Z) => {
                if (B) A(Z1.nativeError(B, Q));
                else A(null, G, Z)
            });
            return this
        } else if (this.options.streamOut) {
            if (this._isStreamInput()) {
                if (this.once("finish", () => {
                        this._flattenBufferIn(), JGA.pipeline(this.options, (B, G, Z) => {
                            if (B) this.emit("error", Z1.nativeError(B, Q));
                            else this.emit("info", Z), this.push(G);
                            this.push(null), this.on("end", () => this.emit("close"))
                        })
                    }), this.streamInFinished) this.emit("finish")
            } else JGA.pipeline(this.options, (B, G, Z) => {
                if (B) this.emit("error", Z1.nativeError(B, Q));
                else this.emit("info", Z), this.push(G);
                this.push(null), this.on("end", () => this.emit("close"))
            });
            return this
        } else if (this._isStreamInput()) return new Promise((B, G) => {
            this.once("finish", () => {
                this._flattenBufferIn(), JGA.pipeline(this.options, (Z, I, Y) => {
                    if (Z) G(Z1.nativeError(Z, Q));
                    else if (this.options.resolveWithObject) B({
                        data: I,
                        info: Y
                    });
                    else B(I)
                })
            })
        });
        else return new Promise((B, G) => {
            JGA.pipeline(this.options, (Z, I, Y) => {
                if (Z) G(Z1.nativeError(Z, Q));
                else if (this.options.resolveWithObject) B({
                    data: I,
                    info: Y
                });
                else B(I)
            })
        })
    }
    FjB.exports = function(A) {
        Object.assign(A.prototype, {
            toFile: JL6,
            toBuffer: WL6,
            keepExif: XL6,
            withExif: FL6,
            withExifMerge: VL6,
            keepIccProfile: KL6,
            withIccProfile: DL6,
            keepMetadata: HL6,
            withMetadata: CL6,
            toFormat: EL6,
            jpeg: zL6,
            jp2: qL6,
            png: UL6,
            webp: $L6,
            tiff: NL6,
            avif: LL6,
            heif: ML6,
            jxl: OL6,
            gif: wL6,
            raw: RL6,
            tile: TL6,
            timeout: PL6,
            _updateFormatOut: jL6,
            _setBooleanOption: SL6,
            _read: _L6,
            _pipeline: kL6
        })
    }
});
var CjB = U((qo7, HjB) => {
    var yL6 = UA("node:events"),
        hrA = jrA(),
        $M = f_(),
        {
            runtimePlatformArch: xL6
        } = Xd1(),
        KE = d$A(),
        KjB = xL6(),
        Nd1 = KE.libvipsVersion(),
        Op = KE.format();
    Op.heif.output.alias = ["avif", "heic"];
    Op.jpeg.output.alias = ["jpe", "jpg"];
    Op.tiff.output.alias = ["tif"];
    Op.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
    var vL6 = {
            nearest: "nearest",
            bilinear: "bilinear",
            bicubic: "bicubic",
            locallyBoundedBicubic: "lbb",
            nohalo: "nohalo",
            vertexSplitQuadraticBasisSpline: "vsqbs"
        },
        WGA = {
            vips: Nd1.semver
        };
    if (!Nd1.isGlobal)
        if (!Nd1.isWasm) try {
            WGA = UA(`@img/sharp-${KjB}/versions`)
        } catch (A) {
            try {
                WGA = UA(`@img/sharp-libvips-${KjB}/versions`)
            } catch (Q) {}
        } else try {
            WGA = (() => {
                throw new Error("Cannot require module " + "@img/sharp-wasm32/versions");
            })()
        } catch (A) {}
    WGA.sharp = Jd1().version;
    if (WGA.heif && Op.heif) Op.heif.input.fileSuffix = [".avif"], Op.heif.output.alias = ["avif"];

    function DjB(A) {
        if ($M.bool(A))
            if (A) return KE.cache(50, 20, 100);
            else return KE.cache(0, 0, 0);
        else if ($M.object(A)) return KE.cache(A.memory, A.files, A.items);
        else return KE.cache()
    }
    DjB(!0);

    function bL6(A) {
        return KE.concurrency($M.integer(A) ? A : null)
    }
    if (hrA.familySync() === hrA.GLIBC && !KE._isUsingJemalloc()) KE.concurrency(1);
    else if (hrA.familySync() === hrA.MUSL && KE.concurrency() === 1024) KE.concurrency(UA("node:os").availableParallelism());
    var fL6 = new yL6.EventEmitter;

    function hL6() {
        return KE.counters()
    }

    function gL6(A) {
        return KE.simd($M.bool(A) ? A : null)
    }

    function uL6(A) {
        if ($M.object(A))
            if (Array.isArray(A.operation) && A.operation.every($M.string)) KE.block(A.operation, !0);
            else throw $M.invalidParameterError("operation", "Array<string>", A.operation);
        else throw $M.invalidParameterError("options", "object", A)
    }

    function mL6(A) {
        if ($M.object(A))
            if (Array.isArray(A.operation) && A.operation.every($M.string)) KE.block(A.operation, !1);
            else throw $M.invalidParameterError("operation", "Array<string>", A.operation);
        else throw $M.invalidParameterError("options", "object", A)
    }
    HjB.exports = function(A) {
        A.cache = DjB, A.concurrency = bL6, A.counters = hL6, A.simd = gL6, A.format = Op, A.interpolators = vL6, A.versions = WGA, A.queue = fL6, A.block = uL6, A.unblock = mL6
    }
});
var grA = U((Lo7, EjB) => {
    var Zf = LPB();
    cPB()(Zf);
    sPB()(Zf);
    oPB()(Zf);
    AjB()(Zf);
    GjB()(Zf);
    IjB()(Zf);
    VjB()(Zf);
    CjB()(Zf);
    EjB.exports = Zf
});
async function XGA(A, Q, B) {
    try {
        let G = await Promise.resolve().then(() => GA(grA(), 1)),
            I = (G.default || G)(A),
            Y = await I.metadata();
        if (!Y.width || !Y.height) {
            if (Q > n$A) return {
                buffer: await I.jpeg({
                    quality: 80
                }).toBuffer(),
                mediaType: "jpeg"
            }
        }
        let J = Y.width || 0,
            W = Y.height || 0,
            X = Y.format ?? B,
            F = X === "jpg" ? "jpeg" : X;
        if (Q <= n$A && J <= urA && W <= mrA) return {
            buffer: A,
            mediaType: F
        };
        if (J > urA) W = Math.round(W * urA / J), J = urA;
        if (W > mrA) J = Math.round(J * mrA / W), W = mrA;
        let V = await I.resize(J, W, {
            fit: "inside",
            withoutEnlargement: !0
        }).toBuffer();
        if (V.length > n$A) return {
            buffer: await I.jpeg({
                quality: 80
            }).toBuffer(),
            mediaType: "jpeg"
        };
        return {
            buffer: V,
            mediaType: F
        }
    } catch (G) {
        return e(G), {
            buffer: A,
            mediaType: B === "jpg" ? "jpeg" : B
        }
    }
}
async function zjB(A) {
    if (A.source.type !== "base64") return A;
    let Q = Buffer.from(A.source.data, "base64"),
        B = Q.length,
        Z = A.source.media_type?.split("/")[1] || "png",
        I = await XGA(Q, B, Z);
    return {
        type: "image",
        source: {
            type: "base64",
            media_type: `image/${I.mediaType}`,
            data: I.buffer.toString("base64")
        }
    }
}
async function Ze(A, Q = n$A, B) {
    let G = B?.split("/")[1] || "jpeg",
        Z = G === "jpg" ? "jpeg" : G;
    try {
        let I = await Promise.resolve().then(() => GA(grA(), 1)),
            Y = I.default || I,
            J = await Y(A).metadata(),
            W = J.format || Z,
            X = A.length,
            F = {
                imageBuffer: A,
                metadata: J,
                format: W,
                maxBytes: Q,
                originalSize: X,
                sharp: Y
            };
        if (X <= Q) return a$A(A, W, X);
        let V = await dL6(F);
        if (V) return V;
        if (W === "png") {
            let D = await pL6(F);
            if (D) return D
        }
        let K = await lL6(F, 50);
        if (K) return K;
        return await iL6(F)
    } catch (I) {
        return e(I), {
            base64: A.toString("base64"),
            mediaType: `image/${Z}`,
            originalSize: A.length
        }
    }
}
async function UjB(A, Q, B) {
    let G = Math.floor(Q / 0.125),
        Z = Math.floor(G * 0.75);
    return Ze(A, Z, B)
}
async function $jB(A, Q = n$A) {
    if (A.source.type !== "base64") return A;
    let B = Buffer.from(A.source.data, "base64");
    if (B.length <= Q) return A;
    let G = await Ze(B, Q);
    return {
        type: "image",
        source: {
            type: "base64",
            media_type: G.mediaType,
            data: G.base64
        }
    }
}

function a$A(A, Q, B) {
    let G = Q === "jpg" ? "jpeg" : Q;
    return {
        base64: A.toString("base64"),
        mediaType: `image/${G}`,
        originalSize: B
    }
}
async function dL6(A) {
    let Q = [1, 0.75, 0.5, 0.25];
    for (let B of Q) {
        let G = Math.round((A.metadata.width || 2000) * B),
            Z = Math.round((A.metadata.height || 2000) * B),
            I = A.sharp(A.imageBuffer).resize(G, Z, {
                fit: "inside",
                withoutEnlargement: !0
            });
        I = cL6(I, A.format);
        let Y = await I.toBuffer();
        if (Y.length <= A.maxBytes) return a$A(Y, A.format, A.originalSize)
    }
    return null
}

function cL6(A, Q) {
    switch (Q) {
        case "png":
            return A.png({
                compressionLevel: 9,
                palette: !0
            });
        case "jpeg":
        case "jpg":
            return A.jpeg({
                quality: 80
            });
        case "webp":
            return A.webp({
                quality: 80
            });
        default:
            return A
    }
}
async function pL6(A) {
    let Q = await A.sharp(A.imageBuffer).resize(800, 800, {
        fit: "inside",
        withoutEnlargement: !0
    }).png({
        compressionLevel: 9,
        palette: !0,
        colors: 64
    }).toBuffer();
    if (Q.length <= A.maxBytes) return a$A(Q, "png", A.originalSize);
    return null
}
async function lL6(A, Q) {
    let B = await A.sharp(A.imageBuffer).resize(600, 600, {
        fit: "inside",
        withoutEnlargement: !0
    }).jpeg({
        quality: Q
    }).toBuffer();
    if (B.length <= A.maxBytes) return a$A(B, "jpeg", A.originalSize);
    return null
}
async function iL6(A) {
    let Q = await A.sharp(A.imageBuffer).resize(400, 400, {
        fit: "inside",
        withoutEnlargement: !0
    }).jpeg({
        quality: 20
    }).toBuffer();
    return a$A(Q, "jpeg", A.originalSize)
}
var n$A = 3932160,
    urA = 2000,
    mrA = 2000;
var Ie = L(() => {
    u1()
});
import {
    execSync as drA
} from "child_process";
import {
    basename as nL6,
    extname as aL6,
    isAbsolute as sL6
} from "path";

function rL6() {
    let A = process.platform,
        Q = {
            darwin: "No image found in clipboard. Use Cmd + Ctrl + Shift + 4 to copy a screenshot to clipboard.",
            win32: "No image found in clipboard. Use Print Screen to copy a screenshot to clipboard.",
            linux: "No image found in clipboard. Use appropriate screenshot tool to copy a screenshot to clipboard."
        };
    return Q[A] || Q.linux
}

function wjB() {
    let A = process.platform,
        Q = {
            darwin: "/tmp/claude_cli_latest_screenshot.png",
            linux: "/tmp/claude_cli_latest_screenshot.png",
            win32: process.env.TEMP ? `${process.env.TEMP}\\claude_cli_latest_screenshot.png` : "C:\\Temp\\claude_cli_latest_screenshot.png"
        },
        B = Q[A] || Q.linux,
        G = {
            darwin: {
                checkImage: "osascript -e 'the clipboard as «class PNGf»'",
                saveImage: `osascript -e 'set png_data to (the clipboard as «class PNGf»)' -e 'set fp to open for access POSIX file "${B}" with write permission' -e 'write png_data to fp' -e 'close access fp'`,
                getPath: "osascript -e 'get POSIX path of (the clipboard as «class furl»)'",
                deleteFile: `rm -f "${B}"`
            },
            linux: {
                checkImage: 'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp)"',
                saveImage: `xclip -selection clipboard -t image/png -o > "${B}" 2>/dev/null || wl-paste --type image/png > "${B}"`,
                getPath: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
                deleteFile: `rm -f "${B}"`
            },
            win32: {
                checkImage: 'powershell -NoProfile -Command "(Get-Clipboard -Format Image) -ne $null"',
                saveImage: `powershell -NoProfile -Command "$img = Get-Clipboard -Format Image; if ($img) { $img.Save('${B.replace(/\\/g,"\\\\")}', [System.Drawing.Imaging.ImageFormat]::Png) }"`,
                getPath: 'powershell -NoProfile -Command "Get-Clipboard"',
                deleteFile: `del /f "${B}"`
            }
        };
    return {
        commands: G[A] || G.linux,
        screenshotPath: B
    }
}
async function prA() {
    let {
        commands: A,
        screenshotPath: Q
    } = wjB();
    try {
        drA(A.checkImage, {
            stdio: "ignore"
        }), drA(A.saveImage, {
            stdio: "ignore"
        });
        let B = OA().readFileBytesSync(Q),
            {
                buffer: G
            } = await XGA(B, B.length, "png"),
            Z = G.toString("base64"),
            I = NjB(Z);
        return drA(A.deleteFile, {
            stdio: "ignore"
        }), {
            base64: Z,
            mediaType: I
        }
    } catch {
        return null
    }
}

function oL6() {
    let {
        commands: A
    } = wjB();
    try {
        return drA(A.getPath, {
            encoding: "utf-8"
        }).trim()
    } catch (Q) {
        return e(Q), null
    }
}

function NjB(A) {
    try {
        let Q = Buffer.from(A, "base64");
        if (Q.length < 4) return "image/png";
        if (Q[0] === 137 && Q[1] === 80 && Q[2] === 78 && Q[3] === 71) return "image/png";
        if (Q[0] === 255 && Q[1] === 216 && Q[2] === 255) return "image/jpeg";
        if (Q[0] === 71 && Q[1] === 73 && Q[2] === 70) return "image/gif";
        if (Q[0] === 82 && Q[1] === 73 && Q[2] === 70 && Q[3] === 70) {
            if (Q.length >= 12 && Q[8] === 87 && Q[9] === 69 && Q[10] === 66 && Q[11] === 80) return "image/webp"
        }
        return "image/png"
    } catch {
        return "image/png"
    }
}

function LjB(A) {
    if (A.startsWith('"') && A.endsWith('"') || A.startsWith("'") && A.endsWith("'")) return A.slice(1, -1);
    return A
}

function MjB(A) {
    if (process.platform === "win32") return A;
    let B = "__DOUBLE_BACKSLASH__";
    return A.replace(/\\\\/g, B).replace(/\\(.)/g, "$1").replace(new RegExp(B, "g"), "\\")
}

function Ld1(A) {
    let Q = LjB(A.trim()),
        B = MjB(Q);
    return qjB.test(B)
}

function tL6(A) {
    let Q = LjB(A.trim()),
        B = MjB(Q);
    if (qjB.test(B)) return B;
    return null
}
async function OjB(A) {
    let Q = tL6(A);
    if (!Q) return null;
    let B = Q,
        G;
    try {
        if (sL6(B)) G = OA().readFileBytesSync(B);
        else {
            let W = oL6();
            if (W && B === nL6(W)) G = OA().readFileBytesSync(W)
        }
    } catch (W) {
        return e(W), null
    }
    if (!G) return null;
    let Z = aL6(B).slice(1).toLowerCase() || "png",
        {
            buffer: I
        } = await XGA(G, G.length, Z),
        Y = I.toString("base64"),
        J = NjB(Y);
    return {
        path: B,
        base64: Y,
        mediaType: J
    }
}
var _o7, crA = 800,
    qjB;
var lrA = L(() => {
    o0();
    u1();
    Ie();
    _o7 = rL6();
    qjB = /\.(png|jpe?g|gif|webp)$/i
});

function irA({
    children: A
}) {
    let {
        marker: Q
    } = Rp.useContext(eL6);
    return Rp.default.createElement(j, {
        gap: 1
    }, Rp.default.createElement($, {
        dimColor: !0
    }, Q), Rp.default.createElement(j, {
        flexDirection: "column"
    }, A))
}
var Rp, eL6;
var RjB = L(() => {
    hA();
    Rp = GA(VA(), 1), eL6 = Rp.createContext({
        marker: ""
    })
});

function PjB({
    children: A
}) {
    let {
        marker: Q
    } = CU.useContext(TjB), B = 0;
    for (let Z of CU.default.Children.toArray(A)) {
        if (!CU.isValidElement(Z) || Z.type !== irA) continue;
        B++
    }
    let G = String(B).length;
    return CU.default.createElement(j, {
        flexDirection: "column"
    }, CU.default.Children.map(A, (Z, I) => {
        if (!CU.isValidElement(Z) || Z.type !== irA) return Z;
        let Y = `${String(I+1).padStart(G)}.`,
            J = `${Q}${Y}`;
        return CU.default.createElement(TjB.Provider, {
            value: {
                marker: J
            }
        }, CU.default.createElement(AM6.Provider, {
            value: {
                marker: J
            }
        }, Z))
    }))
}
var CU, TjB, AM6, s$A;
var Md1 = L(() => {
    hA();
    RjB();
    CU = GA(VA(), 1), TjB = CU.createContext({
        marker: ""
    }), AM6 = CU.createContext({
        marker: ""
    });
    PjB.Item = irA;
    s$A = PjB
});
import {
    join as BM6
} from "path";

function SjB() {
    return Od1().filter(({
        isCompletable: A,
        isEnabled: Q
    }) => A && Q).every(({
        isComplete: A
    }) => A)
}

function FGA() {
    let A = M5();
    if (SjB() && !A.hasCompletedProjectOnboarding) aI({
        ...A,
        hasCompletedProjectOnboarding: !0
    })
}

function Od1() {
    let A = OA().existsSync(BM6(H0(), "CLAUDE.md")),
        Q = yjB(H0());
    return [{
        key: "workspace",
        text: "Ask Claude to create a new app or clone a repository",
        isComplete: !1,
        isCompletable: !0,
        isEnabled: Q
    }, {
        key: "claudemd",
        text: "Run /init to create a CLAUDE.md file with instructions for Claude",
        isComplete: A,
        isCompletable: !0,
        isEnabled: !Q
    }]
}

function kjB() {
    let A = M5();
    aI({
        ...A,
        projectOnboardingSeenCount: A.projectOnboardingSeenCount + 1
    })
}
var QM6, jjB, _jB;
var r$A = L(() => {
    Md1();
    hA();
    jQ();
    M9();
    R2();
    o0();
    o2();
    QM6 = GA(VA(), 1), jjB = GA(VA(), 1);
    _jB = t1(() => {
        if (SjB() || M5().projectOnboardingSeenCount >= 4 || process.env.IS_DEMO) return !1;
        return !0
    })
});
import {
    homedir as GM6
} from "os";
import {
    join as ZM6
} from "path";

function IM6(A) {
    let Q = L1();
    Q.appleTerminalSetupInProgress = !0, Q.appleTerminalBackupPath = A, d0(Q)
}

function o$A() {
    let A = L1();
    A.appleTerminalSetupInProgress = !1, d0(A)
}

function YM6() {
    let A = L1();
    return {
        inProgress: A.appleTerminalSetupInProgress ?? !1,
        backupPath: A.appleTerminalBackupPath || null
    }
}

function VGA() {
    return ZM6(GM6(), "Library", "Preferences", "com.apple.Terminal.plist")
}
async function xjB() {
    let A = VGA(),
        Q = `${A}.bak`;
    try {
        let {
            code: B
        } = await ZQ("defaults", ["export", "com.apple.Terminal", A]);
        if (B !== 0) return null;
        if (OA().existsSync(A)) return await ZQ("defaults", ["export", "com.apple.Terminal", Q]), IM6(Q), Q;
        return null
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), null
    }
}
async function nrA() {
    let {
        inProgress: A,
        backupPath: Q
    } = YM6();
    if (!A) return {
        status: "no_backup"
    };
    if (!Q || !OA().existsSync(Q)) return o$A(), {
        status: "no_backup"
    };
    try {
        let {
            code: B
        } = await ZQ("defaults", ["import", "com.apple.Terminal", Q]);
        if (B !== 0) return {
            status: "failed",
            backupPath: Q
        };
        return await ZQ("killall", ["cfprefsd"]), o$A(), {
            status: "restored"
        }
    } catch (B) {
        return e(Error(`Failed to restore Terminal.app settings with: ${B}`)), o$A(), {
            status: "failed",
            backupPath: Q
        }
    }
}
var Rd1 = L(() => {
    I6();
    u1();
    jQ();
    o0()
});
import {
    homedir as JM6
} from "os";
import {
    join as WM6
} from "path";

function XM6(A) {
    let Q = L1();
    Q.iterm2SetupInProgress = !0, Q.iterm2BackupPath = A, d0(Q)
}

function KGA() {
    let A = L1();
    A.iterm2SetupInProgress = !1, d0(A)
}

function FM6() {
    let A = L1();
    return {
        inProgress: A.iterm2SetupInProgress ?? !1,
        backupPath: A.iterm2BackupPath || null
    }
}

function arA() {
    return WM6(JM6(), "Library", "Preferences", "com.googlecode.iterm2.plist")
}
async function vjB() {
    let A = arA(),
        Q = `${A}.bak`;
    try {
        if (await ZQ("defaults", ["export", "com.googlecode.iterm2", A]), OA().existsSync(A)) return OA().copyFileSync(A, Q), XM6(Q), Q;
        return null
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), null
    }
}

function bjB() {
    let {
        inProgress: A,
        backupPath: Q
    } = FM6();
    if (!A) return {
        status: "no_backup"
    };
    if (!Q || !OA().existsSync(Q)) return KGA(), {
        status: "no_backup"
    };
    try {
        return OA().copyFileSync(Q, arA()), KGA(), {
            status: "restored"
        }
    } catch (B) {
        return e(Error(`Failed to restore iTerm2 settings with: ${B}`)), KGA(), {
            status: "failed",
            backupPath: Q
        }
    }
}
var Td1 = L(() => {
    I6();
    u1();
    jQ();
    o0()
});
import {
    randomBytes as jd1
} from "crypto";
import {
    EOL as f7,
    homedir as srA,
    platform as rrA
} from "os";
import {
    dirname as VM6,
    join as If
} from "path";

function t$A() {
    return rrA() === "darwin" && (m0.terminal === "iTerm.app" || m0.terminal === "Apple_Terminal") || m0.terminal === "vscode" || m0.terminal === "cursor" || m0.terminal === "windsurf" || m0.terminal === "ghostty" || m0.terminal === "WezTerm"
}
async function Sd1(A) {
    let Q = "";
    switch (m0.terminal) {
        case "iTerm.app":
            Q = await CM6(A);
            break;
        case "Apple_Terminal":
            Q = await EM6(A);
            break;
        case "vscode":
            Q = Pd1("VSCode", A);
            break;
        case "cursor":
            Q = Pd1("Cursor", A);
            break;
        case "windsurf":
            Q = Pd1("Windsurf", A);
            break;
        case "ghostty":
            Q = await HM6(A);
            break;
        case "WezTerm":
            Q = await DM6(A);
            break;
        case null:
            break
    }
    let B = L1();
    if (["iTerm.app", "vscode", "cursor", "windsurf", "ghostty", "WezTerm"].includes(m0.terminal ?? "")) B.shiftEnterKeyBindingInstalled = !0;
    else if (m0.terminal === "Apple_Terminal") B.optionAsMetaKeyInstalled = !0;
    return d0(B), FGA(), Q
}

function gjB() {
    return L1().shiftEnterKeyBindingInstalled === !0
}

function ujB() {
    return L1().optionAsMetaKeyInstalled === !0
}

function mjB() {
    return L1().hasUsedBackslashReturn === !0
}

function djB() {
    let A = L1();
    if (!A.hasUsedBackslashReturn) d0({
        ...A,
        hasUsedBackslashReturn: !0
    })
}
async function DM6(A) {
    let B = If(srA(), ".wezterm.lua");
    try {
        let G = "",
            Z = !1;
        if (OA().existsSync(B)) {
            if (Z = !0, G = OA().readFileSync(B, {
                    encoding: "utf-8"
                }), G.includes('mods="SHIFT"') && G.includes('key="Enter"')) return `${tQ("warning",A)("Found existing WezTerm Shift+Enter key binding. Remove it to continue.")}${f7}${oA.dim(`See ${B}`)}${f7}`;
            let I = jd1(4).toString("hex"),
                Y = `${B}.${I}.bak`;
            try {
                OA().copyFileSync(B, Y)
            } catch (J) {
                return e(J instanceof Error ? J : Error(String(J))), `${tQ("warning",A)("Error backing up existing WezTerm config. Bailing out.")}${f7}${oA.dim(`See ${B}`)}${f7}${oA.dim(`Backup path: ${Y}`)}${f7}`
            }
        }
        if (!Z) G = `local wezterm = require 'wezterm'
local config = wezterm.config_builder()

config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}

return config
`;
        else {
            let I = G.match(/config\.keys\s*=\s*\{([^}]*)\}/s);
            if (I) {
                let Y = I[1] ?? "",
                    J = Y.trim() ? `${Y.trim()},
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},` : `
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
`;
                G = G.replace(/config\.keys\s*=\s*\{[^}]*\}/s, `config.keys = {${J}}`)
            } else if (G.match(/return\s+config/s)) G = G.replace(/return\s+config/s, `config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}

return config`);
            else G += `
config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}
`
        }
        return OA().writeFileSync(B, G, {
            encoding: "utf-8",
            flush: !1
        }), `${tQ("success",A)("Installed WezTerm Shift+Enter key binding")}${f7}${tQ("success",A)("You may need to restart WezTerm for changes to take effect")}${f7}${oA.dim(`See ${B}`)}${f7}`
    } catch (G) {
        throw e(G instanceof Error ? G : Error(String(G))), Error("Failed to install WezTerm Shift+Enter key binding")
    }
}
async function HM6(A) {
    let B = [],
        G = process.env.XDG_CONFIG_HOME;
    if (G) B.push(If(G, "ghostty", "config"));
    else B.push(If(srA(), ".config", "ghostty", "config"));
    if (rrA() === "darwin") B.push(If(srA(), "Library", "Application Support", "com.mitchellh.ghostty", "config"));
    let Z = null,
        I = !1;
    for (let Y of B)
        if (OA().existsSync(Y)) {
            Z = Y, I = !0;
            break
        } if (!Z) Z = B[0] ?? null, I = !1;
    if (!Z) throw Error("No valid config path found for Ghostty");
    try {
        let Y = "";