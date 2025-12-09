/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_001.js
 * 处理时间: 2025-12-09T03:41:35.983Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  1x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 1/30
 * Lines: 10493 - 11991 (1499 lines)
 * Original file: cli.js
 */

        "image/jpm": {
            source: "iana",
            compressible: !1,
            extensions: ["jpm"]
        },
        "image/jpx": {
            source: "iana",
            compressible: !1,
            extensions: ["jpx", "jpf"]
        },
        "image/jxr": {
            source: "iana",
            extensions: ["jxr"]
        },
        "image/jxra": {
            source: "iana",
            extensions: ["jxra"]
        },
        "image/jxrs": {
            source: "iana",
            extensions: ["jxrs"]
        },
        "image/jxs": {
            source: "iana",
            extensions: ["jxs"]
        },
        "image/jxsc": {
            source: "iana",
            extensions: ["jxsc"]
        },
        "image/jxsi": {
            source: "iana",
            extensions: ["jxsi"]
        },
        "image/jxss": {
            source: "iana",
            extensions: ["jxss"]
        },
        "image/ktx": {
            source: "iana",
            extensions: ["ktx"]
        },
        "image/ktx2": {
            source: "iana",
            extensions: ["ktx2"]
        },
        "image/naplps": {
            source: "iana"
        },
        "image/pjpeg": {
            compressible: !1
        },
        "image/png": {
            source: "iana",
            compressible: !1,
            extensions: ["png"]
        },
        "image/prs.btif": {
            source: "iana",
            extensions: ["btif"]
        },
        "image/prs.pti": {
            source: "iana",
            extensions: ["pti"]
        },
        "image/pwg-raster": {
            source: "iana"
        },
        "image/sgi": {
            source: "apache",
            extensions: ["sgi"]
        },
        "image/svg+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["svg", "svgz"]
        },
        "image/t38": {
            source: "iana",
            extensions: ["t38"]
        },
        "image/tiff": {
            source: "iana",
            compressible: !1,
            extensions: ["tif", "tiff"]
        },
        "image/tiff-fx": {
            source: "iana",
            extensions: ["tfx"]
        },
        "image/vnd.adobe.photoshop": {
            source: "iana",
            compressible: !0,
            extensions: ["psd"]
        },
        "image/vnd.airzip.accelerator.azv": {
            source: "iana",
            extensions: ["azv"]
        },
        "image/vnd.cns.inf2": {
            source: "iana"
        },
        "image/vnd.dece.graphic": {
            source: "iana",
            extensions: ["uvi", "uvvi", "uvg", "uvvg"]
        },
        "image/vnd.djvu": {
            source: "iana",
            extensions: ["djvu", "djv"]
        },
        "image/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
        },
        "image/vnd.dwg": {
            source: "iana",
            extensions: ["dwg"]
        },
        "image/vnd.dxf": {
            source: "iana",
            extensions: ["dxf"]
        },
        "image/vnd.fastbidsheet": {
            source: "iana",
            extensions: ["fbs"]
        },
        "image/vnd.fpx": {
            source: "iana",
            extensions: ["fpx"]
        },
        "image/vnd.fst": {
            source: "iana",
            extensions: ["fst"]
        },
        "image/vnd.fujixerox.edmics-mmr": {
            source: "iana",
            extensions: ["mmr"]
        },
        "image/vnd.fujixerox.edmics-rlc": {
            source: "iana",
            extensions: ["rlc"]
        },
        "image/vnd.globalgraphics.pgb": {
            source: "iana"
        },
        "image/vnd.microsoft.icon": {
            source: "iana",
            compressible: !0,
            extensions: ["ico"]
        },
        "image/vnd.mix": {
            source: "iana"
        },
        "image/vnd.mozilla.apng": {
            source: "iana"
        },
        "image/vnd.ms-dds": {
            compressible: !0,
            extensions: ["dds"]
        },
        "image/vnd.ms-modi": {
            source: "iana",
            extensions: ["mdi"]
        },
        "image/vnd.ms-photo": {
            source: "apache",
            extensions: ["wdp"]
        },
        "image/vnd.net-fpx": {
            source: "iana",
            extensions: ["npx"]
        },
        "image/vnd.pco.b16": {
            source: "iana",
            extensions: ["b16"]
        },
        "image/vnd.radiance": {
            source: "iana"
        },
        "image/vnd.sealed.png": {
            source: "iana"
        },
        "image/vnd.sealedmedia.softseal.gif": {
            source: "iana"
        },
        "image/vnd.sealedmedia.softseal.jpg": {
            source: "iana"
        },
        "image/vnd.svf": {
            source: "iana"
        },
        "image/vnd.tencent.tap": {
            source: "iana",
            extensions: ["tap"]
        },
        "image/vnd.valve.source.texture": {
            source: "iana",
            extensions: ["vtf"]
        },
        "image/vnd.wap.wbmp": {
            source: "iana",
            extensions: ["wbmp"]
        },
        "image/vnd.xiff": {
            source: "iana",
            extensions: ["xif"]
        },
        "image/vnd.zbrush.pcx": {
            source: "iana",
            extensions: ["pcx"]
        },
        "image/webp": {
            source: "apache",
            extensions: ["webp"]
        },
        "image/wmf": {
            source: "iana",
            extensions: ["wmf"]
        },
        "image/x-3ds": {
            source: "apache",
            extensions: ["3ds"]
        },
        "image/x-cmu-raster": {
            source: "apache",
            extensions: ["ras"]
        },
        "image/x-cmx": {
            source: "apache",
            extensions: ["cmx"]
        },
        "image/x-freehand": {
            source: "apache",
            extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
        },
        "image/x-icon": {
            source: "apache",
            compressible: !0,
            extensions: ["ico"]
        },
        "image/x-jng": {
            source: "nginx",
            extensions: ["jng"]
        },
        "image/x-mrsid-image": {
            source: "apache",
            extensions: ["sid"]
        },
        "image/x-ms-bmp": {
            source: "nginx",
            compressible: !0,
            extensions: ["bmp"]
        },
        "image/x-pcx": {
            source: "apache",
            extensions: ["pcx"]
        },
        "image/x-pict": {
            source: "apache",
            extensions: ["pic", "pct"]
        },
        "image/x-portable-anymap": {
            source: "apache",
            extensions: ["pnm"]
        },
        "image/x-portable-bitmap": {
            source: "apache",
            extensions: ["pbm"]
        },
        "image/x-portable-graymap": {
            source: "apache",
            extensions: ["pgm"]
        },
        "image/x-portable-pixmap": {
            source: "apache",
            extensions: ["ppm"]
        },
        "image/x-rgb": {
            source: "apache",
            extensions: ["rgb"]
        },
        "image/x-tga": {
            source: "apache",
            extensions: ["tga"]
        },
        "image/x-xbitmap": {
            source: "apache",
            extensions: ["xbm"]
        },
        "image/x-xcf": {
            compressible: !1
        },
        "image/x-xpixmap": {
            source: "apache",
            extensions: ["xpm"]
        },
        "image/x-xwindowdump": {
            source: "apache",
            extensions: ["xwd"]
        },
        "message/cpim": {
            source: "iana"
        },
        "message/delivery-status": {
            source: "iana"
        },
        "message/disposition-notification": {
            source: "iana",
            extensions: ["disposition-notification"]
        },
        "message/external-body": {
            source: "iana"
        },
        "message/feedback-report": {
            source: "iana"
        },
        "message/global": {
            source: "iana",
            extensions: ["u8msg"]
        },
        "message/global-delivery-status": {
            source: "iana",
            extensions: ["u8dsn"]
        },
        "message/global-disposition-notification": {
            source: "iana",
            extensions: ["u8mdn"]
        },
        "message/global-headers": {
            source: "iana",
            extensions: ["u8hdr"]
        },
        "message/http": {
            source: "iana",
            compressible: !1
        },
        "message/imdn+xml": {
            source: "iana",
            compressible: !0
        },
        "message/news": {
            source: "iana"
        },
        "message/partial": {
            source: "iana",
            compressible: !1
        },
        "message/rfc822": {
            source: "iana",
            compressible: !0,
            extensions: ["eml", "mime"]
        },
        "message/s-http": {
            source: "iana"
        },
        "message/sip": {
            source: "iana"
        },
        "message/sipfrag": {
            source: "iana"
        },
        "message/tracking-status": {
            source: "iana"
        },
        "message/vnd.si.simp": {
            source: "iana"
        },
        "message/vnd.wfa.wsc": {
            source: "iana",
            extensions: ["wsc"]
        },
        "model/3mf": {
            source: "iana",
            extensions: ["3mf"]
        },
        "model/e57": {
            source: "iana"
        },
        "model/gltf+json": {
            source: "iana",
            compressible: !0,
            extensions: ["gltf"]
        },
        "model/gltf-binary": {
            source: "iana",
            compressible: !0,
            extensions: ["glb"]
        },
        "model/iges": {
            source: "iana",
            compressible: !1,
            extensions: ["igs", "iges"]
        },
        "model/mesh": {
            source: "iana",
            compressible: !1,
            extensions: ["msh", "mesh", "silo"]
        },
        "model/mtl": {
            source: "iana",
            extensions: ["mtl"]
        },
        "model/obj": {
            source: "iana",
            extensions: ["obj"]
        },
        "model/step": {
            source: "iana"
        },
        "model/step+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["stpx"]
        },
        "model/step+zip": {
            source: "iana",
            compressible: !1,
            extensions: ["stpz"]
        },
        "model/step-xml+zip": {
            source: "iana",
            compressible: !1,
            extensions: ["stpxz"]
        },
        "model/stl": {
            source: "iana",
            extensions: ["stl"]
        },
        "model/vnd.collada+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["dae"]
        },
        "model/vnd.dwf": {
            source: "iana",
            extensions: ["dwf"]
        },
        "model/vnd.flatland.3dml": {
            source: "iana"
        },
        "model/vnd.gdl": {
            source: "iana",
            extensions: ["gdl"]
        },
        "model/vnd.gs-gdl": {
            source: "apache"
        },
        "model/vnd.gs.gdl": {
            source: "iana"
        },
        "model/vnd.gtw": {
            source: "iana",
            extensions: ["gtw"]
        },
        "model/vnd.moml+xml": {
            source: "iana",
            compressible: !0
        },
        "model/vnd.mts": {
            source: "iana",
            extensions: ["mts"]
        },
        "model/vnd.opengex": {
            source: "iana",
            extensions: ["ogex"]
        },
        "model/vnd.parasolid.transmit.binary": {
            source: "iana",
            extensions: ["x_b"]
        },
        "model/vnd.parasolid.transmit.text": {
            source: "iana",
            extensions: ["x_t"]
        },
        "model/vnd.pytha.pyox": {
            source: "iana"
        },
        "model/vnd.rosette.annotated-data-model": {
            source: "iana"
        },
        "model/vnd.sap.vds": {
            source: "iana",
            extensions: ["vds"]
        },
        "model/vnd.usdz+zip": {
            source: "iana",
            compressible: !1,
            extensions: ["usdz"]
        },
        "model/vnd.valve.source.compiled-map": {
            source: "iana",
            extensions: ["bsp"]
        },
        "model/vnd.vtu": {
            source: "iana",
            extensions: ["vtu"]
        },
        "model/vrml": {
            source: "iana",
            compressible: !1,
            extensions: ["wrl", "vrml"]
        },
        "model/x3d+binary": {
            source: "apache",
            compressible: !1,
            extensions: ["x3db", "x3dbz"]
        },
        "model/x3d+fastinfoset": {
            source: "iana",
            extensions: ["x3db"]
        },
        "model/x3d+vrml": {
            source: "apache",
            compressible: !1,
            extensions: ["x3dv", "x3dvz"]
        },
        "model/x3d+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["x3d", "x3dz"]
        },
        "model/x3d-vrml": {
            source: "iana",
            extensions: ["x3dv"]
        },
        "multipart/alternative": {
            source: "iana",
            compressible: !1
        },
        "multipart/appledouble": {
            source: "iana"
        },
        "multipart/byteranges": {
            source: "iana"
        },
        "multipart/digest": {
            source: "iana"
        },
        "multipart/encrypted": {
            source: "iana",
            compressible: !1
        },
        "multipart/form-data": {
            source: "iana",
            compressible: !1
        },
        "multipart/header-set": {
            source: "iana"
        },
        "multipart/mixed": {
            source: "iana"
        },
        "multipart/multilingual": {
            source: "iana"
        },
        "multipart/parallel": {
            source: "iana"
        },
        "multipart/related": {
            source: "iana",
            compressible: !1
        },
        "multipart/report": {
            source: "iana"
        },
        "multipart/signed": {
            source: "iana",
            compressible: !1
        },
        "multipart/vnd.bint.med-plus": {
            source: "iana"
        },
        "multipart/voice-message": {
            source: "iana"
        },
        "multipart/x-mixed-replace": {
            source: "iana"
        },
        "text/1d-interleaved-parityfec": {
            source: "iana"
        },
        "text/cache-manifest": {
            source: "iana",
            compressible: !0,
            extensions: ["appcache", "manifest"]
        },
        "text/calendar": {
            source: "iana",
            extensions: ["ics", "ifb"]
        },
        "text/calender": {
            compressible: !0
        },
        "text/cmd": {
            compressible: !0
        },
        "text/coffeescript": {
            extensions: ["coffee", "litcoffee"]
        },
        "text/cql": {
            source: "iana"
        },
        "text/cql-expression": {
            source: "iana"
        },
        "text/cql-identifier": {
            source: "iana"
        },
        "text/css": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["css"]
        },
        "text/csv": {
            source: "iana",
            compressible: !0,
            extensions: ["csv"]
        },
        "text/csv-schema": {
            source: "iana"
        },
        "text/directory": {
            source: "iana"
        },
        "text/dns": {
            source: "iana"
        },
        "text/ecmascript": {
            source: "iana"
        },
        "text/encaprtp": {
            source: "iana"
        },
        "text/enriched": {
            source: "iana"
        },
        "text/fhirpath": {
            source: "iana"
        },
        "text/flexfec": {
            source: "iana"
        },
        "text/fwdred": {
            source: "iana"
        },
        "text/gff3": {
            source: "iana"
        },
        "text/grammar-ref-list": {
            source: "iana"
        },
        "text/html": {
            source: "iana",
            compressible: !0,
            extensions: ["html", "htm", "shtml"]
        },
        "text/jade": {
            extensions: ["jade"]
        },
        "text/javascript": {
            source: "iana",
            compressible: !0
        },
        "text/jcr-cnd": {
            source: "iana"
        },
        "text/jsx": {
            compressible: !0,
            extensions: ["jsx"]
        },
        "text/less": {
            compressible: !0,
            extensions: ["less"]
        },
        "text/markdown": {
            source: "iana",
            compressible: !0,
            extensions: ["markdown", "md"]
        },
        "text/mathml": {
            source: "nginx",
            extensions: ["mml"]
        },
        "text/mdx": {
            compressible: !0,
            extensions: ["mdx"]
        },
        "text/mizar": {
            source: "iana"
        },
        "text/n3": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["n3"]
        },
        "text/parameters": {
            source: "iana",
            charset: "UTF-8"
        },
        "text/parityfec": {
            source: "iana"
        },
        "text/plain": {
            source: "iana",
            compressible: !0,
            extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
        },
        "text/provenance-notation": {
            source: "iana",
            charset: "UTF-8"
        },
        "text/prs.fallenstein.rst": {
            source: "iana"
        },
        "text/prs.lines.tag": {
            source: "iana",
            extensions: ["dsc"]
        },
        "text/prs.prop.logic": {
            source: "iana"
        },
        "text/raptorfec": {
            source: "iana"
        },
        "text/red": {
            source: "iana"
        },
        "text/rfc822-headers": {
            source: "iana"
        },
        "text/richtext": {
            source: "iana",
            compressible: !0,
            extensions: ["rtx"]
        },
        "text/rtf": {
            source: "iana",
            compressible: !0,
            extensions: ["rtf"]
        },
        "text/rtp-enc-aescm128": {
            source: "iana"
        },
        "text/rtploopback": {
            source: "iana"
        },
        "text/rtx": {
            source: "iana"
        },
        "text/sgml": {
            source: "iana",
            extensions: ["sgml", "sgm"]
        },
        "text/shaclc": {
            source: "iana"
        },
        "text/shex": {
            source: "iana",
            extensions: ["shex"]
        },
        "text/slim": {
            extensions: ["slim", "slm"]
        },
        "text/spdx": {
            source: "iana",
            extensions: ["spdx"]
        },
        "text/strings": {
            source: "iana"
        },
        "text/stylus": {
            extensions: ["stylus", "styl"]
        },
        "text/t140": {
            source: "iana"
        },
        "text/tab-separated-values": {
            source: "iana",
            compressible: !0,
            extensions: ["tsv"]
        },
        "text/troff": {
            source: "iana",
            extensions: ["t", "tr", "roff", "man", "me", "ms"]
        },
        "text/turtle": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["ttl"]
        },
        "text/ulpfec": {
            source: "iana"
        },
        "text/uri-list": {
            source: "iana",
            compressible: !0,
            extensions: ["uri", "uris", "urls"]
        },
        "text/vcard": {
            source: "iana",
            compressible: !0,
            extensions: ["vcard"]
        },
        "text/vnd.a": {
            source: "iana"
        },
        "text/vnd.abc": {
            source: "iana"
        },
        "text/vnd.ascii-art": {
            source: "iana"
        },
        "text/vnd.curl": {
            source: "iana",
            extensions: ["curl"]
        },
        "text/vnd.curl.dcurl": {
            source: "apache",
            extensions: ["dcurl"]
        },
        "text/vnd.curl.mcurl": {
            source: "apache",
            extensions: ["mcurl"]
        },
        "text/vnd.curl.scurl": {
            source: "apache",
            extensions: ["scurl"]
        },
        "text/vnd.debian.copyright": {
            source: "iana",
            charset: "UTF-8"
        },
        "text/vnd.dmclientscript": {
            source: "iana"
        },
        "text/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
        },
        "text/vnd.esmertec.theme-descriptor": {
            source: "iana",
            charset: "UTF-8"
        },
        "text/vnd.familysearch.gedcom": {
            source: "iana",
            extensions: ["ged"]
        },
        "text/vnd.ficlab.flt": {
            source: "iana"
        },
        "text/vnd.fly": {
            source: "iana",
            extensions: ["fly"]
        },
        "text/vnd.fmi.flexstor": {
            source: "iana",
            extensions: ["flx"]
        },
        "text/vnd.gml": {
            source: "iana"
        },
        "text/vnd.graphviz": {
            source: "iana",
            extensions: ["gv"]
        },
        "text/vnd.hans": {
            source: "iana"
        },
        "text/vnd.hgl": {
            source: "iana"
        },
        "text/vnd.in3d.3dml": {
            source: "iana",
            extensions: ["3dml"]
        },
        "text/vnd.in3d.spot": {
            source: "iana",
            extensions: ["spot"]
        },
        "text/vnd.iptc.newsml": {
            source: "iana"
        },
        "text/vnd.iptc.nitf": {
            source: "iana"
        },
        "text/vnd.latex-z": {
            source: "iana"
        },
        "text/vnd.motorola.reflex": {
            source: "iana"
        },
        "text/vnd.ms-mediapackage": {
            source: "iana"
        },
        "text/vnd.net2phone.commcenter.command": {
            source: "iana"
        },
        "text/vnd.radisys.msml-basic-layout": {
            source: "iana"
        },
        "text/vnd.senx.warpscript": {
            source: "iana"
        },
        "text/vnd.si.uricatalogue": {
            source: "iana"
        },
        "text/vnd.sosi": {
            source: "iana"
        },
        "text/vnd.sun.j2me.app-descriptor": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["jad"]
        },
        "text/vnd.trolltech.linguist": {
            source: "iana",
            charset: "UTF-8"
        },
        "text/vnd.wap.si": {
            source: "iana"
        },
        "text/vnd.wap.sl": {
            source: "iana"
        },
        "text/vnd.wap.wml": {
            source: "iana",
            extensions: ["wml"]
        },
        "text/vnd.wap.wmlscript": {
            source: "iana",
            extensions: ["wmls"]
        },
        "text/vtt": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["vtt"]
        },
        "text/x-asm": {
            source: "apache",
            extensions: ["s", "asm"]
        },
        "text/x-c": {
            source: "apache",
            extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
        },
        "text/x-component": {
            source: "nginx",
            extensions: ["htc"]
        },
        "text/x-fortran": {
            source: "apache",
            extensions: ["f", "for", "f77", "f90"]
        },
        "text/x-gwt-rpc": {
            compressible: !0
        },
        "text/x-handlebars-template": {
            extensions: ["hbs"]
        },
        "text/x-java-source": {
            source: "apache",
            extensions: ["java"]
        },
        "text/x-jquery-tmpl": {
            compressible: !0
        },
        "text/x-lua": {
            extensions: ["lua"]
        },
        "text/x-markdown": {
            compressible: !0,
            extensions: ["mkd"]
        },
        "text/x-nfo": {
            source: "apache",
            extensions: ["nfo"]
        },
        "text/x-opml": {
            source: "apache",
            extensions: ["opml"]
        },
        "text/x-org": {
            compressible: !0,
            extensions: ["org"]
        },
        "text/x-pascal": {
            source: "apache",
            extensions: ["p", "pas"]
        },
        "text/x-processing": {
            compressible: !0,
            extensions: ["pde"]
        },
        "text/x-sass": {
            extensions: ["sass"]
        },
        "text/x-scss": {
            extensions: ["scss"]
        },
        "text/x-setext": {
            source: "apache",
            extensions: ["etx"]
        },
        "text/x-sfv": {
            source: "apache",
            extensions: ["sfv"]
        },
        "text/x-suse-ymp": {
            compressible: !0,
            extensions: ["ymp"]
        },
        "text/x-uuencode": {
            source: "apache",
            extensions: ["uu"]
        },
        "text/x-vcalendar": {
            source: "apache",
            extensions: ["vcs"]
        },
        "text/x-vcard": {
            source: "apache",
            extensions: ["vcf"]
        },
        "text/xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xml"]
        },
        "text/xml-external-parsed-entity": {
            source: "iana"
        },
        "text/yaml": {
            compressible: !0,
            extensions: ["yaml", "yml"]
        },
        "video/1d-interleaved-parityfec": {
            source: "iana"
        },
        "video/3gpp": {
            source: "iana",
            extensions: ["3gp", "3gpp"]
        },
        "video/3gpp-tt": {
            source: "iana"
        },
        "video/3gpp2": {
            source: "iana",
            extensions: ["3g2"]
        },
        "video/av1": {
            source: "iana"
        },
        "video/bmpeg": {
            source: "iana"
        },
        "video/bt656": {
            source: "iana"
        },
        "video/celb": {
            source: "iana"
        },
        "video/dv": {
            source: "iana"
        },
        "video/encaprtp": {
            source: "iana"
        },
        "video/ffv1": {
            source: "iana"
        },
        "video/flexfec": {
            source: "iana"
        },
        "video/h261": {
            source: "iana",
            extensions: ["h261"]
        },
        "video/h263": {
            source: "iana",
            extensions: ["h263"]
        },
        "video/h263-1998": {
            source: "iana"
        },
        "video/h263-2000": {
            source: "iana"
        },
        "video/h264": {
            source: "iana",
            extensions: ["h264"]
        },
        "video/h264-rcdo": {
            source: "iana"
        },
        "video/h264-svc": {
            source: "iana"
        },
        "video/h265": {
            source: "iana"
        },
        "video/iso.segment": {
            source: "iana",
            extensions: ["m4s"]
        },
        "video/jpeg": {
            source: "iana",
            extensions: ["jpgv"]
        },
        "video/jpeg2000": {
            source: "iana"
        },
        "video/jpm": {
            source: "apache",
            extensions: ["jpm", "jpgm"]
        },
        "video/jxsv": {
            source: "iana"
        },
        "video/mj2": {
            source: "iana",
            extensions: ["mj2", "mjp2"]
        },
        "video/mp1s": {
            source: "iana"
        },
        "video/mp2p": {
            source: "iana"
        },
        "video/mp2t": {
            source: "iana",
            extensions: ["ts"]
        },
        "video/mp4": {
            source: "iana",
            compressible: !1,
            extensions: ["mp4", "mp4v", "mpg4"]
        },
        "video/mp4v-es": {
            source: "iana"
        },
        "video/mpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
        },
        "video/mpeg4-generic": {
            source: "iana"
        },
        "video/mpv": {
            source: "iana"
        },
        "video/nv": {
            source: "iana"
        },
        "video/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["ogv"]
        },
        "video/parityfec": {
            source: "iana"
        },
        "video/pointer": {
            source: "iana"
        },
        "video/quicktime": {
            source: "iana",
            compressible: !1,
            extensions: ["qt", "mov"]
        },
        "video/raptorfec": {
            source: "iana"
        },
        "video/raw": {
            source: "iana"
        },
        "video/rtp-enc-aescm128": {
            source: "iana"
        },
        "video/rtploopback": {
            source: "iana"
        },
        "video/rtx": {
            source: "iana"
        },
        "video/scip": {
            source: "iana"
        },
        "video/smpte291": {
            source: "iana"
        },
        "video/smpte292m": {
            source: "iana"
        },
        "video/ulpfec": {
            source: "iana"
        },
        "video/vc1": {
            source: "iana"
        },
        "video/vc2": {
            source: "iana"
        },
        "video/vnd.cctv": {
            source: "iana"
        },
        "video/vnd.dece.hd": {
            source: "iana",
            extensions: ["uvh", "uvvh"]
        },
        "video/vnd.dece.mobile": {
            source: "iana",
            extensions: ["uvm", "uvvm"]
        },
        "video/vnd.dece.mp4": {
            source: "iana"
        },
        "video/vnd.dece.pd": {
            source: "iana",
            extensions: ["uvp", "uvvp"]
        },
        "video/vnd.dece.sd": {
            source: "iana",
            extensions: ["uvs", "uvvs"]
        },
        "video/vnd.dece.video": {
            source: "iana",
            extensions: ["uvv", "uvvv"]
        },
        "video/vnd.directv.mpeg": {
            source: "iana"
        },
        "video/vnd.directv.mpeg-tts": {
            source: "iana"
        },
        "video/vnd.dlna.mpeg-tts": {
            source: "iana"
        },
        "video/vnd.dvb.file": {
            source: "iana",
            extensions: ["dvb"]
        },
        "video/vnd.fvt": {
            source: "iana",
            extensions: ["fvt"]
        },
        "video/vnd.hns.video": {
            source: "iana"
        },
        "video/vnd.iptvforum.1dparityfec-1010": {
            source: "iana"
        },
        "video/vnd.iptvforum.1dparityfec-2005": {
            source: "iana"
        },
        "video/vnd.iptvforum.2dparityfec-1010": {
            source: "iana"
        },
        "video/vnd.iptvforum.2dparityfec-2005": {
            source: "iana"
        },
        "video/vnd.iptvforum.ttsavc": {
            source: "iana"
        },
        "video/vnd.iptvforum.ttsmpeg2": {
            source: "iana"
        },
        "video/vnd.motorola.video": {
            source: "iana"
        },
        "video/vnd.motorola.videop": {
            source: "iana"
        },
        "video/vnd.mpegurl": {
            source: "iana",
            extensions: ["mxu", "m4u"]
        },
        "video/vnd.ms-playready.media.pyv": {
            source: "iana",
            extensions: ["pyv"]
        },
        "video/vnd.nokia.interleaved-multimedia": {
            source: "iana"
        },
        "video/vnd.nokia.mp4vr": {
            source: "iana"
        },
        "video/vnd.nokia.videovoip": {
            source: "iana"
        },
        "video/vnd.objectvideo": {
            source: "iana"
        },
        "video/vnd.radgamettools.bink": {
            source: "iana"
        },
        "video/vnd.radgamettools.smacker": {
            source: "iana"
        },
        "video/vnd.sealed.mpeg1": {
            source: "iana"
        },
        "video/vnd.sealed.mpeg4": {
            source: "iana"
        },
        "video/vnd.sealed.swf": {
            source: "iana"
        },
        "video/vnd.sealedmedia.softseal.mov": {
            source: "iana"
        },
        "video/vnd.uvvu.mp4": {
            source: "iana",
            extensions: ["uvu", "uvvu"]
        },
        "video/vnd.vivo": {
            source: "iana",
            extensions: ["viv"]
        },
        "video/vnd.youtube.yt": {
            source: "iana"
        },
        "video/vp8": {
            source: "iana"
        },
        "video/vp9": {
            source: "iana"
        },
        "video/webm": {
            source: "apache",
            compressible: !1,
            extensions: ["webm"]
        },
        "video/x-f4v": {
            source: "apache",
            extensions: ["f4v"]
        },
        "video/x-fli": {
            source: "apache",
            extensions: ["fli"]
        },
        "video/x-flv": {
            source: "apache",
            compressible: !1,
            extensions: ["flv"]
        },
        "video/x-m4v": {
            source: "apache",
            extensions: ["m4v"]
        },
        "video/x-matroska": {
            source: "apache",
            compressible: !1,
            extensions: ["mkv", "mk3d", "mks"]
        },
        "video/x-mng": {
            source: "apache",
            extensions: ["mng"]
        },
        "video/x-ms-asf": {
            source: "apache",
            extensions: ["asf", "asx"]
        },
        "video/x-ms-vob": {
            source: "apache",
            extensions: ["vob"]
        },
        "video/x-ms-wm": {
            source: "apache",
            extensions: ["wm"]
        },
        "video/x-ms-wmv": {
            source: "apache",
            compressible: !1,
            extensions: ["wmv"]
        },
        "video/x-ms-wmx": {
            source: "apache",
            extensions: ["wmx"]
        },
        "video/x-ms-wvx": {
            source: "apache",
            extensions: ["wvx"]
        },
        "video/x-msvideo": {
            source: "apache",
            extensions: ["avi"]
        },
        "video/x-sgi-movie": {
            source: "apache",
            extensions: ["movie"]
        },
        "video/x-smv": {
            source: "apache",
            extensions: ["smv"]
        },
        "x-conference/x-cooltalk": {
            source: "apache",
            extensions: ["ice"]
        },
        "x-shader/x-fragment": {
            compressible: !0
        },
        "x-shader/x-vertex": {
            compressible: !0
        }
    }
});
var zz0 = U((xp3, Ez0) => {
    /*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015-2022 Douglas Christopher Wilson
     * MIT Licensed
     */
    Ez0.exports = Cz0()
});
var Nz0 = U((eR9) => {
    /*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
    var HkA = zz0(),
        nR9 = UA("path").extname,
        Uz0 = /^\s*([^;\s]*)(?:;|\s|$)/,
        aR9 = /^text\//i;
    eR9.charset = $z0;
    eR9.charsets = {
        lookup: $z0
    };
    eR9.contentType = sR9;
    eR9.extension = rR9;
    eR9.extensions = Object.create(null);
    eR9.lookup = oR9;
    eR9.types = Object.create(null);
    tR9(eR9.extensions, eR9.types);

    function $z0(A) {
        if (!A || typeof A !== "string") return !1;
        var Q = Uz0.exec(A),
            B = Q && HkA[Q[1].toLowerCase()];
        if (B && B.charset) return B.charset;
        if (Q && aR9.test(Q[1])) return "UTF-8";
        return !1
    }

    function sR9(A) {
        if (!A || typeof A !== "string") return !1;
        var Q = A.indexOf("/") === -1 ? eR9.lookup(A) : A;
        if (!Q) return !1;
        if (Q.indexOf("charset") === -1) {
            var B = eR9.charset(Q);
            if (B) Q += "; charset=" + B.toLowerCase()
        }
        return Q
    }

    function rR9(A) {
        if (!A || typeof A !== "string") return !1;
        var Q = Uz0.exec(A),
            B = Q && eR9.extensions[Q[1].toLowerCase()];
        if (!B || !B.length) return !1;
        return B[0]
    }

    function oR9(A) {
        if (!A || typeof A !== "string") return !1;
        var Q = nR9("x." + A).toLowerCase().substr(1);
        if (!Q) return !1;
        return eR9.types[Q] || !1
    }

    function tR9(A, Q) {
        var B = ["nginx", "apache", void 0, "iana"];
        Object.keys(HkA).forEach(function(Z) {
            var I = HkA[Z],
                Y = I.extensions;
            if (!Y || !Y.length) return;
            A[Z] = Y;
            for (var J = 0; J < Y.length; J++) {
                var W = Y[J];
                if (Q[W]) {
                    var X = B.indexOf(HkA[Q[W]].source),
                        F = B.indexOf(I.source);
                    if (Q[W] !== "application/octet-stream" && (X > F || X === F && Q[W].substr(0, 12) === "application/")) continue
                }
                Q[W] = Z
            }
        })
    }
});
var Mz0 = U((bp3, Lz0) => {
    Lz0.exports = GT9;
